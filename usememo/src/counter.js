import React, { useMemo, useState } from "react";

function Counter() {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setcountTwo] = useState(0);

  const incrementOne = () => {
    setCountOne(countOne + 1);
  };

  const incrementTwo = () => {
    setcountTwo(countTwo + 1);
  };
  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return countOne % 2 === 0;
  }, [countOne]);
  return (
    <div className=" ui segment container">
      <span className=" ui header container">{isEven ? "Even" : "odd"}</span>
      <button className="ui blue button " onClick={incrementOne}>
        Increment Counter One :- {countOne}
      </button>

      <button className="ui blue button " onClick={incrementTwo}>
        Increment Counter Two :- {countTwo}
      </button>
    </div>
  );
}

export default Counter;
