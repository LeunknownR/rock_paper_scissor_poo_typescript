import GameSelection from "../GameSelection";
import { getRandomInteger } from "../utils/numbers";
import GameScreen from "../utils/GameScreen";

export default class GameIA {
	private _victories: number;
	constructor() {
		this._victories = 0;
	}
	win(): void {
		this._victories++;
		GameScreen.display(">> +1 IA 🤖");
	}
	get victories(): number {
		return this._victories;
	}
	play(): GameSelection {
		const indexSelection = getRandomInteger(
			GameSelection.ALL_SELECTIONS.length
		);
		const selection = GameSelection.ALL_SELECTIONS[indexSelection];
		GameScreen.display("🤖 IA: " + selection);
		return new GameSelection(selection);
	}
}
