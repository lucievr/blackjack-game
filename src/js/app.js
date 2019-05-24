let revealed = false;

document.addEventListener('DOMContentLoaded', () => {
  // Create and shuffle a new deck of cards

  const app = document.querySelector('#app');
  const game = new Game();
  game.mount(app);

  const deck = new Deck();
  deck.shuffle();

  const cards = document.querySelector('#player-hand .cards');
  console.log(cards);
  const card = deck.hit();
  console.log(card);
  card.mount(cards);

  const btnHit = document.querySelector('.js-hit');
  const btnStand = document.querySelector('.js-stand');

  // btnHit.addEventListener('click', () => {
   
  // }
  // )

  // btnStand.addEventListener('click', () => {

  // }
  // )

});