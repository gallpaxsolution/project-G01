import { Container } from "@mui/material";
import React from "react";
import Dashboard from "../../components/Dashboard/Dashboard";
import Header from "../../components/Header/Header";

const Home = () => {
  return (
    <Container>
      <Header />
      <Dashboard />
    </Container>
  );
};

export default Home;
