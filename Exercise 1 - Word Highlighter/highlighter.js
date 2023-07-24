// console.log("Exercise 1 - Word Highlighter");

let str = document.getElementById("myParagraph").textContent;

let findMost=function(str) {
  let words = str.match(/\w+/g);
  console.log(words); // [ 'How', 'do', 'you', 'do' ]

  let occurances = {};

  for (let word of words) {
    if (occurances[word]) {
      occurances[word]++;
    } else {
      occurances[word] = 1;
    }
  }
	occurances.sort((a, b) => b.score - a.score);
/*   console.log(occurances); // { How: 1, do: 2, you: 1 } */

  let max = 0;
  let mostRepeatedWord = '';

  for (let word of words) {
    if (occurances[word] > max) {
      max = occurances[word];
      mostRepeatedWord = word;
    }
  }

  return mostRepeatedWord;
}

/* var find = 'abc'; */
var re = new RegExp(findMost(str), 'g');

str = str.replace(re, '<span color="red">FREE</span>');
console.log(findMost(str)); // Result: "do"