import React from "react";

const Description = () => {
  return (
    <div id="work" className="flex flex-col">
      {/* Первая часть с описанием процесса */}
      <div className="flex-row relative">
        <img
          src="src\assets\Group 8.svg"
          className="ml-60 transition-all duration-500 hover:scale-110 hover:rotate-6"
          alt="Процесс работы"
        />

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
      </div>

      {/* Кнопка "Работы" */}
      <div className="mt-40 flex justify-center">
        <button
          onClick={() =>
            document
              .getElementById("jobs")
              .scrollIntoView({ behavior: "smooth" })
          }
          className="px-8 bg-transparent border-2 border-black rounded-full text-xl font-bold hover:bg-gray-100 transition-all duration-300 flex items-center justify-between shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1 w-[300px] transform hover:-translate-y-1 hover:border-blue-500 hover:text-blue-600 group"
        >
          <span className="flex-1 text-center transition-colors duration-300">
            Работы
          </span>
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
              src="src\assets\Group 3.svg"
              className="ml-2 -mr-8 w-16 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110"
              alt="Иконка"
            />
          </div>
        </button>
      </div>

      {/* Галерея работ */}
      <div id="jobs" className="mt-16">
        <div className="bg-[#5F6BD4] rounded-4xl flex justify-center items-center h-80 w-full transition-all duration-500 hover:bg-[#4a56b9] hover:shadow-2xl">
          <button
            id="raundlab"
            className="mx-4 transition-all duration-500 ease-in-out hover:scale-110 hover:shadow-2xl active:scale-95 group"
          >
            <img
              src="src\assets\1.svg"
              alt="Raundlab"
              className="transform transition duration-500 group-hover:rotate-3 group-hover:brightness-110"
            />
          </button>
          <button
            id="berrytea"
            className="mx-4 transition-all duration-500 ease-in-out hover:scale-110 hover:shadow-2xl active:scale-95 group"
          >
            <img
              src="src\assets\Group 21.svg"
              alt="Berry Tea"
              className="transform transition duration-500 group-hover:rotate-3 group-hover:brightness-110"
            />
          </button>
          <button
            id="zan stamps"
            className="mx-4 transition-all duration-500 ease-in-out hover:scale-110 hover:shadow-2xl active:scale-95 group"
          >
            <img
              src="src\assets\Розахунов Анаят фкс 2 курс  1.svg"
              alt="Zan Stamps"
              className="transform transition duration-500 group-hover:rotate-3 group-hover:brightness-110"
            />
          </button>
        </div>
      </div>

      {/* Три контейнера с работами */}
      <div className="flex flex-col items-center gap-8 py-12 px-4 w-full mt-20">
        {/* Первая строка - два контейнера в ряд */}
        <div className="flex flex-wrap justify-center gap-8 w-full max-w-4xl">
          {/* Первый контейнер */}
          <div className="bg-[#5F6BD4] rounded-4xl p-8 w-full max-w-md shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 -ml-20 group overflow-hidden">
            <div className="flex justify-center">
              <img
                src="src\assets\2.svg"
                alt="Проект 1"
                className="w-124 h-auto object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Второй контейнер */}
          <div className="bg-[#5F6BD4] rounded-4xl p-8 w-full max-w-md shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group overflow-hidden">
            <div className="flex justify-center">
              <img
                src="src\assets\2.svg"
                alt="Проект 2"
                className="w-124 h-auto object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Вторая строка - один центральный контейнер */}
        <div className="flex justify-center w-full">
          <div className="bg-[#5F6BD4] rounded-4xl p-8 w-full max-w-md shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 -ml-15 group overflow-hidden">
            <div className="flex flex-col items-center">
              <div>
                <img
                  src="src\assets\2.svg"
                  alt="Проект 3"
                  className="w-124 h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Кнопка RAUND LAB */}
      <button
        onClick={() =>
          document.getElementById("jobs").scrollIntoView({ behavior: "smooth" })
        }
        className="px-8 bg-transparent border-2 border-black rounded-full text-xl font-bold hover:bg-gray-100 transition-all duration-300 flex items-center justify-between shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1 w-[300px] ml-160 mt-40 transform hover:-translate-y-1 hover:border-blue-500 hover:text-blue-600 group"
      >
        <span className="flex-1 text-center transition-colors duration-300">
          RAUND LAB
        </span>
        <div className="flex items-center">
          <img
            src="src\assets\Group 3.svg"
            className="ml-8 -mr-8 w-16 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110"
            alt="Иконка"
          />
        </div>
      </button>

      {/* Галерея RAUND LAB */}
      <div>
        <div className="flex flex-col items-center gap-8 py-12 px-4 w-full">
          <div className="flex flex-wrap justify-center gap-8 w-full max-w-6xl">
            {/* Первый контейнер */}
            <div className="bg-[#5F6BD4] rounded-4xl p-8 w-full max-w-md shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group overflow-hidden">
              <img
                src="src\assets\1.svg"
                alt="Raundlab 1"
                className="transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Второй контейнер */}
            <div className="bg-[#5F6BD4] rounded-4xl p-8 w-full max-w-md shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group overflow-hidden">
              <img
                src="src\assets\3.svg"
                alt="Raundlab 2"
                className="transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-8 w-full max-w-6xl">
            {/* Третий контейнер */}
            <div className="bg-[#5F6BD4] rounded-4xl p-8 w-full max-w-md shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group overflow-hidden">
              <img
                src="src\assets\8.svg"
                alt="Raundlab 3"
                className="transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Четвертый контейнер */}
            <div className="bg-[#5F6BD4] rounded-4xl p-8 w-full max-w-md shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group overflow-hidden">
              <img
                src="src\assets\3.svg"
                alt="Raundlab 4"
                className="transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Кнопка BERRY TEA */}
      <button
        onClick={() =>
          document.getElementById("jobs").scrollIntoView({ behavior: "smooth" })
        }
        className="px-8 bg-transparent border-2 border-black rounded-full text-xl font-bold hover:bg-gray-100 transition-all duration-300 flex items-center justify-between shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1 w-[300px] ml-160 mt-40 transform hover:-translate-y-1 hover:border-blue-500 hover:text-blue-600 group"
      >
        <span className="flex-1 text-center transition-colors duration-300">
          BERRY TEA
        </span>
        <div className="flex items-center">
          <img
            src="src\assets\Group 3.svg"
            className="ml-8 -mr-8 w-16 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110"
            alt="Иконка"
          />
        </div>
      </button>

      {/* Галерея BERRY TEA */}
      <div>
        <div className="flex flex-col items-center gap-8 py-12 px-4 w-full">
          <div className="flex flex-wrap justify-center gap-8 w-full max-w-6xl">
            {/* Первый контейнер */}
            <div className="bg-[#5F6BD4] rounded-4xl p-8 w-full max-w-md shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group overflow-hidden">
              <img
                src="src\assets\Group 21.svg"
                alt="Berry Tea 1"
                className="transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Второй контейнер */}
            <div className="bg-[#5F6BD4] rounded-4xl p-8 w-full max-w-md shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group overflow-hidden">
              <img
                src="src\assets\4.svg"
                alt="Berry Tea 2"
                className="transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-8 w-full max-w-6xl">
            {/* Третий контейнер */}
            <div className="bg-[#5F6BD4] rounded-4xl p-8 w-full max-w-md shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group overflow-hidden">
              <img
                src="src\assets\7.svg"
                alt="Berry Tea 3"
                className="transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Четвертый контейнер */}
            <div className="bg-[#5F6BD4] rounded-4xl p-8 w-full max-w-md shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group overflow-hidden">
              <img
                src="src\assets\6.svg"
                alt="Berry Tea 4"
                className="transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-8 w-full max-w-6xl">
            {/* Пятый контейнер */}
            <div className="bg-[#5F6BD4] rounded-4xl p-8 w-full max-w-md shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group overflow-hidden">
              <img
                src="src\assets\5.svg"
                alt="Berry Tea 5"
                className="transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Шестой контейнер */}
            <div className="bg-[#5F6BD4] rounded-4xl p-8 w-full max-w-md shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group overflow-hidden">
              <img
                src="src\assets\9.svg"
                alt="Berry Tea 6"
                className="transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
