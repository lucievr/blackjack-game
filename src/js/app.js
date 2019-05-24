document.addEventListener('DOMContentLoaded', () => {
  // Create and shuffle a new deck of cards

  const app = document.querySelector('#app');
  const game = new Game();
  game.mount(app);

  const cards = document.querySelector('.cards');

  const card1 = new Card();
  card1.mount(cards);
  
  const deck = new Deck();
  deck.shuffle();
  console.log(deck);

});