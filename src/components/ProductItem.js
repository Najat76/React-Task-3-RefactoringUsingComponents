import products from "../products";

function ProductItem() {
  const productItem = { products };
  return (
    <div className="product">
      <img className="productImage" alt={product.name} src={product.image} />
      <p className="text">{product.name}</p>
      <p className="text">{product.price} KD</p>
    </div>
  );
}

export default ProductItem;
