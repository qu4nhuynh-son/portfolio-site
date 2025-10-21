import { Code, Database, Palette, Cloud, GitBranch, Smartphone } from "lucide-react";

const skills = [
  { icon: <Code className="w-6 h-6" />, title: "Frontend", items: ["React","TypeScript","Next.js","Tailwind CSS","Vue.js","HTML/CSS"] },
  { icon: <Database className="w-6 h-6" />, title: "Backend",  items: ["Node.js","Python","PostgreSQL","MongoDB","REST APIs","GraphQL"] },
  { icon: <Palette className="w-6 h-6" />, title: "Design",   items: ["Figma","UI/UX","Responsive Design","Prototyping","Design Systems"] },
  { icon: <Cloud className="w-6 h-6" />, title: "DevOps",    items: ["AWS","Docker","CI/CD","Vercel","GitHub Actions","Nginx"] },
  { icon: <GitBranch className="w-6 h-6" />, title: "Version Control", items: ["Git","GitHub","GitLab","Code Review","Branching Strategies"] },
  { icon: <Smartphone className="w-6 h-6" />, title: "Mobile", items: ["React Native","PWA","Responsive Design","Mobile-First"] },
];

export default function Skills() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-slate-900">Skills &amp; Expertise</h2>
        <p className="text-center text-slate-600 mb-16 text-lg">A toolkit from hands-on work</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((s, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-100 text-blue-600 p-3 rounded-xl">{s.icon}</div>
                <h3 className="text-xl font-bold text-slate-900">{s.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {s.items.map((it) => (
                  <span key={it} className="bg-gray-100 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium">{it}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
