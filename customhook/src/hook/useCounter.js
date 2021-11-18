import { useState } from "react";

function useCounter(initial = 0, value) {
  const [count, setCount] = useState(initial);

  const Increment = () => {
    setCount(count + value);
  };
  const Decrement = () => {
    setCount(count - value);
  };
  const Reset = () => {
    setCount(initial);
  };
  return [count, Increment, Decrement, Reset];
}

export default useCounter;
