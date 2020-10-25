import { Game } from './game.mjs';
import { random } from './helpers.mjs';

function main() {
    const numPlayers = random(2, 6);
    const game = new Game(numPlayers);
    game.playGame();
    game.printScoreBoard();
}

main();
