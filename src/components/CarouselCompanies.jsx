import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';


export default function NumScrollDemo() {
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
    const productTemplate = (product) => {
        return (
            <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
                <div className="mb-3">
                    <img style={{ width: '100px', height: '50px' }} src={`${product.image}`} alt={product.description} className="w-6 shadow-2" />
                </div>
            </div>
        );
    };
    return (
        <div className="card">
            <Carousel value={conpanies} numVisible={6} numScroll={6} className="custom-carousel" responsiveOptions={responsiveOptions} itemTemplate={productTemplate} />
        </div>
    )
}