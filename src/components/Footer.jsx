import {
  Phone,
  Mail,
  Home,
  User,
  Wrench,
  Code,
  Contact,
  ChevronRight,
  FileText,
} from "lucide-react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const quickLinks = [
    { href: "#home", icon: Home, label: "Home" },
    { href: "#about", icon: User, label: "About" },
    { href: "#skills", icon: Code, label: "SkillSet" },
    { href: "#projects", icon: FileText, label: "Projects" },
    { href: "#services", icon: Wrench, label: "Services" },
    { href: "#contact", icon: Contact, label: "Contact" },
  ];

  const contactInfo = [
    {
      href: "tel:+25468500572",
      icon: Phone,
      label: "+254 768 500 572",
      className: "text-[#32daa1]",
    },
    {
      href: "mailto:amosmaru10@gmail.com",
      icon: Mail,
      label: "amosmaru10@gmail.com",
      className: "text-[#32daa1]",
    },
  ];

  const socialLinks = [
    {
      href: "https://github.com/AmosMaru",
      icon: FaGithub,
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/amos-kibet-maru-107249230/",
      icon: FaLinkedinIn,
      label: "LinkedIn",
    },
    {
      href: "https://x.com/Amoskibetmaru",
      icon: FaXTwitter,
      label: "Twitter",
    },
  ];

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Description */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold text-xl mb-4">Amos Kibet</h3>
            <p className="text-gray-400 mb-6 w-[80%]">
              Passionate developer crafting innovative digital solutions with
              modern technologies.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  aria-label={social.label}
                >
                  <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-[#32daa1] transition-colors duration-300">
                    <social.icon className="text-white text-xl group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#32daa1]"></span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="group flex items-center gap-2 hover:text-white transition-all duration-300 hover:translate-x-2"
                  >
                    <ChevronRight
                      size={16}
                      className="text-[#32daa1] opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    <link.icon size={16} className="text-[#32daa1]" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative">
              Contact Info
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#32daa1]"></span>
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="group flex items-center gap-3  hover:text-white transition-all duration-300"
                  >
                    <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-[#32daa1] transition-colors duration-300">
                      <item.icon
                        size={14}
                        className={`hover:text-white ${item.className}`}
                      />
                    </div>
                    <span className="text-sm">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700/50 my-8"></div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-400">
          <p className="hover:text-white transition-colors duration-300">
            © {new Date().getFullYear()} Amos Kibet. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
