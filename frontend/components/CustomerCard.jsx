import React from "react";
import { motion } from "framer-motion";
import {
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiCurrencyRupee,
} from "react-icons/hi";
import { useThemedClass } from "../utility/useThemedClass";

const CustomerCard = ({ customer, onEdit, onDelete }) => {
  const theme = useThemedClass();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.01 }}
      className={`${theme.card} rounded-xl p-6 border ${theme.border} transition-all duration-300`}
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className={`text-xl font-semibold ${theme.text.primary}`}>
            {customer.name}
          </h3>
          <p className={theme.text.secondary}>{customer.businessName}</p>
        </div>
        <span
          className={`px-3 py-1 rounded-full text-sm ${
            customer.status === "active"
              ? theme.status.success
              : theme.status.danger
          }`}
        >
          {customer.status}
        </span>
      </div>

      <div className="mt-4 space-y-2">
        {[
          { icon: <HiMail />, text: customer.email },
          { icon: <HiPhone />, text: customer.phone },
          { icon: <HiLocationMarker />, text: customer.address },
          {
            icon: <HiCurrencyRupee />,
            text: `Total Purchases: ₹${customer.totalPurchases.toLocaleString()}`,
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`flex items-center gap-2 ${theme.text.secondary}`}
          >
            <span className={theme.text.muted}>{item.icon}</span>
            {item.text}
          </div>
        ))}
      </div>

      <div className={`mt-4 pt-4 border-t ${theme.border} flex gap-4`}>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onEdit(customer)}
          className={`px-4 py-2 rounded-lg transition-colors ${theme.button.secondary}`}
        >
          Edit Details
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onDelete(customer.id)}
          className={`px-4 py-2 rounded-lg transition-colors ${theme.button.danger}`}
        >
          Delete
        </motion.button>
      </div>
    </motion.div>
  );
};

export default CustomerCard;
