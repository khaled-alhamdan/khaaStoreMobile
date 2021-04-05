import React from "react";
// Importing styled from styled components
import styled from "styled-components/native";
// Importing observer
import { observer } from "mobx-react";
// Importing components from native-base
import { ListItem, View } from "native-base";
// Importing Image from react-native
import { Image } from "react-native";

const StoreItem = ({ store, navigation }) => {
  //   const handelDelete = () => {
  //     productStore.deleteProduct(product.id);
  //   };
  const url = "http://192.168.8.104:8000";
  return (
    <View>
      <ListItem
        onPress={() => navigation.navigate("Store Info", { store: store })}
      >
        <Image
          style={{ width: 100, height: 100 }}
          source={{ uri: `${url}${store.image}` }}
        />
        <BakeryItemStyled> {store.name}</BakeryItemStyled>
      </ListItem>
    </View>
  );
};

export default observer(StoreItem);

export const BakeryItemStyled = styled.Text`
  color: ${(props) => props.theme.fontColor};
  font-size: 18;
  margin-top: 10;
  margin-bottom: 10;
  margin-left: 16;
  width: 100%;
`;
