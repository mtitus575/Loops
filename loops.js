
let input = 'There are nine million bicycles in beijing. That is a fact. It is a thing you cannot deny.';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      resultArray.push(vowels[j])
    }
  }

   if (input[i] === 'e') {
    resultArray.push(input[i]);
  }
   if (input[i] === 'u') {
    resultArray.push(input[i]);
  }
}

console.log(resultArray);

const resultString = resultArray.join('').toUpperCase()
console.log(resultString)