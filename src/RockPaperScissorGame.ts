/*
REQUERIMIENTOS:
Crear un juego de piedra, papel o tijera, que dada una cantidad de partidas, se juegue con la computadora esa cantidad de veces y que al final muestre si fue Victoria, Derrota o Empate, según corresponda.
*/

import GameInputRoundQuantity from "./game-input/GameInputRoundQuantity";
import GameIA from "./users/GameIA";
import GamePlayer from "./users/GamePlayer";
import GameScreen from "./utils/GameScreen";
import GameRoundManager from "./GameRoundManager";
import GameDrawManager from "./GameDrawManager";
import GameStats from "./GameStats";

export default class RockPaperScissorGame {
	private showTitle(): void {
		GameScreen.print("*** ¡Juguemos Piedra, Papel o Tijera! 🤖 ***");
	}
	run(): void {
		this.showTitle();
		const roundQuantity = new GameInputRoundQuantity();
		const player = new GamePlayer();
		const ia = new GameIA();
		const drawManager = new GameDrawManager();
		const gameRoundManager = new GameRoundManager(player, ia, drawManager);
		const lastRound = this.play(roundQuantity, gameRoundManager);
		new GameStats({
			player,
			ia,
			drawManager,
			lastRound,
			totalRounds: roundQuantity.value,
		}).show();
	}
	private play(
		roundQuantity: GameInputRoundQuantity,
		gameRoundManager: GameRoundManager
	): number {
		let round: number = 0;
		while (round < roundQuantity.value) {
			if (gameRoundManager.isThereADefinitiveResult(roundQuantity.value))
				break;
			round++;
			gameRoundManager.playRound(round);
		}
		return round;
	}
}
