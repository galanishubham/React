import React, { useState, useEffect } from "react";
import "./AllProduct.scss";
import CardItem from "./CardItem";
import axios from "axios";
import { useStateValue } from "./StateProvider";

function AllProduct() {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      // * set response data using setProduct and products is an array
      setProduct(res.data);

      console.log("All products", res.data);
    });
  }, []);

  return (
    <div className="cards">
      <h2>Check out these EPIC Products!</h2>
      <div className="cards-container">
        {products.map((product) => (
          <CardItem
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

export default AllProduct;
