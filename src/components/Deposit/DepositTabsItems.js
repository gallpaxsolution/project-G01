import React from "react";
import { Box } from "@mui/material";

const DepositTabsItems = () => {
  function createData() {
    return {};
  }
  const rows = [createData(), createData(), createData(), createData()];
  return (
    <Box >
      <table style={{ width: "100%", textAlign: "center", height:'40vh' }}>
        <tr style={{ background: "#2564B8", color: "#FFFFFF" }}>
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
        ))}
      </table>
    </Box>
  );
};

export default DepositTabsItems;
