//There's no need to load any dependencies.
//Puppeteer's page and browser classes will automatically be exposed
describe("Binance DeFi", () => {
  beforeAll(async () => {
    await page.goto("https://www.binance.com/en-AU/markets/coinInfo-defi");
  });

  it("should be titled with Binance title", async () => {
    await expect(page.title()).resolves.toMatch(
      "Cryptocurrency Market | Coin Prices & Market Cap | Binance"
    );
  });
});
