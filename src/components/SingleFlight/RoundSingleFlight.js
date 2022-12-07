import { Button, Grid, Tab, Tabs, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useState } from "react";
import seat1 from "../../images/Icon/bag.svg";
import bag from "../../images/Icon/seat.svg";
import { TabContext, TabPanel } from "@material-ui/lab";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import toimg from "../../images/Icon/to.svg";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import CircleIcon from "@mui/icons-material/Circle";
import FlightIcon from "@mui/icons-material/Flight";
import commaNumber from "comma-number";
import { format } from "date-fns";
import secureLocalStorage from "react-secure-storage";

const HtmlTooltip = styled(({ className, ...propss }) => (
  <Tooltip {...propss} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "crimson",
    maxWidth: 220,
    fontSize: "5px",
    borderRadius: "8px 0px 8px 0px",
  },
}));
const RoundSingleFlight = (props) => {
  const [value, setValue] = useState("1");
  const [flightDetails, setFlightDetails] = useState(false);
  const [allFlights, setAllFlight] = useState(true);
  const navigate = useNavigate();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const {
    backarrival,
    backarrivalDate,
    backarrivalTime,
    backdeparture,
    backdepartureDate,
    backdepartureTime,
    backflightduration,
    bags,
    career,
    careerName,
    goarrival,
    goarrivalDate,
    goarrivalTime,
    godeparture,
    godepartureDate,
    godepartureTime,
    goflightduration,
    refundable,
    price,
    Taxes,
    seat,
    segment,
    segments,
    stop,
    system,
    transit,
    bookingcode,
    BasePrice,
    pricebreakdown,
  } = props.roundData;

  const {
    adultCount,
    childCount,
    infant,
    agentFarePrice,
    setAgentFarePrice,
    commisionFarePrice,
    setCommisionFarePrice,
    customerFare,
    setCustomerFare,
  } = props;

  const commissionData = secureLocalStorage.getItem("commissionData");
  //CF AF CM variable are here
  const clientPrice = Math.round(
    parseInt(props.roundData.clientPrice || props.roundData.baseprice)
  );
  const percentRate = parseInt(7) / 100;
  const clientFare = parseInt(clientPrice);
  const agentFare = Math.round(parseInt(price));
  const commission = Math.round(clientFare - agentFare);

  //end of CM AF CM variables

  // booking functional work here
  const RoundTripFlightInfo = () => {
    system === "Sabre"
      ? navigate("/roundflightinformation", {
          state: {
            roundData: props.roundData,
            adultCount: props.adultCount,
            childCount: props.childCount,
            infant: props.infant,
            tripType: props.tripType,
            clientFare,
          },
        })
      : system === "Galileo"
      ? navigate("/roundflightinformation", {
          state: {
            roundData: props.roundData,
            adultCount: props.adultCount,
            childCount: props.childCount,
            infant: props.infant,
            tripType: props.tripType,
            clientFare,
          },
        })
      : navigate("/roundflightinformation", {
          state: {
            roundData: props.roundData,
            adultCount: props.adultCount,
            childCount: props.childCount,
            infant: props.infant,
            tripType: props.tripType,
            clientFare,
          },
        });
  };

  return (
    <div>
      <Box className="accordion-box">
        <Box
          className="flight-filter1"
          sx={{ display: { xs: "block", sm: "none", md: "none" } }}
        >
          {allFlights === true ? (
            <>
              <Grid container px={2} py={1} justifyContent={"space-between"}>
                <Grid item md={6} width="50%">
                  <Box>
                    <Typography
                      sx={{
                        color: "#000",
                        fontWeight: 500,
                        fontSize: "15px",
                      }}
                    >
                      {/* {godeparture} */}
                      {segments.go[0].departure}
                      <span> - </span>
                      {system === "Galileo"
                        ? `${
                            new Date(godepartureTime)
                              .toTimeString()
                              ?.split(":")[0]
                          }:${
                            new Date(godepartureTime)
                              .toTimeString()
                              ?.split(":")[1]
                          }`
                        : `${godepartureTime?.split(":")[0]}:${
                            godepartureTime?.split(":")[1]
                          }`}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#003566",
                        fontWeight: 600,
                        fontSize: "12px",
                      }}
                    >
                      {segments.go[0]?.departureLocation}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#6c757d",
                        fontWeight: 500,
                        fontSize: "12px",
                      }}
                    >
                      {godepartureDate}
                    </Typography>
                  </Box>
                </Grid>

                <Grid item md={6}>
                  <Box textAlign={"end"}>
                    <Typography
                      sx={{
                        color: "#000",
                        fontWeight: 500,
                        fontSize: "15px",
                      }}
                    >
                      {/* {goarrival} */}
                      {segment === "1" ||
                      segment === "12" ||
                      segment === "13" ? (
                        <>{segments.go[0]?.arrival}</>
                      ) : segment === "2" ||
                        segment === "21" ||
                        segment === "22" ||
                        segment === "23" ? (
                        <>{segments.go[1]?.arrival}</>
                      ) : segment === "3" ||
                        segment === "31" ||
                        segment === "32" ||
                        segment === "33" ? (
                        <>{segments.go[2]?.arrival}</>
                      ) : (
                        <>{goarrival}</>
                      )}
                      <span> - </span>

                      {system === "Galileo"
                        ? `${
                            new Date(goarrivalTime)
                              .toTimeString()
                              ?.split(":")[0]
                          }:${
                            new Date(goarrivalTime)
                              .toTimeString()
                              ?.split(":")[1]
                          }`
                        : `${goarrivalTime?.split(":")[0]}:${
                            goarrivalTime?.split(":")[1]
                          }`}
                    </Typography>

                    {segment === "3" ? (
                      <Typography
                        sx={{
                          color: "#003566",
                          fontWeight: 600,
                          fontSize: "12px",
                        }}
                      >
                        {segments.go[2]?.arrivalLocation}
                      </Typography>
                    ) : segment === "2" || segment === "21" ? (
                      <Typography
                        sx={{
                          color: "#003566",
                          fontWeight: 600,
                          fontSize: "12px",
                        }}
                      >
                        {segments.go[1]?.arrivalLocation}
                      </Typography>
                    ) : (
                      <Typography
                        sx={{
                          color: "#003566",
                          fontWeight: 600,
                          fontSize: "12px",
                        }}
                      >
                        {segments.go[0]?.arrivalLocation}
                      </Typography>
                    )}

                    <Typography
                      sx={{
                        color: "#6c757d",
                        fontWeight: 500,
                        fontSize: "12px",
                      }}
                    >
                      {goarrivalDate}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
              <Grid container px={2} py={1}>
                <Grid item sm={6} width="50%">
                  <Box>
                    <Typography
                      sx={{
                        color: "#DC143C",
                        fontWeight: 500,
                        fontSize: "14px",
                      }}
                    >
                      <>{careerName}</>
                    </Typography>
                    <Typography
                      sx={{
                        color: "#003566",
                        fontWeight: 500,
                        fontSize: "12px",
                      }}
                    >
                      {segments.go[0]?.marketingcareer}&nbsp;
                      {segments.go[0]?.marketingflight}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item sm={6} width="50%">
                  <Box>
                    <Typography>
                      {/* ---------stops------ */}

                      {segment === "3" ? (
                        <Box>
                          <Grid container justifyContent="center">
                            <Typography
                              sx={{
                                color: "#003566",
                                fontWeight: 500,
                                fontSize: "12px",
                              }}
                            >
                              {goflightduration} |&nbsp;
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
                          <Box px={1}>
                            <div className="segment03">
                              <div className="segment-circle">
                                <div className="circle-0">
                                  <HtmlTooltip
                                    title={
                                      <React.Fragment>
                                        <Typography
                                          sx={{
                                            color: "#fff",
                                            fontSize: "10px",
                                          }}
                                        >
                                          {segments.go[0].departure}
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
                                          sx={{
                                            color: "#fff",
                                            fontSize: "10px",
                                          }}
                                        >
                                          {segment === "1" ||
                                          segment === "12" ||
                                          segment === "13" ? (
                                            <>{segments.go[0]?.arrival}</>
                                          ) : segment === "2" ||
                                            segment === "21" ||
                                            segment === "22" ||
                                            segment === "23" ? (
                                            <>{segments.go[1]?.arrival}</>
                                          ) : segment === "3" ||
                                            segment === "31" ||
                                            segment === "32" ||
                                            segment === "33" ? (
                                            <>{segments.go[2]?.arrival}</>
                                          ) : (
                                            <>{goarrival}</>
                                          )}
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
                                        segments.go[0]?.arrivalLocation?.split(
                                          ","
                                        )[0]
                                      }
                                    </span>
                                    <br />
                                    {segments.go[1]?.marketingcareer}&nbsp;
                                    {segments.go[1]?.marketingflight}{" "}
                                    <span> | </span>
                                    {segments.go[1]?.flightduration}
                                  </Typography>
                                </React.Fragment>
                              }
                              followCursor
                            >
                              <Box className="arival-text">
                                {segments.go[0]?.arrival}
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
                                        segments.go[1]?.arrivalLocation?.split(
                                          ","
                                        )[0]
                                      }
                                    </span>
                                    <br />
                                    {segments.go[2]?.marketingcareer}&nbsp;
                                    {segments.go[2]?.marketingflight}
                                    <span> | </span>
                                    {segments.go[2]?.flightduration}
                                  </Typography>
                                </React.Fragment>
                              }
                              followCursor
                            >
                              <Box className="arival-text">
                                {" "}
                                {segments.go[1]?.arrival}
                              </Box>
                            </HtmlTooltip>
                          </Typography>
                        </Box>
                      ) : segment === "2" || segment === "21" ? (
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
                              {goflightduration} |&nbsp;
                            </Typography>
                            <Typography
                              sx={{
                                color: "#DC143C",
                                fontWeight: 500,
                                fontSize: {
                                  xs: "12px",
                                  sm: "11px",
                                  md: "12px",
                                },
                              }}
                            >
                              One Stops
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
                                          sx={{
                                            color: "#fff",
                                            fontSize: "10px",
                                          }}
                                        >
                                          {segments.go[0].departure}
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
                                          sx={{
                                            color: "#fff",
                                            fontSize: "10px",
                                          }}
                                        >
                                          {segment === "1" ||
                                          segment === "12" ||
                                          segment === "13" ? (
                                            <>{segments.go[0]?.arrival}</>
                                          ) : segment === "2" ||
                                            segment === "21" ||
                                            segment === "22" ||
                                            segment === "23" ? (
                                            <>{segments.go[1]?.arrival}</>
                                          ) : segment === "3" ||
                                            segment === "31" ||
                                            segment === "32" ||
                                            segment === "33" ? (
                                            <>{segments.go[2]?.arrival}</>
                                          ) : (
                                            <>{goarrival}</>
                                          )}
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
                                        segments.go[0]?.arrivalLocation?.split(
                                          ","
                                        )[0]
                                      }{" "}
                                    </span>
                                    <br />
                                    {segments.go[1]?.marketingcareer}&nbsp;
                                    {segments.go[1]?.marketingflight}
                                    <span> | </span>
                                    {segments.go[1]?.flightduration}
                                  </Typography>
                                </React.Fragment>
                              }
                              followCursor
                            >
                              <Box className="arival-text2">
                                {segments.go[0]?.arrival}
                              </Box>
                            </HtmlTooltip>
                          </Typography>
                        </Box>
                      ) : (
                        <Box>
                          <Grid container justifyContent="center">
                            <Typography
                              sx={{
                                color: "#003566",
                                fontWeight: 500,
                                fontSize: "12px",
                              }}
                            >
                              {goflightduration} |&nbsp;
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
                          <Box px={1}>
                            <div className="segment-1">
                              <div className="segment-circle">
                                <div className="circle-0">
                                  <HtmlTooltip
                                    title={
                                      <React.Fragment>
                                        <Typography
                                          sx={{
                                            color: "#fff",
                                            fontSize: "10px",
                                          }}
                                        >
                                          {segments.go[0].departure}
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
                                          sx={{
                                            color: "#fff",
                                            fontSize: "10px",
                                          }}
                                        >
                                          {segment === "1" ||
                                          segment === "12" ||
                                          segment === "13" ? (
                                            <>{segments.go[0]?.arrival}</>
                                          ) : segment === "2" ||
                                            segment === "21" ||
                                            segment === "22" ||
                                            segment === "23" ? (
                                            <>{segments.go[1]?.arrival}</>
                                          ) : segment === "3" ||
                                            segment === "31" ||
                                            segment === "32" ||
                                            segment === "33" ? (
                                            <>{segments.go[2]?.arrival}</>
                                          ) : (
                                            <>{goarrival}</>
                                          )}
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
            </>
          ) : (
            // -----------Return Data Start------------
            <>
              <Grid container px={2} py={1} justifyContent={"space-between"}>
                <Grid item md={6} width="50%">
                  <Box>
                    <Typography
                      sx={{
                        color: "#000",
                        fontWeight: 500,
                        fontSize: "15px",
                      }}
                    >
                      {/* {backdeparture} */}
                      {segments?.back[0]?.departure}
                      <span> - </span>

                      {system === "Galileo"
                        ? `${
                            new Date(backdepartureTime)
                              .toTimeString()
                              ?.split(":")[0]
                          }:${
                            new Date(backdepartureTime)
                              .toTimeString()
                              ?.split(":")[1]
                          }`
                        : `${backdepartureTime?.split(":")[0]}:${
                            backdepartureTime?.split(":")[1]
                          }`}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#003566",
                        fontWeight: 600,
                        fontSize: "12px",
                      }}
                    >
                      {segments.back[0]?.arrivalLocation}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#6c757d",
                        fontWeight: 500,
                        fontSize: "12px",
                      }}
                    >
                      {backdepartureDate}
                    </Typography>
                  </Box>
                </Grid>

                <Grid item md={6}>
                  <Box textAlign={"end"}>
                    <Typography
                      sx={{
                        color: "#000",
                        fontWeight: 500,
                        fontSize: "15px",
                      }}
                    >
                      {/* {backarrival} */}
                      {segment === "1" ||
                      segment === "12" ||
                      segment === "13" ? (
                        <>{segments.back[0]?.arrival}</>
                      ) : segment === "2" ||
                        segment === "21" ||
                        segment === "22" ||
                        segment === "23" ? (
                        <>{segments.back[1]?.arrival}</>
                      ) : segment === "3" ||
                        segment === "31" ||
                        segment === "32" ||
                        segment === "33" ? (
                        <>{segments.back[2]?.arrival}</>
                      ) : (
                        <>{backarrival}</>
                      )}
                      <span> - </span>

                      {system === "Galileo"
                        ? `${
                            new Date(backarrivalTime)
                              .toTimeString()
                              ?.split(":")[0]
                          }:${
                            new Date(backarrivalTime)
                              .toTimeString()
                              ?.split(":")[1]
                          }`
                        : `${backarrivalTime?.split(":")[0]}:${
                            backarrivalTime?.split(":")[1]
                          }`}
                    </Typography>
                    {segment === "3" ? (
                      <Typography
                        sx={{
                          color: "#003566",
                          fontWeight: 600,
                          fontSize: "12px",
                        }}
                      >
                        {segments.back[2]?.arrivalLocation}
                      </Typography>
                    ) : segment === "2" || segment === "21" ? (
                      <Typography
                        sx={{
                          color: "#003566",
                          fontWeight: 600,
                          fontSize: "12px",
                        }}
                      >
                        {segments.back[1]?.arrivalLocation}
                      </Typography>
                    ) : (
                      <Typography
                        sx={{
                          color: "#003566",
                          fontWeight: 600,
                          fontSize: "12px",
                        }}
                      >
                        {segments.back[0]?.arrivalLocation}
                      </Typography>
                    )}

                    <Typography
                      sx={{
                        color: "#6c757d",
                        fontWeight: 500,
                        fontSize: "12px",
                      }}
                    >
                      {backarrivalDate}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
              <Grid container px={2} py={1}>
                <Grid item sm={6} width="50%">
                  <Box>
                    <Typography
                      sx={{
                        color: "#DC143C",
                        fontWeight: 500,
                        fontSize: "14px",
                      }}
                    >
                      <>{careerName}</>
                    </Typography>
                    <Typography
                      sx={{
                        color: "#003566",
                        fontWeight: 500,
                        fontSize: "12px",
                      }}
                    >
                      {segments.back[0]?.marketingcareer}&nbsp;
                      {segments.back[0]?.marketingflight}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item sm={6} width="50%">
                  <Box>
                    <Typography>
                      {/* ---------stops------ */}

                      {segment === "3" ? (
                        <Box>
                          <Grid container justifyContent="center">
                            <Typography
                              sx={{
                                color: "#003566",
                                fontWeight: 500,
                                fontSize: "12px",
                              }}
                            >
                              {goflightduration} |&nbsp;
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
                          <Box px={1} className="round-rotate-0">
                            <div className="segment03">
                              <div className="segment-circle">
                                <div className="circle-0">
                                  <HtmlTooltip
                                    title={
                                      <React.Fragment>
                                        <Typography
                                          sx={{
                                            color: "#fff",
                                            fontSize: "10px",
                                          }}
                                        >
                                          {segments?.back[0]?.departure}
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
                                          sx={{
                                            color: "#fff",
                                            fontSize: "10px",
                                          }}
                                        >
                                          {segment === "1" ||
                                          segment === "12" ||
                                          segment === "13" ? (
                                            <>{segments.back[0]?.arrival}</>
                                          ) : segment === "2" ||
                                            segment === "21" ||
                                            segment === "22" ||
                                            segment === "23" ? (
                                            <>{segments.back[1]?.arrival}</>
                                          ) : segment === "3" ||
                                            segment === "31" ||
                                            segment === "32" ||
                                            segment === "33" ? (
                                            <>{segments.back[2]?.arrival}</>
                                          ) : (
                                            <>{backarrival}</>
                                          )}
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
                                        segments.back[0]?.departureLocation?.split(
                                          ","
                                        )[0]
                                      }
                                    </span>
                                    <br />
                                    {segments.back[1]?.marketingcareer}&nbsp;
                                    {segments.back[1]?.marketingflight}{" "}
                                    <span> | </span>
                                    {segments.back[1]?.flightduration}
                                  </Typography>
                                </React.Fragment>
                              }
                              followCursor
                            >
                              <Box className="arival-text">
                                {segments.back[0]?.arrival}
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
                                        segments.back[1]?.departureLocation?.split(
                                          ","
                                        )[0]
                                      }
                                    </span>
                                    <br />
                                    {segments.back[2]?.marketingcareer}&nbsp;
                                    {segments.back[2]?.marketingflight}
                                    <span> | </span>
                                    {segments.back[2]?.flightduration}
                                  </Typography>
                                </React.Fragment>
                              }
                              followCursor
                            >
                              <Box className="arival-text">
                                {" "}
                                {segments.back[1]?.arrival}
                              </Box>
                            </HtmlTooltip>
                          </Typography>
                        </Box>
                      ) : segment === "2" || segment === "12" ? (
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
                              {goflightduration} |&nbsp;
                            </Typography>
                            <Typography
                              sx={{
                                color: "#DC143C",
                                fontWeight: 500,
                                fontSize: {
                                  xs: "12px",
                                  sm: "11px",
                                  md: "12px",
                                },
                              }}
                            >
                              One Stops
                            </Typography>
                          </Grid>
                          <Box px={1} className="round-rotate-0">
                            <div className="segment02">
                              <div className="segment-circle">
                                <div className="circle-0">
                                  <HtmlTooltip
                                    title={
                                      <React.Fragment>
                                        <Typography
                                          sx={{
                                            color: "#fff",
                                            fontSize: "10px",
                                          }}
                                        >
                                          {segments?.back[0]?.departure}
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
                                          sx={{
                                            color: "#fff",
                                            fontSize: "10px",
                                          }}
                                        >
                                          {segment === "1" ||
                                          segment === "12" ||
                                          segment === "13" ? (
                                            <>{segments.back[0]?.arrival}</>
                                          ) : segment === "2" ||
                                            segment === "21" ||
                                            segment === "22" ||
                                            segment === "23" ? (
                                            <>{segments.back[1]?.arrival}</>
                                          ) : segment === "3" ||
                                            segment === "31" ||
                                            segment === "32" ||
                                            segment === "33" ? (
                                            <>{segments.back[2]?.arrival}</>
                                          ) : (
                                            <>{backarrival}</>
                                          )}
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
                                        segments.back[0]?.arrivalLocation?.split(
                                          ","
                                        )[0]
                                      }{" "}
                                    </span>
                                    <br />
                                    {segments.back[1]?.marketingcareer}&nbsp;
                                    {segments.back[1]?.marketingflight}
                                    <span> | </span>
                                    {segments.back[1]?.flightduration}
                                  </Typography>
                                </React.Fragment>
                              }
                              followCursor
                            >
                              <Box className="arival-text2">
                                {segments.back[0]?.arrival}
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
                              {backflightduration} |&nbsp;
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
                          <Box px={1} className="round-rotate-0">
                            <div className="segment-1">
                              <div className="segment-circle">
                                <div className="circle-0">
                                  <HtmlTooltip
                                    title={
                                      <React.Fragment>
                                        <Typography
                                          sx={{
                                            color: "#fff",
                                            fontSize: "10px",
                                          }}
                                        >
                                          {segments?.back[0]?.departure}
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
                                          sx={{
                                            color: "#fff",
                                            fontSize: "10px",
                                          }}
                                        >
                                          {segment === "1" ||
                                          segment === "12" ||
                                          segment === "13" ? (
                                            <>{segments.back[0]?.arrival}</>
                                          ) : segment === "2" ||
                                            segment === "21" ||
                                            segment === "22" ||
                                            segment === "23" ? (
                                            <>{segments.back[1]?.arrival}</>
                                          ) : segment === "3" ||
                                            segment === "31" ||
                                            segment === "32" ||
                                            segment === "33" ? (
                                            <>{segments.back[2]?.arrival}</>
                                          ) : (
                                            <>{backarrival}</>
                                          )}
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
            </>
          )}

          {/* ---------{} */}
          <Grid container columnGap={2} pl="15px">
            <Box
              sx={{
                fontSize: "10px",
              }}
              onClick={() => setAllFlight(!allFlights)}
            >
              {!allFlights ? (
                <Button
                  className="shine-effect"
                  size="small"
                  variant="contained"
                  sx={{
                    borderRadius: "5px 0px 5px 0px",
                    color: "#fff",
                    bgcolor: "#DC143C",
                    fontSize: "10px",
                    py: "3px",
                    px: "10px",
                    boxShadow: "transparent",
                    ":hover": {
                      bgcolor: "#DC143C",
                    },
                  }}
                >
                  Depart Flight
                </Button>
              ) : (
                <Button
                  className="shine-effect"
                  size="small"
                  variant="contained"
                  sx={{
                    borderRadius: "5px 0px 5px 0px",
                    color: "#fff",
                    bgcolor: "#003566",
                    fontSize: "10px",
                    py: "3px",
                    px: "10px",
                    boxShadow: "transparent",
                    ":hover": {
                      bgcolor: "#003566",
                    },
                  }}
                >
                  Return Flight
                </Button>
              )}
            </Box>
          </Grid>
          {allFlights === true ? (
            <>
              <Grid container pt={1} px={2} justifyContent={"space-between"}>
                <Grid item sm={6}>
                  <Grid container columnGap={4}>
                    <Grid item sm={3}>
                      {system === "Sabre" ? (
                        <Typography
                          sx={{
                            color: "#000",
                            fontWeight: 500,
                            fontSize: "14px",
                          }}
                        >
                          {props.roundData.class}
                        </Typography>
                      ) : system === "Galileo" ? (
                        <Typography
                          sx={{
                            color: "#000",
                            fontWeight: 500,
                            fontSize: "12px",
                          }}
                        >
                          {props.roundData.class}
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

                    <Grid item sm={3}>
                      {(() => {
                        if (refundable === "Refundable") {
                          return (
                            <Typography
                              sx={{
                                color: "green",
                                fontWeight: 500,
                                fontSize: "12px",
                              }}
                            >
                              {refundable}
                            </Typography>
                          );
                        } else if (
                          refundable === "Nonrefundable" ||
                          refundable === "Non Refundable"
                        ) {
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
                <Grid item sm={6}>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: "16px",
                      color: "#003566",
                    }}
                  >
                    {customerFare && <>CF {commaNumber(clientFare)} ৳</>}
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                container
                px={2}
                pb={"5px"}
                justifyContent={"space-between"}
              >
                <Grid>
                  <Grid container columnGap={4}>
                    <Grid item sm={3}>
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
                          {bags === "1" || bags === "2" || bags === "3" ? (
                            <>{bags} Piece</>
                          ) : bags === "" ? (
                            <>0 Kg</>
                          ) : (
                            <>{bags?.slice(0, 2) || 0} Kg</>
                          )}
                          {/* {bags ? <>{bags}</> : <>0 Kg</>} */}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item sm={3}>
                      <Box className="img-text-0">
                        <img src={seat1} alt="bag" width="100%" />
                        &nbsp;
                        <Typography
                          sx={{
                            color: "#000",
                            fontWeight: 500,
                            fontSize: "12px",
                          }}
                        >
                          {/* {seat||9} Seat */}
                          {system === "FlyHub" ? (
                            <> 9 Seat</>
                          ) : (
                            <> {seat || 9}Seat</>
                          )}
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item sm={6}>
                  <Typography
                    sx={{
                      fontWeight: 500,
                      fontSize: "12px",
                      color: "crimson",
                      textAlign: "end",
                    }}
                  >
                    {agentFarePrice && <>AF {commaNumber(agentFare)} ৳</>}
                    <br />
                    {commisionFarePrice && <> CM {commaNumber(commission)} ৳</>}
                  </Typography>
                </Grid>
              </Grid>
            </>
          ) : (
            <>
              <Grid container pt={1} px={2} justifyContent={"space-between"}>
                <Grid item sm={6}>
                  <Grid container columnGap={4}>
                    <Grid item sm={3}>
                      {system === "Sabre" ? (
                        <Typography
                          sx={{
                            color: "#000",
                            fontWeight: 500,
                            fontSize: "14px",
                          }}
                        >
                          {props.roundData.class}
                        </Typography>
                      ) : system === "Galileo" ? (
                        <Typography
                          sx={{
                            color: "#000",
                            fontWeight: 500,
                            fontSize: "12px",
                          }}
                        >
                          {props.roundData.class}
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

                    <Grid item sm={3}>
                      {(() => {
                        if (refundable === "Refundable") {
                          return (
                            <Typography
                              sx={{
                                color: "green",
                                fontWeight: 500,
                                fontSize: "12px",
                              }}
                            >
                              {refundable}
                            </Typography>
                          );
                        } else if (
                          refundable === "Nonrefundable" ||
                          refundable === "Non Refundable"
                        ) {
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
                <Grid item sm={6}>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: "16px",
                      color: "#003566",
                    }}
                  >
                    {customerFare && <>CF {commaNumber(clientFare)} ৳</>}
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                container
                px={2}
                pb={"5px"}
                justifyContent={"space-between"}
              >
                <Grid>
                  <Grid container columnGap={4}>
                    <Grid item sm={3}>
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
                          {bags === "1" || bags === "2" || bags === "3" ? (
                            <>{bags} Piece</>
                          ) : bags === "" ? (
                            <>0 Kg</>
                          ) : (
                            <>{bags?.slice(0, 2) || 0} Kg</>
                          )}
                          {/* {bags ? <>{bags}</> : <>0 Kg</>} */}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item sm={3}>
                      <Box className="img-text-0">
                        <img src={seat1} alt="bag" width="100%" />
                        &nbsp;
                        <Typography
                          sx={{
                            color: "#000",
                            fontWeight: 500,
                            fontSize: "12px",
                          }}
                        >
                          {/* {seat||9} Seat */}
                          {system === "FlyHub" ? (
                            <> 9 Seat</>
                          ) : (
                            <> {seat || 9} Seat</>
                          )}
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item sm={6}>
                  <Typography
                    sx={{
                      fontWeight: 500,
                      fontSize: "12px",
                      color: "crimson",
                      textAlign: "end",
                    }}
                  >
                    {/* {BasePrice ? (
                            <del>BDT {price}</del>
                          ) : (
                            <del>BDT {offerPrice}</del>
                          )} */}
                    {agentFarePrice && <>AF {commaNumber(agentFare)} ৳</>}
                    <br />
                    {commisionFarePrice && <> CM {commaNumber(commission)} ৳</>}
                  </Typography>
                </Grid>
              </Grid>
            </>
          )}

          <Grid
            container
            justifyContent={"space-between"}
            className="btn0"
            px={2}
            pt={1}
            pb={1.5}
          >
            <Grid item>
              <Button
                sx={{
                  color: "#fff",
                  fontWeight: 500,
                  textTransform: "capitalize",
                  fontSize: {
                    xs: "12px",
                  },
                }}
                onClick={() => setFlightDetails(!flightDetails)}
              >
                {!flightDetails ? <> Flight Details</> : <> Hide Details</>}
              </Button>
            </Grid>
            <Grid item>
              <Button
                className="shine-effect"
                sx={{
                  color: "#fff",
                  fontWeight: 600,
                  bgcolor: "#DC143C",
                  borderRadius: "12px  0px",
                  mt: { xs: "5px" },
                  p: {
                    xs: "5px 20px",
                  },
                  fontSize: "12px",
                }}
                disabled={system === "Galileo" ? true : false}
                onClick={RoundTripFlightInfo}
              >
                BOOK NOW{" "}
              </Button>
            </Grid>
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
                      maxWidth: {
                        xs: 300,
                        sm: 400,
                        md: 700,
                        lg: 800,
                        xl: 900,
                      },
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
                          value="6"
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
                        {segment === "3" ? (
                          // 3  segment data show here
                          <Box className="roundsegment-2">
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
                                  segments.go[0]?.departureLocation?.split(
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
                                {segments.go[2]?.arrivalLocation?.split(",")[0]}
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
                                      src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments.go[0]?.marketingcareer}.png`}
                                      alt={`${segments.go[0]?.marketingcareer}`}
                                    />
                                  </Box>

                                  <Box className="flight-content-detail">
                                    <h4>Departure From</h4>
                                    <h5>{segments.go[0]?.departureAirport}</h5>
                                    <h5>{segments.go[0]?.departureLocation}</h5>
                                    <h5>
                                      {segments.go[0]?.departureTime
                                        ? format(
                                            new Date(
                                              segments.go[0]?.departureTime
                                            ),
                                            "dd MMM yyyy hh:mm a"
                                          )
                                        : "departureTime"}
                                    </h5>
                                  </Box>
                                </Grid>

                                <Grid item xs={2} sm={2} md={3}>
                                  <Box className="flight-content-detail">
                                    <h4>Arrival To</h4>
                                    <h5>{segments.go[0]?.arrivalAirport}</h5>
                                    <h5>{segments.go[0]?.arrivalLocation}</h5>
                                    <h5>
                                      {format(
                                        new Date(segments.go[0]?.arrivalTime),
                                        "dd MMM yyyy hh:mm a"
                                      )}
                                    </h5>
                                  </Box>
                                </Grid>
                                <Grid item xs={3} sm={2} md={3}>
                                  <Box className="flight-content-detail">
                                    <h4>Duration</h4>
                                    <h5>{segments.go[0]?.flightduration}</h5>
                                    <Grid container>
                                      <Grid>
                                        <h5 style={{ color: "tomato" }}>
                                          {segments.go[0]?.marketingcareer}{" "}
                                          {segments.go[0]?.marketingflight}{" "}
                                        </h5>
                                      </Grid>
                                      <Grid>
                                        <h5>
                                          &nbsp;Class:{" "}
                                          {segments.go[0]?.bookingcode} &nbsp;
                                          <span style={{ color: "crimson" }}>
                                            Seat: {segments.go[0]?.seat || 9}
                                          </span>
                                        </h5>
                                      </Grid>
                                    </Grid>
                                  </Box>
                                </Grid>
                              </Grid>
                            </Box>

                            <Box className="border-content-round">
                              <span>
                                Transit Time&nbsp;{transit?.go?.transit1}
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
                                      src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments.go[1]?.marketingcareer}.png`}
                                      alt={`${segments.go[1]?.marketingcareer}`}
                                    />
                                  </Box>
                                  <Box className="flight-content-detail">
                                    <h4>Departure From</h4>
                                    <h5>{segments.go[1]?.departureAirport}</h5>
                                    <h5>{segments.go[1]?.departureLocation}</h5>
                                    <h5>
                                      {format(
                                        new Date(segments.go[1]?.departureTime),
                                        "dd MMM yyyy hh:mm a"
                                      )}
                                    </h5>
                                  </Box>
                                </Grid>
                                <Grid item xs={2} sm={2} md={3}>
                                  <Box className="flight-content-detail">
                                    <h4>Arrival To</h4>
                                    <h5>{segments.go[1]?.arrivalAirport}</h5>
                                    <h5>{segments.go[1]?.arrivalLocation}</h5>
                                    <h5>
                                      {format(
                                        new Date(segments.go[1]?.arrivalTime),
                                        "dd MMM yyyy hh:mm a"
                                      )}
                                    </h5>
                                  </Box>
                                </Grid>
                                <Grid item xs={3} sm={2} md={3}>
                                  <Box className="flight-content-detail">
                                    <h4>Duration</h4>
                                    <h5>{segments.go[1]?.flightduration}</h5>
                                    <Grid container>
                                      <Grid>
                                        <h5 style={{ color: "tomato" }}>
                                          {segments.go[1]?.marketingcareer}{" "}
                                          {segments.go[1]?.marketingflight}{" "}
                                        </h5>
                                      </Grid>
                                      <Grid>
                                        <h5>
                                          &nbsp;Class:{" "}
                                          {segments.go[1]?.bookingcode} &nbsp;
                                          <span style={{ color: "crimson" }}>
                                            Seat: {segments.go[1]?.seat || 9}
                                          </span>
                                        </h5>
                                      </Grid>
                                    </Grid>
                                  </Box>
                                </Grid>
                              </Grid>
                            </Box>
                            <Box className="border-content-round">
                              <span>
                                Transit Time&nbsp;{transit?.go?.transit2}
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
                                    <img
                                      src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments.go[2]?.marketingcareer}.png`}
                                      alt={`${segments.go[2]?.marketingcareer}`}
                                    />
                                  </Box>
                                  <Box className="flight-content-detail">
                                    <h4>Departure From</h4>
                                    <h5>{segments.go[2]?.departureAirport}</h5>
                                    <h5>{segments.go[2]?.departureLocation}</h5>
                                    <h5>
                                      {format(
                                        new Date(segments.go[2]?.departureTime),
                                        "dd MMM yyyy hh:mm a"
                                      )}
                                    </h5>
                                  </Box>
                                </Grid>
                                <Grid item xs={2} sm={2} md={3}>
                                  <Box className="flight-content-detail">
                                    <h4>Arrival To</h4>
                                    <h5>{segments.go[2]?.arrivalAirport}</h5>
                                    <h5>{segments.go[2]?.arrivalLocation}</h5>
                                    <h5>
                                      {format(
                                        new Date(segments.go[2]?.arrivalTime),
                                        "dd MMM yyyy hh:mm a"
                                      )}
                                    </h5>
                                  </Box>
                                </Grid>
                                <Grid item xs={3} sm={2} md={3}>
                                  <Box className="flight-content-detail">
                                    <h4>Duration</h4>
                                    <h5>{segments.go[2]?.flightduration}</h5>
                                    <Grid container>
                                      <Grid>
                                        <h5 style={{ color: "tomato" }}>
                                          {segments.go[2]?.marketingcareer}{" "}
                                          {segments.go[2]?.marketingflight}{" "}
                                        </h5>
                                      </Grid>
                                      <Grid>
                                        <h5>
                                          &nbsp;Class:{" "}
                                          {segments.go[2]?.bookingcode} &nbsp;
                                          <span style={{ color: "crimson" }}>
                                            Seat: {segments.go[2]?.seat || 9}
                                          </span>
                                        </h5>
                                      </Grid>
                                    </Grid>
                                  </Box>
                                </Grid>
                              </Grid>
                            </Box>
                            {/* -------------Back Start 3 segment --------- */}
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
                                      src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-loback/${segments.back[0]?.marketingcareer}.png`}
                                      alt={`${segments.back[0]?.marketingcareer}`}
                                    />
                                  </Box>

                                  <Box className="flight-content-detail">
                                    <h4>Departure From</h4>
                                    <h5>
                                      {segments.back[0]?.departureAirport}
                                    </h5>
                                    <h5>
                                      {segments.back[0]?.departureLocation}
                                    </h5>
                                    <h5>
                                      {format(
                                        new Date(
                                          segments.back[0]?.departureTime
                                        ),
                                        "dd MMM yyyy hh:mm a"
                                      )}
                                    </h5>
                                  </Box>
                                </Grid>

                                <Grid item xs={2} sm={2} md={3}>
                                  <Box className="flight-content-detail">
                                    <h4>Arrival To</h4>
                                    <h5>{segments.back[0]?.arrivalAirport}</h5>
                                    <h5>{segments.back[0]?.arrivalLocation}</h5>
                                    <h5>
                                      {format(
                                        new Date(segments.back[0]?.arrivalTime),
                                        "dd MMM yyyy hh:mm a"
                                      )}
                                    </h5>
                                  </Box>
                                </Grid>
                                <Grid item xs={3} sm={2} md={3}>
                                  <Box className="flight-content-detail">
                                    <h4>Duration</h4>
                                    <h5>{segments.back[0]?.flightduration}</h5>
                                    <Grid container>
                                      <Grid>
                                        <h5 style={{ color: "tomato" }}>
                                          {segments.back[0]?.marketingcareer}{" "}
                                          {segments.back[0]?.marketingflight}{" "}
                                        </h5>
                                      </Grid>
                                      <Grid>
                                        <h5>
                                          &nbsp;Class:{" "}
                                          {segments.back[0]?.bookingcode} &nbsp;
                                          <span style={{ color: "crimson" }}>
                                            Seat: {segments.back[0]?.seat || 9}
                                          </span>
                                        </h5>
                                      </Grid>
                                    </Grid>
                                  </Box>
                                </Grid>
                              </Grid>
                            </Box>

                            <Box className="border-content-round">
                              <span>
                                Transit Time&nbsp;{transit?.back?.transit1}
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
                                      src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-loback/${segments.back[1]?.marketingcareer}.png`}
                                      alt={`${segments.back[1]?.marketingcareer}`}
                                    />
                                  </Box>
                                  <Box className="flight-content-detail">
                                    <h4>Departure From</h4>
                                    <h5>
                                      {segments.back[1]?.departureAirport}
                                    </h5>
                                    <h5>
                                      {segments.back[1]?.departureLocation}
                                    </h5>
                                    <h5>
                                      {format(
                                        new Date(
                                          segments.back[1]?.departureTime
                                        ),
                                        "dd MMM yyyy hh:mm a"
                                      )}
                                    </h5>
                                  </Box>
                                </Grid>
                                <Grid item xs={2} sm={2} md={3}>
                                  <Box className="flight-content-detail">
                                    <h4>Arrival To</h4>
                                    <h5>{segments.back[1]?.arrivalAirport}</h5>
                                    <h5>{segments.back[1]?.arrivalLocation}</h5>
                                    <h5>
                                      {format(
                                        new Date(segments.back[1]?.arrivalTime),
                                        "dd MMM yyyy hh:mm a"
                                      )}
                                    </h5>
                                  </Box>
                                </Grid>
                                <Grid item xs={3} sm={2} md={3}>
                                  <Box className="flight-content-detail">
                                    <h4>Duration</h4>
                                    <h5>{segments.back[1]?.flightduration}</h5>
                                    <Grid container>
                                      <Grid>
                                        <h5 style={{ color: "tomato" }}>
                                          {segments.back[1]?.marketingcareer}{" "}
                                          {segments.back[1]?.marketingflight}{" "}
                                        </h5>
                                      </Grid>
                                      <Grid>
                                        <h5>
                                          &nbsp;Class:{" "}
                                          {segments.back[1]?.bookingcode} &nbsp;
                                          <span style={{ color: "crimson" }}>
                                            Seat: {segments.back[1]?.seat || 9}
                                          </span>
                                        </h5>
                                      </Grid>
                                    </Grid>
                                  </Box>
                                </Grid>
                              </Grid>
                            </Box>
                            <Box className="border-content-round">
                              <span>
                                Transit Time&nbsp;{transit?.back?.transit2}
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
                                    <img
                                      src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-loback/${segments.back[2]?.marketingcareer}.png`}
                                      alt={`${segments.back[2]?.marketingcareer}`}
                                    />
                                  </Box>
                                  <Box className="flight-content-detail">
                                    <h4>Departure From</h4>
                                    <h5>
                                      {segments.back[2]?.departureAirport}
                                    </h5>
                                    <h5>
                                      {segments.back[2]?.departureLocation}
                                    </h5>
                                    <h5>
                                      {format(
                                        new Date(
                                          segments.back[2]?.departureTime
                                        ),
                                        "dd MMM yyyy hh:mm a"
                                      )}
                                    </h5>
                                  </Box>
                                </Grid>
                                <Grid item xs={2} sm={2} md={3}>
                                  <Box className="flight-content-detail">
                                    <h4>Arrival To</h4>
                                    <h5>{segments.back[2]?.arrivalAirport}</h5>
                                    <h5>{segments.back[2]?.arrivalLocation}</h5>
                                    <h5>
                                      {format(
                                        new Date(segments.back[2]?.arrivalTime),
                                        "dd MMM yyyy hh:mm a"
                                      )}
                                    </h5>
                                  </Box>
                                </Grid>
                                <Grid item xs={3} sm={2} md={3}>
                                  <Box className="flight-content-detail">
                                    <h4>Duration</h4>
                                    <h5>{segments.back[2]?.flightduration}</h5>
                                    <Grid container>
                                      <Grid>
                                        <h5 style={{ color: "tomato" }}>
                                          {segments.back[2]?.marketingcareer}{" "}
                                          {segments.back[2]?.marketingflight}{" "}
                                        </h5>
                                      </Grid>
                                      <Grid>
                                        <h5>
                                          &nbsp;Class:{" "}
                                          {segments.back[2]?.bookingcode} &nbsp;
                                          <span style={{ color: "crimson" }}>
                                            Seat: {segments.back[2]?.seat || 9}
                                          </span>
                                        </h5>
                                      </Grid>
                                    </Grid>
                                  </Box>
                                </Grid>
                              </Grid>
                            </Box>
                            {/* -------------Back End--------- */}
                          </Box>
                        ) : segment === "2" || segment === "22" ? (
                          <Box className="roundsegment-2">
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
                                  segments.go[0]?.departureLocation?.split(
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
                                {segments.go[1]?.arrivalLocation?.split(",")[0]}
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
                                      src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments.go[0]?.marketingcareer}.png`}
                                      alt={`${segments.go[0]?.marketingcareer}`}
                                    />
                                  </Box>
                                  <Box className="flight-content-detail">
                                    <h4>Departure From</h4>
                                    <h5>{segments.go[0]?.departureAirport}</h5>
                                    <h5>{segments.go[0]?.departureLocation}</h5>
                                    <h5>
                                      {format(
                                        new Date(segments.go[0]?.departureTime),
                                        "dd MMM yyyy hh:mm a"
                                      )}
                                    </h5>
                                  </Box>
                                </Grid>
                                <Grid item xs={2} sm={2} md={3}>
                                  <Box className="flight-content-detail">
                                    <h4>Arrival To</h4>
                                    <h5>{segments.go[0]?.arrivalAirport}</h5>
                                    <h5>{segments.go[0]?.arrivalLocation}</h5>
                                    <h5>
                                      {format(
                                        new Date(segments.go[0]?.arrivalTime),
                                        "dd MMM yyyy hh:mm a"
                                      )}
                                    </h5>
                                  </Box>
                                </Grid>
                                <Grid item xs={3} sm={2} md={3}>
                                  <Box className="flight-content-detail">
                                    <h4>Duration</h4>
                                    <h5>{segments.go[0]?.flightduration}</h5>
                                    <Grid container>
                                      <Grid>
                                        <h5 style={{ color: "tomato" }}>
                                          {segments.go[0]?.marketingcareer}{" "}
                                          {segments.go[0]?.marketingflight}{" "}
                                        </h5>
                                      </Grid>
                                      <Grid>
                                        <h5>
                                          &nbsp;Class:{" "}
                                          {segments.go[0]?.bookingcode} &nbsp;
                                          <span style={{ color: "crimson" }}>
                                            Seat: {segments.go[0]?.seat || 9}
                                          </span>
                                        </h5>
                                      </Grid>
                                    </Grid>
                                  </Box>
                                </Grid>
                              </Grid>
                            </Box>

                            <Box className="border-content-round">
                              <span>
                                Transit Time&nbsp;{transit?.go?.transit1}
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
                                      src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments.go[1]?.marketingcareer}.png`}
                                      alt={`${segments.go[1]?.marketingcareer}`}
                                    />
                                  </Box>
                                  <Box className="flight-content-detail">
                                    <h4>Departure From</h4>
                                    <h5>{segments.go[1]?.departureAirport}</h5>
                                    <h5>{segments.go[1]?.departureLocation}</h5>
                                    <h5>
                                      {format(
                                        new Date(segments.go[1]?.departureTime),
                                        "dd MMM yyyy hh:mm a"
                                      )}
                                    </h5>
                                  </Box>
                                </Grid>
                                <Grid item xs={2} sm={2} md={3}>
                                  <Box className="flight-content-detail">
                                    <h4>Arrival To</h4>
                                    <h5>{segments.go[1]?.arrivalAirport}</h5>
                                    <h5>{segments.go[1]?.arrivalLocation}</h5>
                                    <h5>
                                      {format(
                                        new Date(segments.go[1]?.arrivalTime),
                                        "dd MMM yyyy hh:mm a"
                                      )}
                                    </h5>
                                  </Box>
                                </Grid>
                                <Grid item xs={3} sm={2} md={3}>
                                  <Box className="flight-content-detail">
                                    <h4>Duration</h4>
                                    <h5>{segments.go[1]?.flightduration}</h5>

                                    <Grid container>
                                      <Grid>
                                        <h5 style={{ color: "tomato" }}>
                                          {segments.go[1]?.marketingcareer}{" "}
                                          {segments.go[1]?.marketingflight}{" "}
                                        </h5>
                                      </Grid>
                                      <Grid>
                                        <h5>
                                          &nbsp;Class:{" "}
                                          {segments.go[1]?.bookingcode} &nbsp;
                                          <span style={{ color: "crimson" }}>
                                            Seat: {segments.go[1]?.seat || 9}
                                          </span>
                                        </h5>
                                      </Grid>
                                    </Grid>
                                  </Box>
                                </Grid>
                              </Grid>
                            </Box>
                            {/* --------Back Start --------- */}
                            <Box className="single-flight-parent">
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
                                    segments.go[1]?.arrivalLocation?.split(
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
                                    segments.go[0]?.departureLocation?.split(
                                      ","
                                    )[0]
                                  }
                                </Typography>
                              </Box>
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
                                      src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-loback/${segments.back[0]?.marketingcareer}.png`}
                                      alt={`${segments.back[0]?.marketingcareer}`}
                                    />
                                  </Box>

                                  <Box className="flight-content-detail">
                                    <h4>Departure From</h4>
                                    <h5>
                                      {segments.back[0]?.departureAirport}
                                    </h5>
                                    <h5>
                                      {segments.back[0]?.departureLocation}
                                    </h5>
                                    <h5>
                                      {format(
                                        new Date(
                                          segments.back[0]?.departureTime
                                        ),
                                        "dd MMM yyyy hh:mm a"
                                      )}
                                    </h5>
                                  </Box>
                                </Grid>

                                <Grid item xs={2} sm={2} md={3}>
                                  <Box className="flight-content-detail">
                                    <h4>Arrival To</h4>
                                    <h5>{segments.back[0]?.arrivalAirport}</h5>
                                    <h5>{segments.back[0]?.arrivalLocation}</h5>
                                    <h5>
                                      {format(
                                        new Date(segments.back[0]?.arrivalTime),
                                        "dd MMM yyyy hh:mm a"
                                      )}
                                    </h5>
                                  </Box>
                                </Grid>
                                <Grid item xs={3} sm={2} md={3}>
                                  <Box className="flight-content-detail">
                                    <h4>Duration</h4>
                                    <h5>{segments.back[0]?.flightduration}</h5>
                                    <Grid container>
                                      <Grid>
                                        <h5 style={{ color: "tomato" }}>
                                          {segments.back[0]?.marketingcareer}{" "}
                                          {segments.back[0]?.marketingflight}{" "}
                                        </h5>
                                      </Grid>
                                      <Grid>
                                        <h5>
                                          &nbsp;Class:{" "}
                                          {segments.back[0]?.bookingcode} &nbsp;
                                          <span style={{ color: "crimson" }}>
                                            Seat: {segments.back[0]?.seat || 9}
                                          </span>
                                        </h5>
                                      </Grid>
                                    </Grid>
                                  </Box>
                                </Grid>
                              </Grid>
                            </Box>

                            <Box className="border-content-round">
                              <span>
                                Transit Time&nbsp;{transit?.back?.transit1}
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
                                      src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-loback/${segments.back[1]?.marketingcareer}.png`}
                                      alt={`${segments.back[1]?.marketingcareer}`}
                                    />
                                  </Box>
                                  <Box className="flight-content-detail">
                                    <h4>Departure From</h4>
                                    <h5>
                                      {segments.back[1]?.departureAirport}
                                    </h5>
                                    <h5>
                                      {segments.back[1]?.departureLocation}
                                    </h5>
                                    <h5>
                                      {format(
                                        new Date(
                                          segments.back[1]?.departureTime
                                        ),
                                        "dd MMM yyyy hh:mm a"
                                      )}
                                    </h5>
                                  </Box>
                                </Grid>
                                <Grid item xs={2} sm={2} md={3}>
                                  <Box className="flight-content-detail">
                                    <h4>Arrival To</h4>
                                    <h5>{segments.back[1]?.arrivalAirport}</h5>
                                    <h5>{segments.back[1]?.arrivalLocation}</h5>
                                    <h5>
                                      {format(
                                        new Date(segments.back[1]?.arrivalTime),
                                        "dd MMM yyyy hh:mm a"
                                      )}
                                    </h5>
                                  </Box>
                                </Grid>
                                <Grid item xs={3} sm={2} md={3}>
                                  <Box className="flight-content-detail">
                                    <h4>Duration</h4>
                                    <h5>{segments.back[1]?.flightduration}</h5>
                                    <Grid container>
                                      <Grid>
                                        <h5 style={{ color: "tomato" }}>
                                          {segments.back[1]?.marketingcareer}{" "}
                                          {segments.back[1]?.marketingflight}{" "}
                                        </h5>
                                      </Grid>
                                      <Grid>
                                        <h5>
                                          &nbsp;Class:{" "}
                                          {segments.back[1]?.bookingcode} &nbsp;
                                          <span style={{ color: "crimson" }}>
                                            Seat: {segments.back[1]?.seat || 9}
                                          </span>
                                        </h5>
                                      </Grid>
                                    </Grid>
                                  </Box>
                                </Grid>
                              </Grid>
                            </Box>
                            {/* --------Back End --------- */}
                          </Box>
                        ) : segment === "21" ? (
                          <Box className="roundsegment-2">
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
                                  segments.go[0]?.departureLocation?.split(
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
                                {segments.go[1]?.arrivalLocation?.split(",")[0]}
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
                                      src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments.go[0]?.marketingcareer}.png`}
                                      alt={`${segments.go[0]?.marketingcareer}`}
                                    />
                                  </Box>
                                  <Box className="flight-content-detail">
                                    <h4>Departure From</h4>
                                    <h5>{segments.go[0]?.departureAirport}</h5>
                                    <h5>{segments.go[0]?.departureLocation}</h5>
                                    <h5>
                                      {format(
                                        new Date(segments.go[0]?.departureTime),
                                        "dd MMM yyyy hh:mm a"
                                      )}
                                    </h5>
                                  </Box>
                                </Grid>
                                <Grid item xs={2} sm={2} md={3}>
                                  <Box className="flight-content-detail">
                                    <h4>Arrival To</h4>
                                    <h5>{segments.go[0]?.arrivalAirport}</h5>
                                    <h5>{segments.go[0]?.arrivalLocation}</h5>
                                    <h5>
                                      {format(
                                        new Date(segments.go[0]?.arrivalTime),
                                        "dd MMM yyyy hh:mm a"
                                      )}
                                    </h5>
                                  </Box>
                                </Grid>
                                <Grid item xs={3} sm={2} md={3}>
                                  <Box className="flight-content-detail">
                                    <h4>Duration</h4>
                                    <h5>{segments.go[0]?.flightduration}</h5>
                                    <Grid container>
                                      <Grid>
                                        <h5 style={{ color: "tomato" }}>
                                          {segments.go[0]?.marketingcareer}{" "}
                                          {segments.go[0]?.marketingflight}{" "}
                                        </h5>
                                      </Grid>
                                      <Grid>
                                        <h5>
                                          &nbsp;Class:{" "}
                                          {segments.go[0]?.bookingcode} &nbsp;
                                          <span style={{ color: "crimson" }}>
                                            Seat: {segments.go[0]?.seat || 9}
                                          </span>
                                        </h5>
                                      </Grid>
                                    </Grid>
                                  </Box>
                                </Grid>
                              </Grid>
                            </Box>

                            <Box className="border-content-round">
                              <span>
                                Transit Time&nbsp;{transit?.go?.transit1}
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
                                      src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments.go[1]?.marketingcareer}.png`}
                                      alt={`${segments.go[1]?.marketingcareer}`}
                                    />
                                  </Box>
                                  <Box className="flight-content-detail">
                                    <h4>Departure From</h4>
                                    <h5>{segments.go[1]?.departureAirport}</h5>
                                    <h5>{segments.go[1]?.departureLocation}</h5>
                                    <h5>
                                      {format(
                                        new Date(segments.go[1]?.departureTime),
                                        "dd MMM yyyy hh:mm a"
                                      )}
                                    </h5>
                                  </Box>
                                </Grid>
                                <Grid item xs={2} sm={2} md={3}>
                                  <Box className="flight-content-detail">
                                    <h4>Arrival To</h4>
                                    <h5>{segments.go[1]?.arrivalAirport}</h5>
                                    <h5>{segments.go[1]?.arrivalLocation}</h5>
                                    <h5>
                                      {format(
                                        new Date(segments.go[1]?.arrivalTime),
                                        "dd MMM yyyy hh:mm a"
                                      )}
                                    </h5>
                                  </Box>
                                </Grid>
                                <Grid item xs={3} sm={2} md={3}>
                                  <Box className="flight-content-detail">
                                    <h4>Duration</h4>
                                    <h5>{segments.go[1]?.flightduration}</h5>
                                    <Grid container>
                                      <Grid>
                                        <h5 style={{ color: "tomato" }}>
                                          {segments.go[1]?.marketingcareer}{" "}
                                          {segments.go[1]?.marketingflight}{" "}
                                        </h5>
                                      </Grid>
                                      <Grid>
                                        <h5>
                                          &nbsp;Class:{" "}
                                          {segments.go[1]?.bookingcode} &nbsp;
                                          <span style={{ color: "crimson" }}>
                                            Seat: {segments.go[1]?.seat || 9}
                                          </span>
                                        </h5>
                                      </Grid>
                                    </Grid>
                                  </Box>
                                </Grid>
                              </Grid>
                            </Box>
                            {/* -------------Back   */}
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
                                      src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments.back[0]?.marketingcareer}.png`}
                                      alt={`${segments.back[0]?.marketingcareer}`}
                                    />
                                  </Box>
                                  <Box className="flight-content-detail">
                                    <h4>Departure From</h4>
                                    <h5>
                                      {segments.back[0]?.departureAirport}
                                    </h5>
                                    <h5>
                                      {segments.back[0]?.departureLocation}
                                    </h5>
                                    <h5>
                                      {format(
                                        new Date(
                                          segments.back[0]?.departureTime
                                        ),
                                        "dd MMM yyyy hh:mm a"
                                      )}
                                    </h5>
                                  </Box>
                                </Grid>
                                <Grid item xs={2} sm={2} md={3}>
                                  <Box className="flight-content-detail">
                                    <h4>Arrival To</h4>
                                    <h5>{segments.back[0]?.arrivalAirport}</h5>
                                    <h5>{segments.back[0]?.arrivalLocation}</h5>
                                    <h5>
                                      {format(
                                        new Date(segments.back[0]?.arrivalTime),
                                        "dd MMM yyyy hh:mm a"
                                      )}
                                    </h5>
                                  </Box>
                                </Grid>
                                <Grid item xs={3} sm={2} md={3}>
                                  <Box className="flight-content-detail">
                                    <h4>Duration</h4>
                                    <h5>{segments.back[0]?.flightduration}</h5>
                                    <Grid container>
                                      <Grid>
                                        <h5 style={{ color: "tomato" }}>
                                          {segments.back[0]?.marketingcareer}{" "}
                                          {segments.back[0]?.marketingflight}{" "}
                                        </h5>
                                      </Grid>
                                      <Grid>
                                        <h5>
                                          &nbsp;Class:{" "}
                                          {segments.back[0]?.bookingcode} &nbsp;
                                          <span style={{ color: "crimson" }}>
                                            Seat: {segments.back[0]?.seat || 9}
                                          </span>
                                        </h5>
                                      </Grid>
                                    </Grid>
                                  </Box>
                                </Grid>
                              </Grid>
                            </Box>
                          </Box>
                        ) : segment === "12" ? (
                          <Box className="roundsegment-2">
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
                                  segments.go[0]?.departureLocation?.split(
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
                                {segments.go[1]?.arrivalLocation?.split(",")[0]}
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
                                      src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments.go[0]?.marketingcareer}.png`}
                                      alt={`${segments.go[0]?.marketingcareer}`}
                                    />
                                  </Box>
                                  <Box className="flight-content-detail">
                                    <h4>Departure From</h4>
                                    <h5>{segments.go[0]?.departureAirport}</h5>
                                    <h5>{segments.go[0]?.departureLocation}</h5>
                                    <h5>
                                      {format(
                                        new Date(segments.go[0]?.departureTime),
                                        "dd MMM yyyy hh:mm a"
                                      )}
                                    </h5>
                                  </Box>
                                </Grid>
                                <Grid item xs={2} sm={2} md={3}>
                                  <Box className="flight-content-detail">
                                    <h4>Arrival To</h4>
                                    <h5>{segments.go[0]?.arrivalAirport}</h5>
                                    <h5>{segments.go[0]?.arrivalLocation}</h5>
                                    <h5>
                                      {format(
                                        new Date(segments.go[0]?.arrivalTime),
                                        "dd MMM yyyy hh:mm a"
                                      )}
                                    </h5>
                                  </Box>
                                </Grid>
                                <Grid item xs={3} sm={2} md={3}>
                                  <Box className="flight-content-detail">
                                    <h4>Duration</h4>
                                    <h5>{segments.go[0]?.flightduration}</h5>
                                    <Grid container>
                                      <Grid>
                                        <h5 style={{ color: "tomato" }}>
                                          {segments.go[0]?.marketingcareer}{" "}
                                          {segments.go[0]?.marketingflight}{" "}
                                        </h5>
                                      </Grid>
                                      <Grid>
                                        <h5>
                                          &nbsp;Class:{" "}
                                          {segments.go[0]?.bookingcode} &nbsp;
                                          <span style={{ color: "crimson" }}>
                                            Seat: {segments.go[0]?.seat || 9}
                                          </span>
                                        </h5>
                                      </Grid>
                                    </Grid>
                                  </Box>
                                </Grid>
                              </Grid>
                            </Box>
                            {/* --------Back Start --------- */}
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
                                      src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-loback/${segments.back[0]?.marketingcareer}.png`}
                                      alt={`${segments.back[0]?.marketingcareer}`}
                                    />
                                  </Box>

                                  <Box className="flight-content-detail">
                                    <h4>Departure From</h4>
                                    <h5>
                                      {segments.back[0]?.departureAirport}
                                    </h5>
                                    <h5>
                                      {segments.back[0]?.departureLocation}
                                    </h5>
                                    <h5>
                                      {format(
                                        new Date(
                                          segments.back[0]?.departureTime
                                        ),
                                        "dd MMM yyyy hh:mm a"
                                      )}
                                    </h5>
                                  </Box>
                                </Grid>

                                <Grid item xs={2} sm={2} md={3}>
                                  <Box className="flight-content-detail">
                                    <h4>Arrival To</h4>
                                    <h5>{segments.back[0]?.arrivalAirport}</h5>
                                    <h5>{segments.back[0]?.arrivalLocation}</h5>
                                    <h5>
                                      {format(
                                        new Date(segments.back[0]?.arrivalTime),
                                        "dd MMM yyyy hh:mm a"
                                      )}
                                    </h5>
                                  </Box>
                                </Grid>
                                <Grid item xs={3} sm={2} md={3}>
                                  <Box className="flight-content-detail">
                                    <h4>Duration</h4>
                                    <h5>{segments.back[0]?.flightduration}</h5>
                                    <Grid container>
                                      <Grid>
                                        <h5 style={{ color: "tomato" }}>
                                          {segments.back[0]?.marketingcareer}{" "}
                                          {segments.back[0]?.marketingflight}{" "}
                                        </h5>
                                      </Grid>
                                      <Grid>
                                        <h5>
                                          &nbsp;Class:{" "}
                                          {segments.back[0]?.bookingcode} &nbsp;
                                          <span style={{ color: "crimson" }}>
                                            Seat: {segments.back[0]?.seat || 9}
                                          </span>
                                        </h5>
                                      </Grid>
                                    </Grid>
                                  </Box>
                                </Grid>
                              </Grid>
                            </Box>

                            <Box className="border-content-round">
                              <span>
                                Transit Time&nbsp;{transit?.back?.transit1}
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
                                      src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-loback/${segments.back[1]?.marketingcareer}.png`}
                                      alt={`${segments.back[1]?.marketingcareer}`}
                                    />
                                  </Box>
                                  <Box className="flight-content-detail">
                                    <h4>Departure From</h4>
                                    <h5>
                                      {segments.back[1]?.departureAirport}
                                    </h5>
                                    <h5>
                                      {segments.back[1]?.departureLocation}
                                    </h5>
                                    <h5>
                                      {format(
                                        new Date(
                                          segments.back[1]?.departureTime
                                        ),
                                        "dd MMM yyyy hh:mm a"
                                      )}
                                    </h5>
                                  </Box>
                                </Grid>
                                <Grid item xs={2} sm={2} md={3}>
                                  <Box className="flight-content-detail">
                                    <h4>Arrival To</h4>
                                    <h5>{segments.back[1]?.arrivalAirport}</h5>
                                    <h5>{segments.back[1]?.arrivalLocation}</h5>
                                    <h5>
                                      {format(
                                        new Date(segments.back[1]?.arrivalTime),
                                        "dd MMM yyyy hh:mm a"
                                      )}
                                    </h5>
                                  </Box>
                                </Grid>
                                <Grid item xs={3} sm={2} md={3}>
                                  <Box className="flight-content-detail">
                                    <h4>Duration</h4>
                                    <h5>{segments.back[1]?.flightduration}</h5>
                                    <Grid container>
                                      <Grid>
                                        <h5 style={{ color: "tomato" }}>
                                          {segments.back[1]?.marketingcareer}{" "}
                                          {segments.back[1]?.marketingflight}{" "}
                                        </h5>
                                      </Grid>
                                      <Grid>
                                        <h5>
                                          &nbsp;Class:{" "}
                                          {segments.back[1]?.bookingcode} &nbsp;
                                          <span style={{ color: "crimson" }}>
                                            Seat: {segments.back[1]?.seat || 9}
                                          </span>
                                        </h5>
                                      </Grid>
                                    </Grid>
                                  </Box>
                                </Grid>
                              </Grid>
                            </Box>
                            {/* --------Back End --------- */}
                          </Box>
                        ) : (
                          <Box className="roundsegment-2">
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
                                  segments.go[0]?.departureLocation?.split(
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
                                {segments.go[0]?.arrivalLocation?.split(",")[0]}
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
                                      src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments.go[0]?.marketingcareer}.png`}
                                      alt={`${segments.go[0]?.marketingcareer}`}
                                    />
                                  </Box>
                                  <Box className="flight-content-detail">
                                    <h4>Departure From</h4>
                                    <h5>{segments.go[0]?.departureAirport}</h5>
                                    <h5>{segments.go[0]?.departureLocation}</h5>
                                    <h5>
                                      {format(
                                        new Date(segments.go[0]?.departureTime),
                                        "dd MMM yyyy hh:mm a"
                                      )}
                                    </h5>
                                  </Box>
                                </Grid>
                                <Grid item xs={2} sm={2} md={3}>
                                  <Box className="flight-content-detail">
                                    <h4>Arrival To</h4>
                                    <h5>{segments.go[0]?.arrivalAirport}</h5>
                                    <h5>{segments.go[0]?.arrivalLocation}</h5>
                                    <h5>
                                      {format(
                                        new Date(segments.go[0]?.arrivalTime),
                                        "dd MMM yyyy hh:mm a"
                                      )}
                                    </h5>
                                  </Box>
                                </Grid>
                                <Grid item xs={3} sm={2} md={3}>
                                  <Box className="flight-content-detail">
                                    <h4>Duration</h4>
                                    <h5>{segments.go[0]?.flightduration}</h5>
                                    <Grid container>
                                      <Grid>
                                        <h5 style={{ color: "tomato" }}>
                                          {segments.go[0]?.marketingcareer}{" "}
                                          {segments.go[0]?.marketingflight}
                                        </h5>
                                      </Grid>
                                      <Grid>
                                        <h5>
                                          &nbsp;Class:{" "}
                                          {segments.go[0]?.bookingcode} &nbsp;
                                          <span style={{ color: "crimson" }}>
                                            Seat: {segments.go[0]?.seat || 9}
                                          </span>
                                        </h5>
                                      </Grid>
                                    </Grid>
                                  </Box>
                                </Grid>
                              </Grid>
                            </Box>
                            <Box
                              display="flex"
                              justifyContent={"center"}
                              alignItems="center"
                              pb={1}
                              gap={2}
                            >
                              <Typography
                                sx={{
                                  fontSize: "16px",
                                  color: "#003566",
                                  fontWeight: 600,
                                }}
                              >
                                {segments.go[0]?.arrivalLocation?.split(",")[0]}
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
                                  segments.go[0]?.departureLocation?.split(
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
                                      src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-loback/${segments.back[0]?.marketingcareer}.png`}
                                      alt={`${segments.back[0]?.marketingcareer}`}
                                    />
                                  </Box>

                                  <Box className="flight-content-detail">
                                    <h4>Departure From</h4>
                                    <h5>
                                      {segments.back[0]?.departureAirport}
                                    </h5>
                                    <h5>
                                      {segments.back[0]?.departureLocation}
                                    </h5>
                                    <h5>
                                      {format(
                                        new Date(
                                          segments.back[0]?.departureTime
                                        ),
                                        "dd MMM yyyy hh:mm a"
                                      )}
                                    </h5>
                                  </Box>
                                </Grid>

                                <Grid item xs={2} sm={2} md={3}>
                                  <Box className="flight-content-detail">
                                    <h4>Arrival To</h4>
                                    <h5>{segments.back[0]?.arrivalAirport}</h5>
                                    <h5>{segments.back[0]?.arrivalLocation}</h5>
                                    <h5>
                                      {format(
                                        new Date(segments.back[0]?.arrivalTime),
                                        "dd MMM yyyy hh:mm a"
                                      )}
                                    </h5>
                                  </Box>
                                </Grid>
                                <Grid item xs={3} sm={2} md={3}>
                                  <Box className="flight-content-detail">
                                    <h4>Duration</h4>
                                    <h5>{segments.back[0]?.flightduration}</h5>
                                    <Grid container>
                                      <Grid>
                                        <h5 style={{ color: "tomato" }}>
                                          {segments.back[0]?.marketingcareer}{" "}
                                          {segments.back[0]?.marketingflight}{" "}
                                        </h5>
                                      </Grid>
                                      <Grid>
                                        <h5>
                                          &nbsp;Class:{" "}
                                          {segments.back[0]?.bookingcode}
                                          &nbsp;
                                          <span style={{ color: "crimson" }}>
                                            Seat: {segments.back[0]?.seat || 9}
                                          </span>
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

                              {adultCount > 0 &&
                              childCount > 0 &&
                              infant > 0 ? (
                                <>
                                  <tr>
                                    <td>Adult add</td>
                                    <td>{pricebreakdown[0].BaseFare}</td>
                                    <td>{pricebreakdown[0]?.Tax}</td>
                                    <td>
                                      {parseInt(pricebreakdown[0]?.BaseFare) +
                                        parseInt(pricebreakdown[0]?.Tax)}
                                    </td>
                                    <td>{pricebreakdown[0]?.PaxCount}</td>
                                    <td>{pricebreakdown[0]?.ServiceFee}</td>
                                    <td>
                                      {(parseInt(pricebreakdown[0]?.BaseFare) +
                                        parseInt(pricebreakdown[0]?.Tax) +
                                        parseInt(
                                          pricebreakdown[0]?.ServiceFee
                                        )) *
                                        pricebreakdown[0]?.PaxCount}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Child</td>
                                    <td>{pricebreakdown[1]?.BaseFare}</td>
                                    <td>{pricebreakdown[1]?.Tax}</td>
                                    <td>
                                      {parseInt(pricebreakdown[1]?.BaseFare) +
                                        parseInt(pricebreakdown[1]?.Tax)}
                                    </td>
                                    <td>{pricebreakdown[1]?.PaxCount}</td>

                                    <td>{pricebreakdown[1]?.ServiceFee}</td>
                                    <td>
                                      {(parseInt(pricebreakdown[1]?.BaseFare) +
                                        parseInt(pricebreakdown[1]?.Tax) +
                                        parseInt(
                                          pricebreakdown[1]?.ServiceFee
                                        )) *
                                        pricebreakdown[1]?.PaxCount}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Infant</td>
                                    <td>{pricebreakdown[2]?.BaseFare}</td>
                                    <td>{pricebreakdown[2]?.Tax}</td>
                                    <td>
                                      {parseInt(pricebreakdown[2]?.BaseFare) +
                                        parseInt(pricebreakdown[2]?.Tax)}
                                    </td>
                                    <td>{pricebreakdown[2]?.PaxCount}</td>

                                    <td>{pricebreakdown[2]?.ServiceFee}</td>
                                    <td>
                                      {(parseInt(pricebreakdown[2]?.BaseFare) +
                                        parseInt(pricebreakdown[2]?.Tax) +
                                        parseInt(
                                          pricebreakdown[2]?.ServiceFee
                                        )) *
                                        pricebreakdown[2]?.PaxCount}
                                    </td>
                                  </tr>
                                </>
                              ) : adultCount > 0 && childCount > 0 ? (
                                <>
                                  <tr>
                                    <td>Adult</td>
                                    <td>{pricebreakdown[0].BaseFare}</td>
                                    <td>{pricebreakdown[0]?.Tax}</td>
                                    <td>
                                      {parseInt(pricebreakdown[0]?.BaseFare) +
                                        parseInt(pricebreakdown[0]?.Tax)}
                                    </td>
                                    <td>{pricebreakdown[0]?.PaxCount}</td>
                                    <td>{pricebreakdown[0]?.ServiceFee}</td>
                                    <td>
                                      {(parseInt(pricebreakdown[0]?.BaseFare) +
                                        parseInt(pricebreakdown[0]?.Tax) +
                                        parseInt(
                                          pricebreakdown[0]?.ServiceFee
                                        )) *
                                        pricebreakdown[0]?.PaxCount}
                                    </td>
                                  </tr>

                                  <tr>
                                    <td>Child</td>
                                    <td>{pricebreakdown[1]?.BaseFare}</td>
                                    <td>{pricebreakdown[1]?.Tax}</td>
                                    <td>
                                      {parseInt(pricebreakdown[1]?.BaseFare) +
                                        parseInt(pricebreakdown[1]?.Tax)}
                                    </td>
                                    <td>{pricebreakdown[1]?.PaxCount}</td>

                                    <td>{pricebreakdown[1]?.ServiceFee}</td>
                                    <td>
                                      {(parseInt(pricebreakdown[1]?.BaseFare) +
                                        parseInt(pricebreakdown[1]?.Tax) +
                                        parseInt(
                                          pricebreakdown[1]?.ServiceFee
                                        )) *
                                        pricebreakdown[1]?.PaxCount}
                                    </td>
                                  </tr>
                                </>
                              ) : adultCount > 0 && infant > 0 ? (
                                <>
                                  <tr>
                                    <td>Adult</td>
                                    <td>{pricebreakdown[0].BaseFare}</td>
                                    <td>{pricebreakdown[0]?.Tax}</td>
                                    <td>
                                      {parseInt(pricebreakdown[0]?.BaseFare) +
                                        parseInt(pricebreakdown[0]?.Tax)}
                                    </td>
                                    <td>{pricebreakdown[0]?.PaxCount}</td>
                                    <td>{pricebreakdown[0]?.ServiceFee}</td>
                                    <td>
                                      {(parseInt(pricebreakdown[0]?.BaseFare) +
                                        parseInt(pricebreakdown[0]?.Tax) +
                                        parseInt(
                                          pricebreakdown[0]?.ServiceFee
                                        )) *
                                        pricebreakdown[0]?.PaxCount}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Infant</td>
                                    <td>{pricebreakdown[1]?.BaseFare}</td>
                                    <td>{pricebreakdown[1]?.Tax}</td>
                                    <td>
                                      {parseInt(pricebreakdown[1]?.BaseFare) +
                                        parseInt(pricebreakdown[1]?.Tax)}
                                    </td>
                                    <td>{pricebreakdown[1]?.PaxCount}</td>

                                    <td>{pricebreakdown[1]?.ServiceFee}</td>
                                    <td>
                                      {(parseInt(pricebreakdown[1]?.BaseFare) +
                                        parseInt(pricebreakdown[1]?.Tax) +
                                        parseInt(
                                          pricebreakdown[1]?.ServiceFee
                                        )) *
                                        pricebreakdown[1]?.PaxCount}
                                    </td>
                                  </tr>
                                </>
                              ) : (
                                <tr>
                                  <td>Adult</td>
                                  <td>{pricebreakdown[0].BaseFare}</td>
                                  <td>{pricebreakdown[0]?.Tax}</td>
                                  <td>
                                    {parseInt(pricebreakdown[0]?.BaseFare) +
                                      parseInt(pricebreakdown[0]?.Tax)}
                                  </td>
                                  <td>{pricebreakdown[0]?.PaxCount}</td>
                                  <td>{pricebreakdown[0]?.ServiceFee}</td>
                                  <td>
                                    {(parseInt(pricebreakdown[0]?.BaseFare) +
                                      parseInt(pricebreakdown[0]?.Tax) +
                                      parseInt(pricebreakdown[0]?.ServiceFee)) *
                                      pricebreakdown[0]?.PaxCount}
                                  </td>
                                </tr>
                              )}
                            </table>
                          </Box>
                        </Box>
                      </TabPanel>

                      <TabPanel value="4" className="tab-class">
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

                      <TabPanel value="6" className="cancelation-1">
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
                            <Typography variant="h4">
                              (Per Passenger)
                            </Typography>
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
                              Adult : Airline Policy + 200
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
                              Adult : Airline Policy + 200
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
                            <Typography variant="h4">
                              (Per Passenger)
                            </Typography>
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
                              Adult : Airline Policy + No-Show Charge + 200
                            </Typography>
                          </Grid>
                        </Grid>

                        <Box className="warning-box">
                          <Typography fontSize={"12px"} className="alert">
                            *Important: This destination may have COVID-19
                            travel restriction in place, including specific
                            restriction for loading. Check any nation,local and
                            health advisories for this destination before you
                            book.
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
                            <Typography variant="h4">
                              (Per Passenger)
                            </Typography>
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
                              Adult : Airline Policy + 200
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
                              Adult : Airline Policy + 200
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
                            <Typography variant="h4">
                              (Per Passenger)
                            </Typography>
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
                              Adult : Airline Policy + No-Show Charge + 200
                            </Typography>
                          </Grid>
                        </Grid>

                        <Box className="warning-box">
                          <Typography fontSize={"12px"} className="alert">
                            *Important: This destination may have COVID-19
                            travel restriction in place, including specific
                            restriction for loading. Check any nation,local and
                            health advisories for this destination before you
                            book.
                          </Typography>
                        </Box>
                      </TabPanel>

                      {/* <TabPanel value="6" className="tab-class">
                              <Box className="tab-table" sx={{ m: "5px 0px" }}>
                                <Box className="flight-search-table">
                                  <table>
                                    <tr>
                                      <th>Flight Type</th>
                                      <th>Flight </th>
                                      <th>Class</th>
                                      <th>Check-In</th>
                                    </tr>
      
                                    <tr>
                                      <td>Departure</td>
                                      <td>
                                        {godeparture}-{goarrival}
                                      </td>
                                      <td>
                                        {props.roundData.class === "Sabre" ? (
                                          <>Economy</>
                                        ) : props.roundData.class === "FlyHub" ? (
                                          <>Economy</>
                                        ) : (
                                          <>{props.roundData.class}</>
                                        )}
                                      </td>
                                      <td>{adultCount + childCount + infant}</td>
                                    </tr>
                                    <tr>
                                      <th>Flight Type</th>
                                      <th>Flight </th>
                                      <th>Class</th>
                                      <th>Check-In</th>
                                    </tr>
      
                                    <tr>
                                      <td>Return</td>
                                      <td>
                                        {backdeparture}-{backarrival}
                                      </td>
                                      <td>
                                        {props.roundData.class === "Sabre" ? (
                                          <>Economy</>
                                        ) : props.roundData.class === "FlyHub" ? (
                                          <>Economy</>
                                        ) : (
                                          <>{props.roundData.class}</>
                                        )}
                                      </td>
                                      <td>{adultCount + childCount + infant}</td>
                                    </tr>
                                  </table>
                                </Box>
                              </Box>
                            </TabPanel> */}
                      <TabPanel value="7" className="tab-class">
                        <Box className="tab-table" sx={{ m: "5px 0px" }}>
                          <Box className="flight-search-table">
                            <table>
                              <tr>
                                <th>Flight Type</th>
                                <th>Flight </th>
                                <th>Class</th>
                                <th>Check-In</th>
                              </tr>

                              <tr>
                                <td>Departure</td>
                                <td>
                                  {/* {godeparture}-{goarrival} */}
                                  {segments.go[0].departure}-{" "}
                                  {segment === "1" ||
                                  segment === "12" ||
                                  segment === "13" ? (
                                    <>{segments.go[0]?.arrival}</>
                                  ) : segment === "2" ||
                                    segment === "21" ||
                                    segment === "22" ||
                                    segment === "23" ? (
                                    <>{segments.go[1]?.arrival}</>
                                  ) : segment === "3" ||
                                    segment === "31" ||
                                    segment === "32" ||
                                    segment === "33" ? (
                                    <>{segments.go[2]?.arrival}</>
                                  ) : (
                                    <>{goarrival}</>
                                  )}
                                </td>
                                <td>
                                  {props.roundData.class === "Sabre" ? (
                                    <>Economy</>
                                  ) : props.roundData.class === "FlyHub" ? (
                                    <>Economy</>
                                  ) : (
                                    <>{props.roundData.class}</>
                                  )}
                                </td>
                                <td>{adultCount + childCount + infant}</td>
                              </tr>
                              <tr>
                                <th>Flight Type</th>
                                <th>Flight </th>
                                <th>Class</th>
                                <th>Check-In</th>
                              </tr>

                              <tr>
                                <td>Return</td>
                                <td>
                                  {/* {backdeparture} */}
                                  {segments?.back[0]?.departure}-
                                  {segment === "1" ||
                                  segment === "12" ||
                                  segment === "13" ? (
                                    <>{segments.back[0]?.arrival}</>
                                  ) : segment === "2" ||
                                    segment === "21" ||
                                    segment === "22" ||
                                    segment === "23" ? (
                                    <>{segments.back[1]?.arrival}</>
                                  ) : segment === "3" ||
                                    segment === "31" ||
                                    segment === "32" ||
                                    segment === "33" ? (
                                    <>{segments.back[2]?.arrival}</>
                                  ) : (
                                    <>{backarrival}</>
                                  )}
                                </td>
                                <td>
                                  {props.roundData.class === "Sabre" ? (
                                    <>Economy</>
                                  ) : props.roundData.class === "FlyHub" ? (
                                    <>Economy</>
                                  ) : (
                                    <>{props.roundData.class}</>
                                  )}
                                </td>
                                <td>{adultCount + childCount + infant}</td>
                              </tr>
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
        {/* --------for mobile End--------- */}

        <Box
          className="flight-filter1"
          sx={{ display: { xs: "none", sm: "block", md: "block" } }}
        >
          <Grid container sx={{ display: { xs: "none", sm: "flex" } }}>
            <Grid sm={9.5}>
              {/* --------Go start -------- */}
              <Grid container>
                <Grid item sm={3} md={4} px="15px" pt="15px">
                  <Grid
                    container
                    sx={{
                      alignItems: "start",
                    }}
                  >
                    <Grid item sm={12} md={12} lg={4}>
                      <Box>
                        {system === "Sabre" ? (
                          <Box
                            sx={{
                              width: {
                                xs: "50px",
                                sm: "50px",
                                md: "71px",
                                lg: "71px",
                              },
                            }}
                          >
                            {segment === "3" ? (
                              <>
                                {career === segments?.go[0]?.marketingcareer &&
                                career === segments?.go[1]?.marketingcareer &&
                                career === segments?.go[2]?.marketingcareer ? (
                                  <>
                                    <img
                                      src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${career}.png`}
                                      className="flight-icon-sab1"
                                      alt={`${career}`}
                                    />
                                  </>
                                ) : segments?.go[0]?.marketingcareer !==
                                    segments?.go[1]?.marketingcareer &&
                                  segments?.go[1]?.marketingcareer ===
                                    segments?.go[2]?.marketingcareer ? (
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
                                          src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments?.go[0]?.marketingcareer}.png`}
                                          width="30px"
                                          height="30px"
                                          alt={`${segments?.go[0]?.marketingcareer}`}
                                        />
                                      </Box>
                                      <Box
                                        borderBottom={"2px solid #D9D9D9"}
                                        width="100%"
                                      ></Box>
                                      <Box>
                                        <img
                                          src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments?.go[1]?.marketingcareer}.png`}
                                          width="30px"
                                          height="30px"
                                          alt={`${segments?.go[1]?.marketingcareer}`}
                                        />
                                      </Box>
                                    </Box>
                                  </>
                                ) : segments?.go[0]?.marketingcareer ===
                                    segments?.go[1]?.marketingcareer &&
                                  segments?.go[1]?.marketingcareer !==
                                    segments?.go[2]?.marketingcareer ? (
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
                                          src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments?.go[0]?.marketingcareer}.png`}
                                          width="30px"
                                          height="30px"
                                          alt={`${segments?.go[0]?.marketingcareer}`}
                                        />
                                      </Box>
                                      <Box
                                        borderBottom={"2px solid #D9D9D9"}
                                        width="100%"
                                      ></Box>
                                      <Box>
                                        <img
                                          src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments?.go[2]?.marketingcareer}.png`}
                                          width="30px"
                                          height="30px"
                                          alt={`${segments?.go[2]?.marketingcareer}`}
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
                                          src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments?.go[0]?.marketingcareer}.png`}
                                          width="25px"
                                          height="25px"
                                          alt={`${segments?.go[0]?.marketingcareer}`}
                                        />
                                      </Box>
                                      <Box className="first-2"></Box>
                                      <Box className="img-first-2">
                                        <img
                                          src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments?.go[1]?.marketingcareer}.png`}
                                          width="25px"
                                          height="25px"
                                          alt={`${segments?.go[1]?.marketingcareer}`}
                                        />
                                      </Box>
                                      <Box className="first-3"></Box>
                                      <Box className="img-first-3">
                                        <img
                                          src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments?.go[2]?.marketingcareer}.png`}
                                          width="25px"
                                          height="25px"
                                          alt={`${segments?.go[2]?.marketingcareer}`}
                                        />
                                      </Box>
                                    </Box>
                                  </>
                                )}
                              </>
                            ) : segment === "2" ||
                              segment === "22" ||
                              segment === "21" ? (
                              <>
                                {career === segments?.go[0]?.marketingcareer &&
                                career === segments?.go[1]?.marketingcareer ? (
                                  <>
                                    <img
                                      src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${career}.png`}
                                      className="flight-icon-sab1"
                                      alt={`${career}`}
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
                                          src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments?.go[0]?.marketingcareer}.png`}
                                          width="30px"
                                          height="30px"
                                          alt={`${segments?.go[0]?.marketingcareer}`}
                                        />
                                      </Box>
                                      <Box
                                        borderBottom={"2px solid #D9D9D9"}
                                        width="100%"
                                      ></Box>
                                      <Box>
                                        <img
                                          src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments?.go[1]?.marketingcareer}.png`}
                                          width="30px"
                                          height="30px"
                                          alt={`${segments?.go[1]?.marketingcareer}`}
                                        />
                                      </Box>
                                    </Box>
                                  </>
                                )}
                              </>
                            ) : (
                              <img
                                src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${career}.png`}
                                className="flight-icon-sab1"
                                alt={`${career}`}
                              />
                            )}
                          </Box>
                        ) : system === "Galileo" ? (
                          <Box
                            sx={{
                              width: {
                                xs: "50px",
                                sm: "50px",
                                md: "71px",
                                lg: "71px",
                              },
                            }}
                          >
                            {segment === "3" ? (
                              <>
                                {career === segments?.[0]?.marketingcareer &&
                                career === segments?.go[1]?.marketingcareer &&
                                career === segments?.go[2]?.marketingcareer ? (
                                  <>
                                    <img
                                      src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${career}.png`}
                                      className="flight-icon-sab2"
                                      alt={`${career}`}
                                    />
                                  </>
                                ) : segments?.go[0]?.marketingcareer !==
                                    segments?.go[1]?.marketingcareer &&
                                  segments?.go[1]?.marketingcareer ===
                                    segments?.go[2]?.marketingcareer ? (
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
                                    >
                                      <Box mb="-7px">
                                        <img
                                          src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments?.go[0]?.marketingcareer}.png`}
                                          width="30px"
                                          height="30px"
                                          alt={`${segments?.go[0]?.marketingcareer}`}
                                        />
                                      </Box>
                                      <Box
                                        borderBottom={"2px solid #D9D9D9"}
                                        width="100%"
                                      ></Box>
                                      <Box>
                                        <img
                                          src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments?.go[1]?.marketingcareer}.png`}
                                          width="30px"
                                          height="30px"
                                          alt={`${segments?.go[1]?.marketingcareer}`}
                                        />
                                      </Box>
                                    </Box>
                                  </>
                                ) : segments?.go[0]?.marketingcareer ===
                                    segments?.go[1]?.marketingcareer &&
                                  segments?.go[1]?.marketingcareer !==
                                    segments?.go[2]?.marketingcareer ? (
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
                                    >
                                      <Box mb="-7px">
                                        <img
                                          src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments?.go[0]?.marketingcareer}.png`}
                                          width="30px"
                                          height="30px"
                                          alt={`${segments?.go[0]?.marketingcareer}`}
                                        />
                                      </Box>
                                      <Box
                                        borderBottom={"2px solid #D9D9D9"}
                                        width="100%"
                                      ></Box>
                                      <Box>
                                        <img
                                          src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments?.go[2]?.marketingcareer}.png`}
                                          width="30px"
                                          height="30px"
                                          alt={`${segments?.go[2]?.marketingcareer}`}
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
                                          src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments?.go[0]?.marketingcareer}.png`}
                                          width="25px"
                                          height="25px"
                                          alt={`${segments?.go[0]?.marketingcareer}`}
                                        />
                                      </Box>
                                      <Box className="first-2"></Box>
                                      <Box className="img-first-2">
                                        <img
                                          src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments?.go[1]?.marketingcareer}.png`}
                                          width="25px"
                                          height="25px"
                                          alt={`${segments?.go[1]?.marketingcareer}`}
                                        />
                                      </Box>
                                      <Box className="first-3"></Box>
                                      <Box className="img-first-3">
                                        <img
                                          src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments?.go[2]?.marketingcareer}.png`}
                                          width="25px"
                                          height="25px"
                                          alt={`${segments?.go[2]?.marketingcareer}`}
                                        />
                                      </Box>
                                    </Box>
                                  </>
                                )}
                              </>
                            ) : segment === "2" ||
                              segment === "22" ||
                              segment === "21" ? (
                              <>
                                {career === segments?.go[0]?.marketingcareer &&
                                career === segments?.go[1]?.marketingcareer ? (
                                  <>
                                    <img
                                      src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${career}.png`}
                                      className="flight-icon-sab2"
                                      alt={`${career}`}
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
                                    >
                                      <Box mb="-7px">
                                        <img
                                          src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments?.go[0]?.marketingcareer}.png`}
                                          width="30px"
                                          height="30px"
                                          alt={`${segments?.go[0]?.marketingcareer}`}
                                        />
                                      </Box>
                                      <Box
                                        borderBottom={"2px solid #D9D9D9"}
                                        width="100%"
                                      ></Box>
                                      <Box>
                                        <img
                                          src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments?.go[1]?.marketingcareer}.png`}
                                          width="30px"
                                          height="30px"
                                          alt={`${segments?.go[1]?.marketingcareer}`}
                                        />
                                      </Box>
                                    </Box>
                                  </>
                                )}
                              </>
                            ) : (
                              <img
                                src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${career}.png`}
                                className="flight-icon-sab2"
                                alt={`${career}`}
                              />
                            )}
                          </Box>
                        ) : (
                          <Box
                            sx={{
                              width: {
                                xs: "50px",
                                sm: "50px",
                                md: "71px",
                                lg: "71px",
                              },
                            }}
                          >
                            {segment === "3" ? (
                              <>
                                {career === segments?.go[0]?.marketingcareer &&
                                career === segments?.go[1]?.marketingcareer &&
                                career === segments?.go[2]?.marketingcareer ? (
                                  <>
                                    <img
                                      src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${career}.png`}
                                      className="flight-icon-sab3"
                                      alt={`${career}`}
                                    />
                                  </>
                                ) : (career ===
                                    !segments?.go[0]?.marketingcareer &&
                                    career ===
                                      segments?.go[1]?.marketingcareer) ||
                                  (career ===
                                    segments?.go[0]?.marketingcareer &&
                                    career ===
                                      !segments?.go[1]?.marketingcareer) ? (
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
                                    >
                                      <Box mb="-7px">
                                        <img
                                          src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments?.go[0]?.marketingcareer}.png`}
                                          width="30px"
                                          height="30px"
                                          alt={`${segments?.go[0]?.marketingcareer}`}
                                        />
                                      </Box>
                                      <Box
                                        borderBottom={"2px solid #D9D9D9"}
                                        width="100%"
                                      ></Box>
                                      <Box>
                                        <img
                                          src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments?.go[1]?.marketingcareer}.png`}
                                          width="30px"
                                          height="30px"
                                          alt={`${segments?.go[1]?.marketingcareer}`}
                                        />
                                      </Box>
                                    </Box>
                                  </>
                                ) : career ===
                                    segments?.go[0]?.marketingcareer ||
                                  career ===
                                    !segments?.go[2]?.marketingcareer ? (
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
                                    >
                                      <Box mb="-7px">
                                        <img
                                          src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments?.go[0]?.marketingcareer}.png`}
                                          width="30px"
                                          height="30px"
                                          alt={`${segments?.go[0]?.marketingcareer}`}
                                        />
                                      </Box>
                                      <Box
                                        borderBottom={"2px solid #D9D9D9"}
                                        width="100%"
                                      ></Box>
                                      <Box>
                                        <img
                                          src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments?.go[2]?.marketingcareer}.png`}
                                          width="30px"
                                          height="30px"
                                          alt={`${segments?.go[2]?.marketingcareer}`}
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
                                          src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments?.go[0]?.marketingcareer}.png`}
                                          width="25px"
                                          height="25px"
                                          alt={`${segments?.go[0]?.marketingcareer}`}
                                        />
                                      </Box>
                                      <Box className="first-2"></Box>
                                      <Box className="img-first-2">
                                        <img
                                          src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments?.go[1]?.marketingcareer}.png`}
                                          width="25px"
                                          height="25px"
                                          alt={`${segments?.go[1]?.marketingcareer}`}
                                        />
                                      </Box>
                                      <Box className="first-3"></Box>
                                      <Box className="img-first-3">
                                        <img
                                          src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments?.go[2]?.marketingcareer}.png`}
                                          width="25px"
                                          height="25px"
                                          alt={`${segments?.go[2]?.marketingcareer}`}
                                        />
                                      </Box>
                                    </Box>
                                  </>
                                )}
                              </>
                            ) : segment === "2" ||
                              segment === "22" ||
                              segment === "21" ? (
                              <>
                                {career === segments?.go[0]?.marketingcareer &&
                                career === segments?.go[1]?.marketingcareer ? (
                                  <>
                                    <img
                                      src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${career}.png`}
                                      className="flight-icon-sab3"
                                      alt={`${career}`}
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
                                    >
                                      <Box mb="-7px">
                                        <img
                                          src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments?.go[0]?.marketingcareer}.png`}
                                          width="30px"
                                          height="30px"
                                          alt={`${segments?.go[0]?.marketingcareer}`}
                                        />
                                      </Box>
                                      <Box
                                        borderBottom={"2px solid #D9D9D9"}
                                        width="100%"
                                      ></Box>
                                      <Box>
                                        <img
                                          src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments?.go[1]?.marketingcareer}.png`}
                                          width="30px"
                                          height="30px"
                                          alt={`${segments?.go[1]?.marketingcareer}`}
                                        />
                                      </Box>
                                    </Box>
                                  </>
                                )}
                              </>
                            ) : (
                              <img
                                src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${career}.png`}
                                className="flight-icon-sab3"
                                alt={`${career}`}
                              />
                            )}
                          </Box>
                        )}
                      </Box>
                    </Grid>
                    <Grid item sm={12} md={12} lg={8}>
                      <Box pl={1}>
                        <Typography
                          sx={{
                            color: "#DC143C",
                            fontWeight: 500,
                            fontSize: {
                              xs: "12px",
                              sm: "10px",
                              md: "14px",
                              lg: "14px",
                            },
                          }}
                        >
                          {/* {careerName} */}
                          {/* --------start- */}
                          {/* {segment === "3" ? (
                                  <>
                                    {career === segments?.go[0]?.marketingcareer &&
                                    career === segments?.go[1]?.marketingcareer &&
                                    career === segments?.go[2]?.marketingcareer ? (
                                      <>{careerName}</>
                                    ) : (career ===
                                        !segments?.go[0]?.marketingcareer &&
                                        career ===
                                          segments?.go[1]?.marketingcareer) ||
                                      (career === segments?.go[0]?.marketingcareer &&
                                        career ===
                                          !segments?.go[1]?.marketingcareer) ? (
                                      <>
                                        {segments?.go[0]?.marketingcareerName}
                                        <br />
                                        {segments?.go[1]?.marketingcareerName}
                                      </>
                                    ) : career === segments?.go[0]?.marketingcareer &&
                                      career === !segments?.go[2]?.marketingcareer ? (
                                      <>
                                        {segments?.go[0]?.marketingcareerName}
                                        <br />
                                        {segments?.go[2]?.marketingcareerName}
                                      </>
                                    ) : career === segments?.go[0]?.marketingcareer ||
                                      career === !segments?.go[2]?.marketingcareer ? (
                                      <>
                                        {segments?.go[0]?.marketingcareerName}
                                        <br />
                                        {segments?.go[2]?.marketingcareerName}
                                      </>
                                    ) : (
                                      <>
                                        {segments?.go[0]?.marketingcareerName}
                                        <br />
                                        {segments?.go[1]?.marketingcareerName}
                                        <br />
                                        {segments?.go[2]?.marketingcareerName}
                                      </>
                                    )}
                                  </>
                                ) : segment === "2" ||
                                  segment === "22" ||
                                  segment === "21" ? (
                                  <>
                                    {career === segments?.go[0]?.marketingcareer &&
                                    career === segments?.go[1]?.marketingcareer ? (
                                      <>{careerName}</>
                                    ) : (
                                      <>
                                        {segments?.go[0]?.marketingcareerName}
                                        <br />
                                        {segments?.go[1]?.marketingcareerName}
                                      </>
                                    )}
                                  </>
                                ) : (
                                  <>{careerName}</>
                                )} */}
                          {/* {segment === "3" ? (
                                  <>{segments.go[0]?.marketingcareerName}</>
                                ) : segment === "2" ? (
                                  <>{segments.go[0]?.marketingcareerName}</>
                                ) : (
                                  <>{careerName}</>
                                )} */}
                          {segments.go[0]?.marketingcareerName || careerName}
                          {/* --------end- */}
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
                          {segment === "3" ? (
                            <>
                              {segments.go[0]?.marketingcareer}&nbsp;
                              {segments.go[0]?.marketingflight} {" | "}
                              {segments.go[1]?.marketingcareer}&nbsp;
                              {segments.go[1]?.marketingflight} {" | "}
                              {segments.go[2]?.marketingcareer}&nbsp;
                              {segments.go[2]?.marketingflight}
                            </>
                          ) : segment === "2" ||
                            segment === "21" ||
                            segment === "22" ? (
                            <>
                              {segments.go[0]?.marketingcareer}&nbsp;
                              {segments.go[0]?.marketingflight} {" | "}
                              {segments.go[1]?.marketingcareer}&nbsp;
                              {segments.go[1]?.marketingflight}
                            </>
                          ) : (
                            <>
                              {segments.go[0]?.marketingcareer}&nbsp;
                              {segments.go[0]?.marketingflight}
                            </>
                          )}
                        </Typography>
                      </Box>
                      <Box pl={1}>
                        {segment === "3" ? (
                          <Typography color="#003566" fontSize="12px">
                            {goflightduration}&nbsp;|&nbsp;
                            <spans style={{ color: "#dc143c" }}>Two Stop</spans>
                          </Typography>
                        ) : segment === "2" ||
                          segment === "12" ||
                          segment === "22" ? (
                          <Typography color="#003566" fontSize="12px">
                            {goflightduration}&nbsp;|&nbsp;
                            <spans style={{ color: "#dc143c" }}>One Stop</spans>
                          </Typography>
                        ) : (
                          <Typography color="#003566" fontSize="12px">
                            {goflightduration}&nbsp;|&nbsp;
                            <spans style={{ color: "#dc143c" }}>Non Stop</spans>
                          </Typography>
                        )}
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item sm={9} md={8} paddingY="15px">
                  <Grid container justifyContent={"space-between"}>
                    <Grid item md={3.5}>
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
                          {/* {godeparture} */}
                          {segments.go[0]?.departure}
                          <span> - </span>
                          {system === "Galileo"
                            ? `${
                                new Date(godepartureTime)
                                  .toTimeString()
                                  ?.split(":")[0]
                              }:${
                                new Date(godepartureTime)
                                  .toTimeString()
                                  ?.split(":")[1]
                              }`
                            : `${godepartureTime?.split(":")[0]}:${
                                godepartureTime?.split(":")[1]
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
                          {segments.go[0]?.departureLocation}
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
                          {godepartureDate}
                        </Typography>
                      </Box>
                    </Grid>

                    <Grid item md={5}>
                      <Box textAlign={"center"}>
                        <Typography>
                          {/* ---------stops------ */}

                          {segment === "3" ? (
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
                                  {segments?.go[0]?.flightduration}
                                  &nbsp;|&nbsp;
                                  {segments?.go[1]?.flightduration}
                                  &nbsp;|&nbsp;
                                  {segments?.go[2]?.flightduration}
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
                                              sx={{
                                                color: "#fff",
                                                fontSize: "10px",
                                              }}
                                            >
                                              {segments.go[0].departure}
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
                                              sx={{
                                                color: "#fff",
                                                fontSize: "10px",
                                              }}
                                            >
                                              {segment === "1" ||
                                              segment === "12" ||
                                              segment === "13" ? (
                                                <>{segments.go[0]?.arrival}</>
                                              ) : segment === "2" ||
                                                segment === "21" ||
                                                segment === "22" ||
                                                segment === "23" ? (
                                                <>{segments.go[1]?.arrival}</>
                                              ) : segment === "3" ||
                                                segment === "31" ||
                                                segment === "32" ||
                                                segment === "33" ? (
                                                <>{segments.go[2]?.arrival}</>
                                              ) : (
                                                <>{goarrival}</>
                                              )}
                                              {goarrival}
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
                                        sx={{
                                          color: "#fff",
                                          fontSize: "10px",
                                        }}
                                      >
                                        <span style={{ fontSize: "12px" }}>
                                          {
                                            segments.go[0]?.arrivalLocation?.split(
                                              ","
                                            )[0]
                                          }
                                        </span>
                                        <br />
                                        {segments.go[1]?.marketingcareer}
                                        {segments.go[1]?.marketingflight}{" "}
                                        <span> | </span>
                                        Transit: {transit?.go?.transit1}
                                      </Typography>
                                    </React.Fragment>
                                  }
                                  followCursor
                                >
                                  <Box className="arival-text">
                                    {segments.go[0]?.arrival}
                                  </Box>
                                </HtmlTooltip>
                                <HtmlTooltip
                                  title={
                                    <React.Fragment>
                                      <Typography
                                        sx={{
                                          color: "#fff",
                                          fontSize: "10px",
                                        }}
                                      >
                                        <span style={{ fontSize: "12px" }}>
                                          {
                                            segments.go[1]?.arrivalLocation?.split(
                                              ","
                                            )[0]
                                          }
                                        </span>
                                        <br />
                                        {segments.go[2]?.marketingcareer}
                                        {segments.go[2]?.marketingflight}
                                        <span> | </span>
                                        Transit: {transit?.go?.transit2}
                                      </Typography>
                                    </React.Fragment>
                                  }
                                  followCursor
                                >
                                  <Box className="arival-text">
                                    {" "}
                                    {segments.go[1]?.arrival}
                                  </Box>
                                </HtmlTooltip>
                              </Typography>
                            </Box>
                          ) : segment === "2" || segment === "21" ? (
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
                                  {segments?.go[0]?.flightduration}
                                  &nbsp;|&nbsp;
                                  {segments?.go[1]?.flightduration}
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
                                              sx={{
                                                color: "#fff",
                                                fontSize: "10px",
                                              }}
                                            >
                                              {segments.go[0].departure}
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
                                              sx={{
                                                color: "#fff",
                                                fontSize: "10px",
                                              }}
                                            >
                                              {segment === "1" ||
                                              segment === "12" ||
                                              segment === "13" ? (
                                                <>{segments.go[0]?.arrival}</>
                                              ) : segment === "2" ||
                                                segment === "21" ||
                                                segment === "22" ||
                                                segment === "23" ? (
                                                <>{segments.go[1]?.arrival}</>
                                              ) : segment === "3" ||
                                                segment === "31" ||
                                                segment === "32" ||
                                                segment === "33" ? (
                                                <>{segments.go[2]?.arrival}</>
                                              ) : (
                                                <>{goarrival}</>
                                              )}
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
                                        sx={{
                                          color: "#fff",
                                          fontSize: "10px",
                                        }}
                                      >
                                        <span style={{ fontSize: "12px" }}>
                                          {
                                            segments.go[0]?.arrivalLocation?.split(
                                              ","
                                            )[0]
                                          }{" "}
                                        </span>
                                        <br />
                                        {segments.go[1]?.marketingcareer}
                                        {segments.go[1]?.marketingflight}
                                        <span> | </span>
                                        Transit: {transit?.go?.transit1}
                                      </Typography>
                                    </React.Fragment>
                                  }
                                  followCursor
                                >
                                  <Box className="arival-text2">
                                    {segments.go[0]?.arrival}
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
                                  {goflightduration}
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
                                              sx={{
                                                color: "#fff",
                                                fontSize: "10px",
                                              }}
                                            >
                                              {segments.go[0].departure}
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
                                              sx={{
                                                color: "#fff",
                                                fontSize: "10px",
                                              }}
                                            >
                                              {segment === "1" ||
                                              segment === "12" ||
                                              segment === "13" ? (
                                                <>{segments.go[0]?.arrival}</>
                                              ) : segment === "2" ||
                                                segment === "21" ||
                                                segment === "22" ||
                                                segment === "23" ? (
                                                <>{segments.go[1]?.arrival}</>
                                              ) : segment === "3" ||
                                                segment === "31" ||
                                                segment === "32" ||
                                                segment === "33" ? (
                                                <>{segments.go[2]?.arrival}</>
                                              ) : (
                                                <>{goarrival}</>
                                              )}
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

                    <Grid item md={3.5}>
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
                          {/* {goarrival} */}
                          {segment === "1" ? (
                            <>{segments.go[0]?.arrival}</>
                          ) : segment === "2" ? (
                            <>{segments.go[1]?.arrival}</>
                          ) : segment === "3" ? (
                            <>{segments.go[2]?.arrival}</>
                          ) : (
                            <>{goarrival}</>
                          )}
                          <span> - </span>

                          {system === "Galileo"
                            ? `${
                                new Date(goarrivalTime)
                                  .toTimeString()
                                  ?.split(":")[0]
                              }:${
                                new Date(goarrivalTime)
                                  .toTimeString()
                                  ?.split(":")[1]
                              }`
                            : `${goarrivalTime?.split(":")[0]}:${
                                goarrivalTime?.split(":")[1]
                              }`}
                        </Typography>
                        {segment === "3" ? (
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
                            {segments.go[2]?.arrivalLocation}
                          </Typography>
                        ) : segment === "2" || segment === "21" ? (
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
                            {segments.go[1]?.arrivalLocation}
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
                            {segments.go[0]?.arrivalLocation}
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
                          {goarrivalDate}
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              {/* --------Go End -------- */}
              {/* -------- Retunr Start -------- */}
              <Grid container>
                <Grid item sm={3} md={4} px="15px" pt="15px">
                  <Grid
                    container
                    sx={{
                      alignItems: "start",
                    }}
                  >
                    <Grid item sm={12} md={12} lg={4}>
                      <Box>
                        {system === "Sabre" ? (
                          <Box
                            sx={{
                              width: {
                                xs: "50px",
                                sm: "50px",
                                md: "71px",
                                lg: "71px",
                              },
                            }}
                          >
                            {segment === "3" ? (
                              <>
                                {career ===
                                  segments?.back[0]?.marketingcareer &&
                                career === segments?.back[1]?.marketingcareer &&
                                career ===
                                  segments?.back[2]?.marketingcareer ? (
                                  <>
                                    <img
                                      src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${career}.png`}
                                      className="flight-icon-sab1"
                                      alt={`${career}`}
                                    />
                                  </>
                                ) : segments?.back[0]?.marketingcareer !==
                                    segments?.back[1]?.marketingcareer &&
                                  segments?.back[1]?.marketingcareer ===
                                    segments?.back[2]?.marketingcareer ? (
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
                                    >
                                      <Box mb="-7px">
                                        <img
                                          src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments?.back[0]?.marketingcareer}.png`}
                                          width="30px"
                                          height="30px"
                                          alt={`${segments?.back[0]?.marketingcareer}`}
                                        />
                                      </Box>
                                      <Box
                                        borderBottom={"2px solid #D9D9D9"}
                                        width="100%"
                                      ></Box>
                                      <Box>
                                        <img
                                          src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments?.back[1]?.marketingcareer}.png`}
                                          width="30px"
                                          height="30px"
                                          alt={`${segments?.back[1]?.marketingcareer}`}
                                        />
                                      </Box>
                                    </Box>
                                  </>
                                ) : segments?.back[0]?.marketingcareer ===
                                    segments?.back[1]?.marketingcareer &&
                                  segments?.back[1]?.marketingcareer !==
                                    segments?.back[2]?.marketingcareer ? (
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
                                    >
                                      <Box mb="-7px">
                                        <img
                                          src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments?.back[0]?.marketingcareer}.png`}
                                          width="30px"
                                          height="30px"
                                          alt={`${segments?.back[0]?.marketingcareer}`}
                                        />
                                      </Box>
                                      <Box
                                        borderBottom={"2px solid #D9D9D9"}
                                        width="100%"
                                      ></Box>
                                      <Box>
                                        <img
                                          src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments?.back[2]?.marketingcareer}.png`}
                                          width="30px"
                                          height="30px"
                                          alt={`${segments?.back[2]?.marketingcareer}`}
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
                                          src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments?.back[0]?.marketingcareer}.png`}
                                          width="25px"
                                          height="25px"
                                          alt={`${segments?.back[0]?.marketingcareer}`}
                                        />
                                      </Box>
                                      <Box className="first-2"></Box>
                                      <Box className="img-first-2">
                                        <img
                                          src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments?.back[1]?.marketingcareer}.png`}
                                          width="25px"
                                          height="25px"
                                          alt={`${segments?.back[1]?.marketingcareer}`}
                                        />
                                      </Box>
                                      <Box className="first-3"></Box>
                                      <Box className="img-first-3">
                                        <img
                                          src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments?.back[2]?.marketingcareer}.png`}
                                          width="25px"
                                          height="25px"
                                          alt={`${segments?.back[2]?.marketingcareer}`}
                                        />
                                      </Box>
                                    </Box>
                                  </>
                                )}
                              </>
                            ) : segment === "2" ||
                              segment === "22" ||
                              segment === "12" ? (
                              <>
                                {career ===
                                  segments?.back[0]?.marketingcareer &&
                                career ===
                                  segments?.back[1]?.marketingcareer ? (
                                  <>
                                    <img
                                      src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${career}.png`}
                                      className="flight-icon-sab1"
                                      alt={`${career}`}
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
                                    >
                                      <Box mb="-7px">
                                        <img
                                          src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments?.back[0]?.marketingcareer}.png`}
                                          width="30px"
                                          height="30px"
                                          alt={`${segments?.back[0]?.marketingcareer}`}
                                        />
                                      </Box>
                                      <Box
                                        borderBottom={"2px solid #D9D9D9"}
                                        width="100%"
                                      ></Box>
                                      <Box>
                                        <img
                                          src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments?.back[1]?.marketingcareer}.png`}
                                          width="30px"
                                          height="30px"
                                          alt={`${segments?.back[1]?.marketingcareer}`}
                                        />
                                      </Box>
                                    </Box>
                                  </>
                                )}
                              </>
                            ) : (
                              <img
                                src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments?.back[0]?.marketingcareer}.png`}
                                className="flight-icon-sab1"
                                alt={`${segments?.back[0]?.marketingcareer}`}
                              />
                            )}
                          </Box>
                        ) : system === "Galileo" ? (
                          <Box
                            sx={{
                              width: {
                                xs: "50px",
                                sm: "50px",
                                md: "71px",
                                lg: "71px",
                              },
                            }}
                          >
                            {segment === "3" ? (
                              <>
                                {career ===
                                  segments?.back[0]?.marketingcareer &&
                                career === segments?.back[1]?.marketingcareer &&
                                career ===
                                  segments?.back[2]?.marketingcareer ? (
                                  <>
                                    <img
                                      src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${career}.png`}
                                      className="flight-icon-sab2"
                                      alt={`${career}`}
                                    />
                                  </>
                                ) : segments?.back[0]?.marketingcareer !==
                                    segments?.back[1]?.marketingcareer &&
                                  segments?.back[1]?.marketingcareer ===
                                    segments?.back[2]?.marketingcareer ? (
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
                                    >
                                      <Box mb="-7px">
                                        <img
                                          src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments?.back[0]?.marketingcareer}.png`}
                                          width="30px"
                                          height="30px"
                                          alt={`${segments?.back[0]?.marketingcareer}`}
                                        />
                                      </Box>
                                      <Box
                                        borderBottom={"2px solid #D9D9D9"}
                                        width="100%"
                                      ></Box>
                                      <Box>
                                        <img
                                          src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments?.back[1]?.marketingcareer}.png`}
                                          width="30px"
                                          height="30px"
                                          alt={`${segments?.back[1]?.marketingcareer}`}
                                        />
                                      </Box>
                                    </Box>
                                  </>
                                ) : segments?.back[0]?.marketingcareer ===
                                    segments?.back[1]?.marketingcareer &&
                                  segments?.back[1]?.marketingcareer !==
                                    segments?.back[2]?.marketingcareer ? (
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
                                    >
                                      <Box mb="-7px">
                                        <img
                                          src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments?.back[0]?.marketingcareer}.png`}
                                          width="30px"
                                          height="30px"
                                          alt={`${segments?.back[0]?.marketingcareer}`}
                                        />
                                      </Box>
                                      <Box
                                        borderBottom={"2px solid #D9D9D9"}
                                        width="100%"
                                      ></Box>
                                      <Box>
                                        <img
                                          src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments?.back[2]?.marketingcareer}.png`}
                                          width="30px"
                                          height="30px"
                                          alt={`${segments?.back[2]?.marketingcareer}`}
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
                                          src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments?.back[0]?.marketingcareer}.png`}
                                          width="25px"
                                          height="25px"
                                          alt={`${segments?.back[0]?.marketingcareer}`}
                                        />
                                      </Box>
                                      <Box className="first-2"></Box>
                                      <Box className="img-first-2">
                                        <img
                                          src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments?.back[1]?.marketingcareer}.png`}
                                          width="25px"
                                          height="25px"
                                          alt={`${segments?.back[1]?.marketingcareer}`}
                                        />
                                      </Box>
                                      <Box className="first-3"></Box>
                                      <Box className="img-first-3">
                                        <img
                                          src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments?.back[2]?.marketingcareer}.png`}
                                          width="25px"
                                          height="25px"
                                          alt={`${segments?.back[2]?.marketingcareer}`}
                                        />
                                      </Box>
                                    </Box>
                                  </>
                                )}
                              </>
                            ) : segment === "2" ||
                              segment === "22" ||
                              segment === "12" ? (
                              <>
                                {career ===
                                  segments?.back[0]?.marketingcareer &&
                                career ===
                                  segments?.back[1]?.marketingcareer ? (
                                  <>
                                    <img
                                      src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${career}.png`}
                                      className="flight-icon-sab2"
                                      alt={`${career}`}
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
                                    >
                                      <Box mb="-7px">
                                        <img
                                          src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments?.back[0]?.marketingcareer}.png`}
                                          width="30px"
                                          height="30px"
                                          alt={`${segments?.back[0]?.marketingcareer}`}
                                        />
                                      </Box>
                                      <Box
                                        borderBottom={"2px solid #D9D9D9"}
                                        width="100%"
                                      ></Box>
                                      <Box>
                                        <img
                                          src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments?.back[1]?.marketingcareer}.png`}
                                          width="30px"
                                          height="30px"
                                          alt={`${segments?.back[1]?.marketingcareer}`}
                                        />
                                      </Box>
                                    </Box>
                                  </>
                                )}
                              </>
                            ) : (
                              <img
                                src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments?.back[0]?.marketingcareer}.png`}
                                className="flight-icon-sab2"
                                alt={`${segments?.back[0]?.marketingcareer}`}
                              />
                            )}
                          </Box>
                        ) : (
                          // ----- gali end
                          <Box
                            sx={{
                              width: {
                                xs: "50px",
                                sm: "50px",
                                md: "71px",
                                lg: "71px",
                              },
                            }}
                          >
                            {segment === "3" ? (
                              <>
                                {career ===
                                  segments?.back[0]?.marketingcareer &&
                                career === segments?.back[1]?.marketingcareer &&
                                career ===
                                  segments?.back[2]?.marketingcareer ? (
                                  <>
                                    <img
                                      src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${career}.png`}
                                      className="flight-icon-sab3"
                                      alt={`${career}`}
                                    />
                                  </>
                                ) : segments?.back[0]?.marketingcareer !==
                                    segments?.back[1]?.marketingcareer &&
                                  segments?.back[1]?.marketingcareer ===
                                    segments?.back[2]?.marketingcareer ? (
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
                                    >
                                      <Box mb="-7px">
                                        <img
                                          src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments?.back[0]?.marketingcareer}.png`}
                                          width="30px"
                                          height="30px"
                                          alt={`${segments?.back[0]?.marketingcareer}`}
                                        />
                                      </Box>
                                      <Box
                                        borderBottom={"2px solid #D9D9D9"}
                                        width="100%"
                                      ></Box>
                                      <Box>
                                        <img
                                          src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments?.back[1]?.marketingcareer}.png`}
                                          width="30px"
                                          height="30px"
                                          alt={`${segments?.back[1]?.marketingcareer}`}
                                        />
                                      </Box>
                                    </Box>
                                  </>
                                ) : segments?.back[0]?.marketingcareer ===
                                    segments?.back[1]?.marketingcareer &&
                                  segments?.back[1]?.marketingcareer !==
                                    segments?.back[2]?.marketingcareer ? (
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
                                    >
                                      <Box mb="-7px">
                                        <img
                                          src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments?.back[0]?.marketingcareer}.png`}
                                          width="30px"
                                          height="30px"
                                          alt={`${segments?.back[0]?.marketingcareer}`}
                                        />
                                      </Box>
                                      <Box
                                        borderBottom={"2px solid #D9D9D9"}
                                        width="100%"
                                      ></Box>
                                      <Box>
                                        <img
                                          src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments?.back[2]?.marketingcareer}.png`}
                                          width="30px"
                                          height="30px"
                                          alt={`${segments?.back[2]?.marketingcareer}`}
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
                                          src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments?.back[0]?.marketingcareer}.png`}
                                          width="25px"
                                          height="25px"
                                          alt={`${segments?.back[0]?.marketingcareer}`}
                                        />
                                      </Box>
                                      <Box className="first-2"></Box>
                                      <Box className="img-first-2">
                                        <img
                                          src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments?.back[1]?.marketingcareer}.png`}
                                          width="25px"
                                          height="25px"
                                          alt={`${segments?.back[1]?.marketingcareer}`}
                                        />
                                      </Box>
                                      <Box className="first-3"></Box>
                                      <Box className="img-first-3">
                                        <img
                                          src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments?.back[2]?.marketingcareer}.png`}
                                          width="25px"
                                          height="25px"
                                          alt={`${segments?.back[2]?.marketingcareer}`}
                                        />
                                      </Box>
                                    </Box>
                                  </>
                                )}
                              </>
                            ) : segment === "2" ||
                              segment === "22" ||
                              segment === "12" ? (
                              <>
                                {career ===
                                  segments?.back[0]?.marketingcareer &&
                                career ===
                                  segments?.back[1]?.marketingcareer ? (
                                  <>
                                    <img
                                      src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${career}.png`}
                                      className="flight-icon-sab3"
                                      alt={`${career}`}
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
                                    >
                                      <Box mb="-7px">
                                        <img
                                          src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments?.back[0]?.marketingcareer}.png`}
                                          width="30px"
                                          height="30px"
                                          alt={`${segments?.back[0]?.marketingcareer}`}
                                        />
                                      </Box>
                                      <Box
                                        borderBottom={"2px solid #D9D9D9"}
                                        width="100%"
                                      ></Box>
                                      <Box>
                                        <img
                                          src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments?.back[1]?.marketingcareer}.png`}
                                          width="30px"
                                          height="30px"
                                          alt={`${segments?.back[1]?.marketingcareer}`}
                                        />
                                      </Box>
                                    </Box>
                                  </>
                                )}
                              </>
                            ) : (
                              <img
                                src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments?.back[0]?.marketingcareer}.png`}
                                className="flight-icon-sab3"
                                alt={`${segments?.back[0]?.marketingcareer}`}
                              />
                            )}
                          </Box>
                        )}
                      </Box>
                    </Grid>
                    <Grid item sm={12} md={12} lg={8}>
                      <Box pl={1}>
                        <Typography
                          sx={{
                            color: "#DC143C",
                            fontWeight: 500,
                            fontSize: {
                              xs: "12px",
                              sm: "10px",
                              md: "14px",
                              lg: "14px",
                            },
                          }}
                        >
                          {/* {careerName} */}
                          {/* --------start- */}
                          {/* {segment === "3" ? (
                                  <>
                                    {career === segments?.back[0]?.marketingcareer &&
                                    career === segments?.back[1]?.marketingcareer &&
                                    career === segments?.back[2]?.marketingcareer ? (
                                      <>{careerName}</>
                                    ) : (career ===
                                        !segments?.back[0]?.marketingcareer &&
                                        career ===
                                          segments?.back[1]?.marketingcareer) ||
                                      (career ===
                                        segments?.back[0]?.marketingcareer &&
                                        career ===
                                          !segments?.back[1]?.marketingcareer) ? (
                                      <>
                                        {segments?.back[0]?.marketingcareerName}
                                        <br />
                                        {segments?.back[1]?.marketingcareerName}
                                      </>
                                    ) : segments?.back[0]?.marketingcareer ===
                                        segments?.back[1]?.marketingcareer ||
                                      (career ===
                                        segments?.back[0]?.marketingcareer &&
                                        career ===
                                          !segments?.back[2]?.marketingcareer) ? (
                                      <>
                                        {segments?.back[0]?.marketingcareerName}
                                        <br />
                                        {segments?.back[2]?.marketingcareerName}
                                      </>
                                    ) : (
                                      <>
                                        {segments?.back[0]?.marketingcareerName}
                                        <br />
                                        {segments?.back[1]?.marketingcareerName}
                                      </>
                                    )}
                                  </>
                                ) : segment === "2" ||
                                  segment === "22" ||
                                  segment === "21" ? (
                                  <>
                                    {career === segments?.back[0]?.marketingcareer &&
                                    career === segments?.back[1]?.marketingcareer ? (
                                      <>{careerName}</>
                                    ) : (
                                      <>
                                        {segments?.back[0]?.marketingcareerName}
                                        <br />
                                        {segments?.back[1]?.marketingcareerName}
                                      </>
                                    )}
                                  </>
                                ) : (
                              
                                )} */}

                          {/* {segment === "3" ? (
                                  <>{segments.back[0]?.marketingcareerName}</>
                                ) : segment === "2" ? (
                                  <>{segments.back[0]?.marketingcareerName}</>
                                ) : (
                                  <>{careerName}</>
                                )} */}
                          {segments.back[0]?.marketingcareerName || careerName}
                          {/* --------end- */}
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
                          {segment === "3" ? (
                            <>
                              {segments.back[0]?.marketingcareer}&nbsp;
                              {segments.back[0]?.marketingflight} {" | "}
                              {segments.back[1]?.marketingcareer}&nbsp;
                              {segments.back[1]?.marketingflight} {" | "}
                              {segments.back[2]?.marketingcareer}&nbsp;
                              {segments.back[2]?.marketingflight}
                            </>
                          ) : segment === "2" ||
                            segment === "12" ||
                            segment === "22" ? (
                            <>
                              {segments.back[0]?.marketingcareer}&nbsp;
                              {segments.back[0]?.marketingflight} {" | "}
                              {segments.back[1]?.marketingcareer}&nbsp;
                              {segments.back[1]?.marketingflight}
                            </>
                          ) : (
                            <>
                              {segments.back[0]?.marketingcareer}&nbsp;
                              {segments.back[0]?.marketingflight}
                            </>
                          )}
                        </Typography>
                      </Box>
                      <Box pl={1}>
                        {segment === "3" ? (
                          <Typography color="#003566" fontSize="12px">
                            {backflightduration}&nbsp;|&nbsp;
                            <spans style={{ color: "#dc143c" }}>Two Stop</spans>
                          </Typography>
                        ) : segment === "2" ||
                          segment === "12" ||
                          segment === "22" ? (
                          <Typography color="#003566" fontSize="12px">
                            {backflightduration}&nbsp;|&nbsp;
                            <spans style={{ color: "#dc143c" }}>One Stop</spans>
                          </Typography>
                        ) : (
                          <Typography color="#003566" fontSize="12px">
                            {backflightduration}&nbsp;|&nbsp;
                            <spans style={{ color: "#dc143c" }}>Non Stop</spans>
                          </Typography>
                        )}
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item sm={9} md={8} paddingY="5px">
                  <Grid container justifyContent={"space-between"}>
                    <Grid item md={3.5}>
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
                          {/* {backdeparture} */}
                          {segments?.back[0]?.departure}

                          <span> - </span>
                          {system === "Galileo"
                            ? `${
                                new Date(backdepartureTime)
                                  .toTimeString()
                                  ?.split(":")[0]
                              }:${
                                new Date(backdepartureTime)
                                  .toTimeString()
                                  ?.split(":")[1]
                              }`
                            : `${backdepartureTime?.split(":")[0]}:${
                                backdepartureTime?.split(":")[1]
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
                          {segments.back[0]?.departureLocation}
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
                          {backdepartureDate}
                        </Typography>
                      </Box>
                    </Grid>

                    <Grid item md={5}>
                      <Box textAlign={"center"}>
                        <Typography>
                          {/* ---------stops------ */}

                          {segment === "3" ? (
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
                                  {segments?.back[0]?.flightduration}
                                  &nbsp;|&nbsp;
                                  {segments?.back[1]?.flightduration}
                                  &nbsp;|&nbsp;
                                  {segments?.back[2]?.flightduration}
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
                                              sx={{
                                                color: "#fff",
                                                fontSize: "10px",
                                              }}
                                            >
                                              {segments?.back[0]?.departure}
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
                                              sx={{
                                                color: "#fff",
                                                fontSize: "10px",
                                              }}
                                            >
                                              {segment === "1" ||
                                              segment === "12" ||
                                              segment === "13" ? (
                                                <>{segments.back[0]?.arrival}</>
                                              ) : segment === "2" ||
                                                segment === "21" ||
                                                segment === "22" ||
                                                segment === "23" ? (
                                                <>{segments.back[1]?.arrival}</>
                                              ) : segment === "3" ||
                                                segment === "31" ||
                                                segment === "32" ||
                                                segment === "33" ? (
                                                <>{segments.back[2]?.arrival}</>
                                              ) : (
                                                <>{backarrival}</>
                                              )}
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
                                        sx={{
                                          color: "#fff",
                                          fontSize: "10px",
                                        }}
                                      >
                                        <span style={{ fontSize: "12px" }}>
                                          {
                                            segments.back[0]?.arrivalLocation?.split(
                                              ","
                                            )[0]
                                          }
                                        </span>
                                        <br />
                                        {segments.back[1]?.marketingcareer}
                                        {segments.back[1]?.marketingflight}{" "}
                                        <span> | </span>
                                        Transit: {transit?.back?.transit1}
                                      </Typography>
                                    </React.Fragment>
                                  }
                                  followCursor
                                >
                                  <Box className="arival-text">
                                    {segments.back[0]?.arrival}
                                  </Box>
                                </HtmlTooltip>
                                <HtmlTooltip
                                  title={
                                    <React.Fragment>
                                      <Typography
                                        sx={{
                                          color: "#fff",
                                          fontSize: "10px",
                                        }}
                                      >
                                        <span style={{ fontSize: "12px" }}>
                                          {
                                            segments.back[1]?.arrivalLocation?.split(
                                              ","
                                            )[0]
                                          }
                                        </span>
                                        <br />
                                        {segments.back[2]?.marketingcareer}
                                        {segments.back[2]?.marketingflight}
                                        <span> | </span>
                                        Transit: {transit?.back?.transit2}
                                      </Typography>
                                    </React.Fragment>
                                  }
                                  followCursor
                                >
                                  <Box className="arival-text">
                                    {" "}
                                    {segments.back[1]?.arrival}
                                  </Box>
                                </HtmlTooltip>
                              </Typography>
                            </Box>
                          ) : segment === "2" || segment === "12" ? (
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
                                  {segments?.back[0]?.flightduration}
                                  &nbsp;|&nbsp;
                                  {segments?.back[1]?.flightduration}
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
                                              sx={{
                                                color: "#fff",
                                                fontSize: "10px",
                                              }}
                                            >
                                              {segments?.back[0]?.departure}
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
                                              sx={{
                                                color: "#fff",
                                                fontSize: "10px",
                                              }}
                                            >
                                              {segment === "1" ||
                                              segment === "12" ||
                                              segment === "13" ? (
                                                <>{segments.back[0]?.arrival}</>
                                              ) : segment === "2" ||
                                                segment === "21" ||
                                                segment === "22" ||
                                                segment === "23" ? (
                                                <>{segments.back[1]?.arrival}</>
                                              ) : segment === "3" ||
                                                segment === "31" ||
                                                segment === "32" ||
                                                segment === "33" ? (
                                                <>{segments.back[2]?.arrival}</>
                                              ) : (
                                                <>{backarrival}</>
                                              )}
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
                                        sx={{
                                          color: "#fff",
                                          fontSize: "10px",
                                        }}
                                      >
                                        <span style={{ fontSize: "12px" }}>
                                          {
                                            segments.back[0]?.arrivalLocation?.split(
                                              ","
                                            )[0]
                                          }{" "}
                                        </span>
                                        <br />
                                        {segments.back[1]?.marketingcareer}
                                        {segments.back[1]?.marketingflight}
                                        <span> | </span>
                                        Transit: {transit?.back?.transit1}
                                      </Typography>
                                    </React.Fragment>
                                  }
                                  followCursor
                                >
                                  <Box className="arival-text2">
                                    {segments.back[0]?.arrival}
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
                                  {backflightduration}
                                </Typography>
                              </Grid>
                              <Box px={1} className="round-rotate-0">
                                <div className="segment-1">
                                  <div className="segment-circle">
                                    <div className="circle-0">
                                      <HtmlTooltip
                                        title={
                                          <React.Fragment>
                                            <Typography
                                              sx={{
                                                color: "#fff",
                                                fontSize: "10px",
                                              }}
                                            >
                                              {segments?.back[0]?.departure}
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
                                              sx={{
                                                color: "#fff",
                                                fontSize: "10px",
                                              }}
                                            >
                                              {segment === "1" ||
                                              segment === "12" ||
                                              segment === "13" ? (
                                                <>{segments.back[0]?.arrival}</>
                                              ) : segment === "2" ||
                                                segment === "21" ||
                                                segment === "22" ||
                                                segment === "23" ? (
                                                <>{segments.back[1]?.arrival}</>
                                              ) : segment === "3" ||
                                                segment === "31" ||
                                                segment === "32" ||
                                                segment === "33" ? (
                                                <>{segments.back[2]?.arrival}</>
                                              ) : (
                                                <>{backarrival}</>
                                              )}
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

                    <Grid item md={3.5}>
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
                          {/* {backarrival} */}
                          {segment === "1" ||
                          segment === "12" ||
                          segment === "13" ? (
                            <>{segments.back[0]?.arrival}</>
                          ) : segment === "2" ||
                            segment === "21" ||
                            segment === "22" ||
                            segment === "23" ? (
                            <>{segments.back[1]?.arrival}</>
                          ) : segment === "3" ||
                            segment === "31" ||
                            segment === "32" ||
                            segment === "33" ? (
                            <>{segments.back[2]?.arrival}</>
                          ) : (
                            <>{backarrival}</>
                          )}
                          <span> - </span>

                          {system === "Galileo"
                            ? `${
                                new Date(backarrivalTime)
                                  .toTimeString()
                                  ?.split(":")[0]
                              }:${
                                new Date(backarrivalTime)
                                  .toTimeString()
                                  ?.split(":")[1]
                              }`
                            : `${backarrivalTime?.split(":")[0]}:${
                                backarrivalTime?.split(":")[1]
                              }`}
                        </Typography>
                        {segment === "3" ? (
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
                            {segments.back[2]?.arrivalLocation}
                          </Typography>
                        ) : segment === "2" || segment === "12" ? (
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
                            {segments.back[1]?.arrivalLocation}
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
                            {segments.back[0]?.arrivalLocation}
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
                          {backarrivalDate}
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                  <Grid container justifyContent={"space-between"} py={"10px"}>
                    <Grid item md={3}>
                      {system === "Sabre" ? (
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
                          {props?.roundData?.class}
                        </Typography>
                      ) : system === "Galileo" ? (
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
                          {props?.roundData?.class}
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
                    <Grid item md={4}>
                      {(() => {
                        if (refundable === "Refundable") {
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
                              {refundable}
                            </Typography>
                          );
                        } else if (
                          refundable === "Nonrefundable" ||
                          refundable === "Non Refundable"
                        ) {
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
                    <Grid item md={2.5}>
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
                          {bags === "1" || bags === "2" || bags === "3" ? (
                            <>{bags} Piece</>
                          ) : bags === "" ? (
                            <>0 Kg</>
                          ) : (
                            <>{bags?.slice(0, 2) || 0} Kg</>
                          )}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item md={2.5}>
                      <Box className="img-text-0">
                        <img src={seat1} alt="bag" />
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
                          {/* {seat||9} Seat */}
                          {system === "FlyHub" ? (
                            <> 9 Seat</>
                          ) : (
                            <> {seat || 9} Seat</>
                          )}
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              {/* -------- Retunr End -------- */}
            </Grid>
            <Grid
              sm={2.5}
              sx={{
                paddingLeft: { xs: "none", sm: "5px", md: "20px" },
              }}
            >
              <Box className="rupdatebooknowbtn" pl="12px">
                <Box height={"40px"}>
                  {customerFare && (
                    <>
                      <Box display={"flex"} justifyContent={"space-between"}>
                        <Typography
                          sx={{
                            fontSize: {
                              xs: "12px",
                              sm: "12.5px",
                              md: "17px",
                            },
                            color: "#fff",
                            pt: {
                              sm: "5px",
                            },
                          }}
                        >
                          CF
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: {
                              xs: "12px",
                              sm: "12.5px",
                              md: "17px",
                            },
                            color: "#fff",
                            pt: {
                              sm: "5px",
                            },
                          }}
                        >
                          {commaNumber(clientFare)} ৳
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          borderBottom: "0.5px solid rgba(209, 233, 255, 0.52)",
                        }}
                      ></Box>
                    </>
                  )}
                </Box>
                <Box height={"40px"}>
                  {agentFarePrice && (
                    <Box display={"flex"} justifyContent={"space-between"}>
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "12px",
                            sm: "12px",
                            md: "13px",
                          },
                          color: "#D1E9FF",
                        }}
                      >
                        AF
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "12px",
                            sm: "12px",
                            md: "13px",
                          },
                          color: "#D1E9FF",
                        }}
                      >
                        {commaNumber(agentFare)} ৳
                      </Typography>
                    </Box>
                  )}
                  {commisionFarePrice && (
                    <Box display={"flex"} justifyContent={"space-between"}>
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "12px",
                            sm: "12px",
                            md: "13px",
                          },
                          color: "#D1E9FF",
                          pb: {
                            sm: "7px",
                          },
                        }}
                      >
                        CM
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "12px",
                            sm: "12px",
                            md: "13px",
                          },
                          color: "#D1E9FF",
                          pb: {
                            sm: "7px",
                          },
                        }}
                      >
                        {commaNumber(commission)} ৳
                      </Typography>
                    </Box>
                  )}
                </Box>
                <Box className="b-01">
                  <Button
                    className="booknow-btn-0 shine-effect"
                    sx={{
                      color: "#fff",
                      fontWeight: 600,
                      bgcolor: "#DC143C",
                      borderRadius: "12px  0px",
                      mb: { xs: "10px" },
                      p: {
                        xs: "5px 20px",
                        sm: "5px 10px",
                        md: "5px 20px",
                      },
                      fontSize: {
                        xs: "12px",
                        sm: "10px",
                        md: "16px",
                      },
                    }}
                    disabled={system === "Galileo" ? true : false}
                    onClick={RoundTripFlightInfo}
                  >
                    BOOK NOW
                  </Button>
                  <br />
                  <Button
                    sx={{
                      color: "#fff",
                      fontWeight: 600,
                      textTransform: "capitalize",
                      fontSize: {
                        xs: "10px",
                        sm: "10px",
                        md: "12px",
                      },
                    }}
                    onClick={() => setFlightDetails(!flightDetails)}
                  >
                    {!flightDetails ? <> Flight Details</> : <> Hide Details</>}
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
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
                        label="commission & Invoice"
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
                        value="6"
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
                      {/* Flight Details */}
                      {/* ---------------For 3 Segmnet --------------- */}
                      {segment === "3" ? (
                        <>
                          {/* ----------start go  --*/}
                          <Box className="roundsegment-2">
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
                                  textTransform: "uppercase",
                                }}
                              >
                                {
                                  segments.go[0]?.departureLocation?.split(
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
                                  textTransform: "uppercase",
                                }}
                              >
                                {segments.go[2]?.arrivalLocation?.split(",")[0]}
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
                                      src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments.go[0]?.marketingcareer}.png`}
                                      alt={`${segments.go[0]?.marketingcareer}`}
                                    />
                                    <Typography
                                      width="100px"
                                      fontSize="12px"
                                      fontWeight={500}
                                      textAlign="center"
                                      paddingRight={2}
                                    >
                                      {segments.go[0]?.marketingcareerName}
                                    </Typography>
                                  </Box>
                                  <Box className="flight-content-detail">
                                    <h4>Departure From</h4>
                                    <h5>
                                      ({segments.go[0].departure})-
                                      {segments.go[0]?.departureAirport}
                                    </h5>
                                    <h5>{segments.go[0]?.departureLocation}</h5>
                                    <h5>
                                      {format(
                                        new Date(segments.go[0]?.departureTime),
                                        "dd MMM yyyy hh:mm a"
                                      )}
                                    </h5>
                                  </Box>
                                </Grid>
                                <Grid item xs={2} sm={2} md={3}>
                                  <Box className="flight-content-detail">
                                    <h4>Arrival To</h4>
                                    <h5>
                                      ({segments.go[0]?.arrival})-
                                      {segments.go[0]?.arrivalAirport}
                                    </h5>
                                    <h5>{segments.go[0]?.arrivalLocation}</h5>
                                    <h5>
                                      {format(
                                        new Date(segments.go[0]?.arrivalTime),
                                        "dd MMM yyyy hh:mm a"
                                      )}
                                    </h5>
                                  </Box>
                                </Grid>
                                <Grid item xs={2} sm={2} md={3}>
                                  <Box className="flight-content-detail">
                                    <h4>Duration</h4>
                                    <h5>{segments.go[0]?.flightduration}</h5>
                                    <h5 style={{ color: "tomato" }}>
                                      {segments.go[0]?.marketingcareer}{" "}
                                      {segments.go[0]?.marketingflight}{" "}
                                    </h5>
                                    <h5>
                                      Class: {segments.go[0]?.bookingcode}{" "}
                                      &nbsp;
                                      <span style={{ color: "crimson" }}>
                                        Seat: {segments.go[0]?.seat || 9}
                                      </span>
                                    </h5>
                                    <h5>
                                      Baggage:{" "}
                                      {bags === "3" ||
                                      bags === "2" ||
                                      bags === "1" ? (
                                        <>{bags?.split(" ")[0]} Piece</>
                                      ) : bags === " " ? (
                                        <>0 Kg</>
                                      ) : (
                                        <>{bags?.slice(0, 2) || 0} Kg</>
                                      )}
                                    </h5>
                                  </Box>
                                </Grid>
                              </Grid>
                            </Box>
                          </Box>
                          <Box className="border-content-round">
                            <span>
                              Transit Time&nbsp;{transit?.go?.transit1}
                            </span>
                          </Box>
                          <Box className="roundsegment-2">
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
                                      src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments.go[1]?.marketingcareer}.png`}
                                      alt={`${segments.go[1]?.marketingcareer}`}
                                    />
                                    <Typography
                                      width="100px"
                                      fontSize="12px"
                                      fontWeight={500}
                                      textAlign="center"
                                      paddingRight={2}
                                    >
                                      {segments.go[1]?.marketingcareerName}
                                    </Typography>
                                  </Box>
                                  <Box className="flight-content-detail">
                                    <h4>Departure From</h4>
                                    <h5>
                                      ({segments.go[1]?.departure})-
                                      {segments.go[1]?.departureAirport}
                                    </h5>
                                    <h5>{segments.go[1]?.departureLocation}</h5>
                                    <h5>
                                      {format(
                                        new Date(segments.go[1]?.departureTime),
                                        "dd MMM yyyy hh:mm a"
                                      )}
                                    </h5>
                                  </Box>
                                </Grid>
                                <Grid item xs={2} sm={2} md={3}>
                                  <Box className="flight-content-detail">
                                    <h4>Arrival To</h4>
                                    <h5>
                                      ({segments.go[1]?.arrival})-
                                      {segments.go[1]?.arrivalAirport}
                                    </h5>
                                    <h5>{segments.go[1]?.arrivalLocation}</h5>
                                    <h5>
                                      {format(
                                        new Date(segments.go[1]?.arrivalTime),
                                        "dd MMM yyyy hh:mm a"
                                      )}
                                    </h5>
                                  </Box>
                                </Grid>
                                <Grid item xs={2} sm={2} md={3}>
                                  <Box className="flight-content-detail">
                                    <h4>Duration</h4>
                                    <h5>{segments.go[1]?.flightduration}</h5>
                                    <h5 style={{ color: "tomato" }}>
                                      {segments.go[1]?.marketingcareer}{" "}
                                      {segments.go[1]?.marketingflight}{" "}
                                    </h5>
                                    <h5>
                                      Class: {segments.go[1]?.bookingcode}{" "}
                                      &nbsp;
                                      <span style={{ color: "crimson" }}>
                                        Seat: {segments.go[1]?.seat || 9}
                                      </span>
                                    </h5>
                                    <h5>
                                      Baggage:{" "}
                                      {bags === "3" ||
                                      bags === "2" ||
                                      bags === "1" ? (
                                        <>{bags?.split(" ")[0]} Piece</>
                                      ) : bags === " " ? (
                                        <>0 Kg</>
                                      ) : (
                                        <>{bags?.slice(0, 2) || 0} Kg</>
                                      )}
                                    </h5>
                                  </Box>
                                </Grid>
                              </Grid>
                            </Box>
                          </Box>
                          <Box className="border-content-round">
                            <span>
                              Transit Time&nbsp;{transit?.go?.transit2}
                            </span>
                          </Box>
                          <Box className="roundsegment-2">
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
                                      src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments.go[2]?.marketingcareer}.png`}
                                      alt={`${segments.go[2]?.marketingcareer}`}
                                    />
                                    <Typography
                                      width="100px"
                                      fontSize="12px"
                                      fontWeight={500}
                                      textAlign="center"
                                      paddingRight={2}
                                    >
                                      {segments.go[2]?.marketingcareerName}
                                    </Typography>
                                  </Box>
                                  <Box className="flight-content-detail">
                                    <h4>Departure From</h4>
                                    <h5>
                                      ({segments.go[2]?.departure})-
                                      {segments.go[2]?.departureAirport}
                                    </h5>
                                    <h5>{segments.go[2]?.departureLocation}</h5>
                                    <h5>
                                      {format(
                                        new Date(segments.go[2]?.departureTime),
                                        "dd MMM yyyy hh:mm a"
                                      )}
                                    </h5>
                                  </Box>
                                </Grid>
                                <Grid item xs={2} sm={2} md={3}>
                                  <Box className="flight-content-detail">
                                    <h4>Arrival To</h4>
                                    <h5>
                                      ({segments.go[2]?.arrival})-
                                      {segments.go[2]?.arrivalAirport}
                                    </h5>
                                    <h5>{segments.go[2]?.arrivalLocation}</h5>
                                    <h5>
                                      {format(
                                        new Date(segments.go[2]?.arrivalTime),
                                        "dd MMM yyyy hh:mm a"
                                      )}
                                    </h5>
                                  </Box>
                                </Grid>
                                <Grid item xs={2} sm={2} md={3}>
                                  <Box className="flight-content-detail">
                                    <h4>Duration</h4>
                                    <h5>{segments.go[2]?.flightduration}</h5>
                                    <h5 style={{ color: "tomato" }}>
                                      {segments.go[2]?.marketingcareer}{" "}
                                      {segments.go[2]?.marketingflight}{" "}
                                    </h5>
                                    <h5>
                                      Class: {segments.go[2]?.bookingcode}{" "}
                                      &nbsp;
                                      <span style={{ color: "crimson" }}>
                                        Seat: {segments.go[2]?.seat || 9}
                                      </span>
                                    </h5>
                                    <h5>
                                      Baggage:{" "}
                                      {bags === "3" ||
                                      bags === "2" ||
                                      bags === "1" ? (
                                        <>{bags?.split(" ")[0]} Piece</>
                                      ) : bags === " " ? (
                                        <>0 Kg</>
                                      ) : (
                                        <>{bags?.slice(0, 2) || 0} Kg</>
                                      )}
                                    </h5>
                                  </Box>
                                </Grid>
                              </Grid>
                            </Box>
                          </Box>

                          {/* ---------------Back start--------------- */}
                          <Box sx={{ border: "1px dashed #003566" }}></Box>
                          <Box className="roundsegment-2">
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
                                  textTransform: "uppercase",
                                }}
                              >
                                {
                                  segments.back[0]?.departureLocation?.split(
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
                                  textTransform: "uppercase",
                                }}
                              >
                                {
                                  segments.back[2]?.arrivalLocation?.split(
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
                                      src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments.back[0]?.marketingcareer}.png`}
                                      alt={`${segments.back[0]?.marketingcareer}`}
                                    />
                                    <Typography
                                      width="100px"
                                      fontSize="12px"
                                      fontWeight={500}
                                      textAlign="center"
                                      paddingRight={2}
                                    >
                                      {segments.back[0]?.marketingcareerName}
                                    </Typography>
                                  </Box>
                                  <Box className="flight-content-detail">
                                    <h4>Departure From</h4>
                                    <h5>
                                      ({segments.back[0]?.departure})-
                                      {segments.back[0]?.departureAirport}
                                    </h5>
                                    <h5>
                                      {segments.back[0]?.departureLocation}
                                    </h5>
                                    <h5>
                                      {format(
                                        new Date(
                                          segments.back[0]?.departureTime
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
                                      ({segments.back[0]?.arrival})-
                                      {segments.back[0]?.arrivalAirport}
                                    </h5>
                                    <h5>{segments.back[0]?.arrivalLocation}</h5>
                                    <h5>
                                      {format(
                                        new Date(segments.back[0]?.arrivalTime),
                                        "dd MMM yyyy hh:mm a"
                                      )}
                                    </h5>
                                  </Box>
                                </Grid>
                                <Grid item xs={2} sm={2} md={3}>
                                  <Box className="flight-content-detail">
                                    <h4>Duration</h4>
                                    <h5>{segments.back[0]?.flightduration}</h5>
                                    <h5 style={{ color: "tomato" }}>
                                      {segments.back[0]?.marketingcareer}{" "}
                                      {segments.back[0]?.marketingflight}{" "}
                                    </h5>
                                    <h5>
                                      Class: {segments.back[0]?.bookingcode}{" "}
                                      &nbsp;
                                      <span style={{ color: "crimson" }}>
                                        Seat: {segments.back[0]?.seat || 9}
                                      </span>
                                    </h5>
                                    <h5>
                                      Baggage:{" "}
                                      {bags === "3" ||
                                      bags === "2" ||
                                      bags === "1" ? (
                                        <>{bags?.split(" ")[0]} Piece</>
                                      ) : bags === " " ? (
                                        <>0 Kg</>
                                      ) : (
                                        <>{bags?.slice(0, 2) || 0} Kg</>
                                      )}
                                    </h5>
                                  </Box>
                                </Grid>
                              </Grid>
                            </Box>
                          </Box>
                          <Box className="border-content-round">
                            <span>
                              Transit Time&nbsp;{transit?.back?.transit1}
                            </span>
                          </Box>
                          <Box className="roundsegment-2">
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
                                      src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments.back[1]?.marketingcareer}.png`}
                                      alt={`${segments.back[1]?.marketingcareer}`}
                                    />
                                    <Typography
                                      width="100px"
                                      fontSize="12px"
                                      fontWeight={500}
                                      textAlign="center"
                                      paddingRight={2}
                                    >
                                      {segments.back[1]?.marketingcareerName}
                                    </Typography>
                                  </Box>
                                  <Box className="flight-content-detail">
                                    <h4>Departure From</h4>
                                    <h5>
                                      ({segments.back[1]?.departure})-
                                      {segments.back[1]?.departureAirport}
                                    </h5>
                                    <h5>
                                      {segments.back[1]?.departureLocation}
                                    </h5>
                                    <h5>
                                      {format(
                                        new Date(
                                          segments.back[1]?.departureTime
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
                                      ({segments.back[1]?.arrival})-
                                      {segments.back[1]?.arrivalAirport}
                                    </h5>
                                    <h5>{segments.back[1]?.arrivalLocation}</h5>
                                    <h5>
                                      {format(
                                        new Date(segments.back[1]?.arrivalTime),
                                        "dd MMM yyyy hh:mm a"
                                      )}
                                    </h5>
                                  </Box>
                                </Grid>
                                <Grid item xs={2} sm={2} md={3}>
                                  <Box className="flight-content-detail">
                                    <h4>Duration</h4>
                                    <h5>{segments.back[1]?.flightduration}</h5>
                                    <h5 style={{ color: "tomato" }}>
                                      {segments.back[1]?.marketingcareer}{" "}
                                      {segments.back[1]?.marketingflight}{" "}
                                    </h5>
                                    <h5>
                                      Class: {segments.back[1]?.bookingcode}{" "}
                                      &nbsp;
                                      <span style={{ color: "crimson" }}>
                                        Seat: {segments.back[1]?.seat || 9}
                                      </span>
                                    </h5>
                                    <h5>
                                      Baggage:{" "}
                                      {bags === "3" ||
                                      bags === "2" ||
                                      bags === "1" ? (
                                        <>{bags?.split(" ")[0]} Piece</>
                                      ) : bags === " " ? (
                                        <>0 Kg</>
                                      ) : (
                                        <>{bags?.slice(0, 2) || 0} Kg</>
                                      )}
                                    </h5>
                                  </Box>
                                </Grid>
                              </Grid>
                            </Box>
                          </Box>
                          <Box className="border-content-round">
                            <span>
                              Transit Time&nbsp;{transit?.back?.transit2}
                            </span>
                          </Box>
                          <Box className="roundsegment-2">
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
                                      src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments.back[2]?.marketingcareer}.png`}
                                      alt={`${segments.back[2]?.marketingcareer}`}
                                    />
                                    <Typography
                                      width="100px"
                                      fontSize="12px"
                                      fontWeight={500}
                                      textAlign="center"
                                      paddingRight={2}
                                    >
                                      {segments.back[2]?.marketingcareerName}
                                    </Typography>
                                  </Box>
                                  <Box className="flight-content-detail">
                                    <h4>Departure From</h4>
                                    <h5>
                                      ({segments.back[2]?.departure})-
                                      {segments.back[2]?.departureAirport}
                                    </h5>
                                    <h5>
                                      {segments.back[2]?.departureLocation}
                                    </h5>
                                    <h5>
                                      {format(
                                        new Date(
                                          segments.back[2]?.departureTime
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
                                      {" "}
                                      ({segments.back[2]?.arrival})-
                                      {segments.back[2]?.arrivalAirport}
                                    </h5>
                                    <h5>{segments.back[2]?.arrivalLocation}</h5>
                                    <h5>
                                      {format(
                                        new Date(segments.back[2]?.arrivalTime),
                                        "dd MMM yyyy hh:mm a"
                                      )}
                                    </h5>
                                  </Box>
                                </Grid>
                                <Grid item xs={2} sm={2} md={3}>
                                  <Box className="flight-content-detail">
                                    <h4>Duration</h4>
                                    <h5>{segments.back[2]?.flightduration}</h5>
                                    <h5 style={{ color: "tomato" }}>
                                      {segments.back[2]?.marketingcareer}{" "}
                                      {segments.back[2]?.marketingflight}{" "}
                                    </h5>
                                    <h5>
                                      Class: {segments.back[2]?.bookingcode}{" "}
                                      &nbsp;
                                      <span style={{ color: "crimson" }}>
                                        Seat: {segments.back[2]?.seat || 9}
                                      </span>
                                    </h5>
                                    <h5>
                                      Baggage:{" "}
                                      {bags === "3" ||
                                      bags === "2" ||
                                      bags === "1" ? (
                                        <>{bags?.split(" ")[0]} Piece</>
                                      ) : bags === " " ? (
                                        <>0 Kg</>
                                      ) : (
                                        <>{bags?.slice(0, 2) || 0} Kg</>
                                      )}
                                    </h5>
                                  </Box>
                                </Grid>
                              </Grid>
                            </Box>
                          </Box>

                          {/* ---------------Back End--------------- */}
                        </>
                      ) : segment === "21" ? (
                        <>
                          {/* ---------------For 21 Segmnet --------------- */}
                          {/* ---------------Go data start--------------- */}
                          <Box className="roundsegment-2">
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
                                  textTransform: "uppercase",
                                }}
                              >
                                {
                                  segments.go[0]?.departureLocation?.split(
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
                                  textTransform: "uppercase",
                                }}
                              >
                                {segments.go[1]?.arrivalLocation?.split(",")[0]}
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
                                      src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments.go[0]?.marketingcareer}.png`}
                                      alt={`${segments.go[0]?.marketingcareer}`}
                                    />
                                    <Typography
                                      width="100px"
                                      fontSize="12px"
                                      fontWeight={500}
                                      textAlign="center"
                                      paddingRight={2}
                                    >
                                      {segments.go[0]?.marketingcareerName}
                                    </Typography>
                                  </Box>
                                  <Box className="flight-content-detail">
                                    <h4>Departure From</h4>
                                    <h5>
                                      ({segments.go[0]?.departure})-
                                      {segments.go[0]?.departureAirport}
                                    </h5>
                                    <h5>{segments.go[0]?.departureLocation}</h5>
                                    <h5>
                                      {format(
                                        new Date(segments.go[0]?.departureTime),
                                        "dd MMM yyyy hh:mm a"
                                      )}
                                    </h5>
                                  </Box>
                                </Grid>
                                <Grid item xs={2} sm={2} md={3}>
                                  <Box className="flight-content-detail">
                                    <h4>Arrival To</h4>
                                    <h5>
                                      ({segments.go[0]?.arrival})-
                                      {segments.go[0]?.arrivalAirport}
                                    </h5>
                                    <h5>{segments.go[0]?.arrivalLocation}</h5>
                                    <h5>
                                      {format(
                                        new Date(segments.go[0]?.arrivalTime),
                                        "dd MMM yyyy hh:mm a"
                                      )}
                                    </h5>
                                  </Box>
                                </Grid>
                                <Grid item xs={2} sm={2} md={3}>
                                  <Box className="flight-content-detail">
                                    <h4>Duration</h4>
                                    <h5>{segments.go[0]?.flightduration}</h5>
                                    <h5 style={{ color: "tomato" }}>
                                      {segments.go[0]?.marketingcareer}{" "}
                                      {segments.go[0]?.marketingflight}{" "}
                                    </h5>
                                    <h5>
                                      Class: {segments.go[0]?.bookingcode}{" "}
                                      &nbsp;
                                      <span style={{ color: "crimson" }}>
                                        Seat: {segments.go[0]?.seat || 9}
                                      </span>
                                    </h5>
                                    <h5>
                                      Baggage:{" "}
                                      {bags === "3" ||
                                      bags === "2" ||
                                      bags === "1" ? (
                                        <>{bags?.split(" ")[0]} Piece</>
                                      ) : bags === " " ? (
                                        <>0 Kg</>
                                      ) : (
                                        <>{bags?.slice(0, 2) || 0} Kg</>
                                      )}
                                    </h5>
                                  </Box>
                                </Grid>
                              </Grid>
                            </Box>
                          </Box>
                          <Box className="border-content-round">
                            <span>
                              Transit Time&nbsp;{transit?.go?.transit1}
                            </span>
                          </Box>
                          <Box className="roundsegment-2">
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
                                      src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments.go[1]?.marketingcareer}.png`}
                                      alt={`${segments.go[1]?.marketingcareer}`}
                                    />
                                    <Typography
                                      width="100px"
                                      fontSize="12px"
                                      fontWeight={500}
                                      textAlign="center"
                                      paddingRight={2}
                                    >
                                      {segments.go[1]?.marketingcareerName}
                                    </Typography>
                                  </Box>
                                  <Box className="flight-content-detail">
                                    <h4>Departure From</h4>
                                    <h5>
                                      ({segments.go[1]?.departure})-
                                      {segments.go[1]?.departureAirport}
                                    </h5>
                                    <h5>{segments.go[1]?.departureLocation}</h5>
                                    <h5>
                                      {format(
                                        new Date(segments.go[1]?.departureTime),
                                        "dd MMM yyyy hh:mm a"
                                      )}
                                    </h5>
                                  </Box>
                                </Grid>
                                <Grid item xs={2} sm={2} md={3}>
                                  <Box className="flight-content-detail">
                                    <h4>Arrival To</h4>
                                    <h5>
                                      ({segments.go[1]?.arrival})-
                                      {segments.go[1]?.arrivalAirport}
                                    </h5>
                                    <h5>{segments.go[1]?.arrivalLocation}</h5>
                                    <h5>
                                      {format(
                                        new Date(segments.go[1]?.arrivalTime),
                                        "dd MMM yyyy hh:mm a"
                                      )}
                                    </h5>
                                  </Box>
                                </Grid>
                                <Grid item xs={2} sm={2} md={3}>
                                  <Box className="flight-content-detail">
                                    <h4>Duration</h4>
                                    <h5>{segments.go[1]?.flightduration}</h5>
                                    <h5 style={{ color: "tomato" }}>
                                      {segments.go[1]?.marketingcareer}{" "}
                                      {segments.go[1]?.marketingflight}{" "}
                                    </h5>
                                    <h5>
                                      Class: {segments.go[1]?.bookingcode}{" "}
                                      &nbsp;
                                      <span style={{ color: "crimson" }}>
                                        Seat: {segments.go[1]?.seat || 9}
                                      </span>
                                    </h5>
                                    <h5>
                                      Baggage:{" "}
                                      {bags === "3" ||
                                      bags === "2" ||
                                      bags === "1" ? (
                                        <>{bags?.split(" ")[0]} Piece</>
                                      ) : bags === " " ? (
                                        <>0 Kg</>
                                      ) : (
                                        <>{bags?.slice(0, 2) || 0} Kg</>
                                      )}
                                    </h5>
                                  </Box>
                                </Grid>
                              </Grid>
                            </Box>
                          </Box>
                          {/* ---------------Go data End--------------- */}
                          <Box sx={{ border: "1px dashed #003566" }}></Box>
                          {/* ---------------Return data Start--------------- */}
                          <Box className="roundsegment-2">
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
                                  segments.back[0]?.departureLocation?.split(
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
                                  segments.back[0]?.arrivalLocation?.split(
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
                                      src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments.back[0]?.marketingcareer}.png`}
                                      alt={`${segments.back[0]?.marketingcareer}`}
                                    />
                                    <Typography
                                      width="100px"
                                      fontSize="12px"
                                      fontWeight={500}
                                      textAlign="center"
                                      paddingRight={2}
                                    >
                                      {segments.back[0]?.marketingcareerName}
                                    </Typography>
                                  </Box>
                                  <Box className="flight-content-detail">
                                    <h4>Departure From</h4>
                                    <h5>
                                      ({segments.back[0]?.departure})-
                                      {segments.back[0]?.departureAirport}
                                    </h5>
                                    <h5>
                                      {segments.back[0]?.departureLocation}
                                    </h5>
                                    <h5>
                                      {format(
                                        new Date(
                                          segments.back[0]?.departureTime
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
                                      ({segments.back[0]?.arrival})-
                                      {segments.back[0]?.arrivalAirport}
                                    </h5>
                                    <h5>{segments.back[0]?.arrivalLocation}</h5>
                                    <h5>
                                      {format(
                                        new Date(segments.back[0]?.arrivalTime),
                                        "dd MMM yyyy hh:mm a"
                                      )}
                                    </h5>
                                  </Box>
                                </Grid>
                                <Grid item xs={2} sm={2} md={3}>
                                  <Box className="flight-content-detail">
                                    <h4>Duration</h4>
                                    <h5>{segments.back[0]?.flightduration}</h5>
                                    <h5 style={{ color: "tomato" }}>
                                      {segments.back[0]?.marketingcareer}{" "}
                                      {segments.back[0]?.marketingflight}{" "}
                                    </h5>
                                    <h5>
                                      Class: {segments.back[0]?.bookingcode}{" "}
                                      &nbsp;
                                      <span style={{ color: "crimson" }}>
                                        Seat: {segments.back[0]?.seat || 9}
                                      </span>
                                    </h5>
                                    <h5>
                                      Baggage:{" "}
                                      {bags === "3" ||
                                      bags === "2" ||
                                      bags === "1" ? (
                                        <>{bags?.split(" ")[0]} Piece</>
                                      ) : bags === " " ? (
                                        <>0 Kg</>
                                      ) : (
                                        <>{bags?.slice(0, 2) || 0} Kg</>
                                      )}
                                    </h5>
                                  </Box>
                                </Grid>
                              </Grid>
                            </Box>
                          </Box>
                          {/* ---------------Return data End--------------- */}
                        </>
                      ) : segment === "2" || segment === "2" ? (
                        <>
                          {/* ---------------Go Data Start--------------- */}
                          <Box className="roundsegment-2">
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
                                  textTransform: "uppercase",
                                }}
                              >
                                {
                                  segments.go[0]?.departureLocation?.split(
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
                                  textTransform: "uppercase",
                                }}
                              >
                                {segments.go[1]?.arrivalLocation?.split(",")[0]}
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
                                      src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments.go[0]?.marketingcareer}.png`}
                                      alt={`${segments.go[0]?.marketingcareer}`}
                                    />
                                    <Typography
                                      width="100px"
                                      fontSize="12px"
                                      fontWeight={500}
                                      textAlign="center"
                                      paddingRight={2}
                                    >
                                      {segments.go[0]?.marketingcareerName}
                                    </Typography>
                                  </Box>
                                  <Box className="flight-content-detail">
                                    <h4>Departure From</h4>
                                    <h5>
                                      ({segments.go[0]?.departure})-
                                      {segments.go[0]?.departureAirport}
                                    </h5>
                                    <h5>{segments.go[0]?.departureLocation}</h5>
                                    <h5>
                                      {format(
                                        new Date(segments.go[0]?.departureTime),
                                        "dd MMM yyyy hh:mm a"
                                      )}
                                    </h5>
                                  </Box>
                                </Grid>
                                <Grid item xs={2} sm={2} md={3}>
                                  <Box className="flight-content-detail">
                                    <h4>Arrival To</h4>
                                    <h5>
                                      ({segments.go[0]?.arrival})-
                                      {segments.go[0]?.arrivalAirport}
                                    </h5>
                                    <h5>{segments.go[0]?.arrivalLocation}</h5>
                                    <h5>
                                      {format(
                                        new Date(segments.go[0]?.arrivalTime),
                                        "dd MMM yyyy hh:mm a"
                                      )}
                                    </h5>
                                  </Box>
                                </Grid>
                                <Grid item xs={2} sm={2} md={3}>
                                  <Box className="flight-content-detail">
                                    <h4>Duration</h4>
                                    <h5>{segments.go[0]?.flightduration}</h5>
                                    <h5 style={{ color: "tomato" }}>
                                      {segments.go[0]?.marketingcareer}{" "}
                                      {segments.go[0]?.marketingflight}{" "}
                                    </h5>
                                    <h5>
                                      Class: {segments.go[0]?.bookingcode}{" "}
                                      &nbsp;
                                      <span style={{ color: "crimson" }}>
                                        Seat: {segments.go[0]?.seat || 9}
                                      </span>
                                    </h5>
                                    <h5>
                                      Baggage:{" "}
                                      {bags === "3" ||
                                      bags === "2" ||
                                      bags === "1" ? (
                                        <>{bags?.split(" ")[0]} Piece</>
                                      ) : bags === " " ? (
                                        <>0 Kg</>
                                      ) : (
                                        <>{bags?.slice(0, 2) || 0} Kg</>
                                      )}
                                    </h5>
                                  </Box>
                                </Grid>
                              </Grid>
                            </Box>
                          </Box>
                          <Box className="border-content-round">
                            <span>
                              Transit Time&nbsp;{transit?.go?.transit1}
                            </span>
                          </Box>
                          <Box className="roundsegment-2">
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
                                      src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments.go[1]?.marketingcareer}.png`}
                                      alt={`${segments.go[1]?.marketingcareer}`}
                                    />
                                    <Typography
                                      width="100px"
                                      fontSize="12px"
                                      fontWeight={500}
                                      textAlign="center"
                                      paddingRight={2}
                                    >
                                      {segments.go[1]?.marketingcareerName}
                                    </Typography>
                                  </Box>
                                  <Box className="flight-content-detail">
                                    <h4>Departure From</h4>
                                    <h5>
                                      ({segments.go[1]?.departure})-
                                      {segments.go[1]?.departureAirport}
                                    </h5>
                                    <h5>{segments.go[1]?.departureLocation}</h5>
                                    <h5>
                                      {format(
                                        new Date(segments.go[1]?.departureTime),
                                        "dd MMM yyyy hh:mm a"
                                      )}
                                    </h5>
                                  </Box>
                                </Grid>
                                <Grid item xs={2} sm={2} md={3}>
                                  <Box className="flight-content-detail">
                                    <h4>Arrival To</h4>
                                    <h5>
                                      ({segments.go[1]?.arrival})-
                                      {segments.go[1]?.arrivalAirport}
                                    </h5>
                                    <h5>{segments.go[1]?.arrivalLocation}</h5>
                                    <h5>
                                      {format(
                                        new Date(segments.go[1]?.arrivalTime),
                                        "dd MMM yyyy hh:mm a"
                                      )}
                                    </h5>
                                  </Box>
                                </Grid>
                                <Grid item xs={2} sm={2} md={3}>
                                  <Box className="flight-content-detail">
                                    <h4>Duration</h4>
                                    <h5>{segments.go[1]?.flightduration}</h5>
                                    <h5 style={{ color: "tomato" }}>
                                      {segments.go[1]?.marketingcareer}{" "}
                                      {segments.go[1]?.marketingflight}{" "}
                                    </h5>
                                    <h5>
                                      Class: {segments.go[1]?.bookingcode}{" "}
                                      &nbsp;
                                      <span style={{ color: "crimson" }}>
                                        Seat: {segments.go[1]?.seat || 9}
                                      </span>
                                    </h5>
                                    <h5>
                                      Baggage:{" "}
                                      {bags === "3" ||
                                      bags === "2" ||
                                      bags === "1" ? (
                                        <>{bags?.split(" ")[0]} Piece</>
                                      ) : bags === " " ? (
                                        <>0 Kg</>
                                      ) : (
                                        <>{bags?.slice(0, 2) || 0} Kg</>
                                      )}
                                    </h5>
                                  </Box>
                                </Grid>
                              </Grid>
                            </Box>
                          </Box>
                          {/* ---------------Go Data End--------------- */}
                          <Box sx={{ border: "1px dashed #003566" }}></Box>
                          {/* ---------------Back Data Start--------------- */}
                          <Box className="roundsegment-2">
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
                                  textTransform: "uppercase",
                                }}
                              >
                                {
                                  segments.back[0]?.departureLocation?.split(
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
                                  textTransform: "uppercase",
                                }}
                              >
                                {
                                  segments.back[1]?.arrivalLocation?.split(
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
                                      src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments.back[0]?.marketingcareer}.png`}
                                      alt={`${segments.back[0]?.marketingcareer}`}
                                    />
                                    <Typography
                                      width="100px"
                                      fontSize="12px"
                                      fontWeight={500}
                                      textAlign="center"
                                      paddingRight={2}
                                    >
                                      {segments.back[0]?.marketingcareerName}
                                    </Typography>
                                  </Box>
                                  <Box className="flight-content-detail">
                                    <h4>Departure From</h4>
                                    <h5>
                                      ({segments.back[0]?.departure})-
                                      {segments.back[0]?.departureAirport}
                                    </h5>
                                    <h5>
                                      {segments.back[0]?.departureLocation}
                                    </h5>
                                    <h5>
                                      {format(
                                        new Date(
                                          segments.back[0]?.departureTime
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
                                      ({segments.back[0]?.arrival})-
                                      {segments.back[0]?.arrivalAirport}
                                    </h5>
                                    <h5>{segments.back[0]?.arrivalLocation}</h5>
                                    <h5>
                                      {format(
                                        new Date(segments.back[0]?.arrivalTime),
                                        "dd MMM yyyy hh:mm a"
                                      )}
                                    </h5>
                                  </Box>
                                </Grid>
                                <Grid item xs={2} sm={2} md={3}>
                                  <Box className="flight-content-detail">
                                    <h4>Duration</h4>
                                    <h5>{segments.back[0]?.flightduration}</h5>
                                    <h5 style={{ color: "tomato" }}>
                                      {segments.back[0]?.marketingcareer}{" "}
                                      {segments.back[0]?.marketingflight}{" "}
                                    </h5>
                                    <h5>
                                      Class: {segments.back[0]?.bookingcode}{" "}
                                      &nbsp;
                                      <span style={{ color: "crimson" }}>
                                        Seat: {segments.back[0]?.seat || 9}
                                      </span>
                                    </h5>
                                    <h5>
                                      Baggage:{" "}
                                      {bags === "3" ||
                                      bags === "2" ||
                                      bags === "1" ? (
                                        <>{bags?.split(" ")[0]} Piece</>
                                      ) : bags === " " ? (
                                        <>0 Kg</>
                                      ) : (
                                        <>{bags?.slice(0, 2) || 0} Kg</>
                                      )}
                                    </h5>
                                  </Box>
                                </Grid>
                              </Grid>
                            </Box>
                          </Box>
                          <Box className="border-content-round">
                            <span>
                              Transit Time&nbsp;{transit?.back?.transit1}
                            </span>
                          </Box>
                          <Box className="roundsegment-2">
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
                                      src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments.back[1]?.marketingcareer}.png`}
                                      alt={`${segments.back[1]?.marketingcareer}`}
                                    />
                                    <Typography
                                      width="100px"
                                      fontSize="12px"
                                      fontWeight={500}
                                      textAlign="center"
                                      paddingRight={2}
                                    >
                                      {segments.back[1]?.marketingcareerName}
                                    </Typography>
                                  </Box>
                                  <Box className="flight-content-detail">
                                    <h4>Departure From</h4>
                                    <h5>
                                      ({segments.back[1]?.departure})-
                                      {segments.back[1]?.departureAirport}
                                    </h5>
                                    <h5>
                                      {segments.back[1]?.departureLocation}
                                    </h5>
                                    <h5>
                                      {format(
                                        new Date(
                                          segments.back[1]?.departureTime
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
                                      ({segments.back[1]?.arrival})-
                                      {segments.back[1]?.arrivalAirport}
                                    </h5>
                                    <h5>{segments.back[1]?.arrivalLocation}</h5>
                                    <h5>
                                      {format(
                                        new Date(segments.back[1]?.arrivalTime),
                                        "dd MMM yyyy hh:mm a"
                                      )}
                                    </h5>
                                  </Box>
                                </Grid>
                                <Grid item xs={2} sm={2} md={3}>
                                  <Box className="flight-content-detail">
                                    <h4>Duration</h4>
                                    <h5>{segments.back[1]?.flightduration}</h5>
                                    <h5 style={{ color: "tomato" }}>
                                      {segments.back[1]?.marketingcareer}{" "}
                                      {segments.back[1]?.marketingflight}{" "}
                                    </h5>
                                    <h5>
                                      Class: {segments.back[1]?.bookingcode}{" "}
                                      &nbsp;
                                      <span style={{ color: "crimson" }}>
                                        Seat: {segments.back[1]?.seat || 9}
                                      </span>
                                    </h5>
                                    <h5>
                                      Baggage:{" "}
                                      {bags === "3" ||
                                      bags === "2" ||
                                      bags === "1" ? (
                                        <>{bags?.split(" ")[0]} Piece</>
                                      ) : bags === " " ? (
                                        <>0 Kg</>
                                      ) : (
                                        <>{bags?.slice(0, 2) || 0} Kg</>
                                      )}
                                    </h5>
                                  </Box>
                                </Grid>
                              </Grid>
                            </Box>
                          </Box>
                          {/* ---------------Back Data End--------------- */}
                        </>
                      ) : segment === "12" ? (
                        <>
                          {/* ---------------GO Data start--------------- */}
                          <Box className="roundsegment-2">
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
                                  textTransform: "uppercase",
                                }}
                              >
                                {
                                  segments.go[0]?.departureLocation?.split(
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
                                  textTransform: "uppercase",
                                }}
                              >
                                {segments.go[0]?.arrivalLocation?.split(",")[0]}
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
                                      src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments.go[0]?.marketingcareer}.png`}
                                      alt={`${segments.go[0]?.marketingcareer}`}
                                    />
                                    <Typography
                                      width="100px"
                                      fontSize="12px"
                                      fontWeight={500}
                                      textAlign="center"
                                      paddingRight={2}
                                    >
                                      {segments.go[0]?.marketingcareerName}
                                    </Typography>
                                  </Box>
                                  <Box className="flight-content-detail">
                                    <h4>Departure From</h4>
                                    <h5>
                                      ({segments.go[0]?.departure})-
                                      {segments.go[0]?.departureAirport}
                                    </h5>
                                    <h5>{segments.go[0]?.departureLocation}</h5>
                                    <h5>
                                      {format(
                                        new Date(segments.go[0]?.departureTime),
                                        "dd MMM yyyy hh:mm a"
                                      )}
                                    </h5>
                                  </Box>
                                </Grid>
                                <Grid item xs={2} sm={2} md={3}>
                                  <Box className="flight-content-detail">
                                    <h4>Arrival To</h4>
                                    <h5>
                                      ({segments.go[0]?.arrival})-
                                      {segments.go[0]?.arrivalAirport}
                                    </h5>
                                    <h5>{segments.go[0]?.arrivalLocation}</h5>
                                    <h5>
                                      {format(
                                        new Date(segments.go[0]?.arrivalTime),
                                        "dd MMM yyyy hh:mm a"
                                      )}
                                    </h5>
                                  </Box>
                                </Grid>
                                <Grid item xs={2} sm={2} md={3}>
                                  <Box className="flight-content-detail">
                                    <h4>Duration</h4>
                                    <h5>{segments.go[0]?.flightduration}</h5>
                                    <h5 style={{ color: "tomato" }}>
                                      {segments.go[0]?.marketingcareer}{" "}
                                      {segments.go[0]?.marketingflight}{" "}
                                    </h5>
                                    <h5>
                                      Class: {segments.go[0]?.bookingcode}{" "}
                                      &nbsp;
                                      <span style={{ color: "crimson" }}>
                                        Seat: {segments.go[0]?.seat || 9}
                                      </span>
                                    </h5>
                                    <h5>
                                      Baggage:{" "}
                                      {bags === "3" ||
                                      bags === "2" ||
                                      bags === "1" ? (
                                        <>{bags?.split(" ")[0]} Piece</>
                                      ) : bags === " " ? (
                                        <>0 Kg</>
                                      ) : (
                                        <>{bags?.slice(0, 2) || 0} Kg</>
                                      )}
                                    </h5>
                                  </Box>
                                </Grid>
                              </Grid>
                            </Box>
                          </Box>
                          {/* ---------------GO Data End--------------- */}
                          <Box sx={{ border: "1px dashed #003566" }}></Box>
                          {/* ---------------Back Data start--------------- */}
                          <Box className="roundsegment-2">
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
                                  textTransform: "uppercase",
                                }}
                              >
                                {
                                  segments.back[0]?.departureLocation?.split(
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
                                  textTransform: "uppercase",
                                }}
                              >
                                {
                                  segments.back[1]?.arrivalLocation?.split(
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
                                      src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments.back[0]?.marketingcareer}.png`}
                                      alt={`${segments.back[0]?.marketingcareer}`}
                                    />
                                    <Typography
                                      width="100px"
                                      fontSize="12px"
                                      fontWeight={500}
                                      textAlign="center"
                                      paddingRight={2}
                                    >
                                      {segments.back[0]?.marketingcareerName}
                                    </Typography>
                                  </Box>
                                  <Box className="flight-content-detail">
                                    <h4>Departure From</h4>
                                    <h5>
                                      ({segments.back[0]?.departure})-
                                      {segments.back[0]?.departureAirport}
                                    </h5>
                                    <h5>
                                      {segments.back[0]?.departureLocation}
                                    </h5>
                                    <h5>
                                      {format(
                                        new Date(
                                          segments.back[0]?.departureTime
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
                                      ({segments.back[0]?.arrival})-
                                      {segments.back[0]?.arrivalAirport}
                                    </h5>
                                    <h5>{segments.back[0]?.arrivalLocation}</h5>
                                    <h5>
                                      {format(
                                        new Date(segments.back[0]?.arrivalTime),
                                        "dd MMM yyyy hh:mm a"
                                      )}
                                    </h5>
                                  </Box>
                                </Grid>
                                <Grid item xs={2} sm={2} md={3}>
                                  <Box className="flight-content-detail">
                                    <h4>Duration</h4>
                                    <h5>{segments.back[0]?.flightduration}</h5>
                                    <h5 style={{ color: "tomato" }}>
                                      {segments.back[0]?.marketingcareer}{" "}
                                      {segments.back[0]?.marketingflight}{" "}
                                    </h5>
                                    <h5>
                                      Class: {segments.back[0]?.bookingcode}
                                      &nbsp;
                                      <span style={{ color: "crimson" }}>
                                        Seat: {segments.back[0]?.seat || 9}
                                      </span>
                                    </h5>
                                    <h5>
                                      Baggage:{" "}
                                      {bags === "3" ||
                                      bags === "2" ||
                                      bags === "1" ? (
                                        <>{bags?.split(" ")[0]} Piece</>
                                      ) : bags === " " ? (
                                        <>0 Kg</>
                                      ) : (
                                        <>{bags?.slice(0, 2) || 0} Kg</>
                                      )}
                                    </h5>
                                  </Box>
                                </Grid>
                              </Grid>
                            </Box>
                          </Box>
                          <Box className="border-content-round">
                            <span>
                              Transit Time&nbsp;{transit?.back?.transit1}
                            </span>
                          </Box>
                          <Box className="roundsegment-2">
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
                                      src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments.back[1]?.marketingcareer}.png`}
                                      alt={`${segments.back[1]?.marketingcareer}`}
                                    />
                                    <Typography
                                      width="100px"
                                      fontSize="12px"
                                      fontWeight={500}
                                      textAlign="center"
                                      paddingRight={2}
                                    >
                                      {segments.back[1]?.marketingcareerName}
                                    </Typography>
                                  </Box>
                                  <Box className="flight-content-detail">
                                    <h4>Departure From</h4>
                                    <h5>
                                      ({segments.back[1]?.departure})-{" "}
                                      {segments.back[1]?.departureAirport}
                                    </h5>
                                    <h5>
                                      {segments?.back[1]?.departureLocation}
                                    </h5>
                                    <h5>
                                      {format(
                                        new Date(
                                          segments?.back[1]?.departureTime
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
                                      ({segments.back[1]?.arrival})-
                                      {segments.back[1]?.arrivalAirport}
                                    </h5>
                                    <h5>{segments.back[1]?.arrivalLocation}</h5>
                                    <h5>
                                      {format(
                                        new Date(segments.back[1]?.arrivalTime),
                                        "dd MMM yyyy hh:mm a"
                                      )}
                                    </h5>
                                  </Box>
                                </Grid>
                                <Grid item xs={2} sm={2} md={3}>
                                  <Box className="flight-content-detail">
                                    <h4>Duration</h4>
                                    <h5>{segments.back[1]?.flightduration}</h5>
                                    <h5 style={{ color: "tomato" }}>
                                      {segments.back[1]?.marketingcareer}{" "}
                                      {segments.back[1]?.marketingflight}{" "}
                                    </h5>
                                    <h5>
                                      Class: {segments.back[1]?.bookingcode}{" "}
                                      &nbsp;
                                      <span style={{ color: "crimson" }}>
                                        Seat: {segments.back[1]?.seat || 9}
                                      </span>
                                    </h5>
                                    <h5>
                                      Baggage:{" "}
                                      {bags === "3" ||
                                      bags === "2" ||
                                      bags === "1" ? (
                                        <>{bags?.split(" ")[0]} Piece</>
                                      ) : bags === " " ? (
                                        <>0 Kg</>
                                      ) : (
                                        <>{bags?.slice(0, 2) || 0} Kg</>
                                      )}
                                    </h5>
                                  </Box>
                                </Grid>
                              </Grid>
                            </Box>
                          </Box>
                          {/* ---------------Back Data End--------------- */}
                        </>
                      ) : (
                        <>
                          {/* ---------------For 1 Segmnet --------}}------- */}
                          {/* ---------------Go data--------------- */}
                          <Box className="roundsegment-2">
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
                                  textTransform: "uppercase",
                                }}
                              >
                                {
                                  segments.go[0]?.departureLocation?.split(
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
                                  textTransform: "uppercase",
                                }}
                              >
                                {segments.go[0]?.arrivalLocation?.split(",")[0]}
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
                                      src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments.go[0]?.marketingcareer}.png`}
                                      alt={`${segments.go[0]?.marketingcareer}`}
                                    />
                                    <Typography
                                      width="100px"
                                      fontSize="12px"
                                      fontWeight={500}
                                      textAlign="center"
                                      paddingRight={2}
                                    >
                                      {segments.go[0]?.marketingcareerName}
                                    </Typography>
                                  </Box>
                                  <Box className="flight-content-detail">
                                    <h4>Departure From</h4>
                                    <h5>
                                      ({segments.go[0]?.departure})-
                                      {segments.go[0]?.departureAirport}
                                    </h5>
                                    <h5>{segments.go[0]?.departureLocation}</h5>
                                    <h5>
                                      {format(
                                        new Date(segments.go[0]?.departureTime),
                                        "dd MMM yyyy hh:mm a"
                                      )}
                                    </h5>
                                  </Box>
                                </Grid>
                                <Grid item xs={2} sm={2} md={3}>
                                  <Box className="flight-content-detail">
                                    <h4>Arrival To</h4>
                                    <h5>
                                      ({segments.go[0]?.arrival})-
                                      {segments.go[0]?.arrivalAirport}
                                    </h5>
                                    <h5>{segments.go[0]?.arrivalLocation}</h5>
                                    <h5>
                                      {format(
                                        new Date(segments.go[0]?.arrivalTime),
                                        "dd MMM yyyy hh:mm a"
                                      )}
                                    </h5>
                                  </Box>
                                </Grid>
                                <Grid item xs={2} sm={2} md={3}>
                                  <Box className="flight-content-detail">
                                    <h4>Duration</h4>
                                    <h5>{segments.go[0]?.flightduration}</h5>
                                    <h5 style={{ color: "tomato" }}>
                                      {segments.go[0]?.marketingcareer}{" "}
                                      {segments.go[0]?.marketingflight}{" "}
                                    </h5>
                                    <h5>
                                      Class: {segments.go[0]?.bookingcode}{" "}
                                      &nbsp;
                                      <span style={{ color: "crimson" }}>
                                        Seat: {segments.go[0]?.seat || 9}
                                      </span>
                                    </h5>
                                    <h5>
                                      Baggage:{" "}
                                      {bags === "3" ||
                                      bags === "2" ||
                                      bags === "1" ? (
                                        <>{bags?.split(" ")[0]} Piece</>
                                      ) : bags === " " ? (
                                        <>0 Kg</>
                                      ) : (
                                        <>{bags?.slice(0, 2) || 0} Kg</>
                                      )}
                                    </h5>
                                  </Box>
                                </Grid>
                              </Grid>
                            </Box>
                          </Box>
                          <Box sx={{ border: "1px dashed #003566" }}></Box>
                          {/* ---------------Back data--------------- */}
                          <Box className="roundsegment-2">
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
                                  textTransform: "uppercase",
                                }}
                              >
                                {
                                  segments.back[0]?.departureLocation?.split(
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
                                  textTransform: "uppercase",
                                }}
                              >
                                {
                                  segments.back[0]?.arrivalLocation?.split(
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
                                      src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segments.back[0]?.marketingcareer}.png`}
                                      alt={`${segments.back[0]?.marketingcareer}`}
                                    />
                                    <Typography
                                      width="100px"
                                      fontSize="12px"
                                      fontWeight={500}
                                      textAlign="center"
                                      paddingRight={2}
                                    >
                                      {segments.back[0]?.marketingcareerName}
                                    </Typography>
                                  </Box>
                                  <Box className="flight-content-detail">
                                    <h4>Departure From</h4>
                                    <h5>
                                      ({segments.back[0]?.departure})-
                                      {segments.back[0]?.departureAirport}
                                    </h5>
                                    <h5>
                                      {segments.back[0]?.departureLocation}
                                    </h5>
                                    <h5>
                                      {format(
                                        new Date(
                                          segments.back[0]?.departureTime
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
                                      ({segments.back[0]?.arrival})-
                                      {segments.back[0]?.arrivalAirport}
                                    </h5>
                                    <h5>{segments.back[0]?.arrivalLocation}</h5>
                                    <h5>
                                      {format(
                                        new Date(segments.back[0]?.arrivalTime),
                                        "dd MMM yyyy hh:mm a"
                                      )}
                                    </h5>
                                  </Box>
                                </Grid>
                                <Grid item xs={2} sm={2} md={3}>
                                  <Box className="flight-content-detail">
                                    <h4>Duration</h4>
                                    <h5>{segments.back[0]?.flightduration}</h5>
                                    <h5 style={{ color: "tomato" }}>
                                      {segments.back[0]?.marketingcareer}{" "}
                                      {segments.back[0]?.marketingflight}{" "}
                                    </h5>
                                    <h5>
                                      Class: {segments.back[0]?.bookingcode}{" "}
                                      &nbsp;
                                      <span style={{ color: "crimson" }}>
                                        Seat: {segments.back[0]?.seat || 9}
                                      </span>
                                    </h5>
                                    <h5>
                                      Baggage:{" "}
                                      {bags === "3" ||
                                      bags === "2" ||
                                      bags === "1" ? (
                                        <>{bags?.split(" ")[0]} Piece</>
                                      ) : bags === " " ? (
                                        <>0 Kg</>
                                      ) : (
                                        <>{bags?.slice(0, 2) || 0} Kg</>
                                      )}
                                    </h5>
                                  </Box>
                                </Grid>
                              </Grid>
                            </Box>
                          </Box>
                        </>
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
                                  <td>Adult add</td>
                                  <td>{pricebreakdown[0].BaseFare}</td>
                                  <td>{pricebreakdown[0]?.Tax}</td>
                                  <td>
                                    {parseInt(pricebreakdown[0]?.BaseFare) +
                                      parseInt(pricebreakdown[0]?.Tax)}
                                  </td>
                                  <td>{pricebreakdown[0]?.PaxCount}</td>
                                  <td>{pricebreakdown[0]?.ServiceFee}</td>
                                  <td>
                                    {(parseInt(pricebreakdown[0]?.BaseFare) +
                                      parseInt(pricebreakdown[0]?.Tax) +
                                      parseInt(pricebreakdown[0]?.ServiceFee)) *
                                      pricebreakdown[0]?.PaxCount}
                                  </td>
                                </tr>
                                <tr>
                                  <td>Child</td>
                                  <td>{pricebreakdown[1]?.BaseFare}</td>
                                  <td>{pricebreakdown[1]?.Tax}</td>
                                  <td>
                                    {parseInt(pricebreakdown[1]?.BaseFare) +
                                      parseInt(pricebreakdown[1]?.Tax)}
                                  </td>
                                  <td>{pricebreakdown[1]?.PaxCount}</td>

                                  <td>{pricebreakdown[1]?.ServiceFee}</td>
                                  <td>
                                    {(parseInt(pricebreakdown[1]?.BaseFare) +
                                      parseInt(pricebreakdown[1]?.Tax) +
                                      parseInt(pricebreakdown[1]?.ServiceFee)) *
                                      pricebreakdown[1]?.PaxCount}
                                  </td>
                                </tr>
                                <tr>
                                  <td>Infant</td>
                                  <td>{pricebreakdown[2]?.BaseFare}</td>
                                  <td>{pricebreakdown[2]?.Tax}</td>
                                  <td>
                                    {parseInt(pricebreakdown[2]?.BaseFare) +
                                      parseInt(pricebreakdown[2]?.Tax)}
                                  </td>
                                  <td>{pricebreakdown[2]?.PaxCount}</td>

                                  <td>{pricebreakdown[2]?.ServiceFee}</td>
                                  <td>
                                    {(parseInt(pricebreakdown[2]?.BaseFare) +
                                      parseInt(pricebreakdown[2]?.Tax) +
                                      parseInt(pricebreakdown[2]?.ServiceFee)) *
                                      pricebreakdown[2]?.PaxCount}
                                  </td>
                                </tr>
                              </>
                            ) : adultCount > 0 && childCount > 0 ? (
                              <>
                                <tr>
                                  <td>Adult</td>
                                  <td>{pricebreakdown[0].BaseFare}</td>
                                  <td>{pricebreakdown[0]?.Tax}</td>
                                  <td>
                                    {parseInt(pricebreakdown[0]?.BaseFare) +
                                      parseInt(pricebreakdown[0]?.Tax)}
                                  </td>
                                  <td>{pricebreakdown[0]?.PaxCount}</td>
                                  <td>{pricebreakdown[0]?.ServiceFee}</td>
                                  <td>
                                    {(parseInt(pricebreakdown[0]?.BaseFare) +
                                      parseInt(pricebreakdown[0]?.Tax) +
                                      parseInt(pricebreakdown[0]?.ServiceFee)) *
                                      pricebreakdown[0]?.PaxCount}
                                  </td>
                                </tr>

                                <tr>
                                  <td>Child</td>
                                  <td>{pricebreakdown[1]?.BaseFare}</td>
                                  <td>{pricebreakdown[1]?.Tax}</td>
                                  <td>
                                    {parseInt(pricebreakdown[1]?.BaseFare) +
                                      parseInt(pricebreakdown[1]?.Tax)}
                                  </td>
                                  <td>{pricebreakdown[1]?.PaxCount}</td>

                                  <td>{pricebreakdown[1]?.ServiceFee}</td>
                                  <td>
                                    {(parseInt(pricebreakdown[1]?.BaseFare) +
                                      parseInt(pricebreakdown[1]?.Tax) +
                                      parseInt(pricebreakdown[1]?.ServiceFee)) *
                                      pricebreakdown[1]?.PaxCount}
                                  </td>
                                </tr>
                              </>
                            ) : adultCount > 0 && infant > 0 ? (
                              <>
                                <tr>
                                  <td>Adult</td>
                                  <td>{pricebreakdown[0].BaseFare}</td>
                                  <td>{pricebreakdown[0]?.Tax}</td>
                                  <td>
                                    {parseInt(pricebreakdown[0]?.BaseFare) +
                                      parseInt(pricebreakdown[0]?.Tax)}
                                  </td>
                                  <td>{pricebreakdown[0]?.PaxCount}</td>
                                  <td>{pricebreakdown[0]?.ServiceFee}</td>
                                  <td>
                                    {(parseInt(pricebreakdown[0]?.BaseFare) +
                                      parseInt(pricebreakdown[0]?.Tax) +
                                      parseInt(pricebreakdown[0]?.ServiceFee)) *
                                      pricebreakdown[0]?.PaxCount}
                                  </td>
                                </tr>
                                <tr>
                                  <td>Infant</td>
                                  <td>{pricebreakdown[1]?.BaseFare}</td>
                                  <td>{pricebreakdown[1]?.Tax}</td>
                                  <td>
                                    {parseInt(pricebreakdown[1]?.BaseFare) +
                                      parseInt(pricebreakdown[1]?.Tax)}
                                  </td>
                                  <td>{pricebreakdown[1]?.PaxCount}</td>

                                  <td>{pricebreakdown[1]?.ServiceFee}</td>
                                  <td>
                                    {(parseInt(pricebreakdown[1]?.BaseFare) +
                                      parseInt(pricebreakdown[1]?.Tax) +
                                      parseInt(pricebreakdown[1]?.ServiceFee)) *
                                      pricebreakdown[1]?.PaxCount}
                                  </td>
                                </tr>
                              </>
                            ) : (
                              <tr>
                                <td>Adult</td>
                                <td>{pricebreakdown[0].BaseFare}</td>
                                <td>{pricebreakdown[0]?.Tax}</td>
                                <td>
                                  {parseInt(pricebreakdown[0]?.BaseFare) +
                                    parseInt(pricebreakdown[0]?.Tax)}
                                </td>
                                <td>{pricebreakdown[0]?.PaxCount}</td>
                                <td>{pricebreakdown[0]?.ServiceFee}</td>
                                <td>
                                  {(parseInt(pricebreakdown[0]?.BaseFare) +
                                    parseInt(pricebreakdown[0]?.Tax) +
                                    parseInt(pricebreakdown[0]?.ServiceFee)) *
                                    pricebreakdown[0]?.PaxCount}
                                </td>
                              </tr>
                            )}
                          </table>
                        </Box>
                      </Box>
                    </TabPanel>

                    <TabPanel value="4" className="tab-class">
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

                    <TabPanel value="6" className="cancelation-1">
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
                            Adult : Airline Policy + 200
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
                            Adult : Airline Policy + 200
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
                            Adult : Airline Policy + No-Show Charge + 200
                          </Typography>
                        </Grid>
                      </Grid>

                      <Box className="warning-box" mb={2}>
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
                            Adult : Airline Policy + 200
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
                            Adult : Airline Policy + 200
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
                            Adult : Airline Policy + No-Show Charge + 200
                          </Typography>
                        </Grid>
                      </Grid>

                      <Box className="warning-box" mb={2}>
                        <Typography fontSize={"12px"} className="alert">
                          *Important: This destination may have COVID-19 travel
                          restriction in place, including specific restriction
                          for loading. Check any nation,local and health
                          advisories for this destination before you book.
                        </Typography>
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
                                {bags === "3" ||
                                bags === "2" ||
                                bags === "1" ? (
                                  <>{bags?.split(" ")[0]} Piece</>
                                ) : bags === " " ? (
                                  <>0 Kg</>
                                ) : (
                                  <>{bags?.slice(0, 2) || 0} Kg</>
                                )}
                              </td>
                              <td>{props?.roundData?.class || "Economy"}</td>
                            </tr>
                            {childCount > 0 && (
                              <tr>
                                <td>Child</td>
                                <td>
                                  {bags === "3" ||
                                  bags === "2" ||
                                  bags === "1" ? (
                                    <>{bags?.split(" ")[0]} Piece</>
                                  ) : bags === " " ? (
                                    <>0 Kg</>
                                  ) : (
                                    <>{bags?.slice(0, 2) || 0} Kg</>
                                  )}
                                </td>
                                <td>{props?.roundData?.class || "Economy"}</td>
                              </tr>
                            )}
                            {infant > 0 && (
                              <tr>
                                <td>Infant</td>
                                <td>
                                  {bags === "3" ||
                                  bags === "2" ||
                                  bags === "1" ? (
                                    <>{bags?.split(" ")[0]} Piece</>
                                  ) : bags === " " ? (
                                    <>0 Kg</>
                                  ) : (
                                    <>{bags?.slice(0, 2) || 0} Kg</>
                                  )}
                                </td>
                                <td>{props?.roundData?.class || "Economy"}</td>
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
        {/* --------new content end--------- */}
      </Box>
    </div>
  );
};

export default RoundSingleFlight;
