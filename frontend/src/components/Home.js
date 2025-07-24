import React from "react";
import { Link } from "react-router-dom";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-dark-grey/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-light-pink font-mono text-sm uppercase tracking-wide">
              Anup Mourya
            </div>
            <div className="flex items-center space-x-8">
              <Link to="/" className="nav-link text-light-pink hover:text-white transition-colors">
                Home
              </Link>
              <a href="#about" className="nav-link text-light-pink hover:text-white transition-colors">
                About
              </a>
              <a href="#skills" className="nav-link text-light-pink hover:text-white transition-colors">
                Skills
              </a>
              <a href="#projects" className="nav-link text-light-pink hover:text-white transition-colors">
                Projects
              </a>
              <a href="#contact" className="nav-link text-light-pink hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section flex items-center justify-center relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-32 h-32 bg-mid-purple/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-light-pink/15 rounded-full blur-lg animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-40 w-28 h-28 bg-mid-blue/10 rounded-full blur-xl animate-pulse delay-500"></div>
          <div className="absolute bottom-20 right-20 w-36 h-36 bg-light-yellow/10 rounded-full blur-2xl animate-pulse delay-700"></div>
        </div>
        
        <div className="hero-grid grid grid-cols-1 lg:grid-cols-2 h-full w-full max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col justify-between p-6 lg:p-12 relative">
            <div className="mb-auto pt-20 lg:pt-16">
              <div className="relative">
                <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-white">
                  Full Stack Developer
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-light-pink to-mid-purple rounded-full mb-6"></div>
              </div>
              <h3 className="text-base lg:text-lg font-normal pb-6 opacity-80 leading-relaxed">
                Indian Institute of Information Technology Senapati Manipur
                <br />
                <span className="text-mid-blue">Electronics & Communication Engineering</span>
                <br />
                <span className="text-light-pink">Currently Intern at IIT Jammu</span>
              </h3>
              
              {/* Tech Stack with Enhanced Styling */}
              <div className="space-y-4">
                <p className="text-sm font-mono uppercase tracking-wider text-mid-grey">Tech Stack</p>
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="service-button bg-mid-purple text-white rounded-full px-4 py-2 text-xs font-mono uppercase tracking-wider hover:scale-105 transition-transform">
                    ⚛️ React
                  </span>
                  <span className="service-button bg-mid-blue text-white rounded-full px-4 py-2 text-xs font-mono uppercase tracking-wider hover:scale-105 transition-transform">
                    💚 Node.js
                  </span>
                  <span className="service-button bg-light-yellow text-black rounded-full px-4 py-2 text-xs font-mono uppercase tracking-wider hover:scale-105 transition-transform">
                    🍃 MongoDB
                  </span>
                  <span className="service-button bg-mid-orange text-white rounded-full px-4 py-2 text-xs font-mono uppercase tracking-wider hover:scale-105 transition-transform">
                    ⚡ FastAPI
                  </span>
                </div>
              </div>

              {/* Call to Action Buttons */}
              <div className="flex items-center gap-4 pt-8 flex-wrap">
                <a 
                  href="#projects" 
                  className="cta-button bg-light-pink text-black border border-light-pink rounded-full px-6 py-3 font-mono text-sm uppercase tracking-wider hover:bg-pink-200 transition-colors inline-flex items-center gap-2"
                >
                  View Projects
                </a>
                <a 
                  href="#contact" 
                  className="cta-button bg-transparent text-white border border-white/30 rounded-full px-6 py-3 font-mono text-sm uppercase tracking-wider hover:bg-white/10 transition-colors inline-flex items-center gap-2"
                >
                  Get In Touch
                </a>
              </div>
            </div>
            
            <div className="absolute bottom-6 left-6 lg:bottom-12 lg:left-12">
              <h1 className="hero-brand-text font-black text-5xl lg:text-7xl xl:text-8xl leading-none uppercase tracking-tighter text-white">
                Anup
              </h1>
              <h1 className="hero-brand-text font-black text-5xl lg:text-7xl xl:text-8xl leading-none uppercase tracking-tighter text-light-pink -mt-2">
                Mourya
              </h1>
            </div>
          </div>
          
          <div className="flex items-center justify-center p-6 lg:p-12 relative">
            {/* Enhanced Visual Element */}
            <div className="relative">
              {/* Outer Ring */}
              <div className="w-96 h-96 lg:w-[28rem] lg:h-[28rem] rounded-full border-2 border-light-pink/20 absolute inset-0 animate-spin-slow"></div>
              
              {/* Middle Ring */}
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full border border-mid-purple/30 absolute inset-4 animate-pulse"></div>
              
              {/* Inner Content */}
              <div className="w-72 h-72 lg:w-80 lg:h-80 bg-gradient-to-br from-mid-purple/10 to-light-pink/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-light-pink/20 relative z-10 mt-8 ml-8">
                <div className="text-center space-y-6">
                  <div className="relative">
                    <div className="text-7xl lg:text-8xl animate-bounce-slow">👨‍💻</div>
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-mid-green rounded-full animate-ping"></div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-light-pink font-mono text-sm uppercase tracking-wider font-bold">
                      Building Digital
                    </p>
                    <p className="text-white font-mono text-sm uppercase tracking-wider font-bold">
                      Experiences
                    </p>
                  </div>
                  
                  {/* Stats */}
                  <div className="flex items-center justify-center gap-4 pt-4">
                    <div className="text-center">
                      <div className="text-xl font-bold text-mid-blue">2+</div>
                      <div className="text-xs text-mid-grey uppercase">Projects</div>
                    </div>
                    <div className="w-px h-8 bg-mid-grey/30"></div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-mid-purple">10+</div>
                      <div className="text-xs text-mid-grey uppercase">Skills</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-10 right-10 w-6 h-6 bg-light-yellow rounded-full animate-float"></div>
              <div className="absolute bottom-10 left-10 w-4 h-4 bg-mid-blue rounded-full animate-float delay-1000"></div>
              <div className="absolute top-1/2 left-0 w-5 h-5 bg-mid-purple rounded-full animate-float delay-500"></div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-mid-purple/5 -z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-light-pink/5 -z-10"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24">
        <About />
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-black/50">
        <Skills />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <Projects />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-black/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-black uppercase mb-12 text-light-pink">
              Get In Touch
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <div className="project-card bg-light-pink text-black rounded-lg p-6 hover:transform hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-lg font-medium mb-3">📧 Email</h3>
                <a href="mailto:anupmaurya0403@gmail.com" className="text-sm hover:underline break-all">
                  anupmaurya0403@gmail.com
                </a>
              </div>
              <div className="project-card bg-mid-blue text-white rounded-lg p-6 hover:transform hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-lg font-medium mb-3">📱 Phone</h3>
                <a href="tel:+919554402364" className="text-sm hover:underline">
                  +91 9554402364
                </a>
              </div>
              <div className="project-card bg-mid-purple text-white rounded-lg p-6 hover:transform hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-lg font-medium mb-3">🔗 LinkedIn</h3>
                <a 
                  href="https://www.linkedin.com/in/anup1750?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm hover:underline"
                >
                  @anup1750
                </a>
              </div>
              <div className="project-card bg-dark-green text-white rounded-lg p-6 hover:transform hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-lg font-medium mb-3">⚡ GitHub</h3>
                <a 
                  href="https://github.com/Anup8178" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm hover:underline"
                >
                  @Anup8178
                </a>
              </div>
            </div>
            <div className="text-center">
              <a 
                href="mailto:anupmaurya0403@gmail.com"
                className="cta-button bg-black text-white border border-black rounded-full px-8 py-4 font-mono text-sm uppercase tracking-wider hover:bg-gray-900 transition-colors inline-flex items-center"
              >
                Let's Work Together
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-dark-grey/20 py-8">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-mid-grey font-mono text-sm">
              © 2025 Anup Mourya. Built with React & FastAPI.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;