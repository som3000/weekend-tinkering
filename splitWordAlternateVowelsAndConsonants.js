function splitString(string) {
  let vowelFound = !isVowel(string[0]);
  let requiredStr = "";
  let discardStr = "";
  let index = 0;

  while (index < string.length) {
    if (isVowel(string[index]) && !vowelFound && index < string.length) {
      requiredStr = requiredStr + string[index];
      vowelFound = true;
      index++;
    }

    if (!isVowel(string[index]) && vowelFound && index < string.length) {
      requiredStr = requiredStr + string[index];
      vowelFound = false;
      index++;
    }
    if (index < string.length && isVowel(string[index]) === vowelFound) {
      discardStr = discardStr + "," + string[index];
      index++;
    }
  }

  return requiredStr + discardStr;
}


function isVowel(char) {
  let isVowelFound = char === "a" || char === "e" || char === "i";
  isVowelFound = isVowelFound || char === "o" || char === "u";
  return isVowelFound;
}

function displayMessage(string, calculatedStr, expectedStr) {
  const mark = calculatedStr === expectedStr ? "✅" : "❌";
  let message = mark + "[  " + string + "  ]";
  message += "| Calculated string = " + calculatedStr;
  message += "| Expected string = " + expectedStr;

  return message;
}

function testSplitString(string, expectedStr) {
  const calculatedStr = splitString(string);
  return displayMessage(string, calculatedStr, expectedStr);
}

console.log(testSplitString("apple", "ape,p,l"));
console.log(testSplitString("there", "tere,h"));
console.log(testSplitString("hello", "helo,l"));
console.log(testSplitString("abyss", "ab,y,s,s"));
