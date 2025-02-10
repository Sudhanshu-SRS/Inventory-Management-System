import React from 'react';
import { motion } from 'framer-motion';
import { useThemedClass } from '../utility/useThemedClass';

export const LoadingSpinner = () => {
  const theme = useThemedClass();
  
  return (
    <div className="flex justify-center items-center py-12">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className={`w-12 h-12 border-4 border-t-blue-500 ${
          theme.isDark ? 'border-gray-700' : 'border-gray-200'
        } rounded-full`}
      />
    </div>
  );
};