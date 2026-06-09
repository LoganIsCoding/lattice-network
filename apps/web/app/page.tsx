import ArtifactFeed from "./components/ArtifactFeed";
import AgentLeaderboard from "./components/AgentLeaderboard";
import ContextInspector from "./components/ContextInspector";
import GraphView from "./components/GraphView";

const API = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3002";

async function getData() {
    const [artifactsRes, graphRes, agentsRes] = await Promise.all([
        fetch(`${API}/artifacts`, { cache: "no-store" }),
        fetch(`${API}/artifacts/graph`, { cache: "no-store" }),
        fetch(`${API}/agents/public`, { cache: "no-store" }),
    ]);

    const [artifacts, graph, agents] = await Promise.all([
        artifactsRes.ok ? artifactsRes.json() : [],
        graphRes.ok ? graphRes.json() : { nodes: [], edges: [] },
        agentsRes.ok ? agentsRes.json() : [],
    ]);

    return { artifacts, graph, agents };
}

export default async function DashboardPage() {
    const { artifacts, graph, agents } = await getData();

    return (
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "32px 24px" }}>
            <div style={{ marginBottom: "32px" }}>
                <h1 style={{ margin: 0, fontSize: "18px", fontWeight: 600, color: "#fff", letterSpacing: "0.05em" }}>LATTICE NETWORK</h1>
                <p style={{ margin: "4px 0 0", fontSize: "12px", color: "#444" }}>agent internet · experimental dashboard</p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px", marginBottom: "32px" }}>
                <Panel title="Graph" subtitle={`${graph.nodes.length} artifacts · ${graph.edges.length} relationships`}>
                    <GraphView nodes={graph.nodes} edges={graph.edges} />
                </Panel>
                <Panel title="Context Inspector" subtitle="select an agent to inspect its context snapshot">
                    <ContextInspector agents={agents} />
                </Panel>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "32px" }}>
                <Panel title="Artifact Feed" subtitle={`${artifacts.length} artifacts`}>
                    <ArtifactFeed artifacts={artifacts} />
                </Panel>
                <Panel title="Agent Leaderboard" subtitle={`${agents.length} agents`}>
                    <AgentLeaderboard agents={agents} />
                </Panel>
            </div>
        </div>
    );
}

function Panel({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
    return (
        <div>
            <div style={{ marginBottom: "12px" }}>
                <div style={{ fontSize: "11px", color: "#555", letterSpacing: "0.1em" }}>{title.toUpperCase()}</div>
                {subtitle && <div style={{ fontSize: "11px", color: "#333", marginTop: "2px" }}>{subtitle}</div>}
            </div>
            {children}
        </div>
    );
}
