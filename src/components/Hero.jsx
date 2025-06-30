import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="flex flex-col pt-32 lg:pt-60" id="home">
      <motion.div
        className="text-black font-bold relative z-10 text-4xl sm:text-5xl md:text-6xl lg:text-8xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="ml-4 lg:ml-20"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          Portfolio
        </motion.h1>

        <motion.div
          className="ml-8 mt-2 sm:ml-16 md:ml-24 lg:ml-80 lg:mt-4"
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 50, delay: 0.2 }}
        >
          <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-8xl">
            Graphic designer
          </h1>
        </motion.div>
      </motion.div>

      <div className="relative mt-10">
        {/* Для LG и выше — сохраняем как есть */}
        <div className="hidden lg:block">
          <motion.div
            className="absolute left-80 w-[84%] rotate-1 transform origin-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="bg-[#8F9AFF] py-6 mt-26 ml-60">
              <div className="text-2xl font-bold text-white opacity-90 whitespace-nowrap animate-[marquee_15s_linear_infinite] pl-20">
                Graphic designer • Graphic designer • Graphic designer • Graphic
                designer • Graphic designer • Graphic designer • Graphic
                designer • Graphic designer •
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute left-80 w-[72%] mt-25 ml-50"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="bg-[#8F9AFF] -rotate-3 py-6 mt-28">
              <div className="text-2xl font-bold text-white opacity-90 whitespace-nowrap animate-[marquee_20s_linear_infinite] pl-20">
                Graphic designer • Graphic designer • Graphic designer • Graphic
                designer • Graphic designer
              </div>
            </div>
          </motion.div>
        </div>

        {/* Для sm и md — упрощённая версия */}
        <div className="block lg:hidden px-4">
          <motion.div
            className="bg-[#8F9AFF] py-4 mt-8 rotate-1"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="text-base sm:text-lg font-bold text-white opacity-90 whitespace-nowrap animate-[marquee_12s_linear_infinite]">
              Graphic designer • Graphic designer • Graphic designer •
            </div>
          </motion.div>
        </div>

        <motion.div
          className="flex justify-center lg:justify-end relative z-20 -mt-20 lg:-mt-[300px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
        >
          <img
            src="/assets/BG.svg"
            className="h-[250px] sm:h-[300px] md:h-[350px] lg:h-[500px] lg:mr-60 lg:-mt-20"
            alt="Decorative background"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
