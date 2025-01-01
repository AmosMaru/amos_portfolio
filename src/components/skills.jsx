import React from "react";
import { FaCode, FaDatabase, FaPenNib, FaServer } from "react-icons/fa";

const SkillCard = ({ skill }) => (
  <div className="group p-6 bg-[#1d2839]/50 rounded-xl hover:bg-[#232f44] transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-emerald-500/10">
    <div className="flex flex-col items-center text-center space-y-4">
      <div className="text-emerald-400 transform transition-transform duration-300 group-hover:scale-110 group-hover:text-emerald-300">
        {skill.icon}
      </div>
      <h3 className="text-2xl font-bold text-white mb-2 transition-colors duration-300 group-hover:text-emerald-400">
        {skill.title}
      </h3>
      <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
        {skill.description}
      </p>
    </div>
  </div>
);

const TechCard = ({ tech }) => (
  <div className="group p-4 bg-[#1d2839]/50 rounded-lg hover:bg-[#232f44] transition-all duration-300 transform hover:-translate-y-1">
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 p-2 bg-[#2a3649] rounded-lg group-hover:bg-[#313e56] transition-colors duration-300">
        <img
          src={tech.icon}
          alt={tech.name}
          className="w-full h-full object-contain transform transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <span className="text-gray-400 font-medium group-hover:text-white transition-colors duration-300">
        {tech.name}
      </span>
    </div>
  </div>
);

const Skillset = () => {
  const skills = [
    {
      title: "AI Development",
      description:
        "Leverage cutting-edge AI technologies to build intelligent systems that automate processes, enhance decision-making, and deliver innovative solutions.",
      link: "Learn More",
    },
    {
      title: "Software Engineering",
      description:
        "Deliver high-quality software solutions tailored to your business needs, ensuring scalability, performance, and seamless user experiences.",
      link: "Learn More",
    },
    {
      title: "Machine Learning Solutions",
      description:
        "Implement advanced machine learning models to uncover insights, predict trends, and optimize business operations.",
      link: "Learn More",
    },
    {
      title: "AI & Tech Consulting",
      description:
        "Provide expert guidance on leveraging AI and emerging technologies to solve complex challenges and drive business growth.",
      link: "Learn More",
    },
  ];

  const technologies = [
    { name: "Django", icon: "/django.png" },
    { name: "FastApi", icon: "/fastapi.png" },
    { name: "HTML", icon: "/html.png" },
    { name: "CSS", icon: "/css.png" },
    { name: "Tailwind CSS", icon: "/tailwind.png" },
    { name: "Javascript", icon: "/javascript.png" },
    ,
  ];

  return (
    <section id="skills" className="bg-[#182130] text-white py-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Skills Section */}
        <div className="relative text-center mb-20">
          <h2 className="text-4xl md:text-8xl font-bold text-gray-500/10 select-none absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
            SKILLSET
          </h2>
          <h3 className="text-3xl font-bold text-white relative mb-2">
            My Expertise
          </h3>
          <div className="w-20 h-1 bg-[#32daa1] mx-auto mb-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-32">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>

        {/* Technologies Section */}
        <div className="relative text-center mb-16">
          <h2 className="text-3xl md:text-6xl font-bold text-gray-500/10 select-none absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
            TECHNOLOGIES
          </h2>
          <h3 className="text-2xl font-bold text-white relative">
            Tools I Work With
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {technologies.map((tech, index) => (
            <TechCard key={index} tech={tech} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skillset;
