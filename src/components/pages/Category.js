import React from "react";
import { useParams } from "react-router-dom";
import ProductsByCategory from "../ProductsByCategory";

function Category() {
  const { category } = useParams();

  return (
    <>
      <ProductsByCategory category={category} />
    </>
  );
}

export default Category;
