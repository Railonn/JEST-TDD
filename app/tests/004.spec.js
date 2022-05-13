import { arabicToRoman } from '../js/004';

describe(' ', () => {

    // 4
    it('should return I when we type 1', () => {
        expect(arabicToRoman(1)).toBe("I");
    });

    it('should return II when we type 2', () => {
        expect(arabicToRoman(2)).toBe("II");
    });

    it('should return III when we type 3', () => {
        expect(arabicToRoman(3)).toBe("III");
    });

    it('should return IV when we type 4', () => {
        expect(arabicToRoman(4)).toBe("IV");
    });

    it('should return V when we type 5', () => {
        expect(arabicToRoman(5)).toBe("V");
    });

    it('should return VI when we type 6', () => {
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

    it('should return LV when we type 55', () => {
        expect(arabicToRoman(55)).toBe("LV");
    });

    it('should return M when we type 1000', () => {
        expect(arabicToRoman(1000)).toBe("M");
    });

    it('should return MDV when we type 1505', () => {
        expect(arabicToRoman(1505)).toBe("MDV");
    });

    it('should return MDV when we type 2227', () => {
        expect(arabicToRoman(2227)).toBe("MMCCXXVII");
    });

    it('should return empty string when 0 or negative number', () => {
        expect(arabicToRoman(0)).toBe("");
    });

    it('should return message error when number is too hight', () => {
        expect(arabicToRoman(4000)).toBe("Number too hight : 4000");
    })
});
