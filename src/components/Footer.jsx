import React from "react";
import { useMediaQuery } from "react-responsive";

const Footer = () => {
  const isMobile = useMediaQuery({ maxWidth: 430 }); // iPhone 14 Pro Max width

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
                src="src/assets/pngegg - 2025-02-28T003142.742.svg"
                alt="Contact icon"
                className={`${isMobile ? "w-10 h-10" : "w-12 h-12"} mr-4`}
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
                src="src/assets/pngegg - 2025-02-28T004213.015.svg"
                alt="Telegram"
                className={`${isMobile ? "w-10 h-10" : "w-12 h-12"} mr-4`}
              />
              <a
                href="https://t.me/nursultanovna1"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-blue-600 hover:text-blue-800 font-medium ${
                  isMobile ? "text-sm" : ""
                }`}
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
                src="src/assets/pngegg - 2025-02-28T003135.783.svg"
                alt="Instagram"
                className={`${isMobile ? "w-10 h-10" : "w-12 h-12"} mr-4`}
              />
              <a
                href="https://instagram.com/iffimova"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-pink-600 hover:text-pink-800 font-medium ${
                  isMobile ? "text-sm" : ""
                }`}
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
        {isMobile ? (
          <>
            <img
              src="src/assets/Изображение WhatsApp 2025-03-04 в 03.32.17_916ecb7f.svg"
              alt="QR 1"
              className="w-40"
            />
            <img src="src/assets/Group 4.svg" alt="QR 2" className="w-40" />
            <img
              src="src/assets/Изображение WhatsApp 2025-03-04 в 03.32.18_cf71684a.svg"
              alt="QR 3"
              className="w-40"
            />
          </>
        ) : (
          <>
            <img
              src="src/assets/Изображение WhatsApp 2025-03-04 в 03.32.17_916ecb7f.svg"
              alt="QR 1"
            />
            <img src="src/assets/Group 4.svg" className="ml-20" alt="QR 2" />
            <img
              src="src/assets/Изображение WhatsApp 2025-03-04 в 03.32.18_cf71684a.svg"
              className="ml-20"
              alt="QR 3"
            />
          </>
        )}
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
          } py-2 bg-white text-[#2B3590] rounded-full font-bold hover:bg-gray-100 transition-colors duration-300 shadow-md hover:shadow-lg ${
            isMobile ? "text-sm" : ""
          }`}
        >
          Jobs
        </button>
        <button
          onClick={() => scrollToSection("home")}
          className={`${
            isMobile ? "w-full" : "px-6"
          } py-2 bg-white text-[#2B3590] rounded-full font-bold hover:bg-gray-100 transition-colors duration-300 shadow-md hover:shadow-lg ${
            isMobile ? "text-sm" : ""
          }`}
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection("about")}
          className={`${
            isMobile ? "w-full" : "px-6"
          } py-2 bg-white text-[#2B3590] rounded-full font-bold hover:bg-gray-100 transition-colors duration-300 shadow-md hover:shadow-lg ${
            isMobile ? "text-sm" : ""
          }`}
        >
          About Me
        </button>
      </div>
    </div>
  );
};

export default Footer;
