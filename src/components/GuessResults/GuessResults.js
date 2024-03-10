import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess/Guess";

function GuessResults({ guesses, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num, index) => (
        <Guess
          key={index}
          value={guesses[num] ? guesses[num] : undefined}
          answer={answer}
        />
      ))}
    </div>
  );
}

export default GuessResults;
