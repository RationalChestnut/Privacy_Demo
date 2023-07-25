import styled from "styled-components/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFPercentage } from "react-native-responsive-fontsize";
import { FlatList, View } from "react-native";

export const HomeContainer = styled(View)`
  flex: 1;
  background-color: #f7f6f7;
`;

export const DataList = styled(FlatList)``;
