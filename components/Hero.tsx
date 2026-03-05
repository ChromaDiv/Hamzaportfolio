"use client";

import AnimatedSection from "./AnimatedSection";

const roleBadges = [
    "FULL-STACK DEVELOPER",
    "AI ARCHITECT",
    "FOUNDER @ CHROMA DIV",
];

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
            {/* Grid Overlay */}
            <div className="hero-grid-overlay" />

            {/* ── Content Stack ── */}
            <div className="relative z-10 text-center max-w-3xl mx-auto px-6 flex flex-col items-center gap-0">

                {/* Portrait with Squircle Frame + Glass Reflection */}
                <AnimatedSection delay={0} className="mb-8">
                    <div className="squircle-frame">
                        {/* Corner glow fragments */}
                        <div className="corner-glow corner-glow--tl" />
                        <div className="corner-glow corner-glow--br" />
                        {/* Portrait */}
                        <div className="w-[160px] h-[160px] rounded-[20%] overflow-hidden relative">
                            <img
                                src="/portrait.jpg"
                                alt="Hamza Riaz"
                                className="w-full h-full object-cover object-top"
                            />
                            {/* Glass reflection overlay */}
                            <div className="portrait-glass-reflection" />
                        </div>
                    </div>
                </AnimatedSection>

                {/* Role Badges */}
                <AnimatedSection delay={0.1} className="flex flex-wrap items-center justify-center gap-2 mb-6">
                    {roleBadges.map((badge) => (
                        <span key={badge} className="pill-badge">
                            {badge}
                        </span>
                    ))}
                </AnimatedSection>

                {/* Headline — Metallic Gradient */}
                <AnimatedSection delay={0.2}>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-3">
                        <span className="metallic-text">HAMZA </span>
                        <span style={{ color: "#0070f3" }}>RIAZ</span>
                    </h1>
                </AnimatedSection>

                {/* Sub-headline */}
                <AnimatedSection delay={0.25}>
                    <p className="text-lg md:text-xl text-muted mb-6 font-medium">
                        Full-Stack Web Developer &amp; AI Specialist.
                    </p>
                </AnimatedSection>

                {/* Description */}
                <AnimatedSection delay={0.35}>
                    <p
                        className="text-base text-muted leading-relaxed mb-10 mx-auto"
                        style={{ maxWidth: "600px" }}
                    >
                        Crafting immersive digital experiences through code and canvas.
                        I specialize in building high-performance applications that blend
                        efficient engineering with dynamic interactivity.
                    </p>
                </AnimatedSection>

                {/* Buttons */}
                <AnimatedSection delay={0.45} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a href="#projects" className="hero-btn-primary text-base px-8 py-3">
                        View My Solutions
                    </a>
                    <a href="/resume.pdf" className="glow-btn-outline text-base px-8 py-3" download>
                        Download Resume
                    </a>
                </AnimatedSection>
            </div>

        </section>
    );
}
