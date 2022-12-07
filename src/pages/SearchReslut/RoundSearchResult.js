import {
  Box,
  ClickAwayListener,
  Container,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Modal from "@mui/material/Modal";
import { Grid, Button } from "@mui/material";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import Swal from "sweetalert2";
import Loader from "../../images/loader/Render.gif";
import { format } from "date-fns";
import secureLocalStorage from "react-secure-storage";
import Search from "../../images/undraw/undraw_web_search_re_efla.svg";
import Commission from "../../components/Commission";
import AirlinesNameSlider from "../../components/AirlinesNameSlider/AirlinesNameSlider";
import RoundSingleFlight from "../../components/SingleFlight/RoundSingleFlight";
import RoundFilterDrawer from "../../components/RoundFilterDrawer";
import RoundWayFilter from "../../components/RoundWayFilter";
import styled from "@emotion/styled";
import FlightSearchBox from "../../components/FlightSearchBox/FlightSearchBox";
import SessionTimer from "../../components/Shared/SessionTimer/SessionTimer";
import RoundPreloader from "../../components/Preloader/RoundPreloader";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";

const HtmlTooltip = styled(({ className, ...propss }) => (
  <Tooltip {...propss} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#dc143c",
    maxWidth: 220,
    fontSize: "20px",
    borderRadius: "8px 0px 8px 0px",
  },
}));

