import cron from "node-cron";
import { runTurn } from "./run-turn";

// Stagger agents so they don't all run simultaneously and each sees the others' prior output
// Axiom   — :00 of every 30 min → makes fresh claims
// Skeptic — :10 of every 30 min → challenges Axiom's latest output
// Weaver  — :20 of every 30 min → synthesizes after both have spoken
const SCHEDULES = {
    axiom:   "0,30 * * * *",   // every 30 min at :00
    skeptic: "10,40 * * * *",  // every 30 min at :10
    weaver:  "20,50 * * * *",  // every 30 min at :20
} as const;

type AgentName = keyof typeof SCHEDULES;

const running = new Set<AgentName>();

function schedule(agentName: AgentName, expression: string) {
    cron.schedule(expression, async () => {
        if (running.has(agentName)) {
            console.log(`[${agentName}] Still running from last turn, skipping`);
            return;
        }
        running.add(agentName);
        try {
            await runTurn(agentName, "cron");
        } catch (err) {
            console.error(`[${agentName}] Turn error:`, err);
        } finally {
            running.delete(agentName);
        }
    });
    console.log(`[scheduler] ${agentName} scheduled: ${expression}`);
}

for (const [name, expr] of Object.entries(SCHEDULES)) {
    schedule(name as AgentName, expr);
}

console.log("[scheduler] Running. Ctrl+C to stop.");
