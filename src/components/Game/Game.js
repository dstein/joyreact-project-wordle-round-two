import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import WinBanner from "../WinBanner/WinBanner";
import LoseBanner from "../LoseBanner/LoseBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  //running || win || lose
  const [gameState, setGameState] = React.useState("running");
  const [guesses, setGuesses] = React.useState([]);

  function handleGuess(tentativeGuess) {
    const newGuesses = [...guesses, tentativeGuess];
    setGuesses(newGuesses);

    if (tentativeGuess === answer) {
      setGameState("win");
    } else if (newGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameState("lose");
    }
  }

  return (
    <>
      {gameState}
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput handleGuess={handleGuess} gameState={gameState} />
      {gameState === "win" && <WinBanner numOfGuesses={guesses.length} />}
      {gameState === "lose" && <LoseBanner answer={answer} />}
    </>
  );
}

export default Game;
