import GameScreen from "../utils/GameScreen";

export default class GameInputRoundQuantity {
	readonly quantity: number;
	constructor() {
		this.quantity = this.read();
	}
	private read(): number {
		while (true) {
			const input = GameScreen.read("¿Cuántas partidas deseas jugar? 👀");
			const value = parseInt(input);
			if (!this.isValid(value))
				continue;
			return value;
		}
	}
	private isValid(value: number): boolean {
		if (!Number.isNaN(value) && value > 0) 
			return true;
		GameScreen.display(">> Al menos tienes que jugar 1 partida 🫤");
		return false;
	}
}
