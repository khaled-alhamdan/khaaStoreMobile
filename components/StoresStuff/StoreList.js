import React from "react";
// Importing Store Item Component
import StoreItem from "./StoreItem";
// Importing storesStore
import storesStore from "../../Stores/storesStore";
// Importing observer
import { observer } from "mobx-react";

// Importing components from native-base
import { List, Content, Spinner } from "native-base";

const StoreList = ({ navigation }) => {
  const storeList = storesStore.stores.map((store) => (
    <StoreItem store={store} key={store.id} navigation={navigation} />
  ));

  return (
    // WHY view Doesnt work?????
    <>
      {storesStore.loading ? (
        <Spinner />
      ) : (
        <Content>
          <List>{storeList}</List>
        </Content>
      )}
    </>
  );
};

export default observer(StoreList);
