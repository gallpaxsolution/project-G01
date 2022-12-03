import React from 'react'
import { Box, Button, Typography } from '@mui/material';
import Header from './../../components/Header/Header';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import DepositeTabs from '../../components/Deposit/DepositeTabs';


const Deposite = () => {
  return (
    <Box>
      {/* Header part */}
      <Header/>

      <Box
        sx={{
          margin: "30px 60px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="span"
          sx={{ fontWeight: 500, fontSize: "32px" }}
        >
          Deposit
        </Typography>

        <Box sx={{display:'flex', gap:5}}>
        <Box className="searchList1" >
          {/* <input style={{height:'25px',border: '3px solid #00B4CC', outline:'none', margin:'5px'}} type="text" placeholder="Enter Keywords" /> */}
          <SearchRoundedIcon sx={{background:'#2564B8', color:'#FFFFFF', borderRadius:'50px',  fontSize:'40px'}} />
        </Box>
        <Button
          sx={{
            width: "161px",
            height: "42px",
            background: "#FFA84D",
            color: "#FFFFFF",
            
          }}
        >
          Add Deposite
        </Button>

        </Box>
      
      </Box>
       <Box sx={{margin: "30px 60px"}}>
          <DepositeTabs/>
        </Box>
      
    </Box>
  )
}

export default Deposite