import React from 'react';
import Carousel from 'react-material-ui-carousel'

const CarouselCompanies = (props) => {
  var companies = [
    {

      description: "Intel",
      image: "../images/intel.png"
    },
    {

      description: "Qmarkets",
      image: "../images/Qmarkets-logo.png"
    },
    {
      description: "Microsoft",
      image: "../images/microsoft.jpg"
    },
    {

      description: "Matrix",
      image: "../images/matrix.png"
    },
    {

      description: "Aplied",
      image: "../images/apllied.jpg"
    },
    {

      description: "Triple Whale",
      image: "../images/triple-whale.jpg"
    }, {

      description: "Artlist",
      image: "../images/Artlist_Logo.png"
    }, {

      description: "Rokar",
      image: "../images/rokar.jpg"
    },
    {

      description: "Vast_logo.png",
      image: "../images/Vast_logo.png"
    },
    {

      description: "Qualitest.jpg",
      image: "../images/Qualitest.jpg"
    },
    {

      description: "Check_Point_logo.png",
      image: "../images/Check_Point_logo.png"
    },
    {

      description: "Fiverr.png",
      image: "../images/Fiverr.png"
    },
  ]
  const sliderItems = companies.length > 4 ? 4 : companies.length;
  const items = [];

  for (let i = 0; i < companies.length; i += sliderItems) {
    if (i % sliderItems === 0) {
      items.push(
        companies.slice(i, i + sliderItems).map((da) => {
          console.log(da, "Ban clicked");
          return <img className='carusel_img' src={da.image} alt={da.description} style={{ "width": "25%", "height": "200px", "padding": "45px" }} />;
        })
      );
    }
  }
  return (
    <Carousel interval={4000}>
      {items}
    </Carousel>
  );
};

export default CarouselCompanies;
