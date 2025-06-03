export default class GameSelection {
	static readonly PAPER: string = "PAPEL";
	static readonly ROCK: string = "PIEDRA";
	static readonly SCISSOR: string = "TIJERA";
	static readonly ALL_SELECTIONS: string[] = [
		GameSelection.PAPER,
		GameSelection.ROCK,
		GameSelection.SCISSOR,
	];
	constructor(private readonly value: string) {}
	haveWon(selectionToCompare: GameSelection): boolean {
		const { PAPER, ROCK, SCISSOR } = GameSelection;
		return (
			(this.value === PAPER && selectionToCompare.value === ROCK) ||
			(this.value === SCISSOR && selectionToCompare.value === PAPER) ||
			(this.value === ROCK && selectionToCompare.value === SCISSOR)
		);
	}
}
