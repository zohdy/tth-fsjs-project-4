// Global vars
let wordArray;

class Phrase {
    constructor(phrase){
        this.phrase = phrase;
    }
    addPhraseToDisplay(){
        // split string phrase into array of characters
        wordArray = [...this.phrase];
        const ul = document.querySelector('#phrase ul');
        let phraseHTML;
        // Dynamically display the phrase content on to the DOM
        for(let word in wordArray){
            if(wordArray[word].match(' ')){
                phraseHTML = `<li class="hide space">${wordArray[word]}</li>`;
            } else {
                phraseHTML = `<li class="hide letter">${wordArray[word]}</li>`;
            }
            ul.innerHTML += phraseHTML;
        }
    }
    // Returns true if 'letter' is found in the 'wordArray' otherwise false.
    static checkLetter(letter){
        return wordArray.includes(letter);
    }
    // Change the class to view it in the DOM.
    static showMatchedLetter(matchedLetter) {
        const phraseLetters = document.querySelectorAll('.letter');
        phraseLetters.forEach(phraseLetter => {
           if(matchedLetter === phraseLetter.innerHTML){
                phraseLetter.classList.replace('hide', 'show');
           }
        });
    }
}

