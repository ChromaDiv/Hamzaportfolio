"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
    children: ReactNode;
    delay?: number;
    direction?: "up" | "left" | "right";
    className?: string;
}

const directionOffset = {
    up: { x: 0, y: 60 },
    left: { x: -60, y: 0 },
    right: { x: 60, y: 0 },
};

export default function AnimatedSection({
    children,
    delay = 0,
    direction = "up",
    className = "",
}: AnimatedSectionProps) {
    const offset = directionOffset[direction];

    return (
        <motion.div
            initial={{ opacity: 0, x: offset.x, y: offset.y }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay,
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
