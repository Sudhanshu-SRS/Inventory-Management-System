import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiSearch, HiPlus, HiFilter, HiSun, HiMoon } from "react-icons/hi";
import CustomerCard from "../components/CustomerCard";
import { useTheme } from "../context/ThemeContext";

const CustomerDetails = () => {
  const { isDark, toggleTheme } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Enhanced mock data
  const customers = [
    {
      id: 1,
      name: "Raj Kumar",
      businessName: "Raj Trading Co.",
      email: "raj@example.com",
      phone: "+91 98765 43210",
      address: "123 Market Street, Mumbai",
      status: "active",
      totalPurchases: 250000,
      lastPurchase: "2024-03-15",
      joinedDate: "2023-01-15",
    },
    {
      id: 2,
      name: "Priya Sharma",
      businessName: "Krishna Pulses",
      email: "priya@example.com",
      phone: "+91 98765 43211",
      address: "456 Main Road, Delhi",
      status: "active",
      totalPurchases: 185000,
    },
    {
      id: 3,
      name: "Ahmed Khan",
      businessName: "Star Enterprises",
      email: "ahmed@example.com",
      phone: "+91 98765 43212",
      address: "789 Trade Center, Bangalore",
      status: "inactive",
      totalPurchases: 320000,
    },
  ];

  const baseClass = isDark
    ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
    : "bg-gradient-to-br from-gray-100 via-white to-gray-100 text-gray-800";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`min-h-screen ${baseClass} p-6 transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1
              className={`text-4xl font-bold ${
                isDark
                  ? "bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
                  : "text-blue-600"
              }`}
            >
              Customer Details
            </h1>
            <p className={isDark ? "text-gray-400" : "text-gray-600"}>
              Manage your customer information and track their activities
            </p>
          </div>
          <div className="flex items-center gap-4">
          
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsAddModalOpen(true)}
              className={`flex items-center gap-2 px-6 py-3 ${
                isDark
                  ? "bg-gradient-to-r from-blue-500 to-purple-600"
                  : "bg-blue-600 hover:bg-blue-700"
              } text-white rounded-lg transition-all duration-300`}
            >
              <HiPlus />
              Add New Customer
            </motion.button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { label: "Total Customers", value: "156", change: "+12%" },
            { label: "Active Customers", value: "142", change: "+8%" },
            { label: "New This Month", value: "24", change: "+15%" },
            { label: "Total Revenue", value: "₹2.4M", change: "+18%" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`${
                isDark
                  ? "bg-gray-800/50 backdrop-blur-sm border-gray-700/50"
                  : "bg-white shadow-lg border-gray-200"
              } rounded-xl p-6 border transition-colors`}
            >
              <h3 className={isDark ? "text-gray-400" : "text-gray-600"}>
                {stat.label}
              </h3>
              <p className="text-2xl font-bold mt-2">{stat.value}</p>
              <div className="mt-2 text-sm text-green-400">
                {stat.change} from last month
              </div>
            </motion.div>
          ))}
        </div>

        {/* Search and Filter Section */}
        <div
          className={`${
            isDark
              ? "bg-gray-800/50 backdrop-blur-sm border-gray-700/50"
              : "bg-white shadow-lg border-gray-200"
          } rounded-xl p-6 mb-8 border transition-colors`}
        >
          <div className="flex flex-wrap gap-4">
            <div className="flex-1">
              <div className="relative">
                <HiSearch className="absolute left-4 top-3.5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by name, business, or contact..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full ${
                    isDark
                      ? "bg-gray-700/50 text-white"
                      : "bg-gray-200 text-gray-800"
                  } pl-12 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300`}
                />
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilterOpen(!filterOpen)}
              className={`flex items-center gap-2 px-6 py-3 ${
                isDark
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-blue-500 hover:bg-blue-600"
              } rounded-lg transition-colors duration-300`}
            >
              <HiFilter />
              Filters
            </motion.button>
          </div>

          <AnimatePresence>
            {filterOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="mt-4 pt-4 border-t border-gray-700"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Status
                    </label>
                    <select
                      value={selectedStatus}
                      onChange={(e) => setSelectedStatus(e.target.value)}
                      className={`w-full ${
                        isDark
                          ? "bg-gray-700/50 text-white"
                          : "bg-gray-200 text-gray-800"
                      } px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    >
                      <option value="all">All Status</option>
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Customers List */}
        <div className="space-y-4">
          {customers.map((customer) => (
            <CustomerCard
              key={customer.id}
              customer={customer}
              isDark={isDark}
            />
          ))}
        </div>
      </div>

      {/* Add Customer Modal */}
      <AnimatePresence>
        {isAddModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
          >
            {/* Modal content */}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default CustomerDetails;
