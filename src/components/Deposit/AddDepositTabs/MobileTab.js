import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";

const MobileTab = () => {
  return (
    <Box>
      <form>
        <Box className="passengerInput1">
          <Grid container spacing={4}>
            <Grid item md={4}>
              <Typography>Select Using Payment Method</Typography>
              <Box style={{ marginTop: "5px" }}>
                <input type="text" placeholder="Select Using Payment Method" />
              </Box>
            </Grid>
            <Grid item md={4}>
              <Typography>Pay Using Account Number</Typography>
              <Box style={{ marginTop: "5px" }}>
                <input type="text" placeholder="Pay Using Account Number" />
              </Box>
            </Grid>
            <Grid item md={4}>
              <Typography>Transaction ID</Typography>
              <Box style={{ marginTop: "5px" }}>
                <input type="text" placeholder="Transaction ID" />
              </Box>
            </Grid>
            <Grid item md={4}>
              <Typography>Reference</Typography>
              <Box style={{ marginTop: "5px" }}>
                <input type="text" placeholder="Reference" />
              </Box>
            </Grid>
            <Grid item md={4}>
              <Typography>Gateway Fee(%)</Typography>
              <Box style={{ marginTop: "5px" }}>
                <input type="text" placeholder="ReferGateway Fee(%)" />
              </Box>
            </Grid>
            <Grid item md={4}>
              <Typography>Amount to be Deposited</Typography>
              <Box style={{ marginTop: "5px" }}>
                <input type="text" placeholder="Amount to be Deposited" />
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

export default MobileTab;
