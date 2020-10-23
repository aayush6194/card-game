class Card {
  #name;
  #points;

  constructor(name, points) {
    this.#name = name;
    this.point = points;
  }

  getPoints() {
    return this.#points;
  }
  getName() {
    return this.#name;
  }
}

class Deck {
  #cards;
  constructor() {
    this.createDeck();
  }

  createDeck() {

  }
  getTopCard() {
  
  }
}

class Player {
  #name;
  #cards;
  #points;

  constructor(name) {
    this.#name = name;
    this.#points = 0;
    this.#cards = [];
  }

  // last element is the top of the deck
  drawCard(deck) {
    deck.getTopCard();
  }
}
