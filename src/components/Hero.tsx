"use client";
import React, { useEffect, useState } from "react";
import { Code, ChevronDown } from "lucide-react";

export default function Hero() {
  const roles = ["Problem Solver", "Full Stack Developer", "UI/UX Enthusiast", "Code Craftsman"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => setCharIndex(1), []);
  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 50 : 100;
    const pause = isDeleting ? 500 : 2000;
    if (!isDeleting && charIndex === current.length) {
      const t = setTimeout(() => setIsDeleting(true), pause);
      return () => clearTimeout(t);
    }
    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((p) => (p + 1) % roles.length);
      return;
    }
    const t = setTimeout(() => {
      setTypedText(current.substring(0, charIndex + (isDeleting ? -1 : 1)));
      setCharIndex((p) => p + (isDeleting ? -1 : 1));
    }, speed);
    return () => clearTimeout(t);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 animate-grid -z-10" />
      <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-float -z-10" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-float-delayed -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse-slow -z-10" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(168,85,247,0.35),transparent_60%)]" />

      {/* Layout: everything fits 1 screen */}
      <div className="mx-auto max-w-5xl h-screen flex flex-col justify-between gap-6 px-6 py-10">
        {/* Header + Title */}
        <div className="space-y-6">
          <div className="flex justify-center">
            <div className="bg-slate-800/70 backdrop-blur-md border border-emerald-500/40 rounded-xl px-6 py-3 flex items-center gap-4 shadow-lg shadow-emerald-500/20 animate-fade-in">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
              </div>
              <div className="h-4 w-px bg-slate-600" />
              <span className="text-emerald-400 font-mono text-sm animate-pulse-text">&gt;_ ~/portfolio</span>
              <Code className="w-4 h-4 text-emerald-400/60 animate-spin-slow" />
            </div>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="text-purple-300 text-xl md:text-2xl font-light tracking-wide">Hi, I&apos;m Quan Huynh</span>
              <span className="text-yellow-400 text-2xl md:text-3xl animate-bounce-slow">✨</span>
            </div>
            <div className="relative inline-block isolate">
              <div className="absolute inset-0 -z-10 rounded-xl blur-[44px] opacity-70 mix-blend-screen
                              bg-[linear-gradient(90deg,#4338CA_0%,#8B5CF6_45%,#EC4899_100%)]" />
              <h1 className="relative z-20 text-[clamp(38px,7.2vw,92px)] font-extrabold tracking-tight
                             text-transparent bg-clip-text
                             bg-[linear-gradient(90deg,#60A5FA_0%,#A78BFA_50%,#F472B6_100%)]
                             drop-shadow-[0_0_50px_rgba(167,139,250,0.85)] saturate-150">
                &gt; {typedText}
                <span className="text-[#34D399] animate-blink">|</span>
              </h1>
            </div>
          </div>
        </div>

        {/* Code block */}
        <div className="bg-slate-900/90 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-slate-700/50 shadow-2xl shadow-purple-900/20 animate-slide-up-delayed hover:border-purple-500/50 transition-all">
          <div className="flex gap-2 mb-5">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
          </div>
          <pre className="text-left font-mono text-[15px] md:text-base leading-relaxed text-slate-300">
{`const developer = {
  passion: "clean code",
  focus: "user experience",
  loves: ["React", "TypeScript", "GraphQL, "Design", "shadcn/ui"]
  status: "available for hire",
};`}
          </pre>
          <div className="mt-4 flex items-center gap-2 text-slate-400 text-sm font-mono">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span>Ready to collaborate</span>
          </div>
        </div>

        {/* Buttons + Tech stack (stick to bottom of section) */}
        <div className="space-y-6">
          <div className="flex gap-4 justify-center">
            <button className="relative group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-7 py-4 rounded-xl font-semibold flex items-center gap-3 transition-all hover:scale-105 shadow-lg shadow-blue-500/50 hover:shadow-purple-500/50">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity" />
              <Code className="w-5 h-5 relative z-10" />
              <span className="relative z-10">View My Work</span>
            </button>
            <button className="relative group bg-white hover:bg-gray-50 text-slate-900 px-7 py-4 rounded-xl font-semibold transition-all hover:scale-105 shadow-lg border-2 border-transparent hover:border-purple-400">
              Get In Touch
            </button>
          </div>

          <div className="flex items-center justify-center gap-6 text-slate-400 text-sm flex-wrap">
            <span className="font-bold text-emerald-400 tracking-wider">TECH STACK</span>
            <span className="text-slate-600">━━</span>
            {["React","Next.js", "TypeScript", "Node.js", "Python","GraphQL", "PostgreSQL", "Redis", "Docker", "CD/CI"].map((t) => (
              <span key={t} className="relative group cursor-pointer">
                <span className="relative z-10 transition-colors group-hover:text-emerald-400">{t}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300" />
              </span>
            ))}
          </div>

          <div className="flex justify-center">
            <ChevronDown className="w-6 h-6 text-emerald-400/60 animate-bounce-slow" />
          </div>
        </div>
      </div>
    </section>
  );
}
