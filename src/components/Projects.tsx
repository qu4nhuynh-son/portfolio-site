"use client";
import { useState } from "react";
import { Code, Palette, Smartphone, Github, X } from "lucide-react";

type Project = {
  title: string;
  description: string;
  tech: string[];
  image: "code" | "phone" | "outdoor";
  github?: string;
  video?: string;
};

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with real-time inventory, Stripe payments, and an integrated admin dashboard for product management.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    image: "code",
    github: "https://github.com/qu4nhuynh-son/e-comerce-website?tab=readme-ov-file",
    video: "https://www.youtube.com/embed/McEtA2yDGI0?autoplay=1",
  },
  {
    title: "AI - Task Management App",
    description:
      "An intelligent productivity platform powered by an AI assistant that helps users create, edit, and organize tasks naturally through chat. Includes smart reminders, real-time calendar sync, and team collaboration features.",
    tech: ["Next.js", "TypeScript", "MongoDB", "OpenAI API", "WebSocket"],
    image: "phone",
    github: "https://github.com/qu4nhuynh-son/senior-project",
    video: "https://www.youtube.com/embed/pHcAMOuBaME?autoplay=1",
  },
  {
    title: "Soccer Live Scores Platform",
    description:
      "A real-time football analytics platform that streams live scores, match stats, and team insights using GraphQL and Redis cache for ultra-low latency updates.",
    tech: ["Next.js", "Redis", "Apollo", "GraphQL", "Tailwind"],
    image: "outdoor",
  },
];

export default function Projects() {
  const [openVideo, setOpenVideo] = useState<string | null>(null);

  return (
    <section id="projects" className="py-20 px-6 bg-white relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-slate-900">Featured Projects</h2>
        <p className="text-center text-slate-600 mb-16 text-lg">Recent work showcasing design and full-stack engineering</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <div key={p.title} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
              {/* Thumbnail */}
              <div className="h-48 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                {p.image === "code" && <Code className="w-24 h-24 text-emerald-400 opacity-50" />}
                {p.image === "phone" && <Smartphone className="w-24 h-24 text-blue-400 opacity-50" />}
                {p.image === "outdoor" && <Palette className="w-24 h-24 text-purple-400 opacity-50" />}
              </div>

              {/* Info */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-slate-900">{p.title}</h3>
                <p className="text-slate-600">{p.description}</p>

                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="bg-gray-100 text-slate-700 px-3 py-1 rounded-lg text-sm">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border-2 border-slate-900 text-slate-900 px-4 py-2 rounded-lg font-medium hover:bg-slate-900 hover:text-white transition-all flex items-center justify-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                  {p.video ? (
                    <button
                      onClick={() => setOpenVideo(p.video!)}
                      className="flex-1 bg-slate-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-slate-800 transition-all"
                    >
                      Demo
                    </button>
                  ) : (
                    <button disabled className="flex-1 bg-gray-300 text-gray-600 px-4 py-2 rounded-lg font-medium cursor-not-allowed">
                      Demo
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {openVideo && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn" onClick={() => setOpenVideo(null)}>
          <div className="relative w-[90%] max-w-3xl aspect-video rounded-2xl overflow-hidden shadow-2xl border border-slate-700" onClick={(e) => e.stopPropagation()}>
            <iframe src={openVideo} title="Demo video" allow="autoplay; fullscreen" className="w-full h-full" />
            <button onClick={() => setOpenVideo(null)} className="absolute top-3 right-3 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* Small fade animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn { animation: fadeIn 0.25s ease-out; }
      `}</style>
    </section>
  );
}
