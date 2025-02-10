import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiSearch, HiFilter, HiDownload, HiPrinter } from "react-icons/hi";
import { useTheme } from "../context/ThemeContext";
import { useThemedClass } from "../utility/useThemedClass";

const SearchInvoice = () => {
  const { isDark } = useTheme();
  const theme = useThemedClass();

  const [searchQuery, setSearchQuery] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  const [dateRange, setDateRange] = useState({ from: "", to: "" });
  const [selectedStatus, setSelectedStatus] = useState("all");

  // Mock data for invoices
  const invoices = [
    {
      id: "INV-001",
      date: "2024-03-15",
      customer: "Raj Trading Co.",
      amount: 25000,
      items: ["Toor Dal", "Moong Dal"],
      status: "paid",
    },
    {
      id: "INV-002",
      date: "2024-03-14",
      customer: "Krishna Pulses",
      amount: 18500,
      items: ["Chana Dal"],
      status: "pending",
    },
    {
      id: "INV-003",
      date: "2024-03-13",
      customer: "Shiva Enterprises",
      amount: 32000,
      items: ["Urad Dal", "Masoor Dal"],
      status: "paid",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
  };

  const filterVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: "auto", opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`min-h-screen ${theme.baseBackground} p-6 transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto">
        <h1 className={`text-4xl font-bold ${theme.heading} mb-8`}>
          Search Invoices
        </h1>

        <div
          className={`${theme.card} rounded-xl p-6 border ${theme.border} mb-8`}
        >
          <div className="relative">
            <HiSearch
              className={`absolute left-4 top-3.5 ${theme.text.secondary}`}
            />
            <input
              type="text"
              className={`w-full ${theme.input} pl-12 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="Search invoices..."
            />
          </div>
        </div>

        {/* Search and Filter Section */}
        <div
          className={`${theme.card} rounded-xl p-6 mb-8 border transition-colors`}
        >
          <div className="flex flex-wrap gap-4">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <HiSearch className="absolute left-4 top-3.5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by invoice number, customer name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-gray-700/50 text-white pl-12 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                />
              </div>
            </div>

            {/* Filter Toggle Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilterOpen(!filterOpen)}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-300"
            >
              <HiFilter />
              Filters
            </motion.button>
          </div>

          {/* Expandable Filter Section */}
          <AnimatePresence>
            {filterOpen && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={filterVariants}
                className="mt-4 pt-4 border-t border-gray-700"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Date From
                    </label>
                    <input
                      type="date"
                      value={dateRange.from}
                      onChange={(e) =>
                        setDateRange({ ...dateRange, from: e.target.value })
                      }
                      className="w-full bg-gray-700/50 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Date To
                    </label>
                    <input
                      type="date"
                      value={dateRange.to}
                      onChange={(e) =>
                        setDateRange({ ...dateRange, to: e.target.value })
                      }
                      className="w-full bg-gray-700/50 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Status
                    </label>
                    <select
                      value={selectedStatus}
                      onChange={(e) => setSelectedStatus(e.target.value)}
                      className="w-full bg-gray-700/50 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="all">All Status</option>
                      <option value="paid">Paid</option>
                      <option value="pending">Pending</option>
                    </select>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Invoices List */}
        <div className="space-y-4">
          {invoices.map((invoice) => (
            <motion.div
              key={invoice.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.01 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
            >
              <div className="flex flex-wrap justify-between items-start gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-blue-400">
                    {invoice.id}
                  </h3>
                  <p className="text-gray-400">{invoice.customer}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {invoice.items.map((item, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold">
                    ₹{invoice.amount.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-400">{invoice.date}</p>
                  <span
                    className={`inline-block mt-2 px-3 py-1 rounded-full text-sm ${
                      invoice.status === "paid"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-yellow-500/20 text-yellow-400"
                    }`}
                  >
                    {invoice.status.charAt(0).toUpperCase() +
                      invoice.status.slice(1)}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-4 pt-4 border-t border-gray-700 flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600/20 text-blue-400 rounded-lg hover:bg-blue-600/30 transition-colors"
                >
                  <HiDownload /> Download PDF
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 bg-purple-600/20 text-purple-400 rounded-lg hover:bg-purple-600/30 transition-colors"
                >
                  <HiPrinter /> Print Invoice
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SearchInvoice;
