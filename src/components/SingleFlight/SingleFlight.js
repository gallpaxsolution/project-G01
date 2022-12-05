import React, { useState } from "react";
import { Box, Button, Grid, Tab, Tabs, Container } from "@mui/material";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import CircleIcon from "@mui/icons-material/Circle";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import seat from "../../images/Icon/seat.svg";
import bag from "../../images/Icon/bag.svg";
import { useNavigate } from "react-router-dom";
import toimg from "../../images/Icon/to.svg";
import { TabContext, TabPanel } from "@material-ui/lab";
import FlightIcon from "@mui/icons-material/Flight";
import commaNumber from "comma-number";
import secureLocalStorage from "react-secure-storage";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { format } from "date-fns";
import "./SingleFlight.css";

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "crimson",
    maxWidth: 220,
    fontSize: "5px",
    borderRadius: "8px 0px 8px 0px",
  },
}));

const SingleFlight = ({
  flightData,
  adultCount,
  childCount,
  infant,
  to,
  from,
  tripType,
  fromAddress,
  toAddress,
  dDate,
  agentFarePrice,
  setAgentFarePrice,
  commisionFarePrice,
  setCommisionFarePrice,
  customerFare,
  setCustomerFare,
}) => {
  const [value, setValue] = useState("1");
  const [flightDetails, setFlightDetails] = useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const clientPrice = parseInt(
    flightData.system !== "Galileo" ? flightData.clientPrice : flightData.price
  );
  // const percentRate = parseInt(commissionData.defaultCommissionRate) / 100;
  const clientFare = Math.round(clientPrice);
  const agentFare = Math.round(
    parseInt(
      flightData.system !== "Galileo" ? flightData.price : flightData.BasePrice
    )
  );
  const commission = Math.round(clientFare - agentFare);

  const navigate = useNavigate();
  const FlightInformation = () => {
    flightData?.system === "Sabre"
      ? navigate("/flightinformation", {
          state: {
            flightData,
            adultCount,
            childCount,
            infant,
            to,
            from,
            tripType,
            fromAddress,
            toAddress,
            dDate,
            clientFare,
            agentFare,
            commission,
          },
        })
      : flightData.system === "Galileo"
      ? navigate("/flightinformation", {
          state: {
            flightData,
            adultCount,
            childCount,
            infant,
            to,
            from,
            tripType,
            fromAddress,
            toAddress,
            dDate,
            clientFare,
            agentFare,
            commission,
          },
        })
      : navigate("/flightinformation", {
          state: {
            flightData,
            adultCount,
            childCount,
            infant,
            to,
            from,
            tripType,
            fromAddress,
            toAddress,
            dDate,
            clientFare,
            agentFare,
            commission,
          },
        });
  };

  let calParcent = (num, percentage) => {
    const result = num * (percentage / 100);
    return parseFloat(result.toFixed(0));
  };
  let percntVal = calParcent(parseInt(flightData.price), 7);

  const offerPrice = parseInt(flightData.price) + parseInt(percntVal);
  const paxCount = adultCount + childCount + infant;
  let count = [];
  for (let i = 0; i < paxCount; i++) {
    count.push(i);
  }

  // ----   --------Copy form ALL.js end----------
  return (
    <Box mb={2.5}>
      {/* ---------For tab and mobile Start --------- */}
      <Box
        className="flight-filter1"
        sx={{
          display: { xs: "block", sm: "none", md: "none" },
          transition: "all .5s ease-in-out",
          boxShadow:
            "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
        }}
      >
        <Grid container px={2} py={1} justifyContent={"space-between"}>
          <Grid md={6} width="50%">
            <Box>
              <Typography
                sx={{
                  color: "#000",
                  fontWeight: 500,
                  fontSize: "15px",
                }}
              >
                {flightData?.departure}
                <span> - </span>
                {flightData?.departureTime.length > 5
                  ? `${
                      new Date(flightData?.departureTime)
                        .toTimeString()
                        ?.split(":")[0]
                    }:${
                      new Date(flightData?.departureTime)
                        .toTimeString()
                        ?.split(":")[1]
                    }`
                  : `${flightData?.departureTime?.split(":")[0]}:${
                      flightData?.departureTime?.split(":")[1]
                    }`}
              </Typography>
              <Typography
                sx={{
                  color: "#003566",
                  fontWeight: 600,
                  fontSize: "12px",
                }}
              >
                {flightData?.segments[0]?.departureLocation}
              </Typography>
              <Typography
                sx={{
                  color: "#6c757d",
                  fontWeight: 500,
                  fontSize: "12px",
                }}
              >
                {flightData?.departureDate}
              </Typography>
            </Box>
          </Grid>

          <Grid md={6}>
            <Box textAlign={"end"}>
              <Typography
                sx={{
                  color: "#000",
                  fontWeight: 500,
                  fontSize: "15px",
                }}
              >
                {flightData?.arrival}
                <span> - </span>
                {flightData?.arrivalTime > 5
                  ? `${
                      new Date(flightData?.arrivalTime)
                        .toTimeString()
                        ?.split(":")[0]
                    }:${
                      new Date(flightData?.arrivalTime)
                        .toTimeString()
                        ?.split(":")[1]
                    }`
                  : `${flightData?.arrivalTime?.split(":")[0]}:${
                      flightData?.arrivalTime?.split(":")[1]
                    }`}
              </Typography>
              {flightData?.segment === "3" ? (
                <Typography
                  sx={{
                    color: "#003566",
                    fontWeight: 600,
                    fontSize: "12px",
                  }}
                >
                  {flightData?.segments[2]?.arrivalLocation}
                </Typography>
              ) : flightData?.segment === "2" ? (
                <Typography
                  sx={{
                    color: "#003566",
                    fontWeight: 600,
                    fontSize: "12px",
                  }}
                >
                  {flightData?.segments[1]?.arrivalLocation}
                </Typography>
              ) : (
                <Typography
                  sx={{
                    color: "#003566",
                    fontWeight: 600,
                    fontSize: "12px",
                  }}
                >
                  {flightData?.segments[0]?.arrivalLocation}
                </Typography>
              )}

              <Typography
                sx={{
                  color: "#6c757d",
                  fontWeight: 500,
                  fontSize: "12px",
                }}
              >
                {flightData?.arrivalDate}
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container px={2} py={1}>
          <Grid sm={6} width="50%">
            <Box>
              <Typography
                sx={{
                  color: "#DC143C",
                  fontWeight: 500,
                  fontSize: "14px",
                }}
              >
                {flightData?.segments[0]?.marketingcareerName}
              </Typography>

              <Typography
                sx={{
                  color: "#003566",
                  fontWeight: 500,
                  fontSize: "12px",
                }}
              >
                {flightData?.segments[0]?.marketingcareer}&nbsp;
                {flightData?.segments[0]?.marketingflight}
              </Typography>
            </Box>
            <Box>
              {flightData?.segment === "3" ? (
                <Box>
                  <Grid container justifyContent="left">
                    <Typography
                      sx={{
                        color: "#003566",
                        fontWeight: 500,
                        fontSize: "12px",
                      }}
                    >
                      {flightData?.flightduration}&nbsp;|&nbsp;
                    </Typography>
                    <Typography
                      sx={{
                        color: "#DC143C",
                        fontWeight: 500,
                        fontSize: "12px",
                      }}
                    >
                      Two Stops
                    </Typography>
                  </Grid>
                </Box>
              ) : flightData?.segment === "2" ? (
                <Box>
                  <Grid container justifyContent="left">
                    <Typography
                      sx={{
                        color: "#003566",
                        fontWeight: 500,
                        fontSize: "12px",
                      }}
                    >
                      {flightData?.flightduration}&nbsp;|&nbsp;
                    </Typography>
                    <Typography
                      sx={{
                        color: "#DC143C",
                        fontWeight: 500,
                        fontSize: "12px",
                      }}
                    >
                      One Stops
                    </Typography>
                  </Grid>
                </Box>
              ) : (
                <Box>
                  <Grid container justifyContent="left">
                    <Typography
                      sx={{
                        color: "#003566",
                        fontWeight: 500,
                        fontSize: "12px",
                      }}
                    >
                      {flightData?.flightduration}&nbsp;|&nbsp;
                    </Typography>
                    <Typography
                      sx={{
                        color: "#DC143C",
                        fontWeight: 500,
                        fontSize: "12px",
                      }}
                    >
                      Non Stops
                    </Typography>
                  </Grid>
                </Box>
              )}
            </Box>
          </Grid>
          <Grid sm={6} width="50%">
            <Box>
              <Typography>
                {flightData?.segment === "3" ? (
                  <Box>
                    <Grid container justifyContent="center">
                      <Typography
                        sx={{
                          color: "#003566",
                          fontWeight: 500,
                          fontSize: "12px",
                        }}
                      >
                        {flightData?.segments[0].flightduration} |{" "}
                        {flightData?.segments[1].flightduration} |{" "}
                        {flightData?.segments[2].flightduration}
                      </Typography>
                    </Grid>
                    <Box px={1}>
                      <div className="segment03">
                        <div className="segment-circle">
                          <div className="circle-0">
                            <HtmlTooltip
                              title={
                                <React.Fragment>
                                  <Typography
                                    sx={{ color: "#fff", fontSize: "10px" }}
                                  >
                                    {flightData?.departure}
                                  </Typography>
                                </React.Fragment>
                              }
                              followCursor
                            >
                              <span>
                                <CircleIcon
                                  sx={{
                                    color: "#c7c7c7",
                                    fontSize: "15px",
                                    cursor: "pointer",
                                  }}
                                />
                              </span>
                            </HtmlTooltip>
                          </div>
                          <div className="segment-stop"></div>
                          <div className="segment-stop"></div>
                          <div className="circle-0">
                            <HtmlTooltip
                              title={
                                <React.Fragment>
                                  <Typography
                                    sx={{ color: "#fff", fontSize: "10px" }}
                                  >
                                    {flightData?.arrival}
                                  </Typography>
                                </React.Fragment>
                              }
                              followCursor
                            >
                              <span>
                                <CircleIcon
                                  sx={{
                                    color: "#c7c7c7",
                                    fontSize: "15px",
                                    cursor: "pointer",
                                  }}
                                />
                              </span>
                            </HtmlTooltip>
                          </div>
                        </div>
                        <div className="segment-flight03">
                          <FlightIcon />
                        </div>
                      </div>
                    </Box>
                    <Typography className="arival-seg-3">
                      <HtmlTooltip
                        title={
                          <React.Fragment>
                            <Typography
                              sx={{ color: "#fff", fontSize: "10px" }}
                            >
                              <span style={{ fontSize: "12px" }}>
                                {
                                  flightData?.segments[0]?.arrivalLocation?.split(
                                    ","
                                  )[0]
                                }
                              </span>
                              <br />
                              {flightData?.segments[1]?.marketingcareer}&nbsp;
                              {flightData?.segments[1]?.marketingflight}{" "}
                              <span> | </span>
                              {flightData?.segments[1]?.flightduration}
                            </Typography>
                          </React.Fragment>
                        }
                        followCursor
                      >
                        <Box className="arival-text">
                          {flightData?.segments[0]?.arrival}
                        </Box>
                      </HtmlTooltip>
                      <HtmlTooltip
                        title={
                          <React.Fragment>
                            <Typography
                              sx={{ color: "#fff", fontSize: "10px" }}
                            >
                              <span style={{ fontSize: "12px" }}>
                                {
                                  flightData?.segments[1]?.arrivalLocation?.split(
                                    ","
                                  )[0]
                                }
                              </span>
                              <br />
                              {flightData?.segments[2]?.marketingcareer}&nbsp;
                              {flightData?.segments[2]?.marketingflight}
                              <span> | </span>
                              {flightData?.segments[2]?.flightduration}
                            </Typography>
                          </React.Fragment>
                        }
                        followCursor
                      >
                        <Box className="arival-text">
                          {" "}
                          {flightData?.segments[1]?.arrival}
                        </Box>
                      </HtmlTooltip>
                    </Typography>
                  </Box>
                ) : flightData?.segment === "2" ? (
                  <Box>
                    <Grid container justifyContent="center">
                      {" "}
                      <Typography
                        sx={{
                          color: "#003566",
                          fontWeight: 500,
                          fontSize: {
                            xs: "12px",
                            sm: "10px",
                            md: "12px",
                          },
                        }}
                      >
                        {flightData?.segments[0].flightduration} |{" "}
                        {flightData?.segments[1].flightduration}
                      </Typography>
                    </Grid>
                    <Box px={1}>
                      <div className="segment02">
                        <div className="segment-circle">
                          <div className="circle-0">
                            <HtmlTooltip
                              title={
                                <React.Fragment>
                                  <Typography
                                    sx={{ color: "#fff", fontSize: "10px" }}
                                  >
                                    {flightData?.departure}
                                  </Typography>
                                </React.Fragment>
                              }
                              followCursor
                            >
                              <span>
                                <CircleIcon
                                  sx={{
                                    color: "#c7c7c7",
                                    fontSize: "15px",
                                    cursor: "pointer",
                                  }}
                                />
                              </span>
                            </HtmlTooltip>
                          </div>
                          <div className="segment-stop"></div>
                          <div className="circle-0">
                            <HtmlTooltip
                              title={
                                <React.Fragment>
                                  <Typography
                                    sx={{ color: "#fff", fontSize: "10px" }}
                                  >
                                    {flightData?.arrival}
                                  </Typography>
                                </React.Fragment>
                              }
                              followCursor
                            >
                              <span>
                                <CircleIcon
                                  sx={{
                                    color: "#c7c7c7",
                                    fontSize: "15px",
                                    cursor: "pointer",
                                  }}
                                />
                              </span>
                            </HtmlTooltip>
                          </div>
                        </div>
                        <div className="segment-flight02">
                          <FlightIcon />
                        </div>
                      </div>
                    </Box>
                    <Typography className="arival-seg2">
                      <HtmlTooltip
                        title={
                          <React.Fragment>
                            <Typography
                              sx={{ color: "#fff", fontSize: "10px" }}
                            >
                              <span style={{ fontSize: "12px" }}>
                                {
                                  flightData?.segments[0]?.arrivalLocation?.split(
                                    ","
                                  )[0]
                                }{" "}
                              </span>
                              <br />
                              {flightData?.segments[1]?.marketingcareer}&nbsp;
                              {flightData?.segments[1]?.marketingflight}
                              <span> | </span>
                              {flightData?.segments[1]?.flightduration}
                            </Typography>
                          </React.Fragment>
                        }
                        followCursor
                      >
                        <Box className="arival-text2">
                          {flightData?.segments[0]?.arrival}
                        </Box>
                      </HtmlTooltip>
                    </Typography>
                  </Box>
                ) : (
                  <Box>
                    <Grid container justifyContent="center">
                      {" "}
                      <Typography
                        sx={{
                          color: "#003566",
                          fontWeight: 500,
                          fontSize: "12px",
                        }}
                      >
                        {flightData?.segments[0].flightduration}
                      </Typography>
                    </Grid>
                    <Box px={1}>
                      <div className="segment-1">
                        <div className="segment-circle">
                          <div className="circle-0">
                            <HtmlTooltip
                              title={
                                <React.Fragment>
                                  <Typography
                                    sx={{ color: "#fff", fontSize: "10px" }}
                                  >
                                    {flightData?.departure}
                                  </Typography>
                                </React.Fragment>
                              }
                              followCursor
                            >
                              <span>
                                <CircleIcon
                                  sx={{
                                    color: "#c7c7c7",
                                    fontSize: "15px",
                                    cursor: "pointer",
                                  }}
                                />
                              </span>
                            </HtmlTooltip>
                          </div>
                          <div className="circle-0">
                            <HtmlTooltip
                              title={
                                <React.Fragment>
                                  <Typography
                                    sx={{ color: "#fff", fontSize: "10px" }}
                                  >
                                    {flightData?.arrival}
                                  </Typography>
                                </React.Fragment>
                              }
                              followCursor
                            >
                              <span>
                                <CircleIcon
                                  sx={{
                                    color: "#c7c7c7",
                                    fontSize: "15px",
                                    cursor: "pointer",
                                  }}
                                />
                              </span>
                            </HtmlTooltip>
                          </div>
                        </div>
                        <div className="segment-flight1">
                          <FlightIcon />
                        </div>
                      </div>
                    </Box>
                  </Box>
                )}
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container pt={1} px={2} justifyContent={"space-between"}>
          <Grid sm={6}>
            <Grid container columnGap={4}>
              <Grid sm={3}>
                {flightData.system === "Sabre" ? (
                  <Typography
                    sx={{
                      color: "#000",
                      fontWeight: 500,
                      fontSize: "14px",
                    }}
                  >
                    {flightData?.class}
                  </Typography>
                ) : flightData.system === "Galileo" ? (
                  <Typography
                    sx={{
                      color: "#000",
                      fontWeight: 500,
                      fontSize: "12px",
                    }}
                  >
                    {flightData?.class}
                  </Typography>
                ) : (
                  <Typography
                    sx={{
                      color: "#000",
                      fontWeight: 500,
                      fontSize: "12px",
                    }}
                  >
                    Economy
                  </Typography>
                )}
              </Grid>

              <Grid sm={3}>
                {(() => {
                  if (flightData?.refundable === "Refundable") {
                    return (
                      <Typography
                        sx={{
                          color: "green",
                          fontWeight: 500,
                          fontSize: "12px",
                        }}
                      >
                        {flightData?.refundable}
                      </Typography>
                    );
                  } else if (flightData?.refundable === "Nonrefundable") {
                    return (
                      <Typography
                        sx={{
                          color: "#DC143C",
                          fontWeight: 500,
                          fontSize: "12px",
                        }}
                      >
                        Non Refundable
                      </Typography>
                    );
                  }
                })()}
              </Grid>
            </Grid>
          </Grid>
          <Grid sm={6}>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "16px",
                color: "#003566",
              }}
            >
              {customerFare && <>CF {commaNumber(clientFare)} &#2547;</>}
            </Typography>
          </Grid>
        </Grid>
        <Grid container px={2} pb={"5px"} justifyContent={"space-between"}>
          <Grid>
            <Grid container columnGap={4}>
              <Grid sm={3}>
                <Box className="img-text-bag-0">
                  <img src={bag} alt="seat" width="100%" />
                  &nbsp;
                  <Typography
                    sx={{
                      color: "#000",
                      fontWeight: 500,
                      fontSize: "12px",
                    }}
                  >
                    {flightData?.bags === "3" ||
                    flightData?.bags === "2" ||
                    flightData?.bags === "1" ? (
                      <>{flightData?.bags?.split(" ")[0]} Piece</>
                    ) : flightData?.bags === " " ? (
                      <>0 Kg</>
                    ) : (
                      <>{flightData?.bags?.slice(0, 2) || 0} Kg</>
                    )}
                  </Typography>
                </Box>
              </Grid>
              <Grid sm={3}>
                <Box className="img-text-0">
                  <img src={seat} alt="bag" width="100%" />
                  &nbsp;
                  <Typography
                    sx={{
                      color: "#000",
                      fontWeight: 500,
                      fontSize: "12px",
                    }}
                  >
                    {flightData?.seat || 9} Seat
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid sm={6}>
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: "12px",
                color: "crimson",
                textAlign: "end",
              }}
            >
              {agentFarePrice && (
                <>
                  AF {commaNumber(agentFare)}
                  &#2547;
                </>
              )}
              <br />
              {commisionFarePrice && <>CM {commaNumber(commission)}</>}
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent={"space-between"}
          className="btn0"
          px={2}
          pt={1}
          pb={1.5}
        >
          <Button
            sx={{
              color: "var(--secondary-color)",
              fontWeight: 500,
              textTransform: "capitalize",
              fontSize: {
                xs: "12px",
              },
            }}
            onClick={() => setFlightDetails(!flightDetails)}
          >
            {!flightDetails ? (
              <Typography>
                Show Details <ArrowDropDownIcon />
              </Typography>
            ) : (
              <Typography>
                Hide Details <ArrowDropUpIcon />
              </Typography>
            )}
          </Button>
          <Button
            className="shine-effect"
            sx={{
              color: "#fff",
              fontWeight: 600,
              bgcolor: "#DC143C",
              borderRadius: "0px",
              mt: { xs: "5px" },
              p: {
                xs: "5px 20px",
              },
              fontSize: "12px",
            }}
            disabled={flightData?.system === "Galileo" ? true : false}
            onClick={FlightInformation}
          >
            BOOK NOW
          </Button>
        </Grid>
        <Box margin="auto">
          {flightDetails && (
            <Box
              className="accordion-cursor flight-search-accordion flight-details-btn"
              Accordion
              style={{ boxShadow: "none" }}
            >
              <Container maxWidth="xxl">
                <Box className="accordion-border"></Box>
              </Container>

              <Box className="accordian-center">
                <Box
                  className="tab-list-width"
                  sx={{
                    maxWidth: { xs: 300, sm: 400, md: 700, lg: 800, xl: 900 },
                    bgcolor: "background.paper",
                  }}
                >
                  <TabContext value={value}>
                    <Tabs
                      className="tablist-btn"
                      value={value}
                      onChange={handleChange}
                      variant="scrollable"
                      scrollButtons
                      allowScrollButtonsMobile
                      aria-label="scrollable force tabs example"
                      sx={{
                        minHeight: "0px",
                        height: "35px",
                        padding: "0px",
                        margin: "0px",
                        fontSize: "10px",
                        "@media screen and (max-width: 320px)": {
                          minHeight: "0px",
                          height: "25px",
                          fontSize: "10px",
                        },
                      }}
                    >
                      <Tab
                        sx={{
                          margin: "auto",
                          minHeight: "0px",
                          height: "35px",
                          "@media screen and (max-width: 320px)": {
                            minHeight: "10px",
                            height: "10px",
                            fontSize: "10px",
                            color: "#9dccfb !important",
                          },
                        }}
                        className="tabList"
                        label="Flight Details"
                        value="1"
                      />
                      <Tab
                        sx={{
                          margin: "auto",
                          minHeight: "0px",
                          height: "35px",
                          "@media screen and (max-width: 320px)": {
                            minHeight: "10px",
                            height: "10px",
                            fontSize: "10px",
                            color: "#9dccfb !important",
                          },
                        }}
                        className="tabList"
                        label="Fare Summery"
                        value="2"
                      />
                      {/* <Tab
                          sx={{
                            margin: "auto",
                            minHeight: "0px",
                            height: "35px",
                            "@media screen and (max-width: 320px)": {
                              minHeight: "10px",
                              height: "10px",
                              fontSize: "10px",
                              color: "#9dccfb !important",
                            },
                          }}
                          className="tabList"
                          label="Price Breakdown"
                          value="3"
                        /> */}
                      <Tab
                        sx={{
                          margin: "auto",
                          minHeight: "0px",
                          height: "35px",
                          "@media screen and (max-width: 320px)": {
                            minHeight: "10px",
                            height: "10px",
                            fontSize: "10px",
                            color: "#9dccfb !important",
                          },
                        }}
                        className="tabList"
                        label="Commission & Invoice"
                        value="3"
                      />
                      <Tab
                        sx={{
                          margin: "auto",
                          minHeight: "0px",
                          height: "35px",
                          "@media screen and (max-width: 320px)": {
                            minHeight: "10px",
                            height: "10px",
                            fontSize: "10px",
                            color: "#9dccfb !important",
                          },
                        }}
                        className="tabList"
                        label="refund"
                        value="5"
                      />
                      <Tab
                        sx={{
                          margin: "auto",
                          minHeight: "0px",
                          height: "35px",
                          "@media screen and (max-width: 320px)": {
                            minHeight: "10px",
                            height: "10px",
                            fontSize: "10px",
                            color: "#9dccfb !important",
                          },
                        }}
                        className="tabList"
                        label="reissue"
                        value="4"
                      />
                      <Tab
                        sx={{
                          margin: "auto",
                          minHeight: "0px",
                          height: "35px",
                          "@media screen and (max-width: 320px)": {
                            minHeight: "10px",
                            height: "10px",
                            fontSize: "10px",
                            color: "#9dccfb !important",
                          },
                        }}
                        className="tabList"
                        label="Baggage"
                        value="7"
                      />
                    </Tabs>

                    <TabPanel className="tabs-details" value="1">
                      {flightData?.segment === "3" ? (
                        // 3  segment data show here
                        <Box className="segment-2">
                          <Box
                            display="flex"
                            justifyContent={"center"}
                            alignItems="center"
                            pt={1}
                            gap={2}
                          >
                            <Typography
                              sx={{
                                fontSize: "16px",
                                color: "#003566",
                                fontWeight: 600,
                              }}
                            >
                              {
                                flightData?.segments[0]?.departureLocation?.split(
                                  ","
                                )[0]
                              }
                            </Typography>
                            <img src={toimg} alt="to" />
                            <Typography
                              sx={{
                                fontSize: "16px",
                                color: "#003566",
                                fontWeight: 600,
                              }}
                            >
                              {
                                flightData?.segments[2]?.arrivalLocation?.split(
                                  ","
                                )[0]
                              }
                            </Typography>
                          </Box>
                          <Box className="single-flight-parent">
                            <Grid
                              className="single-flight-details"
                              sx={{
                                justifyContent: "space-between",
                                alignItems: "flex-start",
                              }}
                              container
                              spacing={{ xs: 0, md: 3 }}
                              columns={{ xs: 4, sm: 8, md: 12 }}
                            >
                              <Grid
                                sx={{
                                  display: "flex",
                                  alignItems: "flex-start",
                                }}
                                item
                                xs={2}
                                sm={3}
                                md={4.5}
                                className="flight-content-gap"
                              >
                                <Box>
                                  {" "}
                                  <img
                                    src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${flightData?.segments[0]?.marketingcareer}.png`}
                                    alt={`${flightData?.segments[0]?.marketingcareer}`}
                                  />
                                </Box>

                                <Box className="flight-content-detail">
                                  <h4>Departure From</h4>
                                  <h5>
                                    {flightData?.segments[0]?.departureAirport}
                                  </h5>
                                  <h5>
                                    {flightData?.segments[0]?.departureLocation}
                                  </h5>
                                  <h5>
                                    {/* {flightData?.segments[0]?.departureTime} */}
                                    {format(
                                      new Date(
                                        flightData?.segments[0]?.departureTime.toString()
                                      ),
                                      "dd MMM yyyy hh:mm a"
                                    )}
                                  </h5>
                                </Box>
                              </Grid>

                              <Grid item xs={2} sm={2} md={3}>
                                <Box className="flight-content-detail">
                                  <h4>Arrival To</h4>
                                  <h5>
                                    {flightData?.segments[0]?.arrivalAirport}
                                  </h5>
                                  <h5>
                                    {flightData?.segments[0]?.arrivalLocation}
                                  </h5>
                                  <h5>
                                    {/* {flightData?.segments[0]?.arrivalTime} */}
                                    {format(
                                      new Date(
                                        flightData?.segments[0]?.arrivalTime.toString()
                                      ),
                                      "dd MMM yyyy hh:mm a"
                                    )}
                                  </h5>
                                </Box>
                              </Grid>
                              <Grid item xs={3} sm={2} md={3}>
                                <Box className="flight-content-detail">
                                  <h4>Duration</h4>
                                  <h5>
                                    {flightData?.segments[0]?.flightduration}
                                  </h5>
                                  <Grid container>
                                    <Grid item>
                                      <h5 style={{ color: "tomato" }}>
                                        {
                                          flightData?.segments[0]
                                            ?.marketingcareer
                                        }
                                        {
                                          flightData?.segments[0]
                                            ?.marketingflight
                                        }
                                      </h5>
                                    </Grid>
                                    <Grid item>
                                      <h5>
                                        &nbsp;Class:{" "}
                                        {flightData?.segments[0]?.bookingcode}
                                        <span
                                          style={{
                                            color: "crimson",
                                            fontSize: "15px",
                                          }}
                                        >
                                          {" | "}
                                        </span>
                                        <span>
                                          Seat:{" "}
                                          {flightData?.segments[0]?.seat || 9}
                                        </span>
                                      </h5>
                                      <h5>
                                        Baggage:{" "}
                                        {flightData?.bags === "3" ||
                                        flightData?.bags === "2" ||
                                        flightData?.bags === "1" ? (
                                          <>
                                            {flightData?.bags?.split(" ")[0]}{" "}
                                            Piece
                                          </>
                                        ) : flightData?.bags === " " ? (
                                          <>0 Kg</>
                                        ) : (
                                          <>
                                            {flightData?.bags?.slice(0, 2) || 0}{" "}
                                            Kg
                                          </>
                                        )}
                                      </h5>
                                    </Grid>
                                  </Grid>
                                </Box>
                              </Grid>
                            </Grid>
                          </Box>

                          <Box className="border-content">
                            <span>
                              Transit Time<>: </>
                              {flightData?.transit?.transit1}{" "}
                            </span>
                          </Box>

                          <Box className="single-flight-parent">
                            <Grid
                              className="single-flight-details"
                              sx={{
                                justifyContent: "space-between",
                                alignItems: "flex-start",
                              }}
                              container
                              spacing={{ xs: 0, md: 3 }}
                              columns={{ xs: 4, sm: 8, md: 12 }}
                            >
                              <Grid
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                                item
                                xs={2}
                                sm={3}
                                md={4.5}
                              >
                                <Box>
                                  {" "}
                                  <img
                                    src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${flightData?.segments[1]?.marketingcareer}.png`}
                                    alt={`${flightData?.segments[1]?.marketingcareer}`}
                                  />
                                </Box>
                                <Box className="flight-content-detail">
                                  <h4>Departure From</h4>
                                  <h5>
                                    {flightData?.segments[1]?.departureAirport}
                                  </h5>
                                  <h5>
                                    {flightData?.segments[1]?.departureLocation}
                                  </h5>
                                  <h5>
                                    {/* {flightData?.segments[1]?.departureTime} */}
                                    {format(
                                      new Date(
                                        flightData?.segments[1]?.departureTime.toString()
                                      ),
                                      "dd MMM yyyy hh:mm a"
                                    )}
                                  </h5>
                                </Box>
                              </Grid>
                              <Grid item xs={2} sm={2} md={3}>
                                <Box className="flight-content-detail">
                                  <h4>Arrival To</h4>
                                  <h5>
                                    {flightData?.segments[1]?.arrivalAirport}
                                  </h5>
                                  <h5>
                                    {flightData?.segments[1]?.arrivalLocation}
                                  </h5>
                                  <h5>
                                    {/* {" "}
                                      {flightData?.segments[1]?.arrivalTime} */}
                                    {format(
                                      new Date(
                                        flightData?.segments[1]?.arrivalTime.toString()
                                      ),
                                      "dd MMM yyyy hh:mm a"
                                    )}
                                  </h5>
                                </Box>
                              </Grid>
                              <Grid item xs={3} sm={2} md={3}>
                                <Box className="flight-content-detail">
                                  <h4>Duration</h4>
                                  <h5>
                                    {flightData?.segments[1]?.flightduration}
                                  </h5>
                                  <Grid container>
                                    <Grid>
                                      <h5 style={{ color: "tomato" }}>
                                        {
                                          flightData?.segments[1]
                                            ?.marketingcareer
                                        }
                                        {
                                          flightData?.segments[1]
                                            ?.marketingflight
                                        }
                                      </h5>
                                    </Grid>
                                    <Grid>
                                      <h5>
                                        &nbsp;Class:{" "}
                                        {flightData?.segments[1]?.bookingcode}
                                        <span
                                          style={{
                                            color: "crimson",
                                            fontSize: "15px",
                                          }}
                                        >
                                          {" | "}
                                        </span>
                                        <span>
                                          Seat:{" "}
                                          {flightData?.segments[1]?.seat || 9}
                                        </span>
                                      </h5>
                                      <h5>
                                        Baggage:{" "}
                                        {flightData?.bags === "3" ||
                                        flightData?.bags === "2" ||
                                        flightData?.bags === "1" ? (
                                          <>
                                            {flightData?.bags?.split(" ")[0]}{" "}
                                            Piece
                                          </>
                                        ) : flightData?.bags === " " ? (
                                          <>0 Kg</>
                                        ) : (
                                          <>
                                            {flightData?.bags?.slice(0, 2) || 0}{" "}
                                            Kg
                                          </>
                                        )}
                                      </h5>
                                    </Grid>
                                  </Grid>
                                </Box>
                              </Grid>
                            </Grid>
                          </Box>
                          <Box className="border-content">
                            <span>
                              Transit Time<>: </>
                              {flightData?.transit.transit2}{" "}
                            </span>
                          </Box>
                          <Box className="single-flight-parent">
                            <Grid
                              className="single-flight-details"
                              sx={{
                                justifyContent: "space-between",
                                alignItems: "flex-start",
                              }}
                              container
                              spacing={{ xs: 0, md: 3 }}
                              columns={{ xs: 4, sm: 8, md: 12 }}
                            >
                              <Grid
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                                item
                                xs={2}
                                sm={3}
                                md={4.5}
                              >
                                <Box>
                                  {" "}
                                  <img
                                    src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${flightData?.segments[2]?.marketingcareer}.png`}
                                    alt={`${flightData?.segments[2]?.marketingcareer}`}
                                  />
                                </Box>
                                <Box className="flight-content-detail">
                                  <h4>Departure From</h4>
                                  <h5>
                                    {flightData?.segments[2]?.departureAirport}
                                  </h5>
                                  <h5>
                                    {flightData?.segments[2]?.departureLocation}
                                  </h5>
                                  <h5>
                                    {/* {flightData?.segments[2]?.departureTime} */}
                                    {format(
                                      new Date(
                                        flightData?.segments[2]?.departureTime.toString()
                                      ),
                                      "dd MMM yyyy hh:mm a"
                                    )}
                                  </h5>
                                </Box>
                              </Grid>
                              <Grid item xs={2} sm={2} md={3}>
                                <Box className="flight-content-detail">
                                  <h4>Arrival To</h4>
                                  <h5>
                                    {flightData?.segments[2]?.arrivalAirport}
                                  </h5>
                                  <h5>
                                    {flightData?.segments[2]?.arrivalLocation}
                                  </h5>
                                  <h5>
                                    {" "}
                                    {/* {flightData?.segments[2]?.arrivalTime} */}
                                    {format(
                                      new Date(
                                        flightData?.segments[2]?.arrivalTime.toString()
                                      ),
                                      "dd MMM yyyy hh:mm a"
                                    )}
                                  </h5>
                                </Box>
                              </Grid>
                              <Grid item xs={3} sm={2} md={3}>
                                <Box className="flight-content-detail">
                                  <h4>Duration</h4>
                                  <h5>
                                    {flightData?.segments[2]?.flightduration}
                                  </h5>
                                  <Grid container>
                                    <Grid>
                                      <h5 style={{ color: "tomato" }}>
                                        {
                                          flightData?.segments[2]
                                            ?.marketingcareer
                                        }
                                        {
                                          flightData?.segments[2]
                                            ?.marketingflight
                                        }
                                      </h5>
                                    </Grid>
                                    <Grid>
                                      <h5>
                                        &nbsp;Class:{" "}
                                        {flightData?.segments[2]?.bookingcode}
                                        <span
                                          style={{
                                            color: "crimson",
                                            fontSize: "15px",
                                          }}
                                        >
                                          {" | "}
                                        </span>
                                        <span>
                                          Seat:{" "}
                                          {flightData?.segments[2]?.seat || 9}
                                        </span>
                                      </h5>
                                      <h5>
                                        Baggage:{" "}
                                        {flightData?.bags === "3" ||
                                        flightData?.bags === "2" ||
                                        flightData?.bags === "1" ? (
                                          <>
                                            {flightData?.bags?.split(" ")[0]}{" "}
                                            Piece
                                          </>
                                        ) : flightData?.bags === " " ? (
                                          <>0 Kg</>
                                        ) : (
                                          <>
                                            {flightData?.bags?.slice(0, 2) || 0}{" "}
                                            Kg
                                          </>
                                        )}
                                      </h5>
                                    </Grid>
                                  </Grid>
                                </Box>
                              </Grid>
                            </Grid>
                          </Box>
                        </Box>
                      ) : flightData?.segment === "2" ? (
                        <Box className="segment-2">
                          <Box
                            display="flex"
                            justifyContent={"center"}
                            alignItems="center"
                            pt={1}
                            gap={2}
                          >
                            <Typography
                              sx={{
                                fontSize: "16px",
                                color: "#003566",
                                fontWeight: 600,
                              }}
                            >
                              {
                                flightData?.segments[0]?.departureLocation?.split(
                                  ","
                                )[0]
                              }
                            </Typography>
                            <img src={toimg} alt="to" />
                            <Typography
                              sx={{
                                fontSize: "16px",
                                color: "#003566",
                                fontWeight: 600,
                              }}
                            >
                              {
                                flightData?.segments[1]?.arrivalLocation?.split(
                                  ","
                                )[0]
                              }
                            </Typography>
                          </Box>
                          <Box className="single-flight-parent">
                            <Grid
                              className="single-flight-details"
                              sx={{
                                justifyContent: "space-between",
                                alignItems: "flex-start",
                              }}
                              container
                              spacing={{ xs: 0, md: 3 }}
                              columns={{ xs: 4, sm: 8, md: 12 }}
                            >
                              <Grid
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                                item
                                xs={2}
                                sm={3}
                                md={4.5}
                              >
                                <Box>
                                  {" "}
                                  <img
                                    src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${flightData?.segments[0]?.marketingcareer}.png`}
                                    alt={`${flightData?.segments[0]?.marketingcareer}`}
                                  />
                                </Box>
                                <Box className="flight-content-detail">
                                  <h4>Departure From</h4>
                                  <h5>
                                    {flightData?.segments[0]?.departureAirport}
                                  </h5>
                                  <h5>
                                    {flightData?.segments[0]?.departureLocation}
                                  </h5>
                                  <h5>
                                    {/* {flightData?.segments[0]?.departureTime} */}
                                    {format(
                                      new Date(
                                        flightData?.segments[0]?.departureTime.toString()
                                      ),
                                      "dd MMM yyyy hh:mm a"
                                    )}
                                  </h5>
                                </Box>
                              </Grid>
                              <Grid item xs={2} sm={2} md={3}>
                                <Box className="flight-content-detail">
                                  <h4>Arrival To</h4>
                                  <h5>
                                    {flightData?.segments[0]?.arrivalAirport}
                                  </h5>
                                  <h5>
                                    {flightData?.segments[0]?.arrivalLocation}
                                  </h5>
                                  <h5>
                                    {" "}
                                    {/* {flightData?.segments[0]?.arrivalTime} */}
                                    {format(
                                      new Date(
                                        flightData?.segments[0]?.arrivalTime.toString()
                                      ),
                                      "dd MMM yyyy hh:mm a"
                                    )}
                                  </h5>
                                </Box>
                              </Grid>
                              <Grid item xs={3} sm={2} md={3}>
                                <Box className="flight-content-detail">
                                  <h4>Duration</h4>
                                  <h5>
                                    {flightData?.segments[0]?.flightduration}
                                  </h5>
                                  <Grid container>
                                    <Grid>
                                      <h5 style={{ color: "tomato" }}>
                                        {
                                          flightData?.segments[0]
                                            ?.marketingcareer
                                        }
                                        {
                                          flightData?.segments[0]
                                            ?.marketingflight
                                        }
                                      </h5>
                                    </Grid>
                                    <Grid>
                                      <h5>
                                        &nbsp;Class:{" "}
                                        {flightData?.segments[0]?.bookingcode}
                                        <span
                                          style={{
                                            color: "crimson",
                                            fontSize: "15px",
                                          }}
                                        >
                                          {" | "}
                                        </span>
                                        <span>
                                          Seat:{" "}
                                          {flightData?.segments[0]?.seat || 9}
                                        </span>
                                      </h5>
                                      <h5>
                                        Baggage:{" "}
                                        {flightData?.bags === "3" ||
                                        flightData?.bags === "2" ||
                                        flightData?.bags === "1" ? (
                                          <>
                                            {flightData?.bags?.split(" ")[0]}{" "}
                                            Piece
                                          </>
                                        ) : flightData?.bags === " " ? (
                                          <>0 Kg</>
                                        ) : (
                                          <>
                                            {flightData?.bags?.slice(0, 2) || 0}{" "}
                                            Kg
                                          </>
                                        )}
                                      </h5>
                                    </Grid>
                                  </Grid>
                                </Box>
                              </Grid>
                            </Grid>
                          </Box>

                          <Box className="border-content">
                            <span>
                              Transit Time<>: </>
                              {flightData?.transit?.transit
                                ? flightData?.transit?.transit
                                : flightData?.transit?.transit1}{" "}
                            </span>
                          </Box>

                          <Box className="single-flight-parent">
                            <Grid
                              className="single-flight-details"
                              sx={{
                                justifyContent: "space-between",
                                alignItems: "flex-start",
                              }}
                              container
                              spacing={{ xs: 0, md: 3 }}
                              columns={{ xs: 4, sm: 8, md: 12 }}
                            >
                              <Grid
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                                item
                                xs={2}
                                sm={3}
                                md={4.5}
                              >
                                <Box>
                                  {" "}
                                  <img
                                    src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${flightData?.segments[1]?.marketingcareer}.png`}
                                    alt={`${flightData?.segments[1]?.marketingcareer}`}
                                  />
                                </Box>
                                <Box className="flight-content-detail">
                                  <h4>Departure From</h4>
                                  <h5>
                                    {flightData?.segments[1]?.departureAirport}
                                  </h5>
                                  <h5>
                                    {flightData?.segments[1]?.departureLocation}
                                  </h5>
                                  <h5>
                                    {/* {flightData?.segments[1]?.departureTime} */}
                                    {format(
                                      new Date(
                                        flightData?.segments[1]?.departureTime.toString()
                                      ),
                                      "dd MMM yyyy hh:mm a"
                                    )}
                                  </h5>
                                </Box>
                              </Grid>
                              <Grid item xs={2} sm={2} md={3}>
                                <Box className="flight-content-detail">
                                  <h4>Arrival To</h4>
                                  <h5>
                                    {flightData?.segments[1]?.arrivalAirport}
                                  </h5>
                                  <h5>
                                    {flightData?.segments[1]?.arrivalLocation}
                                  </h5>
                                  <h5>
                                    {" "}
                                    {/* {flightData?.segments[1]?.arrivalTime} */}
                                    {format(
                                      new Date(
                                        flightData?.segments[1]?.arrivalTime.toString()
                                      ),
                                      "dd MMM yyyy hh:mm a"
                                    )}
                                  </h5>
                                </Box>
                              </Grid>
                              <Grid item xs={3} sm={2} md={3}>
                                <Box className="flight-content-detail">
                                  <h4>Duration</h4>
                                  <h5>
                                    {flightData?.segments[1]?.flightduration}
                                  </h5>
                                  <Grid container>
                                    <Grid>
                                      <h5 style={{ color: "tomato" }}>
                                        {
                                          flightData?.segments[1]
                                            ?.marketingcareer
                                        }
                                        {
                                          flightData?.segments[1]
                                            ?.marketingflight
                                        }
                                      </h5>
                                    </Grid>
                                    <Grid>
                                      <h5>
                                        &nbsp;Class:{" "}
                                        {flightData?.segments[1]?.bookingcode}
                                        <span
                                          style={{
                                            color: "crimson",
                                            fontSize: "15px",
                                          }}
                                        >
                                          {" | "}
                                        </span>
                                        <span>
                                          Seat:{" "}
                                          {flightData?.segments[1]?.seat || 9}
                                        </span>
                                      </h5>
                                      <h5>
                                        Baggage:{" "}
                                        {flightData?.bags === "3" ||
                                        flightData?.bags === "2" ||
                                        flightData?.bags === "1" ? (
                                          <>
                                            {flightData?.bags?.split(" ")[0]}{" "}
                                            Piece
                                          </>
                                        ) : flightData?.bags === " " ? (
                                          <>0 Kg</>
                                        ) : (
                                          <>
                                            {flightData?.bags?.slice(0, 2) || 0}{" "}
                                            Kg
                                          </>
                                        )}
                                      </h5>
                                    </Grid>
                                  </Grid>
                                </Box>
                              </Grid>
                            </Grid>
                          </Box>
                        </Box>
                      ) : (
                        <Box className="segment-2">
                          <Box
                            display="flex"
                            justifyContent={"center"}
                            alignItems="center"
                            pt={1}
                            gap={2}
                          >
                            <Typography
                              sx={{
                                fontSize: "16px",
                                color: "#003566",
                                fontWeight: 600,
                              }}
                            >
                              {
                                flightData?.segments[0]?.departureLocation?.split(
                                  ","
                                )[0]
                              }
                            </Typography>
                            <img src={toimg} alt="to" />
                            <Typography
                              sx={{
                                fontSize: "16px",
                                color: "#003566",
                                fontWeight: 600,
                              }}
                            >
                              {
                                flightData?.segments[0]?.arrivalLocation?.split(
                                  ","
                                )[0]
                              }
                            </Typography>
                          </Box>
                          <Box className="single-flight-parent">
                            <Grid
                              className="single-flight-details"
                              sx={{
                                justifyContent: "space-between",
                                alignItems: "flex-start",
                              }}
                              container
                              spacing={{ xs: 0, md: 3 }}
                              columns={{ xs: 4, sm: 8, md: 12 }}
                            >
                              <Grid
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                                item
                                xs={2}
                                sm={3}
                                md={4.5}
                              >
                                <Box>
                                  {" "}
                                  <img
                                    src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${flightData?.segments[0]?.marketingcareer}.png`}
                                    alt={`${flightData?.segments[0]?.marketingcareer}`}
                                  />
                                </Box>
                                <Box className="flight-content-detail">
                                  <h4>Departure From</h4>
                                  <h5>
                                    {flightData?.segments[0]?.departureAirport}
                                  </h5>
                                  <h5>
                                    {flightData?.segments[0]?.departureLocation}
                                  </h5>
                                  <h5>
                                    {/* {flightData?.segments[0]?.departureTime} */}
                                    {format(
                                      new Date(
                                        flightData?.segments[0]?.departureTime.toString()
                                      ),
                                      "dd MMM yyyy hh:mm a"
                                    )}
                                  </h5>
                                </Box>
                              </Grid>
                              <Grid item xs={2} sm={2} md={3}>
                                <Box className="flight-content-detail">
                                  <h4>Arrival To</h4>
                                  <h5>
                                    {flightData?.segments[0]?.arrivalAirport}
                                  </h5>
                                  <h5>
                                    {flightData?.segments[0]?.arrivalLocation}
                                  </h5>
                                  <h5>
                                    {" "}
                                    {/* {flightData?.segments[0]?.arrivalTime} */}
                                    {format(
                                      new Date(
                                        flightData?.segments[0]?.arrivalTime.toString()
                                      ),
                                      "dd MMM yyyy hh:mm a"
                                    )}
                                  </h5>
                                </Box>
                              </Grid>
                              <Grid item xs={3} sm={2} md={3}>
                                <Box className="flight-content-detail">
                                  <h4>Duration</h4>
                                  <h5>
                                    {flightData?.segments[0]?.flightduration}
                                  </h5>
                                  <Grid container>
                                    <Grid>
                                      <h5 style={{ color: "tomato" }}>
                                        {
                                          flightData?.segments[1]
                                            ?.marketingcareer
                                        }
                                        {
                                          flightData?.segments[1]
                                            ?.marketingflight
                                        }
                                      </h5>
                                    </Grid>
                                    <Grid>
                                      <h5>
                                        &nbsp;Class:{" "}
                                        {flightData?.segments[1]?.bookingcode}
                                        <span
                                          style={{
                                            color: "crimson",
                                            fontSize: "15px",
                                          }}
                                        >
                                          {" | "}
                                        </span>
                                        <span>
                                          Seat:{" "}
                                          {flightData?.segments[1]?.seat || 9}
                                        </span>
                                      </h5>
                                      <h5>
                                        Baggage:{" "}
                                        {flightData?.bags === "3" ||
                                        flightData?.bags === "2" ||
                                        flightData?.bags === "1" ? (
                                          <>
                                            {flightData?.bags?.split(" ")[0]}{" "}
                                            Piece
                                          </>
                                        ) : flightData?.bags === " " ? (
                                          <>0 Kg</>
                                        ) : (
                                          <>
                                            {flightData?.bags?.slice(0, 2) || 0}{" "}
                                            Kg
                                          </>
                                        )}
                                      </h5>
                                    </Grid>
                                  </Grid>
                                </Box>
                              </Grid>
                            </Grid>
                          </Box>
                        </Box>
                      )}
                    </TabPanel>

                    <TabPanel value="2" className="tab-class">
                      <Box className="tab-table" sx={{ m: "5px 0px" }}>
                        <Box className="flight-search-table">
                          <table>
                            <tr>
                              <th>Pax Type</th>
                              <th>Base Fare</th>
                              <th>Tax</th>
                              <th>Total</th>
                              <th>Pax Count</th>
                              <th>Service Fee</th>
                              <th>Sub Total</th>
                            </tr>

                            <tr>
                              <td>Adult</td>
                              <td>{flightData?.pricebreakdown[0]?.BaseFare}</td>
                              <td>{flightData?.pricebreakdown[0]?.Tax}</td>
                              <td>
                                {parseInt(
                                  flightData?.pricebreakdown[0]?.BaseFare
                                ) +
                                  parseInt(flightData?.pricebreakdown[0]?.Tax)}
                              </td>
                              <td>{flightData?.pricebreakdown[0]?.PaxCount}</td>

                              <td>
                                {flightData?.pricebreakdown[0]?.ServiceFee}
                              </td>
                              <td>
                                {(parseInt(
                                  flightData?.pricebreakdown[0]?.BaseFare
                                ) +
                                  parseInt(flightData?.pricebreakdown[0]?.Tax) +
                                  parseInt(
                                    flightData?.pricebreakdown[0]?.ServiceFee
                                  )) *
                                  flightData?.pricebreakdown[0]?.PaxCount}
                              </td>
                            </tr>
                            {childCount > 0 && (
                              <tr>
                                <td>Child</td>
                                <td>
                                  {flightData?.pricebreakdown[1]?.BaseFare}
                                </td>
                                <td>{flightData?.pricebreakdown[1]?.Tax}</td>
                                <td>
                                  {parseInt(
                                    flightData?.pricebreakdown[1]?.BaseFare
                                  ) +
                                    parseInt(
                                      flightData?.pricebreakdown[1]?.Tax
                                    )}
                                </td>
                                <td>
                                  {flightData?.pricebreakdown[1]?.PaxCount}
                                </td>

                                <td>
                                  {flightData?.pricebreakdown[1]?.ServiceFee}
                                </td>
                                <td>
                                  {(parseInt(
                                    flightData?.pricebreakdown[1]?.BaseFare
                                  ) +
                                    parseInt(
                                      flightData?.pricebreakdown[1]?.Tax
                                    ) +
                                    parseInt(
                                      flightData?.pricebreakdown[1]?.ServiceFee
                                    )) *
                                    flightData?.pricebreakdown[1]?.PaxCount}
                                </td>
                              </tr>
                            )}
                            {infant > 0 && (
                              <tr>
                                <td>Infant</td>
                                <td>
                                  {flightData?.pricebreakdown[2]?.BaseFare}
                                </td>
                                <td>{flightData?.pricebreakdown[2]?.Tax}</td>
                                <td>
                                  {parseInt(
                                    flightData?.pricebreakdown[2]?.BaseFare
                                  ) +
                                    parseInt(
                                      flightData?.pricebreakdown[2]?.Tax
                                    )}
                                </td>
                                <td>
                                  {flightData?.pricebreakdown[2]?.PaxCount}
                                </td>

                                <td>
                                  {flightData?.pricebreakdown[2]?.ServiceFee}
                                </td>
                                <td>
                                  {(parseInt(
                                    flightData?.pricebreakdown[2]?.BaseFare
                                  ) +
                                    parseInt(
                                      flightData?.pricebreakdown[2]?.Tax
                                    ) +
                                    parseInt(
                                      flightData?.pricebreakdown[2]?.ServiceFee
                                    )) *
                                    flightData?.pricebreakdown[2]?.PaxCount}
                                </td>
                              </tr>
                            )}
                          </table>
                        </Box>
                      </Box>
                    </TabPanel>

                    {/*  price break down accordion start here */}

                    <TabPanel value="3" className="tab-class">
                      <Box className="tab-table" sx={{ m: "5px 0px" }}>
                        <Box className="flight-search-table">
                          <table>
                            <tr>
                              <th>Customer Invoice</th>
                              <th>Commission</th>
                              <th>Agent Invoice</th>
                              <th>Profit Amount</th>
                            </tr>

                            <tr>
                              <td>{clientFare}</td>
                              <td>7%</td>
                              <td>{agentFare}</td>
                              <td>{commission}</td>
                            </tr>
                          </table>
                        </Box>
                      </Box>
                    </TabPanel>

                    {/*  price break down accordion start here */}

                    <TabPanel value="4" className="cancelation-1">
                      <Grid
                        className="cancellation-content"
                        container
                        columns={{ xs: 4, sm: 8, md: 12 }}
                      >
                        <Grid item xs={4} sm={4} md={6}>
                          <Typography variant="h4">Time Frame </Typography>
                          <Typography variant="h4">
                            (From Scheduled flight Departure)
                          </Typography>
                        </Grid>

                        <Grid item xs={4} sm={4} md={6}>
                          <Typography variant="h4">
                            Airline Fee + Flyfarint Fee{" "}
                          </Typography>
                          <Typography variant="h4">(Per Passenger)</Typography>
                        </Grid>
                      </Grid>

                      <Grid
                        className=" cancellation-content-cus "
                        container
                        columns={{ xs: 4, sm: 8, md: 12 }}
                      >
                        <Grid item xs={4} sm={4} md={6}>
                          <Typography variant="h4">
                            0 hours to 72 hours
                          </Typography>
                        </Grid>

                        <Grid item xs={4} sm={4} md={6}>
                          <Typography variant="h4">
                            Adult : Airline Policy + 200 BDT
                          </Typography>
                        </Grid>
                      </Grid>

                      <Grid
                        className=" cancellation-content-cus2  "
                        container
                        columns={{ xs: 4, sm: 8, md: 12 }}
                      >
                        <Grid item xs={4} sm={4} md={6}>
                          <Typography variant="h4">
                            72 hours to 335 hours
                          </Typography>
                        </Grid>

                        <Grid item xs={4} sm={4} md={6}>
                          <Typography variant="h4">
                            Adult : Airline Policy + 200 BDT
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid
                        className="cancellation-content"
                        container
                        columns={{ xs: 4, sm: 8, md: 12 }}
                      >
                        <Grid item xs={4} sm={4} md={6}>
                          <Typography variant="h4">Time Frame </Typography>
                          <Typography variant="h4">
                            (From Scheduled flight Departure)
                          </Typography>
                        </Grid>

                        <Grid item xs={4} sm={4} md={6}>
                          <Typography variant="h4">
                            Airline Fee + Flyfarint Fee{" "}
                          </Typography>
                          <Typography variant="h4">(Per Passenger)</Typography>
                        </Grid>
                      </Grid>

                      <Grid
                        className="cancellation-content-cus3 "
                        container
                        columns={{ xs: 4, sm: 8, md: 12 }}
                      >
                        <Grid item xs={4} sm={4} md={6}>
                          <Typography variant="h4">
                            All Flight Departure
                          </Typography>
                        </Grid>

                        <Grid item xs={4} sm={4} md={6}>
                          <Typography variant="h4">
                            Adult : Airline Policy + No-Show Charge + 200 BDT
                          </Typography>
                        </Grid>
                      </Grid>

                      <Box className="warning-box">
                        <Typography fontSize={"12px"} className="alert">
                          *Important: This destination may have COVID-19 travel
                          restriction in place, including specific restriction
                          for loading. Check any nation,local and health
                          advisories for this destination before you book.
                        </Typography>
                      </Box>
                    </TabPanel>

                    <TabPanel value="4" className="cancelation-1">
                      <Grid
                        className="cancellation-content "
                        container
                        columns={{ xs: 4, sm: 8, md: 12 }}
                      >
                        <Grid item xs={4} sm={4} md={6}>
                          <Typography variant="h4">Time Frame </Typography>
                          <Typography variant="h4">
                            (From Scheduled flight Departure)
                          </Typography>
                        </Grid>

                        <Grid item xs={4} sm={4} md={6}>
                          <Typography variant="h4">
                            Airline Fee + Flyfarint Fee{" "}
                          </Typography>
                          <Typography variant="h4">(Per Passenger)</Typography>
                        </Grid>
                      </Grid>

                      <Grid
                        className=" cancellation-content-cus "
                        container
                        columns={{ xs: 4, sm: 8, md: 12 }}
                      >
                        <Grid item xs={4} sm={4} md={6}>
                          <Typography variant="h4">
                            0 hours to 72 hours
                          </Typography>
                        </Grid>

                        <Grid item xs={4} sm={4} md={6}>
                          <Typography variant="h4">
                            Adult : Airline Policy + 200 BDT
                          </Typography>
                        </Grid>
                      </Grid>

                      <Grid
                        className=" cancellation-content-cus2"
                        container
                        columns={{ xs: 4, sm: 8, md: 12 }}
                      >
                        <Grid item xs={4} sm={4} md={6}>
                          <Typography variant="h4">
                            72 hours to 335 hours
                          </Typography>
                        </Grid>

                        <Grid item xs={4} sm={4} md={6}>
                          <Typography variant="h4">
                            Adult : Airline Policy + 200 BDT
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid
                        className="cancellation-content"
                        container
                        columns={{ xs: 4, sm: 8, md: 12 }}
                      >
                        <Grid item xs={4} sm={4} md={6}>
                          <Typography variant="h4">Time Frame </Typography>
                          <Typography variant="h4">
                            (From Scheduled flight Departure)
                          </Typography>
                        </Grid>

                        <Grid item xs={4} sm={4} md={6}>
                          <Typography variant="h4">
                            Airline Fee + Flyfarint Fee{" "}
                          </Typography>
                          <Typography variant="h4">(Per Passenger)</Typography>
                        </Grid>
                      </Grid>

                      <Grid
                        className="cancellation-content-cus3"
                        container
                        columns={{ xs: 4, sm: 8, md: 12 }}
                      >
                        <Grid item xs={4} sm={4} md={6}>
                          <Typography variant="h4">
                            All Flight Departure
                          </Typography>
                        </Grid>

                        <Grid item xs={4} sm={4} md={6}>
                          <Typography variant="h4">
                            Adult : Airline Policy + No-Show Charge + 200 BDT
                          </Typography>
                        </Grid>
                      </Grid>

                      <Box className="warning-box">
                        <Typography fontSize={"12px"} className="alert">
                          *Important: This destination may have COVID-19 travel
                          restriction in place, including specific restriction
                          for loading. Check any nation,local and health
                          advisories for this destination before you book.
                        </Typography>
                      </Box>
                    </TabPanel>
                    <TabPanel value="5" className="cancelation-1">
                      <Grid
                        className="cancellation-content "
                        container
                        columns={{ xs: 4, sm: 8, md: 12 }}
                      >
                        <Grid item xs={4} sm={4} md={6}>
                          <Typography variant="h4">Time Frame </Typography>
                          <Typography variant="h4">
                            (From Scheduled flight Departure)
                          </Typography>
                        </Grid>

                        <Grid item xs={4} sm={4} md={6}>
                          <Typography variant="h4">
                            Airline Fee + Flyfarint Fee{" "}
                          </Typography>
                          <Typography variant="h4">(Per Passenger)</Typography>
                        </Grid>
                      </Grid>

                      <Grid
                        className=" cancellation-content-cus "
                        container
                        columns={{ xs: 4, sm: 8, md: 12 }}
                      >
                        <Grid item xs={4} sm={4} md={6}>
                          <Typography variant="h4">
                            0 hours to 72 hours
                          </Typography>
                        </Grid>

                        <Grid item xs={4} sm={4} md={6}>
                          <Typography variant="h4">
                            Adult : Airline Policy + 200 BDT
                          </Typography>
                        </Grid>
                      </Grid>

                      <Grid
                        className=" cancellation-content-cus2"
                        container
                        columns={{ xs: 4, sm: 8, md: 12 }}
                      >
                        <Grid item xs={4} sm={4} md={6}>
                          <Typography variant="h4">
                            72 hours to 335 hours
                          </Typography>
                        </Grid>

                        <Grid item xs={4} sm={4} md={6}>
                          <Typography variant="h4">
                            Adult : Airline Policy + 200 BDT
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid
                        className="cancellation-content"
                        container
                        columns={{ xs: 4, sm: 8, md: 12 }}
                      >
                        <Grid item xs={4} sm={4} md={6}>
                          <Typography variant="h4">Time Frame </Typography>
                          <Typography variant="h4">
                            (From Scheduled flight Departure)
                          </Typography>
                        </Grid>

                        <Grid item xs={4} sm={4} md={6}>
                          <Typography variant="h4">
                            Airline Fee + Flyfarint Fee{" "}
                          </Typography>
                          <Typography variant="h4">(Per Passenger)</Typography>
                        </Grid>
                      </Grid>

                      <Grid
                        className="cancellation-content-cus3"
                        container
                        columns={{ xs: 4, sm: 8, md: 12 }}
                      >
                        <Grid item xs={4} sm={4} md={6}>
                          <Typography variant="h4">
                            All Flight Departure
                          </Typography>
                        </Grid>

                        <Grid item xs={4} sm={4} md={6}>
                          <Typography variant="h4">
                            Adult : Airline Policy + No-Show Charge + 200 BDT
                          </Typography>
                        </Grid>
                      </Grid>

                      <Box className="warning-box">
                        <Typography fontSize={"12px"} className="alert">
                          *Important: This destination may have COVID-19 travel
                          restriction in place, including specific restriction
                          for loading. Check any nation,local and health
                          advisories for this destination before you book.
                        </Typography>
                      </Box>
                    </TabPanel>

                    <TabPanel value="6" className="tab-class">
                      <Box className="tab-table" sx={{ m: "5px 0px" }}>
                        <Box className="flight-search-table">
                          <table>
                            <tr>
                              <th>Flight</th>
                              <th>Cabin</th>
                              <th>Check-In</th>
                            </tr>

                            <tr>
                              <td>
                                {to}-{from}
                              </td>
                              <td>
                                {flightData.system === "Sabre" ? (
                                  <>Economy</>
                                ) : flightData.system === "FlyHub" ? (
                                  <>Economy</>
                                ) : (
                                  <>{flightData.class}</>
                                )}
                              </td>
                              <td>{adultCount + childCount + infant}</td>
                            </tr>
                          </table>
                        </Box>
                      </Box>
                    </TabPanel>
                    <TabPanel value="7" className="tab-class">
                      <Box className="tab-table" sx={{ m: "5px 0px" }}>
                        <Box className="flight-search-table">
                          <table>
                            <tr>
                              <th>Baggage</th>
                              <th>Check-In</th>
                              <th>Cabin</th>
                            </tr>

                            <tr>
                              <td>Adult</td>
                              <td>
                                {flightData?.bags === "3" ||
                                flightData?.bags === "2" ||
                                flightData?.bags === "1" ? (
                                  <>{flightData?.bags?.split(" ")[0]} Piece</>
                                ) : flightData?.bags === " " ? (
                                  <>0 Kg</>
                                ) : (
                                  <>{flightData?.bags?.slice(0, 2) || 0} Kg</>
                                )}
                              </td>
                              <td>{flightData?.class}</td>
                            </tr>
                            {childCount > 0 && (
                              <tr>
                                <td>Child</td>
                                <td>
                                  {flightData?.bags === "3" ||
                                  flightData?.bags === "2" ||
                                  flightData?.bags === "1" ? (
                                    <>{flightData?.bags?.split(" ")[0]} Piece</>
                                  ) : flightData?.bags === " " ? (
                                    <>0 Kg</>
                                  ) : flightData?.bags.length === 6 ? (
                                    <>
                                      {flightData?.bags?.slice(2, 4) || 0} Kg{" "}
                                    </>
                                  ) : (
                                    <>{flightData?.bags?.slice(0, 2) || 0} Kg</>
                                  )}
                                </td>
                                <td>{flightData?.class}</td>
                              </tr>
                            )}
                            {infant > 0 && (
                              <tr>
                                <td>Infant</td>
                                <td>
                                  {flightData?.bags === "3" ||
                                  flightData?.bags === "2" ||
                                  flightData?.bags === "1" ? (
                                    <>{flightData?.bags?.split(" ")[0]} Piece</>
                                  ) : flightData?.bags === " " ? (
                                    <>0 Kg</>
                                  ) : flightData?.bags.length === 6 ? (
                                    <>
                                      {flightData?.bags?.slice(4, 6) || 0} Kg{" "}
                                    </>
                                  ) : (
                                    <>{flightData?.bags?.slice(0, 2) || 0} Kg</>
                                  )}
                                </td>
                                <td>{flightData?.class}</td>
                              </tr>
                            )}
                          </table>
                        </Box>
                      </Box>
                    </TabPanel>
                  </TabContext>
                </Box>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
      {/* ---------for tab and mobile End --------- */}

      <Grid
        container
        className="flight-filter1"
        sx={{
          display: {
            xs: "none",
            sm: "flex",
            md: "flex",
            transition: "all .5s ease-in-out",
            boxShadow:
              "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
          },
        }}
      >
        <Grid sm={2} md={2.7} padding="15px">
          <Grid
            container
            sx={{
              alignItems: "center",
            }}
          >
            <Grid md={12} lg={12} xl={4}>
              <Box>
                {flightData?.system === "Sabre" ? (
                  <Box style={{ width: "60px", height: "60px" }}>
                    {flightData.segment === "3" ? (
                      <>
                        {flightData.career ===
                          flightData.segments[0]?.marketingcareer &&
                        flightData.career ===
                          flightData.segments[1]?.marketingcareer &&
                        flightData.career ===
                          flightData.segments[2]?.marketingcareer ? (
                          <>
                            <img
                              src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${flightData.career}.png`}
                              className="flight-icon-sab1"
                              alt={`${flightData.career}`}
                            />
                          </>
                        ) : flightData.segments[0]?.marketingcareer !==
                            flightData.segments[1]?.marketingcareer &&
                          flightData.segments[1]?.marketingcareer ===
                            flightData.segments[2]?.marketingcareer ? (
                          <>
                            <Box
                              border={"2px solid red"}
                              borderRadius="50%"
                              width="71px"
                              height="71px"
                              display="flex"
                              flexDirection="column"
                              overflow="hidden"
                              justifyContent="center"
                              alignItems="center"
                              pt="8px"
                              className="round-rotation"
                            >
                              <Box mb="-7px">
                                <img
                                  src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${flightData.segments[0]?.marketingcareer}.png`}
                                  width="30px"
                                  height="30px"
                                  alt={`${flightData.segments[0]?.marketingcareer}`}
                                />
                              </Box>
                              <Box
                                borderBottom={"2px solid #D9D9D9"}
                                width="100%"
                              ></Box>
                              <Box>
                                <img
                                  src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${flightData.segments[1]?.marketingcareer}.png`}
                                  width="30px"
                                  height="30px"
                                  alt={`${flightData.segments[1]?.marketingcareer}`}
                                />
                              </Box>
                            </Box>
                          </>
                        ) : flightData.segments[0]?.marketingcareer ===
                            flightData.segments[1]?.marketingcareer &&
                          flightData.segments[1]?.marketingcareer !==
                            flightData.segments[2]?.marketingcareer ? (
                          <>
                            <Box
                              border={"2px solid red"}
                              borderRadius="50%"
                              width="71px"
                              height="71px"
                              display="flex"
                              flexDirection="column"
                              overflow="hidden"
                              justifyContent="center"
                              alignItems="center"
                              pt="8px"
                              className="round-rotation"
                            >
                              <Box mb="-7px">
                                <img
                                  src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${flightData.segments[0]?.marketingcareer}.png`}
                                  width="30px"
                                  height="30px"
                                  alt={`${flightData.segments[0]?.marketingcareer}`}
                                />
                              </Box>
                              <Box
                                borderBottom={"2px solid #D9D9D9"}
                                width="100%"
                              ></Box>
                              <Box>
                                <img
                                  src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${flightData.segments[2]?.marketingcareer}.png`}
                                  width="30px"
                                  height="30px"
                                  alt={`${flightData.segments[2]?.marketingcareer}`}
                                />
                              </Box>
                            </Box>
                          </>
                        ) : (
                          <>
                            <Box className="mercedes-sape-s">
                              <Box className="first-1"></Box>
                              <Box className="img-first-1">
                                <img
                                  src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${flightData.segments[0]?.marketingcareer}.png`}
                                  width="25px"
                                  height="25px"
                                  alt={`${flightData.segments[0]?.marketingcareer}`}
                                />
                              </Box>
                              <Box className="first-2"></Box>
                              <Box className="img-first-2">
                                <img
                                  src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${flightData.segments[1]?.marketingcareer}.png`}
                                  width="25px"
                                  height="25px"
                                  alt={`${flightData.segments[1]?.marketingcareer}`}
                                />
                              </Box>
                              <Box className="first-3"></Box>
                              <Box className="img-first-3">
                                <img
                                  src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${flightData.segments[2]?.marketingcareer}.png`}
                                  width="25px"
                                  height="25px"
                                  alt={`${flightData.segments[2]?.marketingcareer}`}
                                />
                              </Box>
                            </Box>
                          </>
                        )}
                      </>
                    ) : flightData.segment === "2" ? (
                      <>
                        {flightData.career ===
                          flightData.segments[0]?.marketingcareer &&
                        flightData.career ===
                          flightData.segments[1]?.marketingcareer ? (
                          <>
                            <img
                              src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${flightData.career}.png`}
                              className={`${flightData?.system?.toLowerCase()}`}
                              alt={`${flightData.career}`}
                            />
                          </>
                        ) : (
                          <>
                            <Box
                              border={"2px solid red"}
                              borderRadius="50%"
                              width="71px"
                              height="71px"
                              display="flex"
                              flexDirection="column"
                              overflow="hidden"
                              justifyContent="center"
                              alignItems="center"
                              pt="8px"
                              className="round-rotation"
                            >
                              <Box mb="-7px">
                                <img
                                  src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${flightData.segments[0]?.marketingcareer}.png`}
                                  width="30px"
                                  height="30px"
                                  alt={`${flightData.segments[0]?.marketingcareer}`}
                                />
                              </Box>
                              <Box
                                borderBottom={"2px solid #D9D9D9"}
                                width="100%"
                              ></Box>
                              <Box>
                                <img
                                  src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${flightData.segments[1]?.marketingcareer}.png`}
                                  width="30px"
                                  height="30px"
                                  alt={`${flightData.segments[1]?.marketingcareer}`}
                                />
                              </Box>
                            </Box>
                          </>
                        )}
                      </>
                    ) : (
                      <img
                        src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${flightData.career}.png`}
                        className="flight-icon-sab1"
                        alt={`${flightData.career}`}
                      />
                    )}
                  </Box>
                ) : // --------End sabre------
                flightData.system === "Galileo" ? (
                  <Box style={{ width: "60px" }}>
                    {flightData.segment === "3" ? (
                      <>
                        {flightData.career ===
                          flightData.segments[0]?.marketingcareer &&
                        flightData.career ===
                          flightData.segments[1]?.marketingcareer &&
                        flightData.career ===
                          flightData.segments[2]?.marketingcareer ? (
                          <>
                            <img
                              src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${flightData.career}.png`}
                              className="flight-icon-sab2"
                              alt={`${flightData.career}`}
                            />
                          </>
                        ) : flightData.segments[0]?.marketingcareer !==
                            flightData.segments[1]?.marketingcareer &&
                          flightData.segments[1]?.marketingcareer ===
                            flightData.segments[2]?.marketingcareer ? (
                          <>
                            <Box
                              border={"2px solid #0b8634"}
                              borderRadius="50%"
                              width="71px"
                              height="71px"
                              display="flex"
                              flexDirection="column"
                              overflow="hidden"
                              justifyContent="center"
                              alignItems="center"
                              pt="8px"
                              className="round-rotation"
                            >
                              <Box mb="-7px">
                                <img
                                  src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${flightData.segments[0]?.marketingcareer}.png`}
                                  width="30px"
                                  height="30px"
                                  alt={`${flightData.segments[0]?.marketingcareer}`}
                                />
                              </Box>
                              <Box
                                borderBottom={"2px solid #D9D9D9"}
                                width="100%"
                              ></Box>
                              <Box>
                                <img
                                  src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${flightData.segments[1]?.marketingcareer}.png`}
                                  width="30px"
                                  height="30px"
                                  alt={`${flightData.segments[1]?.marketingcareer}`}
                                />
                              </Box>
                            </Box>
                          </>
                        ) : flightData.segments[0]?.marketingcareer ===
                            flightData.segments[1]?.marketingcareer &&
                          flightData.segments[1]?.marketingcareer !==
                            flightData.segments[2]?.marketingcareer ? (
                          <>
                            <Box
                              border={"2px solid #0b8634"}
                              borderRadius="50%"
                              width="71px"
                              height="71px"
                              display="flex"
                              flexDirection="column"
                              overflow="hidden"
                              justifyContent="center"
                              alignItems="center"
                              pt="8px"
                              className="round-rotation"
                            >
                              <Box mb="-7px">
                                <img
                                  src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${flightData.segments[0]?.marketingcareer}.png`}
                                  width="30px"
                                  height="30px"
                                  alt={`${flightData.segments[0]?.marketingcareer}`}
                                />
                              </Box>
                              <Box
                                borderBottom={"2px solid #D9D9D9"}
                                width="100%"
                              ></Box>
                              <Box>
                                <img
                                  src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${flightData.segments[2]?.marketingcareer}.png`}
                                  width="30px"
                                  height="30px"
                                  alt={`${flightData.segments[2]?.marketingcareer}`}
                                />
                              </Box>
                            </Box>
                          </>
                        ) : (
                          <>
                            <Box className="mercedes-sape-g">
                              <Box className="first-1"></Box>
                              <Box className="img-first-1">
                                <img
                                  src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${flightData.segments[0]?.marketingcareer}.png`}
                                  width="25px"
                                  height="25px"
                                  alt={`${flightData.segments[0]?.marketingcareer}`}
                                />
                              </Box>
                              <Box className="first-2"></Box>
                              <Box className="img-first-2">
                                <img
                                  src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${flightData.segments[1]?.marketingcareer}.png`}
                                  width="25px"
                                  height="25px"
                                  alt={`${flightData.segments[1]?.marketingcareer}`}
                                />
                              </Box>
                              <Box className="first-3"></Box>
                              <Box className="img-first-3">
                                <img
                                  src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${flightData.segments[2]?.marketingcareer}.png`}
                                  width="25px"
                                  height="25px"
                                  alt={`${flightData.segments[2]?.marketingcareer}`}
                                />
                              </Box>
                            </Box>
                          </>
                        )}
                      </>
                    ) : flightData.segment === "2" ? (
                      <>
                        {flightData.career ===
                          flightData.segments[0]?.marketingcareer &&
                        flightData.career ===
                          flightData.segments[1]?.marketingcareer ? (
                          <>
                            <img
                              src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${flightData.career}.png`}
                              className="flight-icon-sab2"
                              alt={`${flightData.career}`}
                            />
                          </>
                        ) : (
                          <>
                            <Box
                              border={"2px solid #0b8634"}
                              borderRadius="50%"
                              width="71px"
                              height="71px"
                              display="flex"
                              flexDirection="column"
                              overflow="hidden"
                              justifyContent="center"
                              alignItems="center"
                              pt="8px"
                              className="round-rotation"
                            >
                              <Box mb="-7px">
                                <img
                                  src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${flightData.segments[0]?.marketingcareer}.png`}
                                  width="30px"
                                  height="30px"
                                  alt={`${flightData.segments[0]?.marketingcareer}`}
                                />
                              </Box>
                              <Box
                                borderBottom={"2px solid #D9D9D9"}
                                width="100%"
                              ></Box>
                              <Box>
                                <img
                                  src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${flightData.segments[1]?.marketingcareer}.png`}
                                  width="30px"
                                  height="30px"
                                  alt={`${flightData.segments[1]?.marketingcareer}`}
                                />
                              </Box>
                            </Box>
                          </>
                        )}
                      </>
                    ) : (
                      <img
                        src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${flightData.career}.png`}
                        className="flight-icon-sab2"
                        alt={`${flightData.career}`}
                      />
                    )}
                  </Box>
                ) : (
                  //todo: flyhub
                  <Box
                    style={{
                      width: "60px",
                    }}
                  >
                    {flightData.segment === "3" ? (
                      <>
                        {flightData.career ===
                          flightData.segments[0]?.marketingcareer &&
                        flightData.career ===
                          flightData.segments[1]?.marketingcareer &&
                        flightData.career ===
                          flightData.segments[2]?.marketingcareer ? (
                          <>
                            <img
                              src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${flightData.career}.png`}
                              className="flight-icon-sab3"
                              alt={`${flightData.career}`}
                            />
                          </>
                        ) : flightData.segments[0]?.marketingcareer !==
                            flightData.segments[1]?.marketingcareer &&
                          flightData.segments[1]?.marketingcareer ===
                            flightData.segments[2]?.marketingcareer ? (
                          <>
                            <Box
                              border={"2px solid #4169e1"}
                              borderRadius="50%"
                              width="71px"
                              height="71px"
                              display="flex"
                              flexDirection="column"
                              overflow="hidden"
                              justifyContent="center"
                              alignItems="center"
                              pt="8px"
                              className="round-rotation"
                            >
                              <Box mb="-7px">
                                <img
                                  src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${flightData.segments[0]?.marketingcareer}.png`}
                                  width="30px"
                                  height="30px"
                                  alt={`${flightData.segments[0]?.marketingcareer}`}
                                />
                              </Box>
                              <Box
                                borderBottom={"2px solid #D9D9D9"}
                                width="100%"
                              ></Box>
                              <Box>
                                <img
                                  src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${flightData.segments[1]?.marketingcareer}.png`}
                                  width="30px"
                                  height="30px"
                                  alt={`${flightData.segments[1]?.marketingcareer}`}
                                />
                              </Box>
                            </Box>
                          </>
                        ) : flightData.segments[0]?.marketingcareer ===
                            flightData.segments[1]?.marketingcareer &&
                          flightData.segments[1]?.marketingcareer !==
                            flightData.segments[2]?.marketingcareer ? (
                          <>
                            <Box
                              border={"2px solid #4169e1"}
                              borderRadius="50%"
                              width="71px"
                              height="71px"
                              display="flex"
                              flexDirection="column"
                              overflow="hidden"
                              justifyContent="center"
                              alignItems="center"
                              pt="8px"
                              className="round-rotation"
                            >
                              <Box mb="-7px">
                                <img
                                  src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${flightData.segments[0]?.marketingcareer}.png`}
                                  width="30px"
                                  height="30px"
                                  alt={`${flightData.segments[0]?.marketingcareer}`}
                                />
                              </Box>
                              <Box
                                borderBottom={"2px solid #D9D9D9"}
                                width="100%"
                              ></Box>
                              <Box>
                                <img
                                  src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${flightData.segments[2]?.marketingcareer}.png`}
                                  width="30px"
                                  height="30px"
                                  alt={`${flightData.segments[2]?.marketingcareer}`}
                                />
                              </Box>
                            </Box>
                          </>
                        ) : (
                          <>
                            <Box className="mercedes-sape-f">
                              <Box className="first-1"></Box>
                              <Box className="img-first-1">
                                <img
                                  src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${flightData.segments[0]?.marketingcareer}.png`}
                                  width="25px"
                                  height="25px"
                                  alt={`${flightData.segments[0]?.marketingcareer}`}
                                />
                              </Box>
                              <Box className="first-2"></Box>
                              <Box className="img-first-2">
                                <img
                                  src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${flightData.segments[1]?.marketingcareer}.png`}
                                  width="25px"
                                  height="25px"
                                  alt={`${flightData.segments[1]?.marketingcareer}`}
                                />
                              </Box>
                              <Box className="first-3"></Box>
                              <Box className="img-first-3">
                                <img
                                  src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${flightData.segments[2]?.marketingcareer}.png`}
                                  width="25px"
                                  height="25px"
                                  alt={`${flightData.segments[2]?.marketingcareer}`}
                                />
                              </Box>
                            </Box>
                          </>
                        )}
                      </>
                    ) : flightData.segment === "2" ? (
                      <>
                        {flightData.career ===
                          flightData.segments[0]?.marketingcareer &&
                        flightData.career ===
                          flightData.segments[1]?.marketingcareer ? (
                          <>
                            <img
                              src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${flightData.career}.png`}
                              className="flight-icon-sab3"
                              alt={`${flightData.career}`}
                            />
                          </>
                        ) : (
                          <>
                            <Box
                              border={"2px solid #4169e1"}
                              borderRadius="50%"
                              width="71px"
                              height="71px"
                              display="flex"
                              flexDirection="column"
                              overflow="hidden"
                              justifyContent="center"
                              alignItems="center"
                              pt="8px"
                              className="round-rotation"
                            >
                              <Box mb="-7px">
                                <img
                                  src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${flightData.segments[0]?.marketingcareer}.png`}
                                  width="30px"
                                  height="30px"
                                  alt={`${flightData.segments[0]?.marketingcareer}`}
                                />
                              </Box>
                              <Box
                                borderBottom={"2px solid #D9D9D9"}
                                width="100%"
                              ></Box>
                              <Box>
                                <img
                                  src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${flightData.segments[1]?.marketingcareer}.png`}
                                  width="30px"
                                  height="30px"
                                  alt={`${flightData.segments[1]?.marketingcareer}`}
                                />
                              </Box>
                            </Box>
                          </>
                        )}
                      </>
                    ) : (
                      <img
                        src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${flightData.career}.png`}
                        className="flight-icon-sab3"
                        alt={`${flightData.career}`}
                      />
                    )}
                  </Box>
                )}
              </Box>
            </Grid>

            {/* <Grid md={12} lg={12} xl={8}>
              <Box pl={1}>
                <Typography
                  sx={{
                    color: "#DC143C",
                    fontWeight: 500,
                    fontSize: {
                      xs: "12px",
                      sm: "10px",
                      md: "14px",
                      lg: "15px",
                    },
                  }}
                >
                  {flightData?.segments[0]?.marketingcareerName}
                </Typography>
                <Typography
                  sx={{
                    color: "#003566",
                    fontWeight: 500,
                    fontSize: {
                      xs: "12px",
                      sm: "10px",
                      md: "12px",
                      lg: "12px",
                    },
                  }}
                >
                  {flightData?.segment === "3" ? (
                    <>
                      {flightData?.segments[0]?.marketingcareer}
                      {flightData?.segments[0]?.marketingflight.length === 5 ? (
                        <>
                          {flightData?.segments[0]?.marketingflight?.slice(
                            2,
                            5
                          )}
                        </>
                      ) : (
                        <>{flightData?.segments[0]?.marketingflight}</>
                      )}
                      <span style={{ color: "crimson", fontSize: "15px" }}>
                        {" | "}
                      </span>
                      {flightData?.segments[1]?.marketingcareer}
                      {flightData?.segments[1]?.marketingflight.length === 5 ? (
                        <>
                          {flightData?.segments[1]?.marketingflight?.slice(
                            2,
                            5
                          )}
                        </>
                      ) : (
                        <>{flightData?.segments[1]?.marketingflight}</>
                      )}
                      <span style={{ color: "crimson", fontSize: "15px" }}>
                        {" | "}
                      </span>
                      <br />
                      {flightData?.segments[2]?.marketingcareer}
                      {flightData?.segments[2]?.marketingflight.length === 5 ? (
                        <>
                          {flightData?.segments[2]?.marketingflight?.slice(
                            2,
                            5
                          )}
                        </>
                      ) : (
                        <>{flightData?.segments[2]?.marketingflight}</>
                      )}
                    </>
                  ) : flightData?.segment === "2" ? (
                    <>
                      {flightData?.segments[0]?.marketingcareer}
                      {flightData?.segments[0]?.marketingflight.length === 5 ? (
                        <>
                          {flightData?.segments[0]?.marketingflight?.slice(
                            2,
                            5
                          )}
                        </>
                      ) : (
                        <>{flightData?.segments[0]?.marketingflight}</>
                      )}
                      <span style={{ color: "crimson", fontSize: "15px" }}>
                        {" | "}
                      </span>
                      {flightData?.segments[1]?.marketingcareer}
                      {flightData?.segments[1]?.marketingflight.length === 5 ? (
                        <>
                          {flightData?.segments[1]?.marketingflight?.slice(
                            2,
                            5
                          )}
                        </>
                      ) : (
                        <>{flightData?.segments[1]?.marketingflight}</>
                      )}
                    </>
                  ) : (
                    <>
                      {flightData?.segments[0]?.marketingcareer}
                      {flightData?.segments[0]?.marketingflight.length === 5 ? (
                        <>
                          {flightData?.segments[0]?.marketingflight?.slice(
                            2,
                            5
                          )}
                        </>
                      ) : (
                        <>{flightData?.segments[0]?.marketingflight}</>
                      )}
                    </>
                  )}
                </Typography>
              </Box>
            </Grid> */}
          </Grid>
          <Box mt={0.5}>
            {flightData?.segment === "3" ? (
              <Box>
                <Grid container justifyContent="left">
                  <Typography
                    sx={{
                      color: "#003566",
                      fontWeight: 500,
                      fontSize: "14px",
                    }}
                  >
                    {flightData?.flightduration}&nbsp;|&nbsp;
                  </Typography>
                  <Typography
                    sx={{
                      color: "#DC143C",
                      fontWeight: 500,
                      fontSize: "14px",
                    }}
                  >
                    Two Stops
                  </Typography>
                </Grid>
              </Box>
            ) : flightData?.segment === "2" ? (
              <Box>
                <Grid container justifyContent="left">
                  <Typography
                    sx={{
                      color: "#003566",
                      fontWeight: 500,
                      fontSize: "14px",
                    }}
                  >
                    {flightData?.flightduration}&nbsp;|&nbsp;
                  </Typography>
                  <Typography
                    sx={{
                      color: "#DC143C",
                      fontWeight: 500,
                      fontSize: "14px",
                    }}
                  >
                    One Stops
                  </Typography>
                </Grid>
              </Box>
            ) : (
              <Box>
                <Grid container justifyContent="left">
                  <Typography
                    sx={{
                      color: "#003566",
                      fontWeight: 500,
                      fontSize: "14px",
                    }}
                  >
                    {flightData?.flightduration}&nbsp;|&nbsp;
                  </Typography>
                  <Typography
                    sx={{
                      color: "#DC143C",
                      fontWeight: 500,
                      fontSize: "14px",
                    }}
                  >
                    Non Stops
                  </Typography>
                </Grid>
              </Box>
            )}
          </Box>
        </Grid>

        <Grid sm={7.5} md={6.8} paddingY="15px">
          <Grid container justifyContent={"space-between"}>
            <Grid md={4}>
              <Box>
                <Typography
                  sx={{
                    color: "#000",
                    fontWeight: 500,
                    fontSize: {
                      xs: "12px",
                      sm: "13px",
                      md: "15px",
                      lg: "16px",
                    },
                  }}
                >
                  {flightData?.departure}
                  <span> - </span>

                  {flightData?.departureTime.length > 5
                    ? `${
                        new Date(flightData?.departureTime)
                          .toTimeString()
                          ?.split(":")[0]
                      }:${
                        new Date(flightData?.departureTime)
                          .toTimeString()
                          ?.split(":")[1]
                      }`
                    : `${flightData?.departureTime?.split(":")[0]}:${
                        flightData?.departureTime?.split(":")[1]
                      }`}
                </Typography>
                <Typography
                  sx={{
                    color: "#003566",
                    fontWeight: 600,
                    fontSize: {
                      xs: "12px",
                      sm: "11px",
                      md: "13px",
                    },
                  }}
                >
                  {flightData?.segments[0]?.departureLocation}
                </Typography>
                <Typography
                  sx={{
                    color: "#6c757d",
                    fontWeight: 500,
                    fontSize: {
                      xs: "12px",
                      sm: "11px",
                      md: "13px",
                    },
                  }}
                >
                  {flightData?.departureDate}
                </Typography>
              </Box>
            </Grid>

            <Grid md={4}>
              <Box textAlign={"center"}>
                <Typography>
                  {/* ---------stops------ */}
                  {flightData?.segment === "3" ? (
                    <Box>
                      <Grid container justifyContent="center">
                        <Typography
                          sx={{
                            color: "#003566",
                            fontWeight: 500,
                            fontSize: {
                              xs: "12px",
                              sm: "10px",
                              md: "12px",
                            },
                          }}
                        >
                          {flightData?.segments[0].flightduration} |{" "}
                          {flightData?.segments[1].flightduration} |{" "}
                          {flightData?.segments[2].flightduration}
                        </Typography>
                      </Grid>
                      <Box px={1}>
                        <div className="segment03">
                          <div className="segment-circle">
                            <div className="circle-0">
                              <HtmlTooltip
                                title={
                                  <React.Fragment>
                                    <Typography
                                      sx={{ color: "#fff", fontSize: "10px" }}
                                    >
                                      {flightData?.departure}
                                    </Typography>
                                  </React.Fragment>
                                }
                                followCursor
                              >
                                <span>
                                  <CircleIcon
                                    sx={{
                                      color: "#c7c7c7",
                                      fontSize: "15px",
                                      cursor: "pointer",
                                    }}
                                  />
                                </span>
                              </HtmlTooltip>
                            </div>
                            <div className="segment-stop"></div>
                            <div className="segment-stop"></div>
                            <div className="circle-0">
                              <HtmlTooltip
                                title={
                                  <React.Fragment>
                                    <Typography
                                      sx={{ color: "#fff", fontSize: "10px" }}
                                    >
                                      {flightData?.arrival}
                                    </Typography>
                                  </React.Fragment>
                                }
                                followCursor
                              >
                                <span>
                                  <CircleIcon
                                    sx={{
                                      color: "#c7c7c7",
                                      fontSize: "15px",
                                      cursor: "pointer",
                                    }}
                                  />
                                </span>
                              </HtmlTooltip>
                            </div>
                          </div>
                          <div className="segment-flight03">
                            <FlightIcon />
                          </div>
                        </div>
                      </Box>
                      <Typography className="arival-seg-3">
                        <HtmlTooltip
                          title={
                            <React.Fragment>
                              <Typography
                                sx={{ color: "#fff", fontSize: "10px" }}
                              >
                                <span style={{ fontSize: "12px" }}>
                                  {
                                    flightData?.segments[0]?.arrivalLocation?.split(
                                      ","
                                    )[0]
                                  }
                                </span>
                                <br />
                                {flightData?.segments[1]?.marketingcareer}
                                &nbsp;
                                {flightData?.segments[1]?.marketingflight}{" "}
                                <span> | </span>
                                {flightData?.transit.transit1}
                              </Typography>
                            </React.Fragment>
                          }
                          followCursor
                        >
                          <Box className="arival-text">
                            {flightData?.segments[0]?.arrival}
                          </Box>
                        </HtmlTooltip>
                        <HtmlTooltip
                          title={
                            <React.Fragment>
                              <Typography
                                sx={{ color: "#fff", fontSize: "10px" }}
                              >
                                <span style={{ fontSize: "12px" }}>
                                  {
                                    flightData?.segments[1]?.arrivalLocation?.split(
                                      ","
                                    )[0]
                                  }
                                </span>
                                <br />
                                {flightData?.segments[2]?.marketingcareer}
                                &nbsp;
                                {flightData?.segments[2]?.marketingflight}
                                <span> | </span>
                                {flightData?.transit.transit2}
                              </Typography>
                            </React.Fragment>
                          }
                          followCursor
                        >
                          <Box className="arival-text">
                            {" "}
                            {flightData?.segments[1]?.arrival}
                          </Box>
                        </HtmlTooltip>
                      </Typography>
                    </Box>
                  ) : flightData?.segment === "2" ? (
                    <Box>
                      <Grid container justifyContent="center">
                        {" "}
                        <Typography
                          sx={{
                            color: "#003566",
                            fontWeight: 500,
                            fontSize: {
                              xs: "12px",
                              sm: "10px",
                              md: "12px",
                            },
                          }}
                        >
                          {flightData?.segments[0].flightduration} |{" "}
                          {flightData?.segments[1].flightduration}
                        </Typography>
                      </Grid>
                      <Box px={1}>
                        <div className="segment02">
                          <div className="segment-circle">
                            <div className="circle-0">
                              <HtmlTooltip
                                title={
                                  <React.Fragment>
                                    <Typography
                                      sx={{ color: "#fff", fontSize: "10px" }}
                                    >
                                      {flightData?.departure}
                                    </Typography>
                                  </React.Fragment>
                                }
                                followCursor
                              >
                                <span>
                                  <CircleIcon
                                    sx={{
                                      color: "#c7c7c7",
                                      fontSize: "15px",
                                      cursor: "pointer",
                                    }}
                                  />
                                </span>
                              </HtmlTooltip>
                            </div>
                            <div className="segment-stop"></div>
                            <div className="circle-0">
                              <HtmlTooltip
                                title={
                                  <React.Fragment>
                                    <Typography
                                      sx={{ color: "#fff", fontSize: "10px" }}
                                    >
                                      {flightData?.arrival}
                                    </Typography>
                                  </React.Fragment>
                                }
                                followCursor
                              >
                                <span>
                                  <CircleIcon
                                    sx={{
                                      color: "#c7c7c7",
                                      fontSize: "15px",
                                      cursor: "pointer",
                                    }}
                                  />
                                </span>
                              </HtmlTooltip>
                            </div>
                          </div>
                          <div className="segment-flight02">
                            <FlightIcon />
                          </div>
                        </div>
                      </Box>
                      <Typography className="arival-seg2">
                        <HtmlTooltip
                          title={
                            <React.Fragment>
                              <Typography
                                sx={{ color: "#fff", fontSize: "10px" }}
                              >
                                <span style={{ fontSize: "12px" }}>
                                  {
                                    flightData?.segments[0]?.arrivalLocation?.split(
                                      ","
                                    )[0]
                                  }{" "}
                                </span>
                                <br />
                                {flightData?.segments[1]?.marketingcareer}
                                &nbsp;
                                {flightData?.segments[1]?.marketingflight}
                                <span> | </span>
                                {flightData?.transit.transit1}
                              </Typography>
                            </React.Fragment>
                          }
                          followCursor
                        >
                          <Box className="arival-text2">
                            {flightData?.segments[0]?.arrival}
                          </Box>
                        </HtmlTooltip>
                      </Typography>
                    </Box>
                  ) : (
                    <Box>
                      <Grid container justifyContent="center">
                        {" "}
                        <Typography
                          sx={{
                            color: "#003566",
                            fontWeight: 500,
                            fontSize: {
                              xs: "12px",
                              sm: "10px",
                              md: "12px",
                            },
                          }}
                        >
                          {flightData?.segments[0].flightduration}
                        </Typography>
                        {/* <Typography
                            sx={{
                              color: "#DC143C",
                              fontWeight: 500,
                              fontSize: {
                                xs: "12px",
                                sm: "10px",
                                md: "12px",
                              },
                            }}
                          >
                            Non Stops
                          </Typography> */}
                      </Grid>
                      <Box px={1}>
                        <div className="segment-1">
                          <div className="segment-circle">
                            <div className="circle-0">
                              <HtmlTooltip
                                title={
                                  <React.Fragment>
                                    <Typography
                                      sx={{ color: "#fff", fontSize: "10px" }}
                                    >
                                      {flightData?.departure}
                                    </Typography>
                                  </React.Fragment>
                                }
                                followCursor
                              >
                                <span>
                                  <CircleIcon
                                    sx={{
                                      color: "#c7c7c7",
                                      fontSize: "15px",
                                      cursor: "pointer",
                                    }}
                                  />
                                </span>
                              </HtmlTooltip>
                            </div>
                            <div className="circle-0">
                              <HtmlTooltip
                                title={
                                  <React.Fragment>
                                    <Typography
                                      sx={{ color: "#fff", fontSize: "10px" }}
                                    >
                                      {flightData?.arrival}
                                    </Typography>
                                  </React.Fragment>
                                }
                                followCursor
                              >
                                <span>
                                  <CircleIcon
                                    sx={{
                                      color: "#c7c7c7",
                                      fontSize: "15px",
                                      cursor: "pointer",
                                    }}
                                  />
                                </span>
                              </HtmlTooltip>
                            </div>
                          </div>
                          <div className="segment-flight1">
                            <FlightIcon />
                          </div>
                        </div>
                      </Box>
                    </Box>
                  )}
                </Typography>
              </Box>
            </Grid>

            <Grid md={4}>
              <Box textAlign={"end"}>
                <Typography
                  sx={{
                    color: "#000",
                    fontWeight: 500,
                    fontSize: {
                      xs: "12px",
                      sm: "13px",
                      md: "15px",
                      lg: "16px",
                    },
                  }}
                >
                  {flightData?.arrival}
                  <span> - </span>
                  {flightData?.arrivalTime.length > 5
                    ? `${
                        new Date(flightData?.arrivalTime)
                          .toTimeString()
                          ?.split(":")[0]
                      }:${
                        new Date(flightData?.arrivalTime)
                          .toTimeString()
                          ?.split(":")[1]
                      }`
                    : `${flightData?.arrivalTime?.split(":")[0]}:${
                        flightData?.arrivalTime?.split(":")[1]
                      }`}
                </Typography>
                {flightData?.segment === "3" ? (
                  <Typography
                    sx={{
                      color: "#003566",
                      fontWeight: 600,
                      fontSize: {
                        xs: "12px",
                        sm: "11px",
                        md: "13px",
                      },
                    }}
                  >
                    {flightData?.segments[2]?.arrivalLocation}
                  </Typography>
                ) : flightData?.segment === "2" ? (
                  <Typography
                    sx={{
                      color: "#003566",
                      fontWeight: 600,
                      fontSize: {
                        xs: "12px",
                        sm: "11px",
                        md: "13px",
                      },
                    }}
                  >
                    {flightData?.segments[1]?.arrivalLocation}
                  </Typography>
                ) : (
                  <Typography
                    sx={{
                      color: "#003566",
                      fontWeight: 600,
                      fontSize: {
                        xs: "12px",
                        sm: "11px",
                        md: "13px",
                      },
                    }}
                  >
                    {flightData?.segments[0]?.arrivalLocation}
                  </Typography>
                )}

                <Typography
                  sx={{
                    color: "#6c757d",
                    fontWeight: 500,
                    fontSize: {
                      xs: "12px",
                      sm: "11px",
                      md: "13px",
                    },
                  }}
                >
                  {flightData?.arrivalDate}
                </Typography>
              </Box>
            </Grid>
          </Grid>
          {/* <Grid container justifyContent={"space-between"} pt={3}>
            <Grid md={3}>
              {flightData.system === "Sabre" ? (
                <Typography
                  sx={{
                    color: "#000",
                    fontWeight: 500,
                    fontSize: {
                      xs: "14px",
                      sm: "14px",
                      md: "14px",
                      lg: "16px",
                    },
                  }}
                >
                  {flightData?.class}
                </Typography>
              ) : flightData.system === "Galileo" ? (
                <Typography
                  sx={{
                    color: "#000",
                    fontWeight: 500,
                    fontSize: {
                      xs: "12px",
                      sm: "12px",
                      md: "14px",
                      lg: "16px",
                    },
                  }}
                >
                  {flightData?.class}
                </Typography>
              ) : (
                <Typography
                  sx={{
                    color: "#000",
                    fontWeight: 500,
                    fontSize: {
                      xs: "12px",
                      sm: "12px",
                      md: "14px",
                      lg: "16px",
                    },
                  }}
                >
                  Economy
                </Typography>
              )}
            </Grid>
            <Grid md={4}>
              {(() => {
                if (flightData?.refundable === "Refundable") {
                  return (
                    <Typography
                      sx={{
                        color: "green",
                        fontWeight: 500,
                        fontSize: {
                          xs: "14px",
                          sm: "12px",
                          md: "14px",
                          lg: "16px",
                        },
                      }}
                    >
                      {flightData?.refundable}
                    </Typography>
                  );
                } else if (flightData?.refundable === "Nonrefundable") {
                  return (
                    <Typography
                      sx={{
                        color: "#DC143C",
                        fontWeight: 500,
                        fontSize: {
                          xs: "12px",
                          sm: "12px",
                          md: "14px",
                          lg: "16px",
                        },
                      }}
                    >
                      Non Refundable
                    </Typography>
                  );
                }
              })()}
            </Grid>
            <Grid md={2.5}>
              <Box className="img-text-bag-0">
                <img src={bag} alt="seat" /> &nbsp;{" "}
                <Typography
                  sx={{
                    color: "#000",
                    fontWeight: 500,
                    fontSize: {
                      xs: "12px",
                      sm: "12px",
                      md: "14px",
                      lg: "16px",
                    },
                  }}
                >
                  {flightData?.bags === "3" ||
                  flightData?.bags === "2" ||
                  flightData?.bags === "1" ? (
                    <>{flightData?.bags?.split(" ")[0]} Piece</>
                  ) : flightData?.bags === " " ? (
                    <>0 Kg</>
                  ) : (
                    <>{flightData?.bags?.slice(0, 2) || 0} Kg</>
                  )}
                </Typography>
              </Box>
            </Grid>
            <Grid md={2.5}>
              <Box className="img-text-0">
                <img src={seat} alt="bag" />
                &nbsp;
                <Typography
                  sx={{
                    color: "#000",
                    fontWeight: 500,
                    fontSize: {
                      xs: "12px",
                      sm: "12px",
                      md: "14px",
                      lg: "16px",
                    },
                  }}
                >
                  {flightData?.seat || 9} Seat
                </Typography>
              </Box>
            </Grid>
          </Grid> */}
        </Grid>
        {/*  non stops box start */}
        <Grid
          sm={2.5}
          md={2.5}
          sx={{
            paddingLeft: "20px",
          }}
        >
          <Box className="updatebooknowbtn">
            <Box style={{ height: "fit-content" }}>
              <Box
                style={{
                  width: "100%",
                  height: "fit-content",
                  color: "var(--secondary-color)",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  fontSize: "12px",
                  padding: "5px 0px 0px 2px",
                }}
              >
                <BookmarkIcon /> Preferred Airline
              </Box>
              {/* {commaNumber(clientFare)} &#2547; */}
            </Box>
            <Box
              style={{
                height: "fit-content",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-end",
                flexDirection: "column",
                gap: "5px",
              }}
            >
              <Box
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                  flexDirection: "column",
                }}
              >
                <Typography
                  style={{
                    fontSize: "10px",
                    color: "var(--black)",
                  }}
                >
                  {flightData?.refundable}
                </Typography>
                <Typography
                  style={{
                    fontSize: "18px",
                    color: "var(--secondary-color)",
                  }}
                >
                  BDT {commaNumber(clientFare)}
                </Typography>
                <Typography
                  style={{
                    fontSize: "14px",
                    color: "var(--black)",
                    textDecoration: "line-through",
                  }}
                >
                  BDT {commaNumber(agentFare)}
                </Typography>
              </Box>
              <Button
                className="shine-effect"
                style={{
                  color: "var(--white)",
                  fontWeight: 600,
                  backgroundColor: "var(--primary-color)",
                  borderRadius: "5px",
                  width: "fit-content",
                }}
                disabled={flightData?.system === "Galileo" ? true : false}
                onClick={FlightInformation}
              >
                BOOK NOW
              </Button>
              <Button
                style={{
                  color: "var(--secondary-color)",
                  fontWeight: 600,
                  textTransform: "capitalize",
                  width: "fit-content",
                  paddingRight: "0px",
                  fontSize: "12px",
                }}
                onClick={() => setFlightDetails(!flightDetails)}
              >
                {!flightDetails ? (
                  <Typography
                    style={{
                      color: "var(--secondary-color)",
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                      fontSize: "12px",
                    }}
                  >
                    Show Details
                    <ArrowDropDownIcon style={{ width: "fit-content" }} />
                  </Typography>
                ) : (
                  <Typography
                    style={{
                      color: "var(--secondary-color)",
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                      fontSize: "12px",
                    }}
                  >
                    Hide Details <ArrowDropUpIcon />
                  </Typography>
                )}
              </Button>
              {/* {commaNumber(commission)} &#2547; */}
            </Box>
          </Box>
        </Grid>
        {/* --------------Flight Details start------------ */}
        {flightDetails && (
          <Box
            width="100%"
            className="accordion-cursor flight-search-accordion flight-details-btn"
            Accordion
            style={{ boxShadow: "none" }}
          >
            <Container maxWidth="xxl">
              <Box className="accordion-border"></Box>
            </Container>

            <Box className="accordian-center">
              <Box
                className="tab-list-width"
                sx={{
                  maxWidth: { sm: 500, md: 500, lg: 800, xl: 900 },
                  bgcolor: "background.paper",
                }}
              >
                <TabContext value={value}>
                  <Tabs
                    className="tablist-btn"
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons
                    allowScrollButtonsMobile
                    aria-label="scrollable force tabs example"
                    sx={{
                      minHeight: "0px",
                      height: "35px",
                      padding: "0px",
                      margin: "0px",
                      fontSize: "10px",
                      "@media screen and (max-width: 320px)": {
                        minHeight: "0px",
                        height: "25px",
                        fontSize: "10px",
                      },
                    }}
                  >
                    <Tab
                      sx={{
                        margin: "auto",
                        minHeight: "0px",
                        height: "35px",
                        "@media screen and (max-width: 320px)": {
                          minHeight: "10px",
                          height: "10px",
                          fontSize: "10px",
                          color: "#9dccfb !important",
                        },
                      }}
                      className="tabList"
                      label="Flight Details"
                      value="1"
                    />
                    <Tab
                      sx={{
                        margin: "auto",
                        minHeight: "0px",
                        height: "35px",
                        "@media screen and (max-width: 320px)": {
                          minHeight: "10px",
                          height: "10px",
                          fontSize: "10px",
                          color: "#9dccfb !important",
                        },
                      }}
                      className="tabList"
                      label="Fare Summery"
                      value="2"
                    />

                    <Tab
                      sx={{
                        margin: "auto",
                        minHeight: "0px",
                        height: "35px",
                        "@media screen and (max-width: 320px)": {
                          minHeight: "10px",
                          height: "10px",
                          fontSize: "10px",
                          color: "#9dccfb !important",
                        },
                      }}
                      className="tabList"
                      label="Commission & Invoice"
                      value="3"
                    />
                    <Tab
                      sx={{
                        margin: "auto",
                        minHeight: "0px",
                        height: "35px",
                        "@media screen and (max-width: 320px)": {
                          minHeight: "10px",
                          height: "10px",
                          fontSize: "10px",
                          color: "#9dccfb !important",
                        },
                      }}
                      className="tabList"
                      label="Refund"
                      value="5"
                    />
                    <Tab
                      sx={{
                        margin: "auto",
                        minHeight: "0px",
                        height: "35px",
                        "@media screen and (max-width: 320px)": {
                          minHeight: "10px",
                          height: "10px",
                          fontSize: "10px",
                          color: "#9dccfb !important",
                        },
                      }}
                      className="tabList"
                      label="reIssue"
                      value="4"
                    />
                    <Tab
                      sx={{
                        margin: "auto",
                        minHeight: "0px",
                        height: "35px",
                        "@media screen and (max-width: 320px)": {
                          minHeight: "10px",
                          height: "10px",
                          fontSize: "10px",
                          color: "#9dccfb !important",
                        },
                      }}
                      className="tabList"
                      label="Baggage"
                      value="7"
                    />
                  </Tabs>

                  <TabPanel className="tabs-details" value="1">
                    {flightData?.segment === "3" ? (
                      // 3  segment data show here
                      <Box className="segment-2">
                        <Box
                          display="flex"
                          justifyContent={"center"}
                          alignItems="center"
                          pb={2}
                          gap={2}
                        >
                          <Typography
                            sx={{
                              fontSize: "16px",
                              color: "#003566",
                              fontWeight: 600,
                            }}
                          >
                            {
                              flightData?.segments[0]?.departureLocation?.split(
                                ","
                              )[0]
                            }
                          </Typography>
                          <img src={toimg} alt="to" />
                          <Typography
                            sx={{
                              fontSize: "16px",
                              color: "#003566",
                              fontWeight: 600,
                            }}
                          >
                            {
                              flightData?.segments[2]?.arrivalLocation?.split(
                                ","
                              )[0]
                            }
                          </Typography>
                        </Box>
                        <Box className="single-flight-parent">
                          <Grid
                            className="single-flight-details"
                            sx={{
                              justifyContent: "space-between",
                              alignItems: "flex-start",
                            }}
                            container
                            spacing={{ xs: 2, md: 3, lg: 3 }}
                            columns={{ xs: 4, sm: 8, md: 12 }}
                          >
                            <Grid
                              sx={{
                                display: "flex",
                                alignItems: "flex-start",
                              }}
                              item
                              xs={2}
                              sm={3}
                              md={4.5}
                              className="flight-content-gap"
                            >
                              <Box textAlign="center" paddingRight={2}>
                                <img
                                  src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${flightData?.segments[0].marketingcareer}.png`}
                                  alt={`${flightData?.segments[0].marketingcareer}`}
                                />
                                <Typography
                                  width="100px"
                                  fontSize="12px"
                                  fontWeight={500}
                                  textAlign="center"
                                  paddingRight={2}
                                >
                                  {flightData?.segments[0]?.marketingcareerName}
                                </Typography>
                              </Box>

                              <Box className="flight-content-detail">
                                <h4>Departure From</h4>
                                <h5>
                                  ({flightData?.segments[0]?.departure})-
                                  {flightData?.segments[0]?.departureAirport}
                                </h5>
                                <h5>
                                  {flightData?.segments[0]?.departureLocation}
                                </h5>
                                <h5>
                                  {format(
                                    new Date(
                                      flightData?.segments[0]?.departureTime.toString()
                                    ),
                                    "dd MMM yyyy hh:mm a"
                                  )}
                                </h5>
                              </Box>
                            </Grid>

                            <Grid item xs={2} sm={2} md={3}>
                              <Box className="flight-content-detail">
                                <h4>Arrival To</h4>
                                <h5>
                                  ({flightData?.segments[0]?.arrival})-
                                  {flightData?.segments[0].arrivalAirport}
                                </h5>
                                <h5>
                                  {flightData?.segments[0].arrivalLocation}
                                </h5>
                                <h5>
                                  {" "}
                                  {/* {flightData?.segments[0]?.arrivalTime} */}
                                  {format(
                                    new Date(
                                      flightData?.segments[0]?.arrivalTime.toString()
                                    ),
                                    "dd MMM yyyy hh:mm a"
                                  )}
                                </h5>
                              </Box>
                            </Grid>
                            <Grid item xs={2} sm={2} md={3}>
                              <Box className="flight-content-detail">
                                <h4>Duration</h4>

                                <h5>
                                  {flightData?.segments[0].flightduration}
                                </h5>
                                <h5>
                                  <span style={{ color: "tomato" }}>
                                    {" "}
                                    {
                                      flightData?.segments[0].marketingcareer
                                    }{" "}
                                    {flightData?.segments[0].marketingflight}{" "}
                                  </span>
                                  <span
                                    style={{
                                      color: "crimson",
                                      fontSize: "15px",
                                    }}
                                  >
                                    {" | "}
                                  </span>
                                  Class: {flightData?.segments[0]?.bookingcode}
                                  <span
                                    style={{
                                      color: "crimson",
                                      fontSize: "15px",
                                    }}
                                  >
                                    {" | "}
                                  </span>
                                  <span>
                                    Seat: {flightData?.segments[0].seat || 9}
                                  </span>
                                </h5>
                                <h5>
                                  Baggage:{" "}
                                  {flightData?.bags === "3" ||
                                  flightData?.bags === "2" ||
                                  flightData?.bags === "1" ? (
                                    <>{flightData?.bags?.split(" ")[0]} Piece</>
                                  ) : flightData?.bags === " " ? (
                                    <>0 Kg</>
                                  ) : (
                                    <>{flightData?.bags?.slice(0, 2) || 0} Kg</>
                                  )}
                                </h5>
                              </Box>
                            </Grid>
                          </Grid>
                        </Box>

                        <Box className="border-content">
                          <span>
                            Transit Time<>: </>
                            {flightData?.transit.transit1}{" "}
                          </span>
                        </Box>

                        <Box className="single-flight-parent">
                          <Grid
                            className="single-flight-details"
                            sx={{
                              justifyContent: "space-between",
                              alignItems: "flex-start",
                            }}
                            container
                            spacing={{ xs: 2, md: 3 }}
                            columns={{ xs: 4, sm: 8, md: 12 }}
                          >
                            <Grid
                              sx={{
                                display: "flex",
                                alignItems: "flex-start",
                              }}
                              item
                              xs={2}
                              sm={3}
                              md={4.5}
                            >
                              <Box textAlign="center" paddingRight={2}>
                                {" "}
                                <img
                                  src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${flightData?.segments[1].marketingcareer}.png`}
                                  alt={`${flightData?.segments[1].marketingcareer}`}
                                />
                                <Typography
                                  width="100px"
                                  fontSize="12px"
                                  fontWeight={500}
                                  textAlign="center"
                                  paddingRight={2}
                                >
                                  {flightData?.segments[1]?.marketingcareerName}
                                </Typography>
                              </Box>
                              <Box className="flight-content-detail">
                                <h4>Departure From</h4>
                                <h5>
                                  ({flightData?.segments[1]?.departure})-
                                  {flightData?.segments[1]?.departureAirport}
                                </h5>
                                <h5>
                                  {flightData?.segments[1]?.departureLocation}
                                </h5>
                                <h5>
                                  {/* {flightData?.segments[1]?.departureTime} */}
                                  {format(
                                    new Date(
                                      flightData?.segments[1]?.departureTime.toString()
                                    ),
                                    "dd MMM yyyy hh:mm a"
                                  )}
                                </h5>
                              </Box>
                            </Grid>
                            <Grid item xs={2} sm={2} md={3}>
                              <Box className="flight-content-detail">
                                <h4>Arrival To</h4>
                                <h5>
                                  ({flightData?.segments[1]?.arrival})-
                                  {flightData?.segments[1].arrivalAirport}
                                </h5>
                                <h5>
                                  {flightData?.segments[1].arrivalLocation}
                                </h5>
                                <h5>
                                  {" "}
                                  {/* {flightData?.segments[1]?.arrivalTime} */}
                                  {format(
                                    new Date(
                                      flightData?.segments[1]?.arrivalTime.toString()
                                    ),
                                    "dd MMM yyyy hh:mm a"
                                  )}
                                </h5>
                              </Box>
                            </Grid>
                            <Grid item xs={2} sm={2} md={3}>
                              <Box className="flight-content-detail">
                                <h4>Duration</h4>
                                <h5>
                                  {flightData?.segments[1].flightduration}
                                </h5>
                                <h5>
                                  <span style={{ color: "tomato" }}>
                                    {flightData?.segments[1].marketingcareer}{" "}
                                    {flightData?.segments[1].marketingflight}{" "}
                                  </span>
                                  <span
                                    style={{
                                      color: "crimson",
                                      fontSize: "15px",
                                    }}
                                  >
                                    {" | "}
                                  </span>
                                  Class: {flightData?.segments[1]?.bookingcode}
                                  <span
                                    style={{
                                      color: "crimson",
                                      fontSize: "15px",
                                    }}
                                  >
                                    {" | "}
                                  </span>
                                  <span>
                                    Seat: {flightData?.segments[1].seat || 9}
                                  </span>
                                </h5>
                                <h5>
                                  Baggage:{" "}
                                  {flightData?.bags === "3" ||
                                  flightData?.bags === "2" ||
                                  flightData?.bags === "1" ? (
                                    <>{flightData?.bags?.split(" ")[0]} Piece</>
                                  ) : flightData?.bags === " " ? (
                                    <>0 Kg</>
                                  ) : (
                                    <>{flightData?.bags?.slice(0, 2) || 0} Kg</>
                                  )}
                                </h5>
                              </Box>
                            </Grid>
                          </Grid>
                        </Box>
                        <Box className="border-content">
                          <span>
                            Transit Time<>: </>
                            {flightData?.transit.transit2}{" "}
                          </span>
                        </Box>
                        <Box className="single-flight-parent">
                          <Grid
                            className="single-flight-details"
                            sx={{
                              justifyContent: "space-between",
                              alignItems: "flex-start",
                            }}
                            container
                            spacing={{ xs: 2, md: 3 }}
                            columns={{ xs: 4, sm: 8, md: 12 }}
                          >
                            <Grid
                              sx={{
                                display: "flex",
                                alignItems: "flex-start",
                              }}
                              item
                              xs={2}
                              sm={3}
                              md={4.5}
                            >
                              <Box textAlign="center" paddingRight={2}>
                                {" "}
                                <img
                                  src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${flightData?.segments[2]?.marketingcareer}.png`}
                                  alt={`${flightData?.segments[2]?.marketingcareer}`}
                                />
                                <Typography
                                  width="100px"
                                  fontSize="12px"
                                  fontWeight={500}
                                  textAlign="center"
                                  paddingRight={2}
                                >
                                  {flightData?.segments[2]?.marketingcareerName}
                                </Typography>
                              </Box>
                              <Box className="flight-content-detail">
                                <h4>Departure From</h4>
                                <h5>
                                  ({flightData?.segments[2]?.departure})-
                                  {flightData?.segments[2]?.departureAirport}
                                </h5>
                                <h5>
                                  {flightData?.segments[2]?.departureLocation}
                                </h5>
                                <h5>
                                  {format(
                                    new Date(
                                      flightData?.segments[2]?.departureTime.toString()
                                    ),
                                    "dd MMM yyyy hh:mm a"
                                  )}
                                </h5>
                              </Box>
                            </Grid>
                            <Grid item xs={2} sm={2} md={3}>
                              <Box className="flight-content-detail">
                                <h4>Arrival To</h4>
                                <h5>
                                  ({flightData?.segments[2]?.arrival})-
                                  {flightData?.segments[2]?.arrivalAirport}
                                </h5>
                                <h5>
                                  {flightData?.segments[2]?.arrivalLocation}
                                </h5>
                                <h5>
                                  {" "}
                                  {format(
                                    new Date(
                                      flightData?.segments[2]?.arrivalTime.toString()
                                    ),
                                    "dd MMM yyyy hh:mm a"
                                  )}
                                </h5>
                              </Box>
                            </Grid>
                            <Grid item xs={2} sm={2} md={3}>
                              <Box className="flight-content-detail">
                                <h4>Duration</h4>
                                <h5>
                                  {flightData?.segments[2]?.flightduration}
                                </h5>
                                <h5>
                                  <span style={{ color: "tomato" }}>
                                    {flightData?.segments[2]?.marketingcareer}{" "}
                                    {flightData?.segments[2]?.marketingflight}{" "}
                                  </span>
                                  <span
                                    style={{
                                      color: "crimson",
                                      fontSize: "15px",
                                    }}
                                  >
                                    {" | "}
                                  </span>
                                  Class: {flightData?.segments[2]?.bookingcode}
                                  <span
                                    style={{
                                      color: "crimson",
                                      fontSize: "15px",
                                    }}
                                  >
                                    {" | "}
                                  </span>
                                  <span>
                                    Seat: {flightData?.segments[2].seat || 9}
                                  </span>
                                </h5>
                                <h5>
                                  Baggage:{" "}
                                  {flightData?.bags === "3" ||
                                  flightData?.bags === "2" ||
                                  flightData?.bags === "1" ? (
                                    <>{flightData?.bags?.split(" ")[0]} Piece</>
                                  ) : flightData?.bags === " " ? (
                                    <>0 Kg</>
                                  ) : (
                                    <>{flightData?.bags?.slice(0, 2) || 0} Kg</>
                                  )}
                                </h5>
                              </Box>
                            </Grid>
                          </Grid>
                        </Box>
                      </Box>
                    ) : flightData?.segment === "2" ? (
                      <Box className="segment-2">
                        <Box
                          display="flex"
                          justifyContent={"center"}
                          alignItems="center"
                          pb={2}
                          gap={2}
                        >
                          <Typography
                            sx={{
                              fontSize: "16px",
                              color: "#003566",
                              fontWeight: 600,
                            }}
                          >
                            {
                              flightData?.segments[0]?.departureLocation?.split(
                                ","
                              )[0]
                            }
                          </Typography>
                          <img src={toimg} alt="to" />
                          <Typography
                            sx={{
                              fontSize: "16px",
                              color: "#003566",
                              fontWeight: 600,
                            }}
                          >
                            {
                              flightData?.segments[1]?.arrivalLocation?.split(
                                ","
                              )[0]
                            }
                          </Typography>
                        </Box>
                        <Box className="single-flight-parent">
                          <Grid
                            className="single-flight-details"
                            sx={{
                              justifyContent: "space-between",
                              alignItems: "flex-start",
                            }}
                            container
                            spacing={{ xs: 2, md: 3 }}
                            columns={{ xs: 4, sm: 8, md: 12 }}
                          >
                            <Grid
                              sx={{
                                display: "flex",
                                alignItems: "flex-start",
                              }}
                              item
                              xs={2}
                              sm={3}
                              md={4.5}
                            >
                              <Box textAlign="center" paddingRight={2}>
                                {" "}
                                <img
                                  src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${flightData?.segments[0].marketingcareer}.png`}
                                  alt={`${flightData?.segments[0].marketingcareer}`}
                                />
                                <Typography
                                  width="100px"
                                  fontSize="12px"
                                  fontWeight={500}
                                  textAlign="center"
                                  paddingRight={2}
                                >
                                  {flightData?.segments[0]?.marketingcareerName}
                                </Typography>
                              </Box>
                              <Box className="flight-content-detail">
                                <h4>Departure From</h4>
                                <h5>
                                  ({flightData?.segments[0]?.departure})-
                                  {flightData?.segments[0]?.departureAirport}
                                </h5>
                                <h5>
                                  {flightData?.segments[0]?.departureLocation}
                                </h5>
                                <h5>
                                  {/* {flightData?.segments[0]?.departureTime} */}
                                  {format(
                                    new Date(
                                      flightData?.segments[0]?.departureTime.toString()
                                    ),
                                    "dd MMM yyyy hh:mm a"
                                  )}
                                </h5>
                              </Box>
                            </Grid>
                            <Grid item xs={2} sm={2} md={3}>
                              <Box className="flight-content-detail">
                                <h4>Arrival To</h4>
                                <h5>
                                  ({flightData?.segments[0]?.arrival})-
                                  {flightData?.segments[0].arrivalAirport}
                                </h5>
                                <h5>
                                  {flightData?.segments[0].arrivalLocation}
                                </h5>
                                <h5>
                                  {" "}
                                  {/* {flightData?.segments[0]?.arrivalTime} */}
                                  {format(
                                    new Date(
                                      flightData?.segments[0]?.arrivalTime.toString()
                                    ),
                                    "dd MMM yyyy hh:mm a"
                                  )}
                                </h5>
                              </Box>
                            </Grid>
                            <Grid item xs={2} sm={2} md={3}>
                              <Box className="flight-content-detail">
                                <h4>Duration</h4>
                                <h5>
                                  {flightData?.segments[0].flightduration}
                                </h5>
                                <h5>
                                  <span style={{ color: "tomato" }}>
                                    {flightData?.segments[0].marketingcareer}{" "}
                                    {flightData?.segments[0].marketingflight}{" "}
                                  </span>
                                  <span
                                    style={{
                                      color: "crimson",
                                      fontSize: "15px",
                                    }}
                                  >
                                    {" | "}
                                  </span>
                                  Class: {flightData?.segments[0]?.bookingcode}
                                  <span
                                    style={{
                                      color: "crimson",
                                      fontSize: "15px",
                                    }}
                                  >
                                    {" | "}
                                  </span>
                                  <span>
                                    Seat: {flightData?.segments[0].seat || 9}
                                  </span>
                                </h5>
                                <h5>
                                  Baggage:{" "}
                                  {flightData?.bags === "3" ||
                                  flightData?.bags === "2" ||
                                  flightData?.bags === "1" ? (
                                    <>{flightData?.bags?.split(" ")[0]} Piece</>
                                  ) : flightData?.bags === " " ? (
                                    <>0 Kg</>
                                  ) : (
                                    <>{flightData?.bags?.slice(0, 2) || 0} Kg</>
                                  )}
                                </h5>
                              </Box>
                            </Grid>
                          </Grid>
                        </Box>

                        <Box className="border-content">
                          <span>
                            Transit Time<>: </>
                            {flightData?.transit.transit
                              ? flightData?.transit.transit
                              : flightData?.transit.transit1}{" "}
                          </span>
                        </Box>

                        <Box className="single-flight-parent">
                          <Grid
                            className="single-flight-details"
                            sx={{
                              justifyContent: "space-between",
                              alignItems: "flex-start",
                            }}
                            container
                            spacing={{ xs: 2, md: 3 }}
                            columns={{ xs: 4, sm: 8, md: 12 }}
                          >
                            <Grid
                              sx={{
                                display: "flex",
                                alignItems: "flex-start",
                              }}
                              item
                              xs={2}
                              sm={3}
                              md={4.5}
                            >
                              <Box textAlign="center" paddingRight={2}>
                                <img
                                  src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${flightData?.segments[1].marketingcareer}.png`}
                                  alt={`${flightData?.segments[1].marketingcareer}`}
                                />
                                <Typography
                                  width="100px"
                                  fontSize="12px"
                                  fontWeight={500}
                                  textAlign="center"
                                  paddingRight={2}
                                >
                                  {flightData?.segments[1]?.marketingcareerName}
                                </Typography>
                              </Box>
                              <Box className="flight-content-detail">
                                <h4>Departure From</h4>
                                <h5>
                                  ({flightData?.segments[1]?.departure})-
                                  {flightData?.segments[1]?.departureAirport}
                                </h5>
                                <h5>
                                  {flightData?.segments[1]?.departureLocation}
                                </h5>
                                <h5>
                                  {format(
                                    new Date(
                                      flightData?.segments[1]?.departureTime.toString()
                                    ),
                                    "dd MMM yyyy hh:mm a"
                                  )}
                                </h5>
                              </Box>
                            </Grid>
                            <Grid item xs={2} sm={2} md={3}>
                              <Box className="flight-content-detail">
                                <h4>Arrival To</h4>
                                <h5>
                                  ({flightData?.segments[1]?.arrival})-
                                  {flightData?.segments[1]?.arrivalAirport}
                                </h5>
                                <h5>
                                  {flightData?.segments[1]?.arrivalLocation}
                                </h5>
                                <h5>
                                  {format(
                                    new Date(
                                      flightData?.segments[1]?.arrivalTime.toString()
                                    ),
                                    "dd MMM yyyy hh:mm a"
                                  )}
                                </h5>
                              </Box>
                            </Grid>
                            <Grid item xs={2} sm={2} md={3}>
                              <Box className="flight-content-detail">
                                <h4>Duration</h4>
                                <h5>
                                  {flightData?.segments[1].flightduration}
                                </h5>
                                <h5>
                                  <span style={{ color: "tomato" }}>
                                    {flightData?.segments[1].marketingcareer}{" "}
                                    {flightData?.segments[1].marketingflight}{" "}
                                  </span>
                                  <span
                                    style={{
                                      color: "crimson",
                                      fontSize: "15px",
                                    }}
                                  >
                                    {" | "}
                                  </span>
                                  Class: {flightData?.segments[1]?.bookingcode}
                                  <span
                                    style={{
                                      color: "crimson",
                                      fontSize: "15px",
                                    }}
                                  >
                                    {" | "}
                                  </span>
                                  <span>
                                    Seat: {flightData?.segments[1].seat || 9}
                                  </span>
                                </h5>
                                <h5>
                                  Baggage:{" "}
                                  {flightData?.bags === "3" ||
                                  flightData?.bags === "2" ||
                                  flightData?.bags === "1" ? (
                                    <>{flightData?.bags?.split(" ")[0]} Piece</>
                                  ) : flightData?.bags === " " ? (
                                    <>0 Kg</>
                                  ) : (
                                    <>{flightData?.bags?.slice(0, 2) || 0} Kg</>
                                  )}
                                </h5>
                              </Box>
                            </Grid>
                          </Grid>
                        </Box>
                      </Box>
                    ) : (
                      <Box className="segment-2">
                        <Box
                          display="flex"
                          justifyContent={"center"}
                          alignItems="center"
                          pb={2}
                          gap={2}
                        >
                          <Typography
                            sx={{
                              fontSize: "16px",
                              color: "#003566",
                              fontWeight: 600,
                            }}
                          >
                            {
                              flightData?.segments[0]?.departureLocation?.split(
                                ","
                              )[0]
                            }
                          </Typography>
                          <img src={toimg} alt="to" />
                          <Typography
                            sx={{
                              fontSize: "16px",
                              color: "#003566",
                              fontWeight: 600,
                            }}
                          >
                            {
                              flightData?.segments[0]?.arrivalLocation?.split(
                                ","
                              )[0]
                            }
                          </Typography>
                        </Box>
                        <Box className="single-flight-parent">
                          <Grid
                            className="single-flight-details"
                            sx={{
                              justifyContent: "space-between",
                              alignItems: "flex-start",
                            }}
                            container
                            spacing={{ xs: 2, md: 3 }}
                            columns={{ xs: 4, sm: 8, md: 12 }}
                          >
                            <Grid
                              sx={{
                                display: "flex",
                                alignItems: "flex-start",
                              }}
                              item
                              xs={2}
                              sm={3}
                              md={4.5}
                            >
                              <Box textAlign="center" paddingRight={2}>
                                <img
                                  src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${flightData?.segments[0].marketingcareer}.png`}
                                  alt={`${flightData?.segments[0].marketingcareer}`}
                                />
                                <Typography
                                  width="100px"
                                  fontSize="12px"
                                  fontWeight={500}
                                  textAlign="center"
                                  paddingRight={2}
                                >
                                  {flightData?.segments[0]?.marketingcareerName}
                                </Typography>
                              </Box>
                              <Box className="flight-content-detail">
                                <h4>Departure From</h4>
                                <h5>
                                  ({flightData?.segments[0]?.departure})-
                                  {flightData?.segments[0]?.departureAirport}
                                </h5>
                                <h5>
                                  {flightData?.segments[0]?.departureLocation}
                                </h5>
                                <h5>
                                  {format(
                                    new Date(
                                      flightData?.segments[0]?.departureTime.toString()
                                    ),
                                    "dd MMM yyyy hh:mm a"
                                  )}
                                </h5>
                              </Box>
                            </Grid>
                            <Grid item xs={2} sm={2} md={3}>
                              <Box className="flight-content-detail">
                                <h4>Arrival To</h4>
                                <h5>
                                  ({flightData?.segments[0]?.arrival})-
                                  {flightData?.segments[0]?.arrivalAirport}
                                </h5>
                                <h5>
                                  {flightData?.segments[0]?.arrivalLocation}
                                </h5>
                                <h5>
                                  {" "}
                                  {/* {flightData?.segments[0]?.arrivalTime} */}
                                  {format(
                                    new Date(
                                      flightData?.segments[0]?.arrivalTime.toString()
                                    ),
                                    "dd MMM yyyy hh:mm a"
                                  )}
                                </h5>
                              </Box>
                            </Grid>
                            <Grid item xs={2} sm={2} md={3}>
                              <Box className="flight-content-detail">
                                <h4>Duration</h4>
                                <h5>
                                  {flightData?.segments[0].flightduration}
                                </h5>
                                <h5>
                                  <span style={{ color: "tomato" }}>
                                    {flightData?.segments[0].marketingcareer}{" "}
                                    {flightData?.segments[0].marketingflight}{" "}
                                  </span>
                                  <span
                                    style={{
                                      color: "crimson",
                                      fontSize: "15px",
                                    }}
                                  >
                                    {" | "}
                                  </span>
                                  Class: {flightData?.segments[0]?.bookingcode}
                                  <span
                                    style={{
                                      color: "crimson",
                                      fontSize: "15px",
                                    }}
                                  >
                                    {" | "}
                                  </span>
                                  <span>
                                    Seat: {flightData?.segments[0].seat || 9}
                                  </span>
                                </h5>
                                <h5>
                                  Baggage:{" "}
                                  {flightData?.bags === "3" ||
                                  flightData?.bags === "2" ||
                                  flightData?.bags === "1" ? (
                                    <>{flightData?.bags?.split(" ")[0]} Piece</>
                                  ) : flightData?.bags === " " ? (
                                    <>0 Kg</>
                                  ) : (
                                    <>{flightData?.bags?.slice(0, 2) || 0} Kg</>
                                  )}
                                </h5>
                              </Box>
                            </Grid>
                          </Grid>
                        </Box>
                      </Box>
                    )}
                  </TabPanel>

                  <TabPanel value="2" className="tab-class">
                    <Box className="tab-table" sx={{ m: "5px 0px" }}>
                      <Box className="flight-search-table">
                        <table>
                          <tr>
                            <th>Pax Type</th>
                            <th>Base Fare</th>
                            <th>Tax</th>
                            <th>Total</th>
                            <th>Pax Count</th>
                            <th>Service Fee</th>
                            <th>Sub Total</th>
                          </tr>

                          {adultCount > 0 && childCount > 0 && infant > 0 ? (
                            <>
                              <tr>
                                <td>Adult</td>
                                <td>
                                  {flightData?.pricebreakdown[0]?.BaseFare}
                                </td>
                                <td>{flightData?.pricebreakdown[0]?.Tax}</td>
                                <td>
                                  {parseInt(
                                    flightData?.pricebreakdown[0]?.BaseFare
                                  ) +
                                    parseInt(
                                      flightData?.pricebreakdown[0]?.Tax
                                    )}
                                </td>
                                <td>
                                  {flightData?.pricebreakdown[0]?.PaxCount}
                                </td>

                                <td>
                                  {flightData?.pricebreakdown[0]?.ServiceFee}
                                </td>
                                <td>
                                  {(parseInt(
                                    flightData?.pricebreakdown[0]?.BaseFare
                                  ) +
                                    parseInt(
                                      flightData?.pricebreakdown[0]?.Tax
                                    ) +
                                    parseInt(
                                      flightData?.pricebreakdown[0]?.ServiceFee
                                    )) *
                                    flightData?.pricebreakdown[0]?.PaxCount}
                                </td>
                              </tr>
                              <tr>
                                <td>Child</td>
                                <td>
                                  {flightData?.pricebreakdown[1]?.BaseFare}
                                </td>
                                <td>{flightData?.pricebreakdown[1]?.Tax}</td>
                                <td>
                                  {parseInt(
                                    flightData?.pricebreakdown[1]?.BaseFare
                                  ) +
                                    parseInt(
                                      flightData?.pricebreakdown[1]?.Tax
                                    )}
                                </td>
                                <td>
                                  {flightData?.pricebreakdown[1]?.PaxCount}
                                </td>

                                <td>
                                  {flightData?.pricebreakdown[1]?.ServiceFee}
                                </td>
                                <td>
                                  {(parseInt(
                                    flightData?.pricebreakdown[1]?.BaseFare
                                  ) +
                                    parseInt(
                                      flightData?.pricebreakdown[1]?.Tax
                                    ) +
                                    parseInt(
                                      flightData?.pricebreakdown[1]?.ServiceFee
                                    )) *
                                    flightData?.pricebreakdown[1]?.PaxCount}
                                </td>
                              </tr>
                              <tr>
                                <td>Infant</td>
                                <td>
                                  {flightData?.pricebreakdown[2]?.BaseFare}
                                </td>
                                <td>{flightData?.pricebreakdown[2]?.Tax}</td>
                                <td>
                                  {parseInt(
                                    flightData?.pricebreakdown[2]?.BaseFare
                                  ) +
                                    parseInt(
                                      flightData?.pricebreakdown[2]?.Tax
                                    )}
                                </td>
                                <td>
                                  {flightData?.pricebreakdown[2]?.PaxCount}
                                </td>

                                <td>
                                  {flightData?.pricebreakdown[2]?.ServiceFee}
                                </td>
                                <td>
                                  {(parseInt(
                                    flightData?.pricebreakdown[2]?.BaseFare
                                  ) +
                                    parseInt(
                                      flightData?.pricebreakdown[2]?.Tax
                                    ) +
                                    parseInt(
                                      flightData?.pricebreakdown[2]?.ServiceFee
                                    )) *
                                    flightData?.pricebreakdown[2]?.PaxCount}
                                </td>
                              </tr>
                            </>
                          ) : adultCount > 0 && childCount > 0 ? (
                            <>
                              <tr>
                                <td>Adult</td>
                                <td>
                                  {flightData?.pricebreakdown[0]?.BaseFare}
                                </td>
                                <td>{flightData?.pricebreakdown[0]?.Tax}</td>
                                <td>
                                  {parseInt(
                                    flightData?.pricebreakdown[0]?.BaseFare
                                  ) +
                                    parseInt(
                                      flightData?.pricebreakdown[0]?.Tax
                                    )}
                                </td>
                                <td>
                                  {flightData?.pricebreakdown[0]?.PaxCount}
                                </td>

                                <td>
                                  {flightData?.pricebreakdown[0]?.ServiceFee}
                                </td>
                                <td>
                                  {(parseInt(
                                    flightData?.pricebreakdown[0]?.BaseFare
                                  ) +
                                    parseInt(
                                      flightData?.pricebreakdown[0]?.Tax
                                    ) +
                                    parseInt(
                                      flightData?.pricebreakdown[0]?.ServiceFee
                                    )) *
                                    flightData?.pricebreakdown[0]?.PaxCount}
                                </td>
                              </tr>
                              <tr>
                                <td>Child</td>
                                <td>
                                  {flightData?.pricebreakdown[1]?.BaseFare}
                                </td>
                                <td>{flightData?.pricebreakdown[1]?.Tax}</td>
                                <td>
                                  {parseInt(
                                    flightData?.pricebreakdown[1]?.BaseFare
                                  ) +
                                    parseInt(
                                      flightData?.pricebreakdown[1]?.Tax
                                    )}
                                </td>
                                <td>
                                  {flightData?.pricebreakdown[1]?.PaxCount}
                                </td>

                                <td>
                                  {flightData?.pricebreakdown[1]?.ServiceFee}
                                </td>
                                <td>
                                  {(parseInt(
                                    flightData?.pricebreakdown[1]?.BaseFare
                                  ) +
                                    parseInt(
                                      flightData?.pricebreakdown[1]?.Tax
                                    ) +
                                    parseInt(
                                      flightData?.pricebreakdown[1]?.ServiceFee
                                    )) *
                                    flightData?.pricebreakdown[1]?.PaxCount}
                                </td>
                              </tr>
                            </>
                          ) : adultCount > 0 && infant > 0 ? (
                            <>
                              <tr>
                                <td>Adult</td>
                                <td>
                                  {flightData?.pricebreakdown[0]?.BaseFare}
                                </td>
                                <td>{flightData?.pricebreakdown[0]?.Tax}</td>
                                <td>
                                  {parseInt(
                                    flightData?.pricebreakdown[0]?.BaseFare
                                  ) +
                                    parseInt(
                                      flightData?.pricebreakdown[0]?.Tax
                                    )}
                                </td>
                                <td>
                                  {flightData?.pricebreakdown[0]?.PaxCount}
                                </td>

                                <td>
                                  {flightData?.pricebreakdown[0]?.ServiceFee}
                                </td>
                                <td>
                                  {(parseInt(
                                    flightData?.pricebreakdown[0]?.BaseFare
                                  ) +
                                    parseInt(
                                      flightData?.pricebreakdown[0]?.Tax
                                    ) +
                                    parseInt(
                                      flightData?.pricebreakdown[0]?.ServiceFee
                                    )) *
                                    flightData?.pricebreakdown[0]?.PaxCount}
                                </td>
                              </tr>
                              <tr>
                                <td>Infant</td>
                                <td>
                                  {flightData?.pricebreakdown[1]?.BaseFare}
                                </td>
                                <td>{flightData?.pricebreakdown[1]?.Tax}</td>
                                <td>
                                  {parseInt(
                                    flightData?.pricebreakdown[1]?.BaseFare
                                  ) +
                                    parseInt(
                                      flightData?.pricebreakdown[1]?.Tax
                                    )}
                                </td>
                                <td>
                                  {flightData?.pricebreakdown[1]?.PaxCount}
                                </td>

                                <td>
                                  {flightData?.pricebreakdown[1]?.ServiceFee}
                                </td>
                                <td>
                                  {(parseInt(
                                    flightData?.pricebreakdown[1]?.BaseFare
                                  ) +
                                    parseInt(
                                      flightData?.pricebreakdown[1]?.Tax
                                    ) +
                                    parseInt(
                                      flightData?.pricebreakdown[1]?.ServiceFee
                                    )) *
                                    flightData?.pricebreakdown[1]?.PaxCount}
                                </td>
                              </tr>
                            </>
                          ) : (
                            <tr>
                              <td>Adult</td>
                              <td>{flightData?.pricebreakdown[0]?.BaseFare}</td>
                              <td>{flightData?.pricebreakdown[0]?.Tax}</td>
                              <td>
                                {parseInt(
                                  flightData?.pricebreakdown[0]?.BaseFare
                                ) +
                                  parseInt(flightData?.pricebreakdown[0]?.Tax)}
                              </td>
                              <td>{flightData?.pricebreakdown[0]?.PaxCount}</td>

                              <td>
                                {flightData?.pricebreakdown[0]?.ServiceFee}
                              </td>
                              <td>
                                {(parseInt(
                                  flightData?.pricebreakdown[0]?.BaseFare
                                ) +
                                  parseInt(flightData?.pricebreakdown[0]?.Tax) +
                                  parseInt(
                                    flightData?.pricebreakdown[0]?.ServiceFee
                                  )) *
                                  flightData?.pricebreakdown[0]?.PaxCount}
                              </td>
                            </tr>
                          )}
                        </table>
                      </Box>
                    </Box>
                  </TabPanel>

                  <TabPanel value="3" className="tab-class">
                    <Box className="tab-table" sx={{ m: "5px 0px" }}>
                      <Box className="flight-search-table">
                        <table>
                          <tr>
                            <th>Customer Invoice</th>
                            <th>Commission</th>
                            <th>Agent Invoice</th>
                            <th>Profit Amount</th>
                          </tr>

                          <tr>
                            <td>{clientFare}</td>
                            <td>7%</td>
                            <td>{agentFare}</td>
                            <td>{commission}</td>
                          </tr>
                        </table>
                      </Box>
                    </Box>
                  </TabPanel>

                  {/* discount & gross start */}

                  <TabPanel value="4" className="cancelation-1">
                    <Grid
                      className="cancellation-content "
                      container
                      columns={{ xs: 4, sm: 8, md: 12 }}
                    >
                      <Grid item xs={4} sm={4} md={6}>
                        <Typography variant="h4">Time Frame </Typography>
                        <Typography variant="h4">
                          (From Scheduled Flight Departure)
                        </Typography>
                      </Grid>

                      <Grid item xs={4} sm={4} md={6}>
                        <Typography variant="h4">
                          Airline Fee + Flyfarint Fee{" "}
                        </Typography>
                        <Typography variant="h4">(Per Passenger)</Typography>
                      </Grid>
                    </Grid>

                    <Grid
                      className=" cancellation-content-cus "
                      container
                      columns={{ xs: 4, sm: 8, md: 12 }}
                    >
                      <Grid item xs={4} sm={4} md={6}>
                        <Typography variant="h4">
                          0 hours to 72 hours
                        </Typography>
                      </Grid>

                      <Grid item xs={4} sm={4} md={6}>
                        <Typography variant="h4">
                          Adult : Airline Policy + 200 BDT
                        </Typography>
                      </Grid>
                    </Grid>

                    <Grid
                      className=" cancellation-content-cus2  "
                      container
                      columns={{ xs: 4, sm: 8, md: 12 }}
                    >
                      <Grid item xs={4} sm={4} md={6}>
                        <Typography variant="h4">
                          72 hours to 335 hours
                        </Typography>
                      </Grid>

                      <Grid item xs={4} sm={4} md={6}>
                        <Typography variant="h4">
                          Adult : Airline Policy + 200 BDT
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid
                      className="cancellation-content"
                      container
                      columns={{ xs: 4, sm: 8, md: 12 }}
                    >
                      <Grid item xs={4} sm={4} md={6}>
                        <Typography variant="h4">Time Frame </Typography>
                        <Typography variant="h4">
                          (From Scheduled Flight Departure)
                        </Typography>
                      </Grid>

                      <Grid item xs={4} sm={4} md={6}>
                        <Typography variant="h4">
                          Airline Fee + Flyfarint Fee{" "}
                        </Typography>
                        <Typography variant="h4">(Per Passenger)</Typography>
                      </Grid>
                    </Grid>

                    <Grid
                      className="cancellation-content-cus3 "
                      container
                      columns={{ xs: 4, sm: 8, md: 12 }}
                    >
                      <Grid item xs={4} sm={4} md={6}>
                        <Typography variant="h4">
                          All Flight Departure
                        </Typography>
                      </Grid>

                      <Grid item xs={4} sm={4} md={6}>
                        <Typography variant="h4">
                          Adult : Airline Policy + No-Show Charge + 200 BDT
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
                      <Grid item xs={12} sm={12} md={12}>
                        <Typography
                          fontSize={"12px"}
                          border="1px solid red"
                          py={1}
                          px={2}
                          my={1}
                        >
                          *Important: This destination may have COVID-19 travel
                          restriction in place, including specific restriction
                          for loading Check any nation,local and health
                          advisories for this destination before you book.
                        </Typography>
                      </Grid>
                    </Grid>
                  </TabPanel>
                  <TabPanel value="5" className="cancelation-1">
                    <Grid
                      className="cancellation-content "
                      container
                      columns={{ xs: 4, sm: 8, md: 12 }}
                    >
                      <Grid item xs={4} sm={4} md={6}>
                        <Typography variant="h4">Time Frame </Typography>
                        <Typography variant="h4">
                          (From Scheduled Flight Departure)
                        </Typography>
                      </Grid>

                      <Grid item xs={4} sm={4} md={6}>
                        <Typography variant="h4">
                          Airline Fee + Flyfarint Fee{" "}
                        </Typography>
                        <Typography variant="h4">(Per Passenger)</Typography>
                      </Grid>
                    </Grid>

                    <Grid
                      className=" cancellation-content-cus "
                      container
                      columns={{ xs: 4, sm: 8, md: 12 }}
                    >
                      <Grid item xs={4} sm={4} md={6}>
                        <Typography variant="h4">
                          0 hours to 72 hours
                        </Typography>
                      </Grid>

                      <Grid item xs={4} sm={4} md={6}>
                        <Typography variant="h4">
                          Adult : Airline Policy + 200 BDT
                        </Typography>
                      </Grid>
                    </Grid>

                    <Grid
                      className=" cancellation-content-cus2  "
                      container
                      columns={{ xs: 4, sm: 8, md: 12 }}
                    >
                      <Grid item xs={4} sm={4} md={6}>
                        <Typography variant="h4">
                          72 hours to 335 hours
                        </Typography>
                      </Grid>

                      <Grid item xs={4} sm={4} md={6}>
                        <Typography variant="h4">
                          Adult : Airline Policy + 200 BDT
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid
                      className="cancellation-content"
                      container
                      columns={{ xs: 4, sm: 8, md: 12 }}
                    >
                      <Grid item xs={4} sm={4} md={6}>
                        <Typography variant="h4">Time Frame </Typography>
                        <Typography variant="h4">
                          (From Scheduled Flight Departure)
                        </Typography>
                      </Grid>

                      <Grid item xs={4} sm={4} md={6}>
                        <Typography variant="h4">
                          Airline Fee + Flyfarint Fee{" "}
                        </Typography>
                        <Typography variant="h4">(Per Passenger)</Typography>
                      </Grid>
                    </Grid>

                    <Grid
                      className="cancellation-content-cus3 "
                      container
                      columns={{ xs: 4, sm: 8, md: 12 }}
                    >
                      <Grid item xs={4} sm={4} md={6}>
                        <Typography variant="h4">
                          All Flight Departure
                        </Typography>
                      </Grid>

                      <Grid item xs={4} sm={4} md={6}>
                        <Typography variant="h4">
                          Adult : Airline Policy + No-Show Charge + 200 BDT
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
                      <Grid item xs={12} sm={12} md={12}>
                        <Typography
                          fontSize={"12px"}
                          border="1px solid red"
                          py={1}
                          px={2}
                          my={1}
                        >
                          *Important: This destination may have COVID-19 travel
                          restriction in place, including specific restriction
                          for loading Check any nation,local and health
                          advisories for this destination before you book.
                        </Typography>
                      </Grid>
                    </Grid>
                  </TabPanel>

                  <TabPanel value="6" className="tab-class">
                    <Box className="tab-table" sx={{ m: "5px 0px" }}>
                      <Box className="flight-search-table">
                        <table>
                          <tr>
                            <th>Flight</th>
                            <th>Cabin</th>
                            <th>Check-In</th>
                          </tr>

                          <tr>
                            <td>
                              {to}-{from}
                            </td>
                            <td>
                              {flightData.system === "Sabre" ? (
                                <>Economy</>
                              ) : flightData.system === "FlyHub" ? (
                                <>Economy</>
                              ) : (
                                <>{flightData.class}</>
                              )}
                            </td>
                            <td>{adultCount + childCount + infant}</td>
                          </tr>
                        </table>
                      </Box>
                    </Box>
                  </TabPanel>
                  <TabPanel value="7" className="tab-class">
                    <Box className="tab-table" sx={{ m: "5px 0px" }}>
                      <Box className="flight-search-table">
                        <table>
                          <tr>
                            <th>Baggage</th>
                            <th>Check-In</th>
                            <th>Cabin</th>
                          </tr>

                          <tr>
                            <td>Adult</td>
                            <td>
                              {flightData?.bags === "3" ||
                              flightData?.bags === "2" ||
                              flightData?.bags === "1" ? (
                                <>{flightData?.bags?.split(" ")[0]} Piece</>
                              ) : flightData?.bags === " " ? (
                                <>0 Kg</>
                              ) : (
                                <>{flightData?.bags?.slice(0, 2) || 0} Kg</>
                              )}
                            </td>
                            <td>{flightData?.class}</td>
                          </tr>
                          {childCount > 0 && (
                            <tr>
                              <td>Child</td>
                              <td>
                                {flightData?.bags === "3" ||
                                flightData?.bags === "2" ||
                                flightData?.bags === "1" ? (
                                  <>{flightData?.bags?.split(" ")[0]} Piece</>
                                ) : flightData?.bags === " " ? (
                                  <>0 Kg</>
                                ) : flightData?.bags.length === 6 ? (
                                  <>{flightData?.bags?.slice(2, 4) || 0} Kg </>
                                ) : (
                                  <>{flightData?.bags?.slice(0, 2) || 0} Kg</>
                                )}
                              </td>
                              <td>{flightData?.class}</td>
                            </tr>
                          )}
                          {infant > 0 && (
                            <tr>
                              <td>Infant</td>
                              <td>
                                {flightData?.bags === "3" ||
                                flightData?.bags === "2" ||
                                flightData?.bags === "1" ? (
                                  <>{flightData?.bags?.split(" ")[0]} Piece</>
                                ) : flightData?.bags === " " ? (
                                  <>0 Kg</>
                                ) : flightData?.bags.length === 6 ? (
                                  <>{flightData?.bags?.slice(4, 6) || 0} Kg </>
                                ) : (
                                  <>{flightData?.bags?.slice(0, 2) || 0} Kg</>
                                )}
                              </td>
                              <td>{flightData?.class}</td>
                            </tr>
                          )}
                        </table>
                      </Box>
                    </Box>
                  </TabPanel>
                </TabContext>
              </Box>
            </Box>
          </Box>
        )}
        {/* --------------Flight Details end------------ */}
      </Grid>
    </Box>
  );
};

export default SingleFlight;
