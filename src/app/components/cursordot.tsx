"use client";

import { useEffect, useState } from "react";

export default function CursorDot() {
const [position, setPosition] = useState({ x: 0, y: 0 });

useEffect(() => {
    const moveCursor = (e: PointerEvent) => {
    setPosition({
        x: e.clientX,
        y: e.clientY,
    });
    };

    window.addEventListener("pointermove", moveCursor);

    return () => {
    window.removeEventListener("pointermove", moveCursor);
    };
}, []);

return (
    <div
    className="fixed w-3 h-3 bg-[#1E84B5] rounded-full pointer-events-none z-50"
    style={{
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -50%)",
    }}
    />
);
}