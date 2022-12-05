/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";

const junk = () => {
  return (
    <div>
      {/* <Grid sm={2} md={2.7} padding="15px">
          <Grid
            container
            sx={{
              alignItems: "center",
              height: "fit-content",
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
                              className={`${flightData?.system?.toLowerCase()}`}
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
                        className={`${flightData?.system?.toLowerCase()}`}
                        alt={`${flightData.career}`}
                      />
                    )}
                  </Box>
                ) : 
                flightData.system === "Galileo" ? (
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
                              className={`${flightData?.system?.toLowerCase()}`}
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
                              className={`${flightData?.system?.toLowerCase()}`}
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
                              className={`${flightData?.system?.toLowerCase()}`}
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
                        className={`${flightData?.system?.toLowerCase()}`}
                        alt={`${flightData.career}`}
                      />
                    )}
                  </Box>
                )}
              </Box>
            </Grid>

            <Grid md={12} lg={12} xl={8}>
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
            </Grid>
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
        </Grid> */}
      //todo:------------
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
      //todo:------------
      {/* <Typography>

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
          </Typography> */}
      //todo:-------
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
    </div>
  );
};

export default junk;
