import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  const navItems = [
    { id: "about", text: "About Me" },
    { id: "work", text: "W/M" },
    { id: "jobs", text: "Jobs" },
    { id: "contacts", text: "Contacts" },
  ];

  return (
    <motion.div
      className={`p-4 fixed w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto font-Custom">
        <motion.img
          src="/assets/Group 3.svg"
          alt="Logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-10 h-10"
        />

        {/* Бургер для sm/md */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="text-black focus:outline-none"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Навигация: десктоп */}
        <div className="hidden lg:flex flex-1 justify-center gap-20 text-3xl">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="hover:text-gray-500 transition-colors"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {item.text}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Меню для sm/md */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-md py-4 z-40"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="flex flex-col items-center gap-4 text-lg">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="hover:text-gray-500 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.text}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
