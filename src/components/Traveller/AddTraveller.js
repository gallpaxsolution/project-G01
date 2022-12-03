import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { Box } from "@mui/material";
import Header from "../Header/Header";

const AddTraveller = () => {
  return (
    <Box>
      <Header />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          margin: "30px 60px",
          gap: 4,
        }}
      >
        <Typography sx={{ fontWeight: "500px", fontSize: "32px" }}>
          Add Travellers
        </Typography>
        <Typography
          sx={{ fontWeight: "500px", fontSize: "20px", color: "#2564B8" }}
        >
          You can find all travellers here
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={4} sx={{display:'flex', flexDirection:'column', gap:7}}>
            
              <TextField
                label="First/Given Name"
                id="filled-start-adorment"
                variant="standard"
                color="warning"
                focused
                placeholder="First Name"
              />
              <TextField
                label="Nationality"
                id="filled-start-adorment"
                variant="standard"
                color="warning"
                focused
                placeholder="Bangladesh"
              />
              <TextField
                label="Passport Number"
                id="filled-start-adorment"
                variant="standard"
                color="warning"
                focused
                placeholder="41552122"
              />
                <TextField
            label="Phone Number"
            id="filled-start-adorment"
            variant="standard"
            color="warning"
            focused
            placeholder="+880 455451455445"
          />
            
          </Grid>
          <Grid item xs={4} sx={{display:'flex', flexDirection:'column', gap:7}}>
        
              <TextField
                label="Last/Surname"
                id="filled-start-adorment"
                variant="standard"
                color="warning"
                focused
                placeholder="Last Name"
              />
              <TextField
                label="Passenger Type"
                id="filled-start-adorment"
                variant="standard"
                color="warning"
                focused
                placeholder="Adult"
              />
              <TextField
                label="Passport Expire Date"
                id="filled-start-adorment"
                variant="standard"
                color="warning"
                focused
                placeholder="21 May 2022"
              />
              <Button sx={{border:'1px solid red'}}>Choose Passport Copy</Button>
            
          </Grid>
          <Grid item xs={4} sx={{display:'flex', flexDirection:'column', gap:7}}>
        
              <TextField
                label="Gender"
                id="filled-start-adorment"
                variant="standard"
                color="warning"
                focused
                placeholder="Gender"
              />

              <TextField
                label="Date of Birth"
                id="filled-start-adorment"
                variant="standard"
                color="warning"
                focused
                placeholder="21 May 2022"
              />

              <TextField
                label="Email"
                id="filled-start-adorment"
                variant="standard"
                color="warning"
                focused
                placeholder="example@gmail.com"
              />
            
          </Grid>
        </Grid>
        <Button sx={{background:'#222222', color:'#FFFFFF', mt:'10px'}}>Add This Traveller</Button>
      </Box>
    </Box>
  );
};

export default AddTraveller;
