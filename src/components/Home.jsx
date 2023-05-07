import React from "react";
import SearchDetails from "./SearchDetails";
import Carousel from 'react-material-ui-carousel'
import { TextField ,Grid,Card,SubCategory} from "@mui/material";
import { Label } from "@mui/icons-material";
const Home = () => {
    // const getCompanies = () => {
        const sliderCompanies = 3;
        const items = [];
        const companies = ["intel", "rokar","microsoft","applied","matrix"];
        for (let i = 0; i < companies.length; i += sliderCompanies) {
          if (i % sliderCompanies === 0) {
            items.push(
              <Card raised className="Banner" key={i.toString()}>
                <Grid container spacing={0} className="BannerGrid">
                  {companies.slice(i, i + sliderCompanies).map((da, index) => {
                    return <h2 key={i}>{da} </h2>;
                  })}
                </Grid>
              </Card>
            );
          //}
        }}
        return (<> <SearchDetails></SearchDetails>
          <Carousel animation="slide"  cycleNavigation timeout={300}>
{items}          </Carousel></>
        );
      };
    //     const companies = ["intel", "rokar"];
    //     return companies;
    // }
    // return (
    //     <>
 {/* <Carousel
    show={3}/>
    + const {children, show} = props
    <div
-     className="carousel-content"
-     style={{ transform: `translateX(-${currentIndex * 100}%)` }}
+     className={`carousel-content show-${show}`}
+     style={{ transform: `translateX(-${currentIndex * (100 / show)}%)` }}
 >
     {children}
 </div> */}
//             <SearchDetails></SearchDetails>
//             <Carousel>
//                 <h3>intel</h3><h5>rokar</h5>
//             </Carousel>
//         </>);
// }


export default Home;
