import { useState } from "react";

function useCounter() {
  const initial = 0;
  const [count, setCount] = useState(initial);

  const Increment = () => {
    setCount(count + 1);
  };
  const Decrement = () => {
    setCount(count - 1);
  };
  const Reset = () => {
    setCount(initial);
  };
  return [count, Increment, Decrement, Reset];
}

export default useCounter;
