import { Box, Grid } from '@mui/material'
import React from 'react'
import { TextField } from '@mui/material';
import { Button } from '@mui/material';

const CashTab = () => {
  return (
    <Box>
          <Grid container spacing={2}>
          <Grid
            item
            xs={4}
            sx={{ display: "flex", flexDirection: "column", gap: 8 }}
          >
            <TextField
              label="Sender Name"
              id="filled-start-adorment"
              variant="standard"
              focused
              placeholder="First & middle Name"
            />
            <TextField
              label="Reciever Name"
              id="filled-start-adorment"
              variant="standard"
              focused
              placeholder="Enter Amount"
            />
          </Grid>
         <Grid
            item
            xs={4}
            sx={{ display: "flex", flexDirection: "column", gap: 8 }}
          >
            <TextField
              label="Reciever Name"
              id="filled-start-adorment"
              variant="standard"
              focused
              placeholder="Last Name"
            />
         
            <Button variant="contained" component="label" sx={{mt:'10px'}}>
            Choose Passport Copy
              <input type="file" hidden />
            </Button>
          
          </Grid>
           <Grid
            item
            xs={4}
            sx={{ display: "flex", flexDirection: "column" }}
          >
             <TextField
              label="Refference"
              id="filled-start-adorment"
              variant="standard"
              focused
              placeholder="Male"
            />

    
          </Grid>
        </Grid>
    </Box>
  )
}

export default CashTab