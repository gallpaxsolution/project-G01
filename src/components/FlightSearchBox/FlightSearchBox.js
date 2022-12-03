import React, { useCallback, useMemo, useRef, useState } from "react";
import Tab from "@mui/material/Tab";
import { Box } from "@mui/system";
import { format, addDays, subDays } from "date-fns";
import Oneway from "../Oneway/Oneway";
import Roundway from "../Roundway/Roundway";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import Multicity from "../MultiCity/Multicity";
import "./FlightSearchBox.css";

const FlightSearchBox = ({
  type,
  setType,
  value,
  setValue,
  fromSearchText,
  setFromSearchText,
  toSearchText,
  setToSearchText,
  from,
  setFrom,
  to,
  setTo,
  faddress,
  setfaddress,
  toAddress,
  setToAddress,
  fromSendData,
  setFromSendData,
  toSendData,
  setToSendData,
  adultCount,
  setAdultCount,
  childCount,
  setChildCount,
  infant,
  setInfant,
  result,
  setResult,
  className,
  setClassName,
  setChangeState,
  changeState,
  changeFrom,
  setChangeFrom,
}) => {
  const handleClassName = (event) => {
    setClassName(event.target.value);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box
      className="home-search-box-2"
      sx={{ width: "100%", typography: "body1" }}
    >
      <TabContext value={value}>
        <Box
          sx={{
            bgcolor: "transparent",
            color: "var(--third-color)",
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
            "& button.Mui-selected": {
              color: "var(--secondary-color)",
            },
          }}
        >
          <TabList
            value={value}
            onChange={handleChange}
            TabIndicatorProps={{ style: { background: "transparent" } }}
          >
            <Tab
              label="One Way"
              value="oneway"
              sx={{
                opacity: "1",
                p: { xs: "5px 0px", md: "5px 50px" },
                fontSize: { xs: "11px", sm: "14px" },
              }}
            />

            <Tab
              label="Round Way"
              value="return"
              sx={{
                opacity: "1",
                p: { xs: "5px 0px", md: "5px 50px" },
                fontSize: { xs: "11px", sm: "14px" },
              }}
            />

            <Tab
              label="Multi City"
              value="multicity"
              sx={{
                opacity: "1",
                p: { xs: "5px 0px", md: "5px 50px" },
                fontSize: { xs: "11px", sm: "14px" },
              }}
            />
          </TabList>
        </Box>
        <TabPanel value="oneway">
          <Oneway
            tripType={value}
            iconColor={"#DC143C"}
            bgColor={"#fff"}
            bordercolor={"#003566"}
            faddress={faddress}
            fromSendData={fromSendData}
            setFromSendData={setFromSendData}
            toSendData={toSendData}
            setToSendData={setToSendData}
            setfaddress={setfaddress}
            toAddress={toAddress}
            setToAddress={setToAddress}
            fromSearchText={fromSearchText}
            setFromSearchText={setFromSearchText}
            toSearchText={toSearchText}
            setToSearchText={setToSearchText}
            setValue={setValue}
            adultCount={adultCount}
            setAdultCount={setAdultCount}
            childCount={childCount}
            setChildCount={setChildCount}
            infant={infant}
            setInfant={setInfant}
            result={result}
            setResult={setResult}
            className={className}
            handleClassName={handleClassName}
            to={to}
            setTo={setTo}
            from={from}
            setFrom={setFrom}
            setChangeState={setChangeState}
            changeState={changeState}
            changeFrom={changeFrom}
            setChangeFrom={setChangeFrom}
          />
        </TabPanel>
        <TabPanel value="return">
          <Roundway
            tripType={value}
            iconColor={"#DC143C"}
            bgColor={"#fff"}
            bordercolor={"#003566"}
            faddress={faddress}
            setfaddress={setfaddress}
            toAddress={toAddress}
            setToAddress={setToAddress}
            fromSendData={fromSendData}
            setFromSendData={setFromSendData}
            toSendData={toSendData}
            setToSendData={setToSendData}
            fromSearchText={fromSearchText}
            setFromSearchText={setFromSearchText}
            toSearchText={toSearchText}
            setToSearchText={setToSearchText}
            setValue={setValue}
            adultCount={adultCount}
            setAdultCount={setAdultCount}
            childCount={childCount}
            setChildCount={setChildCount}
            infant={infant}
            setInfant={setInfant}
            result={result}
            setResult={setResult}
            className={className}
            handleClassName={handleClassName}
            to={to}
            setTo={setTo}
            from={from}
            setFrom={setFrom}
            setChangeState={setChangeState}
            changeState={changeState}
            changeFrom={changeFrom}
            setChangeFrom={setChangeFrom}
          />
        </TabPanel>
        <TabPanel value="multicity">
          <Multicity
            tripType={value}
            iconColor={"#DC143C"}
            bgColor={"#fff"}
            bordercolor={"#003566"}
            faddress={faddress}
            setfaddress={setfaddress}
            toAddress={toAddress}
            setToAddress={setToAddress}
            fromSendData={fromSendData}
            setFromSendData={setFromSendData}
            toSendData={toSendData}
            setToSendData={setToSendData}
            fromSearchText={fromSearchText}
            setFromSearchText={setFromSearchText}
            toSearchText={toSearchText}
            setToSearchText={setToSearchText}
            setValue={setValue}
            adultCount={adultCount}
            setAdultCount={setAdultCount}
            childCount={childCount}
            setChildCount={setChildCount}
            infant={infant}
            setInfant={setInfant}
            result={result}
            setResult={setResult}
            className={className}
            handleClassName={handleClassName}
            to={to}
            setTo={setTo}
            from={from}
            setFrom={setFrom}
            setChangeState={setChangeState}
            changeState={changeState}
          />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default FlightSearchBox;
