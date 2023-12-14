import { parseFlats } from "../parsing/parseFlat";
import { Flat } from "../types/types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function scrapeFlatsFromPage(page: any, url: string): Promise<Flat[]> {
    console.log(`Loading url: ${url}`)
    await page.goto(url);
    const html = await page.content();
    // writeHtml(html, currentPage.toString())
    return parseFlats(html)
}