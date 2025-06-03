import GameInput from "./game-input/GameInput";
import GameIA from "./users/GameIA";
import GamePlayer from "./users/GamePlayer";
import GameScreen from "./utils/GameScreen";

export default class RockPaperScissorGame {
	private showTitle(): void {
		GameScreen.display("*** ¡Juguemos Piedra, Papel o Tijera! 🤖 ***");
	}
	run(): void {
		this.showTitle();
		const gameInput = new GameInput();
		const player = new GamePlayer();
		const ia = new GameIA();
		this.play(player, ia);
	}
	private play(player: GamePlayer, ia: GameIA): void {
		const playerSelection = player.play();
		const iaSelection = ia.play();
		if (playerSelection.haveWon(iaSelection))
			player.win();
		else if (iaSelection.haveWon(playerSelection))
			ia.win();
		else this.showGameDraw();
	}
	private showGameDraw(): void {
		GameScreen.display("¡¿Qué pasó aquí?! 😱😱😱");
	}
}