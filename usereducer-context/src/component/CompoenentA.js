import React, { useContext } from "react";
import { CountContext } from "../App";

function CompoenentA() {
  const countContext = useContext(CountContext);
  return (
    <div style={{ marginBottom: 60 }}>
      <div className="ui blue header" style={{ marginBottom: 30 }}>
        component A Value is {countContext.countState}
      </div>
      <button
        className="ui inverted blue button"
        onClick={() => countContext.countDispatch("increment")}
      >
        Increment
      </button>
      <button
        className="ui inverted red button"
        onClick={() => countContext.countDispatch("decrement")}
      >
        Decrement
      </button>
      <button
        className="ui inverted yellow button"
        onClick={() => countContext.countDispatch("reset")}
      >
        Reset
      </button>
    </div>
  );
}

export default CompoenentA;
