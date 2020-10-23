export class Card {
    /**
     * @type {string}
     */
    #name;
    /**
     * @type {number}
     */
    #points;
    /**
     * @type {string}
     */
    #suite;

    /**
     * Creates a Card
     * @param {string} name
     * @param {number} points points assigned to each card
     * @param {string} suite
     */
    constructor(name, points, suite) {
        this.#name = name;
        this.#points = points;
        this.#suite = suite;
    }

    /**
     * Get points of the Card
     * @return {number}
     */
    get points() {
        return this.#points;
    }

    /**
     * Get name of the Card
     * @return {string}
     */
    get name() {
        return this.#name;
    }
}
