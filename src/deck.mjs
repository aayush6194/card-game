import { Card } from './card.mjs';
import { SUITES, CARDS } from './constants.mjs';

export class Deck {
    /**
     * @type {Card[]}
     */
    #cards;

    constructor() {
        this.createDeck();
        this.shuffleDeck();
    }
    /**
     * Create Deck
     */
    createDeck() {
        this.#cards = SUITES.map((suite) =>
            Object.entries(CARDS).map(
                ([name, points]) => new Card(name, points, suite)
            )
        );
    }

    /**
     * Create Deck
     */
    shuffleDeck() {
        for (let i = this.#cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.#cards[i], this.#cards[j]] = [this.#cards[j], this.#cards[i]];
        }
    }

    getTopCard() {}
}
