import React from "react";
import MathJS from "mathjs";

const CalcComponent = (props) => {
  const showPositives = true; // currently a const value - you will need to change this and get this value from somewhere maybe the settings? https://developers.inkdrop.app/modules/config
  let result;
  if (!props.children || !props.children[0]) {
    return <></>;
  }
  try {
    result = MathJS.evaluate(props.children[0]);
  } catch (e) {
    return <span>Invalid inline math expression</span>;
  }
  return (
    <span>
      {(result.entries < 0 && showPositives ? "" : "+") +
        result.entries}
    </span>
  );
};

export default CalcComponent;
