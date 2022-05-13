class ConvertirNombre {

    arabicToRoman(number) {
        let roman = "";

        while (number >= 10) {
            roman += "X";
            number -= 10;
        }

        while (number-- > 0) {
            roman += "I";
        }

        return roman;
    }

}