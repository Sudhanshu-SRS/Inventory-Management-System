import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiFilter, HiDownload } from "react-icons/hi";
import ReportCard from "../components/ReportCard";
import ReportChart from "../components/ReportChart";
import { useTheme } from "../context/ThemeContext";
import { useThemedClass } from "../utility/useThemedClass";

const Reports = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("month");
  const [selectedType, setSelectedType] = useState("all");
  const theme = useThemedClass();

  // Mock data for reports
  const reports = [
    {
      id: 1,
      title: "Monthly Sales Report",
      description: "Summary of sales performance for the current month",
      type: "sales",
      date: "2024-02-10",
    },
    {
      id: 2,
      title: "Inventory Status",
      description: "Current stock levels and movement analysis",
      type: "inventory",
      date: "2024-02-10",
    },
  ];

  // Mock data for chart
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sales",
        data: [65, 59, 80, 81, 56, 55],
        borderColor: "#60a5fa",
        backgroundColor: "#60a5fa20",
      },
      {
        label: "Expenses",
        data: [28, 48, 40, 19, 86, 27],
        borderColor: "#c084fc",
        backgroundColor: "#c084fc20",
      },
    ],
  };

  const handleViewReport = (report) => {
    console.log("Viewing report:", report);
  };

  const handleDownloadReport = (report) => {
    console.log("Downloading report:", report);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`min-h-screen ${theme.baseBackground} p-6 transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto ml-40">
        <h1 className={`text-4xl font-bold ${theme.heading} mb-8`}>
          Reports & Analytics
        </h1>

        <div
          className={`${theme.card} rounded-xl p-6 border ${theme.border} mb-8`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className={`block text-sm ${theme.text.secondary} mb-2`}>
                Time Period
              </label>
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className={`w-full ${theme.input} px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
              >
                <option value="week">This Week</option>
                <option value="month">This Month</option>
                <option value="quarter">This Quarter</option>
                <option value="year">This Year</option>
              </select>
            </div>
            <div>
              <label className={`block text-sm ${theme.text.secondary} mb-2`}>
                Report Type
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className={`w-full ${theme.input} px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
              >
                <option value="all">All Reports</option>
                <option value="sales">Sales Reports</option>
                <option value="inventory">Inventory Reports</option>
              </select>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="mb-8">
          <ReportChart data={chartData} title="Business Overview" />
        </div>

        {/* Reports List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reports.map((report) => (
            <ReportCard
              key={report.id}
              report={report}
              onView={handleViewReport}
              onDownload={handleDownloadReport}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Reports;
