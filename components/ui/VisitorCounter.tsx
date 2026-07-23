"use client";

import { useState, useEffect } from "react";
import { Users } from "lucide-react";

export default function VisitorCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Simulated visitor counter for premium feel
    const baseCount = 12450;
    const todayVisits = Math.floor(Math.random() * 50) + 10;
    setCount(baseCount + todayVisits);
  }, []);

  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/60 w-fit">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
      </span>
      <Users size={14} className="text-white/40" />
      <span>{count.toLocaleString()} visits</span>
    </div>
  );
}
