import { ConvertirNombre } from '../ts/001';

describe(' ', () => {

    // 1
    it('should return I when we type 1', () => {
        expect(new ConvertirNombre().arabicToRoman(1)).toBe("I");
    });

    it('should return II when we type 2', () => {
        expect(new ConvertirNombre().arabicToRoman(2)).toBe("II");
    });

    it('should return III when we type 3', () => {
        expect(new ConvertirNombre().arabicToRoman(3)).toBe("III");
    });

    it('should return X when we type 10', () => {
        expect(new ConvertirNombre().arabicToRoman(10)).toBe("X");
    });

});
