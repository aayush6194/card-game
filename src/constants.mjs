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

    // Assign 10 points to all the faced cards
    facedCards.map((card) => {
        cardsPoint[card] = 10;
    });

    // Assign 5 points to all the numbered cards cards
    numberedCards.map((card) => {
        // offset by 2 on [0...8] because first numbered card is 2 and last is 10.
        cardsPoint[card + 2] = 5;
    });
    return cardsPoint;
})();
