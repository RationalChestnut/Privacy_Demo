import styled from "styled-components/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFPercentage } from "react-native-responsive-fontsize";
import { FlatList, Text, View } from "react-native";

export const HomeContainer = styled(View)`
  flex: 1;
  background-color: #f7f6f7;
  padding: ${hp("2%")}px ${wp("4%")}px;
`;

export const DataList = styled(FlatList)`
  flex: 1;
`;

export const ItemContainer = styled(View)``;

export const ItemText = styled(Text)``;
