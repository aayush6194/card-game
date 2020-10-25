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
}
