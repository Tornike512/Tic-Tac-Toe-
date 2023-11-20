import React, { useState } from "react";
import "./Symbols.scss";

export function Symbols() {
  const [values, setValues] = useState(Array(9).fill(""));

  function handleButtonClick(i) {
    const newValues = [...values];
    newValues[i] = "X";
    setValues(newValues);
    if (
      newValues[0] === "X" ||
      newValues[1] === "X" ||
      newValues[2] === "X" ||
      newValues[3] === "X" ||
      newValues[4] === "X" ||
      newValues[5] === "X" ||
      newValues[6] === "X" ||
      newValues[7] === "X" ||
      newValues[8] === "X"
    ) {
      newValues[4] = "O";
      const newValues1 = [...newValues];
      newValues1[i] = "X";
      setValues(newValues1);
      if (newValues1[2] === "X") {
        newValues1[1] = "O";
      } else if (newValues1[6] === "X") {
        newValues1[3] = "O";
      } else if (newValues1[8] === "X") {
        newValues1[7] = "O";
      }
    }
  }

  return (
    <>
      {values.map((value, i) => (
        <button
          key={i}
          className="background__grid"
          onClick={() => {
            handleButtonClick(i);
          }}
        >
          {value}
        </button>
      ))}
    </>
  );
}
