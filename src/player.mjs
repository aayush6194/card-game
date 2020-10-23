class Player {
    /**
     * @type {string}
     */
    #name;

    /**
     * @type {Card[]}
     */
    #cards;

    /**
     * @type {number}
     */
    #points;

    constructor(name) {
        this.#name = name;
        this.#points = 0;
        this.#cards = [];
    }
    /**
     * @return {Card}
     */
    /** last element is the top of the deck */
    drawCard(deck) {
        deck.getTopCard();
    }
}
