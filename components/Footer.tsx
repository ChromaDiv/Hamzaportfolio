import AnimatedSection from "./AnimatedSection";

export default function Footer() {
    return (
        <footer id="contact" className="relative">
            {/* Top gradient divider */}
            <div
                className="h-px w-full"
                style={{
                    background:
                        "linear-gradient(90deg, transparent, rgba(0,112,243,0.3), rgba(121,40,202,0.3), transparent)",
                }}
            />

            <div className="section-container !py-16">
                <div className="max-w-4xl mx-auto text-center">
                    <AnimatedSection>
                        {/* CTA */}
                        <p className="text-sm tracking-[0.3em] uppercase text-cyan mb-4 font-medium">
                            Let&apos;s Work Together
                        </p>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Ready to Build Something{" "}
                            <span className="gradient-text">Extraordinary</span>?
                        </h2>
                        <p className="text-muted mb-10 max-w-xl mx-auto leading-relaxed">
                            Whether you need an AI agent, a conversion-optimized storefront, or
                            a full-stack digital product — let&apos;s talk.
                        </p>
                        <a href="mailto:say@hihamza.com" className="glow-btn text-base px-10 py-4">
                            Book a Discovery Call
                        </a>
                    </AnimatedSection>

                    {/* Socials */}
                    <AnimatedSection delay={0.2}>
                        <div className="flex items-center justify-center gap-8 mt-16">
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted hover:text-cyan transition-colors text-sm"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted hover:text-cyan transition-colors text-sm"
                            >
                                Twitter / X
                            </a>
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted hover:text-cyan transition-colors text-sm"
                            >
                                GitHub
                            </a>
                        </div>
                    </AnimatedSection>

                    {/* Copyright */}
                    <p className="text-xs text-muted/50 mt-12">
                        © 2026 Hamza Riaz · Chroma Div. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
