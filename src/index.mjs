import { Game } from './game.mjs';

function main() {
    const game = new Game(4);
    game.playGame();
    game.printScoreBoard();
}

main();
