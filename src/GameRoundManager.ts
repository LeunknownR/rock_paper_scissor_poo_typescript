import GameSelectionEvaluator from "./game-selection/GameSelectionEvaluator";
import GameSelectionEvaluatorResult from "./game-selection/GameSelectionEvaluatorResult";
import GameDrawManager from "./GameDrawManager";
import GameIA from "./users/GameIA";
import GamePlayer from "./users/GamePlayer";
import GameScreen from "./utils/GameScreen";

export default class GameRoundManager {
	constructor(
		private readonly player: GamePlayer,
		private readonly ia: GameIA,
		private readonly drawManager: GameDrawManager
	) {}
	playRound(round: number): void {
		this.showHeader(round);
		const playerSelection = this.player.play();
		const iaSelection = this.ia.play();
		const result = GameSelectionEvaluator.check(
			playerSelection,
			iaSelection
		);
		if (result === GameSelectionEvaluatorResult.Player) this.player.win();
		else if (result === GameSelectionEvaluatorResult.IA) this.ia.win();
		else this.drawManager.draw();
	}
	isThereADefinitiveResult(rounds: number): boolean {
		const { player, ia, drawManager } = this;
		const thresholdRounds = rounds / 2;
		const thereIsAResult =
			player.victories > thresholdRounds ||
			ia.victories > thresholdRounds ||
			drawManager.drawQuantity > thresholdRounds;
		if (thereIsAResult) {
			GameScreen.print(
				"\n>> ¡Oh! Tenemos un resultado prematuro 😱😱😱😱😱"
			);
			return true;
		}
		return false;
	}
	private showHeader(round: number): void {
		GameScreen.print(`\n>> Ronda ${round}\n`);
	}
}
