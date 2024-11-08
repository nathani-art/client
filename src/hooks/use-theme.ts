// src/hooks/useTheme.js
import { useEffect, useState } from "react";
type ITheme = "light" | "dark";

export function useTheme() {
  const [theme, setTheme] = useState<ITheme>(
    (localStorage.getItem("theme") as ITheme) || "light",
  );

  useEffect(() => {
    const root = window.document.documentElement;

    // Добавляем или убираем класс dark
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    // Сохраняем тему в localS torage
    localStorage.setItem("theme", theme);
    // setTheme()
    console.log("useEffect", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    console.log("toggleTheme", theme);
  };

  return { theme, toggleTheme };
}

// как часто возвращается return { theme, toggleTheme };?, при каждом изменении или при каждом вызове useTheme в другом компоненте
// тоесть полуется если мы один раз его useTheme где-то вызвали и внутри этой функции что-то поменялось,
// то сам  useTheme не оповестит об изменении  и чтобы получитть актуальное новое значении на нужно обязательно вызвать useTheme еще раз
