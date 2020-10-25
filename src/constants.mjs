export const SUITES = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
/**
 * Creates an object with key as card name and value as points 
 * eg : { "ace": 15, "1": 5, ...}
 */
export const CARDS = (() => {
    const cardsPoint = { ace: 15 };
    const facedCards = ['jacks', 'queen', 'king'];
    const numberedCards = Array(9).fill(9); // Array with number 0 to 8; needs offset of 2

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
