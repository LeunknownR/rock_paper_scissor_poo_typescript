import { getRandomPositiveInteger } from "../utils/numbers";
import GameScreen from "../utils/GameScreen";
import GameSelection, { ALL_GAME_SELECTIONS, GAME_SELECTION_TRANSCRIPTIONS } from "../game-selection/GameSelection";

export default class GameIA {
	private _victories: number;
	constructor() {
		this._victories = 0;
	}
	get victories(): number {
		return this._victories;
	}
	win(): void {
		this._victories++;
		GameScreen.print(">> +1 IA 🤖");
	}
	play(): GameSelection {
		const indexSelection = getRandomPositiveInteger(ALL_GAME_SELECTIONS.length);
		const selection = ALL_GAME_SELECTIONS[indexSelection];
		GameScreen.print("🤖 IA: " + GAME_SELECTION_TRANSCRIPTIONS[selection]);
		return selection;
	}
}