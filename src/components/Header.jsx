import React from "react";
import { motion } from "framer-motion";
import {
  FaPenFancy,
  FaPalette,
  FaLayerGroup,
  FaPenNib,
  FaFigma,
} from "react-icons/fa";

const Header = () => {
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
      className="mt-20 md:mt-40 px-4"
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center">
        <motion.h1
          className="text-4xl font-bold pt-40"
          initial={{ y: -20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          About Me
        </motion.h1>
        <motion.span
          className="text-2xl text-blue-600 ml-45"
          initial={{ y: -20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          About Me
        </motion.span>

        <motion.div
          className="flex flex-col md:flex-row items-center justify-center mt-10 gap-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <motion.div className="w-full md:w-auto" whileHover={{ scale: 1.05 }}>
            <img
              src="src/assets/Group 16.svg"
              alt="Profile"
              className="mx-auto mr-290"
            />
          </motion.div>
          <motion.p
            className="lg:text-4xl lg:ml-40 md:text-2xl text-left absolute"
            initial={{ x: 50 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            Привет! Я Рамина. Специализируюсь на <br /> графическом дизайне,
            создаю стильные и <br /> продуманные визуальные решения. <br />
            Занимаюсь разработкой логотипов, <br /> оформлением соц.сетей,
            презентаций и <br /> прочего.
            <br />
            В работе сочетаю креативный подход, <br /> внимание к деталям и
            понимание бренда. <br /> Всегда открыта к новым идеям и готова{" "}
            <br />
            воплотить ваши задумки в дизайн!
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-40 max-w-100 mx-auto bg-[#5F6BD4] rounded-4xl ml-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-3xl text-white font-bold mb-6 text-center pt-8">
            Работа в программах:
          </h2>
          <div className="flex flex-col justify-center gap-1 pb-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="flex flex-row items-center w-full ml-10 mb-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="bg-blue-100 rounded-full p-2">
                  {React.cloneElement(skill.icon, {
                    className: "text-blue-600 text-xl", // Уменьшил размер иконки
                  })}
                </div>
                <span className="text-xl ml-4 text-white">{skill.name}</span>{" "}
                {/* Уменьшил размер текста */}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="max-w-200 bg-[#5F6BD4] mx-auto -mt-90 ml-200 rounded-4xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
        >
          <h2 className="text-3xl text-white font-bold mb-8 text-center pt-8">
            Образование и опыт работы
          </h2>
          <div className="grid md:grid-cols-2 gap-8 pb-8 px-8">
            <div>
              <h3 className="text-xl text-white font-semibold mb-4">
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
              <h3 className="text-xl text-white font-semibold mb-4">
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

      {/* Секция "Почему Я?" с hover-эффектами */}
      <div className="text-center mt-60 relative">
        <img
          src="src/assets/Group 10.svg"
          className="mx-auto"
          alt="Decoration"
        />
        <motion.h1
          className="text-4xl font-bold -mt-120 -ml-25 absolute inline-block cursor-pointer"
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.2 },
          }}
        >
          Почему Я?
        </motion.h1>

        {/* Карточка 1 - Качество */}
        <div className="absolute top-0 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
          <motion.div
            className="bg-[#5F6BD4] bg-opacity-10 rounded-3xl p-6 text-white border border-white w-64 mt-80
                 transition-all duration-300 hover:bg-opacity-20 hover:border-opacity-100 hover:shadow-lg hover:-translate-y-1"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(95, 107, 212, 0.3)",
            }}
          >
            <div className="flex items-center mb-4">
              <motion.img
                src="src\assets\Ellipse 18.svg"
                whileHover={{ rotate: 360, transition: { duration: 0.8 } }}
              />
              <div className="font-bold mr-3 -ml-6">1.</div>
              <motion.h2
                className="text-xl font-bold ml-5"
                whileHover={{ color: "#ffffff" }}
              >
                Качество
              </motion.h2>
            </div>
            <motion.p
              className="text-lg text-left ml-15"
              whileHover={{ scale: 1.02 }}
            >
              Качество работ гарантированно на уровне 300 PX
            </motion.p>
          </motion.div>
        </div>

        {/* Карточка 2 - Лояльность */}
        <div className="absolute top-20 left-3/4 transform -translate-x-1/2 -translate-y-1/2">
          <motion.div
            className="bg-[#5F6BD4] bg-opacity-10 rounded-3xl p-6 text-white border border-white w-64
                 transition-all duration-300 hover:bg-opacity-20 hover:border-opacity-100 hover:shadow-lg hover:-translate-y-1"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(95, 107, 212, 0.3)",
            }}
          >
            <div className="flex items-center mb-4">
              <motion.img
                src="src\assets\Ellipse 18.svg"
                whileHover={{ scale: 1.2 }}
              />
              <div className="font-bold -ml-6">2.</div>
              <motion.h2
                className="text-xl font-bold ml-5"
                whileHover={{ x: 5 }}
              >
                Лояльность
              </motion.h2>
            </div>
            <motion.p className="text-lg text-left ml-12" whileHover={{ x: 3 }}>
              Лояльный подход к поправкам
            </motion.p>
          </motion.div>
        </div>

        {/* Карточка 3 - Индивидуальность */}
        <div className="relative -top-65 left-80">
          <motion.div
            className="bg-[#5F6BD4] bg-opacity-10 rounded-3xl p-6 text-white border border-white w-74
                 transition-all duration-300 hover:bg-opacity-20 hover:border-opacity-100 hover:shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{
              scale: 1.03,
              y: -5,
              boxShadow: "0 10px 25px -5px rgba(95, 107, 212, 0.3)",
            }}
          >
            <div className="flex items-center mb-4">
              <motion.img
                src="src\assets\Ellipse 18.svg"
                whileHover={{ rotate: 180, transition: { duration: 0.5 } }}
              />
              <div className="font-bold -ml-6">3.</div>
              <motion.h2
                className="text-xl font-bold ml-5"
                whileHover={{ scale: 1.05 }}
              >
                Индивидуальность
              </motion.h2>
            </div>
            <motion.p
              className="text-lg text-left ml-15"
              whileHover={{ scale: 1.02 }}
            >
              Индивидуальный подход к каждому дизайну клиента
            </motion.p>
          </motion.div>
        </div>

        {/* Карточка 4 - Анализ */}
        <div className="relative left-270 -top-120">
          <motion.div
            className="bg-[#5F6BD4] bg-opacity-10 rounded-3xl p-6 text-white border border-white w-64
                 transition-all duration-300 hover:bg-opacity-20 hover:border-opacity-100 hover:shadow-lg"
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
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
