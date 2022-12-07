import React from "react";
import { Box, Container } from "@mui/material";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";

const AddBank = () => {
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
                Add Bank Accoount
              </Typography>
            </Box>

            <form>
              <Box className="passengerInput1">
                <Grid container spacing={4}>
                  <Grid item md={4}>
                    <Typography>Account Holder Name</Typography>
                    <Box style={{ marginTop: "5px" }}>
                      <input type="text" placeholder="Your First Name" />
                    </Box>
                  </Grid>
                  <Grid item md={4}>
                    <Typography>Bank Name</Typography>
                    <Box style={{ marginTop: "5px" }}>
                      <input type="text" placeholder="Your Last Name" />
                    </Box>
                  </Grid>
                  <Grid item md={4}>
                    <Typography>Account Number</Typography>
                    <Box style={{ marginTop: "5px" }}>
                      <input type="text" placeholder="Your Last Name" />
                    </Box>
                  </Grid>
                  <Grid item md={4}>
                    <Typography>Branch Name </Typography>
                    <Box style={{ marginTop: "5px" }}>
                      <input type="text" placeholder="Bangladesh" />
                    </Box>
                  </Grid>
                  <Grid item md={4}>
                    <Typography>Address</Typography>
                    <Box style={{ marginTop: "5px" }}>
                      <input
                        type="text"
                        placeholder="Find traveler to auto fill"
                      />
                    </Box>
                  </Grid>
                  <Grid item md={4}>
                    <Typography>Routing Number</Typography>
                    <Box style={{ marginTop: "5px" }}>
                      <input type="text" placeholder="Your Passport Number" />
                    </Box>
                  </Grid>
                  <Grid item md={4}>
                    <Typography>Swift Code</Typography>
                    <Box style={{ marginTop: "5px" }}>
                      <input
                        type="date"
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
                Add This Account
              </Button>
            </form>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default AddBank;
