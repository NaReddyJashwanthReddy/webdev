let cards = [];
let gameActive = false;
let gameOver = false;

let cardsEl = document.getElementById("cards");
let sumEl = document.getElementById("sum");
let messageEl = document.getElementById("message");
let hitBtn = document.getElementById("hitBtn");
let standBtn = document.getElementById("standBtn");

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    return randomNumber;
}

function getString(cardsArray) {
    let string = "";
    for(let i = 0; i < cardsArray.length; i++) {
        let card = cardsArray[i];
        if (card === 1) {
            string += "A" + " ";
        } else if(card === 11) {
            string += "J" + " ";
        } else if(card === 12) {
            string += "Q" + " ";
        } else if(card === 13) {
            string += "K" + " ";
        } else {
            string += card + " ";
        }
    }
    return string;
}

function getSum(cardsArray) {
    let sum = 0;
    let aces = 0;
    
    // Calculate sum with Aces as 11
    for (let i = 0; i < cardsArray.length; i++) {
        let cardValue = cardsArray[i];
        
        if (cardValue === 1) {
            aces++;
            sum += 11;
        } else if (cardValue === 11 || cardValue === 12 || cardValue === 13) {
            sum += 10;
        } else {
            sum += cardValue;
        }
    }
    
    // Adjust for Aces if sum exceeds 21
    while (sum > 21 && aces > 0) {
        sum -= 10; // Convert an Ace from 11 to 1
        aces--;
    }
    
    return sum;
}

function updateDisplay() {
    let getCardString = getString(cards);
    cardsEl.textContent = getCardString || "—";
    let totalSum = getSum(cards);
    sumEl.textContent = totalSum;
}

function startGame() {
    if (gameActive || cards.length > 0) return;
    
    cards = [];
    gameActive = true;
    gameOver = false;
    
    // Deal two initial cards
    cards.push(getRandomCard());
    cards.push(getRandomCard());
    
    updateDisplay();
    hitBtn.disabled = false;
    standBtn.disabled = false;
    
    let totalSum = getSum(cards);
    
    if (totalSum === 21) {
        messageEl.textContent = "🎉 Blackjack! You got 21!";
        gameActive = false;
        gameOver = true;
        hitBtn.disabled = true;
        standBtn.disabled = true;
    } else if (totalSum > 21) {
        messageEl.textContent = "💥 Bust! You exceeded 21!";
        gameActive = false;
        gameOver = true;
        hitBtn.disabled = true;
        standBtn.disabled = true;
    } else {
        messageEl.textContent = "Hit or Stand?";
    }
}

function newCard() {
    if (!gameActive || gameOver) return;
    
    let card = getRandomCard();
    cards.push(card);
    
    updateDisplay();
    let totalSum = getSum(cards);
    
    if (totalSum > 21) {
        messageEl.textContent = "💥 Bust! You exceeded 21! Game Over.";
        gameActive = false;
        gameOver = true;
        hitBtn.disabled = true;
        standBtn.disabled = true;
    } else if (totalSum === 21) {
        messageEl.textContent = "🎉 Perfect 21!";
        gameActive = false;
        gameOver = true;
        hitBtn.disabled = true;
        standBtn.disabled = true;
    } else {
        messageEl.textContent = "Hit or Stand?";
    }
}

function stand() {
    if (!gameActive || gameOver) return;
    
    let finalSum = getSum(cards);
    gameActive = false;
    gameOver = true;
    hitBtn.disabled = true;
    standBtn.disabled = true;
    
    if (finalSum === 21) {
        messageEl.textContent = "🎉 You stood at 21! You Win!";
    } else if (finalSum > 16) {
        messageEl.textContent = "✅ You stood at " + finalSum + ". Good hand!";
    } else {
        messageEl.textContent = "⚠️ You stood at " + finalSum + ". Risky!";
    }
}

function resetGame() {
    cards = [];
    gameActive = false;
    gameOver = false;
    cardsEl.textContent = "—";
    sumEl.textContent = "—";
    messageEl.textContent = "Ready to play? Click 'Start Game'";
    hitBtn.disabled = true;
    standBtn.disabled = true;
}