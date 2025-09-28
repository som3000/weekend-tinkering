function minDistVowels(string) {
  let lastLocVowel = -1;
  let dist = 0;
  let minDist = string.length;
  let vowelFound = 0;
  let isFirstVowel = true;
  for (let index = 0; index < string.length; index++) {

    if (isVowel(string[index]) && !isFirstVowel) {
      dist = index - lastLocVowel;
      minDist = dist < minDist ? dist : minDist;
      lastLocVowel = index;
      vowelFound++;
    }
    if (isVowel(string[index]) && isFirstVowel) {
      lastLocVowel = index;
      isFirstVowel = false;
      vowelFound++;
    }
  }

  return vowelFound < 2 ? -1 : minDist;
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

function testMinDistVowels(string, expectedDist) {
  const minDist = minDistVowels(string);
  return displayMessage(string, minDist, expectedDist);
}

console.log(testMinDistVowels("hello", 3));
console.log(testMinDistVowels("apple", 4));
console.log(testMinDistVowels("beautiful", 1));
console.log(testMinDistVowels("abyss", -1));
console.log(testMinDistVowels("a1234a123a12a1a", 2));
