import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Coffee, Menu, X } from "lucide-react";

export default function EnhancedMonochromeLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: unknown) => {
    // Получаем координаты курсора относительно окна
    const { clientX: x, clientY: y } = event;
    setCursorPosition({ x, y });
  };

  // Для изменения фона на основе позиции курсора
  const backgroundPositionX = (cursorPosition.x / window.innerWidth - 0.5) * 30; // Смещение по оси X
  const backgroundPositionY =
    (cursorPosition.y / window.innerHeight - 0.5) * 30; // Смещение по оси Y
  const backgroundPosition = `${50 + backgroundPositionX}% ${50 + backgroundPositionY}%`; // Центрированное смещение
  // const gradient = `linear-gradient(to right, rgba(${Math.floor((cursorPosition.x / window.innerWidth) * 255)}, 0, 255, 0.6), rgba(0, ${Math.floor((cursorPosition.y / window.innerHeight) * 255)}, 255, 0.6))`;

  return (
    <div className="min-h-screen text-white" onMouseMove={handleMouseMove}>
      <header className="fixed top-0 left-0 right-0 bg-black/50 backdrop-blur-md z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <NavLink to="/product">
            <div className="text-sm font-bold flex items-end gap-2">
              <Coffee />
              Nathani Art Community
            </div>
          </NavLink>

          <nav className="hidden md:flex space-x-6 items-center">
            <a
              href="/login"
              className="hover:text-gray-300 transition-colors text-sm"
            >
              logIn
            </a>
            <a
              href="/register"
              className="hover:text-gray-300 transition-colors text-sm"
            >
              logUp
            </a>
          </nav>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main
        className="pt-13 h-screen inset-0 bg-[radial-gradient(circle_at_30%_30%,_#ffffff10_0%,_transparent_70%)]"
        style={{
          backgroundImage: 'url("/images/under-water.PNG")',
          backgroundSize: "105%",
          backgroundPosition: backgroundPosition, // Двигаем картинку в зависимости от координат курсора
          // backgroundAttachment: "fixed",
          transition: "background-position 1s cubic-bezier(0.25, 0.8, 0.25, 1)", // Быстрое начало и замедление
        }}
      >
        {/* <section className="relative w-full text-center px-4 md:px-0">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-gradient-to-r from-white to-gray-500 mb-6 leading-tight">
              Мои работы
            </h1>
            <p className="text-lg md:text-xl mb-12 text-gray-300">
              На сайте вы можете смотреть мои работы, вести блог, участвовать в
              евентах и многое другое! Для зарегистрированных пользователей —
              новые функции!
            </p>
          </div>
        </section> */}
      </main>
    </div>
  );
}
