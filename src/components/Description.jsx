import React from "react";
import { useMediaQuery } from "react-responsive";

const Description = () => {
  const isMobile = useMediaQuery({ maxWidth: 430 });

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div id="work" className="flex flex-col">
      {/* Процесс работы */}
      <div className={`relative ${isMobile ? "px-4" : ""}`}>
        {!isMobile && (
          <img
            src="/assets/Group 8.svg"
            className="ml-60 transition-all duration-500 hover:scale-110 hover:rotate-6"
            alt="Процесс работы"
          />
        )}

        {isMobile ? (
          <div className="flex flex-col gap-6 mt-6">
            <div className="bg-white bg-opacity-90 p-4 rounded-xl shadow-md border border-gray-100">
              <h1 className="text-xl font-bold text-[#2B3590] mb-1">
                Консультация
              </h1>
              <p className="text-gray-700 text-sm leading-tight">
                Обсуждение деталей заказа и требований
              </p>
            </div>

            <div className="bg-white bg-opacity-90 p-4 rounded-xl shadow-md border border-gray-100">
              <h1 className="text-xl font-bold text-[#2B3590] mb-1">Макет</h1>
              <p className="text-gray-700 text-sm leading-tight">
                Проверка предоставленного макета на соответствие требованиям
              </p>
            </div>

            <div className="bg-white bg-opacity-90 p-4 rounded-xl shadow-md border border-gray-100">
              <h1 className="text-xl font-bold text-[#2B3590] mb-1">
                Согласование
              </h1>
              <p className="text-gray-700 text-sm leading-tight">
                Утверждение макета и условий работы
              </p>
            </div>

            <div className="bg-white bg-opacity-90 p-4 rounded-xl shadow-md border border-gray-100">
              <h1 className="text-xl font-bold text-[#2B3590] mb-1">
                Создание
              </h1>
              <p className="text-gray-700 text-sm leading-tight">
                Разработка дизайна
              </p>
            </div>
          </div>
        ) : (
          <>
            <h1 className="text-3xl ml-55 hover:text-blue-500 transition-colors duration-300 transform hover:-translate-y-1">
              Консультация
            </h1>
            <p className="ml-55 mt-2 hover:text-gray-600 transition-colors duration-300">
              Обсуждение деталей заказа и <br />
              <span className="ml-20 hover:text-white transition-colors duration-300">
                требовании
              </span>
            </p>

            <h1 className="text-3xl -mt-22 ml-150 hover:text-blue-500 transition-colors duration-300 transform hover:-translate-y-1">
              Макет
            </h1>
            <p className="ml-140 mt-2 hover:text-gray-600 transition-colors duration-300">
              Предоставление клиентом <br />
            </p>
            <span className="ml-138 hover:text-white transition-colors duration-300">
              макета, который проверяется <br />
            </span>
            <span className="ml-138 text-[16px] hover:text-white transition-colors duration-300">
              на соответствие требованиям <br />
            </span>
            <span className="ml-150 hover:text-white transition-colors duration-300">
              для печати
            </span>

            <h1 className="text-3xl -mt-35 ml-230 hover:text-blue-500 transition-colors duration-300 transform hover:-translate-y-1">
              Согласование
            </h1>
            <p className="ml-230 mt-2 hover:text-gray-600 transition-colors duration-300">
              Утверждение макета <br />
            </p>
            <span className="ml-228 hover:text-white transition-colors duration-300">
              согласование условий заказа <br />
            </span>
            <span className="ml-230 text-[16px] hover:text-white transition-colors duration-300">
              заключение договора и <br />
            </span>
            <span className="ml-230 hover:text-white transition-colors duration-300">
              осуществление оплаты
            </span>

            <h1 className="text-3xl -mt-35 ml-320 hover:text-blue-500 transition-colors duration-300 transform hover:-translate-y-1">
              Создание
            </h1>
            <p className="ml-320 mt-2 hover:text-gray-600 transition-colors duration-300">
              Создание дизайна
            </p>
          </>
        )}
      </div>

      {/* Кнопка "Работы" */}
      <div
        className={`flex justify-center ${isMobile ? "mt-8 px-4" : "mt-40"}`}
      >
        <button
          onClick={() => scrollToSection("jobs-gallery")}
          className={`flex items-center justify-between border-2 border-black rounded-full font-bold hover:bg-gray-100 transition-all duration-300 ${
            isMobile
              ? "px-5 py-2 text-base w-full max-w-[200px]"
              : "px-8 py-3 text-xl w-[300px]"
          } shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-600`}
        >
          <span className="flex-1 text-center">Работы</span>
          <div className="flex items-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1 transition-transform duration-300 group-hover:translate-x-2"
            >
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <img
              src="/assets/Group 3.svg"
              className={`ml-2 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110 ${
                isMobile ? "-mr-4 w-12" : "-mr-8 w-16"
              }`}
              alt="Иконка"
            />
          </div>
        </button>
      </div>

      {/* Галерея работ */}
      <div id="jobs" className={`${isMobile ? "mt-6 px-4" : "mt-16"}`}>
        <div
          className={`bg-[#5F6BD4] rounded-4xl flex ${
            isMobile ? "flex-col p-4 gap-4" : "h-80 flex-row"
          } justify-center items-center transition-all duration-500 hover:bg-[#4a56b9] hover:shadow-2xl`}
        >
          <button
            onClick={() => scrollToSection("raundlab-section")}
            className={`transition-all duration-500 ease-in-out hover:scale-110 hover:shadow-2xl active:scale-95 ${
              isMobile ? "w-full" : "mx-4"
            } group`}
          >
            <img
              src="/assets/1.svg"
              alt="Raundlab"
              className={`transform transition duration-500 group-hover:rotate-3 group-hover:brightness-110 ${
                isMobile ? "w-full h-auto" : ""
              }`}
            />
          </button>
          <button
            onClick={() => scrollToSection("berrytea-section")}
            className={`transition-all duration-500 ease-in-out hover:scale-110 hover:shadow-2xl active:scale-95 ${
              isMobile ? "w-full" : "mx-4"
            } group`}
          >
            <img
              src="/assets/Group 21.svg"
              alt="Berry Tea"
              className={`transform transition duration-500 group-hover:rotate-3 group-hover:brightness-110 ${
                isMobile ? "w-full h-auto" : ""
              }`}
            />
          </button>
          <button
            onClick={() => scrollToSection("zan-stamps-section")}
            className={`transition-all duration-500 ease-in-out hover:scale-110 hover:shadow-2xl active:scale-95 ${
              isMobile ? "w-full" : "mx-4"
            } group`}
          >
            <img
              src="/assets/Project 3.svg"
              alt="Zan Stamps"
              className={`transform transition duration-500 group-hover:rotate-3 group-hover:brightness-110 ${
                isMobile ? "w-full h-auto" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Секция Zan Stamps */}
      <div id="zan-stamps-section" className="py-20">
        <div className="flex flex-col items-center gap-8 py-12 px-4 w-full mt-20">
          <div className="flex flex-wrap justify-center gap-8 w-full max-w-4xl">
            <div className="bg-[#5F6BD4] rounded-4xl p-8 w-full max-w-md shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 -ml-20 group overflow-hidden">
              <div className="flex justify-center">
                <img
                  src="/assets/2.svg"
                  alt="Проект 1"
                  className="w-124 h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            <div className="bg-[#5F6BD4] rounded-4xl p-8 w-full max-w-md shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group overflow-hidden">
              <div className="flex justify-center">
                <img
                  src="/assets/2.svg"
                  alt="Проект 2"
                  className="w-124 h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center w-full">
            <div className="bg-[#5F6BD4] rounded-4xl p-8 w-full max-w-md shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 -ml-15 group overflow-hidden">
              <div className="flex flex-col items-center">
                <img
                  src="/assets/2.svg"
                  alt="Проект 3"
                  className="w-124 h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Секция Raundlab */}
      <div
        id="raundlab-section"
        className={`${isMobile ? "py-10 px-4" : "py-20"}`}
      >
        <button
          onClick={() => scrollToSection("raundlab-section")}
          className={`flex items-center justify-between border-2 border-black rounded-full font-bold hover:bg-gray-100 transition-all duration-300 ${
            isMobile
              ? "px-5 py-2 text-base w-full max-w-[200px] mx-auto"
              : "px-8 py-3 text-xl w-[300px] ml-160"
          } ${
            isMobile ? "mt-10" : "mt-40"
          } shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-600`}
        >
          <span className="flex-1 text-center">RAUND LAB</span>
          <div className="flex items-center">
            <img
              src="/assets/Group 3.svg"
              className={`ml-2 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110 ${
                isMobile ? "-mr-4 w-12" : "-mr-8 w-16"
              }`}
              alt="Иконка"
            />
          </div>
        </button>

        <div className={`${isMobile ? "mt-6" : ""}`}>
          <div
            className={`flex flex-col items-center gap-4 ${
              isMobile ? "py-6" : "py-12"
            } px-4 w-full`}
          >
            <div
              className={`flex ${
                isMobile ? "flex-col" : "flex-wrap"
              } justify-center gap-4 w-full max-w-6xl`}
            >
              <div className="bg-[#5F6BD4] rounded-4xl p-4 w-full max-w-md shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group overflow-hidden">
                <img
                  src="/assets/1.svg"
                  alt="Raundlab 1"
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="bg-[#5F6BD4] rounded-4xl p-4 w-full max-w-md shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group overflow-hidden">
                <img
                  src="/assets/3.svg"
                  alt="Raundlab 2"
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
            <div
              className={`flex ${
                isMobile ? "flex-col" : "flex-wrap"
              } justify-center gap-4 w-full max-w-6xl`}
            >
              <div className="bg-[#5F6BD4] rounded-4xl p-4 w-full max-w-md shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group overflow-hidden">
                <img
                  src="/assets/8.svg"
                  alt="Raundlab 3"
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="bg-[#5F6BD4] rounded-4xl p-4 w-full max-w-md shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group overflow-hidden">
                <img
                  src="/assets/3.svg"
                  alt="Raundlab 4"
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Секция Berry Tea */}
      <div
        id="berrytea-section"
        className={`${isMobile ? "py-10 px-4" : "py-20"}`}
      >
        <button
          onClick={() => scrollToSection("berrytea-section")}
          className={`flex items-center justify-between border-2 border-black rounded-full font-bold hover:bg-gray-100 transition-all duration-300 ${
            isMobile
              ? "px-5 py-2 text-base w-full max-w-[200px] mx-auto"
              : "px-8 py-3 text-xl w-[300px] ml-160"
          } ${
            isMobile ? "mt-10" : "mt-40"
          } shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-600`}
        >
          <span className="flex-1 text-center">BERRY TEA</span>
          <div className="flex items-center">
            <img
              src="/assets/Group 3.svg"
              className={`ml-2 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110 ${
                isMobile ? "-mr-4 w-12" : "-mr-8 w-16"
              }`}
              alt="Иконка"
            />
          </div>
        </button>

        <div className={`${isMobile ? "mt-6" : ""}`}>
          <div
            className={`flex flex-col items-center gap-4 ${
              isMobile ? "py-6" : "py-12"
            } px-4 w-full`}
          >
            <div
              className={`flex ${
                isMobile ? "flex-col" : "flex-wrap"
              } justify-center gap-4 w-full max-w-6xl`}
            >
              <div className="bg-[#5F6BD4] rounded-4xl p-4 w-full max-w-md shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group overflow-hidden">
                <img
                  src="/assets/Group 21.svg"
                  alt="Berry Tea 1"
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="bg-[#5F6BD4] rounded-4xl p-4 w-full max-w-md shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group overflow-hidden">
                <img
                  src="/assets/4.svg"
                  alt="Berry Tea 2"
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
            <div
              className={`flex ${
                isMobile ? "flex-col" : "flex-wrap"
              } justify-center gap-4 w-full max-w-6xl`}
            >
              <div className="bg-[#5F6BD4] rounded-4xl p-4 w-full max-w-md shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group overflow-hidden">
                <img
                  src="/assets/7.svg"
                  alt="Berry Tea 3"
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="bg-[#5F6BD4] rounded-4xl p-4 w-full max-w-md shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group overflow-hidden">
                <img
                  src="/assets/6.svg"
                  alt="Berry Tea 4"
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
            <div
              className={`flex ${
                isMobile ? "flex-col" : "flex-wrap"
              } justify-center gap-4 w-full max-w-6xl`}
            >
              <div className="bg-[#5F6BD4] rounded-4xl p-4 w-full max-w-md shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group overflow-hidden">
                <img
                  src="/assets/5.svg"
                  alt="Berry Tea 5"
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="bg-[#5F6BD4] rounded-4xl p-4 w-full max-w-md shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group overflow-hidden">
                <img
                  src="/assets/9.svg"
                  alt="Berry Tea 6"
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
