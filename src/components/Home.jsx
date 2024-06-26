import React from "react";
import SearchDetails from "./SearchDetails";
import { Typography } from "@mui/material";
// import CircularCarousel from "./CarouselCompanies";
import CarouselCompanies from "./CarouselCompanies";

const Home = () => {
  return (<> <Typography sx={{ textAlign: "center", marginTop: "5%", marginBottom: "5%" }} variant="h5">בואו למצוא את התפקיד הבא שלכם!
  </Typography><SearchDetails></SearchDetails>
    <div style={{ marginTop: "5%", marginBottom: "5%" }}><CarouselCompanies></CarouselCompanies></div></>
  );
};

export default Home;
