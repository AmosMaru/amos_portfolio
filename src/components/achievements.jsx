import React from "react";
import { FaTrophy } from "react-icons/fa";

const AchievementCard = ({ achievement }) => (
  <div className="group relative">
    <div className="relative z-10 bg-[#1d2839] rounded-xl p-8 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/10">
      {/* Image Container */}
      <div className="w-full h-64 relative mb-6 overflow-hidden rounded-lg">
        <img
          src={achievement.image}
          alt={achievement.title}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1d2839] to-transparent opacity-60"></div>
      </div>

      {/* Icon Container */}
      <div className="absolute -top-8 left-8">
        <div className="bg-[#232f44] p-4 rounded-xl shadow-lg transform transition-transform duration-500 group-hover:rotate-6">
          <div className="text-emerald-400 transform transition-transform duration-500 group-hover:scale-110">
            <FaTrophy size={32} />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-emerald-400 transition-colors duration-300">
          {achievement.title}
        </h3>
        <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
          {achievement.description}
        </p>

        <ul className="space-y-2">
          {achievement.details.map((detail, idx) => (
            <li
              key={idx}
              className="flex items-center text-sm text-gray-400 group-hover:text-gray-300"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 mr-2"></span>
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const AchievementsSection = () => {
  const achievements = [
    {
      title: "Futurize Hackathon Winner - Hazina Africa",
      description:
        "Emerged victorious in the Futurize hackathon with Hazina Africa, an innovative fintech solution that leverages Vambo AI's multilingual capabilities to make financial services more accessible across Africa.",
      image: "/Hazina.png",
      details: [
        "Developed Hazina Africa, a comprehensive AI-powered fintech solution",
        "Integrated Vambo AI's multilingual technology for broader accessibility",
        "Created robust financial solutions for diverse  markets",
        "Won first place for innovative use of AI in financial inclusion",
      ],
    },
    
  ];

  return (
    <section
      id="achievements"
      className="bg-[#111827] text-white py-24 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-0">
        <div className="relative text-center mb-20">
          <h2 className="text-4xl md:text-8xl font-bold text-gray-500/10 select-none absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
            ACHIEVEMENTS
          </h2>
          <h3 className="text-3xl font-bold text-white relative mb-2">
            Success
          </h3>
          <div className="w-20 h-1 bg-[#32daa1] mx-auto mb-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16">
          {achievements.map((achievement, index) => (
            <AchievementCard key={index} achievement={achievement} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
