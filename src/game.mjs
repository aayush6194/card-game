import { Deck } from "./deck.mjs";
import { prop } from "./helpers.mjs";
import { Player } from "./player.mjs";

export class Game {
  /**
   * @member {Player[]}
   */
  #players;
  /**
   * @member {Deck}
   */
  #deck;
   /**
   * @member {number}
   */
  #rounds;

  constructor(totalPlayers, rounds = 5) {
    this.#deck = new Deck();
    this.#rounds = rounds;

    if (totalPlayers < 2 || totalPlayers > 6) {
      throw new Error(`Invalid Number of Players: ${totalPlayers}`);
    }
    this.#players = Array(totalPlayers)
      .fill(0)
      .map((_, i) => new Player(`Player ${i + 1}`));
  }

  /**
   * Simulates a round in a game where each player draws a top card.
   * @return {void}
   */
  playRound() {
    for (const player of this.#players) {
      if (this.#deck.isEmpty()) return;
      const card = this.#deck.drawCard();
      player.addToHand(card);
    }
  }

  /**
   *  Simulates a game
   * @return {void}
   */
  playGame() {
    Array(this.#rounds)
      .fill(0)
      .forEach((_) => this.playRound());
  }

  /**
   * Print the current player cards to the console.
   * @return {void}
   */
  printScoreBoard() {
    // Interate Score and Cards of each player
    this.#players.forEach((player) => console.log(`${player}`));

    // Calculate winners and points
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

    // More than 1 winners.
    if (winners.length > 1) {
      console.log(
        `It's a tie between ${winners
          .map(prop("name"))
          .join(", ")} with ${points} points each!`
      );
    } else {
      console.log(`The winner is ${winners[0].name} with ${points} points!`);
    }
  }
}
