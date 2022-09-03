import * as dotenv from "dotenv";
import puppeteer, { ElementHandle } from "puppeteer";

dotenv.config();

const url: string = process.env.URL || "";

const sortByDeFi = async (page: puppeteer.Page) => {
  try {
    const sortButton = await page.$x(
      `//div[@id="tabContainer"]/div[2]/div[2]/div/div[1]/div[2]/div`
    );
    if (sortButton.length > 0) {
      await (sortButton[0] as ElementHandle<HTMLElement>).click();
    }
  } catch (e) {}
};

// const getPrice = async () => {
//   const browser = await puppeteer.launch({ headless: false });
//   const page = await browser.newPage();
//   await page.goto(url, { waitUntil: "networkidle2" });

//   // const list1 = await page.evaluate(() => {
//   //   document.querySelectorAll(".css-ovtrou");
//   // });
//   await page.type(".css-ovtrou", "20");
//   // const list2 = [...list1];
//   // console.log(list1);
// };

// getPrice().then(console.log);

console.log("Your program is running on ", url);

const main_actual = async () => {
  try {
    console.log(1);
    const browser: puppeteer.Browser = await puppeteer.launch({
      headless: false,
    });
    const page: puppeteer.Page = await browser.newPage();
    await page.setViewport({
      width: 1280,
      height: 800,
      deviceScaleFactor: 1,
    });
    await page.goto(url, { waitUntil: "networkidle2" });
    await sortByDeFi(page);
    await sortByDeFi(page);
  } catch (e) {
    console.log(e);
  }
};

const main = async () => {
  await main_actual();
};

main();
