import React from 'react'
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import { Grid } from '@mui/material';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';

const AddBank = () => {
  return (
    <Box sx={{margin:'40px 180px'}}>
      
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        margin: "30px 60px",
        gap: 4,
      }}
    >
      <Typography sx={{ fontWeight: "500px", fontSize: "23px", color: "#003566" }}>
        Add Bank Account
      </Typography>

      <Grid container spacing={2}>
        <Grid
          item
          xs={4}
          sx={{ display: "flex", flexDirection: "column", gap: 7 }}
        >
          <TextField
            label="Account Holder Name"
            id="filled-start-adorment"
            variant="standard"
            focused
            placeholder="First Name"
          />
          <TextField
            label="Branch Name"
            id="filled-start-adorment"
            variant="standard"
            focused
            placeholder="Bangladesh"
          />
          <TextField
            label="Swift Code"
            id="filled-start-adorment"
            variant="standard"
            focused
            placeholder="41552122"
          />
        
        </Grid>
        <Grid
          item
          xs={4}
          sx={{ display: "flex", flexDirection: "column", gap: 7 }}
        >
          <TextField
            label="Bank Name"
            id="filled-start-adorment"
            variant="standard"
            focused
            placeholder="Last Name"
          />
          <TextField
            label="Address"
            id="filled-start-adorment"
            variant="standard"
            focused
            placeholder="Adult"
          />
        
        </Grid>
        <Grid
          item
          xs={4}
          sx={{ display: "flex", flexDirection: "column", gap: 7 }}
        >
          <TextField
            label="Acount Number"
            id="filled-start-adorment"
            variant="standard"
            focused
            placeholder="Gender"
          />

          <TextField
            label="Routing Number"
            id="filled-start-adorment"
            variant="standard"
            focused
            placeholder="21 May 2022"
          />
        </Grid>
      </Grid>
      <Button
        sx={{
          background: "#222222",
          color: "#FFFFFF",
          width: "370px",
          mt: "4rem",
          ml: "1rem",
          "&:hover": {
            backgroundColor: "#2564B8",
          },
        }}
      >
        Add This Account
      </Button>
    </Box>
  </Box>
  )
}

export default AddBank