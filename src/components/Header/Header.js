import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import HouseboatIcon from "@mui/icons-material/Houseboat";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AssessmentIcon from "@mui/icons-material/Assessment";
import LogoutIcon from "@mui/icons-material/Logout";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import AddIcon from "@mui/icons-material/Add";
import { Link, NavLink } from "react-router-dom";
import commaNumber from "comma-number";

const Header = () => {
  const [balance, setBalance] = useState(250000);
  return (
    <Box>
      <Box
        style={{
          backgroundColor: "var(--primary-color)",
          borderRadius: "0px 0px 5px 5px",
          height: "70px",
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          style={{
            width: "20%",
            backgroundColor: "var(--white)",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            style={{
              color: "var(--primary-color)",
              fontSize: "23px",
              fontWeight: "600",
            }}
          >
            <span style={{ color: "var(--secondary-color)" }}>FFTWL</span> alpha
          </Typography>
        </Box>
        <Box
          style={{
            width: "80%",
            height: "60px",
            display: "flex",
            gap: "2px",
            padding: "10px 20px 0",
          }}
        >
          <NavLink
            to="/"
            style={{
              textDecoration: "none",
              backgroundColor: "var(--secondary-color)",
              width: "15%",
              borderRadius: "5px 5px 0px 0px",
              padding: "10px 10px 0px",
              color: "var(--white)",
            }}
          >
            <Box
              style={{
                display: "flex",
                gap: "5px",
                alignItems: "center",
              }}
            >
              <HouseboatIcon />
              Dashboard
            </Box>
          </NavLink>
          <NavLink
            to="/"
            style={{
              textDecoration: "none",
              backgroundColor: "var(--secondary-color)",
              width: "15%",
              borderRadius: "5px 5px 0px 0px",
              padding: "10px 10px 0px",
              color: "var(--white)",
            }}
          >
            <Box
              style={{
                display: "flex",
                gap: "5px",
                alignItems: "center",
              }}
            >
              <ManageAccountsIcon />
              Service
            </Box>
          </NavLink>
          <NavLink
            to="/"
            style={{
              textDecoration: "none",
              backgroundColor: "var(--secondary-color)",
              width: "15%",
              borderRadius: "5px 5px 0px 0px",
              padding: "10px 10px 0px",
              color: "var(--white)",
            }}
          >
            <Box
              style={{
                display: "flex",
                gap: "5px",
                alignItems: "center",
              }}
            >
              <ManageSearchIcon />
              Manage
            </Box>
          </NavLink>
          <NavLink
            to="/"
            style={{
              textDecoration: "none",
              backgroundColor: "var(--secondary-color)",
              width: "15%",
              borderRadius: "5px 5px 0px 0px",
              padding: "10px 10px 0px",
              color: "var(--white)",
            }}
          >
            <Box
              style={{
                display: "flex",
                gap: "5px",
                alignItems: "center",
              }}
            >
              <AccountBalanceIcon />
              Account
            </Box>
          </NavLink>
          <NavLink
            to="/"
            style={{
              textDecoration: "none",
              backgroundColor: "var(--secondary-color)",
              width: "15%",
              borderRadius: "5px 5px 0px 0px",
              padding: "10px 10px 0px",
              color: "var(--white)",
            }}
          >
            <Box
              style={{
                display: "flex",
                gap: "5px",
                alignItems: "center",
              }}
            >
              <AssessmentIcon />
              Report
            </Box>
          </NavLink>
          <NavLink
            to="/"
            style={{
              textDecoration: "none",
              backgroundColor: "var(--secondary-color)",
              width: "15%",
              borderRadius: "5px 5px 0px 0px",
              padding: "10px 10px 0px",
              color: "var(--white)",
            }}
          >
            <Box
              style={{
                display: "flex",
                gap: "5px",
                alignItems: "center",
              }}
            >
              <LogoutIcon />
              Logout
            </Box>
          </NavLink>
        </Box>
        <Box
          style={{
            backgroundColor: "var(--secondary-color)",
            color: "var(--white)",
            width: "20%",
            height: "100%",
            display: "flex",
            fontSize: "20px",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Box>
            Balance <br />
            {commaNumber(balance)} BDT
          </Box>
          <NavLink to="/" style={{ color: "var(--white)", cursor: "pointer" }}>
            <AddIcon style={{ fontSize: "30px" }} />
          </NavLink>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
