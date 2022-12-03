import React, { useState } from "react";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import { Box, Tab } from "@mui/material";
import { format } from "date-fns";
import UpMultiCity from "./UpMultiCity";
import UpOneway from "./UpOneway";
import UpRoundTrip from "./UpRoundTrip";
import "./Searchbar.css";

const Searchbar = () => {
  const [value, setValue] = useState("oneway");
  const [faddress, setfaddress] = useState("");
  const [toAddress, setToAddress] = useState("");
  const [fromSearchText, setFromSearchText] = useState("");
  const [toSearchText, setToSearchText] = useState("");
  const [departureDate, setDepartureDate] = useState(
    format(new Date(), "dd MMM yyyy")
  );

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box className="searchbar" p={4}>
        {/* ----- */}
        <TabContext value={value}>
          <Box>
            <TabList
              onChange={handleChange}
              aria-label="Dashboard Tabs"
              centered
              className="tab-list-parent"
            >
              <Tab
                label="One Way"
                value="oneway"
                sx={{
                  p: "5px 5px",
                  m: "6px",
                  minHeight: "0px",
                }}
              />
              <Box className="whiteBox"></Box>
              <Tab
                label="Round Way"
                value="return"
                sx={{
                  p: "5px 5px",
                  m: "6px",
                  minHeight: "0px",
                }}
              />
              <Box className="whiteBox"></Box>
              <Tab
                label="Multi City"
                value="multicity"
                sx={{
                  p: "5px 5px",
                  m: "6px",
                  minHeight: "0px",
                }}
              />
            </TabList>
          </Box>
          <TabPanel value="oneway">
            <UpOneway
              tripType={value}
              iconColor={"#003566"}
              bgColor={"#d8ebfc"}
              borderColor={"#003566"}
              faddress={faddress}
              setfaddress={setfaddress}
              toAddress={toAddress}
              setToAddress={setToAddress}
              fromSearchText={fromSearchText}
              setFromSearchText={setFromSearchText}
              toSearchText={toSearchText}
              setToSearchText={setToSearchText}
              departureDate={departureDate}
              setDepartureDate={setDepartureDate}
              setValue={setValue}
            />
          </TabPanel>
          <TabPanel value="return">
            <UpRoundTrip
              tripType={value}
              iconColor={"#003566"}
              bgColor={"#d8ebfc"}
              borderColor={"#003566"}
              faddress={faddress}
              setfaddress={setfaddress}
              toAddress={toAddress}
              setToAddress={setToAddress}
              fromSearchText={fromSearchText}
              setFromSearchText={setFromSearchText}
              toSearchText={toSearchText}
              setToSearchText={setToSearchText}
              departureDate={departureDate}
              setDepartureDate={setDepartureDate}
            />
          </TabPanel>
          <TabPanel value="multicity">
            <UpMultiCity
              tripType={value}
              iconColor={"#003566"}
              bgColor={"#d8ebfc"}
              borderColor={"#003566"}
              faddress={faddress}
              setfaddress={setfaddress}
              toAddress={toAddress}
              setToAddress={setToAddress}
              fromSearchText={fromSearchText}
              setFromSearchText={setFromSearchText}
              toSearchText={toSearchText}
              setToSearchText={setToSearchText}
              departureDate={departureDate}
              setDepartureDate={setDepartureDate}
            />
          </TabPanel>
        </TabContext>
        {/* ----- */}
      </Box>
    </Box>
  );
};

export default Searchbar;
