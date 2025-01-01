import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Socials() {
  return (
    <div className="absolute bottom-20 md:bottom-15 left-1/2 transform -translate-x-1/2 flex items-center justify-center space-x-7 md:space-y-6 md:space-x-0 md:flex-col md:items-end md:right-4  md:left-auto">
      {/* Social Icons */}
      <a
        href="https://github.com/AmosMaru"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="text-white font-bold hover:text-[#37b890] transition-all duration-300 text-xl md:text-2xl lg:text-3xl" />
      </a>

      <a
        href="https://www.linkedin.com/in/amos-kibet-maru-107249230/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedinIn className="text-white font-bold hover:text-[#37b890] transition-all duration-300 text-xl md:text-2xl lg:text-3xl" />
      </a>

      <a
        href="https://x.com/Amoskibetmaru"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaXTwitter className="text-white font-bold hover:text-[#37b890] transition-all duration-300 text-xl md:text-2xl lg:text-3xl" />
      </a>
    </div>
  );
}

export default Socials;
