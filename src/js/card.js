/*
 * A playing card
 */
 class Card {
  constructor(rank, suit) {
    this.rank = rank;
    this.suit = suit;
    this.revealed = false;
  }

  render() {
    this.element = document.createElement('div');
    return this.element;
  }

  update() {
      this.element.className = `card face-${this.rank}-of-${this.suit}`;  
  }

  mount(parent) {
    parent.appendChild(this.render());
    this.update();
  }

  unmount(parent) {
    parent.removeChild(this.render());
  }
} 