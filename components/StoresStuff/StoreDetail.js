import React from "react";
import styled from "styled-components/native";
// import { useParams } from "react-router-dom";
// Importing storesStor
import storesStore from "../../Stores/storesStore";
// Importing productsStore
import productsStore from "../../Stores/productsStore";
// Importing observer
import { observer } from "mobx-react";
// Importing components from native-base
import { Spinner, View, Text } from "native-base";
import ProductList from "../ProductsStuff/ProductList";

const StoreDetail = () => {
  const url = "http://192.168.8.104:8000";

  //   const { store } = route.params;
  // const store = storesStore.stores.map((_store) => (
  //   <>
  //     <StoreDetailImage source={{ uri: `${url}${_store.image}` }} />
  //     <StoreDetailTitle>{_store.name}</StoreDetailTitle>
  //   </>
  // ));
  const store = storesStore.stores[0];

  if (storesStore.loading) return <Spinner />;

  const productsFromProductStore = store.products.map((product) =>
    productsStore.getProductById(product.id)
  );

  return (
    <>
      {store ? (
        <>
          <StoreDetailWrapper>
            <StoreDetailImage source={{ uri: `${url}${store.image}` }} />
            <StoreDetailTitle>{store.name}</StoreDetailTitle>
          </StoreDetailWrapper>
          <ProductList
            products={productsFromProductStore}
            key={productsFromProductStore.id}
          />
        </>
      ) : (
        <View>
          <Text> This store doesn't exist </Text>
        </View>
      )}
    </>
  );
};

export default observer(StoreDetail);

export const StoreDetailWrapper = styled.View`
  margin-top: 50px;
`;

export const StoreDetailImage = styled.Image`
  width: 250px;
  height: 150px;
`;

export const StoreDetailTitle = styled.Text`
  font-weight: bold;
  font-size: 40px;
`;
