import React from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "ShopCart",
      description: "A comprehensive e-commerce platform built with modern web technologies. Features include product catalog, shopping cart, user authentication, payment integration, and admin dashboard for inventory management.",
      bgColor: "bg-light-pink",
      textColor: "text-black",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      githubUrl: "https://github.com/Anup8178/ShopCart",
      features: [
        "🛒 Shopping Cart Functionality",
        "👤 User Authentication & Profiles",
        "💳 Payment Gateway Integration",
        "📊 Admin Dashboard",
        "📱 Responsive Design",
        "🔍 Product Search & Filtering"
      ],
      status: "Completed",
      type: "Full-Stack Web Application"
    },
    {
      id: 2,
      title: "WorkPlace",
      description: "A collaborative workspace platform designed to enhance team productivity. Includes project management tools, real-time communication, file sharing, and task tracking capabilities for modern distributed teams.",
      bgColor: "bg-mid-blue",
      textColor: "text-white",
      technologies: ["React", "Socket.io", "MongoDB", "Node.js"],
      githubUrl: "https://github.com/Anup8178/WorkPlace",
      features: [
        "💼 Project Management Dashboard",
        "💬 Real-time Team Communication",
        "📁 File Sharing & Collaboration",
        "✅ Task Tracking & Assignment",
        "📈 Progress Analytics",
        "🔔 Notification System"
      ],
      status: "In Development",
      type: "Collaboration Platform"
    }
  ];

  const upcomingProjects = [
    {
      title: "IoT Home Automation",
      description: "Smart home system using Arduino and Raspberry Pi",
      technologies: ["Arduino", "Raspberry Pi", "Python", "React"],
      status: "Planning Phase"
    },
    {
      title: "AI-Powered Chat Application",
      description: "Intelligent chatbot with natural language processing",
      technologies: ["React", "Python", "TensorFlow", "FastAPI"],
      status: "Research Phase"
    }
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black uppercase mb-6 text-light-pink">
            Featured Projects
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Showcasing my journey in full-stack development through practical, 
            real-world applications that solve meaningful problems.
          </p>
        </div>

        {/* Main Projects */}
        <div className="space-y-12 mb-16">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`project-card ${project.bgColor} ${project.textColor} rounded-lg overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                <div className="lg:col-span-2 space-y-6">
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div>
                      <h3 className="text-3xl font-bold mb-2 hover:underline">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-4 mb-4">
                        <span className="service-button bg-black/20 rounded-full px-3 py-1 text-xs font-mono uppercase tracking-wider">
                          {project.type}
                        </span>
                        <span className={`service-button ${project.status === 'Completed' ? 'bg-mid-green text-black' : 'bg-mid-orange text-white'} rounded-full px-3 py-1 text-xs font-mono uppercase tracking-wider`}>
                          {project.status}
                        </span>
                      </div>
                    </div>
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-button bg-black text-white border border-black rounded-full px-6 py-3 font-mono text-xs uppercase tracking-wider hover:bg-gray-900 transition-colors inline-flex items-center gap-2"
                    >
                      <span>View Code</span>
                      <span>📱</span>
                    </a>
                  </div>
                  
                  <p className="text-lg leading-relaxed opacity-90">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="service-button bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-mono uppercase tracking-wider"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-xl font-bold mb-4">Key Features</h4>
                  <div className="space-y-3">
                    {project.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex}
                        className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-3"
                      >
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming Projects */}
        <div className="bg-gradient-to-r from-black/50 to-mid-purple/10 rounded-2xl p-8 border border-light-pink/20">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-light-pink mb-4">What's Coming Next</h3>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Exciting projects in the pipeline that explore emerging technologies 
              and push the boundaries of what's possible.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingProjects.map((project, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <h4 className="text-xl font-bold text-white mb-3">{project.title}</h4>
                <p className="text-white/80 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="service-button bg-mid-grey text-black rounded-full px-2 py-1 text-xs font-mono uppercase tracking-wider"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <span className="service-button bg-mid-yellow text-black rounded-full px-3 py-1 text-xs font-mono uppercase tracking-wider">
                  {project.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-white mb-4">Interested in collaborating?</h3>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, 
            or just connecting with fellow developers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://github.com/Anup8178"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button bg-light-pink text-black border border-light-pink rounded-full px-8 py-4 font-mono text-sm uppercase tracking-wider hover:bg-pink-200 transition-colors inline-flex items-center gap-2"
            >
              <span>View All Projects</span>
              <span>📱</span>
            </a>
            <a 
              href="mailto:anupmaurya0403@gmail.com"
              className="cta-button bg-black text-white border border-black rounded-full px-8 py-4 font-mono text-sm uppercase tracking-wider hover:bg-gray-900 transition-colors inline-flex items-center gap-2"
            >
              <span>Get In Touch</span>
              <span>📧</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;