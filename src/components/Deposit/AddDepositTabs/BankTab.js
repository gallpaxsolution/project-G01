import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";

const BankTab = () => {
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
              <Typography>Deposit From</Typography>
              <Box style={{ marginTop: "5px" }}>
                <input type="text" placeholder="Deposit From" />
              </Box>
            </Grid>
            <Grid item md={4}>
              <Typography>Deposit To</Typography>
              <Box style={{ marginTop: "5px" }}>
                <input type="text" placeholder="Deposit To" />
              </Box>
            </Grid>
            <Grid item md={4}>
              <Typography>Check Date</Typography>
              <Box style={{ marginTop: "5px" }}>
                <input type="date" placeholder="Amount" />
              </Box>
            </Grid>
            <Grid item md={4}>
              <Typography>Transaction ID</Typography>
              <Box style={{ marginTop: "5px" }}>
                <input type="text" placeholder="Transaction ID" />
              </Box>
            </Grid>
            <Grid item md={4}>
              <Typography>Amount</Typography>
              <Box style={{ marginTop: "5px" }}>
                <input type="text" placeholder="Amount" />
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

export default BankTab;
