import GameScreen from "../utils/GameScreen";

export default class GameInputRoundQuantity {
	readonly value: number;
	constructor() {
		this.value = this.read();
	}
	private read(): number {
		while (true) {
			const input = GameScreen.read("¿Cuántas partidas deseas jugar? 👀");
			const value = parseInt(input);
			if (!this.isValid(value)) continue;
			return value;
		}
	}
	private isValid(value: any): boolean {
		if (!Number.isNaN(value) && value > 0) return true;
		GameScreen.print(">> Al menos tienes que jugar 1 partida 🫤");
		return false; 
	}
}