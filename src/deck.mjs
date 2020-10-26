import { createDeck } from './card.mjs';

export class Deck {
    /**
     * @member {Card[]}
     */
    #cards = createDeck();

    /**
     * @return {Card}
     */
    drawCard() {
        return this.#cards.pop();
    }

    /**
     * Check if the deck is empty
     * @return {boolean} returns true if the deck is empty. 
     */
    isEmpty() {
        return this.#cards.length === 0;
    }
}