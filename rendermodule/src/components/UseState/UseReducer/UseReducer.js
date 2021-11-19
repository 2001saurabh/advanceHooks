import React, { useReducer } from "react";

const initialValue = 0;

const reducer = (state, action) => {
  switch (action) {
    case "Increment":
      return state + 1;
    case "Decrement":
      return state - 1;
    case "Reset":
      return initialValue;
    default:
      return state;
  }
};
export const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  console.log("Usereducer render");
  return (
    <div>
      <div>count ={state}</div>
      <button onClick={() => dispatch("Increment")}>Increment </button>
      <button onClick={() => dispatch("Decrement")}>Decrement </button>
      <button onClick={() => dispatch("Reset")}>Reset </button>
    </div>
  );
};
