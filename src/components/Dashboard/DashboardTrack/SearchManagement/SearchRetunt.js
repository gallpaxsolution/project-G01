import { Box, Tooltip, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CircularProgress from "@mui/material/CircularProgress";

const SearchRetunt = () => {
  const [returnData, setReturnData] = useState([]);
  const [isLoading, setIsloding] = useState(false);

  useEffect(() => {
    setIsloding(false);
    fetch("https://api.flyfarint.net/v.1.0.0/Admin/Stats/Dashboard.php")
      .then((res) => res.json())
      .then((data) => {
        data?.allsearchlist?.map((item, index) => (item.serial = index + 1));

        const oneWayDataFilter = data?.allsearchlist?.filter((data) => {
          return data?.searchtype === "return";
        });
        setReturnData(oneWayDataFilter);
        setIsloding(true);
      });
  }, []);

  return (
    <Box className="DestinaTionWise">
      <table>
        <tr>
          <th>Sl no</th>
          <th>Company Name</th>
          <th>Route</th>
          <th>Contact</th>
        </tr>

        {isLoading === true ? (
          <>
            {returnData.length !== 0 ? (
              <>
                {returnData?.map((data) => (
                  <tr>
                    <td>{data?.serial}</td>
                    <td>
                      <Tooltip
                        title={data?.company}
                        style={{ width: "50px", margin: "auto" }}
                      >
                        <span>
                          {data?.company?.slice(0, 10)}
                          ...
                        </span>
                      </Tooltip>
                    </td>

                    <td>{data?.Routes}</td>
                    <td style={{ display: "flex", justifyContent: "center" }}>
                      <a href={`tel:+${data?.phone}`}>
                        <PhoneIcon
                          style={{
                            color: "#003566",
                            cursor: "pointer",
                            fontSize: "20px",
                            marginRight: "5px",
                          }}
                        ></PhoneIcon>
                      </a>

                      <a href={`https://wa.me/+${data?.phone}`} target="_blank">
                        <WhatsAppIcon
                          style={{
                            color: "green",
                            cursor: "pointer",
                            fontSize: "20px",
                          }}
                        />
                      </a>
                    </td>
                  </tr>
                ))}
              </>
            ) : (
              <Typography
                style={{
                  textAlign: "center",
                  color: "#a7a7a7",
                  marginTop: "5px",
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Sorry data not available
              </Typography>
            )}
          </>
        ) : (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "38vh",
            }}
          >
            <CircularProgress />
          </Box>
        )}
      </table>

      <Box
        sx={{
          width: "100%",
          my: 3,
          display: "flex",
          justifyContent: "center",
        }}
      ></Box>
    </Box>
  );
};

export default SearchRetunt;
