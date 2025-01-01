import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  return (
    <div className="flex items-center justify-center min-h-[95vh] md:min-h-[100vh] md:min-h-[100vh]">
      <div className="text-center">
        <h1 className="text-3xl md:text-2xl font-medium text-white mb-10 md:mb-6">
          Welcome
        </h1>

        <h2 className="text-3xl md:text-6xl font-light text-white mb-10 md:mb-6">
          I'm a{" "}
          <span>
            <Typewriter
              words={["Backend & AI Developer"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={150}
              deleteSpeed={150}
              delaySpeed={2000}
            />
          </span>
        </h2>

        <p className="text-white text-lg mb-10 md:mb-6">
          based in Nairobi, Kenya.
        </p>

        <a href="#contact">
          <button className="mt-2 bg-transparent border-2 border-[#37b890] text-white font-semibold py-3 px-8 rounded-full hover:bg-[#37b890]">
            Contact Me
          </button>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
