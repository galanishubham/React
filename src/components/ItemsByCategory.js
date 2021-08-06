import axios from "axios";
import React, { useState, useEffect } from "react";
import "./ItemsByCategory.scss";
import CardItem from "./CardItem";
import { Link } from "react-router-dom";

function ItemsByCategory() {
  const items = [
    "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
  ];

  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/categories").then((res) => {
      setCategory(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div className="category">
      <h2>Find Products By Category</h2>
      <div className="category-items">
        {category.map((category, index) => (
          <Link to={`/category/${category}`}>
            <CardItem key={index} image={items[index]} category={category} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ItemsByCategory;
