import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import Header from "../../Header/Header";
import BookingAll from "../BookingPage/BookingAll";
import BookingHold from "../BookingPage/BookingHold";
import "./BookingRoute.css";

const BookingRoute = () => {
  const [optionValue, setOptionValue] = useState("");

  const handleChangeOption = (e) => {
    setOptionValue(e.target.value);
  };

  return (
    <Box>
      <Container maxWidth="lg">
        <Header></Header>
      </Container>

      <Container maxWidth="lg" style={{ marginTop: "50px" }}>
        <Grid container justifyContent={"space-between"} alignItems={"center"}>
          <Grid item xs={6} sm={6} md={6}>
            <Typography sx={{ color: "#003566", fontSize: "23px" }} mb={2}>
              Booking Managment
            </Typography>
            {/* <Box className="searchList1">
            <input
              type="text"
              placeholder="search"
              hdgfhgdhf
              onChange={handelSearchItems}
            />
          </Box> */}
          </Grid>
          <Grid
            item
            xs={6}
            sm={6}
            md={6}
            textAlign="right"
            className="searchList1-select"
          >
            <select onChange={handleChangeOption}>
              <option value="all">&nbsp;Show All</option>
              <option value="hold">&nbsp;Hold</option>
              <option value="Issue In Processing">&nbsp;Issue Request</option>
              <option value="Ticketed">&nbsp;Ticketed</option>
              <option value="Issue Rejected">&nbsp;Issue Rejected</option>
              <option value="Reissue In Processing">
                &nbsp;Reissue Request
              </option>
              <option value="Reissued">&nbsp;Reissued</option>
              <option value="Reissue Rejected">&nbsp;Reissue Rejected</option>
              <option value="Refund In Processing">&nbsp;Refund Request</option>
              <option value="Refunded">&nbsp;Refunded</option>
              <option value="Refund Rejected">&nbsp;Refund Rejected</option>
              <option value="Void In Processing">&nbsp;Void Request</option>
              <option value="Voided">&nbsp;Voided</option>
              <option value="Void Rejected">&nbsp;Void Rejected</option>
              <option value="bookingfailed">&nbsp;Booking Failed</option>
              <option value="cancelled">&nbsp;Cancelled</option>
            </select>
          </Grid>
        </Grid>
        {(optionValue === "all" || optionValue === "") && <BookingAll />}
        {optionValue === "hold" && <BookingHold />}
      </Container>
    </Box>
  );
};

export default BookingRoute;
