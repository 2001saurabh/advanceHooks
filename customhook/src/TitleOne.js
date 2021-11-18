import React, { useState } from "react";
import useDocumentTitle from "./hook/useDocumentTitle";

function TitleOne() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  useDocumentTitle(count);
  return (
    <div>
      <button onClick={increment}>count = {count}</button>
    </div>
  );
}

export default TitleOne;
