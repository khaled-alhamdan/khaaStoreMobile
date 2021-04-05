import React from "react";
// Importing observer
import { observer } from "mobx-react";
// Importing product item
import ProductItem from "./ProductItem";
// Importing components from native-base
import { List, Content } from "native-base";

const ProductList = ({ products }) => {
  const productList = products.map((product) => (
    <ProductItem product={product} key={product.id} />
  ));

  return (
    <Content>
      <List>{productList}</List>
    </Content>
  );
};

export default observer(ProductList);
