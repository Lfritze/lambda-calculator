import React, { useState } from "react";
import SpecialButton from './SpecialButton';
import { specials } from '../../../data.js';
//import any components needed

//Import your array data to from the provided data file

const Specials = (props) => {
  // STEP 2 - add the imported data to state
  const [specialState] = useState(specials);
  return (
    <div className = 'specials-container'>
      {specialState.map((specials, index) => {
        return <SpecialButton
                key = {index}
                specialsSymbol = {specials}
                displayResults = {props.displayResult}
                setDisplayResult = {props.setDisplayResult} />
      })}
    </div>
  );
};

export default Specials;


/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/