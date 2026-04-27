"use client";

import { useEffect, useMemo, useState } from "react";

function getRemainingTime(targetDate: Date) {
  const now = new Date();
  const difference = targetDate.getTime() - now.getTime();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0 };
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);

  return { days, hours, minutes };
}

export function DropCountdown() {
  const targetDate = useMemo(() => {
    const current = new Date();
    return new Date(current.getFullYear(), current.getMonth() + 1, 1);
  }, []);

  const [remaining, setRemaining] = useState(getRemainingTime(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setRemaining(getRemainingTime(targetDate));
    }, 30000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="inline-flex items-center gap-4 rounded-full border border-luxury-gold/50 bg-black/55 px-5 py-3 backdrop-blur-md">
      <span className="text-[10px] uppercase tracking-[0.24em] text-luxury-gold">Next Private Drop</span>
      <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-luxury-white">
        <span>{remaining.days}d</span>
        <span>{remaining.hours}h</span>
        <span>{remaining.minutes}m</span>
      </div>
    </div>
  );
}
