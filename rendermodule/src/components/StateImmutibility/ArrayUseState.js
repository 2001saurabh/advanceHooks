import React, { useState } from "react";

const initialArray = ["Saurabh", "Tushar"];

export const ArrayUseState = () => {
  const [name, setName] = useState(initialArray);
  const handleChange = () => {
    // name.push("Ravi");
    // name.push("Shukla");
    // setName(name);

    const newName = [...name];
    newName.push(" Ravi ");
    newName.push(" Abhishek ");
    setName(newName);
  };
  console.log("array useState");
  return (
    <div>
      <button onClick={handleChange}> {name}</button>
    </div>
  );
};
