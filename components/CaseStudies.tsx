"use client";

import { useCallback } from "react";
import AnimatedSection from "./AnimatedSection";
import { useTheme } from "./ThemeProvider";

const projects = [
    {
        title: "LeadFlow Intelligence",
        subtitle: "AI Agent Dashboard",
        bullets: [
            "Architected an AI-powered lead qualification system for real estate professionals.",
            "Deployed voice agents to engage prospects and categorize leads in real-time.",
            "Built a seamless and responsive dashboard for direct CRM intelligence integration.",
        ],
        tags: ["Next.js", "Supabase", "Vapi.ai", "AI Agents"],
        accentColor: "var(--cyan)",
        metricBadge: "AI PERFORMANCE",
        metricValue: "3x",
        metricLabel: "Faster Qualification",
        metricFooter: "AUTONOMOUS SYSTEM",
    },
    {
        title: "SmartServe Packaging",
        subtitle: "Sustainable E-Commerce",
        bullets: [
            "Developed a premium Shopify storefront for an eco-friendly packaging brand.",
            "Focused heavily on conversion rate optimization and brand storytelling.",
            "Engineered out-of-the-box features for a seamless and high-converting checkout.",
        ],
        tags: ["Shopify", "Liquid", "Custom Theme", "CRO"],
        accentColor: "var(--violet)",
        metricBadge: "SALES VELOCITY",
        metricValue: "42%",
        metricLabel: "Conversion Increase",
        metricFooter: "PERFORMANCE OPTIMIZED",
    },
    {
        title: "Abidjan Mobility AI",
        subtitle: "Dynamic Pricing Engine",
        bullets: [
            "Engineered intelligent pricing logic for an international transit platform.",
            "Processed massive real-time datasets for demand analysis and route optimization.",
            "Maximized operational margins while maintaining optimal rider satisfaction.",
        ],
        tags: ["Python", "Machine Learning", "API", "Analytics"],
        accentColor: "var(--cyan)",
        metricBadge: "SCALE ENGINE",
        metricValue: "1m+",
        metricLabel: "Daily Route Requests",
        metricFooter: "REAL-TIME ALGORITHMS",
    },
];

export default function CaseStudies() {
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
        <section id="projects" className="section-container pt-8 sm:pt-16 pb-24">
            <AnimatedSection>
                <div className="text-center mb-16">
                    <p className="text-sm tracking-[0.3em] uppercase text-violet mb-4 font-medium">
                        Case Studies
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                </div>
            </AnimatedSection>

            <div className="flex flex-col gap-8 md:gap-12">
                {projects.map((project, i) => (
                    <AnimatedSection key={project.title} delay={i * 0.15}>
                        <div
                            className="glass glass-glow p-8 md:p-12 max-w-6xl mx-auto relative overflow-hidden group"
                            onMouseMove={dispatchPulse}
                        >
                            {/* Background accent */}
                            <div
                                className="absolute -top-32 -right-32 w-64 h-64 rounded-full blur-[120px] opacity-20 transition-opacity duration-700 pointer-events-none group-hover:opacity-40"
                                style={{ background: project.accentColor }}
                            />

                            <div className="flex flex-col md:flex-row gap-10 lg:gap-16 relative z-10">
                                {/* Main Info */}
                                <div className="flex-1">
                                    <h3 className="text-2xl md:text-3xl font-bold mb-2">
                                        {project.title}
                                    </h3>

                                    <div className="flex items-center gap-2 mb-8 text-lg font-medium" style={{ color: project.accentColor }}>
                                        <span>{project.subtitle}</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-80"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
                                    </div>

                                    <ul className="space-y-4 text-muted text-sm md:text-base leading-relaxed mb-8">
                                        {project.bullets.map((bullet, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <span className="text-cyan mt-1 text-lg leading-none">►</span>
                                                <span>{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
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
                                            {project.metricBadge}
                                        </div>

                                        <div className="font-mono text-4xl md:text-5xl font-bold gradient-text mb-4 tracking-tighter drop-shadow-md">
                                            {project.metricValue}
                                        </div>

                                        <div className="text-sm text-primary font-medium tracking-wide">
                                            {project.metricLabel}
                                        </div>

                                        <div className={`mt-8 pt-4 border-t ${isDark ? "border-white/10" : "border-black/10"} text-[10px] text-muted tracking-widest uppercase opacity-70`}>
                                            {project.metricFooter}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                ))}
            </div>
        </section>
    );
}
