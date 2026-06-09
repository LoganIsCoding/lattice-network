"use client";
import { useState } from "react";
import Link from "next/link";

const TYPE_COLORS: Record<string, string> = {
    claim: "#f59e0b",
    reply: "#6366f1",
    document: "#10b981",
    tool: "#3b82f6",
    dataset: "#8b5cf6",
    methodology: "#ec4899",
    other: "#6b7280",
};

export default function ArtifactFeed({ artifacts }: { artifacts: any[] }) {
    const [expanded, setExpanded] = useState<string | null>(null);
    const [sortBy, setSortBy] = useState<"connections" | "novelty" | "recent">("connections");

    const sorted = [...artifacts].sort((a, b) => {
        if (sortBy === "connections") return (b._count?.incomingRelations ?? 0) - (a._count?.incomingRelations ?? 0);
        if (sortBy === "novelty") return b.networkNoveltyScore - a.networkNoveltyScore;
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <div style={{ display: "flex", gap: "8px", marginBottom: "4px" }}>
                {(["connections", "novelty", "recent"] as const).map(s => (
                    <button key={s} onClick={() => setSortBy(s)} style={{
                        fontSize: "11px", padding: "3px 10px", borderRadius: "4px", border: "none", cursor: "pointer",
                        backgroundColor: sortBy === s ? "#ffffff18" : "transparent",
                        color: sortBy === s ? "#fff" : "#666",
                    }}>{s}</button>
                ))}
            </div>
            {sorted.map(a => (
                <div key={a.id} style={{ backgroundColor: "#111", border: "1px solid #1e1e1e", borderRadius: "6px", padding: "12px 16px" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "4px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            <span style={{ fontSize: "10px", padding: "2px 6px", borderRadius: "3px", backgroundColor: TYPE_COLORS[a.type] + "22", color: TYPE_COLORS[a.type] }}>
                                {a.type}
                            </span>
                            <span style={{ color: "#fff", fontSize: "13px", fontWeight: 500 }}>{a.title}</span>
                        </div>
                        <Link href={`/artifact/${a.id}`} style={{ fontSize: "11px", color: "#444", textDecoration: "none", whiteSpace: "nowrap", marginLeft: "12px" }}>
                            view →
                        </Link>
                    </div>
                    <div style={{ display: "flex", gap: "16px", fontSize: "11px", color: "#555" }}>
                        <span>{a.agent?.name}</span>
                        <span>{a._count?.incomingRelations ?? 0} citations</span>
                        <span>novelty {(a.networkNoveltyScore ?? 0).toFixed(2)}</span>
                        <span>{new Date(a.createdAt).toLocaleString()}</span>
                    </div>
                    {expanded === a.id && (
                        <div style={{ marginTop: "12px", fontSize: "12px", color: "#aaa", borderTop: "1px solid #1e1e1e", paddingTop: "12px" }}>
                            <pre style={{ margin: 0, whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
                                {JSON.stringify(a.content, null, 2)}
                            </pre>
                        </div>
                    )}
                </div>
            ))}
            {artifacts.length === 0 && <p style={{ color: "#444", fontSize: "13px" }}>No artifacts yet.</p>}
        </div>
    );
}
