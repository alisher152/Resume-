import React from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 430 }); // iPhone 14 Pro Max width

  return (
    <div className={`flex flex-col ${isMobile ? "pt-32" : "pt-60"}`}>
      <motion.div
        className={`text-black font-bold relative z-10 ${
          isMobile ? "text-4xl" : "text-8xl"
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className={isMobile ? "ml-4" : "ml-20"}
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          Portfolio
        </motion.h1>

        <motion.div
          className={isMobile ? "ml-8 mt-2" : "ml-80 mt-4"}
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 50, delay: 0.2 }}
        >
          <h1 className={`font-bold ${isMobile ? "text-4xl" : "text-8xl"}`}>
            Graphic designer
          </h1>
        </motion.div>
      </motion.div>

      <div className="relative mt-10">
        {!isMobile && (
          <>
            <motion.div
              className="absolute left-80 w-[84%] rotate-1 transform origin-left"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="bg-[#8F9AFF] py-6 mt-26 ml-60">
                <div className="text-2xl font-bold text-white opacity-90 whitespace-nowrap animate-[marquee_15s_linear_infinite] pl-20">
                  Graphic designer • Graphic designer • Graphic designer •
                  Graphic designer • Graphic designer • Graphic designer •
                  Graphic designer • Graphic designer •
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
                  Graphic designer • Graphic designer • Graphic designer •
                  Graphic designer • Graphic designer
                </div>
              </div>
            </motion.div>
          </>
        )}

        {isMobile && (
          <motion.div
            className="bg-[#8F9AFF] py-4 mt-8 mx-4 rotate-1"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="text-base font-bold text-white opacity-90 whitespace-nowrap animate-[marquee_10s_linear_infinite]">
              Graphic designer • Graphic designer •
            </div>
          </motion.div>
        )}

        <motion.div
          className={`flex ${
            isMobile ? "justify-center" : "justify-end"
          } relative z-20 ${isMobile ? "-mt-20" : "-mt-75"}`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: isMobile ? 0.4 : 0.8 }}
        >
          <img
            src="src/assets/я фон 1.svg"
            className={`${
              isMobile ? "h-[250px] mt-4" : "h-[500px] mr-60 -mt-20"
            }`}
            alt="Decorative background"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
