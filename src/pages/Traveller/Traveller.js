import React from "react";
import Header from "../../components/Header/Header";
import { Box, Button, Container, Input } from "@mui/material";
import { Typography } from "@mui/material";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';



const Traveller = () => {
  return (
  
    <Box>
      <Container maxWidth="lg" style={{ marginTop: "50px" }} >

      <Typography
        variant="span"
        sx={{ fontWeight: 500, fontSize: "23px", margin: "30px 0px",color: "#003566"}}
      >
        Traveller
      </Typography>
      <Box
        sx={{
          margin: "30px 0px",
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
            "&:hover":{
              backgroundColor:'#2564B8'
            }
          }}
        >
          Add Travellers
        </Button>

        </Box>
      
      </Box>

      {/* <Box
          sx={{ margin:'4rem' }}
        >
          <table style={{ width:'100%', textAlign:'center', }}>
            <tr style={{ background:'#2564B8', color:'#FFFFFF',fontSize:'12px', fontWeight:300, padding:'8px 0px'}}>
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
              <tr style={{fontSize:'12px', fontWeight:400, padding:'8px', height:'40px'}}>
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
        </Box> */}
             <Box className="balance-transaction" marginTop={"20px"}>
        <table>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Type</th>
            <th>DOB</th>
            <th>Nationality</th>
            <th>Passport No</th>
            <th>Passport Expire Date</th>
            <th>Passport Copy</th>
            <th>Emali</th>
            <th>Phone </th>
          </tr>
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
            {/* <td style={{}}>
              <a href={`#`}>
                <PhoneIcon
                  style={{
                    color: "#FFA84D",
                    fontSize: "20px",
                    marginRight: "5px",
                  }}
                />
              </a>
              <a href={`#`} target="_blank">
                <WhatsAppIcon
                  style={{
                    color: "green",
                    fontSize: "21px",
                    marginRight: "5px",
                  }}
                />
              </a>

              <a style={{ cursor: "pointer" }}>
                <EventNoteIcon
                  onClick={() => handleOpen()}
                  style={{ color: "#2564B8", fontSize: "20px" }}
                />
              </a>
            </td> */}
          </tr>
        </table>
      </Box>

      </Container>
     
    </Box>
  );
};

export default Traveller;
