import React from "react";

function Productioninfo() {
  const product = {
    nae: "Laptop",
    price: 999.99,
    availability: "In Stock",
  };
  return (
    <div>
      <q></q>
      <h4>Name:{product.nae}</h4>
      <h4>Price:{product.price}</h4>
      <h4>Availability:{product.availability}</h4>
    </div>
  );
}

export default Productioninfo;
