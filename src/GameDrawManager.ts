import GameScreen from "./utils/GameScreen";

export default class GameDrawManager {
	private _drawQuantity: number;
	constructor() {
		this._drawQuantity = 0;
	}
	get drawQuantity(): number {
		return this._drawQuantity;
	}
	draw(): void {
		this._drawQuantity++;
		GameScreen.print(">> ¿Qué pasó aquí? ¡Fue un empate! 😱😱😱");
	}
}