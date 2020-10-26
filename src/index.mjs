import { Game } from './game.mjs';
import { random } from './helpers.mjs';

function main() {
    try {
        // Random number of players (2-6)
        const numPlayers = random(2, 6);
        const rounds = 5;

        // Initialize Game class with radomized numPlayers
        const game = new Game(numPlayers, rounds);

        game.playGame();
        game.printScoreBoard();
    } catch (e) {
        console.log(e)
    }
}

main();