
"use client";

import { motion } from "framer-motion";

function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 24 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
            380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
            152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
            684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        width: 0.8 + i * 0.05,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <svg
                className="w-full h-full"
                viewBox="0 0 696 316"
                fill="none"
            >
                <title>Background Paths Overlay</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="#000000"
                        strokeWidth={path.width}
                        strokeOpacity={0.08 + path.id * 0.01}
                        initial={{ pathLength: 0.2 }}
                        animate={{
                            pathLength: [0.2, 1, 0.2],
                            opacity: [0.1, 0.2, 0.1],
                        }}
                        transition={{
                            duration: 25 + Math.random() * 15,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export function BackgroundPathsOverlay() {
    return (
        <>
            <FloatingPaths position={1} />
            <FloatingPaths position={-0.5} />
        </>
    );
}
