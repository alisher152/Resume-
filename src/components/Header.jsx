import React from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import {
  FaPenFancy,
  FaPalette,
  FaLayerGroup,
  FaPenNib,
  FaFigma,
} from "react-icons/fa";

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const skills = [
    { icon: <FaPenFancy />, name: "Illustrator" },
    { icon: <FaPalette />, name: "Photoshop" },
    { icon: <FaLayerGroup />, name: "InDesign" },
    { icon: <FaPenNib />, name: "CorelDraw" },
    { icon: <FaFigma />, name: "Figma" },
  ];

  const education = [
    { period: "2022-2024", name: "Колледж КазГАСА" },
    { period: "2024-2027", name: "КазГаса университет" },
  ];

  const experience = [
    { period: "2023-2024", name: "Zan company" },
    { period: "2022-2025", name: "Ray art group" },
  ];

  return (
    <motion.div
      className="mt-10 px-4 lg:px-4 lg:mt-40"
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center">
        <motion.h1
          className="font-bold text-3xl pt-20 lg:text-4xl lg:pt-40"
          initial={{ y: -20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          About Me
        </motion.h1>
        <motion.span
          className="text-blue-600 text-xl lg:text-2xl lg:ml-45"
          initial={{ y: -20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          About Me
        </motion.span>

        <motion.div
          className="flex flex-col lg:flex-row items-center justify-center mt-10 gap-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <motion.div className="w-full lg:w-auto" whileHover={{ scale: 1.05 }}>
            <img
              src="/assets/Group 16.svg"
              alt="Profile"
              className="mx-auto lg:mr-290"
            />
          </motion.div>
          <motion.p
            className="text-left text-lg mt-4 lg:text-4xl lg:ml-40 md:text-2xl lg:absolute"
            initial={{ x: 50 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            Привет! Я Рамина. Специализируюсь на{" "}
            <br className="hidden lg:block" />
            графическом дизайне, создаю стильные и{" "}
            <br className="hidden lg:block" />
            продуманные визуальные решения. <br className="hidden lg:block" />
            Занимаюсь разработкой логотипов, <br className="hidden lg:block" />
            оформлением соц.сетей, презентаций и{" "}
            <br className="hidden lg:block" />
            прочего. <br className="hidden lg:block" />В работе сочетаю
            креативный подход, <br className="hidden lg:block" />
            внимание к деталям и понимание бренда.{" "}
            <br className="hidden lg:block" />
            Всегда открыта к новым идеям и готова{" "}
            <br className="hidden lg:block" />
            воплотить ваши задумки в дизайн!
          </motion.p>
        </motion.div>

        {/* Почему Я? */}
        <div className={`text-center ${isMobile ? "mt-20" : "mt-60"} relative`}>
          {!isMobile && (
            <img
              src="/assets/Group 10.svg"
              className="mx-auto"
              alt="Decoration"
            />
          )}

          <motion.h1
            className={`font-bold inline-block cursor-pointer ${
              isMobile ? "text-3xl mt-10" : "text-4xl -mt-120 -ml-25 absolute"
            }`}
            whileHover={{ scale: 1.05 }}
          >
            Почему Я?
          </motion.h1>

          <div
            className={`${
              isMobile ? "flex flex-col items-center gap-6 mt-10" : ""
            }`}
          >
            {/* Карточка 1 */}
            <motion.div
              className={`bg-[#5F6BD4] bg-opacity-10 rounded-3xl p-6 text-white border border-white ${
                isMobile
                  ? "w-full"
                  : "w-64 absolute top-0 left-1/4 transform -translate-x-1/2 -translate-y-1/2 mt-80"
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center mb-4">
                <motion.img src="/assets/Ellipse 18.svg" />
                <div className="font-bold mr-3 -ml-6">1.</div>
                <motion.h2 className="font-bold ml-5 text-lg lg:text-xl">
                  Качество
                </motion.h2>
              </div>
              <motion.p className="text-left text-base lg:text-lg lg:ml-15">
                Качество работ гарантированно на уровне 300 PX
              </motion.p>
            </motion.div>

            {/* Карточка 2 */}
            <motion.div
              className={`bg-[#5F6BD4] bg-opacity-10 rounded-3xl p-6 text-white border border-white ${
                isMobile
                  ? "w-full"
                  : "w-64 absolute top-20 left-3/4 transform -translate-x-1/2 -translate-y-1/2"
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center mb-4">
                <motion.img src="/assets/Ellipse 18.svg" />
                <div className="font-bold -ml-6">2.</div>
                <motion.h2 className="font-bold ml-5 text-lg lg:text-xl">
                  Лояльность
                </motion.h2>
              </div>
              <motion.p className="text-left text-base lg:text-lg lg:ml-12">
                Лояльный подход к поправкам
              </motion.p>
            </motion.div>

            {/* Карточка 3 */}
            <motion.div
              className={`bg-[#5F6BD4] bg-opacity-10 rounded-3xl p-6 text-white border border-white ${
                isMobile ? "w-full" : "w-74 relative -top-65 left-80"
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center mb-4">
                <motion.img src="/assets/Ellipse 18.svg" />
                <div className="font-bold -ml-6">3.</div>
                <motion.h2 className="font-bold ml-5 text-lg lg:text-xl">
                  Индивидуальность
                </motion.h2>
              </div>
              <motion.p className="text-left text-base lg:text-lg lg:ml-15">
                Индивидуальный подход к каждому дизайну клиента
              </motion.p>
            </motion.div>

            {/* Карточка 4 адаптация для мобильных */}
            {isMobile && (
              <motion.div
                className="bg-[#5F6BD4] bg-opacity-10 rounded-3xl p-6 text-white border border-white w-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center mb-4">
                  <motion.img src="/assets/Ellipse 18.svg" />
                  <div className="font-bold -ml-6">4.</div>
                  <motion.h2 className="text-lg font-bold ml-5">
                    Анализ
                  </motion.h2>
                </div>
                <motion.p className="text-base text-left">
                  Анализ рынка
                </motion.p>
              </motion.div>
            )}

            {/* Оригинальная карточка 4 только для lg */}
            {!isMobile && (
              <motion.div
                className="bg-[#5F6BD4] bg-opacity-10 rounded-3xl p-6 text-white border border-white w-64 relative left-270 -top-120"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center mb-4">
                  <motion.img src="/assets/Ellipse 18.svg" />
                  <div className="font-bold -ml-6">4.</div>
                  <motion.h2 className="text-xl font-bold ml-5">
                    Анализ
                  </motion.h2>
                </div>
                <motion.p className="text-lg">Анализ рынка</motion.p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
