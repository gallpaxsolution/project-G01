import { Box, Container } from "@mui/material";
import React from "react";
import { Typography } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { Button } from "@mui/material";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import { Link } from "react-router-dom";
const BankAccount = () => {
  function createData() {
    return {};
  }
  const rows = [createData(), createData(), createData()];

  return (
    <Box>
      <Container maxWidth="lg" style={{ marginTop: "50px" }}>
        <Box
          sx={{
            margin: "0px 0px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="span"
            sx={{
              fontWeight: 500,
              fontSize: "24px",
              margin: "30px 0px",
              color: "#222222",
              fontFamily: "poppins",
            }}
          >
            Bank Account
          </Typography>

          <Box sx={{ display: "flex", gap: 5 }}>
            {/*             
            <Box className="searchList1">
              <SearchRoundedIcon
                sx={{
                  background: "#2564B8",
                  color: "#FFFFFF",
                  borderRadius: "50px",
                  fontSize: "40px",
                }}
              />
            </Box> */}

            <Button
              sx={{
                width: "161px",
                display: "flex",
                alignItems: "center",
                fontSize: "14px",
                textTransform: "capitalize",

                background: "#FFA84D",
                color: "#FFFFFF",
                "&:hover": {
                  backgroundColor: "#FFA84D",
                },
              }}
            >
              <Link
                style={{ textDecoration: "none", color: "#fff" }}
                to={"/addbankaccount"}
              >
                Add Bank
              </Link>
            </Button>
          </Box>
        </Box>

        {/* <Box
        >
          <table style={{ width:'100%', textAlign:'center', }}>
            <tr style={{ background:'#2564B8', color:'#FFFFFF',fontSize:'12px', fontWeight:300, padding:'8px 0px'}}>
              <th>Holder Name</th>
              <th>Bank Name</th>
              <th>Account Number</th>
              <th>Branch Name</th>
              <th>Address</th>
              <th>Swift</th>
              <th>Routing</th>
              <th>Action</th>
            </tr>

            {rows?.map((data) => (
              <tr style={{fontSize:'12px', fontWeight:400, padding:'8px', height:'40px'}}>
                <td>Sayed Afridi</td>
                <td>Dutch Bangla Bank </td>
                <td>51151515355</td>
                <td>Shamoli Branch</td>
                <td>Shamoli, Dhaka</td>
                <td>12556</td>
                <td>44544</td>
                <td><DeleteSharpIcon/></td>
              </tr>
            ))}
          </table>
        </Box> */}

        <Box className="balance-transaction" marginTop={"2px"}>
          <table>
            <tr>
              <th>Holder Name</th>
              <th>Bank Name</th>
              <th>Account Number</th>
              <th>Branch Name</th>
              <th>Address</th>
              <th>Swift</th>
              <th>Routing</th>
              <th>Action</th>
            </tr>
            <tr>
              <td>Sayed Afridi</td>
              <td>Dutch Bangla Bank </td>
              <td>51151515355</td>
              <td>Shamoli Branch</td>
              <td>Shamoli, Dhaka</td>
              <td>12556</td>
              <td>44544</td>
              <td>
                <DeleteSharpIcon />
              </td>
            </tr>
          </table>
        </Box>
      </Container>
    </Box>
  );
};

export default BankAccount;
