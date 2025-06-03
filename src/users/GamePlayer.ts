import GameSelection from "../GameSelection";
import GameScreen from "../utils/GameScreen";

export default class GamePlayer {
	private _victories: number;
	constructor() {
		this._victories = 0;
	}
	win(): void {
		this._victories++;
		GameScreen.display(">> +1 Jugador 🥳");
	}
	get victories(): number {
		return this._victories;
	}
	play(): GameSelection {
		while (true) {
			const selection = GameScreen.read(`>> Haz tu jugada (${GameSelection.ALL_SELECTIONS.join(", ")}): `);
			if (GameSelection.ALL_SELECTIONS.includes(selection.toUpperCase()))
				return new GameSelection(selection);
			GameScreen.display("x La selección es inválida 🤬 x");
		}
	}
}