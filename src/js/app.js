document.addEventListener('DOMContentLoaded', () => {
  // Create and shuffle a new deck of cards
  const deck = new Deck();
  deck.shuffle();
  console.log(deck);
});