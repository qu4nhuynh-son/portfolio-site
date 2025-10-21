export default function About() {
    return (
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=800&h=600&fit=crop"
                alt="Workspace"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6 text-slate-700">
              <p className="text-lg leading-relaxed">
                I&apos;m a full-stack developer who blends clean engineering with thoughtful design. 
                Over the past few years, I’ve built modern web apps using React, TypeScript, and Node.js, focusing on performance, scalability, and user-first experiences.
              </p>
              <p className="text-lg leading-relaxed">
              I care deeply about writing clean, maintainable code, building systems that solve real problems, and crafting interfaces that feel intuitive and fast.
              </p>
              <p className="text-lg leading-relaxed">
              Beyond development, I explore UI/UX patterns, contribute to open-source projects, and write about product design and front-end architecture.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  