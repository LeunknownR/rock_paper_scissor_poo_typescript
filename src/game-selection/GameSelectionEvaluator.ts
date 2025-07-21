import GameSelection from "./GameSelection";
import GameSelectionEvaluatorResult from "../game-selection/GameSelectionEvaluatorResult";

export default class GameSelectionEvaluator {
	static check(
		playerSelection: GameSelection,
		iaSelection: GameSelection
	): GameSelectionEvaluatorResult {
		if (playerSelection === iaSelection) return GameSelectionEvaluatorResult.Draw;
		if (
			(playerSelection === GameSelection.Paper && iaSelection === GameSelection.Rock) ||
			(playerSelection === GameSelection.Scissor && iaSelection === GameSelection.Paper) ||
			(playerSelection === GameSelection.Rock && iaSelection === GameSelection.Scissor)
		) return GameSelectionEvaluatorResult.Player;
		return GameSelectionEvaluatorResult.IA;
	}
}
