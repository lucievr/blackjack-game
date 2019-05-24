
class Game {
    constructor() {
    }
  
    render() {
      this.element = document.createElement('div');
      this.element.className = 'game';
      this.element.innerHTML = `
      <div id="dealer-hand" class="hand">
      <div class="score">Score: ?</div>
      <div class="cards">
        <div class="card face-10-of-hearts"></div>
        <div class="card face-revers"></div>
      </div>
    </div>
    
    <div class="table"></div>
  
    <div id="player-hand" class="hand">
      <div class="cards">

      </div>
      <div class="score">Score: 0</div>
      <div class="hand-controls">
        <button class="js-hit">HIT</button>
        <button class="js-stand">STAND</button>
      </div>
    </div>
      `
      return this.element;
    }
  
    mount(parent) {
      parent.appendChild(this.render());
    }
  }