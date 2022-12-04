import { Box, Button, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import commaNumber from "comma-number";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
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
    prevArrow: <ArrowCircleLeftIcon />,
    nextArrow: <ArrowCircleRightIcon />,
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
                  boxShadow={"0px 0px 4px rgba(42, 164, 218, 0.35)"}
                  borderRadius="6px"
                  mx={1}
                  sx={{
                    height: "40px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                    transition: "all 0.5s ease-in-out",
                    "&:hover": {
                      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    },
                  }}
                  style={{
                    backgroundColor: item.isActive ? "#edccd3" : "#fff",
                    color: item.isActive ? "#fff" : "red",
                  }}
                  onClick={() => {
                    handleflightCarear(item.careerName);
                  }}
                >
                  <img
                    src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${item.career}.png`}
                    width="30px"
                    height="30px"
                    alt="flight icon"
                    style={{
                      borderLeft: "2px solid #003566",
                      borderRight: "2px solid #dc143c",
                      borderRadius: "100%",
                    }}
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
