import {
  Box,
  ClickAwayListener,
  Grid,
  Paper,
  Typography,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import { Calendar } from "react-date-range";
import { format } from "date-fns";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AiOutlineSwap } from "react-icons/ai";
import { IoIosPaperPlane } from "react-icons/io";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { addDays } from "date-fns/esm";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import secureLocalStorage from "react-secure-storage";
import flightData from "../flightData";
const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: "50%",
  width: 16,
  height: 16,
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 0 0 1px rgb(16 22 26 / 40%)"
      : "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
  backgroundColor: theme.palette.mode === "dark" ? "#394b59" : "#f5f8fa",
  backgroundImage:
    theme.palette.mode === "dark"
      ? "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))"
      : "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
  ".Mui-focusVisible &": {
    // outline: "2px auto rgba(19,124,189,.6)",
    outline: "2px auto #003566",
    outlineOffset: 2,
  },
  "input:hover ~ &": {
    backgroundColor: theme.palette.mode === "dark" ? "#30404d" : "#ebf1f5",
  },
  "input:disabled ~ &": {
    boxShadow: "none",
    background:
      theme.palette.mode === "dark"
        ? "rgba(57,75,89,.5)"
        : "rgba(206,217,224,.5)",
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: "#003566",
  backgroundImage:
    "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
  "&:before": {
    display: "block",
    width: 16,
    height: 16,
    backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: "#DC143C",
  },
});

