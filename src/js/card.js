/*
 * A playing card
 */
class Card {
  constructor(rank, suit) {
    this.rank = rank;
    this.suit = suit;
  }

  render() {
    this.element = document.createElement('div');
    this.element.className = 'card';
    return this.element;
  }

  update() {
    this.element.textContent = `${this.name}: 0`;
    this.element.style.backgroundImage = `url(img/pac${this.gender}-active-${this.skinTone}.png)`;
    this.element.style.left = this.pacX * TILE_SIZE + 'px';
    this.element.style.top = this.pacY * TILE_SIZE + 'px';

    
  }

  mount(parent) {
    parent.appendChild(this.render());
    this.update();
  }
} 