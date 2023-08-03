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
});
