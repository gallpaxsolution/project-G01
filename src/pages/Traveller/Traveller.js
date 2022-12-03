import React from "react";
import Header from "../../components/Header/Header";
import { Box, Button, Input } from "@mui/material";
import { Typography } from "@mui/material";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';



const Traveller = () => {
    function createData(){
        return{};
    }
    const rows = [
        createData(),
        createData(),
        createData(),
        createData(),
        createData(),
        createData(),
        createData(),
        createData(),
        createData(),
        createData(),
        createData(),
        createData(),
        createData(),
        createData(),
        
      ];
  return (
    <Box>
       {/* The Header part */}
      <Header />


      {/* Traveller part */}
      <Typography
        variant="span"
        sx={{ fontWeight: 500, fontSize: "32px", margin: "30px 60px" }}
      >
        Traveller
      </Typography>
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
          sx={{ fontWeight: 500, fontSize: "20px", color: "#FFA84D" }}
        >
          You can find your all travellers here
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
          Add Travellers
        </Button>

        </Box>
      
      </Box>

      <Box
          sx={{ margin:'4rem' }}
        >
          <table style={{ width:'100%', textAlign:'center',height:'100vh' }}>
            <tr style={{ background:'#2564B8', color:'#FFFFFF'}}>
              <th>No</th>
              <th>Name</th>
              <th>Gender </th>
              <th>Type</th>
              <th>DOB</th>
              <th>Nationality</th>
              <th>Passport NO</th>
              <th>Passport Expired Date</th>
              <th>Passport Copy</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>

            {rows?.map((data) => (
              <tr>
                <td>01</td>
                <td>Sayed Afridi</td>
                <td>Male </td>
                <td>RoundWay</td>
                <td>12 Oct 2022</td>
                <td>Bangladesh</td>
                <td>BD515151</td>
                <td>12 Oct 2022</td>
                <td>View</td>
                <td>syedafridi0@gmail.com</td>
                <td>1551555151</td>
              </tr>
            ))}
          </table>
        </Box>
    </Box>
  );
};

export default Traveller;
