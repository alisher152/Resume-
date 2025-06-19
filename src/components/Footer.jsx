import React from "react";
import { useMediaQuery } from "react-responsive";

const Footer = () => {
  const isMobile = useMediaQuery({ maxWidth: 430 });

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div id="contacts" className="bg-gray-200 flex flex-col">
      {/* Заголовок */}
      <div className={`text-center ${isMobile ? "mb-4" : "mb-8"}`}>
        <h1 className={`font-bold ${isMobile ? "text-base" : "text-lg"}`}>
          Что бы связаться со мной можете {isMobile ? "" : <br />}
          просканировать или написать по {isMobile ? "" : <br />}
          указанным данным
        </h1>
      </div>

      {/* Контакты */}
      <div
        className={`flex ${isMobile ? "flex-col items-center px-4" : "ml-20"}`}
      >
        <div className={`flex ${isMobile ? "flex-col" : "items-start"}`}>
          <div className={`flex-col ${isMobile ? "w-full" : "mr-8"}`}>
            {/* Телефоны */}
            <div
              className={`flex items-center ${
                isMobile ? "mb-3 justify-center" : "mb-4"
              }`}
            >
              <img
                src="/assets/pngegg - 2025-02-28T003142.742.svg"
                alt="Contact icon"
                className={`${
                  isMobile ? "w-10 h-10" : "w-12 h-12"
                } mr-4 transition-transform duration-300 hover:scale-110 hover:rotate-6`}
              />
              <div className="text-left">
                <p className={`font-medium ${isMobile ? "text-sm" : ""}`}>
                  8 776 776 12 21
                </p>
                <p className={`font-medium ${isMobile ? "text-sm" : ""}`}>
                  8 747 627 73 09
                </p>
              </div>
            </div>

            {/* Telegram */}
            <div
              className={`flex items-center ${
                isMobile ? "mb-3 justify-center" : "mb-4"
              }`}
            >
              <img
                src="/assets/pngegg - 2025-02-28T004213.015.svg"
                alt="Telegram"
                className={`${
                  isMobile ? "w-10 h-10" : "w-12 h-12"
                } mr-4 transition-transform duration-300 hover:scale-110 hover:rotate-6`}
              />
              <a
                href="https://t.me/nursultanovna1"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-blue-600 hover:text-blue-800 font-medium ${
                  isMobile ? "text-sm" : ""
                } transition-colors duration-300 active:scale-95 active:translate-y-0.5`}
              >
                @nursultanovna1
              </a>
            </div>

            {/* Instagram */}
            <div
              className={`flex items-center ${
                isMobile ? "justify-center" : ""
              }`}
            >
              <img
                src="/assets/pngegg - 2025-02-28T003135.783.svg"
                alt="Instagram"
                className={`${
                  isMobile ? "w-10 h-10" : "w-12 h-12"
                } mr-4 transition-transform duration-300 hover:scale-110 hover:rotate-6`}
              />
              <a
                href="https://instagram.com/iffimova"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-pink-600 hover:text-pink-800 font-medium ${
                  isMobile ? "text-sm" : ""
                } transition-colors duration-300 active:scale-95 active:translate-y-0.5`}
              >
                @iffimova
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* QR-коды */}
      <div
        className={`flex ${
          isMobile
            ? "flex-col items-center gap-4 mt-4"
            : "justify-center -mt-50"
        }`}
      >
        <img
          src="/assets/What's App.svg"
          alt="QR 1"
          className={`${
            isMobile ? "w-40" : ""
          } transition-transform duration-300 hover:scale-105 hover:shadow-lg`}
        />
        <img
          src="/assets/Group 4.svg"
          alt="QR 2"
          className={`${
            isMobile ? "w-40" : "ml-20"
          } transition-transform duration-300 hover:scale-105 hover:shadow-lg`}
        />
        <img
          src="/assets/Instagram.svg"
          alt="QR 3"
          className={`${
            isMobile ? "w-40" : "ml-20"
          } transition-transform duration-300 hover:scale-105 hover:shadow-lg`}
        />
      </div>

      {/* Навигационные кнопки */}
      <div
        className={`flex ${
          isMobile ? "flex-col gap-2" : "justify-around gap-8"
        } bg-gray-400 ${isMobile ? "py-3 px-4" : "py-4"} mt-6`}
      >
        <button
          onClick={() => scrollToSection("jobs")}
          className={`${
            isMobile ? "w-full" : "px-6"
          } py-2 bg-white text-[#2B3590] rounded-full font-bold hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg ${
            isMobile ? "text-sm" : ""
          } active:scale-95 active:translate-y-0.5 active:shadow-sm`}
        >
          Jobs
        </button>
        <button
          onClick={() => scrollToSection("home")}
          id="home"
          className={`${
            isMobile ? "w-full" : "px-6"
          } py-2 bg-white text-[#2B3590] rounded-full font-bold hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg ${
            isMobile ? "text-sm" : ""
          } active:scale-95 active:translate-y-0.5 active:shadow-sm`}
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection("about")}
          className={`${
            isMobile ? "w-full" : "px-6"
          } py-2 bg-white text-[#2B3590] rounded-full font-bold hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg ${
            isMobile ? "text-sm" : ""
          } active:scale-95 active:translate-y-0.5 active:shadow-sm`}
        >
          About Me
        </button>
      </div>
    </div>
  );
};

export default Footer;
