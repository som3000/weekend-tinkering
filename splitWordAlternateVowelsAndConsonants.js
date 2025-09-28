function splitString(string) {
  for (let index = 0; index < string.length; index ++) {
    
  }
}

function isVowel(char) {
  let isVowelFound = char === "a" || char === "e" || char === "i" ;
  isVowelFound = isVowelFound || char === "o" || char === "u";
  return isVowelFound;
}

function displayMessage(string, minDist, expectedDist) {
  const mark = minDist === expectedDist ? "✅" : "❌";
  let message = mark + "[  " + string + "  ]";
  message += "| Calculated minimum distance = " + minDist;
  message += "| Expected minimum distance = " + expectedDist;

  return message;
}

function testMinDistVowels(string, expectedStr) {
  const minDist = minDistVowels(string);
  return displayMessage(string, minDist, expectedStr);
}

console.log(testMinDistVowels("hello", 3));
console.log(testMinDistVowels("apple", 4));
console.log(testMinDistVowels("beautiful", 1));
console.log(testMinDistVowels("abyss", -1));
console.log(testMinDistVowels("a1234a123a12a1a", 2));
