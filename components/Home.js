import React from "react";
import styled from "styled-components/native";
import { ButtonStyled, BottomStyling } from "../styles";

const Home = ({ navigation }) => {
  return (
    <HomeBackgroundImg
      source={{
        uri:
          "https://annabanana.co/wp-content/uploads/2020/03/Chocolate-Chip-Cookies-22.jpg",
      }}
    >
      <OverlayContainer>
        <TitleView>
          <TitleText> Khaa Store</TitleText>
        </TitleView>
        <ButtonView>
          <BottomStyling>
            <ButtonStyled onPress={() => navigation.navigate("Stores")}>
              Click here
            </ButtonStyled>
          </BottomStyling>
        </ButtonView>
      </OverlayContainer>
    </HomeBackgroundImg>
  );
};

export const HomeBackgroundImg = styled.ImageBackground`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const OverlayContainer = styled.View`
  flex: 1;
  background-color: rgba(100, 30, 90, 0.4);
`;

export const TitleView = styled.View`
  height: 40%;
  align-items: center;
  justify-content: center;
`;

export const TitleText = styled.Text`
  color: red;
  font-size: 38px;
  text-align: center;
`;

export const ButtonView = styled.View`
  height: 35%;
  align-items: center;
  justify-content: center;
`;

export default Home;
