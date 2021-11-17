import "./App.css";
import React, { useReducer } from "react";

import CompoenentA from "./component/CompoenentA";
import CompoenentB from "./component/CompoenentB";
import CompoenentC from "./component/CompoenentC";

export const CountContext = React.createContext();

//Simple demo of useReducer
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};
function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <CountContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <div className="App">
        <div
          className="ui fluid container"
          style={{
            backgroundColor: "#f2f2f6",
            height: 700,
            width: 500,

            padding: 60,
          }}
        >
          <div className="ui purple dividing header">
            Counter With useContext and Reducer
          </div>

          {/* <div className="ui header" style={{ marginBottom: 100 }}>
            count: {count}
          </div> */}
          <CompoenentA />
          <CompoenentB />
          <CompoenentC />
        </div>
      </div>
    </CountContext.Provider>
  );
}

export default App;
