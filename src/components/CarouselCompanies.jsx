import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'
import { Source } from '@mui/icons-material';

// import { ProductService } from './service/ProductService';
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css";

export default function CarouselCompanies() {
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
            description: "Microsoft",
            image: "../images/microsoft.jpg"
        },
        {

            description: "Matrix",
            image: "../images/מטריקס.png"
        },
        {

            description: "Aplied",
            image: "../images/apllied.jpg"
        },

    ]
    const responsiveOptions = [
                {
                    breakpoint: '1199px',
                    numVisible: 1,
                    numScroll: 1
                },
                {
                    breakpoint: '991px',
                    numVisible: 2,
                    numScroll: 1
                },
                {
                    breakpoint: '767px',
                    numVisible: 1,
                    numScroll: 1
                }
            ];
            const productTemplate = (product) => {
                        return (
                            <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
                                <div className="mb-3">
                                    <img src={`https://primefaces.org/cdn/primereact/images/product/
                                    `} alt={product.name} className="w-6 shadow-2" />
                                </div>
                                <div>
                                    <h4 className="mb-1">{product.description}</h4>
                                    {/* <h6 className="mt-0 mb-3">${product.price}</h6>
                                    <Tag value={product.inventoryStatus} ></Tag> */}
                                    {/* <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
                                        <Button icon="pi pi-search" className="p-button p-button-rounded" />
                                        <Button icon="pi pi-star-fill" className="p-button-success p-button-rounded" />
                                    </div> */}
                                </div>
                            </div>
                        );
                    };
                
                    return (
                        <div className="card">
                            <Carousel value={conpanies} numVisible={3} numScroll={1} responsiveOptions={responsiveOptions} className="custom-carousel" circular
                            autoplayInterval={3000} itemTemplate={productTemplate} />
                        </div>
                    )
                }
//     function Item(company) {

//         return (
//             // <h1 style={{backgroundColor:'red'}}>hello</h1>
//             // <img style={{width:"100px"}} src={props.item.image}></img>

//             <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
//                 <div className="mb-3">
//                     <img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2CQDBSm5MNncKaq8SQQEal_Z51qlQ93bvkQ&usqp=CAU`} className="w-6 shadow-2" />
//                 </div>
//                 <div>
//                     <h4 className="mb-1">{company.description}</h4>
//                     <div className="mt-5 flex flex-wrap gap-2 justify-content-center">

//                     </div>
//                 </div>

//                 {/* <Paper className="carousel-image" sx={{flexFlow:"column" ,backgroundColor:'green',backgroundImage:`url(${props.image})`, backgroundSize:"100% 100%" }}>
//                 <p style={{height:"100px"}}>{props.description}</p>
//             </Paper> */}
//             </div>
//         );
//     };


//     return (
//         <Carousel value={conpanies} numVisible={3} numScroll={1} itemTemplate={Item} />
//         /* {
//             conpanies.map( (item, i) => <Item key={i} item={item} sx={{height:"100%"}}/> )
//         } */

//     )
// }

// import React, { useState, useEffect } from 'react';
// import { Button } from 'primereact/button';
// import { Carousel } from 'primereact/carousel';
// import { Tag } from 'primereact/tag';
// import { ProductService } from './service/ProductService';

// export default function CircularDemo() {
//     //const [products, setProducts] = useState([]);
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
//         {
//             breakpoint: '1199px',
//             numVisible: 1,
//             numScroll: 1
//         },
//         {
//             breakpoint: '991px',
//             numVisible: 2,
//             numScroll: 1
//         },
//         {
//             breakpoint: '767px',
//             numVisible: 1,
//             numScroll: 1
//         }
//     ];

    

//     // useEffect(() => {
//     //     ProductService.getProductsSmall().then((data) => setProducts(data.slice(0, 9)));
//     // }, []);

//     const productTemplate = (product) => {
//         return (
//             <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
//                 <div className="mb-3">
//                     <img src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`} alt={product.name} className="w-6 shadow-2" />
//                 </div>
//                 <div>
//                     <h4 className="mb-1">{product.description}</h4>
//                     {/* <h6 className="mt-0 mb-3">${product.price}</h6>
//                     <Tag value={product.inventoryStatus} ></Tag> */}
//                     {/* <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
//                         <Button icon="pi pi-search" className="p-button p-button-rounded" />
//                         <Button icon="pi pi-star-fill" className="p-button-success p-button-rounded" />
//                     </div> */}
//                 </div>
//             </div>
//         );
//     };

//     return (
//         <div className="card">
//             <Carousel value={conpanies} numVisible={3} numScroll={1} responsiveOptions={responsiveOptions} className="custom-carousel" circular
//             autoplayInterval={3000} itemTemplate={productTemplate} />
//         </div>
//     )
// }