import ProductItem from "./ProductItem";
import products from "../products";

function ProductList() {
  const productList = products.map({ ProductItem });
  return { ProductItem };
}

export default ProductList;
