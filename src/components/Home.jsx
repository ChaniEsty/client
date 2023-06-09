import React from "react";
import SearchDetails from "./SearchDetails";
import Carousel from 'react-material-ui-carousel'
import {Grid, Card,Typography} from "@mui/material";
import CarouselCompanies from "./CarouselCompanies";
const Home = () => {

  const getCompanies = () => {
  const sliderCompanies = 3;
  const items = [];
  const companies = [" intel ", " rokar ", " microsoft ", " applied ", " matrix "];
  for (let i = 0; i < companies.length; i += sliderCompanies) {
    if (i % sliderCompanies === 0) {
      items.push(
        <Card sx={{backgroundColor:"aqua"}}raised className="Banner" key={i.toString()}>
          <Grid container spacing={0} className="BannerGrid">
            {companies.slice(i, i + sliderCompanies).map((da) => {
              return <><h2 key={i}>{da}</h2><br></br></>;
            })}
          </Grid>
        </Card>
      );
    }
  }
return items;}
  return (<> <Typography sx={{textAlign:"center",marginTop:"10%"}} variant="h5">בואו למצוא את התפקיד הבא שלכם!
    </Typography><SearchDetails></SearchDetails>
    {/* <Carousel sx={{width:"50%",marginRight:"25%", marginTop:"2%"}} animation="slide" cycleNavigation timeout={300}>{getCompanies()}</Carousel> */}
    <CarouselCompanies></CarouselCompanies></>
  );
};

export default Home;
