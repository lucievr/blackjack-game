/*
 * A playing card
 */

class Card {
  constructor(deck, rank, suit) {
    this.deck = deck;
    this.rank = rank;
    this.suit = suit;
  }

  render() {
    this.element = document.createElement("div");
    this.element.className = "card";
    return this.element;
  }

  update() {
    function randint(min, max) {
      let i = Math.round(min + Math.random() * (max - min));
      return i;
    }

    randit(0 , 51);

    this.element.className = `face-${this.deck.cards[i].rank}-of-${
      this.deck.cards[i].suit
    }`;
  }

  mount(parent) {
    parent.appendChild(this.render());
    // this.update();
  }

  unmount(parent) {
    parent.removeChild(this.render());
  }
}
