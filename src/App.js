import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.css";
import AuthProvider from "./components/Contexts/AuthProvider";

import BookingRoute from "./components/Admin/BookingManagement/BookingRoute";

import Traveller from "./pages/Traveller/Traveller";
import AddTraveller from "./components/Traveller/AddTraveller";
import Deposite from "./pages/Deposite/Deposite";
import BookingDetails from "./components/Admin/BookingDetails/BookingDetails";
import SearchResult from "./pages/SearchReslut/SearchResult";

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/searchresult" element={<SearchResult />} />
            <Route path="/bookingroute" element={<BookingRoute />} />
            <Route path="/queuedetail" element={<BookingDetails />} />
            <Route path="/traveller" element={<Traveller />} />
            <Route path="/addtraveller" element={<AddTraveller />} />
            <Route path="/deposite" element={<Deposite />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
