import React from "react";

function Button({ children, handleClick }) {
  console.log("Rendering button -", children);
  return (
    <div>
      <button className="ui green icon labeled button" onClick={handleClick}>
        {" "}
        <i className="ui plus icon" />
        {`${children}`}
      </button>
    </div>
  );
}

export default React.memo(Button);
