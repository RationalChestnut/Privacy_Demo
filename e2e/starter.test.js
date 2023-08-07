import axios from "axios";

describe("Example", () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("should have sign up text", async () => {
    await expect(element(by.id("sign-up-text"))).toBeVisible();
  });

  it("should find signup inputs", async () => {
    await expect(element(by.id("signup-email-input"))).toBeVisible();
    await expect(element(by.id("signup-password-input"))).toBeVisible();
  });

  it("should log in", async () => {
    await element(by.id("switch")).tap();
    await element(by.id("signup-email-input")).typeText("example@gmail.com");
    await element(by.id("signup-password-input")).typeText("password");
    await element(by.id("submit")).tap();
  });

  it("should scroll flatlist", async () => {
    await waitFor(element(by.id("flatlist"))).toBeVisible();

    await waitFor(element(by.id("item_1822c0c9-fd91-4ce3-8ba2-8700ff801dad")))
      .toBeVisible()
      .whileElement(by.id("flatlist"))
      .swipe("up", "fast", 0.8);
  });
});
