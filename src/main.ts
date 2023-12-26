import { fetchAllFlats } from './scraping/fetchAllFlats';
import { writeDataToFile } from './storage/writeFile';
import { appendDailyDataToFile } from './storage/appendDailyDataToResults';
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
    appendDailyDataToFile(flats, './data')
    
}


main();