import { useTheme } from "../context/ThemeContext";

export const useThemedClass = () => {
  const { isDark } = useTheme();

  return {
    // Base styles
    baseBackground: isDark
      ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
      : "bg-gradient-to-br from-gray-100 via-white to-gray-100 text-gray-800",

    // Card and container styles
    card: isDark
      ? "bg-gray-800/50 backdrop-blur-sm border-gray-700/50 shadow-xl"
      : "bg-white/80 backdrop-blur-sm border-gray-200 shadow-lg",

    // Text styles
    text: {
      primary: isDark ? "text-gray-100" : "text-gray-800",
      secondary: isDark ? "text-gray-400" : "text-gray-600",
      accent: isDark ? "text-blue-400" : "text-blue-600",
    },

    // Input styles
    input: isDark
      ? "bg-gray-700/50 text-white placeholder-gray-400"
      : "bg-gray-200 text-gray-800 placeholder-gray-500",

    // Button styles
    button: {
      primary: isDark
        ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500"
        : "bg-blue-600 hover:bg-blue-700",
      secondary: isDark
        ? "bg-gray-700 hover:bg-gray-600"
        : "bg-gray-200 hover:bg-gray-300",
      danger: isDark
        ? "bg-red-500/20 text-red-400 hover:bg-red-500/30"
        : "bg-red-100 text-red-600 hover:bg-red-200",
    },

    // Heading styles
    heading: isDark
      ? "bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
      : "text-blue-700",

    // Border styles
    border: isDark ? "border-gray-700" : "border-gray-200",

    // Status indicators
    status: {
      success: isDark
        ? "bg-green-500/20 text-green-400"
        : "bg-green-100 text-green-600",
      warning: isDark
        ? "bg-yellow-500/20 text-yellow-400"
        : "bg-yellow-100 text-yellow-600",
      danger: isDark ? "bg-red-500/20 text-red-400" : "bg-red-100 text-red-600",
      info: isDark
        ? "bg-blue-500/20 text-blue-400"
        : "bg-blue-100 text-blue-600",
    },
  };
};
