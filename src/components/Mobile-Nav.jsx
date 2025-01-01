import { useState, useRef } from "react";
import { useClickAway } from "react-use";
import { AnimatePresence, motion } from "framer-motion";
import Hamburger from "hamburger-react";

const routes = [
  {
    title: "Home",
    href: "#home",
  },
  {
    title: "About Me",
    href: "#about",
  },
  {
    title: "Skills",
    href: "#skills",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "Services",
    href: "#services",
  },
  {
    title: "Achievements",
    href: "#achievements",
  },
];

const menuVariants = {
  closed: {
    opacity: 0,
    x: "100%",
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
  open: {
    opacity: 1,
    x: "0%",
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  closed: {
    opacity: 0,
    x: 20,
  },
  open: {
    opacity: 1,
    x: 0,
  },
};

function MobileNav() {
  const [isOpen, setOpen] = useState(false);
  const divRef = useRef(null);

  useClickAway(divRef, () => setOpen(false));

  return (
    <div ref={divRef} className="md:hidden z-50">
      <div className="absolute top-4 right-4 z-50">
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          size={32}
          color="#FFFFFF"
        />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed top-0 right-0 h-[750px] w-[275px] bg-[#111828] px-10 pt-16 pb-10"
          >
            <div className="flex flex-col justify-between py-10 h-full">
              <div className="flex flex-col space-y-8">
                {routes.map((route, idx) => (
                  <motion.a
                    key={idx}
                    variants={itemVariants}
                    onClick={() => setOpen(false)}
                    href={route.href}
                    className="text-white text-base hover:font-medium transition-all"
                  >
                    {route.title}
                  </motion.a>
                ))}
              </div>

              <motion.a
                href="#contact"
                variants={itemVariants}
                onClick={() => setOpen(false)}
                className="px-6 py-3 bg-[#38b891] text-white w-[75%] text-sm font-medium text-center hover:bg-opacity-90 transition-all"
              >
                Let's Talk
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default MobileNav;
