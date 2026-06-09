"use client";
import { useState } from "react";

const API = "http://localhost:3002";

export default function ContextInspector({ agents }: { agents: any[] }) {
    const [selectedId, setSelectedId] = useState<string>("");
    const [context, setContext] = useState<any>(null);
    const [loading, setLoading] = useState(false);

    async function inspect(agentId: string) {
        setSelectedId(agentId);
        setLoading(true);
        const res = await fetch(`${API}/context/${agentId}`);
        const data = await res.json();
        setContext(data);
        setLoading(false);
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {agents.map(a => (
                    <button key={a.id} onClick={() => inspect(a.id)} style={{
                        fontSize: "12px", padding: "4px 12px", borderRadius: "4px", border: "1px solid",
                        borderColor: selectedId === a.id ? "#fff" : "#333",
                        backgroundColor: selectedId === a.id ? "#ffffff10" : "transparent",
                        color: selectedId === a.id ? "#fff" : "#666",
                        cursor: "pointer",
                    }}>{a.name}</button>
                ))}
            </div>
            {loading && <p style={{ color: "#555", fontSize: "12px" }}>Loading...</p>}
            {context && !loading && (
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    <Section title="Suggested Actions">
                        {context.suggested.length === 0
                            ? <p style={{ color: "#444", fontSize: "12px" }}>No suggestions.</p>
                            : context.suggested.map((s: any, i: number) => (
                                <div key={i} style={{ backgroundColor: "#0e0e0e", border: "1px solid #1e1e1e", borderRadius: "4px", padding: "10px 12px" }}>
                                    <div style={{ color: "#10b981", fontSize: "11px", marginBottom: "4px" }}>{s.action.toUpperCase()}</div>
                                    <div style={{ color: "#aaa", fontSize: "12px" }}>{s.reason}</div>
                                </div>
                            ))
                        }
                    </Section>
                    <Section title="Network State">
                        <Row label="Hot topics" value={context.network.hotTopics.map((t: any) => t.tag).join(", ") || "—"} />
                        <Row label="Cold topics" value={context.network.coldTopics.map((t: any) => t.tag).join(", ") || "—"} />
                        <Row label="Open threads" value={String(context.network.openThreads.length)} />
                        <Row label="Contested" value={String(context.network.contested.length)} />
                        <Row label="Recent artifacts (24h)" value={String(context.network.recentArtifacts.length)} />
                    </Section>
                    <Section title="Agent State">
                        <Row label="Citation score" value={context.agent.citationScore} />
                        <Row label="Collab score" value={context.agent.collaborationScore} />
                        <Row label="Novelty score" value={context.agent.personalNoveltyScore?.toFixed(2)} />
                        <Row label="Avg recent novelty" value={context.agent.avgNovelty?.toFixed(2)} />
                        <Row label="Recent artifacts" value={String(context.agent.recentWork?.length ?? 0)} />
                    </Section>
                </div>
            )}
        </div>
    );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div>
            <div style={{ color: "#444", fontSize: "10px", marginBottom: "6px", letterSpacing: "0.1em" }}>{title.toUpperCase()}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>{children}</div>
        </div>
    );
}

function Row({ label, value }: { label: string; value: any }) {
    return (
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", padding: "4px 0", borderBottom: "1px solid #111" }}>
            <span style={{ color: "#666" }}>{label}</span>
            <span style={{ color: "#ccc" }}>{value}</span>
        </div>
    );
}
