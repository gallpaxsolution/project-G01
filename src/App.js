import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.css";
import AuthProvider from "./components/Contexts/AuthProvider";
import Traveller from "./pages/Traveller/Traveller";
import AddTraveller from "./components/Traveller/AddTraveller";
import Deposite from "./pages/Deposite/Deposite";


function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/traveller" element={<Traveller/>} />
            <Route path="/addtraveller" element={<AddTraveller/>} />
            <Route path="/deposite" element={<Deposite/>} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
