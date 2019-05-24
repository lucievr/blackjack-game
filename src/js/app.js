let revealed = false;

document.addEventListener('DOMContentLoaded', () => {
    // Create and shuffle a new deck of cards

    const app = document.querySelector('#app');
    const game = new Game();
    game.mount(app);

    const deck = new Deck();
    deck.shuffle();

    const dealerHand = document.querySelector('#dealer-hand .cards');
    const cardDealer1 = deck.hit();
    cardDealer1.mount(dealerHand);

    const cardDealer2 = deck.hit();
    cardDealer2.mount(dealerHand);

    dealer1 = new Dealer('Lucie', 0);
    dealer1.countScore(cardDealer1.rank);
    dealer1.countScore(cardDealer2.rank);
    console.log(dealer1.score);

    const playerHand = document.querySelector('#player-hand .cards');
    cardPlayer1 = deck.hit();
    cardPlayer1.mount(playerHand);

    const cardPlayer2 = deck.hit();
    cardPlayer2.mount(playerHand);

    player1 = new Player('Marijan', 0);
    player1.countScore(cardPlayer1.rank);
    player1.countScore(cardPlayer2.rank);
    console.log(player1.score);

    const btnHit = document.querySelector('.js-hit');
    const btnStand = document.querySelector('.js-stand');

    const dealerScore = document.querySelector('#dealer-hand .score');
    dealerScore.textContent = `Score: ${dealer1.score}`;

    const playerScore = document.querySelector('#player-hand .score');
    playerScore.textContent = `Score: ${player1.score}`;

    // btnHit.addEventListener('click', () => {

    // }
    // )

    // btnStand.addEventListener('click', () => {

    // }
    // )
});
