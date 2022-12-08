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

import BankAccount from "./pages/BankAccount/BankAccount";
import AddBank from "./components/BankAccount/AddBank";

import FlightDetails from "./components/Admin/FlightDetails/FlightDetails";
import SignIn from "./components/Admin/SignIn/SignIn";
import GeneralLedger from "./pages/General Ledger/GeneralLedger";
import AddStaff from "./components/GeneralLedger/AddStaff";

import MyStaff from "./components/Admin/MyAccount/MyStaff";
import GeneralLedgerRoute from "./pages/General Ledger/GeneralLedgerRoute";
import AddDepositRoute from "./components/Deposit/AddDepositRoute/AddDepositRoute";
import GeneralLedgerReport from './components/GeneralLedger/GeneralLedgerReport';
import AgentManagement from './pages/AgentManagement/AgentManagement';
import PaymentManagement from "./pages/PaymentManagement/PaymentManagement";

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
            <Route path="/bankaccount" element={<BankAccount />} />
            <Route path="/addbankaccount" element={<AddBank />} />

            {/* -----KB------  */}
            <Route path="/bookingroute" element={<BookingRoute />} />
            <Route path="/bookingdetails" element={<BookingDetails />} />
            <Route path="/flightdetail" element={<FlightDetails />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/mystaff" element={<MyStaff />} />
            {/* <Route path="/bookingroute" element={<BookingRoute />} /> */}
            {/* <Route path="/queuedetail" element={<BookingDetails />} /> */}

            {/* -----KB------  */}

            {/*  */}
            <Route path="/traveller" element={<Traveller />} />
            <Route path="/addtraveller" element={<AddTraveller />} />
            <Route path="/bankaccount" element={<BankAccount />} />
            <Route path="/addbankaccount" element={<AddBank />} />
            <Route path="/generalLedgerReport" element={<GeneralLedgerReport />} />
            <Route path="/agentManagement" element={<AgentManagement />} />
            <Route path="/paymentManagement" element={<PaymentManagement />} />
            <Route
              path="/generalledgerroute"
              element={<GeneralLedgerRoute />}
            />

            {/* <Route path="/generalledger" element={<GeneralLedger />} /> */}
            {/* <Route path="/addStaff" element={<AddStaff />} /> */}

            {/* <Route path="/deposite" element={<Deposite />} /> */}
            {/* <Route path="/traveller" element={<Traveller />} /> */}
            {/* <Route path="/addtraveller" element={<AddTraveller />} /> */}
            
            <Route path="/deposite" element={<Deposite />} />
            <Route path="/adddeposite" element={<AddDeposite />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
