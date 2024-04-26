import { memo } from "react";

type Product = {
  name: string;
  price: number;
};

type Props = {
  listProduct: Product[];
};

function Products(props: Props) {
  console.log("Products", props);

  return (
    <div>
      <h3>Products</h3>
    </div>
  );
}

export default memo(Products);
