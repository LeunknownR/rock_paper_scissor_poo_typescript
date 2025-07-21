enum GameSelection {
	Paper = 1,
	Rock = 2,
	Scissor = 3,
}

export const ALL_GAME_SELECTIONS: GameSelection[] = [
	GameSelection.Paper,
	GameSelection.Rock,
	GameSelection.Scissor,
];

export const GAME_SELECTION_TRANSCRIPTIONS: Record<GameSelection, string> = {
	[GameSelection.Paper]: "Papel",
	[GameSelection.Rock]: "Piedra",
	[GameSelection.Scissor]: "Tijera",
};

export default GameSelection;
