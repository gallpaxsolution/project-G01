import { Box, Grid } from '@mui/material'
import React from 'react'
import { TextField } from '@mui/material';
import { Button } from '@mui/material';

const BankTab = () => {
  return (
    <Box>
          <Grid container spacing={2}>
          <Grid
            item
            xs={4}
            sx={{ display: "flex", flexDirection: "column", gap: 8 }}
          >
            <TextField
              label="Check Number"
              id="filled-start-adorment"
              variant="standard"
              focused
              placeholder="First & middle Name"
            />
            <TextField
              label="Check Date"
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
              label="Deposit Form"
              id="filled-start-adorment"
              variant="standard"
              focused
              placeholder="Last Name"
            />
         
         <TextField
              label="Transaction ID"
              id="filled-start-adorment"
              variant="standard"
              focused
              placeholder="Last Name"
            />
          
          </Grid>
           <Grid
            item
            xs={4}
            sx={{ display: "flex", flexDirection: "column", gap:8 }}
          >
             <TextField
              label="Deposit To"
              id="filled-start-adorment"
              variant="standard"
              focused
              placeholder="Male"
            />
              <TextField
              label="Amount"
              id="filled-start-adorment"
              variant="standard"
              focused
              placeholder="Last Name"
            />

    
          </Grid>
        </Grid>
    </Box>
  )
}

export default BankTab