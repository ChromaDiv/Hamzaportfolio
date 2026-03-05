"use client";

import PlexusBackground from "./PlexusBackground";

export default function MeshBackground() {
    return (
        <>
            {/* ① Plexus constellated network (deepest layer) */}
            <PlexusBackground />

            {/* ② Mesh Gradient Blobs (semi-transparent, plexus shows through) */}
            <div className="mesh-bg" aria-hidden="true">
                <div className="mesh-blob mesh-blob--1" />
                <div className="mesh-blob mesh-blob--2" />
                <div className="mesh-blob mesh-blob--3" />
            </div>

            {/* ③ Static grid overlay */}
            <div className="global-grid-overlay" aria-hidden="true" />

            {/* ④ Noise Grain Overlay (topmost texture) */}
            <div className="noise-overlay" aria-hidden="true" />
        </>
    );
}
