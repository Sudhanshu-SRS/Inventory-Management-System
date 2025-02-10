import React from 'react';
import { motion } from 'framer-motion';

const InventoryItem = ({ item, deleteItem }) => {
  return (
    <div className="flex justify-between items-center">
      <span className="text-lg">{item.name}</span>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => deleteItem(item.id)}
        className="bg-red-500/20 text-red-500 px-4 py-2 rounded-lg hover:bg-red-500/30 transition-all duration-300"
      >
        Delete
      </motion.button>
    </div>
  );
};

export default InventoryItem;