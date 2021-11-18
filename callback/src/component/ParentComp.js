import React, { useState, useCallback } from "react";
import Button from "./Button";
import Count from "./Count";
import Title from "./Title";

function ParentComp() {
  const [age, setAge] = useState(18);
  const [salary, setSalary] = useState(50000);
  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);
  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);
  return (
    <div
      className="ui fluid container"
      style={{
        backgroundColor: "skyBlue",
        margin: 60,
        padding: 30,
        height: 400,
        width: 400,
        borderRadius: 6,
      }}
    >
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>

      <div className="ui red header">
        look at console to check rendering status of components
      </div>
    </div>
  );
}

export default ParentComp;
