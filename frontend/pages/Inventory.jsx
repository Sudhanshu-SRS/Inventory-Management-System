import React, { useEffect, useState } from "react";
import axios from "axios";
import InventoryItem from "../components/InventoryItem";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { useThemedClass } from "../utility/useThemedClass";

const Inventory = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const theme = useThemedClass();

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/items");
      setItems(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching items:", error);
      setIsLoading(false);
    }
  };

  const addItem = async () => {
    if (!newItem.trim()) return;
    try {
      const response = await axios.post("http://localhost:3001/api/items", {
        id: Date.now(),
        name: newItem,
      });
      setItems([...items, response.data]);
      setNewItem("");
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  const deleteItem = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/api/items/${id}`);
      setItems(items.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`min-h-screen ${theme.baseBackground} p-6 transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto">
        <div className={`${theme.card} rounded-xl p-6 border ${theme.border}`}>
          <h1 className={`text-4xl font-bold ${theme.heading} mb-8`}>
            Inventory Management
          </h1>

          <div className="flex gap-4 mb-8">
            <input
              type="text"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              placeholder="Add new item..."
              className={`flex-1 ${theme.input} px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
              onKeyPress={(e) => e.key === "Enter" && addItem()}
            />
            <button
              onClick={addItem}
              className={`${theme.button.primary} px-6 py-2 rounded-lg text-white`}
            >
              Add Item
            </button>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            <motion.ul className="space-y-4" variants={containerVariants}>
              {items.length === 0 ? (
                <motion.li
                  variants={itemVariants}
                  className="text-center text-gray-400 py-8"
                >
                  No items in inventory. Add some items to get started!
                </motion.li>
              ) : (
                items.map((item) => (
                  <motion.div
                    key={item.id}
                    variants={itemVariants}
                    className="bg-gray-700/30 backdrop-blur-sm rounded-lg p-4 hover:bg-gray-700/50 transition-all duration-300"
                  >
                    <InventoryItem item={item} deleteItem={deleteItem} />
                  </motion.div>
                ))
              )}
            </motion.ul>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Inventory;
