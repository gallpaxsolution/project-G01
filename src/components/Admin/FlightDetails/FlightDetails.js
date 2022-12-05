import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import FlightIcon from "@mui/icons-material/Flight";
import flightImg from "../../../images/BookingManagement/flight.png";
import "./FlightDetails.css";

const FlightDetails = () => {
  return (
    <Box>
      <Container maxWidth="lg" style={{ marginTop: "50px" }}>
        <Box>
          <Typography
            style={{
              fontFamily: "Poppins",
              fontSize: "20px",
              fontWeight: "500",
              color: "#222222",
            }}
          >
            Flight Information Details
          </Typography>
          <Typography
            style={{
              fontFamily: "Poppins",
              fontSize: "13px",
              fontWeight: "500",
              color: "#FFA84D",
            }}
          >
            Biman Bangladeh Airlines & Malayshia Airlines
          </Typography>
        </Box>

        <Grid container spacing={2}>
          <Grid item md={6}>
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
                <span
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: "500",
                    fontSize: "15px",
                  }}
                >
                  18.40
                </span>
                <span
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: "400",
                    fontSize: "15px",
                  }}
                >
                  DAC
                </span>
                <FlightIcon
                  style={{ transform: "rotate(90deg)", fontSize: "20px" }}
                />
                <span
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: "500",
                    fontSize: "15px",
                  }}
                >
                  18.40
                </span>
                <span
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: "400",
                    fontSize: "15px",
                  }}
                >
                  DXB
                </span>
                <span
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: "500",
                    fontSize: "11px",
                    color: "#003566",
                  }}
                >
                  2 Stop(s) 5h 35min
                </span>
              </Box>
            </Box>
            <Box
              style={{ borderLeft: "2px solid #FFA84D", position: "absulote" }}
              mt={2}
            >
              <Box style={{ display: "flex" }}>
                <Box className="circle1">
                  <FlightIcon
                    style={{
                      transform: "rotate(180deg)",
                      fontSize: "25px",
                      position: "relative",
                      top: "40px",
                      left: "-4px",
                      color: "#9C9797",
                    }}
                  />
                </Box>

                <Box>
                  <Box>
                    <Typography
                      style={{
                        fontFamily: "Poppins",
                        fontWeight: "500",
                        fontSize: "12px",
                        color: "#2564B8",
                      }}
                    >
                      DAC{" "}
                      <span
                        style={{
                          color: "#282E2C",
                          padding: "0px 10px",
                        }}
                      >
                        15.00
                      </span>
                    </Typography>
                    <Typography
                      style={{
                        fontFamily: "Poppins",
                        fontWeight: "500",
                        fontSize: "12px",
                        color: "#2564B8",
                      }}
                    >
                      Hazrat Shajalal International Airport, BD
                    </Typography>
                    <Typography
                      style={{
                        fontFamily: "Poppins",
                        fontWeight: "500",
                        fontSize: "12px",
                        color: "#282E2C",
                      }}
                    >
                      3rd june 2022
                    </Typography>
                  </Box>
                  <Box
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                    my={2}
                  >
                    <Box>
                      <img
                        style={{
                          width: "35px",
                          height: "35px",
                          display: "block",
                        }}
                        src={flightImg}
                        alt=".../..."
                      />
                    </Box>
                    <Box>
                      <Typography
                        style={{
                          fontFamily: "Poppins",
                          fontSize: "13px",
                          fontWeight: "500",
                          color: "#222222",
                        }}
                      >
                        Bangladesh Biman
                      </Typography>
                      <Typography
                        style={{
                          fontFamily: "Poppins",
                          fontSize: "11px",
                          fontWeight: "500",
                          color: "#FFA84D",
                        }}
                      >
                        BG 452 || Flight Duration: 5h 35Min
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
                    <Typography
                      style={{
                        fontFamily: "Poppins",
                        fontWeight: "500",
                        fontSize: "12px",
                        color: "#2564B8",
                      }}
                    >
                      DAC{" "}
                      <span
                        style={{
                          color: "#282E2C",
                          padding: "0px 10px",
                        }}
                      >
                        15.00
                      </span>
                    </Typography>
                    <Typography
                      style={{
                        fontFamily: "Poppins",
                        fontWeight: "500",
                        fontSize: "12px",
                        color: "#2564B8",
                      }}
                    >
                      Hazrat Shajalal International Airport, BD
                    </Typography>
                    <Typography
                      style={{
                        fontFamily: "Poppins",
                        fontWeight: "500",
                        fontSize: "12px",
                        color: "#282E2C",
                      }}
                    >
                      3rd june 2022
                    </Typography>
                  </Box>
                  <Box
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                    my={2}
                  >
                    <Box>
                      <img
                        style={{
                          width: "35px",
                          height: "35px",
                          display: "block",
                        }}
                        src={flightImg}
                        alt=".../..."
                      />
                    </Box>
                    <Box>
                      <Typography
                        style={{
                          fontFamily: "Poppins",
                          fontSize: "13px",
                          fontWeight: "500",
                          color: "#222222",
                        }}
                      >
                        Bangladesh Biman
                      </Typography>
                      <Typography
                        style={{
                          fontFamily: "Poppins",
                          fontSize: "11px",
                          fontWeight: "500",
                          color: "#FFA84D",
                        }}
                      >
                        BG 452 || Flight Duration: 5h 35Min
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
                    <Typography
                      style={{
                        fontFamily: "Poppins",
                        fontWeight: "500",
                        fontSize: "12px",
                        color: "#2564B8",
                      }}
                    >
                      DAC{" "}
                      <span
                        style={{
                          color: "#282E2C",
                          padding: "0px 10px",
                        }}
                      >
                        15.00
                      </span>
                    </Typography>
                    <Typography
                      style={{
                        fontFamily: "Poppins",
                        fontWeight: "500",
                        fontSize: "12px",
                        color: "#2564B8",
                      }}
                    >
                      Hazrat Shajalal International Airport, BD
                    </Typography>
                    <Typography
                      style={{
                        fontFamily: "Poppins",
                        fontWeight: "500",
                        fontSize: "12px",
                        color: "#282E2C",
                      }}
                    >
                      3rd june 2022
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item md={6}></Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FlightDetails;
