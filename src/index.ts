import * as dotenv from "dotenv";
import puppeteer, { ElementHandle } from "puppeteer";

dotenv.config();

const url: string = process.env.URL || ""; //The URL of the webpage to do web scrapping

const nameResults: string[] = []; //The array stored coin names
const valueResults: string[] = []; //The array stored coin values

/**
 *Sort the results in descending order
 * @param page The web page to be opened
 * @param times The times click the sort button
 */
const sortByDeFiValue = async (page: puppeteer.Page, times: number) => {
  try {
    const sortButton = await page.$x(
      `//div[@id="tabContainer"]/div[2]/div[2]/div/div[1]/div[2]/div`
    );
    for (let i = times; i > 0; i--) {
      if (sortButton.length > 0) {
        await (sortButton[0] as ElementHandle<HTMLElement>).click();
      }
    }
  } catch (e) {
    console.log(e);
  }
};

/**
 * Get the names of coins
 * @param page The web page to be opened
 */
const getDeFiNames = async (page: puppeteer.Page) => {
  const names = await page.$x(
    `//div[@id="tabContainer"]/div[2]/div[2]/div/div[2]/div/div/a/div[2]`
  );
  if (names.length > 0) {
    for (let i = 0; i < names.length; i++) {
      let name = await (await names[i].getProperty("textContent")).jsonValue();
      nameResults.push(name);
    }
  }
};

/**
 * Get the values of coins
 * @param page The web page to be opened
 */
const getDeFiValues = async (page: puppeteer.Page) => {
  const values = await page.$x(
    `//div[@id="tabContainer"]/div[2]/div[2]/div/div[2]/div/div/div[1]/div`
  );
  if (values.length > 0) {
    for (let i = 0; i < values.length; i++) {
      let value = await (
        await values[i].getProperty("textContent")
      ).jsonValue();
      valueResults.push(value);
    }
  }
};

/**
 * Demonstrate the selected results
 * @param nameArray The array stored coin names
 * @param valueArray The array stored coin values
 * @param itemsNumber The number of items to be demonstrated
 */
const demoValues = (
  nameArray: string[],
  valueArray: string[],
  itemsNumber: number
) => {
  const slicedValueResults = valueArray.slice(0, itemsNumber);
  const dollarArr = slicedValueResults.map((result) => result.substring(1));
  console.log("--------------------");
  console.log(`TOP ${itemsNumber} DEFI PRICES`);
  console.log("--------------------");
  for (let i = 0; i < itemsNumber; i++) {
    let name = nameArray[i];
    let value = dollarArr[i];
    console.log(`${i + 1}. ${name} - ${value}`);
  }
  console.log("--------------------");
};

const main_actual = async () => {
  try {
    console.log("Your program is running to scrap the webpage:", url);
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
    await sortByDeFiValue(page, 2);
    await getDeFiNames(page);
    await getDeFiValues(page);
    demoValues(nameResults, valueResults, 5);
  } catch (e) {
    console.log(e);
  }
};

const main = async () => {
  await main_actual();
};

main();
