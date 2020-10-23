//
export const SUITES = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
/**
 * Creates an object with key as card name and value as points
 */
export const CARDS = (() => {
    const cardsPoint = { ace: 15 };
    const facedCards = ['jacks', 'queen', 'king'];
    const numberedCards = Array(9).fill(9);

    facedCards.map((card) => {
        cardsPoint[card] = 10;
    });

    numberedCards.map((card) => {
        cardsPoint[card + 2] = 5;
    });
    return cardsPoint;
})();
