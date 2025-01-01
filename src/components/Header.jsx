import Navbar from "./Nav-Desktop";
import Button from "./Button";
import Logo from "./Logo";
import MobileNav from "./Mobile-Nav";
import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 2) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-black/40 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="md:mx-24 md:mt-2">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Logo />
          <Navbar />
          <Button className="hidden md:block bg-[#37b890] font-semibold rounded-lg hover:bg-emerald-300 transition-colors">
            <a className="pb-2" href="#contact">
              Let's Talk
            </a>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
