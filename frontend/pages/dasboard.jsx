import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { useThemedClass } from "../utility/useThemedClass";

const initialProducts = [
  { id: 1, name: "Chana Dal", category: "Pulses", stock: 50, price: 85, status: "In Stock", trend: "up" },
  { id: 2, name: "Moong Dal", category: "Pulses", stock: 10, price: 120, status: "Low Stock", trend: "down" },
  { id: 3, name: "Toor Dal", category: "Pulses", stock: 0, price: 95, status: "Out of Stock", trend: "stable" },
  { id: 4, name: "Urad Dal", category: "Pulses", stock: 75, price: 110, status: "In Stock", trend: "up" },
];

const Dashboard = () => {
  const [products, setProducts] = useState(initialProducts);
  const [isLoading, setIsLoading] = useState(true);
  const theme = useThemedClass();

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`min-h-screen ${theme.baseBackground} p-6 transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto">
        <h1 className={`text-4xl font-bold ${theme.heading}`}>
          Dashboard
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {['Total Stock', 'Low Stock', 'Out of Stock', 'Total Value'].map((stat, index) => (
            <motion.div
              key={stat}
              variants={cardVariants}
              className={`${theme.card} rounded-xl p-6 border`}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className={theme.text}>{stat}</h3>
              <p className="text-2xl font-bold">{index * 25 + 100}</p>
              <div className="mt-2 text-sm text-green-400">+12% from last month</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div 
            variants={cardVariants}
            className="lg:col-span-2 bg-gray-800 rounded-xl p-6"
          >
            <h2 className="text-xl font-semibold mb-4">Current Inventory</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b border-gray-700">
                  <tr>
                    <th className="py-3 text-left">Product</th>
                    <th className="py-3 text-left">Stock</th>
                    <th className="py-3 text-left">Price (₹/kg)</th>
                    <th className="py-3 text-left">Status</th>
                    <th className="py-3 text-left">Trend</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr 
                      key={product.id}
                      className="border-b border-gray-700 hover:bg-gray-700/50 transition-colors"
                    >
                      <td className="py-3">{product.name}</td>
                      <td className="py-3">{product.stock}</td>
                      <td className="py-3">₹{product.price}</td>
                      <td className="py-3">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          product.status === "In Stock" ? "bg-green-500/20 text-green-500" :
                          product.status === "Low Stock" ? "bg-yellow-500/20 text-yellow-500" :
                          "bg-red-500/20 text-red-500"
                        }`}>
                          {product.status}
                        </span>
                      </td>
                      <td className="py-3">
                        <span className={`${
                          product.trend === "up" ? "text-green-500" :
                          product.trend === "down" ? "text-red-500" :
                          "text-gray-500"
                        }`}>
                          {product.trend === "up" ? "↑" : product.trend === "down" ? "↓" : "→"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          <motion.div 
            variants={cardVariants}
            className="bg-gray-800 rounded-xl p-6"
          >
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
            <div className="space-y-4">
              {['Create Order', 'Add Stock', 'Generate Report', 'Manage Suppliers'].map((action) => (
                <button
                  key={action}
                  className="w-full p-4 bg-gray-700 hover:bg-gray-600 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/10"
                >
                  {action}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;