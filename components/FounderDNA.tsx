"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { useTheme } from "./ThemeProvider";

const achievements = [
    {
        icon: "📦",
        value: 39000,
        suffix: "+",
        label: "Products Managed for Ziia Online",
    },
    {
        icon: "🚀",
        value: null,
        displayText: "Founder",
        label: "@ Chroma Div",
    },
    {
        icon: "🤖",
        value: null,
        displayText: "AI Agent",
        label: "Architect for LeadFlow",
    },
];

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!inView) return;
        const duration = 2000;
        const steps = 60;
        const increment = target / steps;
        let current = 0;
        const interval = setInterval(() => {
            current += increment;
            if (current >= target) {
                setCount(target);
                clearInterval(interval);
            } else {
                setCount(Math.floor(current));
            }
        }, duration / steps);
        return () => clearInterval(interval);
    }, [inView, target]);

    return (
        <span ref={ref}>
            {count.toLocaleString()}{suffix}
        </span>
    );
}

function AchievementCard({
    achievement,
    index,
}: {
    achievement: (typeof achievements)[0];
    index: number;
}) {
    return (
        <AnimatedSection delay={index * 0.15} className="flex-1 min-w-[240px]">
            <div className="glass glass-glow p-8 text-center h-full">
                <div className="relative z-10">
                    <span className="text-4xl mb-4 block">{achievement.icon}</span>
                    <div className="text-3xl md:text-4xl font-bold gradient-text mb-2 font-mono tracking-tight">
                        {achievement.value !== null ? (
                            <AnimatedCounter target={achievement.value} suffix={achievement.suffix} />
                        ) : (
                            achievement.displayText
                        )}
                    </div>
                    <p className="text-sm text-muted leading-relaxed">{achievement.label}</p>
                </div>
            </div>
        </AnimatedSection>
    );
}

export default function FounderDNA() {
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
        <section id="about" className="section-container">
            <AnimatedSection>
                <div className="text-center mb-16">
                    <p className="text-sm tracking-[0.3em] uppercase text-cyan mb-4 font-medium">
                        Founder&apos;s DNA
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold">
                        The Mind Behind{" "}
                        <span className="gradient-text">Chroma Div</span>
                    </h2>
                </div>
            </AnimatedSection>

            <div className="max-w-4xl mx-auto">
                <AnimatedSection delay={0.1}>
                    <div className="glass p-8 md:p-12 mb-10" onMouseMove={dispatchPulse}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                            {/* Left – Narrative */}
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-4">
                                    Digital Agency.
                                    <br />
                                    <span className="text-cyan">Intelligent Results.</span>
                                </h3>
                                <p className="text-muted text-sm leading-relaxed mb-4">
                                    Chroma Div is the vehicle through which I deliver high-ROI
                                    digital solutions — from AI-powered lead engines and custom
                                    Shopify builds to full-stack SaaS products. Every project is
                                    architected for conversion, scale, and long-term impact.
                                </p>
                                <p className="text-muted text-sm leading-relaxed">
                                    I don&apos;t just build software — I build systems that think,
                                    adapt, and generate revenue. Whether it&apos;s automating a
                                    sales pipeline or engineering a voice AI agent, the goal is
                                    always the same: measurable business outcomes.
                                </p>
                            </div>

                            {/* Right – Achievement Cards */}
                            <div className="grid grid-cols-1 gap-4">
                                {achievements.map((a, i) => (
                                    <div
                                        key={a.label}
                                        data-plexus-anchor
                                        className="text-center p-5 rounded-2xl"
                                        style={{
                                            background: isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)",
                                            border: isDark ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(0,0,0,0.06)",
                                        }}
                                    >
                                        <span className="text-2xl mb-2 block">{a.icon}</span>
                                        <div className="text-2xl md:text-3xl font-bold gradient-text mb-1 font-mono">
                                            {a.value !== null ? (
                                                <AnimatedCounter target={a.value} suffix={a.suffix} />
                                            ) : (
                                                a.displayText
                                            )}
                                        </div>
                                        <div className="text-xs text-muted">{a.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
