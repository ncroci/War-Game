//war game with 3 classes and a function
//a card class holds the pips, suits, and what the value of each card is. The describe function is used for testing
//the deck class is used for an array, and has functions for filling the deck, shuffling it, and dealing the cards to two players
//the player class is used to hold the player's names, their point totals, and what their hands are 

class Card {
    static pips = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"];
    static values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]; //these are the numbers used in the comparisons for who wins
    static suits = ["Clubs", "Diamonds", "Hearts", "Spades"];

    constructor(pip, value, suit) {
        this.pip = pip;
        this.value = value; 
        this.suit = suit;
    }

    describeCard() {
        //this is the function I used for the unit testing.
        return Card.pips[this.pip] + " of " + Card.suits[this.suit];
    }
}

class Deck {

    constructor() {
        this.cards = [];
    }

    fillDeck() {
        //nested for loops that iterates through each number, applies the four suits, and pushes them into deck array one by one
        for (let i = 0; i < Card.pips.length; i++) {
            for (let j = 0; j < Card.suits.length; j++) {
                this.cards.push(new Card(Card.pips[i], Card.values[i], Card.suits[j]));
            }
        }
    }

    shuffleDeck() {
        //shuffle swaps two random indexes generated using math.floor(math.random) by using a temporary placeholder variable
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
        //alternates each card in the deck nto the two players hands
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
    //used a prompt so the two players could have names
    let player1 = new Player(prompt('Who is Player 1?'));
    let player2 = new Player(prompt('Who is Player 2?'));

    //this creates the deck, shuffles it, then deals to the two players
    let d = new Deck();
    d.fillDeck();
    d.shuffleDeck();
    d.dealCards(player1, player2);

    //this loop is for all the turns in the game
    //simple if statements for which player gets a point each round
    //I went ahead and logged to the console each round so we could see how the cards were dealt
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

    //displays the total points
    alert(`
    ${player1.name}'s Score is: ${player1.points}
    ${player2.name}'s Score is: ${player2.points}
    `);

    //determines a winner or if there was a tie
    if (player1.points > player2.points) {
        alert(player1.name + " has won!");
    } else if (player1.points < player2.points) {
        alert(player2.name + " has won!");
    } else {
        alert("It's a tie!");
    }
}

//calling the function to start the game
war();
