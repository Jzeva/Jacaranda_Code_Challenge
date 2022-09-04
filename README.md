# Jacaranda Finance Code Challenge

## Getting Started ✨ :sparkles:

### Code Challenge
<i>Build a simple CLI script to retrieve and present the top 5 priced DeFi coins listed on the Binance exchange purely using web scraping and not an API integration. Produce a readme.md file with instructions on how to set up your environment and execute the CLI command to present the results.

If the CLI script were to be run today and given the following results seen on Binance's page https://www.binance.com/en-AU/markets/coinInfo-defi you program should output a response similar to:</i>

```bash
-------------------
 TOP 5 DEFI PRICES
-------------------

1. YFI  - $13453.44
2. YFII - $ 1447.07

3. MKR  - $ 1105.44

4. BIFI - $  569.48

5. AUTO - $  417.48

-------------------
```
## To run this program:mag:, you need to...

### 1. Recommended Code Editor
[Visual Studio Code](https://www.figma.com/file/EMfRYJpL3DN3Dalde3iAYh/basketball-canva-hifi?node-id=1%3A2392)

### 2. Download the Source Code
[From my GitHub Repo](https://github.com/Jzeva/Jacaranda_Code_Challenge)

### 3. Install Dependencies

```bash
$ npm i
```
<i><b>It will take a while to install all the dependencies needed to run the program</i>:hourglass:. <i>Thanks for your patience!</b></i>

### 4. Setup Environment Variables
Create a file named <i><b>.env</b></i> at the root directory, and copy the following code in it:
```bash
URL="https://www.binance.com/en-AU/markets/coinInfo-defi"
```
Then save it.

### 5.Run the CLI script

```bash
$ ./start.sh
```
### Check the result

If everything is going right, you will find the target web page has been opened in the Chromium.

More importantly, check your VS code terminal, the output should be like:
```bash
Your program is running to scrap the webpage: https://www.binance.com/en-AU/markets/coinInfo-defi
--------------------
TOP 5 DEFI PRICES
--------------------
1. YFI - $14,422.17
2. YFII - $1,469.26
3. MKR - $1,090.74
4. BIFI - $565.36
5. AUTO - $410.87
--------------------
```
:dart:That would be the result after you execute the script.

## Main Tech Stack and Libraries in the Project
<b>• Programming Language: </b> [TypeScript](https://www.typescriptlang.org/)<br>
<b>• Node Selection:</b> [Xpath](https://www.w3schools.com/xml/xpath_syntax.asp)<br>
 <b>• Web Crawling Library</b> [Puppeteer](https://pptr.dev/)
</table>

## References
 - https://www.youtube.com/watch?v=27ILXN6Z7D0&t=2015s&ab_channel=CodingwithIndy
 - https://www.tutorialspoint.com/puppeteer/puppeteer_getting_element_text.htm
 - https://www.w3schools.com/xml/xpath_syntax.asp
 - https://pptr.dev/

<i><b>Thank you for any advice and suggestions! :thumbsup:
</b></i> 