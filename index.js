document.getElementById("countButton").onclick = function() {
    let typedText = document.getElementById("textInput").value; 
    typedText = typedText.toLowerCase(); 
    typedText = typedText.replace(/[^a-z'\s]+/g, "");

    letterCounts = {}; 
    wordsCount = {};

}

for(let i = 0; i < typedText.length; i++) {
    let currentLetter = typedText[i]; 
    if (letterCounts[currentLetter] === undefined) {
        letterCounts[currentLetter] = 1;
    } else {
        letterCounts[currentLetter]++;         
    }
}

let words = typedText.split(/\s/); 

for(letter in letterCounts) {
    let span = document.createElement("span");
    let textContent = document.createTextNode('"' + letter + "\": " + letterCounts[letter] + ", ");
    span.appendChild(textContent); 
    document.getElementById("lettersDiv").appendChild(span);

}

for (let i = 0; i < words.length; i++){
    let currentWord = words[i]; 
    if (wordsCount[currentWord] === undefined){
        wordsCount[currentWord] = 1; 
    } else {
        wordsCount[currentWord]++; 
    }
}

for(words in wordsCount){
    let spanWords = document.createElement("span"); 
    let wordsContent = document.createTextNode('"' + words + "\": " + wordsCount[words] + ", ");
    spanWords.appendChild(wordsContent); 
    document.getElementById("wodrdsDiv").appendChild(spanWords); 
}