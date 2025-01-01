import React from "react";
import {
  FaPencilRuler,
  FaCode,
  FaBullhorn,
  FaChartLine,
  FaArrowRight,
} from "react-icons/fa";

const ServiceCard = ({ service, index }) => (
  <div className="group relative">
    <div className="relative z-10 bg-[#1d2839] rounded-xl p-8 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/10">
      {/* Icon Container */}
      <div className="absolute -top-8 left-8">
        <div className="bg-[#232f44] p-4 rounded-xl shadow-lg transform transition-transform duration-500 group-hover:rotate-6">
          <div className="text-emerald-400 transform transition-transform duration-500 group-hover:scale-110">
            {service.icon}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mt-8 pt-4">
        <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-emerald-400 transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
          {service.description}
        </p>

        {/* Features List */}
        <ul className="space-y-2 mb-6">
          {service.features.map((feature, idx) => (
            <li
              key={idx}
              className="flex items-center text-sm text-gray-400 group-hover:text-gray-300"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 mr-2"></span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const ServicesSection = () => {
  const services = [
    {
      title: "Website Development",
      description:
        "Crafting responsive and visually engaging websites to meet unique client needs, from personal portfolios and landing pages to comprehensive business sites.",
      icon: <FaPencilRuler size={32} />,
      features: [
        "Responsive Design for All Devices",
        "Custom Portfolio & Landing Pages",
        "SEO-Ready & Fast Loading",
      ],
    },
    {
      title: "Software Systems Development",
      description:
        "Developing reliable, scalable software solutions that align with business goals, leveraging modern technologies to ensure robust system functionality.",
      icon: <FaCode size={32} />,
      features: [
        "Full-Stack Development",
        "Backend Systems & APIs",
        "Performance & Security Optimization",
        "Database Design & Management",
      ],
    },
    {
      title: "Consultancy",
      description:
        "Offering expert advice on system architecture, project planning, and technology selection to help clients achieve optimal software solutions.",
      icon: <FaBullhorn size={32} />,
      features: [
        "Technology Consultation",
        "Scalability & Efficiency Planning",
        "Project Roadmap Development",
      ],
    },
    {
      title: "Technical Documentation & Writing",
      description:
        "Creating clear, comprehensive documentation to support software projects, enabling users and teams to understand and maintain systems effectively.",
      icon: <FaChartLine size={32} />,
      features: [
        "Technical Documentation",
        "User Guides & Manuals",
        "System & API Documentation",
        "Process Workflows & Diagrams",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="bg-[#182130] text-white py-24 relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-40 left-20 w-72 h-72 bg-emerald-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-0">
        {/* Header */}
        <div className="relative text-center mb-20">
          <h2 className="text-4xl md:text-8xl font-bold text-gray-500/10 select-none absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
            SERVICES
          </h2>
          <h3 className="text-3xl font-bold text-white relative mb-2">
            What I Offer
          </h3>
          <div className="w-20 h-1 bg-[#32daa1] mx-auto mb-4"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
