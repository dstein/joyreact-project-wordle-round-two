import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

// NOTE: Accessing the index of the string with the *current* index of the range array to
// render out each letter IF there is a value. Otherwise 5 blank cells will display since
// we're iterating over 5 array items to produce each cell using the range utility and its value.
// This is then replaced by parsing the value through checkGuess which splits the value into an
// object for each letter. We then access the index w/ num and get the letter and status.

//Ex: value = "HELLO"
//value[0] = "H"
//value[1] = "E"

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : "cell";

  return <span className={className}>{letter}</span>;
}

function Guess({ value, answer }) {
  const result = checkGuess(value, answer);
  console.log(result);

  return (
    <p className="guess">
      {range(5).map((num) => (
        <Cell
          key={num}
          letter={result ? result[num].letter : undefined}
          status={result ? result[num].status : undefined}
        />
      ))}
    </p>
  );
}

export default Guess;
