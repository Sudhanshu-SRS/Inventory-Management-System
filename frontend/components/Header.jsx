import React from "react";
import { motion } from "framer-motion";
import { HiSun, HiMoon } from "react-icons/hi";
import { useTheme } from "../context/ThemeContext";

const Header = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header
      className={`${
        isDark ? "bg-gray-800" : "bg-white"
      } transition-colors duration-300 border-b ${
        isDark ? "border-gray-700" : "border-gray-200"
      }`}
    >
      <div className="container mx-auto px-6 ml-40 py-4 flex justify-between items-center">
        <h1
          className={`text-2xl font-bold ${
            isDark ? "text-white" : "text-gray-800"
          }`}
        >
          Pulses Inventory Management
        </h1>
        <div className="flex items-center gap-6">
          <nav className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
            <a href="/" className="mr-4 hover:text-blue-500 transition-colors">
              Home
            </a>
            <a
              href="/inventory"
              className="mr-4 hover:text-blue-500 transition-colors"
            >
              Inventory
            </a>
            <a
              href="/dashboard"
              className="hover:text-blue-500 transition-colors"
            >
              Dashboard
            </a>
          </nav>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className={`p-2 rounded-lg ${
              isDark
                ? "bg-gray-700 text-yellow-400 hover:bg-gray-600"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            } transition-colors`}
          >
            {isDark ? <HiSun size={24} /> : <HiMoon size={24} />}
          </motion.button>
        </div>
      </div>
    </header>
  );
};

export default Header;
