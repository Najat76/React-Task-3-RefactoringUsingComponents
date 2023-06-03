import React from "react";
import ProductItem from "./ProductItem";
import products from "../products";

const ProductList = products.map((product) => (
  <ProductItem product={product} />
));

export default ProductList;
