class Game {
    constructor(phrases, missed){
        this.phrases = phrases;
        this.missed = missed;
        this.startGame();
    }
    // Inspect the user-selected letter and call methods accordingly.
    handleInteraction(letter){
        let letterMatched = Phrase.checkLetter(letter);
        if(letterMatched){
            Phrase.showMatchedLetter(letter);
            Game.checkForWin();
        } else {
            this.missed++;
            this.removeLife();
        }
    }
    // get a random phrase from the phrases array and init a new Phrase object with the random phrase
    getRandomPhrase(){
        const gamePhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)]
            .toLowerCase();
        new Phrase(gamePhrase).addPhraseToDisplay();
    }

    // Remove the hearts(life) and call game-over() if there aren't any hearts left
    removeLife() {
        const tries = document.querySelectorAll('.tries');
        if(this.missed === tries.length){
            Game.gameOver('LOSE')
        } else {
            tries[this.missed].style.display = 'none';
        }
    }

    // Called by the constructor to automatically start up a sequence
    startGame(){
        this.getRandomPhrase();
    }

    // To check for a win, compare the number of 'show' classes with the number of 'letter' classes.
    static checkForWin() {
        const phraseLength = document.querySelectorAll('.letter').length;
        const numOfMatches = document.querySelectorAll('.letter.show').length;
        if(phraseLength === numOfMatches){
            Game.gameOver('WIN')
        }
    }

    // Set overlay according to winner status.
    static gameOver(winnerStatus){
        const overlay = document.querySelector('#overlay');
        const gameOverMsg = document.querySelector('#game-over-message');
        if(winnerStatus === 'WIN'){
            overlay.classList.replace('start', 'win');
            gameOverMsg.innerHTML = 'You Win!'
        } else {
            overlay.classList.replace('start', 'lose');
            gameOverMsg.innerHTML = 'Better luck next time...'
        }
        overlay.style.display = 'inherit';
    }
}