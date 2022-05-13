const romanNumberMap = {
    'M': 1000,
    'CM': 900,
    'D': 500,
    'CD': 400,
    'C': 100,
    'XC': 90,
    'L': 50,
    'XL': 40,
    'X': 10,
    'IX': 9,
    'V': 5,
    'IV': 4,
    'I': 1,
}

export function arabicToRoman(number) {

    if (number > 3999) {
        return 'Number too hight : ' + number;
    }

    if (number <= 0) {
        return "";
    }

    let result = "";

    for (const [key, value] of Object.entries(romanNumberMap)) {
        while (value <= number) {
            result += key;
            number -= value;
        }
    }

    return result;
}