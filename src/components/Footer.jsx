import React from "react";

const Footer = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div id="contacts" className="bg-gray-200 flex flex-col">
      {/* Заголовок */}
      <div className="text-center mb-4 lg:mb-8">
        <h1 className="font-bold text-base sm:text-base md:text-lg lg:text-lg">
          Что бы связаться со мной можете <br className="hidden lg:block" />
          просканировать или написать по <br className="hidden lg:block" />
          указанным данным
        </h1>
      </div>

      {/* Контакты */}
      <div className="flex flex-col items-center px-4 lg:flex-row lg:ml-20">
        <div className="flex flex-col lg:flex-row lg:items-start">
          <div className="flex-col w-full lg:mr-8">
            {/* Телефоны */}
            <div className="flex items-center mb-3 justify-center lg:mb-4 lg:justify-start">
              <img
                src="/assets/pngegg - 2025-02-28T003142.742.svg"
                alt="Contact icon"
                className="w-10 h-10 lg:w-12 lg:h-12 mr-4 transition-transform duration-300 hover:scale-110 hover:rotate-6"
              />
              <div className="text-left">
                <p className="font-medium text-sm lg:text-base">
                  8 776 776 12 21
                </p>
                <p className="font-medium text-sm lg:text-base">
                  8 747 627 73 09
                </p>
              </div>
            </div>

            {/* Telegram */}
            <div className="flex items-center mb-3 justify-center lg:mb-4 lg:justify-start">
              <img
                src="/assets/pngegg - 2025-02-28T004213.015.svg"
                alt="Telegram"
                className="w-10 h-10 lg:w-12 lg:h-12 mr-4 transition-transform duration-300 hover:scale-110 hover:rotate-6"
              />
              <a
                href="https://t.me/nursultanovna1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium text-sm lg:text-base transition-colors duration-300 active:scale-95 active:translate-y-0.5"
              >
                @nursultanovna1
              </a>
            </div>

            {/* Instagram */}
            <div className="flex items-center justify-center lg:justify-start">
              <img
                src="/assets/pngegg - 2025-02-28T003135.783.svg"
                alt="Instagram"
                className="w-10 h-10 lg:w-12 lg:h-12 mr-4 transition-transform duration-300 hover:scale-110 hover:rotate-6"
              />
              <a
                href="https://instagram.com/iffimova"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-800 font-medium text-sm lg:text-base transition-colors duration-300 active:scale-95 active:translate-y-0.5"
              >
                @iffimova
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* QR-коды */}
      <div className="flex flex-col items-center gap-4 mt-4 lg:flex-row lg:justify-center lg:-mt-32">
        <img
          src="/assets/What's App.svg"
          alt="QR 1"
          className="w-40 lg:w-auto transition-transform duration-300 hover:scale-105 hover:shadow-lg"
        />
        <img
          src="/assets/Group 4.svg"
          alt="QR 2"
          className="w-40 lg:w-auto lg:ml-20 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
        />
        <img
          src="/assets/Instagram.svg"
          alt="QR 3"
          className="w-40 lg:w-auto lg:ml-20 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
        />
      </div>

      {/* Навигационные кнопки */}
      <div className="flex flex-col gap-2 bg-gray-400 py-3 px-4 mt-6 lg:flex-row lg:justify-around lg:gap-8 lg:py-4">
        <button
          onClick={() => scrollToSection("jobs")}
          className="w-full lg:w-auto py-2 px-6 bg-white text-[#2B3590] rounded-full font-bold hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg text-sm lg:text-base active:scale-95 active:translate-y-0.5 active:shadow-sm"
        >
          Jobs
        </button>
        <button
          onClick={() => scrollToSection("home")}
          id="home"
          className="w-full lg:w-auto py-2 px-6 bg-white text-[#2B3590] rounded-full font-bold hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg text-sm lg:text-base active:scale-95 active:translate-y-0.5 active:shadow-sm"
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection("about")}
          className="w-full lg:w-auto py-2 px-6 bg-white text-[#2B3590] rounded-full font-bold hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg text-sm lg:text-base active:scale-95 active:translate-y-0.5 active:shadow-sm"
        >
          About Me
        </button>
        <div className="text-center text-black">
          <h1 className="font-bold">Made a Website:</h1>
          <a
            href="https://www.instagram.com/alisher_extremum/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:text-pink-800 font-medium text-sm lg:text-base transition-colors duration-300 active:scale-95 active:translate-y-0.5"
          >
            @alisher_extremum
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
