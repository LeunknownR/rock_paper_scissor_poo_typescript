import GameInputRoundQuantity from "./GameInputRoundQuantity";

export default class GameInput {
	readonly roundQuantity: number;
	constructor() {
		this.roundQuantity = new GameInputRoundQuantity().quantity;
	}
}