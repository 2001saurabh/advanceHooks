import "./App.css";
import { ParentOne } from "./components/Optimization/ParentOne";
import { ChildOne } from "./components/Optimization/ChildOne";
import { Parent } from "./components/ParentChild/Parent";
import { ArrayUseState } from "./components/StateImmutibility/ArrayUseState";
import { ObjectUseState } from "./components/StateImmutibility/ObjectUseState";

import { UseReducer } from "./components/UseState/UseReducer/UseReducer";
import { UseState } from "./components/UseState/UseState";

function App() {
  return (
    <div className="App">
      <UseState />
      <ObjectUseState />
      <ArrayUseState />
      <UseReducer />
      <Parent />

      {/* ------after optimization------  */}
      <ParentOne>
        <ChildOne />
      </ParentOne>
    </div>
  );
}

export default App;
