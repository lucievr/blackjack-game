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
    cardDealer1.flip();
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

    const dealerScore = document.querySelector('#dealer-hand .score');
    
    const playerScore = document.querySelector('#player-hand .score');
    playerScore.textContent = `Score: ${player1.score}`;

    const btnHit = document.querySelector('.js-hit');
    const btnStand = document.querySelector('.js-stand');

    btnHit.addEventListener('click', () => {
        const cardPlayer3 = deck.hit();
        cardPlayer3.mount(playerHand);
        player1.countScore(cardPlayer3.rank);
        playerScore.textContent = `Score: ${player1.score}`;

        if (player1.score >= 21) {
            dealerScore.textContent = `Score: ${dealer1.score}`;
            cardDealer1.flip();
            cardDealer1.update();
            if (player1.score = 21) {
                setTimeout(() => {
                    alert('The player has won!');
                }, 1500);
            }
            if (player1.score > 21) {
                setTimeout(() => {
                    alert('The dealer has won!');
                }, 1500);
            }   
        }
    });

    btnStand.addEventListener('click', () => {

        dealerScore.textContent = `Score: ${dealer1.score}`;
        cardDealer1.flip();
        cardDealer1.update();
        if (dealer1.score > 21) {
            setTimeout(() => {
                alert('The player has won!');
            }, 1500);
        }  
        if (dealer1.score = 21) {
            setTimeout(() => {
                alert('The dealer has won!');
            }, 1500);
        }   
        if (dealer1.score < 17) {
            const cardDealer3 = deck.hit();
            cardDealer3.mount(dealerHand);
            dealer1.countScore(cardDealer3.rank);
            if (dealer1.score < 17) {
                const cardDealer4 = deck.hit();
                cardDealer4.mount(dealerHand); 
                dealer1.countScore(cardDealer4.rank);
            }
        }
    }
    )
});
