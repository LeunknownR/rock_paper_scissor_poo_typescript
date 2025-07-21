import GameDrawManager from "./GameDrawManager";
import GameIA from "./users/GameIA";
import GamePlayer from "./users/GamePlayer";
import GameScreen from "./utils/GameScreen";

type GameStatsArgs = {
	player: GamePlayer,
	ia: GameIA,
	drawManager: GameDrawManager,
	lastRound: number,
	totalRounds: number,
};
export default class GameStats {
	constructor(private readonly args: GameStatsArgs) {}
	show(): void {
		const { player, ia } = this.args;
		this.showHeader();
		if (player.victories > ia.victories)
			this.showPlayerVictory();
		else if (player.victories < ia.victories)
			this.showPlayerDefeat();
		else this.showDraw();
	}
	private showHeader(): void {
		const { player, ia, drawManager, lastRound, totalRounds } = this.args;
		GameScreen.print(`\n>> Resultados (${lastRound} / ${totalRounds} rondas): 😁 x${player.victories} | 🤖 x${ia.victories} | 🤷 x${drawManager.drawQuantity}`);
	}
	private showPlayerVictory(): void {
		GameScreen.print(">> ¡Has conseguido ganar el juego 🥳🚀💥🏖️👽!");
	}
	private showPlayerDefeat(): void {
		GameScreen.print("¡Lo siento! Perdiste el juego 😭😫😓😭😖");
	}
	private showDraw(): void {
		GameScreen.print(">> ¡Woooow! Fue un empate, ¡Increíble! 🥴😵‍💫🥴😵‍💫🥴");
	}
}