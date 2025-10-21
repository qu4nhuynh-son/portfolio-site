"use client";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";

export default function Contact() {
  const items = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      href: "mailto:hpmqu4n@gmail.com",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/qu4nhuynh/",
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      href: "https://github.com/qu4nhuynh-son",
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      label: "Twitter",
      href: "https://x.com/qu4nhuynh",
    },
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-slate-900">
          Get In Touch
        </h2>
        <p className="text-center text-slate-600 mb-16 text-lg">
          Have a project or a question? Let’s build something great together.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Links */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-slate-900">
              Let&apos;s Connect
            </h3>
            <p className="text-slate-600 text-lg">
              I&apos;m open to new opportunities, freelance projects, or
              collaborations. Feel free to reach out anytime.
            </p>

            <div className="space-y-4">
              {items.map((it) => (
                <a
                  key={it.label}
                  href={it.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 w-full bg-white p-4 rounded-xl hover:shadow-md transition-all"
                >
                  <div className="bg-gray-100 p-3 rounded-lg">{it.icon}</div>
                  <span className="font-medium text-slate-700">{it.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="space-y-4">
              <input
                className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none"
                placeholder="Your Name"
              />
              <input
                className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none"
                placeholder="Your Email"
              />
              <textarea
                rows={5}
                className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none resize-none"
                placeholder="Your Message"
              />
              <button className="w-full bg-slate-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-800 transition-all">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
