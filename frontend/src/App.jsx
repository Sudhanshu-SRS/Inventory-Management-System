import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import Inventory from "../pages/Inventory";
import Dasboard from "../pages/dasboard";
import SearchInvoice from "../pages/SearchInvoice";
import CustomerDetails from "../pages/CustomerDetails";
import Reports from "../pages/Reports";
import Categories from "../pages/Categories";
import Products from "../pages/Products";
import Subcategories from "../pages/Subcategories";
import "./App.css";
import { ThemeProvider } from "../context/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <Router basename="/Inventory-Management-System">
        <div className="flex">
          <Sidebar />
          <div
            className="flex-1 ml-[80px] transition-all duration-300"
            style={{ marginLeft: "80px" }}
          >
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/inventory" element={<Inventory />} />
                <Route path="/dashboard" element={<Dasboard />} />
                <Route path="/search-invoice" element={<SearchInvoice />} />
                <Route path="/customers" element={<CustomerDetails />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/products" element={<Products />} />
                <Route path="/subcategories" element={<Subcategories />} />
                {/* Add more routes for other pages */}
              </Routes>
            </main>
            <Footer />
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
