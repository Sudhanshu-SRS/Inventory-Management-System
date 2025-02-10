import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const initialProducts = [
  {
    id: 1,
    name: "Chana Dal",
    category: "Pulses",
    price: "₹85/kg",
    image: "../assets/chana.jpg",
  },
  {
    id: 2,
    name: "Moong Dal",
    category: "Pulses",
    price: "₹120/kg",
    image: "../assets/mong.jpg",
  },
  {
    id: 3,
    name: "Toor Dal",
    category: "Pulses",
    price: "₹95/kg",
    image: "../assets/tur.jpg",
  },
  {
    id: 4,
    name: "Urad Dal",
    category: "Pulses",
    price: "₹110/kg",
    image: "../assets/udat.jpg",
  },
];

const Products = () => {
  const [products, setProducts] = useState(initialProducts);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-6 ml-40">
      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header Section */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Available Products
            </h1>
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-300 transform hover:scale-105">
              + Add Product
            </button>
          </div>

          {/* Products List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <motion.div
                key={product.id}
                className="bg-gray-800 rounded-xl p-6 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-60 object-cover rounded-lg mb-4"
                />
                <h2 className="text-2xl font-semibold text-blue-400">
                  {product.name}
                </h2>
                <h3 className="text-gray-400">Category: {product.category}</h3>
                <p className="text-gray-300 mt-2">Price: {product.price}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Products;
