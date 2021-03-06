import axios from "axios";
import React, { useState, useEffect } from "react";
import CardItem from "./CardItem";
import "./ProductsByCategory.scss";

function ProductsByCategory({ category }) {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => {
        setProduct(res.data);
      });
  }, [category]);
  return (
    <div className="product-category">
      <h2>Check out these EPIC {category} Products!</h2>
      <div className="product-category-container">
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

export default ProductsByCategory;
