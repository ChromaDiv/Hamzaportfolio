"use client";

import { useCallback } from "react";
import AnimatedSection from "./AnimatedSection";

const skills = [
    {
        title: "Next.js",
        description: "Full-stack React framework for production-grade web apps",
        icon: "⚡",
        span: "col-span-1 md:col-span-2",
        accent: "cyan",
    },
    {
        title: "Tailwind CSS",
        description: "Utility-first styling for rapid, responsive UI development",
        icon: "🎨",
        span: "col-span-1",
        accent: "violet",
    },
    {
        title: "Shopify",
        description: "Custom storefronts and e-commerce solutions that convert",
        icon: "🛒",
        span: "col-span-1",
        accent: "cyan",
    },
    {
        title: "AI Agents",
        description:
            "Autonomous AI systems that qualify leads, answer queries and drive revenue",
        icon: "🤖",
        span: "col-span-1 md:col-span-2",
        accent: "violet",
    },
    {
        title: "Prompt Engineering",
        description:
            "Crafting precision prompts for GPT-4, Claude, and custom LLMs",
        icon: "🧠",
        span: "col-span-1 md:col-span-2",
        accent: "cyan",
    },
    {
        title: "Automation",
        description: "End-to-end workflow automation using n8n, Zapier, and custom APIs",
        icon: "⚙️",
        span: "col-span-1",
        accent: "violet",
    },
];

export default function BentoGrid() {
    const dispatchPulse = useCallback((e: React.MouseEvent) => {
        window.dispatchEvent(
            new CustomEvent("plexus-pulse", {
                detail: { x: e.clientX, y: e.clientY },
            })
        );
    }, []);

    return (
        <section id="skills" className="section-container">
            <AnimatedSection>
                <div className="text-center mb-16">
                    <p className="text-sm tracking-[0.3em] uppercase text-cyan mb-4 font-medium">
                        Capabilities
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold">
                        Tools of the <span className="gradient-text">Trade</span>
                    </h2>
                </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {skills.map((skill, i) => (
                    <AnimatedSection
                        key={skill.title}
                        delay={i * 0.08}
                        className={skill.span}
                    >
                        <div
                            className="glass glass-glow p-6 md:p-8 cursor-default h-full"
                            onMouseMove={dispatchPulse}
                        >
                            <div className="relative z-10">
                                <span className="text-3xl mb-4 block">{skill.icon}</span>
                                <h3
                                    className={`text-xl font-bold mb-2 ${skill.accent === "cyan" ? "text-cyan" : "text-violet"
                                        }`}
                                >
                                    {skill.title}
                                </h3>
                                <p className="text-muted text-sm leading-relaxed">
                                    {skill.description}
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>
                ))}
            </div>
        </section>
    );
}
