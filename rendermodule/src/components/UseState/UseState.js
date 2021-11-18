import React, { useState } from "react";

export const UseState = () => {
  const [count, setCount] = useState(0);

  console.log("UseState render");
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count - {count}</button>
      {/* after refreshing page count set to 0 so flagged component UseSates
      value does not change so it will not */}
      <button onClick={() => setCount((count) => 0)}>
        Count to zero - {count}
      </button>
    </div>
  );
};
