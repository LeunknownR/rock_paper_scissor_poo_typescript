import GameScreen from "../utils/GameScreen";
import GameSelection, { ALL_GAME_SELECTIONS, GAME_SELECTION_TRANSCRIPTIONS } from "../game-selection/GameSelection";

export default class GamePlayer {
	private _victories: number;
	constructor() {
		this._victories = 0;
	}
	get victories(): number {
		return this._victories;
	}
	win(): void {
		this._victories++;
		GameScreen.print(">> +1 Jugador 🥳");
	}
	private getMenu(): string {
		let menu = "Haz tu jugada ⚔️:\n";
		menu += ALL_GAME_SELECTIONS.map(
			selection =>
				`${selection}) ${GAME_SELECTION_TRANSCRIPTIONS[selection]}`
		).join("\n");
		return menu;
	}
	play(): GameSelection {
		while (true) {
			const menu = this.getMenu();
			const input = GameScreen.read(menu);
			const selection = parseInt(input) as GameSelection;
			if (ALL_GAME_SELECTIONS.includes(selection)) return selection;
			GameScreen.print("x La selección es inválida 🤬 x\n");
		}
	}
}
