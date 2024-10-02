// src/components/DarkMode.js
"use client"; // Esto marca el archivo como un Client Component

import React, { useEffect, useState } from "react";
import style from '../styles/DarkMode.css';

const DarkMode = () => {
  const lightTheme = "light";
  const darkTheme = "dark";
  const [theme, setTheme] = useState(lightTheme);

  useEffect(() => {
    const body = document.body;
    const savedTheme = localStorage.getItem("theme") || lightTheme;
    setTheme(savedTheme);
    body.classList.add(savedTheme);

    return () => {
      body.classList.remove(savedTheme);
    };
  }, []);

  const switchTheme = (e) => {
    const body = document.body;
    if (theme === darkTheme) {
      body.classList.replace(darkTheme, lightTheme);
      e.target.classList.remove("clicked");
      localStorage.setItem("theme", lightTheme);
      setTheme(lightTheme);
    } else {
      body.classList.replace(lightTheme, darkTheme);
      e.target.classList.add("clicked");
      localStorage.setItem("theme", darkTheme);
      setTheme(darkTheme);
    }
  };

  return (
    <button
      className={theme === darkTheme ? "clicked" : ""}
      id="darkMode"
      onClick={(e) => switchTheme(e)}
    ></button>
  );
};

export default DarkMode;
