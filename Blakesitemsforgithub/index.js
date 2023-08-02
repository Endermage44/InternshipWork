/* eslint-disable new-cap */
/* eslint-disable no-undef */
/* eslint-disable id-length */
import cheerio from "cheerio";
import puppeteer from "puppeteer";
import fs from "fs";

const urlToScrape = `` //Enter the link you want to scrape
const urlMaintain = ``
const urlMaintain2 = ``
const keepUrl = ``

const getData = async () => {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        ignoreHTTPSErrors: true,
    })

    const page = await browser.newPage()


    await page.goto(urlToScrape, { waitUntil: `networkidle0`, })

    await page.waitForNavigation({ waitUntil: `domcontentloaded` })

    const links = await page.evaluate(() => {
        const linkElements = document.querySelectorAll(`a[href]`)
        return Array.from(linkElements).map((link) => link.href)
    })
    
    for (const link of links) {
        if (link.includes(urlMaintain) || link.includes(urlMaintain2) || link.includes(keepUrl)){
            const newLinks = await page.evaluate(() => {
                const linkElements = document.querySelectorAll(`a[href]`)
                return Array.from(linkElements).map((link) => link.href)
            })
            links.push(newLinks)
            await page.goto(link, { waitUntil: `domcontentloaded`, })
            const bodyHTML = await page.evaluate(() => document.body.innerHTML)
            const $ = cheerio.load(bodyHTML)
            let title = $(`h1`).last().text()
            title = title.replaceAll(`(`, ``).replaceAll(`)`, ``).replaceAll(`,`, ``).replaceAll(`"`, ``).replaceAll(`-`, ``).replaceAll(`/`, ``).replaceAll(`\\`, ``).replaceAll(`:`, ``).replaceAll(` `, `_`).replaceAll(`__`, `_`)
            const pdfPath = `otherPDFS/${title}.pdf`
            await page.pdf({ path: pdfPath })
            console.log(`PDF saved: ${pdfPath}`)
        }
    }

    await browser.close()
}

getData()