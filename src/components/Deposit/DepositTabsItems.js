import React from "react";
import { Box, Container } from "@mui/material";

const DepositTabsItems = () => {
  return (
    <Box>
      {/* <table style={{ width: "100%", textAlign: "center", height:'10vh' }}>
        <tr style={{ background: "#2564B8", color: "#FFFFFF", fontSize:'12px', fontWeight:100}}>
          <th>Reff No</th>
          <th>Status</th>
          <th>Type </th>
          <th>Amount</th>
          <th>Transaction Date</th>
          <th>Requested By</th>
          <th>Attachment</th>
          <th>Rejection Reason</th>
        </tr>

        {rows?.map((data) => (
          <tr style={{fontSize:'12px', color:'black',height:'35px',fontSize:'12px', fontWeight:400}}>
            <td>FFD1147</td>
            <td>PENDING</td>
            <td>Cash</td>
            <td>493</td>
            <td>28 Nov 2022 06:51 AM</td>
            <td>Uzzal Hossain</td>
            <td>syedafridi0@gmail.com</td>
            <td>N/A</td>
          </tr>
        ))}
      </table> */}

      <Box
        className="balance-transaction"
        marginTop={"20px"}
        style={{ padding: "0px !important" }}
      >
        <table>
          <tr>
            <th>Reff No</th>
            <th>Status</th>
            <th>Type </th>
            <th>Amount</th>
            <th>Transaction Date</th>
            <th>Requested By</th>
            <th>Attachment</th>
            <th>Rejection Reason</th>
          </tr>
          <tr>
            <td>FFD1147</td>
            <td>PENDING</td>
            <td>Cash</td>
            <td>493</td>
            <td>28 Nov 2022 06:51 AM</td>
            <td>Uzzal Hossain</td>
            <td>syedafridi0@gmail.com</td>
            <td>N/A</td>
          </tr>
        </table>
      </Box>
    </Box>
  );
};

export default DepositTabsItems;
