const arabicDigits = [10, 5, 1];
const romansDigits = ["X", "V", "I"];

export function arabicToRoman(number) {
    let roman = "";

    for (let index = 0; index < arabicDigits.length; index++) {
        while (number >= arabicDigits[index]) {
            roman += romansDigits[index];
            number -= arabicDigits[index];
        }
    }

    return roman;
}