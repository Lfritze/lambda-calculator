import React from "react";

const NumberButton = (props) => {

  function updateValue() {
    if (props.displayResult != '0') 
      return props.setDisplayResult(props.displayResult +props.number);
    else 
      return props.setDisplayResult(props.number);
  }
  if (props.number !== '0') {
  return (
    <button className = 'button-number' onClick = {() => updateValue()}>
      {props.number}
    </button>
  );}
  else {
    return (
      <button className = 'number-zero-button' onCLick = {() => updateValue()}>
        {props.number}
      </button>
    );
  }
};

export default NumberButton;


 //* Display a button element rendering the data being passed down from the parent container on props 