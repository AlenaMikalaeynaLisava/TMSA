
// #### Task 2 💻
// На https://store.steampowered.com/ вывести в консоль названия, жанры и цены для каждой из игр для #tab_newreleases_content элемента.


import { Browser, Builder, By, WebDriver } from "selenium-webdriver";
import * as chrome from 'selenium-webdriver/chrome';
import { path } from 'chromedriver';

async function func5() {
    const service = new chrome.ServiceBuilder(path);
    let driver: WebDriver = await new Builder().forBrowser(Browser.CHROME).setChromeService(service).build();
    driver.get('https://store.steampowered.com/');
    while(!driver.executeScript('document.readyState === "complete"'));
    const elements = await driver.findElements(By.css('#tab_newreleases_content > a'));
    await driver.manage().setTimeouts({implicit:5000});
    elements.forEach((element)=>{
        async function func6(element) {
        const el1 = await element.findElement(By.className('tab_item_name')).getText()
        console.log(await el1);
        const el2 = await element.findElement(By.className('tab_item_top_tags')).getText()
        console.log(await el2);
        const el3 = await element.findElement(By.className('discount_final_price')).getText()
        console.log(await el3);        
        }
        func6(element);
    })
    // закомментила выход из окна, иначе выходит моментально и никакая задержка типа await driver.manage().setTimeouts({implicit:50000}); не помогает
   //driver.quit();
}
func5();

