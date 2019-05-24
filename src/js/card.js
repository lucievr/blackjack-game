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
    this.element.className = `face-${this.rank}-of-${this.suit}`;
    return this.element;
  }

  update() {
    if(this.revealed === 'closed') {
      this.pacMouth = 'opened';
    } else {
      this.pacMouth = 'closed';
    }

    if(this.pacMouth === 'opened') {
      this.element.style.backgroundPositionX = '0px';
    } else {
      this.element.style.backgroundPositionX = TILE_SIZE + 'px';
    }
  }

  mount(parent) {
    parent.appendChild(this.render());
    this.update();
  }

  unmount(parent) {
    parent.removeChild(this.render());
  }
} 