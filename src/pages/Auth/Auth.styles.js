import styled from "styled-components/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-paper";

export const AuthContainer = styled(View)`
  background-color: #ffffff;
  flex: 1;
  align-items: center;
  padding: ${hp("2%")}px ${wp("6%")}px;
`;

export const Title = styled(Text)`
  color: #1b2942;
  font-size: ${RFPercentage(4)}px;
  font-weight: 600;
`;

export const Input = styled(TextInput).attrs({
  numberOfLines: 1,
})`
  width: 100%;
  height: ${hp("10%")}px;
  background-color: #f2f5fa;
  margin-top: ${hp("2%")}px;
`;

export const SignupButton = styled(TouchableOpacity)`
  background-color: #00aaff;
  width: 100%;
  padding: ${hp("2%")}px ${wp("4%")}px;
  border-radius: ${wp("2%")}px;
  align-items: center;
  margin-top: ${hp("2%")}px;
`;

export const SignupButtonText = styled(Text)`
  font-size: ${RFPercentage(2.5)}px;
  color: white;
`;

export const LoginTextTouchable = styled(TouchableOpacity)``;

export const LoginText = styled(Text)`
  margin-top: ${hp("2%")}px;
`;
