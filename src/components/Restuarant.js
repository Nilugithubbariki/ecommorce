import React from "react";
import "./App.css";
const Restuarant = (props) => {
  const { resData } = props;
  console.log(resData);
  const {
    brand,
    category,
    discountPercentage,
    price,
    rating,
    stocktitle,
    images,
  } = resData;
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-300">
      <img src={images[0]} alt="" className="rounded-lg" />
      <h4 className="font-bold py-4 text-lg">{brand}</h4>
      <h6>{category}</h6>
      <h6>{discountPercentage}</h6>
      <h6>{price}</h6>
      <h6>{rating} stars</h6>
      <h6>{stocktitle}</h6>
    </div>
  );
};

//Higher Order Component
//input - RestauarantCard ==> RestaurantCardPromoted

export default Restuarant;
