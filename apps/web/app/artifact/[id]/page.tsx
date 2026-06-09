import Link from "next/link";

const API = "http://localhost:3002";

const TYPE_COLORS: Record<string, string> = {
    claim: "#f59e0b", reply: "#6366f1", document: "#10b981",
    tool: "#3b82f6", dataset: "#8b5cf6", methodology: "#ec4899", other: "#6b7280",
};

const REL_COLORS: Record<string, string> = {
    cites: "#555", builds_on: "#10b981", contradicts: "#ef4444",
    refutes: "#ef4444", extends: "#6366f1", inspired_by: "#f59e0b",
};

async function getArtifact(id: string) {
    const res = await fetch(`${API}/artifacts/${id}`, { cache: "no-store" });
    if (!res.ok) return null;
    return res.json();
}

export default async function ArtifactPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const artifact = await getArtifact(id);
    if (!artifact) return <div style={{ padding: "48px", color: "#444" }}>Artifact not found.</div>;

    return (
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "32px 24px" }}>
            <Link href="/" style={{ color: "#444", fontSize: "12px", textDecoration: "none", display: "block", marginBottom: "24px" }}>
                ← back to network
            </Link>

            {/* Main artifact */}
            <div style={{ backgroundColor: "#111", border: "1px solid #1e1e1e", borderRadius: "6px", padding: "20px 24px", marginBottom: "32px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                    <span style={{ fontSize: "10px", padding: "2px 6px", borderRadius: "3px", backgroundColor: (TYPE_COLORS[artifact.type] ?? "#6b7280") + "22", color: TYPE_COLORS[artifact.type] ?? "#6b7280" }}>
                        {artifact.type}
                    </span>
                    <span style={{ color: "#fff", fontSize: "16px", fontWeight: 600 }}>{artifact.title}</span>
                </div>
                <div style={{ display: "flex", gap: "16px", fontSize: "11px", color: "#555", marginBottom: "16px" }}>
                    <span>{artifact.agent?.name}</span>
                    <span>{new Date(artifact.createdAt).toLocaleString()}</span>
                    <span>novelty {(artifact.networkNoveltyScore ?? 0).toFixed(2)}</span>
                </div>
                <pre style={{ margin: 0, fontSize: "12px", color: "#aaa", whiteSpace: "pre-wrap", wordBreak: "break-word", backgroundColor: "#0a0a0a", padding: "12px", borderRadius: "4px" }}>
                    {JSON.stringify(artifact.content, null, 2)}
                </pre>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }}>
                {/* Outgoing relationships — what this artifact points to */}
                <Section title="References" count={artifact.outgoingRelations?.length ?? 0}>
                    {artifact.outgoingRelations?.length === 0
                        ? <Empty>No outgoing references.</Empty>
                        : artifact.outgoingRelations?.map((r: any) => (
                            <RelCard key={r.id} rel={r.type} artifact={r.to} direction="out" />
                        ))
                    }
                </Section>

                {/* Incoming relationships — what cites this artifact */}
                <Section title="Cited by" count={artifact.incomingRelations?.length ?? 0}>
                    {artifact.incomingRelations?.length === 0
                        ? <Empty>Nobody has cited this yet.</Empty>
                        : artifact.incomingRelations?.map((r: any) => (
                            <RelCard key={r.id} rel={r.type} artifact={r.from} direction="in" />
                        ))
                    }
                </Section>
            </div>

            {/* Replies */}
            {artifact.replies?.length > 0 && (
                <div style={{ marginTop: "32px" }}>
                    <SectionHeader title="Replies" count={artifact.replies.length} />
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "12px" }}>
                        {artifact.replies.map((r: any) => (
                            <Link key={r.id} href={`/artifact/${r.id}`} style={{ textDecoration: "none" }}>
                                <div style={{ backgroundColor: "#111", border: "1px solid #1e1e1e", borderRadius: "6px", padding: "12px 16px" }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                                        <span style={{ fontSize: "10px", padding: "2px 6px", borderRadius: "3px", backgroundColor: "#6366f122", color: "#6366f1" }}>reply</span>
                                        <span style={{ color: "#fff", fontSize: "13px" }}>{r.title}</span>
                                    </div>
                                    <div style={{ fontSize: "11px", color: "#555" }}>{r.agent?.name} · {new Date(r.createdAt).toLocaleString()}</div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            )}

            {/* Tags */}
            {artifact.tags?.length > 0 && (
                <div style={{ marginTop: "24px", display: "flex", gap: "6px", flexWrap: "wrap" }}>
                    {artifact.tags.map((t: any) => (
                        <span key={t.tagId} style={{ fontSize: "11px", padding: "2px 8px", borderRadius: "3px", backgroundColor: "#ffffff08", color: "#666" }}>
                            {t.tag?.name}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
}

function Section({ title, count, children }: { title: string; count: number; children: React.ReactNode }) {
    return (
        <div>
            <SectionHeader title={title} count={count} />
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "12px" }}>{children}</div>
        </div>
    );
}

function SectionHeader({ title, count }: { title: string; count: number }) {
    return (
        <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
            <span style={{ fontSize: "11px", color: "#555", letterSpacing: "0.1em" }}>{title.toUpperCase()}</span>
            <span style={{ fontSize: "11px", color: "#333" }}>{count}</span>
        </div>
    );
}

function RelCard({ rel, artifact, direction }: { rel: string; artifact: any; direction: "in" | "out" }) {
    const color = REL_COLORS[rel] ?? "#555";
    return (
        <Link href={`/artifact/${artifact.id}`} style={{ textDecoration: "none" }}>
            <div style={{ backgroundColor: "#111", border: "1px solid #1e1e1e", borderRadius: "6px", padding: "10px 14px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "4px" }}>
                    <span style={{ fontSize: "10px", color, borderBottom: `1px solid ${color}` }}>{rel.replace("_", " ")}</span>
                    <span style={{ fontSize: "10px", color: "#333" }}>{direction === "out" ? "→" : "←"}</span>
                </div>
                <div style={{ color: "#ccc", fontSize: "12px" }}>{artifact.title}</div>
                <div style={{ color: "#444", fontSize: "11px", marginTop: "2px" }}>{artifact.type}</div>
            </div>
        </Link>
    );
}

function Empty({ children }: { children: React.ReactNode }) {
    return <p style={{ color: "#333", fontSize: "12px", margin: 0 }}>{children}</p>;
}
