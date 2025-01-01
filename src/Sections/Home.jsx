import Header from "../components/Header";
import HeroSection from "../components/Hero";
import Socials from "../components/Socials";

const Home = () => {
  return (
    <div id="home" className="relative min-h-screen px-2  md:px-32">
      {/* Background div with image and overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/image.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay div for opacity/color */}
        <div className="absolute inset-0 bg-gray-900/75" />{" "}
        {/* /50 means 50% opacity */}
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <Socials />
      </div>
    </div>
  );
};

export default Home;
