class Card {
    static pips = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"];
    static values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
    static suits = ["Clubs", "Diamonds", "Hearts", "Spades"];

    constructor(pip, value, suit) {
        this.pip = pip;
        this.value = value;
        this.suit = suit;
    }

    describeCard() {
        return Card.pips[this.pip] + " of " + Card.suits[this.suit];
    }
}
class Deck {

    constructor() {
        this.cards = [];
    }

    fillDeck() {
        for (let i = 0; i < Card.pips.length; i++) {
            for (let j = 0; j < Card.suits.length; j++) {
                this.cards.push(new Card(Card.pips[i], Card.values[i], Card.suits[j]));
            }
        }
    }

    shuffleDeck() {
        let location1 = 0;
        let location2 = 0;
        let temporary = 0;
        for (let i = 0; i < this.cards.length; i++) {
            location1 = Math.floor((Math.random() * this.cards.length));
            location2 = Math.floor((Math.random() * this.cards.length));
            temporary = this.cards[location1];
            this.cards[location1] = this.cards[location2];
            this.cards[location2] = temporary;
        }
    }

    dealCards(p1, p2) {

        for (let i = 0; i < this.cards.length; i++) {
            if (i % 2 == 0) {
                p1.hand.push(this.cards[i]);
            } else {
                p2.hand.push(this.cards[i]);
            }
        }

    }
}
class Player {

    constructor(name) {
        this.name = name;
        this.hand = [];
        this.points = 0;
    }


}

function war() {

    let player1 = new Player(prompt('Who is Player 1?'));
    let player2 = new Player(prompt('Who is Player 2?'));

    let d = new Deck();
    d.fillDeck();
    d.shuffleDeck();
    d.dealCards(player1, player2);

    for (i = 0; i < player1.hand.length; i++) {
        if (player1.hand[i].value > player2.hand[i].value) {
            player1.points += 1;
            console.log(`ROUND ${i + 1}: ${player1.name} wins this round because ${player1.hand[i].pip} of ${player1.hand[i].suit} beats ${player2.hand[i].pip} of ${player2.hand[i].suit}`);
        } else if (player1.hand[i].value < player2.hand[i].value) {
            player2.points += 1;
            console.log(`ROUND ${i + 1}: ${player2.name} wins this round because ${player2.hand[i].pip} of ${player2.hand[i].suit} beats ${player1.hand[i].pip} of ${player1.hand[i].suit}`);
        } else {
            console.log(`ROUND ${i + 1}: ${player1.name} and ${player2.name} have tied this round because ${player1.hand[i].pip} of ${player1.hand[i].suit} and ${player2.hand[i].pip} of ${player2.hand[i].suit} are equal value.`);
        }
    }

    alert(`
    ${player1.name}'s Score is: ${player1.points}
    ${player2.name}'s Score is: ${player2.points}
    `);

    if (player1.points > player2.points) {
        alert(player1.name + " has won!");
    } else if (player1.points < player2.points) {
        alert(player2.name + " has won!");
    } else {
        alert("It's a tie!");
    }
}
war();