import React, { useState, useEffect } from "react";
import axios from "axios";
import CardItem from "./CardItem";
import "./TopProducts.scss";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function TopProducts() {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products?limit=6").then((res) => {
      setProduct(res.data);
    });
  }, []);

  return (
    <div className="top-products">
      <h2>Top picks to explore!</h2>
      <div className="top-products-container">
        {products?.map((product) => (
          <CardItem
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
      <Link to="/products">
        <Button buttonStyle="btn--outline">Explore more...</Button>
      </Link>
    </div>
  );
}

export default TopProducts;
