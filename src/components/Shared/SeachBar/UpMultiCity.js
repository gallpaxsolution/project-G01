import {
  Autocomplete,
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import flightData from "../../Dashboard/DashboardMain/flightData";
import { BiCurrentLocation } from "react-icons/bi";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { Calendar } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { AiOutlineSwap } from "react-icons/ai";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./UpOneway.css";
import "../../Dashboard/DashboardMain/DashboardMain.css";
import secureLocalStorage from "react-secure-storage";

const UpMultiCity = ({
  tripType,
  iconColor,
  bgColor,
  borderColor,
  faddress,
  setfaddress,
  toAddress,
  setToAddress,
  fromSearchText,
  setFromSearchText,
  toSearchText,
  setToSearchText,
  departureDate,
  setDepartureDate,
}) => {
  const data = flightData; // json data from flight Data
  const initialData = [
    {
      code: "DAC",
      name: "Hazrat Shahjalal Intl Airport",
      Address: "Dhaka,BANGLADESH",
    },
    {
      code: "CXB",
      name: "Cox's Bazar Airport",
      Address: "Cox's Bazar,Bangladesh",
    },
    {
      code: "JSR",
      name: "Jashore Airport",
      Address: "Jashore,Bangladesh",
    },
    {
      code: "BZL",
      name: "Barishal Airport",
      Address: "Barishal,Bangladesh",
    },
    {
      code: "RJH",
      name: "Shah Makhdum Airport",
      Address: "Rajshahi,Bangladesh",
    },
    {
      code: "SPD",
      name: "Saidpur Airport",
      Address: "Saidpur,Bangladesh",
    },
    {
      code: "CXB",
      name: "Cox's Bazar Airport",
      Address: "Cox's Bazar,Bangladesh",
    },
  ];

  // First From input box all state

  const [fromSuggest, setFromSuggest] = useState(initialData);
  const [fromSendData, setFromSendData] = useState("");
  const [openFrom, setOpenFrom] = useState(false);

  //  Second From input box all state

  const [fromSearchText2, setFromSearchText2] = useState("");
  const [fromSuggest2, setFromSuggest2] = useState(initialData);
  const [fromSendData2, setFromSendData2] = useState("");
  const [faddress2, setfaddress2] = useState("");
  const [openFrom2, setOpenFrom2] = useState(false);

  // -------------------- To input box all state ------------------

  const [toSuggest, setToSuggest] = useState(initialData);
  const [toSendData, setToSendData] = useState("");
  const [openTo, setOpenTo] = useState(false);

  // -------------------- Second To input box all state ------------------

  const [toSearchText2, setToSearchText2] = useState("");
  const [toSuggest2, setToSuggest2] = useState(initialData);
  const [toSendData2, setToSendData2] = useState("");
  const [toAddress2, setToAddress2] = useState("");

  const [openTo2, setOpenTo2] = useState(false);

  // -------------------------          -----------------------------

  // passenger count state
  const [result, setResult] = useState(1);
  const [adultCount, setAultCount] = useState(1);
  const [childCount, setChildCount] = useState(0);
  const [infant, setInfant] = useState(0);
  const navigate = useNavigate();
  const user = secureLocalStorage.getItem("user-info");

  //  date
  const [open, setOpen] = useState(false);
  const [openDate, setOpenDate] = useState(false);

  const [open2, setOpen2] = useState(false);
  const [openDate2, setOpenDate2] = useState(false);

  //------------------------First From input box function------------------

  const formOnChange = (e) => {
    setOpen(false);
    const searchvalue = e.target.value;

    if (searchvalue.length > 2) {
      const suggestion = data.filter(
        (item) =>
          item.code.toLowerCase().includes(searchvalue.toLowerCase()) ||
          item.Address.toLowerCase().includes(searchvalue.toLowerCase())
      );
      setFromSuggest(suggestion);
    } else {
      setFromSuggest(initialData);
    }
  };

  const fromSuggestedText = (name, code, address) => {
    setFromSearchText(name + "   " + "(" + code + ")");
    setFromSuggest([]);
    setFromSendData(code);
    setfaddress(address);
    setOpen(false);
    setOpenFrom(false);
    setOpenTo(true);
  };

  const fromGetSuggetion = () => {
    return (
      <Box
        style={{
          height: "fit-content",
          position: "relative",
          overflowY: "auto",
          width: "100%",
          zIndex: "100",
        }}
      >
        <Box
          style={{
            maxHeight: "210px",
            background: "#fff",
            borderRadius: "5px",
          }}
        >
          {fromSuggest.length !== 0 ? (
            fromSuggest.map((item, index) => {
              return (
                <Box key={index} style={{ width: "100%" }}>
                  <Paper
                    sx={{
                      margin: "5px -7px",
                      padding: "5px 13px",
                      cursor: "pointer",
                      display: "flex",
                      width: "100%",
                      backgroundColor: "#d8ebfc",
                      justifyContent: "space-between",
                    }}
                    onClick={() => {
                      fromSuggestedText(
                        ` ${item.name}`,
                        ` ${item.code} `,
                        `${item.Address}`
                      );
                    }} //suggest to display name select with multiple data pass parameter
                  >
                    <Box>
                      <span
                        style={{
                          fontSize: "14px",
                          color: "#003566",
                          display: "block",
                          textAlign: "left",
                          fontWeight: "500",
                        }}
                      >
                        {item.Address}
                      </span>
                      <span
                        style={{
                          fontSize: "12px",
                          display: "block",
                          textAlign: "left",
                        }}
                      >
                        {item.name}
                      </span>
                    </Box>
                    <Box>
                      <span
                        style={{
                          fontSize: "12px",
                          display: "block",
                          textAlign: "left",
                          color: "#dc143c",
                          fontWeight: "600",
                        }}
                      >
                        {item.code}
                      </span>
                    </Box>
                  </Paper>
                </Box>
              );
            })
          ) : (
            <Box>
              <Typography
                variant="subtitle-2"
                style={{ color: "#DC143C", fontWidth: "bold" }}
              >
                Not found
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    );
  };

  //------------------------ Second From input box function------------------

  const formOnChange2 = (e) => {
    setOpen(false);
    const searchvalue = e.target.value;

    if (searchvalue.length > 2) {
      const suggestion = data.filter(
        (item) =>
          item.code.toLowerCase().includes(searchvalue.toLowerCase()) ||
          item.Address.toLowerCase().includes(searchvalue.toLowerCase())
      );
      setFromSuggest2(suggestion);
    } else {
      setFromSuggest2(initialData);
    }
  };

  const fromSuggestedText2 = (name, code, address) => {
    setFromSearchText2(name + "   " + "(" + code + ")");
    setFromSuggest2([]);
    setFromSendData2(code);
    setfaddress2(address);

    // setOpen(false);

    setOpenTo2(true);
    setOpenFrom2(false);
  };

  const fromGetSuggetion2 = () => {
    return (
      <Box
        style={{
          height: "fit-content",
          position: "relative",
          overflowY: "auto",
          width: "100%",
          zIndex: "100",
        }}
      >
        <Box
          style={{
            maxHeight: "210px",
            background: "#fff",
            borderRadius: "5px",
          }}
        >
          {fromSuggest2.length !== 0 ? (
            fromSuggest2.map((item, index) => {
              return (
                <Box key={index} style={{ width: "100%" }}>
                  <Paper
                    sx={{
                      margin: "5px -7px",
                      padding: "5px 13px",
                      cursor: "pointer",
                      display: "flex",
                      width: "100%",
                      backgroundColor: "#d8ebfc",
                      justifyContent: "space-between",
                    }}
                    onClick={() => {
                      fromSuggestedText2(
                        ` ${item.name}`,
                        ` ${item.code} `,
                        `${item.Address}`
                      );
                    }} //suggest to display name select with multiple data pass parameter
                  >
                    <Box>
                      <span
                        style={{
                          fontSize: "14px",
                          color: "#003566",
                          display: "block",
                          textAlign: "left",
                          fontWeight: "500",
                        }}
                      >
                        {item.Address}
                      </span>
                      <span
                        style={{
                          fontSize: "12px",
                          display: "block",
                          textAlign: "left",
                        }}
                      >
                        {item.name}
                      </span>
                    </Box>
                    <Box>
                      <span
                        style={{
                          fontSize: "12px",
                          display: "block",
                          textAlign: "left",
                          color: "#dc143c",
                          fontWeight: "600",
                        }}
                      >
                        {item.code}
                      </span>
                    </Box>
                  </Paper>
                </Box>
              );
            })
          ) : (
            <Box>
              <Typography
                variant="subtitle-2"
                style={{ color: "#DC143C", fontWidth: "bold" }}
              >
                Not found
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    );
  };

  //------------------------ First To input box function------------------

  const toOnChange = (e) => {
    const searchvalue = e.target.value;
    if (searchvalue.length > 2) {
      const suggestion = data.filter(
        (item) =>
          item.code.toLowerCase().includes(searchvalue.toLowerCase()) ||
          item.Address.toLowerCase().includes(searchvalue.toLowerCase())
      );
      setToSuggest(suggestion);
    } else {
      setToSuggest(initialData);
    }
    // setToSearchText(searchvalue);
  };

  const toSuggestedText = (name, code, address) => {
    setToSearchText(name + "   " + "(" + code + ")");
    setToSuggest([]);
    setToSendData(code);
    setToAddress(address);
    setOpenTo(false);
    setOpenDate(true);
  };

  const toGetSuggetion = () => {
    return (
      <Box
        style={{
          height: "fit-content",
          position: "relative",
          width: "100%",
          zIndex: "100",
        }}
      >
        <Box
          className="box-index-oneway"
          style={{
            maxHeight: "210px",
            overflowY: "auto",
            background: "#fff",
            borderRadius: "5px",
          }}
        >
          {toSuggest.length !== 0 ? (
            toSuggest.map((item, index) => {
              return (
                <Box key={index}>
                  <Paper
                    sx={{
                      margin: "5px -7px",
                      padding: "5px 13px",
                      cursor: "pointer",
                      display: "flex",
                      width: "100%",
                      backgroundColor: "#d8ebfc",
                      justifyContent: "space-between",
                    }}
                    onClick={() =>
                      toSuggestedText(
                        ` ${item.name}`,
                        `${item.code}`,
                        `${item.Address}`
                      )
                    } //suggest to display name select with multiple data pass parameter
                  >
                    <Box>
                      <span
                        style={{
                          fontSize: "14px",
                          color: "#003566",
                          display: "block",
                          textAlign: "left",
                        }}
                      >
                        {item.Address}
                      </span>
                      <span
                        style={{
                          fontSize: "12px",
                          display: "block",
                          textAlign: "left",
                        }}
                      >
                        {item.name}
                      </span>
                    </Box>
                    <Box>
                      <span
                        style={{
                          fontSize: "12px",
                          display: "block",
                          textAlign: "left",
                          color: "#dc143c",
                          fontWeight: "600",
                        }}
                      >
                        {item.code}
                      </span>
                    </Box>
                  </Paper>
                </Box>
              );
            })
          ) : (
            <Box>
              <Typography
                variant="subtitle2"
                style={{ color: "#DC143C", fontWidth: "bold" }}
              >
                Not found
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    );
  };

  //------------------------ Second To input box function------------------

  const toOnChange2 = (e) => {
    const searchvalue = e.target.value;
    if (searchvalue.length > 2) {
      const suggestion = data.filter(
        (item) =>
          item.code.toLowerCase().includes(searchvalue.toLowerCase()) ||
          item.Address.toLowerCase().includes(searchvalue.toLowerCase())
      );
      setToSuggest2(suggestion);
    } else {
      setToSuggest2(initialData);
    }
    // setToSearchText(searchvalue);
  };

  const toSuggestedText2 = (name, code, address) => {
    setToSearchText2(name + "   " + "(" + code + ")");
    setToSuggest2([]);
    setToSendData2(code);
    setToAddress2(address);
    setOpenTo2(false);
    setOpenDate2(true);
  };

  const toGetSuggetion2 = () => {
    return (
      <Box
        style={{
          height: "fit-content",
          position: "relative",
          width: "100%",
          zIndex: "100",
        }}
      >
        <Box
          className="box-index-oneway"
          style={{
            maxHeight: "210px",
            overflowY: "auto",
            background: "#fff",
            borderRadius: "5px",
          }}
        >
          {toSuggest2.length !== 0 ? (
            toSuggest2.map((item, index) => {
              return (
                <Box key={index}>
                  <Paper
                    sx={{
                      margin: "5px -7px",
                      padding: "5px 13px",
                      cursor: "pointer",
                      display: "flex",
                      width: "100%",
                      backgroundColor: "#d8ebfc",
                      justifyContent: "space-between",
                    }}
                    onClick={() =>
                      toSuggestedText2(
                        ` ${item.name}`,
                        `${item.code}`,
                        `${item.Address}`
                      )
                    } //suggest to display name select with multiple data pass parameter
                  >
                    <Box>
                      <span
                        style={{
                          fontSize: "14px",
                          color: "#003566",
                          display: "block",
                          textAlign: "left",
                        }}
                      >
                        {item.Address}
                      </span>
                      <span
                        style={{
                          fontSize: "12px",
                          display: "block",
                          textAlign: "left",
                        }}
                      >
                        {item.name}
                      </span>
                    </Box>
                    <Box>
                      <span
                        style={{
                          fontSize: "12px",
                          display: "block",
                          textAlign: "left",
                          color: "#dc143c",
                          fontWeight: "600",
                        }}
                      >
                        {item.code}
                      </span>
                    </Box>
                  </Paper>
                </Box>
              );
            })
          ) : (
            <Box>
              <Typography
                variant="subtitle2"
                style={{ color: "#DC143C", fontWidth: "bold" }}
              >
                Not found
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    );
  };

  // SearchingField End

  //  passenger funtion

  const handleClickOpen = () => {
    setOpen((prev) => !prev);
  };
  const handleClickAway = () => {
    setOpen(false);
    setResult(adultCount + childCount + infant);
  };
  const handleClickAwayCalender = () => {
    setOpenDate(false);
  };

  const handleClose = () => {
    setOpen(false);
    setResult(adultCount + childCount + infant);
  };

  function adultInclement(e) {
    e.preventDefault();
    if (adultCount < 9 - (childCount + infant)) {
      setAultCount(adultCount + 1);
    }
  }

  function adultDecrement(e) {
    e.preventDefault();
    if (adultCount > 1) {
      setAultCount(adultCount - 1);
      if (infant === adultCount) {
        if (infant > 1) {
          setInfant(infant - 1);
        }
      }
    }
  }

  function adult2Inclement(e) {
    e.preventDefault();
    if (childCount < 9 - (adultCount + infant)) {
      setChildCount(childCount + 1);
    }
  }

  function adult2Decrement(e) {
    e.preventDefault();
    if (childCount > 0) {
      setChildCount(childCount - 1);
    }
  }

  function infantIncrement(e) {
    e.preventDefault();
    if (infant < 9 - (adultCount + childCount)) {
      if (infant < adultCount) {
        setInfant(infant + 1);
      }
    }
  }

  function infantDecrement(e) {
    e.preventDefault();
    if (infant > 0) {
      setInfant(infant - 1);
    }
  }

  //   Flight Search button Start

  async function handleSearch() {
    if (fromSearchText === "") {
      return;
    } else if (toSearchText === "") {
      return;
    } else {
      let body = JSON.stringify({
        Agent_Id: user?.user?.agentId,
        searchtype: tripType,
        DepFrom: faddress,
        ArrTo: toAddress,
        depTime: departureDate,
      });
      await fetch(
        "https://api.flyfarint.com/v.1.0.0/AirSearch/savehistory.php",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: body,
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            navigate("/dashboard/allflight", {
              state: {
                faddress,
                toAddress,
                departureDate,
                adultCount,
                childCount,
                infant,
                tripType,
                fromSendData,
                toSendData,
              },
            });
          } else {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
              confirmButtonText: "Search Again...",
            }).then(function () {
              navigate("/dashboard/dashboardHome");
            });
          }
        });
    }
  }

  return (
    <Box className="search-body-trip">
      <form>
        <Grid
          sx={{
            justifyContent: "space-between",
            mt: "20px",
          }}
          container
          rowSpacing={1}
          columnSpacing={2}
        >
          <Grid
            item
            className="dashboard-main-input-parent"
            xs={12}
            sm={12}
            md={6}
            lg={6}
            style={{
              position: "relative",
              height: "fit-content",
            }}
          >
            <Box sx={{ position: "relative" }}>
              <Box
                className="update-search"
                bgcolor={bgColor}
                onClick={() => {
                  setOpenFrom((prev) => !prev);
                }}
              >
                <Box>
                  <p>From</p>

                  {faddress ? (
                    <span> {faddress?.split(",")[0]}</span>
                  ) : (
                    <span>Dhaka</span>
                  )}
                </Box>

                <Box
                  style={{
                    lineHeight: "0px",
                  }}
                >
                  <input
                    required
                    readOnly
                    value={fromSearchText}
                    placeholder="Hazrat Shahjalal International Airport"
                  />
                </Box>
              </Box>
              {openFrom && (
                <Box
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: "0",
                    width: "100%",
                    backgroundColor: "#fff",
                    height: "fit-content",
                    marginTop: "-5px",
                    borderRadius: "5px",
                    paddingLeft: "10px",
                    zIndex: "10",
                  }}
                >
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <SearchIcon />
                    <input
                      autoComplete="off"
                      autoFocus
                      onChange={formOnChange}
                      placeholder="Search a city..."
                      style={{
                        width: "100%",
                        height: "40px",
                        backgroundColor: "transparent",
                        border: "none",
                      }}
                    />
                  </Box>

                  <Box width={"full"}>{fromGetSuggetion()}</Box>
                </Box>
              )}
            </Box>
            {/* </ClickAwayListener> */}
            <Box className="swap-btn">
              <AiOutlineSwap style={{ color: "#fff", fontSize: "20px" }} />
            </Box>
          </Grid>

          <Grid
            className="dashboard-main-input-parent"
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            style={{
              position: "relative",
              height: "fit-content",
            }}
          >
            <Box sx={{ position: "relative" }}>
              <Box
                className="update-search"
                bgcolor={bgColor}
                onClick={() => setOpenTo((prev) => !prev)}
              >
                <Box>
                  <p>To</p>
                  {toAddress ? (
                    <span> {toAddress?.split(",")[0]}</span>
                  ) : (
                    <span>Dubai</span>
                  )}
                </Box>
                <Box
                  style={{
                    lineHeight: "0px",
                  }}
                >
                  <input
                    required
                    readOnly
                    value={toSearchText}
                    placeholder="Dubai International Airport"
                  />
                </Box>
              </Box>
              {openTo && (
                <Box
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: "0",
                    width: "100%",
                    backgroundColor: "#fff",
                    height: "fit-content",
                    marginTop: "-5px",
                    borderRadius: "5px",
                    paddingLeft: "10px",
                    zIndex: "10",
                  }}
                >
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <SearchIcon />
                    <input
                      autoComplete="off"
                      autoFocus
                      onChange={toOnChange}
                      placeholder="Search a city..."
                      style={{
                        width: "100%",
                        height: "40px",
                        backgroundColor: "transparent",
                        border: "none",
                      }}
                    />
                  </Box>
                  <Box width={"full"}>{toGetSuggetion()}</Box>
                </Box>
              )}
            </Box>
          </Grid>

          <Grid
            className="dashboard-main-input-parent"
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
          >
            <Box className="update-search" bgcolor={bgColor}>
              {/* <ClickAwayListener onClickAway={handleClickAwayCalender}> */}
              <Box style={{ position: "relative" }}>
                <Box
                  className="dashboard-main-input date12"
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    marginTop: "0px",
                  }}
                  onClick={() => setOpenDate((prev) => !prev)}
                >
                  <Box
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      flexDirection: "column",
                      width: "60%",
                    }}
                  >
                    <p>Travel Date</p>

                    <span>{`${departureDate}`}</span>

                    <Typography
                      variant="subtitle2"
                      style={{ color: "#003566", fontSize: "11px" }}
                    >
                      {`${format(new Date(departureDate), "EEEE")}`}
                    </Typography>
                  </Box>
                  <Box
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      flexDirection: "column",
                      width: "40%",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#8C8080 !important",
                        lineHeight: "15px !important",
                      }}
                    >
                      Return Date
                    </Typography>

                    <Typography
                      sx={{
                        color: "#003566 !important",
                        lineHeight: "15px !important",
                      }}
                    >
                      Save money on return flight
                    </Typography>
                  </Box>
                </Box>
                {openDate && (
                  <Calendar
                    color={iconColor}
                    date={new Date(departureDate)}
                    onChange={(date) => {
                      setDepartureDate(format(new Date(date), "dd-MMM-yyyy"));
                      setOpenDate(false);
                      setOpen(true);
                    }}
                    minDate={new Date()}
                    className="dashboard-calendar"
                    name="date"
                  />
                )}
              </Box>
              {/* </ClickAwayListener> */}
            </Box>
          </Grid>

          <Grid
            className="dashboard-main-input-parent "
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
          >
            {/* <ClickAwayListener onClickAway={handleClickAway}> */}
            <Box className="update-search" bgcolor={bgColor}>
              <Box className="traveler-count">
                <Button
                  onClick={handleClickOpen}
                  sx={{
                    justifyContent: "flex-start",
                    color: "#000",
                    display: "block",
                  }}
                >
                  <p>Travelers & Booking Class</p>
                  <span> {result} Traveler</span>
                  <Typography
                    variant="subtitle2"
                    style={{
                      color: "#003566",
                      fontSize: "11px",
                      lineHeight: "10px",
                    }}
                  >
                    Economy
                  </Typography>
                </Button>
              </Box>

              {open && (
                <Box>
                  <Paper
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    className="dialog-box paper-box"
                    sx={{
                      backgroundColor: "#D8EBFC",
                      padding: "5px 10px",
                      overflow: "hidden",
                      width: "285px",
                    }}
                  >
                    <Box className="passenger-h3">
                      <h3>Passenger</h3>
                    </Box>
                    <Box className="dialog-flex">
                      <Box
                        sx={{
                          display: "flex",
                          gap: "20px",
                          alignItems: "center",
                        }}
                        className="dialog-content"
                      >
                        <Box className="dialog-content">
                          <h5>{adultCount}</h5>
                        </Box>
                        <Box>
                          <h5>Adult</h5>
                          <span style={{ fontSize: "13px" }}>12+ yrs</span>
                        </Box>
                      </Box>
                      <Box className="incre-decre">
                        <button onClick={adultDecrement}>-</button>

                        <button onClick={adultInclement}>+</button>
                      </Box>
                    </Box>

                    <Box className="dialog-flex-child">
                      <Box
                        sx={{
                          display: "flex",
                          gap: "20px",
                          alignItems: "center",
                        }}
                        className="dialog-content"
                      >
                        <Box className="dialog-content">
                          <h5>{childCount}</h5>
                        </Box>
                        <Box>
                          <h5>Children</h5>
                          <span style={{ fontSize: "13px" }}>
                            2- less than 12 yrs
                          </span>
                        </Box>
                      </Box>
                      <Box className="incre-decre">
                        <button onClick={adult2Decrement}>-</button>

                        <button onClick={adult2Inclement}>+</button>
                      </Box>
                    </Box>

                    <Box className="dialog-flex-infant">
                      <Box
                        sx={{
                          display: "flex",
                          gap: "20px",
                          alignItems: "center",
                        }}
                        className="dialog-content"
                      >
                        <Box className="dialog-content">
                          <h5>{infant}</h5>
                        </Box>
                        <Box>
                          <h5>Infant</h5>
                          <span style={{ fontSize: "13px" }}>
                            0 - 23 month{" "}
                          </span>
                        </Box>
                      </Box>
                      <Box className="incre-decre">
                        <button onClick={infantDecrement}>-</button>

                        <button onClick={infantIncrement}>+</button>
                      </Box>
                    </Box>
                    <Box className="hr-line"></Box>
                    <Box className="passengerBtn">
                      <Button
                        size="small"
                        variant="contained"
                        color="error"
                        id="passengerEcoBtn"
                      >
                        Economy
                      </Button>
                      <Button
                        id="passengerSaveBtn"
                        size="small"
                        variant="contained"
                        color="error"
                        onClick={() => {
                          handleClose();
                          setOpenFrom2(true);
                        }}
                      >
                        save
                      </Button>
                    </Box>
                  </Paper>
                </Box>
              )}
            </Box>
            {/* </ClickAwayListener> */}
          </Grid>

          {/*-------------------------- another section ---------------------  */}

          <Grid
            item
            className="dashboard-main-input-parent"
            xs={12}
            sm={12}
            md={6}
            lg={6}
            style={{
              position: "relative",
              height: "fit-content",
            }}
          >
            <Box sx={{ position: "relative" }}>
              <Box
                className="update-search"
                bgcolor={bgColor}
                onClick={() => {
                  setOpenFrom2((prev) => !prev);
                }}
              >
                <Box>
                  <p>From</p>

                  {faddress2 ? (
                    <span> {faddress2?.split(",")[0]}</span>
                  ) : (
                    <span>Dhaka</span>
                  )}
                </Box>
                <Box
                  style={{
                    lineHeight: "0px",
                  }}
                >
                  <input
                    required
                    readOnly
                    value={fromSearchText2}
                    placeholder="Hazrat Shahjalal International Airport"
                  />
                </Box>
              </Box>
              {openFrom2 && (
                <Box
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: "0",
                    width: "100%",
                    backgroundColor: "#fff",
                    height: "fit-content",
                    marginTop: "-5px",
                    borderRadius: "5px",
                    paddingLeft: "10px",
                    zIndex: "10",
                  }}
                >
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <SearchIcon />
                    <input
                      autoComplete="off"
                      autoFocus
                      onChange={formOnChange2}
                      placeholder="Search a city..."
                      style={{
                        width: "100%",
                        height: "40px",
                        backgroundColor: "transparent",
                        border: "none",
                      }}
                    />
                  </Box>

                  <Box width={"full"}>{fromGetSuggetion2()}</Box>
                </Box>
              )}
            </Box>
          </Grid>

          <Grid
            className="dashboard-main-input-parent"
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            style={{
              position: "relative",
              height: "fit-content",
            }}
          >
            {/* <ClickAwayListener onClickAway={() => setOpenTo(false)}> */}
            <Box sx={{ position: "relative" }}>
              <Box
                className="update-search"
                bgcolor={bgColor}
                onClick={() => setOpenTo2((prev) => !prev)}
              >
                <Box>
                  <p>To</p>
                  {toAddress2 ? (
                    <span> {toAddress2?.split(",")[0]}</span>
                  ) : (
                    <span>Dubai</span>
                  )}
                </Box>
                <Box
                  style={{
                    lineHeight: "0px",
                  }}
                >
                  <input
                    required
                    readOnly
                    value={toSearchText2}
                    placeholder="Dubai International Airport"
                  />
                </Box>
              </Box>
              {openTo2 && (
                <Box
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: "0",
                    width: "100%",
                    backgroundColor: "#fff",
                    height: "fit-content",
                    marginTop: "-5px",
                    borderRadius: "5px",
                    paddingLeft: "10px",
                    zIndex: "10",
                  }}
                >
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <SearchIcon />
                    <input
                      autoComplete="off"
                      autoFocus
                      onChange={toOnChange2}
                      placeholder="Search a city..."
                      style={{
                        width: "100%",
                        height: "40px",
                        backgroundColor: "transparent",
                        border: "none",
                      }}
                    />
                  </Box>
                  <Box width={"full"}>{toGetSuggetion2()}</Box>
                </Box>
              )}
            </Box>
            {/* </ClickAwayListener> */}
          </Grid>

          {/* date field here */}
          <Grid
            className="dashboard-main-input-parent"
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
          >
            <Box className="update-search" bgcolor={bgColor}>
              {/* <ClickAwayListener onClickAway={handleClickAwayCalender}> */}
              <Box style={{ position: "relative" }}>
                <Box
                  className="dashboard-main-input date12"
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    marginTop: "0px",
                  }}
                  onClick={() => setOpenDate2((prev) => !prev)}
                >
                  <Box
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      flexDirection: "column",
                      width: "60%",
                    }}
                  >
                    <Typography variant="body1">Travel Date</Typography>
                    <Typography variant="button-text">
                      {`${departureDate}`}
                    </Typography>

                    <Typography
                      variant="subtitle2"
                      style={{
                        color: "#003566",
                        fontSize: "11px",
                      }}
                    >
                      {`${format(new Date(departureDate), "EEEE")}`}
                    </Typography>
                  </Box>
                  <Box
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      flexDirection: "column",
                      width: "40%",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#8C8080 !important",
                        lineHeight: "15px !important",
                      }}
                    >
                      Return Date
                    </Typography>

                    <Typography
                      sx={{
                        color: "#003566 !important",
                        lineHeight: "15px !important",
                      }}
                    >
                      Save money on return flight
                    </Typography>
                  </Box>
                </Box>

                {openDate2 && (
                  <Calendar
                    color={iconColor}
                    date={new Date(departureDate)}
                    onChange={(date) => {
                      setDepartureDate(format(new Date(date), "dd-MMM-yyyy"));
                      setOpenDate2(false);
                      setOpen2(true);
                    }}
                    minDate={new Date()}
                    className="dashboard-calendar"
                    name="date"
                  />
                )}
              </Box>
              {/* </ClickAwayListener> */}
            </Box>
          </Grid>

          <Grid
            className="dashboard-main-input-parent"
            item
            xs={12}
            sm={12}
            md={3}
            lg={3}
          >
            <Box className="add-city">
              <button>ADD CITY</button>
            </Box>
          </Grid>

          <Grid
            className="dashboard-main-input-parent"
            item
            xs={12}
            sm={12}
            md={3}
            lg={3}
          >
            <Box className="remove-city">
              <button>REMOVE</button>
            </Box>
          </Grid>
        </Grid>
      </form>
      <Grid lg={6} md={6} sm={12}>
        <Box>
          <Button
            className="search-flight-btn"
            type="submit"
            variant="contained"
            onClick={handleSearch.bind(this)}
          >
            Search Flight
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};

export default UpMultiCity;
