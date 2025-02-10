import React from 'react';
import { motion } from 'framer-motion';
import { HiDownload, HiChartBar, HiDocumentReport } from 'react-icons/hi';

const ReportCard = ({ report, onView, onDownload }) => {
  const icons = {
    sales: HiChartBar,
    inventory: HiDocumentReport,
  };

  const Icon = icons[report.type] || HiDocumentReport;

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
    >
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-3">
          <Icon className="text-2xl text-blue-400" />
          <div>
            <h3 className="text-xl font-semibold text-blue-400">{report.title}</h3>
            <p className="text-gray-400">{report.description}</p>
          </div>
        </div>
        <span className="text-sm text-gray-400">{report.date}</span>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-700 flex gap-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onView(report)}
          className="flex-1 px-4 py-2 bg-blue-600/20 text-blue-400 rounded-lg hover:bg-blue-600/30 transition-colors"
        >
          View Report
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onDownload(report)}
          className="flex items-center justify-center gap-2 px-4 py-2 bg-purple-600/20 text-purple-400 rounded-lg hover:bg-purple-600/30 transition-colors"
        >
          <HiDownload />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ReportCard;