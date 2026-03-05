"use client";

import { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
];

function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === "dark";

    return (
        <button
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            className="relative w-9 h-9 flex items-center justify-center rounded-full hover:bg-white/[0.06] transition-all duration-150 outline-none"
        >
            {/* Sun icon */}
            <svg
                className={`absolute w-[16px] h-[16px] transition-all duration-500 ${isDark
                    ? "opacity-0 rotate-90 scale-0"
                    : "opacity-100 rotate-0 scale-100"
                    }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
            >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>

            {/* Moon icon */}
            <svg
                className={`absolute w-[16px] h-[16px] transition-all duration-500 ${isDark
                    ? "opacity-100 rotate-0 scale-100"
                    : "opacity-0 -rotate-90 scale-0"
                    }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
            >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
        </button>
    );
}

/* LinkedIn Icon */
function LinkedInIcon() {
    return (
        <a
            href="https://linkedin.com/in/hamzariaz"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center rounded-full text-muted hover:text-foreground hover:bg-white/[0.06] transition-all duration-150"
            aria-label="LinkedIn"
        >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        </a>
    );
}

/* GitHub Icon */
function GitHubIcon() {
    return (
        <a
            href="https://github.com/hamzariaz"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center rounded-full text-muted hover:text-foreground hover:bg-white/[0.06] transition-all duration-150"
            aria-label="GitHub"
        >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
        </a>
    );
}

export default function Navbar() {
    const { theme } = useTheme();
    const isDark = theme === "dark";
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const navBg = isDark
        ? scrolled
            ? "bg-black/20 backdrop-blur-2xl shadow-lg shadow-black/20 border-white/[0.08]"
            : "bg-black/[0.02] backdrop-blur-xl border-white/[0.05]"
        : scrolled
            ? "bg-white/20 backdrop-blur-2xl shadow-lg shadow-black/5 border-black/[0.08]"
            : "bg-white/[0.02] backdrop-blur-xl border-black/[0.05]";

    const linkHoverBg = isDark ? "hover:bg-white/[0.06]" : "hover:bg-black/[0.04]";
    const hamburgerBar = "bg-foreground";

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
            <nav
                className={`group pointer-events-auto mt-4 px-3 py-2 flex items-center gap-2 transition-all duration-300 rounded-full border hover:shadow-[0_0_30px_rgba(59,130,246,0.12)] hover:border-blue-500/20 ${navBg} ${!scrolled ? (isDark ? "border-white/[0.08]" : "border-black/[0.06]") : ""} ${scrolled ? "px-6 py-3" : "px-3 py-2"}`}
            >
                {/* Brand */}
                <a
                    href="#"
                    className="text-xl font-bold tracking-tight whitespace-nowrap px-3 transition-colors duration-150 hover:text-blue-500"
                    style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
                >
                    <span className="text-foreground">Hamza</span>
                    <span className="gradient-text">.</span>
                </a>

                {/* Desktop Links + Icons */}
                <div className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={`nav-link text-sm font-medium text-muted hover:text-foreground ${linkHoverBg} px-4 py-2 flex items-center justify-center rounded-full transition-colors duration-150`}
                            style={{ fontWeight: 500 }}
                        >
                            {link.label}
                        </a>
                    ))}

                    {/* Divider */}
                    <div className={`w-px h-5 mx-2 ${isDark ? "bg-white/10" : "bg-black/10"}`} />

                    {/* Social Icons */}
                    <div className="flex items-center gap-2 px-2">
                        <LinkedInIcon />
                        <GitHubIcon />
                    </div>

                    {/* Theme Toggle */}
                    <ThemeToggle />
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden flex items-center gap-2">
                    <ThemeToggle />
                    <button
                        className={`flex flex-col gap-1 p-2.5 rounded-full ${linkHoverBg} transition-colors`}
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Menu"
                    >
                        <span
                            className={`w-4 h-[1.5px] ${hamburgerBar} transition-all duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-[3.5px]" : ""
                                }`}
                        />
                        <span
                            className={`w-4 h-[1.5px] ${hamburgerBar} transition-all duration-300 ${mobileOpen ? "opacity-0 scale-0" : ""
                                }`}
                        />
                        <span
                            className={`w-4 h-[1.5px] ${hamburgerBar} transition-all duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
                                }`}
                        />
                    </button>
                </div>
            </nav>

            {/* Mobile Dropdown */}
            <div
                className={`md:hidden absolute top-full left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-sm overflow-hidden transition-all duration-400 ${mobileOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
            >
                <div className={`backdrop-blur-2xl border rounded-2xl p-4 mt-2 flex flex-col gap-2 shadow-xl ${isDark
                    ? "bg-[#0a0a0f]/90 border-white/[0.1] shadow-black/30"
                    : "bg-white/90 border-black/[0.06] shadow-black/8"
                    }`}>
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={`text-sm font-medium text-muted hover:text-foreground ${linkHoverBg} px-4 py-2.5 rounded-xl transition-all`}
                            onClick={() => setMobileOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                    {/* Social row */}
                    <div className="flex items-center gap-2 px-4 pt-2">
                        <LinkedInIcon />
                        <GitHubIcon />
                    </div>
                </div>
            </div>
        </header>
    );
}
