class ConvertirNombre {

    arabicDigits = [1000, 500, 100, 50, 10, 5, 1];
    romansDigits = ["M", "D", "C", "L", "X", "V", "I"];

    arabicToRoman(number) {
        let roman = "";

        if (number > 3999) {
            return 'Number too hight : ' + number;
        }

        if (number <= 0) {
            return "";
        }

        for (let index = 0; index < this.arabicDigits.length; index++) {
            while (number >= this.arabicDigits[index]) {
                roman += this.romansDigits[index];
                number -= this.arabicDigits[index];
            }
        }

        return roman;
    }

}

module.exports(ConvertirNombre);