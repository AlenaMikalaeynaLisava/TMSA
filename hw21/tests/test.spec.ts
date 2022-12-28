// #### Task 1 💻
// - Написать минимум 5 UI тестов для сайта: https://catalog.onliner.by/
// - При написании использовать различные типы селекторов и локаторов
// - Добавить методы ожидания элементов
// - Добавить проверки элементов/текстовых значений



import { Browser, Builder, By, Condition, Key, until, WebDriver } from "selenium-webdriver";
import * as chrome from 'selenium-webdriver/chrome';
import { path } from 'chromedriver';
import * as fs from 'fs';

describe('menu', () => {
    let driver: WebDriver;
    beforeEach(async () => {
        const service = new chrome.ServiceBuilder(path);
        driver = await new Builder().forBrowser(Browser.CHROME).setChromeService(service).build();
        await driver.manage().setTimeouts({pageLoad: 1000 * 10, implicit: 10000});
    });

    afterEach(() => {
       driver.close()
       driver.quit();
    });

    test('Все суперцены', async () => {
        driver.get('https://catalog.onliner.by/');
        while(!driver.executeScript('document.readyState === "complete"'));
        const elem = await driver.findElement(By.css('.b-main-navigation__bubble.b-main-navigation__bubble_primary')); 
        console.log(await elem.getText())

      expect(await elem.getText()).toBe("Все суперцены"); 
    })

   const arr = [
        "Onlíner Prime", 
        "Электроника",
        "Компьютеры и сети",
        "Бытовая техника",
        "Стройка и ремонт",
        "Дом и сад",
        "Авто и мото",
        "Красота и спорт",
        "Детям и мамам",
        "Работа и офис",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
]
    test('all elements', async () => {
        driver.get('https://catalog.onliner.by/');
        while(!driver.executeScript('document.readyState === "complete"'));
        const elements = await driver.findElements(By.css(".catalog-navigation-classifier>.catalog-navigation-classifier__item .catalog-navigation-classifier__item-title-wrapper"));
        console.log(await elements);
        let i =0;
        let s=0;
        for(let element of elements){
            const el1 = await element.getText();
          if(await el1 === arr[i]) s++
           i++            
       }
       expect(s).toBe(arr.length);  
    })

    const arr1 = [
    "О компании", 
    "Контакты редакции",
    "Реклама",
    "Тарифы",
    "Вакансии",
    "Манифест",
    "Пользовательское соглашение",
    "Публичные договоры",
    "Политика конфиденциальности",
    "Поддержка пользователей",
    "Правила возврата"
]
    test('all elements footer', async () => {
        driver.get('https://catalog.onliner.by/');
        while(!driver.executeScript('document.readyState === "complete"'));
        const elements = await driver.findElements(By.css("ul.footer-style__list>li>a "));
        await driver.manage().setTimeouts({implicit:5000});
        let i =0;
        let s=0
        for(let element of elements){
                 const el1 = await element.getText();
                 if(await el1 === arr1[i]) s++
                 i++            
            }
            expect(s).toBe(arr1.length);  
    })

    test('search Xiaomi MI TV P1 50"', async () => {
        driver.get('https://catalog.onliner.by/');
        while(!driver.executeScript('document.readyState === "complete"'));
        const searchElement = await driver.findElement(By.css("input.fast-search__input "));
        await searchElement.sendKeys('Xiaomi MI TV P1');
        await driver.switchTo().frame(await driver.findElement(By.className('modal-iframe')));
        const foundElements = await driver.findElements(By.css(".search__results .product__title>a")); 
        let i =0;
        const length = await foundElements.length;
             for(let element of foundElements){
                if(await (await element.getText()).includes("Xiaomi MI TV P1"))
                 i++         
                console.log(await element.getText());   
            }
            expect(i).toBe(length);  
    })

    test('Onliner Prime', async () => {
        driver.get('https://catalog.onliner.by/');
        while(!driver.executeScript('document.readyState === "complete"'));
        const firstEl = await driver.findElement(By.css(".catalog-navigation-classifier .catalog-navigation-classifier__item"));
        await firstEl.click();
        const elem = await driver.findElement(By.xpath('//div[normalize-space()="Быстрая доставка ваших подарков"]'));
        expect(await elem.getText()).toBe("Быстрая доставка ваших подарков");  // не придумала что правильно в expect написать
    })


})

