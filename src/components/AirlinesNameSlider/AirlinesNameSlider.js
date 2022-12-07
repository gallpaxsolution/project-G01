import { Box, Button, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import commaNumber from "comma-number";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./AirlinesNameSlider.css";

const AirlinesNameSlider = ({
  filteredData,
  setfilteredData,
  data,
  setData,
}) => {
  const [carearFlight, setCarearFlight] = useState([]);
  let carearArray = [];
  data.map((name) => {
    carearArray.push(name.careerName, name.career);
    return carearArray;
  });

  let carear = [];

  carearArray.forEach((i) => (carear[i] = false));

  let totalCarear = Object.keys(carear).map((item) => ({
    name: item,
    imgname: item,
  }));

  useEffect(() => {
    setCarearFlight(totalCarear);
  }, []);

  const handleflightCarear = (name) => {
    let updatedflight = data;
    if (name) {
      updatedflight = updatedflight.filter((item) => item.careerName === name);
      setfilteredData(updatedflight);
    }
  };

  //shorten the whole Array
  let airlineNames = data.map((item) => {
    return {
      careerName: item.careerName,
      career: item.career,
      clientPrice: item.system !== "Galileo" ? item.clientPrice : item.price,
      isActive: false,
    };
  });
  //sort the Array form higher to lower price
  let sortedAirlineNames = airlineNames.sort(
    (prev, curr) => curr.clientPrice - prev.clientPrice
  );
  //find uniqueAirlineNames form the Array
  let uniqueAirlineNames = [
    ...new Map(
      sortedAirlineNames.map((item) => [item["career"], item])
    ).values(),
  ];

  //find how many duplicate airlines are in the array
  let airlineDuplicateCount = uniqueAirlineNames.reduce((acc, curr) => {
    const str = JSON.stringify(curr.career);
    acc[str] = (acc[str] || 0) + 1;
    return acc;
  }, {});

  // Returns a map of airline names to their unique airline names.
  uniqueAirlineNames.map((item) => {
    for (let count in airlineDuplicateCount) {
      if (item.career === JSON.parse(count)) {
        item.count = airlineDuplicateCount[count];
      }
    }
  });

  var settings = {
    dots: false,
    speed: 500,
    slidesToShow: uniqueAirlineNames.length < 6 ? uniqueAirlineNames.length : 6,
    slidesToScroll:
      uniqueAirlineNames.length < 1 ? uniqueAirlineNames.length : 1,
    arrows: true,
    prevArrow: <ArrowBackIosNewIcon />,
    nextArrow: <ArrowForwardIosIcon />,
    responsive: [
      {
        breakpoint: 1450,
        settings: {
          slidesToShow:
            uniqueAirlineNames.length < 3 ? uniqueAirlineNames.length : 3,
          slidesToScroll:
            uniqueAirlineNames.length < 1 ? uniqueAirlineNames.length : 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow:
            uniqueAirlineNames.length < 3 ? uniqueAirlineNames.length : 3,
          slidesToScroll:
            uniqueAirlineNames.length < 1 ? uniqueAirlineNames.length : 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow:
            uniqueAirlineNames.length < 2 ? uniqueAirlineNames.length : 2,
          slidesToScroll:
            uniqueAirlineNames.length < 1 ? uniqueAirlineNames.length : 1,
        },
      },
    ],
  };
  return (
    <div className="airlines-slider">
      <Slider {...settings}>
        {uniqueAirlineNames
          .sort((a, b) => a.clientPrice - b.clientPrice)
          .map((item, index) => {
            return (
              <Button key={index}>
                <Box
                  mx={1}
                  sx={{
                    borderRight: "2px solid var(--secondary-color)",
                    height: "40px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                  style={{
                    backgroundColor: "transparent",
                    color: "var(--secondary-color)",
                  }}
                  onClick={() => {
                    handleflightCarear(item.careerName);
                  }}
                >
                  <img
                    src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${item.career}.png`}
                    width="30px"
                    height="30px"
                    alt="flight-icon"
                  />
                  <Box>
                    <Typography
                      marginX={2}
                      fontSize="12px"
                      className="activecolor"
                      color={"crimson"}
                      fontWeight={500}
                    >
                      {item.career}
                    </Typography>
                    <Typography
                      marginX={2}
                      fontSize="12px"
                      className="activecolor"
                      color={"#003566"}
                      fontWeight={600}
                    >
                      {commaNumber(item.clientPrice)}
                    </Typography>
                  </Box>
                </Box>
              </Button>
            );
          })}
        {/* </div> */}
      </Slider>
    </div>
  );
};

export default AirlinesNameSlider;
