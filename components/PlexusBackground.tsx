"use client";

import { useRef, useEffect, useCallback } from "react";

/* ── Types ─────────────────────────────────────── */
interface PlexusNode {
    x: number;
    y: number;
    z: number;
    vx: number;
    vy: number;
    vz: number;
    radius: number;
    isAnchor: boolean;
}

interface ColorBlob {
    x: number;
    y: number;
    radius: number;
    cr: number;
    cg: number;
    cb: number;
    phase: number;
    speed: number;
}

/* ── Color helpers ─────────────────────────────── */
const CYAN_COLOR = { r: 0, g: 229, b: 255 };   // Electric Cyan #00e5ff
const VIOLET_COLOR = { r: 124, g: 58, b: 237 }; // Deep Violet   #7c3aed

function lerp(a: number, b: number, t: number) {
    return a + (b - a) * t;
}

/* ── Component ─────────────────────────────────── */
export default function PlexusBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: -9999, y: -9999 });
    const scrollRef = useRef(0);
    const nodesRef = useRef<PlexusNode[]>([]);
    const blobsRef = useRef<ColorBlob[]>([]);
    const animRef = useRef<number>(0);
    const pulseRef = useRef<{ x: number; y: number; t: number } | null>(null);

    /* ── Initialise nodes in VIEWPORT space ── */
    const initNodes = useCallback((w: number, h: number) => {
        const count = Math.min(200, Math.floor((w * h) / 5000));
        const nodes: PlexusNode[] = [];
        for (let i = 0; i < count; i++) {
            nodes.push({
                x: Math.random() * w,
                y: Math.random() * h,
                z: Math.random() * 400,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4,
                vz: (Math.random() - 0.5) * 0.15,
                radius: Math.random() * 2.5 + 1.2,
                isAnchor: false,
            });
        }
        nodesRef.current = nodes;
    }, []);

    /* ── Initialise virtual blobs (mirroring CSS blobs) ── */
    const initBlobs = useCallback((w: number, h: number) => {
        blobsRef.current = [
            { x: w * 0.15, y: h * 0.1, radius: 400, cr: CYAN_COLOR.r, cg: CYAN_COLOR.g, cb: CYAN_COLOR.b, phase: 0, speed: 0.0004 },
            { x: w * 0.85, y: h * 0.85, radius: 350, cr: VIOLET_COLOR.r, cg: VIOLET_COLOR.g, cb: VIOLET_COLOR.b, phase: Math.PI, speed: 0.00035 },
            { x: w * 0.5, y: h * 0.45, radius: 300, cr: Math.round(lerp(CYAN_COLOR.r, VIOLET_COLOR.r, 0.5)), cg: Math.round(lerp(CYAN_COLOR.g, VIOLET_COLOR.g, 0.5)), cb: Math.round(lerp(CYAN_COLOR.b, VIOLET_COLOR.b, 0.5)), phase: Math.PI * 0.5, speed: 0.0005 },
        ];
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        /* ── Resize ── */
        const resize = () => {
            const dpr = window.devicePixelRatio || 1;
            const rect = canvas.getBoundingClientRect();
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            ctx.scale(dpr, dpr);
            if (nodesRef.current.length === 0) {
                initNodes(rect.width, rect.height);
                initBlobs(rect.width, rect.height);
            }
        };
        resize();
        window.addEventListener("resize", resize);

        /* ── Mouse ── */
        const onMouse = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };
        window.addEventListener("mousemove", onMouse, { passive: true });

        /* ── Scroll ── */
        const onScroll = () => { scrollRef.current = window.scrollY; };
        window.addEventListener("scroll", onScroll, { passive: true });

        /* ── Plexus pulse event from glass cards ── */
        const onPulse = (e: Event) => {
            const detail = (e as CustomEvent).detail;
            if (detail) {
                pulseRef.current = { x: detail.x, y: detail.y, t: performance.now() };
            }
        };
        window.addEventListener("plexus-pulse", onPulse);

        /* ── Main draw loop ── */
        let lastTime = performance.now();

        const draw = (now: number) => {
            const dt = Math.min(now - lastTime, 32); // cap delta
            lastTime = now;

            const rect = canvas.getBoundingClientRect();
            const w = rect.width;
            const h = rect.height;
            const scrollY = scrollRef.current;

            ctx.clearRect(0, 0, w, h);

            const nodes = nodesRef.current;
            const blobs = blobsRef.current;
            const mx = mouseRef.current.x;
            const my = mouseRef.current.y;

            // Update virtual blob positions (slow drift)
            for (const blob of blobs) {
                blob.phase += blob.speed * dt;
                blob.x += Math.sin(blob.phase) * 0.15;
                blob.y += Math.cos(blob.phase * 0.7) * 0.1;
            }

            // Check active pulse
            const pulse = pulseRef.current;
            const pulseActive = pulse && (now - pulse.t) < 800;
            const pulseProgress = pulseActive ? (now - pulse!.t) / 800 : 1;

            /* ── Update node positions (all in viewport space) ── */
            for (const node of nodes) {
                if (node.isAnchor) {
                    node.x += Math.sin(now * 0.0003 + node.y) * 0.03;
                    node.y += Math.cos(now * 0.0004 + node.x) * 0.02;
                    continue;
                }

                node.x += node.vx;
                node.y += node.vy;
                node.z += node.vz;

                // Wrap around edges (viewport bounds)
                if (node.x < 0) node.x += w;
                if (node.x > w) node.x -= w;
                if (node.y < 0) node.y += h;
                if (node.y > h) node.y -= h;
                if (node.z < 0 || node.z > 400) node.vz *= -1;

                // Mouse repel (already in viewport space)
                const dx = node.x - mx;
                const dy = node.y - my;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 150 && dist > 0) {
                    const force = ((150 - dist) / 150) * 0.02;
                    node.vx += (dx / dist) * force;
                    node.vy += (dy / dist) * force;
                }

                // Pulse boost
                if (pulseActive && pulse) {
                    const pdx = node.x - pulse.x;
                    const pdy = node.y - pulse.y;
                    const pdist = Math.sqrt(pdx * pdx + pdy * pdy);
                    if (pdist < 250) {
                        const intensity = (1 - pulseProgress) * (1 - pdist / 250) * 0.08;
                        node.vx += (pdx / (pdist || 1)) * intensity;
                        node.vy += (pdy / (pdist || 1)) * intensity;
                    }
                }

                // Damping
                node.vx *= 0.999;
                node.vy *= 0.999;
            }

            /* ── Helper: get color tint from nearest blob ── */
            const getNodeColor = (nx: number, ny: number) => {
                let totalWeight = 0;
                let r = 0, g = 0, b = 0;

                for (const blob of blobs) {
                    const bdx = nx - blob.x;
                    const bdy = ny - blob.y;
                    const bdist = Math.sqrt(bdx * bdx + bdy * bdy);
                    const influence = Math.max(0, 1 - bdist / (blob.radius * 2.5));
                    if (influence > 0) {
                        const wt = influence * influence;
                        r += blob.cr * wt;
                        g += blob.cg * wt;
                        b += blob.cb * wt;
                        totalWeight += wt;
                    }
                }

                if (totalWeight > 0) {
                    r /= totalWeight;
                    g /= totalWeight;
                    b /= totalWeight;
                } else {
                    r = 100; g = 160; b = 220;
                }
                return { r: Math.round(r), g: Math.round(g), b: Math.round(b) };
            };

            /* ── Draw connections ── */
            const connectionDist = 200;
            // Parallax: subtle per-node y shift based on depth & scroll
            const parallaxFactor = 0.015;

            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const a = nodes[i];
                    const b = nodes[j];
                    // Apply subtle parallax shift based on depth
                    const ayp = a.y + (a.z - 200) * parallaxFactor * Math.sin(scrollY * 0.002);
                    const byp = b.y + (b.z - 200) * parallaxFactor * Math.sin(scrollY * 0.002);

                    const ddx = a.x - b.x;
                    const ddy = ayp - byp;
                    const d = Math.sqrt(ddx * ddx + ddy * ddy);

                    if (d < connectionDist) {
                        const midX = (a.x + b.x) / 2;
                        const midY = (ayp + byp) / 2;
                        const color = getNodeColor(midX, midY);

                        let alpha = (1 - d / connectionDist) * 0.18;

                        // Brighter near anchors
                        if (a.isAnchor || b.isAnchor) alpha *= 2.5;

                        // Pulse shimmer
                        if (pulseActive && pulse) {
                            const pmx = midX - pulse.x;
                            const pmy = midY - pulse.y;
                            const pdist = Math.sqrt(pmx * pmx + pmy * pmy);
                            if (pdist < 200) {
                                alpha += (1 - pulseProgress) * (1 - pdist / 200) * 0.15;
                            }
                        }

                        ctx.beginPath();
                        ctx.moveTo(a.x, ayp);
                        ctx.lineTo(b.x, byp);
                        ctx.strokeStyle = `rgba(${color.r},${color.g},${color.b},${alpha})`;
                        ctx.lineWidth = a.isAnchor || b.isAnchor ? 0.8 : 0.5;
                        ctx.stroke();
                    }
                }
            }

            /* ── Draw nodes ── */
            for (const node of nodes) {
                const yp = node.y + (node.z - 200) * parallaxFactor * Math.sin(scrollY * 0.002);

                const depthScale = 0.5 + (node.z / 400) * 0.5;
                const r = node.radius * depthScale;
                const color = getNodeColor(node.x, node.y);

                // Outer glow
                const glowAlpha = node.isAnchor ? 0.12 : 0.04;
                const glowRadius = node.isAnchor ? r * 6 : r * 4;
                ctx.beginPath();
                ctx.arc(node.x, yp, glowRadius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${color.r},${color.g},${color.b},${glowAlpha})`;
                ctx.fill();

                // Core dot
                const coreAlpha = node.isAnchor ? 1 : 0.7;
                ctx.beginPath();
                ctx.arc(node.x, yp, r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${color.r},${color.g},${color.b},${coreAlpha})`;
                ctx.fill();

                // Anchor steady glow ring
                if (node.isAnchor) {
                    const pulseA = 0.15 + Math.sin(now * 0.002 + node.x) * 0.08;
                    ctx.beginPath();
                    ctx.arc(node.x, yp, r * 3, 0, Math.PI * 2);
                    ctx.strokeStyle = `rgba(${color.r},${color.g},${color.b},${pulseA})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            }

            animRef.current = requestAnimationFrame(draw);
        };

        animRef.current = requestAnimationFrame(draw);

        return () => {
            cancelAnimationFrame(animRef.current);
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", onMouse);
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("plexus-pulse", onPulse);
        };
    }, [initNodes, initBlobs]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full"
            style={{ pointerEvents: "none", zIndex: 0 }}
        />
    );
}

