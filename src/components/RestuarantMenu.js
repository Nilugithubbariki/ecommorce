import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function RestuarantMenu() {
  const { resId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${resId}`).then((response) => {
      setProduct(response.data);
    });
  }, [resId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Product Details</h1>
      <Carousel>
        {product.images.map((image) => {
          return (
            <Carousel>
              <img
                className="d-block w-100"
                autoPlay
                autoPlayInterval={2000}
                src={image}
                alt=""
              />
            </Carousel>
          );
        })}
      </Carousel>
      <p className="font-bold my-6 text-2xl">{product.description}</p>
      <Link to="/">Back to Product List</Link>
    </div>
  );
}

export default RestuarantMenu;
