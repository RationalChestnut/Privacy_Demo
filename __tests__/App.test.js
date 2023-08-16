// Need to mock this because react-native-firebase/auth is trying to use a native functionality which does not work with jest
jest.mock("@react-native-firebase/auth", () => ({
  auth: jest.fn(() => ({
    onAuthStateChanged: jest.fn(),
  })),
}));

import React from "react";
import renderer from "react-test-renderer";

import App from "../App.js";

describe("<App />", () => {
  it("has 1 child", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree.children.length).toBe(1);
  });
});
