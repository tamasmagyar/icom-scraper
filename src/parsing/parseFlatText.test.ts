import { parseFlatInfo } from './parseFlatText';

describe('parseFlatInfo', () => {
    test('parses correctly formatted string', () => {
        const text = `79,78 M Ft
        1 227 336 Ft / m2
    
    VII. kerület, Károly körút 


                Alapterület
                65 m2
            
                                                                                                
                Szobák
                2 + 1 fél
                                
            star_outline`;
        const expected = {
            price: 79.78 * 1e6,
            pricePerSquareMeter: 1227336,
            originalString: "79,78MFt1227336Ft/m2VII.kerület,KárolykörútAlapterület65m2Szobák2+1félstar_outline",
        };
        expect(parseFlatInfo(text)).toEqual(expected);
    });

    test('handles missing price per square meter', () => {
        const text = "79,78 M Ft";
        const expected = {
            price: 79.78 * 1e6,
            pricePerSquareMeter: 0,
            originalString: "79,78MFt",
        };
        expect(parseFlatInfo(text)).toEqual(expected);
    });

    test('handles missing total price', () => {
        const text = "1 227 336 Ft / m2";
        const expected = {
            price: 0,
            pricePerSquareMeter: 1227336,
            originalString: "1227336Ft/m2",
        };
        expect(parseFlatInfo(text)).toEqual(expected);
    });

    test('handles empty string', () => {
        const text = "";
        const expected = {
            price: 0,
            pricePerSquareMeter: 0,
            originalString: '',
        };
        expect(parseFlatInfo(text)).toEqual(expected);
    });
});
