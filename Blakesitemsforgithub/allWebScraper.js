/* eslint-disable new-cap */
/* eslint-disable no-undef */
/* eslint-disable id-length */
import cheerio from "cheerio";
import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const urlToScrape = ``;
const originUrl = ``;

const sanitizeFileName = (fileName) => {
  const fandomPart = "";
  const sanitizedFileName = fileName.replace(fandomPart, "");
  return sanitizedFileName.replace(/[<>:"/\\|?*]/g, "").trim();
};

const scrapeData = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  });

  const page = await browser.newPage();

  await page.goto(urlToScrape, { waitUntil: `domcontentloaded` });

  const links = await page.evaluate(() => {
    const linkElements = document.querySelectorAll(`a[href]`);
    return Array.from(linkElements).map((link) => link.href);
  });

  const newLinksUnique = [...new Set(links)];

  const currentFilePath = fileURLToPath(import.meta.url);
  const currentDir = path.dirname(currentFilePath);

  for (const link of newLinksUnique) {
    if (link.includes(originUrl) && !link.includes(`.pdf`)) {
      await page.goto(link, { waitUntil: `domcontentloaded` });
      const pageTitle = await page.title();
      const pageName = sanitizeFileName(pageTitle);
      const pdfPath = path.join(currentDir, `otherPDFS`, `${pageName}.pdf`);
      await page.pdf({ path: pdfPath });
      console.log(`PDF saved: ${pdfPath}`);
    }
  }

  await browser.close();
};

scrapeData();
