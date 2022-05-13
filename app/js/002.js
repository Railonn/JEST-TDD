arabicDigits = [10, 5, 1];
romansDigits = ["X", "V", "I"];

export function arabicToRoman(number) {
    let roman = "";

    for (let index = 0; index < this.arabicDigits.length; index++) {
        while (number >= this.arabicDigits[index]) {
            roman += this.romansDigits[index];
            number -= this.arabicDigits[index];
        }
    }

    return roman;
}