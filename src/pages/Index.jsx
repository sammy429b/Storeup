import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import data from "../db.json";

function Index() {
  console.log(data);
  return <>
    <div className="grid grid-cols-3">
        {
            data.map((item) =>
                <ProductCard details={item}/>
            )

        }
    </div>
  </>;
}

export default Index;
