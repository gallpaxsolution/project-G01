import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";

const useAuthentication = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const loginUser = (loginData, location, navigate) => {
    // setIsLoading(false);
    // secureLocalStorage.setItem("state", loginData);
    // let body = JSON.stringify({
    //   email: loginData.email,
    //   password: loginData.password,
    // });
    // let url = `https://api.flyfarint.com/v.1.0.0/Auth/login.php`;
    // fetch(url, {
    //   method: "POST",
    //   headers: {
    //     Accept: "*/*",
    //     "Content-Type": "application/json",
    //   },
    //   body: body,
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setIsLoading(true);
    //     if (data.message === "success") {
    //       secureLocalStorage.setItem("user-info", data);
    //       const destination = location?.state?.from || "/";
    //       navigate(destination);
    //     } else {
    //       secureLocalStorage.removeItem("user-info");
    //       console.log(data.message);
    //       setError(data.message);
    //     }
    //   })
    //   .finally(() => setIsLoading(true));
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const state = secureLocalStorage.getItem("state");
  //     let url = `https://api.flyfarint.com/v.1.0.0/Auth/login.php`;
  //     if (state !== null) {
  //       fetch(url, {
  //         method: "POST",
  //         headers: {
  //           Accept: "*/*",
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           email: state.email,
  //           password: state.password,
  //         }),
  //       })
  //         .then((res) => res.json())
  //         .then((data) => {
  //           secureLocalStorage.setItem("user-info", data);
  //         });
  //     }
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  const logout = () => {
    secureLocalStorage.removeItem("user-info");
    secureLocalStorage.removeItem("commissionData");
    secureLocalStorage.removeItem("state");
    navigate("/");
  };

  return {
    loginUser,
    logout,
    isLoading,
    error,
  };
};

export default useAuthentication;
