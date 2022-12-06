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
      //todo:-------
      {/* <Container>
            <Box style={{ width: "100%", marginTop: "10px" }}>
              <TabContext value={value} sx={{ bgcolor: "red" }}>
                <Tabs value={value} onChange={handleChange}>
                  <Tab label="Flight Details" value="1" />
                  <Tab label="Fare Summery" value="2" />
                  <Tab label="Commission & Invoice" value="3" />
                  <Tab label="reIssue" value="4" />
                  <Tab label="Refund" value="5" />
                  <Tab label="Baggage" value="7" />
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
                              <h5>{flightData?.segments[0].arrivalLocation}</h5>
                              <h5>
                                {" "}
                               
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

                              <h5>{flightData?.segments[0].flightduration}</h5>
                              <h5>
                                <span style={{ color: "tomato" }}>
                                  {" "}
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
                              <h5>{flightData?.segments[1].arrivalLocation}</h5>
                              <h5>
                                {" "}
                              
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
                              <h5>{flightData?.segments[1].flightduration}</h5>
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
                              <h5>{flightData?.segments[2]?.flightduration}</h5>
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
                              <h5>{flightData?.segments[0].arrivalLocation}</h5>
                              <h5>
                                {" "}
                               
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
                              <h5>{flightData?.segments[0].flightduration}</h5>
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
                              <h5>{flightData?.segments[1].flightduration}</h5>
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
                              <h5>{flightData?.segments[0].flightduration}</h5>
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
                            <tr>
                              <td>Child</td>
                              <td>{flightData?.pricebreakdown[1]?.BaseFare}</td>
                              <td>{flightData?.pricebreakdown[1]?.Tax}</td>
                              <td>
                                {parseInt(
                                  flightData?.pricebreakdown[1]?.BaseFare
                                ) +
                                  parseInt(flightData?.pricebreakdown[1]?.Tax)}
                              </td>
                              <td>{flightData?.pricebreakdown[1]?.PaxCount}</td>

                              <td>
                                {flightData?.pricebreakdown[1]?.ServiceFee}
                              </td>
                              <td>
                                {(parseInt(
                                  flightData?.pricebreakdown[1]?.BaseFare
                                ) +
                                  parseInt(flightData?.pricebreakdown[1]?.Tax) +
                                  parseInt(
                                    flightData?.pricebreakdown[1]?.ServiceFee
                                  )) *
                                  flightData?.pricebreakdown[1]?.PaxCount}
                              </td>
                            </tr>
                            <tr>
                              <td>Infant</td>
                              <td>{flightData?.pricebreakdown[2]?.BaseFare}</td>
                              <td>{flightData?.pricebreakdown[2]?.Tax}</td>
                              <td>
                                {parseInt(
                                  flightData?.pricebreakdown[2]?.BaseFare
                                ) +
                                  parseInt(flightData?.pricebreakdown[2]?.Tax)}
                              </td>
                              <td>{flightData?.pricebreakdown[2]?.PaxCount}</td>

                              <td>
                                {flightData?.pricebreakdown[2]?.ServiceFee}
                              </td>
                              <td>
                                {(parseInt(
                                  flightData?.pricebreakdown[2]?.BaseFare
                                ) +
                                  parseInt(flightData?.pricebreakdown[2]?.Tax) +
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
                            <tr>
                              <td>Child</td>
                              <td>{flightData?.pricebreakdown[1]?.BaseFare}</td>
                              <td>{flightData?.pricebreakdown[1]?.Tax}</td>
                              <td>
                                {parseInt(
                                  flightData?.pricebreakdown[1]?.BaseFare
                                ) +
                                  parseInt(flightData?.pricebreakdown[1]?.Tax)}
                              </td>
                              <td>{flightData?.pricebreakdown[1]?.PaxCount}</td>

                              <td>
                                {flightData?.pricebreakdown[1]?.ServiceFee}
                              </td>
                              <td>
                                {(parseInt(
                                  flightData?.pricebreakdown[1]?.BaseFare
                                ) +
                                  parseInt(flightData?.pricebreakdown[1]?.Tax) +
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
                            <tr>
                              <td>Infant</td>
                              <td>{flightData?.pricebreakdown[1]?.BaseFare}</td>
                              <td>{flightData?.pricebreakdown[1]?.Tax}</td>
                              <td>
                                {parseInt(
                                  flightData?.pricebreakdown[1]?.BaseFare
                                ) +
                                  parseInt(flightData?.pricebreakdown[1]?.Tax)}
                              </td>
                              <td>{flightData?.pricebreakdown[1]?.PaxCount}</td>

                              <td>
                                {flightData?.pricebreakdown[1]?.ServiceFee}
                              </td>
                              <td>
                                {(parseInt(
                                  flightData?.pricebreakdown[1]?.BaseFare
                                ) +
                                  parseInt(flightData?.pricebreakdown[1]?.Tax) +
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
                              ) + parseInt(flightData?.pricebreakdown[0]?.Tax)}
                            </td>
                            <td>{flightData?.pricebreakdown[0]?.PaxCount}</td>

                            <td>{flightData?.pricebreakdown[0]?.ServiceFee}</td>
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
                      <Typography variant="h4">0 hours to 72 hours</Typography>
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
                      <Typography variant="h4">All Flight Departure</Typography>
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
                        restriction in place, including specific restriction for
                        loading Check any nation,local and health advisories for
                        this destination before you book.
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
                      <Typography variant="h4">0 hours to 72 hours</Typography>
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
                      <Typography variant="h4">All Flight Departure</Typography>
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
                        restriction in place, including specific restriction for
                        loading Check any nation,local and health advisories for
                        this destination before you book.
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
          </Container> */}
      //todo:-------
    </div>
  );
};

export default junk;
