function factorialRecursive(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorialRecursive(n - 1);
    }
  }
  
  const number = 5;
  const factorial = factorialRecursive(number);
  console.log(`Факториал ${number} равен ${factorial}`);

//   2

// const text = "My name 457 is Alex";
// const nonDigitCharacters = text.match(/[^0-9]/g);

// if (nonDigitCharacters) {
//   const uniqueNonDigits = [...new Set(nonDigitCharacters)];
//   console.log("Символы, не являющиеся цифрами:", uniqueNonDigits.join(""));
// } else {
//   console.log("В строке нет символов, не являющихся цифрами.");
// }

// 3

const text = "Hello\tWorld\nTest";
const whitespaceCharacters = text.match(/\s/g);

if (whitespaceCharacters) {
  console.log("Пробельные символы:", whitespaceCharacters.join(""));
} else {
  console.log("В строке нет пробельных символов.");
}

//4

function countChar(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === char) {
        count++;
      }
    }
    return count;
  }
  
  const inputString = "loremipsumdolor";
  const charToCount = 'o';
  const result = countChar(inputString, charToCount);
  
  console.log(`Символ '${charToCount}' встречается ${result} раз(а).`);
  