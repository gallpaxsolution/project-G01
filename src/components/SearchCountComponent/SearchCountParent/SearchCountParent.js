import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const SearchCountParent = () => {
  return (
    <Box>
      <Container maxWidth="xl" style={{ marginTop: "50px" }}>
        <Box>
          <Box>
            <Typography
              sx={{
                color: "#000000",
                fontSize: "18px",
                marginBottom: "10px",
                fontWeight: "600",
              }}
            >
              Search Count{" "}
            </Typography>
          </Box>
          <NavLink
            to="/dashboard/searchcount/todaysatecount"
            className={({ isActive }) =>
              isActive ? "active-booking-link" : "booking-link"
            }
          >
            Today State
          </NavLink>
          <NavLink
            to="/dashboard/searchcount/totalsatecount"
            className={({ isActive }) =>
              isActive ? "active-booking-link" : "booking-link"
            }
          >
            {" "}
            Total State
          </NavLink>
          <NavLink
            to="/dashboard/searchcount/yesterdaycount"
            className={({ isActive }) =>
              isActive ? "active-booking-link" : "booking-link"
            }
          >
            Yesterday State
          </NavLink>
          <NavLink
            to="/dashboard/searchcount/last7daycount"
            className={({ isActive }) =>
              isActive ? "active-booking-link" : "booking-link"
            }
          >
            Last 7 Days
          </NavLink>
          <NavLink
            to="/dashboard/searchcount/last15daycount"
            className={({ isActive }) =>
              isActive ? "active-booking-link" : "booking-link"
            }
          >
            Last 15 Days
          </NavLink>
          <NavLink
            to="/dashboard/searchcount/last1monthcount"
            className={({ isActive }) =>
              isActive ? "active-booking-link" : "booking-link"
            }
          >
            Last 1 Month
          </NavLink>
        </Box>
        <Outlet></Outlet>
      </Container>
    </Box>
  );
};

export default SearchCountParent;
