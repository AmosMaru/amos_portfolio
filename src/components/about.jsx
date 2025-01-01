import React from "react";
import { Download, MapPin, Mail, User } from "lucide-react";
import AnimatedCodeEditor from "./Animated";

const About = () => {
  const companies = [
    {
      number: "01",
      name: "NexusScale",
      position: "Lead Chief of AI Engineering",
      description:
        "I lead the development of AI solutions, data integration, and management systems, ensuring seamless and innovative technologies for business growth.",
      highlightColor: "text-emerald-400",
    },
    {
      number: "02",
      name: "Pyraus Group",
      position: "Co-founder",
      description:
        "As a co-founder of Pyraus Group, a software consultancy and development company, I oversee strategic initiatives and deliver innovative solutions for clients across industries.",
      highlightColor: "text-emerald-400",
    },
    {
      number: "03",
      name: "TC4A",
      position: "Backend Developer",
      description:
        "I contributed to building and optimizing backend systems, ensuring scalability, performance, and reliability for complex applications.",
      highlightColor: "text-emerald-400",
    },
    {
      number: "04",
      name: "Hazina Africa",
      position: "Founder",
      description:
        "I founded Hazina Africa, a financial platform that centralizes personal finance, providing advanced analytics and wealth-building tools to empower users.",
      highlightColor: "text-emerald-400",
    },
  ];
  

  return (
    <div
      id="about"
      className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white  py-20 px-4 md:px-8"
    >
      {/* Background heading with subtle animation */}
      <div className="relative text-center mb-20">
        <h2 className="text-4xl md:text-8xl font-bold text-gray-500/10 select-none absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
          ABOUT ME
        </h2>
        <h3 className="text-3xl font-bold text-white relative mb-2">
          Who am I ?
        </h3>
        <div className="w-20 h-1 bg-[#32daa1] mx-auto "></div>
      </div>

      {/* Main content grid */}
      <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
        {/* Left column - Introduction */}
        <div className="space-y-8">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          I'm <span className="text-emerald-400 relative">Amos Kibet</span>,
          <br /> a Backend & AI Developer.
        </h2>

        <p className="text-gray-300 leading-relaxed text-base md:text-lg">
          As an AI Developer and Software Engineer, I specialize in crafting innovative solutions that drive efficiency and deliver impactful results. 
          Combining technical expertise with strategic problem-solving, I strive to create technology that empowers businesses to grow and succeed.

          <br /><br />

          On the backend, I excel in building scalable, high-performance applications using frameworks like Django and FastAPI. I’m passionate about developing robust APIs, optimizing data flow, and ensuring seamless integration between frontend and backend systems. 
          My mission is to create fast, reliable, and user-friendly software that simplifies complex challenges with smart, efficient technology.
        </p>

        </div>

        {/* Right column - Personal Info */}
        <div className="lg:pl-16 space-y-8">
          <AnimatedCodeEditor />
          <div className="bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700/50">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <User className="w-5 h-5 text-emerald-400" />
                <span className="font-medium">Amos Kibet</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-emerald-400" />
                <a
                  href="mailto:amosmaru10@gmail.com"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  amosmaru10@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-5 h-5 text-emerald-400" />
                <span className="text-gray-300">Nairobi, Kenya</span>
              </div>
            </div>

            {/* <button className="mt-8 w-full bg-emerald-400 text-gray-900 px-6 py-3 font-semibold rounded-xl hover:bg-emerald-300 transition-all duration-300 flex items-center justify-center gap-2 group">
              <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
              Download CV
            </button> */}
          </div>
        </div>
      </div>

      {/* Companies Section */}
      <div className="mt-32">
        <div className="relative text-center mb-20">
          <h2 className="text-4xl md:text-8xl font-bold text-gray-500/10 select-none absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
            COMPANIES
          </h2>
          <h3 className="text-3xl font-bold text-white relative">
            Experience
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {companies.map((company, index) => (
            <div
              key={index}
              className="bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700/50 hover:border-emerald-400/50 transition-colors group"
            >
              <div className="text-5xl font-bold text-emerald-400/20 group-hover:text-emerald-400/30 transition-colors">
                {company.number}
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-emerald-400">
                  {company.name}
                </h3>
                <p className="text-gray-300 font-medium mt-1">
                  {company.position}
                </p>
              </div>
              <p className="text-gray-400 mt-4 leading-relaxed">
                {company.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
