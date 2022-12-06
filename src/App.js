import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.css";
import AuthProvider from "./components/Contexts/AuthProvider";
import BookingRoute from "./components/Admin/BookingManagement/BookingRoute";
import Traveller from "./pages/Traveller/Traveller";
import AddTraveller from "./components/Traveller/AddTraveller";
import Deposite from "./pages/Deposite/Deposite";

import AddDeposite from "./components/Deposit/AddDeposite";

import BookingDetails from "./components/Admin/BookingDetails/BookingDetails";
import SearchResult from "./pages/SearchReslut/SearchResult";
import FlightInformation from "./pages/FligthInformation/FlightInformation";
import Header from "./components/Header/Header";
import RoundSearchResult from "./pages/SearchReslut/RoundSearchResult";
import RoundFlightUserInfo from "./components/FlightUserinfo/RoundFlightUserInfo";
import FlightDetails from "./components/Admin/FlightDetails/FlightDetails";
import SignIn from "./components/Admin/SignIn/SignIn";

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/searchresult" element={<SearchResult />} />
            <Route path="/roundsearchresult" element={<RoundSearchResult />} />
            <Route path="/flightinformation" element={<FlightInformation />} />
            <Route
              path="/roundflightinformation"
              element={<RoundFlightUserInfo />}
            />
            <Route path="/traveller" element={<Traveller />} />
            <Route path="/addtraveller" element={<AddTraveller />} />
            <Route path="/deposite" element={<Deposite />} />
            <Route path="/adddeposite" element={<AddDeposite />} />

            {/* -----KB------  */}

            <Route path="/bookingroute" element={<BookingRoute />} />
            <Route path="/bookingdetails" element={<BookingDetails />} />
            <Route path="/flightdetail" element={<FlightDetails />} />
            <Route path="/signin" element={<SignIn />} />

            {/* <Route path="/bookingroute" element={<BookingRoute />} /> */}
            {/* <Route path="/queuedetail" element={<BookingDetails />} /> */}

            {/* -----KB------  */}

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
