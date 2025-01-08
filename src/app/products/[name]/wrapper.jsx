"use client"

import { useState } from "react";
import Sizes from "./sizes";
import AddToCart from "./addToCart";

export default function ClientWrapper({product}) {

    const [selectedSize, setSelectedSize] = useState('');
    
    return (
        <>
            <Sizes sizes={product.sizes} selectedSize={selectedSize} setSelectedSize={setSelectedSize} />
            <AddToCart product={product} selectedSize={selectedSize} />
        </>
    );
}