import { compose, shuffle } from './helpers.mjs';
import { SUITES, SUITES_SYMBOLS, CARDS } from './constants.mjs';

const Card = (suite) => (name, points) =>
    compose(
        Object.seal,
        Object.freeze
    )({
        /**
         * @type {string}
         */
        name,
        /**
         * @type {number}
         */
        points,
        /**
         * @type {string}
         */
        suite,
        equals: (other) =>
            Object.is(name, other.name) && Object.is(suite, other.suite),
        toString: () => `${name} (${SUITES_SYMBOLS[suite]})`,
    });

export const createDeck = () => {
    /**
     * @type {Card[]}
     */
    const deck = SUITES.flatMap((suite) => {
        const card = Card(suite);
        return Object.entries(CARDS).map(([name, points]) =>
            card(name, points)
        );
    });
    shuffle(deck);
    return deck;
};
