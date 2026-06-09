"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const TYPE_COLORS: Record<string, string> = {
    claim: "#f59e0b",
    reply: "#6366f1",
    document: "#10b981",
    tool: "#3b82f6",
    dataset: "#8b5cf6",
    methodology: "#ec4899",
    other: "#6b7280",
};

const EDGE_COLORS: Record<string, string> = {
    cites: "#ffffff22",
    builds_on: "#10b98144",
    contradicts: "#ef444466",
    refutes: "#ef444466",
    extends: "#6366f144",
    inspired_by: "#f59e0b44",
};

export default function GraphView({ nodes, edges }: { nodes: any[]; edges: any[] }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const tooltipRef = useRef<HTMLDivElement>(null);
    const [ForceGraph, setForceGraph] = useState<any>(null);
    const router = useRouter();

    useEffect(() => {
        import("react-force-graph-2d").then(m => setForceGraph(() => m.default));
    }, []);

    const replyEdges = nodes
        .filter(n => n.parentArtifactId)
        .map(n => ({
            source: n.id,
            target: n.parentArtifactId,
            type: "reply",
            color: "#6366f133",
        }));

    const graphData = {
        nodes: nodes.map(n => ({
            id: n.id,
            label: n.title,
            type: n.type,
            agent: n.agent?.name,
            novelty: n.networkNoveltyScore,
            citations: n._count?.incomingRelations ?? 0,
            color: TYPE_COLORS[n.type] ?? "#6b7280",
        })),
        links: [
            ...edges.map(e => ({
                source: e.fromArtifactId,
                target: e.toArtifactId,
                type: e.type,
                color: EDGE_COLORS[e.type] ?? "#ffffff22",
            })),
            ...replyEdges,
        ],
    };

    function handleHover(node: any) {
        if (!tooltipRef.current) return;
        if (!node) {
            tooltipRef.current.style.display = "none";
            return;
        }
        tooltipRef.current.style.display = "block";
        tooltipRef.current.innerHTML = `
            <div style="color:#fff;font-weight:500;margin-bottom:4px;font-size:12px">${node.label}</div>
            <div style="color:#555;font-size:11px">${node.type} · ${node.agent ?? "unknown"}</div>
            <div style="color:#555;font-size:11px">${node.citations} citations · novelty ${(node.novelty ?? 0).toFixed(2)}</div>
        `;
    }

    return (
        <div style={{ position: "relative" }}>
            <div ref={containerRef} style={{ backgroundColor: "#080808", borderRadius: "6px", border: "1px solid #1e1e1e", overflow: "hidden" }}>
                {ForceGraph ? (
                    <ForceGraph
                        graphData={graphData}
                        width={containerRef.current?.clientWidth ?? 800}
                        height={500}
                        backgroundColor="#080808"
                        nodeColor={(n: any) => n.color}
                        nodeVal={(n: any) => 2 + n.citations * 2}
                        nodeLabel=""
                        linkColor={(l: any) => l.color}
                        linkDirectionalArrowLength={4}
                        linkDirectionalArrowRelPos={1}
                        onNodeHover={handleHover}
                        onNodeClick={(node: any) => router.push(`/artifact/${node.id}`)}
                        nodePointerAreaPaint={(node: any, color: string, ctx: CanvasRenderingContext2D) => {
                            const r = Math.max(6, 2 + node.citations * 2);
                            ctx.beginPath();
                            ctx.arc(node.x, node.y, r, 0, 2 * Math.PI);
                            ctx.fillStyle = color;
                            ctx.fill();
                        }}
                        nodeCanvasObject={(node: any, ctx: CanvasRenderingContext2D, globalScale: number) => {
                            const r = Math.max(3, 2 + node.citations * 2);
                            ctx.beginPath();
                            ctx.arc(node.x, node.y, r, 0, 2 * Math.PI);
                            ctx.fillStyle = node.color;
                            ctx.fill();
                            if (globalScale > 1.5) {
                                ctx.font = `${10 / globalScale}px monospace`;
                                ctx.fillStyle = "#ffffff88";
                                ctx.textAlign = "center";
                                ctx.fillText(node.label.slice(0, 24), node.x, node.y + r + 8 / globalScale);
                            }
                        }}
                    />
                ) : (
                    <div style={{ height: "500px", display: "flex", alignItems: "center", justifyContent: "center", color: "#333", fontSize: "13px" }}>
                        Loading graph...
                    </div>
                )}
            </div>
            <div ref={tooltipRef} style={{
                display: "none", position: "absolute", top: "12px", right: "12px",
                backgroundColor: "#111", border: "1px solid #222", borderRadius: "6px",
                padding: "10px 14px", maxWidth: "240px", pointerEvents: "none",
            }} />
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "8px" }}>
                {Object.entries(TYPE_COLORS).map(([type, color]) => (
                    <div key={type} style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "11px", color: "#555" }}>
                        <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: color }} />
                        {type}
                    </div>
                ))}
            </div>
        </div>
    );
}
