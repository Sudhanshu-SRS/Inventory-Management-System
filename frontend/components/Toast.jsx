import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useThemedClass } from '../utility/useThemedClass';

export const Toast = ({ message, type = 'info', onClose }) => {
  const theme = useThemedClass();

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        className={`fixed top-4 right-4 z-50 ${theme.card} ${theme.status[type]} p-4 rounded-lg shadow-lg`}
      >
        <div className="flex items-center gap-2">
          <span>{message}</span>
          <button onClick={onClose} className="ml-4">&times;</button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};