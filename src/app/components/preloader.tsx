"use client";

import { FaTooth } from "react-icons/fa";

export default function Preloader() {
return (
<div className="fixed inset-0 bg-[#2387B8] flex items-center justify-center z-[9999]">
<div className="relative flex items-center justify-center">

        {/* Outer rotating arcs */}
        <div className="loader-ring"></div>

        {/* Tooth Icon */}
        <FaTooth className="text-white text-4xl" />

</div>
    </div>
);
}