const puppeteer = require('puppeteer'); 

(async () => {
    const browser = await puppeteer.launch({ headless: false })
    const page = await browser.newPage();
    await page.goto('https://blog.web3labs.com/');
    
    const grabParagraph = await page.evaluate(() => {
        const paragraph = document.querySelector('.span8 h1');
        return paragraph.innerHTML;
    });

    console.log(grabParagraph);

    await browser.close();
})()