import React from "react";

function GuessInput({ handleGuess, gameState }) {
  const [guess, setGuess] = React.useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        //console.log(guess);
        handleGuess(guess);

        setGuess("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        disabled={gameState !== "running"}
        id="guess-input"
        type="text"
        value={guess}
        pattern="[A-Za-z]{5}"
        onChange={(event) => {
          const newGuess = event.target.value.toUpperCase();
          setGuess(newGuess);
        }}
      />
      {guess}
    </form>
  );
}

export default GuessInput;
