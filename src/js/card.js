/*
 * A playing card
 */
 class Card {
  constructor(rank, suit) {
    this.rank = rank;
    this.suit = suit;
    this.revealed = true;
  }

  render() {
    this.element = document.createElement('div');
    return this.element;
  }

  update() {
      if (this.revealed) {
        this.element.className = `card face-${this.rank}-of-${this.suit}`;  
      } else {
        this.element.className = `card face-revers`;
      }
      
  }

  flip() {
    this.revealed = !this.revealed  
  }

  mount(parent) {
    parent.appendChild(this.render());
    this.update();
  }

  unmount(parent) {
    parent.removeChild(this.render());
  }
} 