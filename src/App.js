import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.css";
import AuthProvider from "./components/Contexts/AuthProvider";
import BookingRoute from "./components/Admin/BookingManagement/BookingRoute";

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bookingroute" element={<BookingRoute />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
