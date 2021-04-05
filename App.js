import { StatusBar } from "expo-status-bar";
import React from "react";

// Importing Home
import Home from "./components/Home";

// Importing Stores List
import StoreList from "./components/StoresStuff/StoreList";

// Importing theme provider
import { ThemeProvider } from "styled-components/native";

// Importing Store Detail
import StoreDetail from "./components/StoresStuff/StoreDetail";

// Importing NavigationContainer
import { NavigationContainer } from "@react-navigation/native";

// Importing createStackNavigator
import { createStackNavigator } from "@react-navigation/stack";

//
const { Navigator, Screen } = createStackNavigator();

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme.lightTheme}>
        <NavigationContainer>
          <Navigator initialRouteName="Home">
            <Screen name="Home" component={Home} />
            <Screen name="Stores" component={StoreList} />
            <Screen name="Store Info" component={StoreDetail} />
          </Navigator>
        </NavigationContainer>
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
};

export default App;

// Theme
const theme = {
  lightTheme: {
    backgroundColor: "#a6a3a1", // main background color
    moreInfoText: "white",
    moreInfoBorder: "white",
    deleteButton: "#c92f1e",
    updateButton: "green",
    boxColor: "black",
    headerBGC: "black",
    fontColor: "black",
    buttonTextColor: "white",
    buttonBGColor: "black",
  },
  darkTheme: {
    backgroundColor: "black", // main background color
    moreInfoText: "black",
    moreInfoBorder: "grey",
    deleteButton: "#c92f1e",
    updateButton: "green",
    boxColor: "white",
    headerBGC: "black",
    fontColor: "white",
    buttonTextColor: "black",
    buttonBGColor: "white",
  },
};
