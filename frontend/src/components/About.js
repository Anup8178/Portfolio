import React from "react";

const About = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-black uppercase mb-8 text-light-pink">
              About Me
            </h2>
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-white/90">
                I'm a passionate <span className="text-light-pink font-medium">Full Stack Developer</span> currently 
                pursuing my degree in Electronics and Communication Engineering at 
                <span className="text-mid-blue font-medium"> Indian Institute of Information Technology Senapati Manipur</span>.
              </p>
              <p className="text-white/90">
                Currently working as an intern at <span className="text-mid-purple font-medium">IIT Jammu</span>, 
                where I'm gaining hands-on experience in cutting-edge technologies and contributing to 
                innovative projects that bridge the gap between electronics and software development.
              </p>
              <p className="text-white/90">
                My journey in tech is driven by curiosity and a desire to create meaningful digital 
                experiences. I specialize in building scalable web applications using modern technologies 
                like React, Node.js, and MongoDB.
              </p>
              <p className="text-white/90">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or working on personal projects that challenge my skills and creativity.
              </p>
            </div>
            <div className="flex items-center gap-4 pt-8 flex-wrap">
              <span className="service-button bg-light-yellow text-black rounded-full px-4 py-2 text-xs font-mono uppercase tracking-wider">
                Problem Solver
              </span>
              <span className="service-button bg-mid-green text-black rounded-full px-4 py-2 text-xs font-mono uppercase tracking-wider">
                Team Player
              </span>
              <span className="service-button bg-mid-orange text-white rounded-full px-4 py-2 text-xs font-mono uppercase tracking-wider">
                Quick Learner
              </span>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-mid-purple/10 to-light-pink/10 rounded-2xl p-8 backdrop-blur-sm border border-light-pink/20">
              <div className="text-center space-y-8">
                <div className="w-48 h-48 mx-auto bg-gradient-to-br from-mid-purple/20 to-light-pink/20 rounded-full flex items-center justify-center text-8xl">
                  🎓
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-light-pink mb-2">Education</h3>
                  <p className="text-lg text-white/90 mb-1">Indian Institute of Information Technology Senapati Manipur</p>
                  <p className="text-mid-grey">Electronics & Communication Engineering</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-mid-blue mb-2">Current Role</h3>
                  <p className="text-lg text-white/90 mb-1">Intern at IIT Jammu</p>
                  <p className="text-mid-grey">Full Stack Development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;