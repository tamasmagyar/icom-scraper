import cheerio from 'cheerio';
import { parseFlatInfo } from './parseFlatText';
import { Flat } from '../types/types';


export function parseFlats(html: string): Flat[] {
    const $ = cheerio.load(html);
    const flats: Flat[] = []
    $('.listing-card-content').each((index, element) => {
        const textContent = $(element).text().trim();
        const flatInfo = parseFlatInfo(textContent);
        flats.push(flatInfo)
    });
    console.log(`Parsed ${flats.length} flats`)
    return flats;
}