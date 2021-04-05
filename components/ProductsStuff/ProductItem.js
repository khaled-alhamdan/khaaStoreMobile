import React from "react";
// Importing products store
// import productStore from "../../Stores/productsStore";
// Importing styled from styled components
import styled from "styled-components/native";
// Importing observer
import { observer } from "mobx-react";
// Importing components from native-base
import { ListItem, View } from "native-base";
// Importing Image from react-native
import { Image } from "react-native";

export const ProductItem = ({ product }) => {
  const url = "http://192.168.8.104:8000";
  console.log(product);
  return (
    <View>
      <ListItem>
        <Image
          style={{ width: 100, height: 100 }}
          source={{ uri: `${url}${product.image}` }}
        />
        <BakeryItemStyled> {product.name}</BakeryItemStyled>
      </ListItem>
    </View>
  );
};

export default observer(ProductItem);

export const BakeryItemStyled = styled.Text`
  color: ${(props) => props.theme.fontColor};
  /* color: ; */
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 16px;
  width: 100%;
`;
