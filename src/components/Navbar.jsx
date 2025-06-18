import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 430); // iPhone 14 Pro Max width
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "about", text: "About Me" },
    { id: "work", text: "W/M" },
    { id: "jobs", text: "Jobs" },
    { id: "contacts", text: "Contacts" },
  ];

  return (
    <motion.div
      className={`p-4 fixed w-full z-50 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div
        className={`flex ${
          isMobile ? "justify-between" : "flex-row items-center gap-60"
        } font-Custom`}
      >
        <motion.img
          src="src/assets/Group 3.svg"
          alt="Logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={isMobile ? "w-10 h-10" : ""}
        />

        {isMobile ? (
          // Mobile version - horizontal layout with smaller text
          <div className="flex items-center gap-4">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="hover:text-gray-500 transition-colors text-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {item.text.split(" ")[0]}{" "}
                {/* Show only first word for mobile */}
              </motion.button>
            ))}
          </div>
        ) : (
          // Desktop version (LG) - original layout
          navItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="hover:text-gray-500 transition-colors text-3xl"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {item.text}
            </motion.button>
          ))
        )}
      </div>
    </motion.div>
  );
};

export default Navbar;
