function Navbar() {
  return (
    <nav className="hidden md:block text-md text-white font-semibold">
      <ul className="flex justify-center items-center space-x-5 xl:space-x-12">
        <li>
          <a
            className="hover:text-[#37b890] pb-2 hover:border-b-2 hover:border-[#37b890] transition duration-300 ease-in-out"
            href="#home"
          >
            Home
          </a>
        </li>
        <li>
          <a
            className="hover:text-[#37b890] pb-2 hover:border-b-2 hover:border-[#37b890] transition duration-300 ease-in-out"
            href="#about"
          >
            About Me
          </a>
        </li>
        <li>
          <a
            className="hover:text-[#37b890] pb-2 hover:border-b-2 hover:border-[#37b890] transition duration-300 ease-in-out"
            href="#skills"
          >
            Skills
          </a>
        </li>
        <li>
          <a
            className="hover:text-[#37b890] pb-2 hover:border-b-2 hover:border-[#37b890] transition duration-300 ease-in-out"
            href="#projects"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            className="hover:text-[#37b890] pb-2 hover:border-b-2 hover:border-[#37b890] transition duration-300 ease-in-out"
            href="#services"
          >
            Services
          </a>
        </li>
        <li>
          <a
            className="hover:text-[#37b890] pb-2 hover:border-b-2 hover:border-[#37b890] transition duration-300 ease-in-out"
            href="#achievements"
          >
            Achievements
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
