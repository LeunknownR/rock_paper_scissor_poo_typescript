import { getRandomPositiveInteger } from "../utils/numbers";
import GameScreen from "../utils/GameScreen";
import GameSelection, { ALL_GAME_SELECTIONS, GAME_SELECTION_TRANSCRIPTIONS } from "./GameSelection";

export default class GameIA {
	private victories: number;
	constructor() {
		this.victories = 0;
	}
	win(): void {
		this.victories++;
		GameScreen.print(">> +1 IA 🤖");
	}
	play(): GameSelection {
		const indexSelection = getRandomPositiveInteger(ALL_GAME_SELECTIONS.length);
		const selection = ALL_GAME_SELECTIONS[indexSelection];
		GameScreen.print("🤖 IA: " + GAME_SELECTION_TRANSCRIPTIONS[selection]);
		return selection;
	}
}