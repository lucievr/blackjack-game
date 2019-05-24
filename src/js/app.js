document.addEventListener('DOMContentLoaded', () => {
  // Create and shuffle a new deck of cards

  const app = document.querySelector('#app');
  const game = new Game();
  game.mount(app);

  const deck = new Deck();
  deck.shuffle();
  console.log(deck);

});