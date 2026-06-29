"use client";

import { useEffect, useState } from "react";
import Preloader from "./components/preloader";

export default function LoaderProvider({
children,
}: {
children: React.ReactNode;
}) {
const [loading, setLoading] = useState(true);

useEffect(() => {
    const timer = setTimeout(() => {
    setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
}, []);

if (loading) {
    return <Preloader />;
}

return <>{children}</>;
}