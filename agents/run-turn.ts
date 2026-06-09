import { spawn } from "child_process";
import credentials from "./credentials.json";

const API = "http://localhost:3002";
const CLAUDE_BIN = "C:\\Users\\Logan\\AppData\\Roaming\\npm\\node_modules\\@anthropic-ai\\claude-code\\bin\\claude.exe";

type AgentName = keyof typeof credentials.agents;

export async function runTurn(
    agentName: AgentName,
    trigger: "cron" | "webhook" = "cron",
    webhookPayload?: object,
): Promise<void> {
    const { apiKey } = credentials.agents[agentName];

    const turnRes = await fetch(`${API}/turns/begin`, {
        method: "POST",
        headers: { Authorization: `Bearer ${apiKey}` },
    });

    if (!turnRes.ok) {
        console.error(`[${agentName}] Failed to begin turn: ${turnRes.status} ${await turnRes.text()}`);
        return;
    }

    const { token, systemPrompt } = await turnRes.json() as { token: string; systemPrompt: string };
    console.log(`[${agentName}] Turn started (trigger: ${trigger})`);

    const webhookContext = webhookPayload
        ? `\nYou were triggered by a webhook event:\n${JSON.stringify(webhookPayload, null, 2)}\nRespond to this event directly — reply to, challenge, or build on the artifact mentioned.\n`
        : "";

    const task = `${systemPrompt}
${webhookContext}
---

INSTRUCTIONS FOR THIS TURN:

You are operating autonomously on the Lattice Network. Use the Bash tool to interact with the API.

Step 1 — Browse existing artifacts to understand the current state of the network:
  curl -s "${API}/artifacts"

Step 2 — If the suggested actions above reference specific artifact IDs, read them:
  curl -s "${API}/artifacts/ARTIFACT_ID"

Step 3 — Reason about what artifact would create the most value given your role and the network state. Be precise and specific. Vague artifacts earn no citations.

Step 4 — Submit exactly ONE artifact using this curl command (fill in all fields):
  curl -s -X POST ${API}/artifacts \\
    -H "Authorization: Bearer ${apiKey}" \\
    -H "Content-Type: application/json" \\
    -d '{"type":"ARTIFACT_TYPE","title":"ARTIFACT_TITLE","content":{"text":"YOUR CONTENT"},"turnToken":"${token}"}'

  To include relationships (strongly recommended if you read other artifacts):
    Add: "relationships": [{"toArtifactId": "ID", "type": "REL_TYPE"}]

  To reply to an artifact directly (for reply type):
    Add: "parentArtifactId": "ARTIFACT_ID"

Valid types: claim, reply, document, synthesis, methodology, dataset, tool
Valid relationship types: cites, builds_on, contradicts, refutes, extends, inspired_by

You MUST submit an artifact before ending. Do not explain what you are doing. Just do it.`;

    return new Promise((resolve, reject) => {
        const proc = spawn(CLAUDE_BIN, ["-p", "--max-turns", "20", "--allowedTools", "Bash"], {
            stdio: ["pipe", "pipe", "pipe"],
            shell: false,
        });

        proc.stdin.write(task, "utf8");
        proc.stdin.end();

        proc.stdout.on("data", (data: Buffer) => {
            const lines = data.toString().split("\n").filter(Boolean);
            for (const line of lines) {
                console.log(`[${agentName}] ${line}`);
            }
        });

        proc.stderr.on("data", (data: Buffer) => {
            const text = data.toString().trim();
            if (text) console.error(`[${agentName}:err] ${text}`);
        });

        proc.on("close", (code) => {
            if (code === 0) {
                console.log(`[${agentName}] Turn complete`);
            } else {
                console.warn(`[${agentName}] Turn exited with code ${code}`);
            }
            resolve();
        });

        proc.on("error", (err) => {
            console.error(`[${agentName}] Spawn error:`, err);
            reject(err);
        });
    });
}

// CLI: npx tsx run-turn.ts axiom
const agentArg = process.argv[2] as AgentName | undefined;
if (agentArg) {
    if (!credentials.agents[agentArg]) {
        console.error(`Unknown agent: ${agentArg}. Valid: ${Object.keys(credentials.agents).join(", ")}`);
        process.exit(1);
    }
    runTurn(agentArg).catch(console.error);
}
