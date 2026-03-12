"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function LaunchTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // March 13th, 2026, 10:00 AM local time
    const targetDate = new Date("2026-03-13T10:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!isMounted) return null; // Avoid hydration mismatch

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="flex items-center gap-4 md:gap-8 justify-center">
        <TimeUnit value={timeLeft.days} label="Days" />
        <span className="text-2xl md:text-5xl font-serif text-[#C2A35D] opacity-50 mb-6">:</span>
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <span className="text-2xl md:text-5xl font-serif text-[#C2A35D] opacity-50 mb-6">:</span>
        <TimeUnit value={timeLeft.minutes} label="Minutes" />
        <span className="text-2xl md:text-5xl font-serif text-[#C2A35D] opacity-50 mb-6">:</span>
        <TimeUnit value={timeLeft.seconds} label="Seconds" />
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="text-[#A8A39B] font-sans text-sm tracking-[0.15em] uppercase"
      >
        Launching in the next 48 hours.
      </motion.p>
    </div>
  );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center min-w-[60px] md:min-w-[100px]">
      <motion.div
        key={value}
        initial={{ y: 5, opacity: 0.5 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-4xl md:text-7xl font-serif text-[#C2A35D] tabular-nums tracking-tighter"
      >
        {value.toString().padStart(2, "0")}
      </motion.div>
      <span className="text-[10px] md:text-xs text-[#EAE6DD]/60 font-sans tracking-[0.2em] uppercase mt-2">
        {label}
      </span>
    </div>
  );
}
