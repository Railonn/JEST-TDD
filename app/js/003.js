const arabicDigits = [1000, 500, 100, 50, 10, 5, 1];
const romansDigits = ["M", "D", "C", "L", "X", "V", "I"];

export function arabicToRoman(number) {
    let roman = "";

    if (number > 3999) {
        return 'Number too hight : ' + number;
    }

    if (number <= 0) {
        return "";
    }

    for (let index = 0; index < arabicDigits.length; index++) {
        while (number >= arabicDigits[index]) {
            roman += romansDigits[index];
            number -= arabicDigits[index];
        }
    }

    return roman;
}