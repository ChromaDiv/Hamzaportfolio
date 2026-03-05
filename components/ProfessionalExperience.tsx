"use client";

import { useCallback } from "react";
import AnimatedSection from "./AnimatedSection";
import { useTheme } from "./ThemeProvider";

export default function ProfessionalExperience() {
    const { theme } = useTheme();
    const isDark = theme === "dark";
    const tags = ["Shopify Liquid", "CSV Architecture", "E-commerce SEO", "Inventory Automation"];

    const dispatchPulse = useCallback((e: React.MouseEvent) => {
        window.dispatchEvent(
            new CustomEvent("plexus-pulse", {
                detail: { x: e.clientX, y: e.clientY },
            })
        );
    }, []);

    return (
        <section id="experience" className="section-container relative z-10 pt-8 sm:pt-16 pb-24">
            <AnimatedSection>
                <div className="text-center mb-16">
                    <p className="text-sm tracking-[0.3em] uppercase text-cyan mb-4 font-medium">
                        Professional Ecosystems &amp; Scale
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold">
                        Enterprise <span className="gradient-text">Operations</span>
                    </h2>
                </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
                <div
                    className="glass glass-glow p-8 md:p-12 max-w-6xl mx-auto relative overflow-hidden group"
                    onMouseMove={dispatchPulse}
                >
                    {/* Background accent */}
                    <div
                        className="absolute -top-32 -right-32 w-64 h-64 rounded-full blur-[120px] opacity-20 transition-opacity duration-700 pointer-events-none group-hover:opacity-40"
                        style={{ background: "var(--cyan)" }}
                    />

                    <div className="flex flex-col md:flex-row gap-10 lg:gap-16 relative z-10">
                        {/* Main Info */}
                        <div className="flex-1">
                            <h3 className="text-2xl md:text-3xl font-bold mb-2">
                                Shopify Developer &amp; Operations Manager
                            </h3>

                            <div className="flex items-center gap-2 mb-8 text-lg font-medium" style={{ color: "var(--violet)" }}>
                                <span>Ziia Online (UK)</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="opacity-80"
                                >
                                    <circle cx="12" cy="12" r="10" />
                                    <line x1="2" y1="12" x2="22" y2="12" />
                                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                </svg>
                            </div>

                            <ul className="space-y-4 text-muted text-sm md:text-base leading-relaxed mb-8">
                                <li className="flex items-start gap-3">
                                    <span className="text-cyan mt-1 text-lg leading-none">►</span>
                                    <span>Architected and managed large-scale Shopify Liquid environments for a leading UK clothing brand.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-cyan mt-1 text-lg leading-none">►</span>
                                    <span>Optimized backend data structures to ensure seamless performance across a massive product catalog.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-cyan mt-1 text-lg leading-none">►</span>
                                    <span>Implemented custom Shopify solutions to bridge the gap between complex inventory and premium user experience.</span>
                                </li>
                            </ul>

                            <div className="flex flex-wrap gap-2">
                                {tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-xs px-3 py-1 rounded-full whitespace-nowrap"
                                        style={{
                                            background: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)",
                                            color: "var(--text-muted)",
                                            border: isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(0,0,0,0.08)",
                                        }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Metric Highlight Card */}
                        <div className="md:w-72 flex-shrink-0 flex items-center justify-center">
                            <div
                                data-plexus-anchor
                                className="w-full p-8 rounded-2xl text-center relative overflow-hidden transition-transform duration-500 hover:scale-[1.03]"
                                style={{
                                    background: isDark ? "rgba(0, 0, 0, 0.2)" : "rgba(255, 255, 255, 0.7)",
                                    border: isDark ? "1px solid rgba(0, 112, 243, 0.15)" : "1px solid rgba(0, 112, 243, 0.25)",
                                    boxShadow: isDark
                                        ? "inset 0 0 30px rgba(0, 112, 243, 0.05), 0 10px 40px -10px rgba(0,0,0,0.5)"
                                        : "inset 0 0 30px rgba(0, 112, 243, 0.06), 0 10px 40px -10px rgba(0,0,0,0.08)"
                                }}
                            >
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan to-violet opacity-80" />

                                <div className="text-xs tracking-[0.2em] uppercase text-muted mb-6 font-semibold">
                                    Data Badge
                                </div>

                                <div className="font-mono text-4xl md:text-5xl font-bold gradient-text mb-4 tracking-tighter drop-shadow-md">
                                    39,000+
                                </div>

                                <div className="text-sm text-primary font-medium tracking-wide">
                                    Product Rows Managed
                                </div>

                                <div className={`mt-8 pt-4 border-t ${isDark ? "border-white/10" : "border-black/10"} text-[10px] text-muted tracking-widest uppercase opacity-70`}>
                                    High-Scale Infrastructure
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedSection>
        </section>
    );
}
