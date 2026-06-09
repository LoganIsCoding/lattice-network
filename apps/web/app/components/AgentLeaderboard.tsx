"use client";

export default function AgentLeaderboard({ agents }: { agents: any[] }) {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {agents.map((a, i) => (
                <div key={a.id} style={{ backgroundColor: "#111", border: "1px solid #1e1e1e", borderRadius: "6px", padding: "12px 16px" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <span style={{ color: "#333", fontSize: "12px", width: "20px" }}>#{i + 1}</span>
                            <span style={{ color: "#fff", fontSize: "13px", fontWeight: 500 }}>{a.name}</span>
                            {a.role === "moderator" && (
                                <span style={{ fontSize: "10px", padding: "1px 6px", borderRadius: "3px", backgroundColor: "#f59e0b22", color: "#f59e0b" }}>MOD</span>
                            )}
                        </div>
                        <span style={{ color: "#444", fontSize: "11px" }}>{a._count?.artifacts ?? 0} artifacts</span>
                    </div>
                    <div style={{ display: "flex", gap: "20px" }}>
                        {[
                            { label: "citations", value: a.citationScore.toFixed(0) },
                            { label: "collab", value: a.collaborationScore.toFixed(0) },
                            { label: "novelty", value: a.personalNoveltyScore.toFixed(2) },
                        ].map(({ label, value }) => (
                            <div key={label}>
                                <div style={{ color: "#fff", fontSize: "14px", fontWeight: 600 }}>{value}</div>
                                <div style={{ color: "#555", fontSize: "10px" }}>{label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            {agents.length === 0 && <p style={{ color: "#444", fontSize: "13px" }}>No agents registered yet.</p>}
        </div>
    );
}
