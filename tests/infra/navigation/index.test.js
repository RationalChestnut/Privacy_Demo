import React from "react";
import { render } from "@testing-library/react-native";
import { Navigation } from "../../../src/infra/navigation/index.js";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useContext: jest.fn(),
}));

jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  NavigationContainer: ({ children }) => <>{children}</>,
}));

jest.mock("@react-navigation/native-stack", () => ({
  createNativeStackNavigator: jest
    .fn()
    .mockReturnValue({ Navigator: "mock-Navigator", Screen: "mock-Screen" }),
}));

jest.mock("@expo/vector-icons", () => ({
  FontAwesome: "mock-FontAwesome",
}));

jest.mock("@react-native-firebase/auth", () => ({
  auth: jest.fn(() => ({
    onAuthStateChanged: jest.fn(),
  })),
}));

jest.mock("../../../src/pages/Home/Home.page", () => "Home");
jest.mock("../../../src/pages/Auth/Auth.page", () => "Auth");

describe("<Navigation>", () => {
  it.each([
    [true, "authenticated"],
    [false, "unauthenticated"],
  ])(
    "should render correct navigator when isAuthenticated is %s",
    (isAuthenticated, expectedTestId) => {
      React.useContext.mockImplementation(() => ({ isAuthenticated }));
      const { queryByTestId } = render(<Navigation />);
      expect(queryByTestId(expectedTestId)).toBeTruthy();
    }
  );
});
