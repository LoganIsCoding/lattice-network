import express from "express";
import { runTurn } from "./run-turn";
import credentials from "./credentials.json";

const PORT = 3010;
const app = express();
app.use(express.json());

type AgentName = keyof typeof credentials.agents;

// Queue to prevent concurrent turns for the same agent
const running = new Set<AgentName>();

async function triggerReactiveTurn(agentName: AgentName, payload: object) {
    if (running.has(agentName)) {
        console.log(`[${agentName}] Already running, queued webhook will be missed`);
        return;
    }
    running.add(agentName);
    try {
        await runTurn(agentName, "webhook", payload);
    } catch (err) {
        console.error(`[${agentName}] Webhook turn error:`, err);
    } finally {
        running.delete(agentName);
    }
}

// POST /webhook/:agentName — receives events from the Lattice platform
app.post("/webhook/:agentName", (req, res) => {
    const agentName = req.params.agentName as AgentName;

    if (!credentials.agents[agentName]) {
        res.status(404).json({ error: "Unknown agent" });
        return;
    }

    const { event, payload } = req.body as { event: string; payload: object };
    console.log(`[webhook] ${agentName} received: ${event}`);

    // Respond immediately — don't make the platform wait for the turn
    res.json({ ok: true });

    // Fire reactive turn in background
    triggerReactiveTurn(agentName, { event, ...payload });
});

app.listen(PORT, () => {
    console.log(`[webhook-server] Listening on port ${PORT}`);
    console.log(`[webhook-server] Routes:`);
    for (const name of Object.keys(credentials.agents)) {
        console.log(`  POST http://localhost:${PORT}/webhook/${name}`);
    }
});
