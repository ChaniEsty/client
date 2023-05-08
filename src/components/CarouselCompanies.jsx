import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'
import { Source } from '@mui/icons-material';


export default function CarouselCompanies()
{
    var conpanies = [
        {
            
            description: "Intel",
            image:"../images/intel.png"
        },
        {
           
            description: "Rokar",
            image: "../images/rokar.jpg"
        },
        {
            
            description:"Microsoft",
            image: "../images/microsoft.jpg"
        },
        {
           
            description: "Matrix",
            image: "../images/מטריקס.png"
        },
        {
         
            description: "Aplied",
            image:"../images/apllied.jpg"
        },

    ]

    return (
        <Carousel sx={{marginTop:"5%"}} animation='slide' duration={2500}>
            {
                conpanies.map( (item, i) => <Item key={i} item={item} sx={{height:"100%"}}/> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
       // <img style={{width:"100px"}} src={props.item.image}></img>
        <Paper className="carousel-image" sx={{flexFlow:"column" ,backgroundImage:`url(${props.item.image})`, backgroundSize:"100% 100%" }}>
            <p style={{height:"100px"}}>{props.item.description}</p>
        </Paper>
    )
}