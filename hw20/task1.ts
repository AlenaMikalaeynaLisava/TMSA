import { Browser, Builder, By, WebDriver } from "selenium-webdriver";
import * as chrome from 'selenium-webdriver/chrome';
import { path } from 'chromedriver';
import { beforeEach } from "node:test";

async function func() {
    const service = new chrome.ServiceBuilder(path);
    let driver: WebDriver = await new Builder().forBrowser(Browser.CHROME).setChromeService(service).build();
    //driver.manage().window().maximize();
    driver.get('https://the-internet.herokuapp.com/add_remove_elements/');
    while(!driver.executeScript('document.readyState === "complete"'));
    console.log(await driver.findElement(By.css('.large-12 h3')).getText());
    console.log(await driver.findElement(By.css('.large-4 a')).getAttribute('target'));
    console.log(await driver.findElement(By.css('.row img')).getAttribute('src'));
    driver.quit();
}
async function func1() {
    const service = new chrome.ServiceBuilder(path);
    let driver: WebDriver = await new Builder().forBrowser(Browser.CHROME).setChromeService(service).build();
    driver.get('https://the-internet.herokuapp.com/dynamic_loading');
    while(!driver.executeScript('document.readyState === "complete"'));
    const e = await driver.findElements(By.css('#content p'));
    console.log(await e[1].getText());
    console.log(await driver.findElement(By.css('.large-12')).getAttribute('id'));
    console.log(await driver.findElement(By.css('.row .large-12 a')).getAttribute('href'));
    driver.quit();
}
async function func2() {
    const service = new chrome.ServiceBuilder(path);
    let driver: WebDriver = await new Builder().forBrowser(Browser.CHROME).setChromeService(service).build();
    driver.get('https://the-internet.herokuapp.com/dynamic_loading/1');
    while(!driver.executeScript('document.readyState === "complete"'));
    console.log(await driver.findElement(By.css('div button')).getText());
    console.log(await driver.findElement(By.css('.large-4.large-centered.columns a')).getText());
    const tags = await driver.findElements(By.css('.example div'));
    console.log(await tags[1].getAttribute("id"));
    driver.quit();
}

async function func3() {
    const service = new chrome.ServiceBuilder(path);
    let driver: WebDriver = await new Builder().forBrowser(Browser.CHROME).setChromeService(service).build();
    driver.get('https://the-internet.herokuapp.com/shifting_content/menu');
    while(!driver.executeScript('document.readyState === "complete"'));
    console.log(await driver.findElement(By.css('a[href="/about/"]')).getText());
    console.log(await driver.findElement(By.xpath('//a[normalize-space()="Contact Us"]')).getText());
    console.log(await driver.findElement(By.xpath('//div[./a[contains(text(), "Elemental Selenium")]]')).getText());
    driver.quit();
}

async function func4() {
    const service = new chrome.ServiceBuilder(path);
    let driver: WebDriver = await new Builder().forBrowser(Browser.CHROME).setChromeService(service).build();
    driver.get('https://the-internet.herokuapp.com/iframe');
    while(!driver.executeScript('document.readyState === "complete"'));
    await driver.switchTo().frame(await driver.findElement(By.id('mce_0_ifr')));
    console.log(await driver.findElement(By.css('#tinymce p')).getText());
    await driver.switchTo().defaultContent();
    console.log(await driver.findElement(By.className('tox-editor-header')).getAttribute("data-alloy-vertical-dir"));
    driver.quit();
}
func();
func1();
func2();
func3();
func4();