/**
 * @readonly
 */
export const SUITES = ['Heart', 'Diamond', 'Club', 'Spade'];
/**
 * Creates an object with key as card name and value as points
 * @readonly
 */
export const CARDS = (() => {
    const cardsPoint = { Ace: 15 };
    const facedCards = ['Jack', 'Queen', 'King'];
    const numberedCards = Array(9).fill(9);

    facedCards.map((card) => {
        cardsPoint[card] = 10;
    });

    numberedCards.map((card) => {
        cardsPoint[card + 2] = 5;
    });
    return cardsPoint;
})();
