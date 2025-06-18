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
  const isMobile = useMediaQuery({ maxWidth: 430 }); // iPhone 14 Pro Max width

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
      className={`mt-10 ${isMobile ? "px-4" : "px-4 md:mt-40"}`}
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center">
        <motion.h1
          className={`font-bold ${
            isMobile ? "text-3xl pt-20" : "text-4xl pt-40"
          }`}
          initial={{ y: -20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          About Me
        </motion.h1>
        <motion.span
          className={`text-blue-600 ${isMobile ? "text-xl" : "text-2xl ml-45"}`}
          initial={{ y: -20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          About Me
        </motion.span>

        <motion.div
          className={`flex flex-col ${
            isMobile ? "" : "md:flex-row"
          } items-center justify-center mt-10 gap-10`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <motion.div
            className={`${isMobile ? "w-full" : "w-full md:w-auto"}`}
            whileHover={{ scale: isMobile ? 1 : 1.05 }}
          >
            <img
              src="src/assets/Group 16.svg"
              alt="Profile"
              className={`mx-auto ${isMobile ? "" : "mr-290"}`}
            />
          </motion.div>
          <motion.p
            className={`text-left ${
              isMobile
                ? "text-lg mt-4"
                : "lg:text-4xl lg:ml-40 md:text-2xl absolute"
            }`}
            initial={{ x: isMobile ? 0 : 50 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            Привет! Я Рамина. Специализируюсь на {isMobile ? "" : <br />}
            графическом дизайне, создаю стильные и {isMobile ? "" : <br />}
            продуманные визуальные решения. {isMobile ? "" : <br />}
            Занимаюсь разработкой логотипов, {isMobile ? "" : <br />}
            оформлением соц.сетей, презентаций и {isMobile ? "" : <br />}
            прочего.
            {isMobile ? " " : <br />}В работе сочетаю креативный подход,{" "}
            {isMobile ? "" : <br />}
            внимание к деталям и понимание бренда. {isMobile ? "" : <br />}
            Всегда открыта к новым идеям и готова {isMobile ? "" : <br />}
            воплотить ваши задумки в дизайн!
          </motion.p>
        </motion.div>

        {/* Программы */}
        <motion.div
          className={`mt-20 ${
            isMobile ? "w-full" : "max-w-100"
          } mx-auto bg-[#5F6BD4] rounded-4xl ${isMobile ? "" : "ml-20"}`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <h2
            className={`text-white font-bold mb-6 text-center pt-8 ${
              isMobile ? "text-2xl" : "text-3xl"
            }`}
          >
            Работа в программах:
          </h2>
          <div
            className={`flex flex-col ${
              isMobile ? "gap-2" : "gap-1"
            } justify-center pb-8`}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className={`flex flex-row items-center w-full ${
                  isMobile ? "ml-4" : "ml-10"
                } mb-2`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: isMobile ? 1 : 1.03 }}
              >
                <div className="bg-blue-100 rounded-full p-2">
                  {React.cloneElement(skill.icon, {
                    className: "text-blue-600 text-xl",
                  })}
                </div>
                <span
                  className={`ml-4 text-white ${
                    isMobile ? "text-lg" : "text-xl"
                  }`}
                >
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Образование и опыт работы */}
        <motion.div
          className={`bg-[#5F6BD4] mx-auto rounded-4xl ${
            isMobile ? "mt-10 w-full" : "max-w-200 -mt-90 ml-200"
          }`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
        >
          <h2
            className={`text-white font-bold mb-8 text-center pt-8 ${
              isMobile ? "text-2xl" : "text-3xl"
            }`}
          >
            Образование и опыт работы
          </h2>
          <div
            className={`${
              isMobile ? "flex flex-col" : "grid md:grid-cols-2"
            } gap-8 pb-8 px-8`}
          >
            <div>
              <h3
                className={`text-white font-semibold mb-4 ${
                  isMobile ? "text-lg" : "text-xl"
                }`}
              >
                Образование
              </h3>
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  className="text-white mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.3 + index * 0.1 }}
                >
                  <p className="font-medium">{item.period}</p>
                  <p>{item.name}</p>
                </motion.div>
              ))}
            </div>
            <div>
              <h3
                className={`text-white font-semibold mb-4 ${
                  isMobile ? "text-lg" : "text-xl"
                }`}
              >
                Опыт работы
              </h3>
              {experience.map((item, index) => (
                <motion.div
                  key={index}
                  className="text-white mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.5 + index * 0.1 }}
                >
                  <p className="font-medium">{item.period}</p>
                  <p>{item.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Секция "Почему Я?" */}
      <div className={`text-center ${isMobile ? "mt-40" : "mt-60"} relative`}>
        {!isMobile && (
          <img
            src="src/assets/Group 10.svg"
            className="mx-auto"
            alt="Decoration"
          />
        )}
        <motion.h1
          className={`font-bold inline-block cursor-pointer ${
            isMobile ? "text-3xl mt-10" : "text-4xl -mt-120 -ml-25 absolute"
          }`}
          whileHover={{
            scale: isMobile ? 1 : 1.05,
            transition: { duration: 0.2 },
          }}
        >
          Почему Я?
        </motion.h1>

        {/* Карточки */}
        <div className={`${isMobile ? "grid grid-cols-1 gap-6 mt-10" : ""}`}>
          {/* Карточка 1 - Качество */}
          <motion.div
            className={`bg-[#5F6BD4] bg-opacity-10 rounded-3xl p-6 text-white border border-white 
              ${
                isMobile
                  ? "w-full"
                  : "w-64 absolute top-0 left-1/4 transform -translate-x-1/2 -translate-y-1/2 mt-80"
              }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{
              scale: isMobile ? 1.02 : 1.05,
              boxShadow: "0 10px 25px -5px rgba(95, 107, 212, 0.3)",
            }}
          >
            <div className="flex items-center mb-4">
              <motion.img
                src="src/assets/Ellipse 18.svg"
                whileHover={{
                  rotate: isMobile ? 0 : 360,
                  transition: { duration: 0.8 },
                }}
              />
              <div className="font-bold mr-3 -ml-6">1.</div>
              <motion.h2
                className={`font-bold ${isMobile ? "text-lg" : "text-xl ml-5"}`}
                whileHover={{ color: "#ffffff" }}
              >
                Качество
              </motion.h2>
            </div>
            <motion.p
              className={`text-left ${
                isMobile ? "text-base" : "text-lg ml-15"
              }`}
              whileHover={{ scale: isMobile ? 1 : 1.02 }}
            >
              Качество работ гарантированно на уровне 300 PX
            </motion.p>
          </motion.div>

          {/* Карточка 2 - Лояльность */}
          <motion.div
            className={`bg-[#5F6BD4] bg-opacity-10 rounded-3xl p-6 text-white border border-white 
              ${
                isMobile
                  ? "w-full mt-6"
                  : "w-64 absolute top-20 left-3/4 transform -translate-x-1/2 -translate-y-1/2"
              }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{
              scale: isMobile ? 1.02 : 1.05,
              boxShadow: "0 10px 25px -5px rgba(95, 107, 212, 0.3)",
            }}
          >
            <div className="flex items-center mb-4">
              <motion.img
                src="src/assets/Ellipse 18.svg"
                whileHover={{ scale: isMobile ? 1 : 1.2 }}
              />
              <div className="font-bold -ml-6">2.</div>
              <motion.h2
                className={`font-bold ${isMobile ? "text-lg" : "text-xl ml-5"}`}
                whileHover={{ x: isMobile ? 0 : 5 }}
              >
                Лояльность
              </motion.h2>
            </div>
            <motion.p
              className={`text-left ${
                isMobile ? "text-base" : "text-lg ml-12"
              }`}
              whileHover={{ x: isMobile ? 0 : 3 }}
            >
              Лояльный подход к поправкам
            </motion.p>
          </motion.div>

          {/* Карточка 3 - Индивидуальность */}
          <motion.div
            className={`bg-[#5F6BD4] bg-opacity-10 rounded-3xl p-6 text-white border border-white 
              ${isMobile ? "w-full mt-6" : "w-74 relative -top-65 left-80"}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{
              scale: isMobile ? 1.02 : 1.03,
              y: isMobile ? 0 : -5,
              boxShadow: "0 10px 25px -5px rgba(95, 107, 212, 0.3)",
            }}
          >
            <div className="flex items-center mb-4">
              <motion.img
                src="src/assets/Ellipse 18.svg"
                whileHover={{
                  rotate: isMobile ? 0 : 180,
                  transition: { duration: 0.5 },
                }}
              />
              <div className="font-bold -ml-6">3.</div>
              <motion.h2
                className={`font-bold ${isMobile ? "text-lg" : "text-xl ml-5"}`}
                whileHover={{ scale: isMobile ? 1 : 1.05 }}
              >
                Индивидуальность
              </motion.h2>
            </div>
            <motion.p
              className={`text-left ${
                isMobile ? "text-base" : "text-lg ml-15"
              }`}
              whileHover={{ scale: isMobile ? 1 : 1.02 }}
            >
              Индивидуальный подход к каждому дизайну клиента
            </motion.p>
          </motion.div>

          {/* Карточка 4 - Анализ */}
          {!isMobile && (
            <motion.div
              className="bg-[#5F6BD4] bg-opacity-10 rounded-3xl p-6 text-white border border-white w-64 relative left-270 -top-120"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{
                scale: 1.03,
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(95, 107, 212, 0.3)",
              }}
            >
              <div className="flex items-center mb-4">
                <motion.div
                  className="text-3xl font-bold mr-3"
                  whileHover={{ scale: 1.1 }}
                >
                  4.
                </motion.div>
                <motion.h2
                  className="text-xl font-bold"
                  whileHover={{ scale: 1.02 }}
                >
                  Анализ
                </motion.h2>
              </div>
              <motion.p className="text-lg" whileHover={{ scale: 1.02 }}>
                Анализ рынка
              </motion.p>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
