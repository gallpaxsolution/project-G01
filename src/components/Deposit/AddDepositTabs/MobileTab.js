import { Box, Grid } from '@mui/material'
import React from 'react'
import { TextField } from '@mui/material';
import { Button } from '@mui/material';

const MobileTab = () => {
  return (
    <Box>
          <Grid container spacing={2}>
          <Grid
            item
            xs={4}
            sx={{ display: "flex", flexDirection: "column", gap: 8 }}
          >
            <TextField
              label="Select Using Payment Method"
              id="filled-start-adorment"
              variant="standard"
              focused
              placeholder="First & middle Name"
            />
            <TextField
              label="Total Payable Amount"
              id="filled-start-adorment"
              variant="standard"
              focused
              placeholder="Enter Amount"
            />
                <Button variant="contained" component="label" sx={{mt:'10px'}}>
            Choose Passport Copy
              <input type="file" hidden />
            </Button>
          </Grid>
         <Grid
            item
            xs={4}
            sx={{ display: "flex", flexDirection: "column", gap: 8 }}
          >
            <TextField
              label="Pay Using Account Number"
              id="filled-start-adorment"
              variant="standard"
              focused
              placeholder="Last Name"
            />
         
         <TextField
              label="Gateway Fee(%)"
              id="filled-start-adorment"
              variant="standard"
              focused
              placeholder="1.5%"
            />
          
          </Grid>
           <Grid
            item
            xs={4}
            sx={{ display: "flex", flexDirection: "column", gap:8 }}
          >
             <TextField
              label="Transaction ID"
              id="filled-start-adorment"
              variant="standard"
              focused
              placeholder="Male"
            />
              <TextField
              label="Amount to be depositeed"
              id="filled-start-adorment"
              variant="standard"
              focused
              placeholder="Enter Amount"
            />

    
          </Grid>
        </Grid>
    </Box>
  )
}

export default MobileTab