// Inspired by blueprintjs
function BpRadio(props) {
  return (
    <Radio
      sx={{
        "&:hover": {
          bgcolor: "transparent",
        },
      }}
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}

const Multicity = ({
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
  fromSendData,
  setFromSendData,
  toSendData,
  setToSendData,
  toSearchText,
  setToSearchText,
  departureDate,
  setDepartureDate,
  setValue,
  adultCount,
  setAdultCount,
  childCount,
  setChildCount,
  infant,
  setInfant,
  result,
  setResult,
  className,
  handleClassName,
  from,
  setFrom,
  to,
  setTo,
}) => {
  const data = flightData; // json data from flight Data

  const initialData = [
    {
      code: "DAC",
      name: "Hazrat Shahjalal Intl Airport",
      Address: "Dhaka,BANGLADESH",
    },
    {
      code: "DXB",
      name: "Dubai Intl Airport",
      Address: "Dubai,UNITED ARAB EMIRATES",
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
  ];

  const [fromSuggest, setFromSuggest] = useState(initialData);
  const [toSuggest, setToSuggest] = useState(initialData);

  const [open, setOpen] = useState(false);
  const [openDate, setOpenDate] = useState(false);

  const navigate = useNavigate();
  const user = secureLocalStorage.getItem("user-info");

  const [openFrom, setOpenFrom] = useState(false);
  const [openTo, setOpenTo] = useState(false);

  const handleClickAway = () => {
    setOpenFrom(false);
    setOpenTo(false);
    setOpenDate(false);
    setOpen(false);
    setResult(adultCount + childCount + infant);
  };

  const handleSwapBtn = () => {
    setfaddress(toAddress);
    setToAddress(faddress);
    setFromSearchText(toSearchText);
    setToSearchText(fromSearchText);
  };

  const formOnChange = (e) => {
    setOpen(false);
    const searchvalue = e.target.value;

    if (searchvalue.length > 2) {
      const suggestion = data.filter((item) =>
        item.code.toLowerCase().includes(searchvalue.toLowerCase())
      );
      setFromSuggest(suggestion);
      if (suggestion.length === 0) {
        const suggestion = data.filter(
          (item) =>
            item.code.toLowerCase().includes(searchvalue.toLowerCase()) ||
            item.Address.toLowerCase().includes(searchvalue.toLowerCase())
        );
        setFromSuggest(suggestion);
      }
    } else {
      setFromSuggest(initialData);
    }
  };

  const fromSuggestedText = (name, code, address) => {
    setFromSendData(code);
    setFromSearchText(`${name} (${code})`);
    setFromSuggest([]);
    setfaddress(address);
    setOpen(false);
    setOpenFrom(false);
    setOpenTo(true);
  };

  const toOnChange = (e) => {
    const searchvalue = e.target.value;
    if (searchvalue.length > 2) {
      const suggestion = data.filter((item) =>
        item.code.toLowerCase().includes(searchvalue.toLowerCase())
      );
      setToSuggest(suggestion);
      if (suggestion.length === 0) {
        const suggestion = data.filter(
          (item) =>
            item.code.toLowerCase().includes(searchvalue.toLowerCase()) ||
            item.Address.toLowerCase().includes(searchvalue.toLowerCase())
        );
        setToSuggest(suggestion);
      }
    } else {
      setToSuggest(initialData);
    }
  };
  const toSuggestedText = (name, code, address) => {
    setToSendData(code);
    setToSearchText(`${name} (${code})`);
    setToSuggest([]);
    setToAddress(address);
    setOpenTo(false);
    setTimeout(() => setOpenDate(true), 200);
  };

  const fromGetSuggetion = () => {
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
          sx={{
            maxHeight: "230px",
            overflowY: "auto",
            background: "#fff",
            boxShadow:
              "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
            "&::-webkit-scrollbar": { width: "5px" },
          }}
        >
          {fromSuggest.length !== 0 ? (
            fromSuggest.map((item, index) => {
              return (
                <Box
                  sx={{
                    paddingLeft: "20px",
                    paddingRight: "10px",
                    backgroundColor: "#fff",
                    transition: "all .5s ease-in-out",
                    "&:hover": {
                      backgroundColor: "#D1E9FF",
                    },
                  }}
                >
                  <Box
                    sx={{
                      margin: "0px 0px",
                      padding: "5px 0px",
                      cursor: "pointer",
                      display: "flex",
                      width: "100%",
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
                          fontSize: "12px",
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
                          fontSize: "11px",
                          display: "block",
                          textAlign: "left",
                          color: "#999",
                        }}
                      >
                        {item.name}
                      </span>
                    </Box>
                    <Box
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "13px",
                          display: "block",
                          textAlign: "left",
                          paddingRight: "5px",
                          color: "#999",
                          fontWeight: "600",
                        }}
                      >
                        {item.code}
                      </span>
                    </Box>
                  </Box>
                </Box>
              );
            })
          ) : (
            <Box>
              <Typography
                variant="subtitle-2"
                style={{
                  color: "#DC143C",
                  fontWidth: "bold",
                  paddingLeft: "10px",
                }}
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
          sx={{
            boxShadow:
              "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
            maxHeight: "230px",
            overflowY: "auto",
            background: "#fff",
            "&::-webkit-scrollbar": { width: "5px" },
          }}
        >
          {toSuggest.length !== 0 ? (
            toSuggest.map((item, index) => {
              return (
                <Box
                  key={index}
                  sx={{
                    paddingLeft: "20px",
                    paddingRight: "5px",
                    backgroundColor: "#fff",
                    transition: "all .5s ease-in-out",
                    "&:hover": {
                      backgroundColor: "#D1E9FF",
                    },
                  }}
                >
                  <Box
                    sx={{
                      margin: "0px 0px",
                      padding: "5px 0px",
                      cursor: "pointer",
                      display: "flex",
                      width: "100%",
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
                          fontSize: "12px",
                          color: "#003566",
                          display: "block",
                          textAlign: "left",
                        }}
                      >
                        {item.Address}
                      </span>
                      <span
                        style={{
                          fontSize: "11px",
                          display: "block",
                          color: "#999",
                          textAlign: "left",
                        }}
                      >
                        {item.name}
                      </span>
                    </Box>
                    <Box
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "13px",
                          paddingRight: "10px",
                          display: "block",
                          textAlign: "left",
                          color: "#999",
                          fontWeight: "600",
                        }}
                      >
                        {item.code}
                      </span>
                    </Box>
                  </Box>
                </Box>
              );
            })
          ) : (
            <Box>
              <Typography
                variant="subtitle2"
                style={{
                  color: "#DC143C",
                  fontWidth: "bold",
                  paddingLeft: "10px",
                }}
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

  // Opens the dialog when the user clicks.
  const handleClickOpen = () => {
    setOpen((prev) => !prev);
    setOpenFrom(false);
    setOpenTo(false);
    setOpenDate(false);
  };

  // Closes the child process.
  const handleClose = () => {
    setOpen(false);
    setOpenFrom(false);
    setOpenTo(false);
    setOpenDate(false);
    setResult(adultCount + childCount + infant);
  };

  // Sets the number of children.
  function adultInclement(e) {
    e.preventDefault();
    if (adultCount < 9 - (childCount + infant)) {
      setAdultCount(adultCount + 1);
    }
  }

  // Decrement the count of children.
  function adultDecrement(e) {
    e.preventDefault();
    if (adultCount > 1) {
      setAdultCount(adultCount - 1);
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

  // Increment the default value if the value is not a child.
  function infantIncrement(e) {
    e.preventDefault();
    if (infant < 9 - (adultCount + childCount)) {
      if (infant < adultCount) {
        setInfant(infant + 1);
      }
    }
  }

  // Decrement the infant by 1.
  function infantDecrement(e) {
    e.preventDefault();
    if (infant > 0) {
      setInfant(infant - 1);
    }
  }

  //   Flight Search button Start
  async function handleSearch(e) {
    e.preventDefault();
    // console.log("InputFields", inputFields);
    // show notification if user is not found
    navigate("/dashboard/multicityaftersearch");

    // let body = JSON.stringify({
    //   agentid: user?.user?.agentId,
    //   searchtype: tripType,
    //   DepFrom: fromSendData,
    //   ArrTo: toSendData,
    //   depTime: new Date(departureDate).toLocaleDateString("sv"),
    //   returnTime: null,
    //   adult: adultCount,
    //   child: childCount,
    //   infant: infant,
    //   class: className,
    // });
    // await fetch("https://api.flyfarint.net/v.1.0.0/AirSearch/savehistory.php", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: body,
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data) {
    //       navigate("/dashboard/allflight", {
    //         state: {
    //           faddress,
    //           toAddress,
    //           fromSearchText,
    //           toSearchText,
    //           departureDate: format(new Date(from), "dd MMM yy"),
    //           adultCount,
    //           childCount,
    //           infant,
    //           tripType,
    //           fromSendData,
    //           toSendData,
    //           className,
    //         },
    //       });
    //     } else {
    //       Swal.fire({
    //         icon: "error",
    //         title: "Oops...",
    //         text: "Something went wrong!",
    //         confirmButtonText: "Search Again...",
    //       }).then(function () {
    //         navigate("/dashboard/dashboardHome");
    //       });
    //     }
    //   });
  }

  const handleSelect = (date) => {
    setFrom(date);
    setTo(addDays(date, 3));
    setOpenDate(false);
    setTimeout(() => setOpen(true), 200);
  };

  const [addCity, setAddCity] = useState(0);
  const handleAddCity = (e) => {
    e.preventDefault();
    if (addCity < 2) {
      setAddCity(addCity + 1);
    }
  };
  const removeTask = (e) => {
    e.preventDefault();
    if (addCity > 0) {
      setAddCity(addCity - 1);
    }
  };

  const [inputFields, setInputFields] = useState([
    {
      fromSuggest: `${fromSendData}`,
      toSuggest: `${toSendData}`,
      adultCount: `${adultCount}`,
      childCount: `${childCount}`,
      infantCount: `${infant}`,
      CityCount: "0",
      segments: [
        {
          DepFrom: `${fromSendData}`,
          ArrTo: `${toSendData}`,
          Date: `${setFrom}`,
        },
      ],
    },
  ]);

  // const [inputFields, setInputFields] = useState([
  //   { index: uuidv4(), firstName: "", lastName: "" },
  // ]);
  const handleAddFields = () => {
    setInputFields([
      ...inputFields,
      {
        firstName: inputFields[inputFields.length - 1].fromSuggest.code,
        lastName: "",
      },
    ]);
  };
  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    values.splice(
      values.findIndex((value) => value.index === index),
      1
    );
    setInputFields(values);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <>
        <Box className="new-search-body-trip" style={{ position: "relative" }}>
          <Box>
            <form onSubmit={handleSearch}>
              <Grid
                sx={{
                  justifyContent: "space-between",
                  mt: "20px",
                }}
                container
                rowSpacing={0}
                columnSpacing={0}
              >
                <Grid
                  item
                  className="dashboard-main-input-parent"
                  xs={12}
                  sm={12}
                  md={6}
                  lg={3}
                  style={{
                    position: "relative",
                    height: "82px",
                    borderRight: "1px solid #DEDEDE",
                    borderRadius: "5px 0px 0px 5px",
                  }}
                >
                  <Box
                    className="update-search1"
                    bgcolor={bgColor}
                    onClick={() => {
                      setOpenFrom((prev) => !prev);
                      setOpenTo(false);
                      setOpenDate(false);
                      setOpen(false);
                    }}
                  >
                    <Box style={{ position: "relative" }}>
                      <p>From</p>

                      <span className="addressTitle">
                        {/* {faddress?.split(",")[0]} */}
                      </span>
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
                  {/* <Grow in={openFrom}> */}
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
                        zIndex: "10",
                      }}
                    >
                      <Box
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          // paddingLeft: "20px",
                          color: "#003566",
                          zIndex: 10,
                        }}
                        backgroundColor="#fff"
                        mt={"-55px"}
                      >
                        {/* <SearchIcon /> */}
                        <input
                          autoComplete="off"
                          autoFocus
                          onChange={formOnChange}
                          placeholder="Search a airport..."
                          className="crimsonPlaceholder"
                          style={{
                            color: "#DC143C",
                            fontWeight: 500,
                            paddingLeft: "20px",
                            width: "100%",
                            height: "40px",
                            backgroundColor: "transparent",
                            border: "none",
                          }}
                        />
                      </Box>
                      <Box>{fromGetSuggetion()}</Box>
                    </Box>
                  )}
                  {/* </Grow> */}
                  <Box
                    className="swap-btn2"
                    onClick={handleSwapBtn}
                    sx={{
                      display: {
                        lg: "flex",
                        md: "flex",
                        sm: "none",
                        xs: "none",
                      },
                      zIndex: 11,
                    }}
                  >
                    <AiOutlineSwap
                      style={{ color: "#fff", fontSize: "20px" }}
                    />
                  </Box>
                </Grid>

                <Grid
                  className="dashboard-main-input-parent"
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  lg={3}
                  style={{
                    position: "relative",
                    height: "82px",
                    borderRight: "1px solid #DEDEDE",
                  }}
                >
                  <Box
                    className="update-search1"
                    bgcolor={bgColor}
                    onClick={() => {
                      setOpenFrom(false);
                      setOpenTo((prev) => !prev);
                      setOpenDate(false);
                      setOpen(false);
                    }}
                  >
                    <Box style={{ position: "relative" }}>
                      <p>To</p>

                      {/* <span className="addressTitle">
                        {toAddress?.split(",")[0]}
                        {faddress?.split(",")[0] ===
                          toAddress?.split(",")[0] && (
                          <Stack
                            style={{
                              position: "absolute",
                              top: "100%",
                              left: "0",
                              width: "100%",
                            }}
                          >
                            <Alert
                              icon={<ErrorOutlineIcon fontSize="inherit" />}
                              severity="error"
                              sx={{ fontSize: "11px" }}
                            >
                              Can't choose same place!
                            </Alert>
                          </Stack>
                        )}
                      </span> */}
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
                  {/* <Grow in={openTo}> */}
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
                        zIndex: "10",
                      }}
                    >
                      <Box
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          color: "#003566",
                          zIndex: 10,
                        }}
                        backgroundColor="#fff"
                        mt={"-55px"}
                      >
                        {/* <SearchIcon /> */}
                        <input
                          autoComplete="off"
                          autoFocus
                          onChange={toOnChange}
                          className="crimsonPlaceholder"
                          placeholder="Search a airport..."
                          style={{
                            color: "#DC143C",
                            fontWeight: 500,
                            paddingLeft: "20px",
                            width: "100%",
                            height: "40px",
                            backgroundColor: "transparent",
                            border: "none",
                          }}
                        />
                      </Box>
                      <Box>{toGetSuggetion()}</Box>
                    </Box>
                  )}
                  {/* </Grow> */}
                </Grid>

                <Grid
                  className="dashboard-main-input-parent"
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  lg={3}
                  style={{
                    position: "relative",
                    height: "82px",
                    borderRight: "1px solid #DEDEDE",
                  }}
                >
                  <Box className="update-search1" bgcolor={bgColor}>
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
                          width: "50%",
                          cursor: "pointer",
                          lineHeight: 1.5,
                        }}
                        onClick={() => {
                          setTimeout(() => setOpenDate((prev) => !prev), 200);
                          setOpenFrom(false);
                          setOpenTo(false);
                          setOpen(false);
                        }}
                      >
                        <p>Travel Date &#10507;</p>

                        <span className="addressTitle">{`${format(
                          new Date(from),
                          "dd MMM yy"
                        )}`}</span>

                        <Typography
                          variant="subtitle2"
                          style={{ color: "#003566", fontSize: "11px" }}
                        >
                          {`${format(new Date(from), "EEEE")}`}
                        </Typography>
                      </Box>
                    </Box>
                    {/* <Grow in={openDate}> */}
                    {openDate && (
                      <Box
                        sx={{
                          display: {
                            lg: "block",
                            md: "block",
                            sm: "block",
                            xs: "block",
                          },
                        }}
                      >
                        <Calendar
                          color={iconColor}
                          date={new Date(from)}
                          onChange={handleSelect}
                          months={1}
                          direction="horizontal"
                          minDate={new Date()}
                          className="new-dashboard-calendar"
                          name="dashboard-calendar"
                        />
                      </Box>
                    )}
                    {/* </Grow> */}
                  </Box>
                </Grid>
                <Grid
                  className="dashboard-main-input-parent"
                  item
                  xs={12}
                  sm={12}
                  md={4}
                  lg={2}
                  style={{
                    height: "82px",
                  }}
                >
                  <Box className="update-search1" bgcolor={bgColor}>
                    <Box className="traveler-count" onClick={handleClickOpen}>
                      <Button
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
                          {className}
                        </Typography>
                      </Button>
                    </Box>

                    {/* <Grow in={open}> */}
                    {open && (
                      <Box>
                        <Box
                          className="dialog-box"
                          sx={{
                            backgroundColor: "#FFF",
                            padding: "5px 10px 20px 10px",
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
                                <span style={{ fontSize: "13px" }}>
                                  12+ yrs
                                </span>
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
                          <Box className="new-passengerBtn">
                            <Box>
                              <FormControl>
                                <RadioGroup
                                  aria-labelledby="demo-controlled-radio-buttons-group"
                                  name="controlled-radio-buttons-group"
                                  value={className}
                                  row
                                  onChange={handleClassName}
                                >
                                  <FormControlLabel
                                    value="Economy"
                                    control={<BpRadio />}
                                    label="Economy"
                                    sx={{
                                      mr: "21px",
                                    }}
                                  />
                                  <FormControlLabel
                                    value="Business"
                                    control={<BpRadio />}
                                    label="Business"
                                  />
                                  <FormControlLabel
                                    value="First Class"
                                    control={<BpRadio />}
                                    label="First Class"
                                  />
                                  <FormControlLabel
                                    value="Premium Economy "
                                    control={<BpRadio />}
                                    label="Premium Economy"
                                  />
                                </RadioGroup>
                              </FormControl>
                            </Box>
                            <Button
                              id="passengerSaveBtn"
                              size="small"
                              variant="contained"
                              color="error"
                              onClick={handleClose}
                              className="shine-effect"
                            >
                              DONE
                            </Button>
                          </Box>
                        </Box>
                      </Box>
                    )}
                    {/* </Grow> */}
                  </Box>
                </Grid>
                <Grid
                  lg={1}
                  md={2}
                  sm={12}
                  xs={12}
                  justifyContent="center"
                  alignItems={"center"}
                >
                  <Box
                    sx={{
                      height: "100%",
                      width: "100%",
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      type="submit"
                      //   disabled={
                      //     faddress?.split(",")[0] === toAddress?.split(",")[0]
                      //       ? true
                      //       : false
                      //   }
                      variant="contained"
                      startIcon={<IoIosPaperPlane />}
                      className="shine-effect"
                      sx={{
                        height: "100%",
                        width: {
                          lg: "90%",
                          md: "90%",
                          sm: "100%",
                          xs: "100%",
                        },
                        mt: { lg: "0px", md: "0px", sm: "10px", xs: "10px" },
                        backgroundColor: "#dc143c",
                        color: "#fff",
                        textTransform: "capitalize",
                        display: "inline-block",
                        position: "relative",
                        "&:hover": {
                          backgroundColor: "#dc143c",
                          cursor: "pointer",
                        },
                      }}
                    >
                      <Box>Search</Box>
                    </Button>
                  </Box>
                </Grid>
              </Grid>

              {/* {inputFields.map((inputField) => (
                  <Grid
                    sx={{
                      justifyContent: "space-between",
                      mt: "20px",
                    }}
                    container
                    rowSpacing={0}
                    columnSpacing={0}
                  >
                    <Grid
                      item
                      className="dashboard-main-input-parent"
                      xs={12}
                      sm={12}
                      md={6}
                      lg={3}
                      style={{
                        position: "relative",
                        height: "82px",
                        borderRight: "1px solid #DEDEDE",
                        borderRadius: "5px 0px 0px 5px",
                      }}
                    >
                      <Box
                        className="update-search1"
                        bgcolor={bgColor}
                        onClick={() => {
                          setOpenFrom((prev) => !prev);
                          setOpenTo(false);
                          setOpenDate(false);
                          setOpen(false);
                        }}
                      >
                        <Box style={{ position: "relative" }}>
                          <p>From</p>
  
                          <span className="addressTitle">
                            {faddress?.split(",")[0]}
                          </span>
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
                            zIndex: "10",
                          }}
                        >
                          <Box
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              color: "#003566",
                              zIndex: 10,
                            }}
                            backgroundColor="#fff"
                            mt={"-55px"}
                          >
                            <input
                              autoComplete="off"
                              autoFocus
                              onChange={formOnChange}
                              placeholder="Search a airport..."
                              className="crimsonPlaceholder"
                              style={{
                                color: "#DC143C",
                                fontWeight: 500,
                                paddingLeft: "20px",
                                width: "100%",
                                height: "40px",
                                backgroundColor: "transparent",
                                border: "none",
                              }}
                            />
                          </Box>
                          <Box>{fromGetSuggetion()}</Box>
                        </Box>
                      )}
                      <Box
                        className="swap-btn2"
                        onClick={handleSwapBtn}
                        sx={{
                          display: {
                            lg: "flex",
                            md: "flex",
                            sm: "none",
                            xs: "none",
                          },
                          zIndex: 11,
                        }}
                      >
                        <AiOutlineSwap
                          style={{ color: "#fff", fontSize: "20px" }}
                        />
                      </Box>
                    </Grid>
  
                    <Grid
                      className="dashboard-main-input-parent"
                      item
                      xs={12}
                      sm={12}
                      md={6}
                      lg={3}
                      style={{
                        position: "relative",
                        height: "82px",
                        borderRight: "1px solid #DEDEDE",
                      }}
                    >
                      <Box
                        className="update-search1"
                        bgcolor={bgColor}
                        onClick={() => {
                          setOpenFrom(false);
                          setOpenTo((prev) => !prev);
                          setOpenDate(false);
                          setOpen(false);
                        }}
                      >
                        <Box style={{ position: "relative" }}>
                          <p>To</p>
  
                          <span className="addressTitle">
                            {toAddress?.split(",")[0]}
                            {faddress?.split(",")[0] ===
                              toAddress?.split(",")[0] && (
                              <Stack
                                style={{
                                  position: "absolute",
                                  top: "100%",
                                  left: "0",
                                  width: "100%",
                                }}
                              >
                                <Alert
                                  icon={<ErrorOutlineIcon fontSize="inherit" />}
                                  severity="error"
                                  sx={{ fontSize: "11px" }}
                                >
                                  Can't choose same place!
                                </Alert>
                              </Stack>
                            )}
                          </span>
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
                            zIndex: "10",
                          }}
                        >
                          <Box
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              color: "#003566",
                              zIndex: 10,
                            }}
                            backgroundColor="#fff"
                            mt={"-55px"}
                          >
                            <input
                              autoComplete="off"
                              autoFocus
                              onChange={toOnChange}
                              className="crimsonPlaceholder"
                              placeholder="Search a airport..."
                              style={{
                                color: "#DC143C",
                                fontWeight: 500,
                                paddingLeft: "20px",
                                width: "100%",
                                height: "40px",
                                backgroundColor: "transparent",
                                border: "none",
                              }}
                            />
                          </Box>
                          <Box>{toGetSuggetion()}</Box>
                        </Box>
                      )}
                    </Grid>
  
                    <Grid
                      className="dashboard-main-input-parent"
                      item
                      xs={12}
                      sm={12}
                      md={6}
                      lg={3}
                      style={{
                        position: "relative",
                        height: "82px",
                        borderRight: "1px solid #DEDEDE",
                      }}
                    >
                      <Box className="update-search1" bgcolor={bgColor}>
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
                              width: "50%",
                              cursor: "pointer",
                              lineHeight: 1.5,
                            }}
                            onClick={() => {
                              setTimeout(() => setOpenDate((prev) => !prev), 200);
                              setOpenFrom(false);
                              setOpenTo(false);
                              setOpen(false);
                            }}
                          >
                            <p>Travel Date &#10507;</p>
  
                            <span className="addressTitle">{`${format(
                              new Date(from),
                              "dd MMM yy"
                            )}`}</span>
  
                            <Typography
                              variant="subtitle2"
                              style={{ color: "#003566", fontSize: "11px" }}
                            >
                              {`${format(new Date(from), "EEEE")}`}
                            </Typography>
                          </Box>
                        </Box>
                        {openDate && (
                          <Box
                            sx={{
                              display: {
                                lg: "block",
                                md: "block",
                                sm: "block",
                                xs: "block",
                              },
                            }}
                          >
                            <Calendar
                              color={iconColor}
                              date={new Date(from)}
                              onChange={handleSelect}
                              months={1}
                              direction="horizontal"
                              minDate={new Date()}
                              className="new-dashboard-calendar"
                              name="dashboard-calendar"
                            />
                          </Box>
                        )}
                      </Box>
                    </Grid>
                    <Grid
                      className="dashboard-main-input-parent"
                      item
                      xs={12}
                      sm={12}
                      md={4}
                      lg={2}
                      style={{
                        height: "82px",
                      }}
                    >
                      <Button onClick={handleRemoveFields}>X</Button>
                    </Grid>
                    <Grid
                      lg={1}
                      md={2}
                      sm={12}
                      xs={12}
                      justifyContent="center"
                      alignItems={"center"}
                    >
                      <Box
                        sx={{
                          height: "100%",
                          width: "100%",
                          display: "flex",
                          justifyContent: "flex-end",
                          alignItems: "center",
                        }}
                      >
                        <Button
                          onClick={handleAddFields}
                          disabled={
                            faddress?.split(",")[0] === toAddress?.split(",")[0]
                              ? true
                              : false
                          }
                          variant="contained"
                          startIcon={<IoIosPaperPlane />}
                          className="shine-effect"
                          sx={{
                            height: "100%",
                            width: {
                              lg: "90%",
                              md: "90%",
                              sm: "100%",
                              xs: "100%",
                            },
                            mt: { lg: "0px", md: "0px", sm: "10px", xs: "10px" },
                            backgroundColor: "#dc143c",
                            color: "#fff",
                            textTransform: "capitalize",
                            display: "inline-block",
                            position: "relative",
                            "&:hover": {
                              backgroundColor: "#dc143c",
                              cursor: "pointer",
                            },
                          }}
                        >
                          Add City
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                ))} */}
            </form>
          </Box>

          {/* Add City  */}
          <></>
        </Box>
      </>
    </ClickAwayListener>
  );
};

export default Multicity;
