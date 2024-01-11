import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import data from "../db.json";
import Carousel from "../components/Carousel";
function Index() {
  console.log(data);
  return <>
    <Carousel/>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
            data.map((item) =>
                <ProductCard details={item} key={item.id}/>
                // <ProductCardShimmer/>
            )

        }
    </div>
  </>;
}

export default Index;
