import React from "react";
import { useTheme } from "../context/ThemeContext";

const Footer = () => {
  const { isDark } = useTheme();

  return (
    <footer
      className={`${
        isDark ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      } transition-colors duration-300 border-t ${
        isDark ? "border-gray-700" : "border-gray-200"
      } p-4 mt-8`}
    >
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Pulses Inventory Management. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
