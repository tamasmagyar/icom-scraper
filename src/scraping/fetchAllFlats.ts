import { Flat } from '../types/types';
import puppeteer from 'puppeteer';
import { scrapeFlatsFromPage } from './scrapeFlatsFromPage';


export async function fetchAllFlats(baseUrl: string) {
    
    let currentPage = 1;
    let allFlats: Flat[] = [];
    let flats;

    do {
        const browser = await puppeteer.launch({
            headless: true,
            // executablePath: '/usr/bin/chromium-browser',
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        const page = await browser.newPage();
        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3');
        const url = `${baseUrl}?page=${currentPage}`;
        console.log(`Loading ${currentPage} page`)
        flats = await scrapeFlatsFromPage(page, url);
        allFlats = allFlats.concat(flats);
        currentPage++;
        await browser.close();
    } while (flats.length >= 20);
    console.log(`Found all the ${allFlats.length} flats`)
    return allFlats;
}
