"use client";

import { useCallback } from "react";
import AnimatedSection from "./AnimatedSection";
import { useTheme } from "./ThemeProvider";

export default function Education() {
    const { theme } = useTheme();
    const isDark = theme === "dark";

    const dispatchPulse = useCallback((e: React.MouseEvent) => {
        window.dispatchEvent(
            new CustomEvent("plexus-pulse", {
                detail: { x: e.clientX, y: e.clientY },
            })
        );
    }, []);

    return (
        <section id="education" className="section-container relative z-10 pt-8 sm:pt-16 pb-24">
            <AnimatedSection>
                <div className="text-center mb-16">
                    <p className="text-sm tracking-[0.3em] uppercase text-cyan mb-4 font-medium">
                        Academic Foundation
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold">
                        <span className="gradient-text">Education</span>
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
                        style={{ background: "var(--violet)" }}
                    />

                    <div className="flex flex-col md:flex-row gap-10 lg:gap-16 relative z-10">
                        {/* Main Info */}
                        <div className="flex-1">
                            {/* Degree */}
                            <h3 className="text-2xl md:text-3xl font-bold mb-2">
                                Bachelor of Software Engineering
                            </h3>

                            {/* University */}
                            <div className="flex items-center gap-2 mb-8 text-lg font-medium" style={{ color: "var(--violet)" }}>
                                <span>Iqra University</span>
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
                                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                                </svg>
                            </div>

                            {/* Highlights */}
                            <ul className="space-y-4 text-muted text-sm md:text-base leading-relaxed mb-8">
                                <li className="flex items-start gap-3">
                                    <span className="text-cyan mt-1 text-lg leading-none">►</span>
                                    <span>Completed a comprehensive 4-year program covering software architecture, data structures, algorithms, and modern development practices.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-cyan mt-1 text-lg leading-none">►</span>
                                    <span>Built a strong foundation in full-stack development, database design, and software engineering principles.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-cyan mt-1 text-lg leading-none">►</span>
                                    <span>Developed hands-on expertise through real-world projects and collaborative team environments.</span>
                                </li>
                            </ul>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                                {["Software Architecture", "Data Structures", "Full-Stack Development", "Database Design"].map((tag) => (
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

                        {/* Year Badge Card */}
                        <div className="md:w-72 flex-shrink-0 flex items-center justify-center">
                            <div
                                data-plexus-anchor
                                className="w-full p-8 rounded-2xl text-center relative overflow-hidden transition-transform duration-500 hover:scale-[1.03]"
                                style={{
                                    background: isDark ? "rgba(0, 0, 0, 0.2)" : "rgba(255, 255, 255, 0.7)",
                                    border: isDark ? "1px solid rgba(139, 92, 246, 0.15)" : "1px solid rgba(139, 92, 246, 0.25)",
                                    boxShadow: isDark
                                        ? "inset 0 0 30px rgba(139, 92, 246, 0.05), 0 10px 40px -10px rgba(0,0,0,0.5)"
                                        : "inset 0 0 30px rgba(139, 92, 246, 0.06), 0 10px 40px -10px rgba(0,0,0,0.08)"
                                }}
                            >
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet to-cyan opacity-80" />

                                <div className="text-xs tracking-[0.2em] uppercase text-muted mb-6 font-semibold">
                                    Graduated
                                </div>

                                <div className="font-mono text-4xl md:text-5xl font-bold gradient-text mb-4 tracking-tighter drop-shadow-md">
                                    2023
                                </div>

                                <div className="text-sm text-primary font-medium tracking-wide">
                                    Bachelor&apos;s Degree
                                </div>

                                <div className={`mt-8 pt-4 border-t ${isDark ? "border-white/10" : "border-black/10"} text-[10px] text-muted tracking-widest uppercase opacity-70`}>
                                    Software Engineering
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedSection>
        </section>
    );
}
