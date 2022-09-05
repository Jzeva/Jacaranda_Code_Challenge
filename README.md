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
## To run this program:mag:, you need...

### 1. Terminal
- <b>MacOS:</b> This code challenge is finished by MacBook, so it can run smoothly in <b><i>zsh</i></b> terminal under macOS.<br><br>
- <b>Windows:</b> If you are using Windows and have trouble in running this program in Windows <b><i>Powershell</i></b>. Try this: [Setting up Windows Terminal](https://theflying.dev/digital-garden/setting-up-windows-terminal/)<br><br>
- <b>Linux</b> This program can be executed under <b><i>bash</i></b> terminal.

### 2. Recommended Code Editor
[Visual Studio Code](https://www.figma.com/file/EMfRYJpL3DN3Dalde3iAYh/basketball-canva-hifi?node-id=1%3A2392)

### 3. Specify the Version of npm and Nodejs
<b>• Node:  </b>v16.14.0
<b>• NPM:  </b>8.3.1

<i><b>Note</b></i>:<i>if you don't have the correct version of Node, you can try this ["n" Node.js version management tool](https://github.com/tj/n) to manage your Node version.</i>

### 4. Download the Source Code
[From my GitHub Repo](https://github.com/Jzeva/Jacaranda_Code_Challenge)

### 5. Install Dependencies

```bash
$ npm i
```
<i><b>It will take a while to install all the dependencies needed to run the program</i>:hourglass:. <i>Thanks for your patience!</b></i>

### 6. Setup Environment Variables
Create a file named <i><b>.env</b></i> at the root directory, and copy the following code in it:
```bash
URL="https://www.binance.com/en-AU/markets/coinInfo-defi"
```
Then save it.

<b>OR</b>

If you don't want to create <i><b>.env</b></i> file at the root directory, you can input:
```bash
 export URL="https://www.binance.com/en-AU/markets/coinInfo-defi"
```
in your terminal to add the environment variable.

<i><b>Note</b></i>:<i>if you use this way to add the environment variable, you need to input the command before every time you open a new terminal</i>

### 7. Run the CLI script

```bash
$ ./start.sh
```
### 8. Check the result

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

### 9. Run Test

```bash
$ npm test
```

## Main Tech Stack and Libraries in the Project
<b>• Programming Language:  </b> [TypeScript](https://www.typescriptlang.org/)<br>
<b>• Node Selection:  </b> [Xpath](https://www.w3schools.com/xml/xpath_syntax.asp)<br>
 <b>• Web Crawling Library: </b> [Puppeteer](https://pptr.dev/)<br>
  <b>• Testing Framework: </b>[Jest](https://jestjs.io/)
</table>

## References
 - https://www.youtube.com/watch?v=27ILXN6Z7D0&t=2015s&ab_channel=CodingwithIndy
 - https://www.tutorialspoint.com/puppeteer/puppeteer_getting_element_text.htm
 - https://www.w3schools.com/xml/xpath_syntax.asp
 - https://pptr.dev/
 - https://jestjs.io/docs/next/puppeteer

<i><b>Thank you for any advice and suggestions! :thumbsup:
</b></i> 