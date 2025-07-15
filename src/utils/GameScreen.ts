import prompt from "prompt-sync";

const ask = prompt();
export default class GameScreen {
	static print(message: string): void {
		console.log(message);
	}
	static read(message: string): string {
		GameScreen.print(message);
		return String(ask("> "));
	}
}