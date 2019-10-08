import React from "react";

const SpecialButton = (props) => {

  function updateValue () {
    if (props.specialSymbol === 'C')
      return props.setDisplayResult(0)

    if (props.specialSymbol === '+/-' && props.displayResult[0] !== '-')
      return props.setDisplayResult('-' + props.displayResult);

    if (props.specialSymbol === '+/-' && props.displayResult[0] === '-')
      return props.setDisplayResult(props.displayResult.slice(1, props.displayResult.length))
      // SOURCE on slice() https://www.w3schools.com/jsref/jsref_slice_array.asp
    if (props.specialSymbol === '%' && props.displayResult) {
      console.log(props.displayResult);
      return props.setDisplayResult(props.displayResult/100); 
    }
  }
  return (
   <button className = 'special-button' onClick = {() => updateValue()}>
     {props.specialSymbol}
   </button>
  );
};

export default SpecialButton;


/* Display a button element rendering the data being passed down from the parent container on props */
