class Dealer {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  countScore(rank) {
    if(rank === 'ace') {
        this.score += 11
    } else {
        this.score += parseInt(rank) || 10;
    }
    return this.score;
  }
  
}
