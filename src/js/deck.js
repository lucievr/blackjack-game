/*
 * Generates a random integer from min to max.
 */
function randint(min, max) {
  return Math.round(min + Math.random() * (max - min));
}

/*
 * The deck of cards to deal from.
 */
class Deck {
  constructor() {
    this.cards = [
      new Card('ace', 'clubs'),
      new Card('2', 'clubs'),
      new Card('3', 'clubs'),
      new Card('4', 'clubs'),
      new Card('5', 'clubs'),
      new Card('6', 'clubs'),
      new Card('7', 'clubs'),
      new Card('8', 'clubs'),
      new Card('9', 'clubs'),
      new Card('10', 'clubs'),
      new Card('jack', 'clubs'),
      new Card('queen', 'clubs'),
      new Card('king', 'clubs'),
      new Card('ace', 'hearts'),
      new Card('2', 'hearts'),
      new Card('3', 'hearts'),
      new Card('4', 'hearts'),
      new Card('5', 'hearts'),
      new Card('6', 'hearts'),
      new Card('7', 'hearts'),
      new Card('8', 'hearts'),
      new Card('9', 'hearts'),
      new Card('10', 'hearts'),
      new Card('jack', 'hearts'),
      new Card('queen', 'hearts'),
      new Card('king', 'hearts'),
      new Card('ace', 'spades'),
      new Card('2', 'spades'),
      new Card('3', 'spades'),
      new Card('4', 'spades'),
      new Card('5', 'spades'),
      new Card('6', 'spades'),
      new Card('7', 'spades'),
      new Card('8', 'spades'),
      new Card('9', 'spades'),
      new Card('10', 'spades'),
      new Card('jack', 'spades'),
      new Card('queen', 'spades'),
      new Card('king', 'spades'),
      new Card('ace', 'diamonds'),
      new Card('2', 'diamonds'),
      new Card('3', 'diamonds'),
      new Card('4', 'diamonds'),
      new Card('5', 'diamonds'),
      new Card('6', 'diamonds'),
      new Card('7', 'diamonds'),
      new Card('8', 'diamonds'),
      new Card('9', 'diamonds'),
      new Card('10', 'diamonds'),
      new Card('jack', 'diamonds'),
      new Card('queen', 'diamonds'),
      new Card('king', 'diamonds'),
    ]
  }

  /*
   * Fisher–Yates shuffle of the cards in the deck.
   */
  shuffle() {
    for(let i = 0; i < this.cards.length - 1; i++) {
      let j = randint(i, this.cards.length - 1);
      let swap = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = swap;
    }
  }
}