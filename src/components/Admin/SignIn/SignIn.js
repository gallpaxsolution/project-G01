import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import "./SignIn.css";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const SignIn = () => {
  return (
    <Box>
      {/*
       */}
      <Container maxWidth="lg" style={{ marginTop: "50px" }}>
        <Grid container spacing={2} style={{ justifyContent: "center" }}>
          <Grid item xs={12} md={5}>
            <form>
              <Box>
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "26px",
                    fontWeight: "500",
                    color: "#282E2C",
                    textAlign: "center",
                    marginBottom: "20px",
                  }}
                >
                  Sign In
                </Typography>
                <Box className="signInInput1" mb={2.5}>
                  <input
                    type="text"
                    style={{
                      border: "none",
                      background: "rgba(255, 168, 77, 0.25)",
                      width: "100%",
                      height: "34px",

                      padding: "0px 10px",
                      color: "#FFA84D",
                    }}
                    placeholder="Enter Your Username"
                  />
                </Box>
                <Box className="signInInput1" mb={2.5}>
                  <input
                    type="password"
                    style={{
                      border: "none",
                      background: "rgba(255, 168, 77, 0.25)",
                      width: "100%",
                      height: "34px",

                      padding: "0px 10px",
                      color: "#FFA84D",
                    }}
                    placeholder="Enter Your Password"
                  />
                </Box>
                <Box
                  style={{ display: "flex", justifyContent: "space-between" }}
                  mb={4.5}
                >
                  <Box style={{ display: "flex", gap: "10px" }}>
                    <input
                      type="checkbox"
                      id="vehicle1"
                      name="vehicle1"
                      value="Bike"
                    ></input>
                    <label for="vehicle1" style={{ color: "#FFA84D" }}>
                      {" "}
                      Remember me
                    </label>
                  </Box>
                  <Box>
                    <label style={{ color: "#FFA84D" }}>
                      Forget Password ?
                    </label>
                  </Box>
                </Box>

                <Box className="loginBtn1">
                  <button>Login</button>
                </Box>

                <Box mt={2}>
                  <Typography style={{ color: "#FFA84D", fontSize: "14px" }}>
                    Don not have a account or Register as agent{" "}
                    <a
                      href="#"
                      style={{
                        color: "#2564B8",
                        fontFamily: "poppins",
                        fontWeight: "500",
                      }}
                    >
                      Sign Up
                    </a>
                  </Typography>
                </Box>
              </Box>
            </form>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SignIn;
