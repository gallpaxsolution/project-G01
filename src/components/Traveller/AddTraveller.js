import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { Box } from "@mui/material";
import "./AddTraveller.css";
import Header from "../Header/Header";

const AddTraveller = () => {
  return (
    <Box>
      <Container maxWidth="lg" style={{ marginTop: "50px" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            margin: "30px 0px",
            // gap: 4,
          }}
        >

          {/* 
          
          <Typography 
          style={{color:'#789abc'}}
          
          >

          
          </Typography>
          
          */}
          <Grid container spacing={2}>
            <Box>
              <Typography
                style={{
                  fontFamily: "poppins",
                  fontWeight: "600px",
                  fontSize: "22px",
                  color: "#222222",
                }}
                mb={0.5}
              >
                Add Travelers
              </Typography>
              <Typography
                sx={{ fontWeight: "500px", fontSize: "16px", color: "#2564B8" }}
                mb={5}
              >
                You can add your favorites travelers here
              </Typography>
            </Box>

            <form>
              <Box className="passengerInput1">
                <Grid container spacing={4}>
                  <Grid item md={4}>
                    <Typography>First/Given Name</Typography>
                    <Box style={{ marginTop: "5px" }}>
                      <input
                        required
                        type="text"
                        placeholder="Your First Name"
                      />
                    </Box>
                  </Grid>
                  <Grid item md={4}>
                    <Typography>Last/Surname</Typography>
                    <Box style={{ marginTop: "5px" }}>
                      <input
                        required
                        type="text"
                        placeholder="Your Last Name"
                      />
                    </Box>
                  </Grid>
                  <Grid item md={4}>
                    <Typography>Gender</Typography>
                    <Box style={{ marginTop: "5px" }}>
                      <select required name="Male" id="Male">
                        <option value="Select  ">Select </option>
                        <option value="Male">Male </option>
                        <option value="Female">Female</option>
                      </select>
                    </Box>
                  </Grid>

                  <Grid item md={4}>
                    <Typography>Nationality</Typography>
                    <Box style={{ marginTop: "5px" }}>
                      <input required type="text" placeholder="Bangladesh" />
                    </Box>
                  </Grid>
                  <Grid item md={4}>
                    <Typography>Passenger Type</Typography>
                    <Box style={{ marginTop: "5px" }}>
                      <select required name="Adult" id="Adult">
                        <option value="Select">Select </option>
                        <option value="Adult">Adult </option>
                        <option value="Child">Child</option>
                        <option value="Infant">Infant</option>
                      </select>
                    </Box>
                  </Grid>

                  <Grid item md={4}>
                    <Typography>Date of Birth</Typography>
                    <Box style={{ marginTop: "5px" }}>
                      <input
                        required
                        type="date"
                        placeholder="Find traveler to auto fill"
                      />
                    </Box>
                  </Grid>
                  <Grid item md={4}>
                    <Typography>Passport No</Typography>
                    <Box style={{ marginTop: "5px" }}>
                      <input
                        required
                        type="text"
                        placeholder="Your Passport Number"
                      />
                    </Box>
                  </Grid>
                  <Grid item md={4}>
                    <Typography>Passport Expire Date</Typography>
                    <Box style={{ marginTop: "5px" }}>
                      <input
                        required
                        type="date"
                        placeholder="Find traveler to auto fill"
                      />
                    </Box>
                  </Grid>
                  <Grid item md={4}>
                    <Typography>Email</Typography>
                    <Box style={{ marginTop: "5px" }}>
                      <input
                        required
                        type="email"
                        placeholder="Find traveler to auto fill"
                      />
                    </Box>
                  </Grid>
                  <Grid item md={4}>
                    <Typography>Contact Number</Typography>
                    <Box style={{ marginTop: "5px" }}>
                      <input
                        required
                        type="email"
                        placeholder="Find traveler to auto fill"
                      />
                    </Box>
                  </Grid>
                  <Grid item md={4}>
                    <Typography>Choose Passport Copy</Typography>
                    <Box style={{ marginTop: "5px" }}>
                      <input
                        required
                        style={{
                          backgroundColor: "#2564B8",
                          color: "#fff",
                          display: "flex",
                          alignItems: "center",
                          padding: "5px 10px",
                          boxSizing: "border-box",
                        }}
                        type="file"
                        placeholder="Find traveler to auto fill"
                      />
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              <Button
                sx={{
                  fontFamily: "poppins",
                  fontWeight: "400",
                  fontSize: "14px",
                  textTransform: "capitalize",
                  borderRadius: "2px",
                  background: "#222222",
                  color: "#FFFFFF",
                  width: "370px",
                  mt: "3rem",
                  "&:hover": {
                    backgroundColor: "#222222",
                  },
                }}
              >
                Add This Traveler
              </Button>
            </form>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default AddTraveller;
