import React from "react";
import useCounter from "./hook/useCounter";

function CounterTwo() {
  const [count, Increment, Decrement, Reset] = useCounter();
  return (
    <div
      className="ui segment container"
      style={{
        backgroundColor: "#E97EFD",
        width: 600,
        height: 200,
        margin: 60,
        padding: 40,
      }}
    >
      <div className="ui header container">Count = {count}</div>
      <button className="ui green button" onClick={Increment}>
        Increment
      </button>
      <button className="ui orange  button" onClick={Decrement}>
        Decrement
      </button>
      <button className="ui red button" onClick={Reset}>
        Reset
      </button>
    </div>
  );
}

export default CounterTwo;
