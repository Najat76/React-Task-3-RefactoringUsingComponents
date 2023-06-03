import React from "react";

export const ProductItem = ({ product }) => {
  return (
    <div>
      <div className="product">
        <img className="productImage" alt={product.name} src={product.image} />
        <p className="text">{product.name}</p>
        <p className="text">{product.price} KD</p>
      </div>
    </div>
  );
};

export default ProductItem;
