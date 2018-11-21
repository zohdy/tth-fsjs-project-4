const startBtn = document.querySelector('#btn__reset');
const overlay = document.querySelector('#overlay');
const qwerty = document.querySelector('#qwerty');
let game;
const phrases = [
    'Sweet Dreams',
    'Work for it',
    'Now or never',
    'Go somewhere',
    'Be nice',
    'Abracadabra',
    'Hello there',
    'Friends Forever',
    'Master Blaster',
    'How are you'
];

// Remove the overlay when clicking the 'start game' button and init a new game object
startBtn.addEventListener('click', () => {
    resetDisplay();
    game = new Game(phrases , 0);
    startBtn.innerHTML = 'Play again?';
});

// keypress event listener
window.addEventListener('keypress', (e) => {
    const keyPressed = e.key;
    markButton(keyPressed);
});

// Get the clicked letter from the in-game keyboard
qwerty.addEventListener('click', (e) => {
    const clickedKey = e.target;
    if(clickedKey.className === 'key'){
        markButton(clickedKey.innerHTML);
    }
});

// Use the clicked key as param and re-render in-game keyboard after each click
const markButton = (clickedKey) => {
    document.querySelectorAll('.key').forEach(key => {
        if( key.innerHTML === clickedKey){
            key.disabled = true;
            key.classList.add('chosen');
        }
    });
    game.handleInteraction(clickedKey);
};

resetDisplay = () => {
    // Reset phrase
    const ul = document.querySelector('#phrase ul');
    while(ul.firstChild){
        ul.removeChild(ul.firstChild);
    }

    // Reset keyboard
    document.querySelectorAll('.key').forEach(key => {
        key.classList.remove('chosen');
        key.disabled = false;
    });

    // Reset life-hearts
    document.querySelectorAll('.tries').forEach(listItem => listItem.style.display = 'inline-block');

    // Hide overlay to show game view
    overlay.className = 'start';
    overlay.style.display = 'none';
};



