import React from "react";
import { ExternalLink, ArrowRight } from "lucide-react";

const ProjectCard = ({ project }) => (
  <div className="group relative overflow-hidden rounded-xl bg-[#182130] transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10">
    {/* Image Container */}
    <div className="relative overflow-hidden aspect-video">
      <div className="absolute inset-0 bg-gradient-to-t from-[#182130] to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
      />
    </div>

    {/* Content */}
    <div className="p-6 space-y-6">
      <div className="space-y-2">
        <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
          {project.name}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Technologies */}
      <div className="space-y-4">
        <h4 className="text-sm font-semibold text-gray-500">TECHNOLOGIES</h4>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="text-xs px-3 py-1 rounded-full bg-[#232f44] text-emerald-400 font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Links */}
      <div className="pt-4 flex justify-end gap-4">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-[#232f44] text-gray-400 hover:text-white hover:bg-[#2a3649] transition-colors duration-300"
          aria-label="Visit Project"
        >
          <ExternalLink size={18} />
        </a>
      </div>
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      name: "NexusScale",
      description:
        "This is a website that allows users to order templates for sending messages to their loved ones, making it easier to express feelings and stay connected with their loved ones.",
      image: "/nexus.png",
      link: "https://nexuscale.ai/",
      technologies: ["AI", "Rest Api", "FastApi"],
    },
      {
      name: "TC4A",
      description:
        "Developing innovative solutions to address the challenges faced by African youth in accessing quality education and employment opportunities.",
      image: "/tc4a.png",
      link: "https://tc4a.africa/",
      technologies: ["LMS", "Django", 'React','AI']
    },
    {
      name: "Myhela Africa",
      description:
        "Myhela Africa is a fintech focused on delivering AI-powered financial solutions to address diverse market needs across Africa",
      image: "/myhela.png",
      link: "https://myhela.africa/",
      technologies: ["Django", "Rest API", "AI"],
    },
    {
      name: "Zaumu",
      description:
        "Connecting brands and content creators to create authentic and engaging content that resonates with their audience.",
      image: "/zaumu.png",
      link: "https://zaumu.com/",
      technologies: ["React", "Rest API", 'AI'],
    },
    {
      name: "Gyno Care",
      description:
        "Appointment management systems for gynecologists, obstetricians, and women's health specialists.",
      image: "/gynocare.png",
      link: "https://gynocare.vercel.app/",
      technologies: ["Django", "Rest API", "AI"],
    },
    {
      name: "3D chat-bot",
      description:
        "A 3D AI agent.",
      image: "/3d.png",
      link: "https://3d.kilush.com/",
      technologies: ["Django", "Rest API", "AI"],
    },
    {
      name: "Raila Odinga for AU ",
      description:
        "An official website for Raila Odinga  AU chairmanship campaign",
      image: "/Raila.png",
      link: "https://www.railaodinga4auc.com/",
      technologies: ["Tailwind CSS", "React Js", "SEO"],
    },

    // {
    //   name: "Mche",
    //   description:
    //     "Developing innovative solutions to address the challenges faced by African youth in accessing quality education and employment opportunities.",
    //   image: "/tc4a.png",
    //   link: "https://mche.africa/",
    //   technologies: ["Farmers", "RestAPi"]
    // },

    {
      name: "Mwamba Rugby",
      description:
        "The Mwamba Rugby website allows fans to purchase game tickets, merchandise, and manage memberships. It also includes a content management system for the admin to easily update and manage website content",
      image: "/Mwamba.png",
      link: "https://mwambarugby.com/",
      technologies: ["Ticketing", "Api", "Paystack"],
    },
   
  
  ];

  return (
    <section id="projects" className="bg-[#111827] text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="relative text-center mb-20">
          <h2 className="text-4xl md:text-8xl font-bold text-gray-500/10 select-none absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
            PROJECTS
          </h2>
          <h3 className="text-3xl font-bold text-white relative mb-2">
            Featured Work
          </h3>
          <div className="w-20 h-1 bg-[#32daa1] mx-auto mb-4"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/AmosMaru"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-emerald-500 text-white hover:bg-emerald-600 transition-all duration-300 text-lg font-medium shadow-lg hover:shadow-emerald-500/25"
          >
            View More Projects
            <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
