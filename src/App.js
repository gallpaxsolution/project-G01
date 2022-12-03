import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.css";
import AuthProvider from "./components/Contexts/AuthProvider";
<<<<<<< HEAD
import BookingRoute from "./components/Admin/BookingManagement/BookingRoute";
=======
import Traveller from "./pages/Traveller/Traveller";
import AddTraveller from "./components/Traveller/AddTraveller";
import Deposite from "./pages/Deposite/Deposite";

>>>>>>> d2b66d287b0b5b39544e369294cd9c13e01466ca

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
<<<<<<< HEAD
            <Route path="/bookingroute" element={<BookingRoute />} />
=======
            <Route path="/traveller" element={<Traveller/>} />
            <Route path="/addtraveller" element={<AddTraveller/>} />
            <Route path="/deposite" element={<Deposite/>} />
>>>>>>> d2b66d287b0b5b39544e369294cd9c13e01466ca
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
