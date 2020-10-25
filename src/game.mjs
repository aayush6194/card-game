import { Deck } from './deck.mjs';
import { prop } from './helpers.mjs';
import { Player } from './player.mjs';

export class Game {
    /**
     * @member {Player[]}
     */
    #players;
    /**
     * @member {Deck}
     */
    #deck;

    constructor(totalPlayers) {
        this.#deck = new Deck();
        this.#players = Array(totalPlayers)
            .fill(0)
            .map((_, i) => new Player(`Player ${i + 1}`));
    }

    /**
     * @return {void}
     */
    playRound() {
        for (const player of this.#players) {
            const card = this.#deck.drawCard();
            player.addToHand(card);
        }
    }

    /**
     *
     * @return {void}
     */
    playGame() {
        Array(5)
            .fill(0)
            .forEach((_) => this.playRound());
    }

    printScoreBoard() {
        this.#players.forEach((player) => console.log(`${player}`));
        // handle ties?
        const [points, winners] = this.#players.reduce(
            ([max, players], player) => {
                const points = +player;
                if (points === max) {
                    players.push(player);
                } else if (points > max) {
                    return [points, [player]];
                }
                return [max, players];
            },
            [0, []]
        );

        if (winners.length > 1) {
            console.log(
                `It's a tie between ${winners
                    .map(prop('name'))
                    .join(', ')} with ${points} points each!`
            );
        } else {
            console.log(
                `The winner is ${winners[0].name} with ${points} points!`
            );
        }
    }
}
