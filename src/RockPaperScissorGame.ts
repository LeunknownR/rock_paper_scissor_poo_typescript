/*
REQUERIMIENTOS:
Crear un juego de piedra, papel o tijera, que dada una cantidad de partidas, se juegue con la computadora esa cantidad de veces y que al final muestre si fue Victoria, Derrota o Empate, según corresponda.
*/

import GameInputRoundQuantity from "./game-input/GameInputRoundQuantity";
import GameIA from "./users/GameIA";
import GamePlayer from "./users/GamePlayer";
import GameSelectionEvaluator from "./users/GameSelectionEvaluator";
import GameSelectionEvaluatorResult from "./users/GameSelectionEvaluatorResult";
import GameScreen from "./utils/GameScreen";

export default class RockPaperScissorGame {
	private showTitle(): void {
		GameScreen.print("*** ¡Juguemos Piedra, Papel o Tijera! 🤖 ***");
	}
	run(): void {
		this.showTitle();
		const roundQuantity = new GameInputRoundQuantity();
		const player = new GamePlayer();
		const ia = new GameIA();
		this.play(player, ia);
	}
	private play(player: GamePlayer, ia: GameIA): void {
		const playerSelection = player.play();
		const iaSelection = ia.play();
		const result = GameSelectionEvaluator.check(playerSelection, iaSelection)
		if (result === GameSelectionEvaluatorResult.Player) player.win();
		else if (result === GameSelectionEvaluatorResult.IA) ia.win();
		else this.showGameDraw();
	}
	private showGameDraw(): void {
		GameScreen.print("¿Qué pasó aquí? ¡Fue un empate! 😱😱😱");
	}
}