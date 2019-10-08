import React from "react";

// NOTE: the hard coded '0' below is just for show

const Display = props => {
  return (
  <div className="display">
    {props.calculatorScreen}0
  </div>
  )
};

export default Display;


/* Display any props data here */