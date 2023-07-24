// console.log("Exercise 1 - Word Highlighter");

let str = document.getElementById("myParagraph").textContent;


let findMost = function(str) {

  let words = str.match(/\w+/g);


  let counts = {};

  for (let word of words) {
    if (counts[word]) {

      counts[word]++;
    } else {
      counts[word] = 1;
    }
  }


  let countsSorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  console.log(countsSorted);

  let max = 0;
  let frequent = '';
  for (let [word, count] of countsSorted) {

    if (count > max) {
      max = count;
      frequent = word;
    }
  }



  let mostFrequent = countsSorted.slice(0, 5).map(([word]) => word);


console.log(mostFrequent);

let highlighted = words.map(word => {
  if (mostFrequent.includes(word.toLowerCase())) {
    if (word[0] === word[0].toUpperCase()) {

      return `<mark><u>${word}</u></mark>`;
    } else {
      return `<mark>${word}</mark>`;
    }
  }  else {
    return word;
  }
  // return word
});

  document.getElementById("myParagraph").innerHTML = highlighted.join(' ');
}


findMost(str);

