import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import flightData from "../../Dashboard/DashboardMain/flightData";
import { useNavigate, useLocation } from "react-router-dom";
import { BiCurrentLocation } from "react-icons/bi";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import SearchIcon from "@mui/icons-material/Search";
import upAir from "../../../image/searchBarImg/upAir.png";
import downAir from "../../../image/searchBarImg/downAir.png";
import date from "../../../image/searchBarImg/date.png";
import traveler from "../../../image/searchBarImg/traveler.png";
import { DateRange, Calendar } from "react-date-range";
import format from "date-fns/format";
import { addDays } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./UpRoundTrip.css";
import "../../Dashboard/DashboardMain/DashboardMain.css";
import Swal from "sweetalert2";
import { AiOutlineSwap } from "react-icons/ai";
import secureLocalStorage from "react-secure-storage";

const UpRoundTrip = ({
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
  returningDate,
  setReturningDate,
}) => {
  const data = flightData; // json data from flight Data
  // const [faddress, setfaddress] = useState("");
  // const [toAddress, setToAddress] = useState("");
  // const [fromSearchText, setFromSearchText] = useState("");
  // const [toSearchText, setToSearchText] = useState("");
  // const [departureDate, setDepartureDate] = useState(
  //   format(new Date(), "dd MMM yyyy")
  // );

  // const [returningDate, setReturningDate] = useState(
  //   format(new Date(departureDate), "dd MMM yyyy")
  // );

  //  show the form data when click input field
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
      code: "DXB",
      name: "Dubai Intl Airport",
      Address: "Dubai,UNITED ARAB EMIRATES",
    },
  ];

  const [fromSuggest, setFromSuggest] = useState(initialData);
  const [toSuggest, setToSuggest] = useState(initialData);
  const [fromSendData, setFromSendData] = useState("");
  const [toSendData, setToSendData] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const user = secureLocalStorage.getItem("user-info");
  const [openFrom, setOpenFrom] = useState(false);
  const [openTo, setOpenTo] = useState(false);
  // Date picker
  const [openDate, setOpenDate] = useState(false);
  const [openReturnDate, setOpenReturnDate] = useState(false);

  // handle click function
  // const handleClickAwayCalender = () => {
  //   setOpenDate(false);
  // };

  const handleSwapBtn = () => {
    setfaddress(toAddress);
    setToAddress(faddress);
    setFromSearchText(toSearchText);
    setToSearchText(fromSearchText);
  };

  //formOnChange Filter
  const formOnChange = (e) => {
    const searchvalue = e.target.value;
    let suggestion = [];
    if (searchvalue.length > 2) {
      suggestion = data.filter(
        (item) =>
          item.code.toLowerCase().includes(searchvalue.toLowerCase()) ||
          // item.name.toLowerCase().includes(searchvalue.toLowerCase()) ||
          item.Address.toLowerCase().includes(searchvalue.toLowerCase())
      );
      setFromSuggest(suggestion);
    } else {
      setFromSuggest(initialData);
    }
    // setFromSearchText(searchvalue);
  };

  const fromSuggestedText = (name, code, address) => {
    setFromSearchText(name + "   " + "(" + code + ")");
    setFromSuggest([]);
    setFromSendData(code);
    setfaddress(address);
    setOpenFrom(false);
    setOpenTo(true);
    setOpen(false);
  };
  //ToOnChange filter
  const toOnChange = (e) => {
    const searchvalue = e.target.value;
    let suggestion = [];
    if (searchvalue.length > 2) {
      suggestion = data.filter(
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
  //FromgetSuggetion
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
                variant="h6"
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
                variant="h6"
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

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen((prev) => !prev);
    setOpenFrom(false);
    setOpenTo(false);
    setOpenDate(false);
    setOpenReturnDate(false);
  };
  const handleClickAway = () => {
    setOpen(false);
    setResult(adultCount + childCount + infant);
  };

  const [result, setResult] = useState(1);

  const handleClose = () => {
    setOpen(false);
    setResult(adultCount + childCount + infant);
  };

  let [adultCount, setAultCount] = useState(1);
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

  let [childCount, setchildCount] = useState(0);

  function adult2Inclement(e) {
    e.preventDefault();
    if (childCount < 9 - (adultCount + infant)) {
      setchildCount(childCount + 1);
    }
  }

  function adult2Decrement(e) {
    e.preventDefault();
    if (childCount > 0) {
      setchildCount(childCount - 1);
    }
  }

  let [infant, setInfant] = useState(0);

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
  // Search Flight button click

  async function handleSearch() {
    if (fromSearchText === "") {
      return;
    } else if (toSearchText === "") {
      return;
    } else {
      let body = JSON.stringify({
        Agent_Id: user.user.agentId,
        searchtype: tripType,
        DepFrom: faddress,
        ArrTo: toAddress,
        depTime: departureDate,
        returnTime: returningDate,
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
            navigate("/dashboard/roundtrip", {
              state: {
                faddress,
                toAddress,
                departureDate,
                returningDate,
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
          sx={{ justifyContent: "space-between", mt: "20px" }}
          container
          // spacing={1}
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
            {/* <ClickAwayListener onClickAway={() => setOpenFrom(false)}> */}
            <Box sx={{ position: "relative" }}>
              <Box
                className="update-search"
                bgcolor={bgColor}
                onClick={() => {
                  setOpenFrom((prev) => !prev);
                  setOpenTo(false);
                  setOpenDate(false);
                  setOpenReturnDate(false);
                  setOpen(false);
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
            <Box className="swap-btn" onClick={handleSwapBtn}>
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
            {/* <ClickAwayListener onClickAway={() => setOpenTo(false)}> */}
            <Box sx={{ position: "relative" }}>
              <Box
                className="update-search"
                bgcolor={bgColor}
                onClick={() => {
                  setOpenTo((prev) => !prev);
                  setOpenFrom(false);
                  setOpenDate(false);
                  setOpenReturnDate(false);
                  setOpen(false);
                }}
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
            {/* </ClickAwayListener> */}
          </Grid>

          {/* <ClickAwayListener onClickAway={handleClickAwayCalender}> */}
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
                >
                  <Box
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      flexDirection: "column",
                      width: "60%",
                    }}
                    onClick={() => {
                      setOpenDate((prev) => !prev);
                      setOpenFrom(false);
                      setOpenTo(false);
                      setOpen(false);
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
                    onClick={() => {
                      setOpenReturnDate((prev) => !prev);
                      setOpenFrom(false);
                      setOpenTo(false);
                      setOpen(false);
                    }}
                  >
                    <p>Travel Date</p>

                    <span>{`${returningDate}`}</span>
                    <Typography
                      variant="subtitle2"
                      style={{ color: "#003566", fontSize: "11px" }}
                    >
                      {`${format(new Date(returningDate), "EEEE")}`}
                    </Typography>
                  </Box>
                </Box>
                {openDate && (
                  <>
                    <Box
                      sx={{
                        display: {
                          lg: "block",
                          md: "block",
                          sm: "none",
                          xs: "none",
                        },
                      }}
                    >
                      <Calendar
                        color={iconColor}
                        date={new Date(departureDate)}
                        placeholderText="Departure Date"
                        onChange={(date) => {
                          setDepartureDate(
                            format(new Date(date), "dd MMM yyyy")
                          );
                          new Date(departureDate).getDate() >=
                            new Date(returningDate).getDate() &&
                            setReturningDate(
                              format(new Date(date), "dd MMM yyyy")
                            );
                          setOpenDate(false);
                          setOpenFrom(false);
                          setOpenTo(false);
                          // setOpenReturnDate(true);
                        }}
                        months={2}
                        direction="horizontal"
                        minDate={new Date()}
                        className="return-date"
                        name="date"
                      />
                    </Box>
                    <Box
                      sx={{
                        display: {
                          lg: "none",
                          md: "none",
                          sm: "block",
                          xs: "block",
                        },
                      }}
                    >
                      <Calendar
                        color={iconColor}
                        date={new Date(departureDate)}
                        onChange={(date) => {
                          setDepartureDate(
                            format(new Date(date), "dd MMM yyyy")
                          );
                          new Date(departureDate).getDate() >=
                            new Date(returningDate).getDate() &&
                            setReturningDate(
                              format(new Date(date), "dd MMM yyyy")
                            );
                          setOpenDate(false);
                          setOpenFrom(false);
                          setOpenTo(false);
                          setOpenReturnDate(true);
                        }}
                        months={1}
                        direction="vertical"
                        minDate={new Date()}
                        className="return-date"
                        name="dashboard-calendar"
                      />
                    </Box>
                  </>
                )}
                {openReturnDate && (
                  <>
                    <Box
                      sx={{
                        display: {
                          lg: "block",
                          md: "block",
                          sm: "none",
                          xs: "none",
                        },
                      }}
                    >
                      <Calendar
                        color={iconColor}
                        date={new Date(returningDate)}
                        onChange={(date) => {
                          setReturningDate(
                            format(new Date(date), "dd MMM yyyy")
                          );
                          setOpenReturnDate(false);
                          setOpenDate(false);
                          setOpenFrom(false);
                          setOpenTo(false);
                          setOpen(true);
                        }}
                        months={2}
                        direction="horizontal"
                        minDate={new Date(departureDate)}
                        className="return-date"
                        name="departure-date"
                      />
                    </Box>
                    <Box
                      sx={{
                        display: {
                          lg: "none",
                          md: "none",
                          sm: "block",
                          xs: "block",
                        },
                      }}
                    >
                      <Calendar
                        color={iconColor}
                        date={new Date(returningDate)}
                        onChange={(date) => {
                          setReturningDate(
                            format(new Date(date), "dd MMM yyyy")
                          );
                          setOpenReturnDate(false);
                          setOpenDate(false);
                          setOpenFrom(false);
                          setOpenTo(false);
                          setOpen(true);
                        }}
                        months={2}
                        direction="vertical"
                        minDate={new Date()}
                        className="return-date"
                        name="return-date"
                      />
                    </Box>
                  </>
                )}
              </Box>
            </Box>
          </Grid>
          {/* </ClickAwayListener> */}

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
                        onClick={() => handleClose()}
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
        </Grid>
      </form>
      <Grid lg={6} md={6} sm={12}>
        <Button
          className="search-flight-btn"
          type="search"
          variant="contained"
          onClick={handleSearch.bind(this)}
        >
          Search Flight
        </Button>
      </Grid>
    </Box>
  );
};

export default UpRoundTrip;
