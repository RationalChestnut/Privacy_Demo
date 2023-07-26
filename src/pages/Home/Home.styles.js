import styled from "styled-components/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFPercentage } from "react-native-responsive-fontsize";
import { FlatList, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export const HomeContainer = styled(View)`
  flex: 1;
  background-color: #ffffff;
  padding: ${hp("2%")}px ${wp("4%")}px;
`;

export const DataList = styled(FlatList)`
  flex: 1;
`;

export const CardContainer = styled(View)`
  margin: ${hp("2%")}px 0;
  width: 100%;
  background-color: #00aaff;
  padding: ${hp("2%")}px ${wp("4%")}px;
  border-radius: ${wp("4%")}px;
`;

export const ItemText = styled(Text)`
  color: white;
  font-size: ${RFPercentage(2)}px;
`;

export const UpperNavbar = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LogoutIcon = styled(MaterialIcons).attrs({
  name: "logout",
  size: RFPercentage(3),
  color: "black",
})``;

export const Title = styled(Text)`
  font-size: ${RFPercentage(3)}px;
`;
