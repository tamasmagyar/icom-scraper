import { Flat } from "../types/types";

export function parseFlatInfo(text: string): Flat {
    text = text.replace(/\s+/g, '');
    const totalPriceRegex = /([\d,]+)MFt/;
    const pricePerSquareMeterRegex = /(\d+)Ft\/m2/;

    const matchTotalPrice = text.match(totalPriceRegex);
    const matchPricePerSquareMeter = text.match(pricePerSquareMeterRegex);

    const price = matchTotalPrice ? parseFloat(matchTotalPrice[1].replace(',', '.')) * 1e6 : 0;
    const pricePerSquareMeter = matchPricePerSquareMeter ? parseInt(matchPricePerSquareMeter[1], 10) : 0;

    console.log(`Total Price: ${price}, Price per Square Meter: ${pricePerSquareMeter}`);

    return { price: price, pricePerSquareMeter: pricePerSquareMeter, originalString: text };
}