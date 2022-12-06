import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { Box } from "@mui/material";
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
          gap: 4,
        }}
      >
        <Typography sx={{ fontWeight: "500px", fontSize: "23px", color: "#003566" }}>
          Add Travellers
        </Typography>
        <Typography
          sx={{ fontWeight: "500px", fontSize: "20px", color: "#2564B8" }}
        >
          You can find all travellers here
        </Typography>

        <Grid container spacing={2}>
          <Grid
            item
            xs={4}
            sx={{ display: "flex", flexDirection: "column", gap: 7 }}
          >
            <TextField
              label="First/Given Name"
              id="filled-start-adorment"
              variant="standard"
              focused
              placeholder="First Name"
            />
            <TextField
              label="Nationality"
              id="filled-start-adorment"
              variant="standard"
              focused
              placeholder="Bangladesh"
            />
            <TextField
              label="Passport Number"
              id="filled-start-adorment"
              variant="standard"
              focused
              placeholder="41552122"
            />
            <TextField
              label="Phone Number"
              id="filled-start-adorment"
              variant="standard"
              focused
              placeholder="+880 455451455445"
            />
          </Grid>
          <Grid
            item
            xs={4}
            sx={{ display: "flex", flexDirection: "column", gap: 7 }}
          >
            <TextField
              label="Last/Surname"
              id="filled-start-adorment"
              variant="standard"
              focused
              placeholder="Last Name"
            />
            <TextField
              label="Passenger Type"
              id="filled-start-adorment"
              variant="standard"
              focused
              placeholder="Adult"
            />
            <TextField
              label="Passport Expire Date"
              id="filled-start-adorment"
              variant="standard"
              focused
              placeholder="21 May 2022"
            />
            <Button variant="contained" component="label" sx={{mt:'10px'}}>
            Choose Passport Copy
              <input type="file" hidden />
            </Button>
          
          </Grid>
          <Grid
            item
            xs={4}
            sx={{ display: "flex", flexDirection: "column", gap: 7 }}
          >
            <TextField
              label="Gender"
              id="filled-start-adorment"
              variant="standard"
              focused
              placeholder="Gender"
            />

            <TextField
              label="Date of Birth"
              id="filled-start-adorment"
              variant="standard"
              focused
              placeholder="21 May 2022"
            />

            <TextField
              label="Email"
              id="filled-start-adorment"
              variant="standard"
              focused
              placeholder="example@gmail.com"
            />
          </Grid>
        </Grid>
        <Button
          sx={{
            background: "#222222",
            color: "#FFFFFF",
            width: "370px",
            mt: "4rem",
            "&:hover": {
              backgroundColor: "#2564B8",
            },
          }}
        >
          Add This Traveller
        </Button>
      </Box>
      </Container>
      
    </Box>
  );
};

export default AddTraveller;
