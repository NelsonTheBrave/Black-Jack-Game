let player = {
  name: 'Erik',
  chips: 25
}


let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": SEK " + player.chips

messageEl = document.getElementById("message-el")
sumEl = document.getElementById("sum-el")
cardsEl = document.getElementById("cards-el")

function getRandomCard() {
  let randomCard = Math.floor(Math.random() * 13)+1
  if (randomCard === 1) {
    return 11
  } else if (randomCard > 10) {
    return 10
  } else { 
    return randomCard
  }
}

function startGame() {
  isAlive = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard 

  renderGame()
}




function renderGame() {
  cardsEl.textContent = "Cards: "
  for (i=0; i<cards.length; i++) {
    cardsEl.textContent += cards[i] + " - "
  }
  sumEl.textContent = 'Sum: ' + sum
  if (sum <= 20) {
    message = "Draw a new card?"
  } else if (sum === 21) {
    message = "Here's for a Blackjack!";
    hasBlackJack = true
  } else {
    message = "You're out! Strikeeeey!";
    isAlive = false
  }
  messageEl.textContent = message
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
  let thirdCard = getRandomCard()
  sum += thirdCard
  cards.push(thirdCard)
  renderGame()
}}






let emojis = ["🙂", "🙃", "🙂", "🙂", "🙃"]
let appleShelf = []
let orangeShelf = []


for (i=0; i<emojis.length; i++) {
  if (emojis[i] === "🙂") {
    appleShelf.push("🙂")
  } else if (emojis[1] === "🙃") {
    orangeShelf.push("🙃")
  }
  
}

console.log(appleShelf)
console.log(orangeShelf)