const RoundSearchResult = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const requiredSearchData =
    location.state !== null
      ? location.state
      : secureLocalStorage.getItem("search-data");

  const {
    fromSendData,
    toSendData,
    departureDate,
    returningDate,
    adultCount,
    childCount,
    infant,
    tripType,
    faddress,
    toAddress,
    fromSearchText,
    toSearchText,
    className,
  } = requiredSearchData;

  //fetch data form localStorage
  const commissionData = secureLocalStorage.getItem("commissionData");
  //all states that i have to send to modify search
  const [type, setType] = React.useState("flight");
  const [value, setValue] = React.useState(tripType);
  const [roundWayFromSearchText, setRoundWayFromSearchText] =
    useState(fromSearchText);
  const [roundWayToSearchText, setRoundWayToSearchText] =
    useState(toSearchText);
  const now = useRef(new Date(departureDate));
  const returnNow = useRef(new Date(returningDate));
  const [from, setFrom] = useState(now.current);
  const [to, setTo] = useState(returnNow.current);
  const [fromSearchDate, setFromSearchDate] = useState(departureDate);
  const [toSearchDate, setToSearchDate] = useState(returningDate);

  const [roundWayFaddress, setRoundWayFaddress] = useState(faddress);
  const [roundWayToAddress, setRoundWayToAddress] = useState(toAddress);
  const [roundWayFromSendData, setRoundWayFromSendData] =
    useState(fromSendData);
  const [roundWayToSendData, setRoundWayToSendData] = useState(toSendData);
  const [roundWayAdultCount, setRoundWayAdultCount] = useState(adultCount);
  const [roundWayChildCount, setRoundWayChildCount] = useState(childCount);
  const [roundWayInfant, setRoundWayInfant] = useState(infant);
  const [result, setResult] = useState(adultCount + childCount + infant);
  const [roundWayClassName, setRoundWayClassName] = useState(className);
  const [isPrevClicked, setIsPrevCliked] = useState(false);
  const [isNextClicked, setIsNextCliked] = useState(false);
  //end

  //CM Box States
  const [openCm, setOpenCm] = useState(false);
  const [agentFarePrice, setAgentFarePrice] = useState(true);
  const [commisionFarePrice, setCommisionFarePrice] = useState(true);
  const [defaultCommissionRate, setDefaultCommissionRate] = useState(true);
  const [defaultCommissionRateAmount, setDefaultCommissionRateAmount] =
    useState(0);

  const [customerFare, setCustomerFare] = useState(true);

  //end
  //todo:all flight and nxt and previous day data states
  const [datas, setDatas] = useState([]);
  const [data2, setData2] = useState([]);

  // const [filteredData, setFilteredData] = useState([]);
  const [noData, setNoData] = useState("No Data");
  // filter states
  const [isChange, setIsChange] = useState(false);

  const [modifyOpen, setModifyOpen] = useState(false);
  const modifyHandleOpen = () => setModifyOpen(true);
  const modifyHandleClose = () => setModifyOpen(false);

  //todo: state for retrigger useEffect
  const [changeState, setChangeState] = useState(null);
  //todo: End for retrigger useEffect

  //todo: state for from date change
  const [changeFrom, setChangeFrom] = useState(false);
  //todo: End state for from date change

  // Sets the state of the const for the given page and state.
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(1);

  // todo: previous day and next day date variables
  let tomorrowDepartureDate = new Date(fromSearchDate);
  let tomorrowReturnDate = new Date(toSearchDate);
  tomorrowDepartureDate.setDate(tomorrowDepartureDate.getDate() + 1);
  tomorrowReturnDate.setDate(tomorrowReturnDate.getDate() + 1);
  let yesterdayDepartureDate = new Date(fromSearchDate);
  let yesterdayReturnDate = new Date(toSearchDate);
  yesterdayDepartureDate.setDate(yesterdayDepartureDate.getDate() - 1);
  yesterdayReturnDate.setDate(yesterdayReturnDate.getDate() - 1);

  let size = 30;
  // Handle a page change.
  const handlePageChange = (event, value) => {
    setPage(value);
    setData2(datas?.slice((value - 1) * size, value * size));
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  // get the target element to toggle
  const handleClickAway = () => {};

  // Handle the previous date change
  const handlePreviousDateChange = () => {
    setIsPrevCliked(true);
    setFromSearchDate(yesterdayDepartureDate);
    setToSearchDate(yesterdayReturnDate);
    setIsLoaded(false);
    let url = `https://api.flyfarint.net/v.1.0.0/AirSearch/return.php?tripType=${tripType}&journeyfrom=${fromSendData?.replace(
      /\s+/g,
      ""
    )}&journeyto=${toSendData}&departuredate=${new Date(
      yesterdayDepartureDate
    ).toLocaleDateString("sv")}&returndate=${new Date(
      yesterdayReturnDate
    ).toLocaleDateString(
      "sv"
    )}&adult=${adultCount}&child=${childCount}&infant=${infant}`;
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.length !== 0) {
          const uniqueData = data;
          const count = uniqueData.length;
          const pageNumber = Math.ceil(count / size);
          setPageCount(pageNumber);
          setDatas(uniqueData);
          setData2(uniqueData);
          setIsLoaded(true);
        } else {
          Swal.fire({
            imageUrl: Search,
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Custom image",
            title: "No Flights Found",
            confirmButtonText: "Search Again...",
            confirmButtonColor: "#dc143c",
          }).then(function () {
            navigate("/");
          });
        }
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          imageUrl: Search,
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: "Custom image",
          title: "No Flights Found",
          confirmButtonText: "Search Again...",
          confirmButtonColor: "#dc143c",
        }).then(function () {
          navigate("/");
        });
      });
  };

  // Handles the next date change.
  const handleNextDateChange = () => {
    setIsLoaded(false);
    setIsNextCliked(true);
    setFromSearchDate(tomorrowDepartureDate);
    setToSearchDate(tomorrowReturnDate);
    let url = `https://api.flyfarint.net/v.1.0.0/AirSearch/return.php?tripType=${tripType}&journeyfrom=${fromSendData?.replace(
      /\s+/g,
      ""
    )}&journeyto=${toSendData}&departuredate=${new Date(
      tomorrowDepartureDate
    ).toLocaleDateString("sv")}&returndate=${new Date(
      tomorrowReturnDate
    ).toLocaleDateString(
      "sv"
    )}&adult=${adultCount}&child=${childCount}&infant=${infant}`;
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.length !== 0) {
          const uniqueData = data;
          const count = uniqueData.length;
          const pageNumber = Math.ceil(count / size);
          setPageCount(pageNumber);
          setDatas(uniqueData);
          setData2(uniqueData);
          setIsLoaded(true);
        } else {
          Swal.fire({
            imageUrl: Search,
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Custom image",
            title: "No Flights Found",
            confirmButtonText: "Search Again...",
            confirmButtonColor: "#dc143c",
          }).then(function () {
            navigate("/");
          });
        }
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          imageUrl: Search,
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: "Custom image",
          title: "No Flights Found",
          confirmButtonText: "Search Again...",
          confirmButtonColor: "#dc143c",
        }).then(function () {
          navigate("/");
        });
      });
  };

  const modalStyle = {
    position: "absolute",
    top: "30%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { lg: "80vw", md: "80vw", sm: "90vw", xs: "90vw" },
    height: "fit-content",
    padding: "20px",
    background: "#fff",
    borderRadius: "10px",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  };

  const [isLoaded, setIsLoaded] = useState(false);

  //todo All Flight Data for Today
  useEffect(() => {
    modifyHandleClose();
    setIsPrevCliked(false);
    setIsNextCliked(false);
    setIsLoaded(false);
    let subscription = true;
    let url = `https://api.flyfarint.net/v.1.0.0/AirSearch/return.php?tripType=${tripType}&journeyfrom=${fromSendData?.replace(
      /\s+/g,
      ""
    )}&journeyto=${toSendData}&departuredate=${new Date(
      departureDate
    ).toLocaleDateString("sv")}&returndate=${new Date(
      returningDate
    ).toLocaleDateString(
      "sv"
    )}&adult=${adultCount}&child=${childCount}&infant=${infant}`;
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (subscription) {
          if (data.length !== 0) {
            const uniqueData = data;
            const count = uniqueData.length;
            const pageNumber = Math.ceil(count / size);
            setPageCount(pageNumber);
            setDatas(uniqueData);
            setData2(uniqueData);
            setIsLoaded(true);
          } else {
            Swal.fire({
              imageUrl: Search,
              imageWidth: 400,
              imageHeight: 200,
              imageAlt: "Custom image",
              title: "No Flights Found",
              confirmButtonText: "Search Again...",
              confirmButtonColor: "#dc143c",
            }).then(function () {
              navigate("/");
            });
          }
        }
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          imageUrl: Search,
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: "Custom image",
          title: "No Flights Found",
          confirmButtonText: "Search Again...",
          confirmButtonColor: "#dc143c",
        }).then(function () {
          navigate("/");
        });
      });
    return () => {
      subscription = false;
    };
  }, [
    changeState,
    departureDate,
    returningDate,
    fromSendData,
    toSendData,
    adultCount,
    childCount,
    infant,
    isChange,
  ]);

  if (!isLoaded) {
    return (
      <RoundPreloader
        departureDate={departureDate}
        returningDate={returningDate}
        isNextClicked={isNextClicked}
        isPrevClicked={isPrevClicked}
        fromSearchDate={fromSearchDate}
        toSearchDate={toSearchDate}
        fromSendData={fromSendData}
        toSendData={toSendData}
        className={className}
        adultCount={adultCount}
        childCount={childCount}
        infant={infant}
      />
    );
  }

  return (
    <Box>
      <Container className="flightSearchParent">
        <Grid container justifyContent="space-between">
          {/* //todo: filter*/}
          <Grid
            lg={2.2}
            sx={{
              display: { xs: "none", sm: "none", md: "none", lg: "block" },
            }}
          >
            <RoundWayFilter
              departureDate={departureDate}
              returningDate={returningDate}
              setFrom={setFrom}
              setTo={setTo}
              data={datas}
              setData={setDatas}
              filteredData={data2}
              setfilteredData={setData2}
              noData={noData}
              setNoData={setNoData}
            />
          </Grid>
          <Grid container item rowSpacing={2} xs={12} sm={12} md={12} lg={9.6}>
            {/* //todo: Flight Search Result section */}
            <Grid
              mt={4}
              className="modify-search modify-search-round"
              container
              spacing={2}
              display="flex"
              alignItems="center"
              style={{ paddingLeft: "18px" }}
              position="static"
            >
              <Grid className="modify-search-info" container md={6}>
                <Box
                  style={{
                    width: "100%",
                    height: "fit-content",
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <FlightTakeoffIcon
                    style={{
                      width: "25px",
                      height: "25px",
                      padding: "5px",
                      backgroundColor: "var(--primary-color)",
                      color: "var(--white)",
                      borderRadius: "100%",
                    }}
                  />
                  <Typography
                    style={{
                      color: "var(--secondary-color)",
                      fontSize: "24px",
                    }}
                  >
                    Flight Search Result
                  </Typography>
                </Box>
                <h6>
                  {fromSearchText.trim()} <span>|</span> {toSearchText.trim()}(
                  {className})
                </h6>
                <h5>
                  {/* {tripType === "oneway"
                    ? "One Way"
                    : tripType === "return"
                    ? "Return"
                    : "Multi City"}{" "}
                  Flight<span> | </span>{" "} */}

                  {format(
                    new Date(
                      isNextClicked || isPrevClicked
                        ? fromSearchDate
                        : departureDate
                    ),
                    "dd MMM yyyy"
                  )}
                  <span> | </span>
                  {format(
                    new Date(
                      isNextClicked || isPrevClicked
                        ? toSearchDate
                        : returningDate
                    ),
                    "dd MMM yyyy"
                  )}
                  <span> | </span>
                  {adultCount > 0 && `Adult(${adultCount})`}
                  {childCount > 0 && `Children(${childCount})`}
                  {infant > 0 && `Infant(${infant})`}
                </h5>
              </Grid>
              <Grid
                container
                columnGap={0.5}
                rowGap={1}
                md={6}
                justifyContent={"flex-end"}
              >
                {/* //todo:session timer */}
                <Grid item xs={2} sm={1} md={2} lg={2}>
                  <Tooltip title="Session Time">
                    <Button
                      style={{
                        border: "1.2px solid var(--secondary-color)",
                        color: "var(--secondary-color)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-around",
                      }}
                    >
                      {/* <SessionTimer setChangeState={setChangeState} /> */}
                    </Button>
                  </Tooltip>
                </Grid>
                {/* //todo:previous day */}
                {/* <Grid item xs={4} sm={2} md={2.5} lg={2.5}>
                  <HtmlTooltip
                    title={`${format(
                      new Date(yesterdayDepartureDate),
                      "dd MMM"
                    )}-
                            ${format(new Date(yesterdayReturnDate), "dd MMM")}`}
                  >
                    <Button
                      disabled={
                        new Date(from).toDateString() ===
                        new Date().toDateString()
                          ? true
                          : false
                      }
                      style={{
                        backgroundColor: "#003566",
                        color: "#FFF",
                        fontSize: "10px",
                      }}
                      onClick={handlePreviousDateChange}
                    >
                      Previous Day
                    </Button>
                  </HtmlTooltip>
                </Grid> */}
                {/* //todo:next day */}
                {/* <Grid item xs={3} sm={1.5} md={2.5} lg={2.5}>
                  <HtmlTooltip
                    title={`${format(
                      new Date(tomorrowDepartureDate),
                      "dd MMM"
                    )}-
                            ${format(new Date(tomorrowReturnDate), "dd MMM")}`}
                  >
                    <Button
                      style={{
                        backgroundColor: "#DC143C",
                        color: "#FFF",
                        fontSize: "10px",
                      }}
                      onClick={handleNextDateChange}
                    >
                      Next Day
                    </Button>
                  </HtmlTooltip>
                </Grid> */}
                {/*  //todo:cm button popup work here */}
                {/* <Grid
                  item
                  xs={2}
                  sm={1}
                  md={1}
                  lg={1}
                  className="cm-parent-box"
                >
                  <Commission
                    openCm={openCm}
                    setOpenCm={setOpenCm}
                    agentFarePrice={agentFarePrice}
                    setAgentFarePrice={setAgentFarePrice}
                    commisionFarePrice={commisionFarePrice}
                    setCommisionFarePrice={setCommisionFarePrice}
                    defaultCommissionRate={defaultCommissionRate}
                    setDefaultCommissionRate={setDefaultCommissionRate}
                    defaultCommissionRateAmount={defaultCommissionRateAmount}
                    setDefaultCommissionRateAmount={
                      setDefaultCommissionRateAmount
                    }
                    customerFare={customerFare}
                    setCustomerFare={setCustomerFare}
                  />
                </Grid> */}
                {/*  //todo:modify search  */}
                <Grid item xs={5.8} sm={2} md={3} lg={4}>
                  <Button
                    onClick={modifyHandleOpen}
                    style={{
                      backgroundColor: "var(--primary-color)",
                      color: "var(--white)",
                    }}
                  >
                    Modify Search
                  </Button>

                  <Modal open={modifyOpen} onClose={modifyHandleClose}>
                    <Container>
                      <Box sx={modalStyle}>
                        <FlightSearchBox
                          type={type}
                          setType={setType}
                          value={value}
                          setValue={setValue}
                          fromSearchText={roundWayFromSearchText}
                          setFromSearchText={setRoundWayFromSearchText}
                          toSearchText={roundWayToSearchText}
                          setToSearchText={setRoundWayToSearchText}
                          from={from}
                          setFrom={setFrom}
                          to={to}
                          setTo={setTo}
                          faddress={roundWayFaddress}
                          setfaddress={setRoundWayFaddress}
                          toAddress={roundWayToAddress}
                          setToAddress={setRoundWayToAddress}
                          fromSendData={roundWayFromSendData}
                          setFromSendData={setRoundWayFromSendData}
                          toSendData={roundWayToSendData}
                          setToSendData={setRoundWayToSendData}
                          adultCount={roundWayAdultCount}
                          setAdultCount={setRoundWayAdultCount}
                          childCount={roundWayChildCount}
                          setChildCount={setRoundWayChildCount}
                          infant={roundWayInfant}
                          setInfant={setRoundWayInfant}
                          result={result}
                          setResult={setResult}
                          className={roundWayClassName}
                          setClassName={setRoundWayClassName}
                          changeState={changeState}
                          setChangeState={setChangeState}
                          changeFrom={changeFrom}
                          setChangeFrom={setChangeFrom}
                        />
                      </Box>
                    </Container>
                  </Modal>
                </Grid>
                {/* //todo: filter drawer for mobile */}
                {/* <Grid
                  item
                  xs={5.8}
                  sm={2}
                  md={3}
                  lg={3}
                  sx={{
                    display: {
                      xs: "block",
                      sm: "block",
                      md: "block",
                      lg: "none",
                    },
                  }}
                >
                  <Box>
                    <RoundFilterDrawer
                      departureDate={departureDate}
                      returningDate={returningDate}
                      setFrom={setFrom}
                      setTo={setTo}
                      data={datas}
                      setData={setDatas}
                      filteredData={data2}
                      setfilteredData={setData2}
                      noData={noData}
                      setNoData={setNoData}
                    />
                  </Box>
                </Grid> */}
              </Grid>
            </Grid>
            {/* //todo: AirLine Slider */}
            <Grid
              mt={2}
              width="50%"
              maxHeight={"100px"}
              position="static"
              xs={12}
              sm={12}
              md={12}
              lg={12}
            >
              <AirlinesNameSlider
                data={datas}
                setData={setDatas}
                filteredData={data2}
                setfilteredData={setData2}
              />
            </Grid>
            {/* //todo:Search Result Section */}
            <Grid item xs={12} sm={12} md={12} lg={12}>
              {data2.length === 0 ? (
                <Typography fontSize={"50px"} textAlign="center">
                  {noData}
                </Typography>
              ) : (
                <>
                  {data2?.slice(0, size)?.map((roundTrip, index) => {
                    return (
                      <RoundSingleFlight
                        key={index}
                        roundData={roundTrip}
                        adultCount={adultCount}
                        childCount={childCount}
                        infant={infant}
                        fromSendData={fromSendData}
                        toSendData={toSendData}
                        tripType={tripType}
                        departureDate={departureDate}
                        returingDate={returningDate}
                        faddress={faddress}
                        toAddress={toAddress}
                        agentFarePrice={agentFarePrice}
                        setAgentFarePrice={setAgentFarePrice}
                        commisionFarePrice={commisionFarePrice}
                        setCommisionFarePrice={setCommisionFarePrice}
                        customerFare={customerFare}
                        setCustomerFare={setCustomerFare}
                      />
                    );
                  })}
                </>
              )}
            </Grid>
            {/* //todo: Pagination section */}
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Box
                sx={{
                  width: "100%",
                  my: 3,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Stack spacing={2}>
                  <Pagination
                    count={pageCount}
                    onChange={handlePageChange}
                    shape="rounded"
                  />
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default RoundSearchResult;
