import prompt from "prompt-sync";

const ask = prompt();
export default class GameScreen {
	static display(message: string): void {
		console.log(message);
	}
	static read(message: string): string {
		console.log(message);
		return ask("> ");
	}
}
