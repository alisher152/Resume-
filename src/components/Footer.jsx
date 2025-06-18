import React from "react";

const Footer = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div id="contacts" className="bg-gray-200 flex flex-col">
      <div className="text-center mb-8">
        <h1 className="font-bold text-lg">
          Что бы связаться со мной можете <br /> просканировать или написать по
          указанным <br /> данным
        </h1>
      </div>

      <div className="flex ml-20">
        <div className="flex items-start">
          <div className="flex-col mr-8">
            {/* Первая иконка с телефонами */}
            <div className="flex items-center mb-4">
              <img
                src="src\assets\pngegg - 2025-02-28T003142.742.svg"
                alt="Contact icon"
                className="w-12 h-12 mr-4"
              />
              <div className="text-left">
                <p className="font-medium">8 776 776 12 21</p>
                <p className="font-medium">8 747 627 73 09</p>
              </div>
            </div>

            {/* Вторая иконка с Telegram */}
            <div className="flex items-center mb-4">
              <img
                src="src\assets\pngegg - 2025-02-28T004213.015.svg"
                alt="Telegram"
                className="w-12 h-12 mr-4"
              />
              <a
                href="https://t.me/nursultanovna1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                @nursultanovna1
              </a>
            </div>

            {/* Третья иконка с Instagram */}
            <div className="flex items-center">
              <img
                src="src\assets\pngegg - 2025-02-28T003135.783.svg"
                alt="Instagram"
                className="w-12 h-12 mr-4"
              />
              <a
                href="https://instagram.com/iffimova"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-800 font-medium"
              >
                @iffimova
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center -mt-50">
        <img
          src="src\assets\Изображение WhatsApp 2025-03-04 в 03.32.17_916ecb7f.svg"
          alt="QR 1"
        />
        <img src="src\assets\Group 4.svg" className="ml-20" alt="QR 2" />
        <img
          src="src\assets\Изображение WhatsApp 2025-03-04 в 03.32.18_cf71684a.svg"
          className="ml-20"
          alt="QR 3"
        />
      </div>
      {/* Навигационные кнопки */}
      <div className="flex justify-around gap-8 bg-gray-400 py-4 mt-10">
        <button
          onClick={() => scrollToSection("jobs")}
          className="px-6 py-2 bg-white text-[#2B3590] rounded-full font-bold hover:bg-gray-100 transition-colors duration-300 shadow-md hover:shadow-lg"
        >
          Jobs
        </button>
        <button
          onClick={() => scrollToSection("home")}
          className="px-6 py-2 bg-white text-[#2B3590] rounded-full font-bold hover:bg-gray-100 transition-colors duration-300 shadow-md hover:shadow-lg"
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection("about")}
          className="px-6 py-2 bg-white text-[#2B3590] rounded-full font-bold hover:bg-gray-100 transition-colors duration-300 shadow-md hover:shadow-lg"
        >
          About Me
        </button>
      </div>
    </div>
  );
};

export default Footer;
