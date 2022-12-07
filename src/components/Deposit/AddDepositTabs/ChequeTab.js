import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";

const ChequeTab = () => {
  return (
    <Box>
   
      <form>
        <Box className="passengerInput1">
          <Grid container spacing={4}>
            <Grid item md={4}>
              <Typography>Check Number</Typography>
              <Box style={{ marginTop: "5px" }}>
                <input type="text" placeholder="Check Number" />
              </Box>
            </Grid>
            <Grid item md={4}>
              <Typography>Bank Name</Typography>
              <Box style={{ marginTop: "5px" }}>
                <input type="text" placeholder="Bank Name" />
              </Box>
            </Grid>
            <Grid item md={4}>
              <Typography>Check Date</Typography>
              <Box style={{ marginTop: "5px" }}>
                <input type="date" placeholder="Date" />
              </Box>
            </Grid>
            <Grid item md={4}>
              <Typography>Amount</Typography>
              <Box style={{ marginTop: "5px" }}>
                <input type="text" placeholder="Amount" />
              </Box>
            </Grid>
            <Grid item md={4}>
              <Typography>Reference</Typography>
              <Box style={{ marginTop: "5px" }}>
                <input type="text" placeholder="Reference" />
              </Box>
            </Grid>

            <Grid item md={4}>
              <Typography>Choose Passport Copy</Typography>
              <Box style={{ marginTop: "5px" }}>
                <input
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
          Send Deposit Request
        </Button>
      </form>
    </Box>
  );
};

export default ChequeTab;
