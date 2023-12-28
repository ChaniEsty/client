// import React from 'react';
// import Carousel from 'react-material-ui-carousel'
// import { Paper } from '@mui/material'
// import { Source } from '@mui/icons-material';

// // import { ProductService } from './service/ProductService';
// //theme
// import "primereact/resources/themes/lara-light-indigo/theme.css";

// //core
// import "primereact/resources/primereact.min.css";

// //icons
// import "primeicons/primeicons.css";

// export default function CarouselCompanies() {
    
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
// import Slider from 'react-slick';
import { Tag } from 'primereact/tag';
// import './carousel.css'; // Import the CSS file for the carousel
//import { ProductService } from './service/ProductService';

export default function NumScrollDemo() {
    const [products, setProducts] = useState([]);
    var conpanies = [
        {
        
            description: "Intel",
            image: "../images/intel.png"
        },
        {

            description: "Rokar",
            image: "../images/rokar.jpg"
        },
                {
        
                    description: "Intel",
                    image: "../images/intel.png"
                },
                {
        
                    description: "Rokar",
                    image: "../images/rokar.jpg"
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
        
                    description: "Intel",
                    image: "../images/intel.png"
                },
                {
        
                    description: "Rokar",
                    image: "../images/rokar.jpg"
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
        
            ]
    const responsiveOptions = [
        {
            breakpoint: '1199px',
            numVisible: 5,
            numScroll: 1
        },
        {
            breakpoint: '991px',
            numVisible: 4,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 3,
            numScroll: 1
        }
    ];

    // const getSeverity = (product) => {
    //     switch (product.inventoryStatus) {
    //         case 'INSTOCK':
    //             return 'success';

    //         case 'LOWSTOCK':
    //             return 'warning';

    //         case 'OUTOFSTOCK':
    //             return 'danger';

    //         default:
    //             return null;
    //     }
    // };

    // useEffect(() => {
    //     ProductService.getProductsSmall().then((data) => setProducts(data.slice(0, 9)));
    // }, []);

    const productTemplate = (product) => {
        return (
            <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
                <div className="mb-3">
                    <img style={{width:'100px',height:'50px'}}src={`${product.image}`} alt={product.description} className="w-6 shadow-2" />
                </div>
                <div>
                    {/* <h4 className="mb-1">{product.description}</h4> */}
                    {/* <h6 className="mt-0 mb-3">${product.price}</h6>
                    <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag> */}
                    {/* <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
                        <Button icon="pi pi-search" className="p-button p-button-rounded" />
                        <Button icon="pi pi-star-fill" className="p-button-success p-button-rounded" />
                    </div> */}
                </div>
            </div>
        );
    };
//     const Carousel = () => {
//         // Configuration options for the carousel
//         const settings = {
//           dots: true,
//           infinite: true,
//           speed: 500,
//           slidesToShow: 3,
//           slidesToScroll: 3
//         };
        
//   return (
//     <div className="carousel-container">
//     <Slider {...settings}>
//       <div>
//         <img src="../images/intel.png" alt="Image 1" className="carousel-image" />
//       </div>
//       <div>
//         <img src="../images/rokar.jpg" alt="Image 2" className="carousel-image" />
//       </div>
//       <div>
//         <img src="../images/rokar.jpg" alt="Image 3" className="carousel-image" />
//       </div>
//       {/* Add more image divs as needed */}
//     </Slider>
//     </div>
//   );
// };
// export default Carousel;
    return (
        <div className="card">
            <Carousel value={conpanies}  numVisible={6} numScroll={6} className="custom-carousel" responsiveOptions={responsiveOptions}  itemTemplate={productTemplate} />
        </div>
    )
}
        
//     var conpanies = [
//         {

//             description: "Intel",
//             image: "../images/intel.png"
//         },
//         {

//             description: "Rokar",
//             image: "../images/rokar.jpg"
//         },
//         {
//             description: "Microsoft",
//             image: "../images/microsoft.jpg"
//         },
//         {

//             description: "Matrix",
//             image: "../images/מטריקס.png"
//         },
//         {

//             description: "Aplied",
//             image: "../images/apllied.jpg"
//         },

//     ]
//     const responsiveOptions = [
//                 {
//                     breakpoint: '1199px',
//                     numVisible: 1,
//                     numScroll: 1
//                 },
//                 {
//                     breakpoint: '991px',
//                     numVisible: 2,
//                     numScroll: 1
//                 },
//                 {
//                     breakpoint: '767px',
//                     numVisible: 1,
//                     numScroll: 1
//                 }
//             ];
//             const productTemplate = (product) => {
//                         return (
//                             <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
//                                 <div className="mb-3">
//                                     <img src={product.image} alt={product.name} className="w-6 shadow-2" />
//                                 </div>
//                                 <div>
//                                     <h4 className="mb-1">{product.description}</h4>
//                                     {/* <h6 className="mt-0 mb-3">${product.price}</h6>
//                                     <Tag value={product.inventoryStatus} ></Tag> */}
//                                     {/* <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
//                                         <Button icon="pi pi-search" className="p-button p-button-rounded" />
//                                         <Button icon="pi pi-star-fill" className="p-button-success p-button-rounded" />
//                                     </div> */}
//                                 </div>
//                             </div>
//                         );
//                     };
                
//                     return (
//                         <div className="card">
//                             <Carousel  sx={{    backgroundColor: "crimson", height: "80px"}}value={conpanies} numVisible={3} numScroll={1} responsiveOptions={responsiveOptions} className="custom-carousel" circular
//                             autoplayInterval={3000} itemTemplate={productTemplate} />
//                         </div>
//                     )
//                 }
// //     function Item(company) {

// //         return (
// //             // <h1 style={{backgroundColor:'red'}}>hello</h1>
// //             // <img style={{width:"100px"}} src={props.item.image}></img>

// //             <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
// //                 <div className="mb-3">
// //                     <img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2CQDBSm5MNncKaq8SQQEal_Z51qlQ93bvkQ&usqp=CAU`} className="w-6 shadow-2" />
// //                 </div>
// //                 <div>
// //                     <h4 className="mb-1">{company.description}</h4>
// //                     <div className="mt-5 flex flex-wrap gap-2 justify-content-center">

// //                     </div>
// //                 </div>

// //                 {/* <Paper className="carousel-image" sx={{flexFlow:"column" ,backgroundColor:'green',backgroundImage:`url(${props.image})`, backgroundSize:"100% 100%" }}>
// //                 <p style={{height:"100px"}}>{props.description}</p>
// //             </Paper> */}
// //             </div>
// //         );
// //     };


// //     return (
// //         <Carousel value={conpanies} numVisible={3} numScroll={1} itemTemplate={Item} />
// //         /* {
// //             conpanies.map( (item, i) => <Item key={i} item={item} sx={{height:"100%"}}/> )
// //         } */

// //     )
// // }

// // import React, { useState, useEffect } from 'react';
// // import { Button } from 'primereact/button';
// // import { Carousel } from 'primereact/carousel';
// // import { Tag } from 'primereact/tag';
// // import { ProductService } from './service/ProductService';

// // export default function CircularDemo() {
// //     //const [products, setProducts] = useState([]);
// //     var conpanies = [
// //         {

// //             description: "Intel",
// //             image: "../images/intel.png"
// //         },
// //         {

// //             description: "Rokar",
// //             image: "../images/rokar.jpg"
// //         },
// //         {
// //             description: "Microsoft",
// //             image: "../images/microsoft.jpg"
// //         },
// //         {

// //             description: "Matrix",
// //             image: "../images/מטריקס.png"
// //         },
// //         {

// //             description: "Aplied",
// //             image: "../images/apllied.jpg"
// //         },

// //     ]
// //     const responsiveOptions = [
// //         {
// //             breakpoint: '1199px',
// //             numVisible: 1,
// //             numScroll: 1
// //         },
// //         {
// //             breakpoint: '991px',
// //             numVisible: 2,
// //             numScroll: 1
// //         },
// //         {
// //             breakpoint: '767px',
// //             numVisible: 1,
// //             numScroll: 1
// //         }
// //     ];

    

// //     // useEffect(() => {
// //     //     ProductService.getProductsSmall().then((data) => setProducts(data.slice(0, 9)));
// //     // }, []);

// //     const productTemplate = (product) => {
// //         return (
// //             <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
// //                 <div className="mb-3">
// //                     <img src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`} alt={product.name} className="w-6 shadow-2" />
// //                 </div>
// //                 <div>
// //                     <h4 className="mb-1">{product.description}</h4>
// //                     {/* <h6 className="mt-0 mb-3">${product.price}</h6>
// //                     <Tag value={product.inventoryStatus} ></Tag> */}
// //                     {/* <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
// //                         <Button icon="pi pi-search" className="p-button p-button-rounded" />
// //                         <Button icon="pi pi-star-fill" className="p-button-success p-button-rounded" />
// //                     </div> */}
// //                 </div>
// //             </div>
// //         );
// //     };

// //     return (
// //         <div className="card">
// //             <Carousel value={conpanies} numVisible={3} numScroll={1} responsiveOptions={responsiveOptions} className="custom-carousel" circular
// //             autoplayInterval={3000} itemTemplate={productTemplate} />
// //         </div>
// //     )
// // }
