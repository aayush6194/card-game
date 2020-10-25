import { SUITES } from './constants.mjs';
import { add, prop } from './helpers.mjs';

export class Player {
    /**
     * @type {string}
     */
    name = '';

    /**
     * @type {Object<string, Card>}
     */
    #cards = SUITES.reduce((acc, suite) => {
        acc[suite] = [];
        return acc;
    }, {});

    constructor(name) {
        this.name = name;
    }

    /**
     * last element is the top of the deck
     * @param {Card} card
     */
    addToHand(card) {
        this.#cards[card.suite].push(card);
    }

    [Symbol.toPrimitive](hint) {
        switch (hint) {
            case 'number':
                return Object.values(this.#cards)
                    .flat()
                    .map(prop('points'))
                    .reduce(add, 0);
            default:
                return `${this.name}'s hand: ${+this} points! [${SUITES.flatMap(
                    (suite) => this.#cards[suite]
                ).join(', ')}]`;
        }
    }

    [Symbol.iterator]() {
        return this.#cards.values();
    }
}
