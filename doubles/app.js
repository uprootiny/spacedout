const cards = [
  { front: 'Hello', back: 'Bonjour' },
  { front: 'Goodbye', back: 'Au revoir' },
  { front: 'Thank you', back: 'Merci' },
  { front: 'Please', back: 'S\'il vous plaît' },
  { front: 'Yes', back: 'Oui' },
  { front: 'No', back: 'Non' },
  { front: 'Friend', back: 'Ami(e)' },
  { front: 'Neighbor', back: 'Voisin(e)' },
  { front: 'Language', back: 'Langue' },
  { front: 'Social', back: 'Social(e)' },
  { front: 'Inadequate', back: 'Inadéquat(e)' },
  { front: 'Habit', back: 'Habitude' },
];

const cardContainer = document.querySelector('.card-container');
const cardFront = document.querySelector('.card-front');
const cardBack = document.querySelector('.card-back');
const nextButton = document.querySelector('.next-button');
const flipButton = document.querySelector('.flip-button');

let currentCardIndex = 0;
let isFlipped = false;

function flipCard() {
  isFlipped = !isFlipped;
  if (isFlipped) {
    cardFront.style.display = 'none';
    cardBack.style.display = 'block';
  } else {
    cardBack.style.display = 'none';
    cardFront.style.display = 'block';
  }
}

function showNextCard() {
  isFlipped = false;
  cardBack.style.display = 'none';
  cardFront.style.display = 'block';

  currentCardIndex++;
  if (currentCardIndex >= cards.length) {
    currentCardIndex = 0;
  }

  cardFront.textContent = cards[currentCardIndex].front;
  cardBack.textContent = cards[currentCardIndex].back;
}

flipButton.addEventListener('click', flipCard);
nextButton.addEventListener('click', showNextCard);

// Initialize the first card
showNextCard();
