import React, { useState } from "react";

const initialObject = {
  fname: "Tony",
  lname: "Stark",
};
export const ObjectUseState = () => {
  const [name, setName] = useState(initialObject);

  const handleChange = () => {
    // name.fname = "Iron";
    // name.lname = "Man";
    // setName(name);

    const newName = { ...name };
    newName.fname = "Iron";
    newName.lname = "Man";
    setName(newName);
  };

  console.log("Object state render");
  return (
    <div>
      <button onClick={handleChange}>
        {name.fname}
        {name.lname}
      </button>
    </div>
  );
};
