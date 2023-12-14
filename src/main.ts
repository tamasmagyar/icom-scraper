import { fetchAllFlats } from './scraping/fetchAllFlats';
import { writeDataToFile } from './storage/writeFile';
import { appendDailyMedianToFile } from './storage/appendDailyMedianToResults';
import dotenv from 'dotenv'; 
import { createFolderStructure } from './storage/createFolderStructure';
dotenv.config();


async function main() {
    const url: string = process.env.URL!
    const flats = await fetchAllFlats(url);

    createFolderStructure('data', 'daily_data')

    // write all data to ./data/todaysdate.json
    writeDataToFile(flats, './data/daily_data')
    
    // append median data to ./data/results.json
    appendDailyMedianToFile(flats, './data')
    
}


main();