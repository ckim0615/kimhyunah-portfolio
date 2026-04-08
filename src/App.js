import React, { useState, useEffect } from 'react';
import { Sparkles, Mail, Github, Linkedin, Heart, Code, Palette, Coffee } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const projects = [
    {
      title: "CSSA Brandkit",
      description: "A whimsical app for capturing and visualizing your dreams with AI-powered insights",
      tech: ["React", "Node.js", "OpenAI"],
      color: "#C8E6F5"
    },
    {
      title: "Merchandise",
      description: "Pomodoro timer with ambient sounds and cute animations to boost productivity",
      tech: ["React", "Web Audio API"],
      color: "#B8DFF0"
    },
    {
      title: "Infographic for My Berkeley",
      description: "Track your plant care routine with reminders and growth journals",
      tech: ["React Native", "Firebase"],
      color: "#A8D8EB"
    }
  ];

  const skills = [
    { name: "React & JavaScript", icon: Code, level: 90 },
    { name: "UI/UX Design", icon: Palette, level: 85 },
    { name: "Node.js & APIs", icon: Coffee, level: 80 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50 relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"
          style={{
            top: '10%',
            left: '5%',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
        <div 
          className="absolute w-80 h-80 bg-cyan-200/30 rounded-full blur-3xl"
          style={{
            bottom: '15%',
            right: '10%',
            transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
        <div 
          className="absolute w-64 h-64 bg-indigo-200/20 rounded-full blur-3xl"
          style={{
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%) translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className={`fixed top-0 w-full backdrop-blur-md bg-white/60 border-b border-blue-100/50 shadow-sm transition-all duration-700 ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
          <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-2 font-bold text-xl text-blue-600">
              <Sparkles className="w-5 h-5 animate-pulse" />
              <span style={{ fontFamily: 'Georgia, serif' }}>Hyun Ah Kim</span>
            </div>
            <div className="flex gap-6">
              {['Home', 'Projects', 'About', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-all duration-300 hover:text-blue-600 hover:scale-110 ${
                    activeSection === item.toLowerCase() 
                      ? 'text-blue-600 font-bold' 
                      : 'text-gray-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className={`pt-32 pb-20 px-6 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center space-y-6">
              {/* Profile image placeholder */}
              <div className="relative inline-block mb-6">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-300 to-cyan-300 mx-auto shadow-2xl shadow-blue-200/50 animate-pulse" />
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-pink-400 animate-pulse" />
                </div>
              </div>
              
              <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent" style={{ fontFamily: 'Georgia, serif' }}>
                Hi, I'm Hyun Ah Kim ✨
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                A creative developer who loves building delightful digital experiences 
                that make people smile
              </p>
              
              {/* CTA Buttons */}
              <div className="flex gap-4 justify-center pt-4">
                <button className="px-8 py-3 bg-gradient-to-r from-blue-400 to-cyan-400 text-white rounded-full font-medium shadow-lg shadow-blue-200/50 hover:shadow-xl hover:scale-105 transition-all duration-300">
                  View My Work
                </button>
                <button className="px-8 py-3 bg-white text-blue-600 rounded-full font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-blue-200">
                  Say Hello
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className={`py-20 px-6 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                Featured Projects
              </h2>
              <p className="text-gray-600">Things I've built with love and care</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-blue-100/50"
                  style={{
                    animationDelay: `${index * 150}ms`
                  }}
                >
                  <div 
                    className="w-full h-40 rounded-xl mb-4 flex items-center justify-center text-white text-2xl font-bold transition-all duration-500 group-hover:scale-105"
                    style={{ 
                      background: `linear-gradient(135deg, ${project.color}, ${project.color}dd)`,
                      fontFamily: 'Georgia, serif'
                    }}
                  >
                    ✦
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className={`py-20 px-6 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                Skills & Expertise
              </h2>
              <p className="text-gray-600">What I bring to the table</p>
            </div>

            <div className="space-y-6">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100/50">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="font-semibold text-gray-800 text-lg">{skill.name}</span>
                    </div>
                    <div className="w-full bg-blue-50 rounded-full h-3 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: isLoaded ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 200}ms`
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className={`py-20 px-6 transition-all duration-1000 delay-900 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Let's Create Together
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              I'm always excited to collaborate on interesting projects!
            </p>

            <div className="flex justify-center gap-6">
              <a href="mailto:your@email.com" className="w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 hover:shadow-xl transition-all duration-300 border-2 border-blue-100">
                <Mail className="w-6 h-6 text-blue-500" />
              </a>
              <a href="https://github.com" className="w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 hover:shadow-xl transition-all duration-300 border-2 border-blue-100">
                <Github className="w-6 h-6 text-blue-500" />
              </a>
              <a href="https://linkedin.com" className="w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 hover:shadow-xl transition-all duration-300 border-2 border-blue-100">
                <Linkedin className="w-6 h-6 text-blue-500" />
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 text-center text-gray-500 text-sm border-t border-blue-100/50 bg-white/30 backdrop-blur-sm">
          <p>Made with <Heart className="w-4 h-4 inline text-pink-400 animate-pulse" /> by [Your Name] © 2025</p>
        </footer>
      </div>
    </div>
  );
}