import { arabicToRoman } from '../js/002';

describe(' ', () => {

    // 2
    it('should return I when we type 1', () => {
        expect(arabicToRoman(1)).toBe("I");
    });

    it('should return II when we type 2', () => {
        expect(arabicToRoman(2)).toBe("II");
    });

    it('should return III when we type 3', () => {
        expect(arabicToRoman(3)).toBe("III");
    });

    it('should return III when we type 5', () => {
        expect(arabicToRoman(3)).toBe("III");
    });

    it('should return III when we type 6', () => {
        expect(arabicToRoman(6)).toBe("VI");
    });

    it('should return X when we type 10', () => {
        expect(arabicToRoman(10)).toBe("X");
    });

    it('should return XI when we type 11', () => {
        expect(arabicToRoman(11)).toBe("XI");
    });

    it('should return X when we type 20', () => {
        expect(arabicToRoman(20)).toBe("XX");
    });

    it('should return X when we type 21', () => {
        expect(arabicToRoman(21)).toBe("XXI");
    });

});
