
let cards = [];
let sum = 0
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");

let player = {
    name: "Rithvik",
    chips: 200
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips;


function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1; 
    if ( randomNumber > 10 ){
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber;
    }
}


function startGame() {
    isAlive = true;
    firstCard = getRandomCard();
    secondCard = getRandomCard();
    cards.push(firstCard);
    cards.push(secondCard);
    sum = firstCard + secondCard;
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i<cards.length; i+=1){
        cardsEl.textContent += cards[i] + " ";
    }

    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?😁";
    } else if (sum === 21) {
        message = "wohooo! You've got blackjack 😂";
        hasBlackJack = true;
    } else {
        message = "You're out of the game! 😈";
        isAlive = false;
    }
    messageEl.textContent = message;

}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        console.log("Drawing a new card from the deck!");
        let cardVar = getRandomCard();
        cards.push(cardVar);
        sum += cardVar;
        console.log("The cards are " + cards);
        console.log("The sum is ", sum);
        renderGame()
    }
    else if (hasBlackJack === true) {
        messageEl.textContent = "Cannot play further as you have blackjack"
    }
    else {
        messageEl.textContent = "You lose! :("
    }
}

function restartGame() {
    cards = [];
    sum = 0;
    messageEl.textContent = "Restarting..";
    sumEl.textContent = "Sum :";
    cardsEl.textContent = "Cards: ";
    renderGame();
}
 



