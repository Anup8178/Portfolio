import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      bgColor: "bg-light-pink",
      textColor: "text-black",
      skills: [
        { name: "React.js", level: "Intermediate", icon: "⚛️" },
        { name: "JavaScript", level: "Advanced", icon: "🟨" },
        { name: "HTML5", level: "Expert", icon: "🌐" },
        { name: "CSS3", level: "Advanced", icon: "🎨" },
        { name: "Tailwind CSS", level: "Advanced", icon: "💨" },
        { name: "Bootstrap", level: "Intermediate", icon: "🅱️" }
      ]
    },
    {
      title: "Backend Development",
      bgColor: "bg-mid-blue",
      textColor: "text-white",
      skills: [
        { name: "Node.js", level: "Advanced", icon: "💚" },
        { name: "Express.js", level: "Advanced", icon: "🚀" },
        { name: "FastAPI", level: "Intermediate", icon: "⚡" },
        { name: "Python", level: "Intermediate", icon: "🐍" },
        { name: "RESTful APIs", level: "Advanced", icon: "🔌" },
        { name: "GraphQL", level: "Beginner", icon: "📊" }
      ]
    },
    {
      title: "Database & Tools",
      bgColor: "bg-mid-purple",
      textColor: "text-white",
      skills: [
        { name: "MongoDB", level: "Advanced", icon: "🍃" },
        { name: "MySQL", level: "Intermediate", icon: "🐬" },
        { name: "Git & GitHub", level: "Advanced", icon: "📱" },
        { name: "VS Code", level: "Expert", icon: "💙" },
        { name: "Postman", level: "Advanced", icon: "📮" },
        { name: "Docker", level: "Beginner", icon: "🐳" }
      ]
    },
    {
      title: "Electronics & IoT",
      bgColor: "bg-light-yellow",
      textColor: "text-black",
      skills: [
        { name: "Arduino", level: "Intermediate", icon: "🔧" },
        { name: "Raspberry Pi", level: "Intermediate", icon: "🥧" },
        { name: "Circuit Design", level: "Intermediate", icon: "⚡" },
        { name: "IoT Protocols", level: "Beginner", icon: "📡" },
        { name: "Sensors", level: "Intermediate", icon: "📟" },
        { name: "Embedded C", level: "Beginner", icon: "🖥️" }
      ]
    }
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case "Expert": return "bg-mid-green text-black";
      case "Advanced": return "bg-mid-blue text-white";
      case "Intermediate": return "bg-mid-orange text-white";
      case "Beginner": return "bg-mid-grey text-black";
      default: return "bg-mid-grey text-black";
    }
  };

  return (
    <div className="container mx-auto px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black uppercase mb-6 text-light-pink">
            Skills & Technologies
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical expertise spanning full-stack development, 
            electronics engineering, and emerging technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className={`project-card ${category.bgColor} ${category.textColor} rounded-lg p-8 hover:transform hover:-translate-y-2 transition-all duration-300`}
            >
              <h3 className="text-2xl font-bold mb-6 text-center">
                {category.title}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <span className={`service-button ${getLevelColor(skill.level)} rounded-full px-2 py-1 text-xs font-mono uppercase tracking-wider`}>
                        {skill.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Summary */}
        <div className="bg-gradient-to-r from-black/50 to-mid-purple/10 rounded-2xl p-8 border border-light-pink/20">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-light-pink mb-4">What I Bring to the Table</h3>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Combining electronics engineering background with modern web development skills 
              to create innovative solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h4 className="text-xl font-bold text-mid-blue mb-2">Full-Stack Development</h4>
              <p className="text-white/70">End-to-end web application development with modern technologies</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h4 className="text-xl font-bold text-mid-purple mb-2">Electronics Integration</h4>
              <p className="text-white/70">Bridging hardware and software for IoT and embedded solutions</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="text-xl font-bold text-light-yellow mb-2">Problem Solving</h4>
              <p className="text-white/70">Analytical thinking and creative solutions to complex challenges</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;