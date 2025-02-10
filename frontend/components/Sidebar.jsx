import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import {
  HiChartPie,
  HiFolder,
  HiFolderOpen,
  HiTag,
  HiShoppingCart,
  HiSearch,
  HiDocument,
  HiUsers,
  HiDocumentReport,
  HiLogout,
  HiMenu,
  HiChevronLeft,
  HiChevronRight,
} from "react-icons/hi";
import { useTheme } from "../context/ThemeContext"; // Import useTheme from the appropriate context

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const location = useLocation();
  const { isDark } = useTheme(); // Use the isDark value from the theme context

  const menuItems = [
    { title: "Dashboard", icon: <HiChartPie />, path: "/dashboard" },
    { title: "Categories", icon: <HiFolder />, path: "/categories" },
    { title: "Subcategories", icon: <HiFolderOpen />, path: "/subcategories" },
    { title: "Products", icon: <HiTag />, path: "/products" },
    { title: "Inventory", icon: <HiShoppingCart />, path: "/inventory" },
    { title: "Search", icon: <HiSearch />, path: "/search" },
    { title: "Search Invoice", icon: <HiDocument />, path: "/search-invoice" },
    { title: "Customer Details", icon: <HiUsers />, path: "/customers" },
    { title: "Reports", icon: <HiDocumentReport />, path: "/reports" },
  ];

  const sidebarVariants = {
    expanded: {
      width: "240px",
      transition: {
        duration: 0.3,
        type: "spring",
        damping: 20,
      },
    },
    collapsed: {
      width: "80px",
      transition: {
        duration: 0.3,
        type: "spring",
        damping: 20,
      },
    },
  };

  return (
    <motion.div
      initial="expanded"
      animate={isExpanded ? "expanded" : "collapsed"}
      variants={sidebarVariants}
      className={`fixed left-0 h-screen z-40 ${
        isDark
          ? "bg-gray-900 text-white border-gray-800"
          : "bg-white text-gray-800 border-gray-200"
      } border-r transition-colors duration-300`}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`fixed ${
          isExpanded ? "left-[220px]" : "left-[60px]"
        } top-8 z-50 bg-blue-600 rounded-full p-1.5 transform hover:scale-110 transition-all duration-300 text-white shadow-lg`}
      >
        {isExpanded ? <HiChevronLeft /> : <HiChevronRight />}
      </button>

      {/* Admin Header */}
      <div className="p-4 border-b border-gray-800">
        <motion.div
          className="flex items-center gap-3"
          initial={false}
          animate={{ justifyContent: isExpanded ? "flex-start" : "center" }}
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
            <HiMenu className="w-6 h-6" />
          </div>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="font-semibold text-lg"
            >
              Admin Panel
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Menu Items */}
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300
              ${
                location.pathname === item.path
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-800 text-gray-400 hover:text-white"
              }`}
          >
            <motion.div
              className={`text-xl ${!isExpanded && "mx-auto"}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.icon}
            </motion.div>
            {isExpanded && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="whitespace-nowrap"
              >
                {item.title}
              </motion.span>
            )}
          </Link>
        ))}
      </nav>

      {/* Logout Button */}
      <div className="absolute bottom-0 w-full p-4 border-t border-gray-800">
        <button
          className="flex items-center gap-3 w-full p-3 rounded-lg text-red-500 hover:bg-red-500/10 transition-all duration-300"
          onClick={() => console.log("Logout clicked")}
        >
          <motion.div
            className={`text-xl ${!isExpanded && "mx-auto"}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <HiLogout />
          </motion.div>
          {isExpanded && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              Logout
            </motion.span>
          )}
        </button>
      </div>
    </motion.div>
  );
};

export default Sidebar;
