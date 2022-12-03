import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Header from "../../Header/Header";
import FlightIcon from "@mui/icons-material/Flight";
import "./BookingDetails.css";
import flightImg from "../../../../src/images/BookingManagement/flight.png";

const BookingDetails = () => {
  return (
    <Box>
      <Header></Header>
      <Container maxWidth="lg" style={{ marginTop: "50px" }}>
        <Grid container spacing={2}>
          <Grid item md={8}>
            <Box style={{ backgroundColor: "#D1E9FF", padding: "6px 20px" }}>
              <Typography
                style={{
                  color: "#003566",
                  fontSize: "13px",
                  fontWeight: "600px",
                }}
              >
                Reference ID: FFB1687
              </Typography>
            </Box>

            <Box
              style={{
                marginTop: "13px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <span style={{ fontWeight: "bold", fontSize: "14px" }}>
                  18.40
                </span>
                <span style={{ fontSize: "14px" }}>DAC</span>
                <FlightIcon
                  style={{ transform: "rotate(90deg)", fontSize: "18px" }}
                />
                <span style={{ fontWeight: "bold", fontSize: "14px" }}>
                  18.40
                </span>
                <span style={{ fontSize: "14px" }}>DXB</span>
                <span style={{ color: "#003566", fontSize: "12px" }}>
                  2 Stop(s) 5h 35min
                </span>
              </Box>
              <Box className="returnFlight1">
                <button>Return Flight</button>
              </Box>
            </Box>
            <Box
              style={{
                display: "flex",
                gap: "12px",
                alignItems: "center",
                marginTop: "10px",
              }}
            >
              <span>Dhaka</span>
              <FlightIcon
                style={{
                  transform: "rotate(90deg)",
                  fontSize: "26px",
                  color: "#2D669B",
                }}
              />
              <span>Dubai</span>
            </Box>

            <Grid container spacing={2}>
              <Grid
                item
                md={6}
                sx={{ display: "flex", alignItems: "flex-end" }}
              >
                <Box
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                    gap: "5px",
                  }}
                >
                  <Box>
                    <img
                      style={{
                        width: "43px",
                        height: "43px",
                        display: "block",
                      }}
                      src={flightImg}
                    />
                  </Box>
                  <Box>
                    <Typography
                      style={{ fontSize: "14px", paddingBottom: "1px" }}
                    >
                      Bangladesh Biman
                    </Typography>
                    <Typography style={{ fontSize: "11px" }}>
                      <span style={{ color: "#2D669B", paddingRight: "11px" }}>
                        BG 78514 | W
                      </span>{" "}
                      Flight Duration : 5h 30min
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid
                item
                md={6}
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "flex-end",
                }}
              >
                <Typography style={{ color: "#222222", fontSize: "11px" }}>
                  Cabin: 7 KG, Baggage : ADT 35 KG
                </Typography>
              </Grid>

              <Grid
                item
                md={6}
                sx={{ display: "flex", alignItems: "flex-end" }}
              >
                <Box>
                  <Box>
                    <Typography
                      style={{
                        fontSize: "13px",
                        paddingBottom: "1px",
                        color: "#888888",
                      }}
                    >
                      Departure Time
                    </Typography>
                    <Typography style={{ fontSize: "13px", color: "#888888" }}>
                      Airport
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item md={6} sx={{ textAlign: "right" }}>
                <Typography
                  style={{
                    color: "#2D669B",
                    fontSize: "13px",
                  }}
                >
                  Fri 28 Oct 2022 04:00 AM
                </Typography>
                <Typography style={{ color: "#FFA84D", fontSize: "13px" }}>
                  DAC - Dhaka-Hazrat Shahjalal International Airport Terminal: 1
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={4}>
            hello2
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default BookingDetails;
