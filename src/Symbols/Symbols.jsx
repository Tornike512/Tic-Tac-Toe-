import React, { useState } from "react";
import "./Symbols.scss";

export function Symbols() {
  const [values, setValues] = useState(Array(9).fill(""));

  const handleButtonClick = (i) => {
    const newValues = [...values];
    newValues[i] = "X";
    setValues(newValues);
  };

  return (
    <>
      {values.map((value, i) => (
        <button
          key={i}
          className="background__grid"
          onClick={() => handleButtonClick(i)}
        >
          {value}
        </button>
      ))}
    </>
  );
}
