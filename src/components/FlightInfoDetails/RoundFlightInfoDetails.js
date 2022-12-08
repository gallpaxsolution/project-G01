import { Grid, Typography, Box, Button } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { AiFillCaretDown } from "react-icons/ai";
import commaNumber from "comma-number";
import React, { useEffect, useState } from "react";
import secureLocalStorage from "react-secure-storage";
import { Container } from "@mui/system";

const RoundFlightInfoDetails = ({
  loadData,
  searchData,
  adultCount,
  childCount,
  infant,
  adultPrice,
  childPrice,
  infPrice,
  adultTaxPrice,
  childTaxPrice,
  infTaxPrice,
  inTotalBaseFare,
  totalTax,
  totalFare,
  totalBaseFare,
  clientFare,
  serviceFeeAdult,
  serviceFeeChild,
  serviceFeeInfant,
  agentTotal,
  discount,
  coupon,
  setCoupon,
  couponAppliedMessage,
  setCouponAppliedMessage,
  goAdultBagage,
  setGoAdultBagage,
  goChildBagage,
  setGoChildBagage,
  goInfatBagage,
  setGoInfatBagage,
  backAdultBagage,
  setBackAdultBagage,
  backChildBagage,
  setBackChildBagage,
  backInfantBagage,
  setBackInfantBagage,
}) => {
  const users = secureLocalStorage.getItem("user-info");
  const agentId = users?.user?.agentId;

  const submitCoupon = (e) => {
    e.preventDefault();
    let url = "https://api.flyfarint.com/v.1.0.0/Coupon/check.php";
    let body = JSON.stringify({
      agentId,
      coupon,
    });
    fetch(url, {
      method: "POST",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: body,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setCouponAppliedMessage(data);
        } else {
          setCouponAppliedMessage(data);
          // setTimeout(() => {
          //   setCouponAppliedMessage({});
          // }, 10000);
        }
      });
    // e.target.reset();
  };

  useEffect(() => {
    if (searchData?.roundData?.system === "FlyHub") {
      const [adultBag = "", childBag = "", infantBag = ""] =
        loadData?.Results[0]?.segments[0]?.baggageDetails;
      setGoAdultBagage(adultBag.Checkin);
      setBackAdultBagage(adultBag.Checkin);
      setGoChildBagage(childBag.Checkin || "");
      setBackChildBagage(childBag.Checkin || "");
      setGoInfatBagage(infantBag.Checkin || "");
      setBackInfantBagage(infantBag.Checkin || "");
    }
    const baggagefunction = () => {
      if (searchData?.roundData?.system === "Sabre") {
        if (adultCount > 0 && childCount > 0 && infant > 0) {
          const goadultBagRef =
            loadData?.groupedItineraryResponse.itineraryGroups[0].itineraries[0]
              .pricingInformation[0].fare?.passengerInfoList[0]?.passengerInfo
              .baggageInformation[0]?.allowance?.ref || 0;
          const goadultBag =
            loadData?.groupedItineraryResponse.baggageAllowanceDescs[
              goadultBagRef - 1
            ]?.weight ||
            loadData?.groupedItineraryResponse.baggageAllowanceDescs[
              goadultBagRef - 1
            ]?.pieceCount;
          setGoAdultBagage(goadultBag);

          const gochildBagRef =
            loadData?.groupedItineraryResponse.itineraryGroups[0].itineraries[0]
              .pricingInformation[0].fare?.passengerInfoList[1]?.passengerInfo
              ?.baggageInformation[0]?.allowance.ref || 0;

          const gochildBag =
            loadData?.groupedItineraryResponse.baggageAllowanceDescs[
              gochildBagRef - 1
            ]?.weight ||
            loadData?.groupedItineraryResponse.baggageAllowanceDescs[
              gochildBagRef - 1
            ]?.pieceCount ||
            0;
          setGoChildBagage(gochildBag);

          const goinfantBagRef =
            loadData?.groupedItineraryResponse.itineraryGroups[0].itineraries[0]
              .pricingInformation[0].fare?.passengerInfoList[2]?.passengerInfo
              ?.baggageInformation[0]?.allowance?.ref || 0;

          const goinfantBag =
            loadData?.groupedItineraryResponse?.baggageAllowanceDescs[
              goinfantBagRef - 1
            ]?.weight ||
            loadData?.groupedItineraryResponse.baggageAllowanceDescs[
              goinfantBagRef - 1
            ]?.pieceCount;
          setGoInfatBagage(goinfantBag);
        } else if (adultCount > 0 && childCount > 0) {
          const goadultBagRef =
            loadData?.groupedItineraryResponse.itineraryGroups[0].itineraries[0]
              .pricingInformation[0].fare?.passengerInfoList[0]?.passengerInfo
              .baggageInformation[0]?.allowance?.ref || 0;
          const goadultBag =
            loadData?.groupedItineraryResponse.baggageAllowanceDescs[
              goadultBagRef - 1
            ]?.weight ||
            loadData?.groupedItineraryResponse.baggageAllowanceDescs[
              goadultBagRef - 1
            ]?.pieceCount;
          setGoAdultBagage(goadultBag);

          const gochildBagRef =
            loadData?.groupedItineraryResponse.itineraryGroups[0].itineraries[0]
              .pricingInformation[0].fare?.passengerInfoList[1]?.passengerInfo
              ?.baggageInformation[0]?.allowance.ref || 0;

          const gochildBag =
            loadData?.groupedItineraryResponse.baggageAllowanceDescs[
              gochildBagRef - 1
            ]?.weight ||
            loadData?.groupedItineraryResponse.baggageAllowanceDescs[
              gochildBagRef - 1
            ]?.pieceCount ||
            0;
          setGoChildBagage(gochildBag);
        } else if (adultCount > 0 && infant > 0) {
          const goadultBagRef =
            loadData?.groupedItineraryResponse.itineraryGroups[0].itineraries[0]
              .pricingInformation[0].fare?.passengerInfoList[0]?.passengerInfo
              .baggageInformation[0]?.allowance?.ref || 0;
          const goadultBag =
            loadData?.groupedItineraryResponse.baggageAllowanceDescs[
              goadultBagRef - 1
            ]?.weight ||
            loadData?.groupedItineraryResponse.baggageAllowanceDescs[
              goadultBagRef - 1
            ]?.pieceCount;
          setGoAdultBagage(goadultBag);

          const goinfantBagRef =
            loadData?.groupedItineraryResponse.itineraryGroups[0].itineraries[0]
              .pricingInformation[0].fare?.passengerInfoList[1]?.passengerInfo
              ?.baggageInformation[0]?.allowance?.ref || 0;

          const goinfantBag =
            loadData?.groupedItineraryResponse?.baggageAllowanceDescs[
              goinfantBagRef - 1
            ]?.weight ||
            loadData?.groupedItineraryResponse.baggageAllowanceDescs[
              goinfantBagRef - 1
            ]?.pieceCount;
          setGoInfatBagage(goinfantBag);
        } else {
          const goadultBagRef =
            loadData?.groupedItineraryResponse.itineraryGroups[0].itineraries[0]
              .pricingInformation[0].fare?.passengerInfoList[0]?.passengerInfo
              .baggageInformation[0]?.allowance?.ref || 0;
          const goadultBag =
            loadData?.groupedItineraryResponse.baggageAllowanceDescs[
              goadultBagRef - 1
            ]?.weight ||
            loadData?.groupedItineraryResponse.baggageAllowanceDescs[
              goadultBagRef - 1
            ]?.pieceCount;
          setGoAdultBagage(goadultBag);
        }

        if (adultCount > 0 && childCount > 0 && infant > 0) {
          const backadultBagRef =
            loadData?.groupedItineraryResponse.itineraryGroups[0].itineraries[0]
              .pricingInformation[0].fare?.passengerInfoList[0]?.passengerInfo
              .baggageInformation[1]?.allowance?.ref;
          const backadultBag =
            loadData?.groupedItineraryResponse.baggageAllowanceDescs[
              backadultBagRef - 1
            ]?.weight ||
            loadData?.groupedItineraryResponse.baggageAllowanceDescs[
              backadultBagRef - 1
            ]?.pieceCount;
          setBackAdultBagage(backadultBag);
          const backchildBagRef =
            loadData?.groupedItineraryResponse.itineraryGroups[0]
              ?.itineraries[0].pricingInformation[0]?.fare?.passengerInfoList[1]
              ?.passengerInfo?.baggageInformation[1]?.allowance?.ref;

          const backchildBag =
            loadData?.groupedItineraryResponse.baggageAllowanceDescs[
              backchildBagRef - 1
            ]?.weight ||
            loadData?.groupedItineraryResponse.baggageAllowanceDescs[
              backchildBagRef - 1
            ]?.pieceCount;
          setBackChildBagage(backchildBag);

          const backinfantBagRef =
            loadData?.groupedItineraryResponse.itineraryGroups[0].itineraries[0]
              .pricingInformation[0].fare?.passengerInfoList[2]?.passengerInfo
              ?.baggageInformation[1]?.allowance?.ref;

          const backinfantBag =
            loadData?.groupedItineraryResponse.baggageAllowanceDescs[
              backinfantBagRef - 1
            ]?.weight ||
            loadData?.groupedItineraryResponse.baggageAllowanceDescs[
              backinfantBagRef - 1
            ]?.pieceCount;
          setBackInfantBagage(backinfantBag);
        } else if (adultCount > 0 && childCount > 0) {
          const backadultBagRef =
            loadData?.groupedItineraryResponse.itineraryGroups[0].itineraries[0]
              .pricingInformation[0].fare?.passengerInfoList[0]?.passengerInfo
              .baggageInformation[1]?.allowance?.ref;
          const backadultBag =
            loadData?.groupedItineraryResponse.baggageAllowanceDescs[
              backadultBagRef - 1
            ]?.weight ||
            loadData?.groupedItineraryResponse.baggageAllowanceDescs[
              backadultBagRef - 1
            ]?.pieceCount;
          setBackAdultBagage(backadultBag);

          const backchildBagRef =
            loadData?.groupedItineraryResponse.itineraryGroups[0]
              ?.itineraries[0].pricingInformation[0]?.fare?.passengerInfoList[1]
              ?.passengerInfo?.baggageInformation[1]?.allowance?.ref;

          const backchildBag =
            loadData?.groupedItineraryResponse.baggageAllowanceDescs[
              backchildBagRef - 1
            ]?.weight ||
            loadData?.groupedItineraryResponse.baggageAllowanceDescs[
              backchildBagRef - 1
            ]?.pieceCount;
          setBackChildBagage(backchildBag);
        } else if (adultCount > 0 && infant > 0) {
          const backadultBagRef =
            loadData?.groupedItineraryResponse.itineraryGroups[0].itineraries[0]
              .pricingInformation[0].fare?.passengerInfoList[0]?.passengerInfo
              .baggageInformation[1]?.allowance?.ref;
          const backadultBag =
            loadData?.groupedItineraryResponse.baggageAllowanceDescs[
              backadultBagRef - 1
            ]?.weight ||
            loadData?.groupedItineraryResponse.baggageAllowanceDescs[
              backadultBagRef - 1
            ]?.pieceCount;
          setBackAdultBagage(backadultBag);

          const backinfantBagRef =
            loadData?.groupedItineraryResponse.itineraryGroups[0].itineraries[0]
              .pricingInformation[0].fare?.passengerInfoList[1]?.passengerInfo
              ?.baggageInformation[1]?.allowance?.ref;

          const backinfantBag =
            loadData?.groupedItineraryResponse.baggageAllowanceDescs[
              backinfantBagRef - 1
            ]?.weight ||
            loadData?.groupedItineraryResponse.baggageAllowanceDescs[
              backinfantBagRef - 1
            ]?.pieceCount;
          setBackInfantBagage(backinfantBag);
        } else {
          const backadultBagRef =
            loadData?.groupedItineraryResponse.itineraryGroups[0].itineraries[0]
              .pricingInformation[0].fare?.passengerInfoList[0]?.passengerInfo
              .baggageInformation[1]?.allowance?.ref;
          const backadultBag =
            loadData?.groupedItineraryResponse.baggageAllowanceDescs[
              backadultBagRef - 1
            ]?.weight ||
            loadData?.groupedItineraryResponse.baggageAllowanceDescs[
              backadultBagRef - 1
            ]?.pieceCount;
          setBackAdultBagage(backadultBag);
        }
      }
    };
    baggagefunction();
  }, []);
  return (
    <Container>
      <Box>
        <Accordion defaultExpanded={true} className="flight-accordian1">
          <AccordionSummary
            expandIcon={<AiFillCaretDown color="#003566" />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Grid container justifyContent={"space-between"}>
              <Typography
                sx={{
                  color: "#003566",
                  fontSize: "16px",
                  fontWeight: 600,
                  width: "100%",
                }}
              >
                Price Break Down
                <Box className="eticket-title-line"></Box>
              </Typography>
            </Grid>
          </AccordionSummary>
          <AccordionDetails className="flight-accordian2">
            {adultCount >= 1 && childCount >= 1 && infant >= 1 ? (
              <Box>
                <Box>
                  <Typography
                    sx={{
                      color: "#DC143C",
                      fontSize: "15px",
                      fontWeight: 600,
                    }}
                  >
                    Adult x{adultCount}
                  </Typography>
                  <Grid container justifyContent="space-between">
                    <Typography
                      sx={{
                        color: "#003566",
                        fontSize: "13px",
                        fontWeight: 500,
                      }}
                    >
                      Base
                    </Typography>
                    <Typography
                      sx={{
                        color: "#000",
                        fontSize: "13px",
                        fontWeight: 500,
                      }}
                    >
                      {commaNumber(adultPrice)}৳
                    </Typography>
                  </Grid>
                  <Grid container justifyContent="space-between">
                    <Typography
                      sx={{
                        color: "#003566",
                        fontSize: "13px",
                        fontWeight: 500,
                      }}
                    >
                      Taxes
                    </Typography>
                    <Typography
                      sx={{
                        color: "#000",
                        fontSize: "13px",
                        fontWeight: 500,
                      }}
                    >
                      {commaNumber(adultTaxPrice)}৳
                    </Typography>
                  </Grid>
                  <Grid container justifyContent="space-between">
                    <Typography
                      sx={{
                        color: "#003566",
                        fontSize: "13px",
                        fontWeight: 500,
                      }}
                    >
                      Service Fee
                    </Typography>
                    <Typography
                      sx={{
                        color: "#000",
                        fontSize: "13px",
                        fontWeight: 500,
                      }}
                    >
                      {serviceFeeAdult}৳
                    </Typography>
                  </Grid>
                </Box>
                <Box className="eticket-hr-line"></Box>

                <Box>
                  <Typography
                    sx={{
                      color: "#DC143C",
                      fontSize: "15px",
                      fontWeight: 600,
                    }}
                  >
                    Child x{childCount}
                  </Typography>
                  <Grid container justifyContent="space-between">
                    <Typography
                      sx={{
                        color: "#003566",
                        fontSize: "13px",
                        fontWeight: 500,
                      }}
                    >
                      Base
                    </Typography>
                    <Typography
                      sx={{
                        color: "#000",
                        fontSize: "13px",
                        fontWeight: 500,
                      }}
                    >
                      {commaNumber(childPrice)}৳
                    </Typography>
                  </Grid>
                  <Grid container justifyContent="space-between">
                    <Typography
                      sx={{
                        color: "#003566",
                        fontSize: "13px",
                        fontWeight: 500,
                      }}
                    >
                      Taxes
                    </Typography>
                    <Typography
                      sx={{
                        color: "#000",
                        fontSize: "13px",
                        fontWeight: 500,
                      }}
                    >
                      {commaNumber(childTaxPrice)}৳
                    </Typography>
                  </Grid>
                  <Grid container justifyContent="space-between">
                    <Typography
                      sx={{
                        color: "#003566",
                        fontSize: "13px",
                        fontWeight: 500,
                      }}
                    >
                      Service Fee
                    </Typography>
                    <Typography
                      sx={{
                        color: "#000",
                        fontSize: "13px",
                        fontWeight: 500,
                      }}
                    >
                      {serviceFeeChild}৳
                    </Typography>
                  </Grid>
                </Box>
                <Box className="eticket-hr-line"></Box>

                <Box>
                  <Typography
                    sx={{
                      color: "#DC143C",
                      fontSize: "15px",
                      fontWeight: 600,
                    }}
                  >
                    Infant x{infant}
                  </Typography>
                  <Grid container justifyContent="space-between">
                    <Typography
                      sx={{
                        color: "#003566",
                        fontSize: "13px",
                        fontWeight: 500,
                      }}
                    >
                      Base
                    </Typography>
                    <Typography
                      sx={{
                        color: "#000",
                        fontSize: "13px",
                        fontWeight: 500,
                      }}
                    >
                      {commaNumber(infPrice)}৳
                    </Typography>
                  </Grid>
                  <Grid container justifyContent="space-between">
                    <Typography
                      sx={{
                        color: "#003566",
                        fontSize: "13px",
                        fontWeight: 500,
                      }}
                    >
                      Taxes
                    </Typography>
                    <Typography
                      sx={{
                        color: "#000",
                        fontSize: "13px",
                        fontWeight: 500,
                      }}
                    >
                      {commaNumber(infTaxPrice)}৳
                    </Typography>
                  </Grid>
                  <Grid container justifyContent="space-between">
                    <Typography
                      sx={{
                        color: "#003566",
                        fontSize: "13px",
                        fontWeight: 500,
                      }}
                    >
                      Service Fee
                    </Typography>
                    <Typography
                      sx={{
                        color: "#000",
                        fontSize: "13px",
                        fontWeight: 500,
                      }}
                    >
                      {serviceFeeInfant}৳
                    </Typography>
                  </Grid>
                </Box>
              </Box>
            ) : adultCount >= 1 && childCount >= 1 ? (
              <Box>
                <Box>
                  <Typography
                    sx={{
                      color: "#DC143C",
                      fontSize: "15px",
                      fontWeight: 600,
                    }}
                  >
                    Adult x{adultCount}
                  </Typography>
                  <Grid container justifyContent="space-between">
                    <Typography
                      sx={{
                        color: "#003566",
                        fontSize: "13px",
                        fontWeight: 500,
                      }}
                    >
                      Base
                    </Typography>
                    <Typography
                      sx={{
                        color: "#000",
                        fontSize: "13px",
                        fontWeight: 500,
                      }}
                    >
                      {commaNumber(adultPrice)}৳
                    </Typography>
                  </Grid>
                  <Grid container justifyContent="space-between">
                    <Typography
                      sx={{
                        color: "#003566",
                        fontSize: "13px",
                        fontWeight: 500,
                      }}
                    >
                      Taxes
                    </Typography>
                    <Typography
                      sx={{
                        color: "#000",
                        fontSize: "13px",
                        fontWeight: 500,
                      }}
                    >
                      {commaNumber(adultTaxPrice)}৳
                    </Typography>
                  </Grid>
                  <Grid container justifyContent="space-between">
                    <Typography
                      sx={{
                        color: "#003566",
                        fontSize: "13px",
                        fontWeight: 500,
                      }}
                    >
                      Service Fee
                    </Typography>
                    <Typography
                      sx={{
                        color: "#000",
                        fontSize: "13px",
                        fontWeight: 500,
                      }}
                    >
                      {serviceFeeAdult}৳
                    </Typography>
                  </Grid>
                </Box>
                <Box className="eticket-hr-line"></Box>
                <Box>
                  <Typography
                    sx={{
                      color: "#DC143C",
                      fontSize: "15px",
                      fontWeight: 600,
                    }}
                  >
                    Child x{childCount}
                  </Typography>
                  <Grid container justifyContent="space-between">
                    <Typography
                      sx={{
                        color: "#003566",
                        fontSize: "13px",
                        fontWeight: 500,
                      }}
                    >
                      Base
                    </Typography>
                    <Typography
                      sx={{
                        color: "#000",
                        fontSize: "13px",
                        fontWeight: 500,
                      }}
                    >
                      {commaNumber(childPrice)}৳
                    </Typography>
                  </Grid>
                  <Grid container justifyContent="space-between">
                    <Typography
                      sx={{
                        color: "#003566",
                        fontSize: "13px",
                        fontWeight: 500,
                      }}
                    >
                      Taxes
                    </Typography>
                    <Typography
                      sx={{
                        color: "#000",
                        fontSize: "13px",
                        fontWeight: 500,
                      }}
                    >
                      {commaNumber(childTaxPrice)}৳
                    </Typography>
                  </Grid>
                  <Grid container justifyContent="space-between">
                    <Typography
                      sx={{
                        color: "#003566",
                        fontSize: "13px",
                        fontWeight: 500,
                      }}
                    >
                      Service Fee
                    </Typography>
                    <Typography
                      sx={{
                        color: "#000",
                        fontSize: "13px",
                        fontWeight: 500,
                      }}
                    >
                      {serviceFeeChild}৳
                    </Typography>
                  </Grid>
                </Box>
                <Box className="eticket-hr-line"></Box>
              </Box>
            ) : adultCount >= 1 && infant >= 1 ? (
              <Box>
                <Box>
                  <Typography
                    sx={{
                      color: "#DC143C",
                      fontSize: "15px",
                      fontWeight: 600,
                    }}
                  >
                    Adult x{adultCount}
                  </Typography>
                  <Grid container justifyContent="space-between">
                    <Typography
                      sx={{
                        color: "#003566",
                        fontSize: "13px",
                        fontWeight: 500,
                      }}
                    >
                      Base
                    </Typography>
                    <Typography
                      sx={{
                        color: "#000",
                        fontSize: "13px",
                        fontWeight: 500,
                      }}
                    >
                      {commaNumber(adultPrice)}৳
                    </Typography>
                  </Grid>
                  <Grid container justifyContent="space-between">
                    <Typography
                      sx={{
                        color: "#003566",
                        fontSize: "13px",
                        fontWeight: 500,
                      }}
                    >
                      Taxes
                    </Typography>
                    <Typography
                      sx={{
                        color: "#000",
                        fontSize: "13px",
                        fontWeight: 500,
                      }}
                    >
                      {commaNumber(adultTaxPrice)}৳
                    </Typography>
                  </Grid>
                  <Grid container justifyContent="space-between">
                    <Typography
                      sx={{
                        color: "#003566",
                        fontSize: "13px",
                        fontWeight: 500,
                      }}
                    >
                      Service Fee
                    </Typography>
                    <Typography
                      sx={{
                        color: "#000",
                        fontSize: "13px",
                        fontWeight: 500,
                      }}
                    >
                      {serviceFeeAdult}৳
                    </Typography>
                  </Grid>
                </Box>
                <Box className="eticket-hr-line"></Box>
                <Box>
                  <Typography
                    sx={{
                      color: "#DC143C",
                      fontSize: "15px",
                      fontWeight: 600,
                    }}
                  >
                    Infant x{infant}
                  </Typography>
                  <Grid container justifyContent="space-between">
                    <Typography
                      sx={{
                        color: "#003566",
                        fontSize: "13px",
                        fontWeight: 500,
                      }}
                    >
                      Base
                    </Typography>
                    <Typography
                      sx={{
                        color: "#000",
                        fontSize: "13px",
                        fontWeight: 500,
                      }}
                    >
                      {commaNumber(infPrice)}৳
                    </Typography>
                  </Grid>
                  <Grid container justifyContent="space-between">
                    <Typography
                      sx={{
                        color: "#003566",
                        fontSize: "13px",
                        fontWeight: 500,
                      }}
                    >
                      Taxes
                    </Typography>
                    <Typography
                      sx={{
                        color: "#000",
                        fontSize: "13px",
                        fontWeight: 500,
                      }}
                    >
                      {commaNumber(infTaxPrice)}৳
                    </Typography>
                  </Grid>
                  <Grid container justifyContent="space-between">
                    <Typography
                      sx={{
                        color: "#003566",
                        fontSize: "13px",
                        fontWeight: 500,
                      }}
                    >
                      Service Fee
                    </Typography>
                    <Typography
                      sx={{
                        color: "#000",
                        fontSize: "13px",
                        fontWeight: 500,
                      }}
                    >
                      {serviceFeeInfant}৳
                    </Typography>
                  </Grid>
                </Box>
                <Box className="eticket-hr-line"></Box>
              </Box>
            ) : (
              <Box>
                <Box>
                  <Typography
                    sx={{
                      color: "#DC143C",
                      fontSize: "15px",
                      fontWeight: 600,
                    }}
                  >
                    Adult x{adultCount}
                  </Typography>
                  <Grid container justifyContent="space-between">
                    <Typography
                      sx={{
                        color: "#003566",
                        fontSize: "13px",
                        fontWeight: 500,
                      }}
                    >
                      Base
                    </Typography>
                    <Typography
                      sx={{
                        color: "#000",
                        fontSize: "13px",
                        fontWeight: 500,
                      }}
                    >
                      {commaNumber(adultPrice)}৳
                    </Typography>
                  </Grid>
                  <Grid container justifyContent="space-between">
                    <Typography
                      sx={{
                        color: "#003566",
                        fontSize: "13px",
                        fontWeight: 500,
                      }}
                    >
                      Taxes
                    </Typography>
                    <Typography
                      sx={{
                        color: "#000",
                        fontSize: "13px",
                        fontWeight: 500,
                      }}
                    >
                      {commaNumber(adultTaxPrice)}৳
                    </Typography>
                  </Grid>
                  <Grid container justifyContent="space-between">
                    <Typography
                      sx={{
                        color: "#003566",
                        fontSize: "13px",
                        fontWeight: 500,
                      }}
                    >
                      Service Fee
                    </Typography>
                    <Typography
                      sx={{
                        color: "#000",
                        fontSize: "13px",
                        fontWeight: 500,
                      }}
                    >
                      {serviceFeeAdult}৳
                    </Typography>
                  </Grid>
                </Box>
              </Box>
            )}
            {/* -------nocut */}
            <Box my={2} height="2px" bgcolor="#DEDEDE"></Box>
            <Grid container justifyContent="space-between">
              <Typography
                sx={{
                  color: "#003566",
                  fontSize: "13px",
                  fontWeight: 500,
                }}
              >
                Total PAX
              </Typography>
              <Typography
                sx={{
                  color: "#000",
                  fontSize: "13px",
                  fontWeight: 500,
                }}
              >
                {adultCount + childCount + infant}&#128100;
              </Typography>
            </Grid>

            <Grid container justifyContent="space-between">
              <Typography
                sx={{
                  color: "#003566",
                  fontSize: "13px",
                  fontWeight: 500,
                }}
              >
                Total Base Fare
              </Typography>
              <Typography
                sx={{
                  color: "#000",
                  fontSize: "13px",
                  fontWeight: 500,
                }}
              >
                {commaNumber(totalBaseFare)}৳
              </Typography>
            </Grid>
            <Grid container justifyContent="space-between">
              <Typography
                sx={{
                  color: "#003566",
                  fontSize: "13px",
                  fontWeight: 500,
                }}
              >
                Total TAX
              </Typography>
              <Typography
                sx={{
                  color: "#000",
                  fontSize: "13px",
                  fontWeight: 500,
                }}
              >
                {commaNumber(totalTax)}৳
              </Typography>
            </Grid>

            <Grid container justifyContent="space-between">
              <Typography
                sx={{
                  color: "#003566",
                  fontSize: "13px",
                  fontWeight: 500,
                }}
              >
                Agent Total
              </Typography>
              <Typography
                sx={{
                  color: "#000",
                  fontSize: "13px",
                  fontWeight: 500,
                }}
              >
                {commaNumber(agentTotal)}৳
              </Typography>
            </Grid>
            <Grid container justifyContent="space-between">
              <Typography
                sx={{
                  color: "#003566",
                  fontSize: "13px",
                  fontWeight: 500,
                }}
              >
                Customer Total
              </Typography>
              <Typography
                sx={{
                  color: "#000",
                  fontSize: "13px",
                  fontWeight: 500,
                }}
              >
                {commaNumber(totalFare)}৳
              </Typography>
            </Grid>
            <Grid container justifyContent="space-between">
              <Typography
                sx={{
                  color: "#003566",
                  fontSize: "13px",
                  fontWeight: 500,
                }}
              >
                Discount
              </Typography>
              <Typography
                sx={{
                  color: "#000",
                  fontSize: "13px",
                  fontWeight: 500,
                }}
              >
                {commaNumber(discount)}৳
              </Typography>
            </Grid>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded={false} className="flight-accordian1">
          <AccordionSummary
            expandIcon={<AiFillCaretDown color="#003566" />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Grid container justifyContent={"space-between"}>
              <Typography
                sx={{
                  color: "#003566",
                  fontSize: "16px",
                  fontWeight: 600,
                  width: "100%",
                }}
              >
                Baggage Policy
                <Box className="eticket-title-line"></Box>
              </Typography>
            </Grid>
          </AccordionSummary>
          <AccordionDetails className="flight-accordian2">
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-between",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  color: "#DC143C",
                  fontSize: "15px",
                  fontWeight: 600,
                }}
              >
                {searchData?.roundData?.godeparture?.trim()} -{" "}
                {searchData?.roundData?.goarrival?.trim()}
              </Typography>
              {/* <SwapHorizIcon
              sx={{
                color: "#dc143c",
                mx: "20px",
              }}
            />
            <Typography
              sx={{
                color: "#DC143C",
                fontSize: "15px",
                fontWeight: 600,
              }}
            >
              {searchData?.roundData?.backdeparture?.trim()} -{" "}
              {searchData?.roundData?.backarrival?.trim()}
            </Typography> */}
            </Box>
            <Box>
              <Grid container justifyContent={"space-between"}>
                <Grid item>
                  <Typography color="#000" fontSize="14px">
                    {adultCount > 0 && (
                      <>
                        Adult <br />
                      </>
                    )}

                    {childCount > 0 && (
                      <>
                        Child
                        <br />
                      </>
                    )}

                    {infant > 0 && (
                      <>
                        Infant <br />
                      </>
                    )}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography color="#000" fontSize="14px">
                    {searchData?.roundData?.system === "Sabre" ? (
                      <>
                        {goAdultBagage === 0 && (
                          <>
                            "0Kg"
                            <br />
                          </>
                        )}
                        {goChildBagage === 0 && (
                          <>
                            "0Kg"
                            <br />
                          </>
                        )}
                        {goInfatBagage === 0 && "0Kg"}
                        {goAdultBagage ? (
                          <>
                            {/* {goAdultBagage} */}
                            {goAdultBagage > 5 ? (
                              <>{goAdultBagage || 0}Kg </>
                            ) : goAdultBagage < 0 ? (
                              <>0 Kg</>
                            ) : (
                              <>{goAdultBagage || 0}Piece </>
                            )}
                            <br />
                          </>
                        ) : (
                          <></>
                        )}{" "}
                        {goChildBagage ? (
                          <>
                            {goChildBagage > 5 ? (
                              <>{goChildBagage || 0}Kg </>
                            ) : (
                              <>{goChildBagage || 0}Piece </>
                            )}
                            <br />
                          </>
                        ) : (
                          <></>
                        )}{" "}
                        {goInfatBagage ? (
                          <>
                            {goInfatBagage > 5 ? (
                              <>{goInfatBagage || 0}Kg </>
                            ) : (
                              <>{goInfatBagage || 0}Piece </>
                            )}
                            <br />
                          </>
                        ) : (
                          <></>
                        )}
                      </>
                    ) : searchData?.roundData?.system === "FlyHub" ? (
                      <>
                        <Typography color="#000" fontSize="14px">
                          {loadData?.Results[0].segments[0].Baggage ===
                            null && (
                            <>
                              {adultCount > 0 && (
                                <>
                                  0Kg <br />{" "}
                                </>
                              )}
                              {childCount > 0 && (
                                <>
                                  0Kg <br />{" "}
                                </>
                              )}
                              {infant > 0 && <>0Kg</>}
                            </>
                          )}
                          {loadData?.Results[0]?.segments[0]?.baggageDetails.map(
                            (bag) => (
                              <>
                                {bag?.Checkin || "0"} <br />
                              </>
                            )
                          )}
                        </Typography>
                      </>
                    ) : (
                      <></>
                    )}
                  </Typography>
                </Grid>
              </Grid>
            </Box>

            <Box>
              <Typography
                sx={{
                  color: "#DC143C",
                  fontSize: "15px",
                  fontWeight: 600,
                }}
              >
                {searchData?.roundData?.backdeparture?.trim()} -{" "}
                {searchData?.roundData?.backarrival?.trim()}
              </Typography>
              <Grid container justifyContent={"space-between"}>
                <Grid item>
                  <Typography color="#000" fontSize="14px">
                    {adultCount > 0 && (
                      <>
                        Adult <br />
                      </>
                    )}

                    {childCount > 0 && (
                      <>
                        Child
                        <br />
                      </>
                    )}

                    {infant > 0 && (
                      <>
                        Infant <br />
                      </>
                    )}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography color="#000" fontSize="14px">
                    {searchData?.roundData?.system === "Sabre" ? (
                      <>
                        {backAdultBagage === 0 && (
                          <>
                            0Kg
                            <br />
                          </>
                        )}
                        {backChildBagage === 0 && (
                          <>
                            0Kg
                            <br />
                          </>
                        )}
                        {backInfantBagage === 0 && "0Kg"}
                        {backAdultBagage ? (
                          <>
                            {backAdultBagage > 5 ? (
                              <>{backAdultBagage || 0}Kg </>
                            ) : (
                              <>{backAdultBagage || 0}Piece </>
                            )}
                            <br />
                          </>
                        ) : (
                          <></>
                        )}
                        {backChildBagage ? (
                          <>
                            {backChildBagage > 5 ? (
                              <>{backChildBagage || 0}Kg </>
                            ) : (
                              <>{backChildBagage || 0}Piece </>
                            )}
                            <br />
                          </>
                        ) : (
                          <></>
                        )}
                        {backInfantBagage ? (
                          <>
                            {backInfantBagage > 5 ? (
                              <>{backInfantBagage || 0}Kg </>
                            ) : (
                              <>{backInfantBagage || 0}Piece </>
                            )}

                            <br />
                          </>
                        ) : (
                          <></>
                        )}
                      </>
                    ) : searchData?.roundData?.system === "FlyHub" ? (
                      <>
                        <Typography color="#000" fontSize="14px">
                          {loadData?.Results[0].segments[0]?.Baggage ===
                            null && (
                            <>
                              {adultCount > 0 && (
                                <>
                                  0Kg <br />{" "}
                                </>
                              )}
                              {childCount > 0 && (
                                <>
                                  0Kg <br />{" "}
                                </>
                              )}
                              {infant > 0 && <>0Kg</>}
                            </>
                          )}
                          {loadData?.Results[0]?.segments[1]?.TripIndicator ===
                          "InBound" ? (
                            <>
                              {loadData?.Results[0]?.segments[1]?.baggageDetails.map(
                                (bag) => (
                                  <>
                                    {bag?.Checkin || "0"} <br />
                                  </>
                                )
                              )}
                            </>
                          ) : loadData?.Results[0]?.segments[2]
                              ?.TripIndicator === "InBound" ? (
                            <>
                              {" "}
                              {loadData?.Results[0]?.segments[2]?.baggageDetails.map(
                                (bag) => (
                                  <>
                                    {bag?.Checkin || "0"} <br />
                                  </>
                                )
                              )}
                            </>
                          ) : (
                            <>
                              {loadData?.Results[0]?.segments[3]?.baggageDetails.map(
                                (bag) => (
                                  <>
                                    {bag?.Checkin || "0"} <br />
                                  </>
                                )
                              )}
                            </>
                          )}
                        </Typography>
                      </>
                    ) : (
                      <></>
                    )}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded={false} className="flight-accordian1">
          <AccordionSummary
            expandIcon={<AiFillCaretDown color="#003566" />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Grid container justifyContent={"space-between"}>
              <Typography
                sx={{
                  color: "#003566",
                  fontSize: "16px",
                  fontWeight: 600,
                  width: "100%",
                }}
              >
                Cancellation Policy
                <Box className="eticket-title-line"></Box>
              </Typography>
            </Grid>
          </AccordionSummary>
          <AccordionDetails className="flight-accordian2">
            <Typography>
              <ul className="eticket-list">
                System cannot retrieve cancelation policy. please contact with
                our reservation officer or policy can be reveal after booking.
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Container>
  );
};

export default RoundFlightInfoDetails;
