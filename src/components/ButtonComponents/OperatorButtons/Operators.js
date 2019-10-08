import React, { useState } from "react";
import OperatorButton from './OperatorButton';
import { operators } from '../../../data.js';

//import any components needed

//Import your array data to from the provided data file

const Operators = (props) => {
  // STEP 2 - add the imported data to state
  const [operatorState] = useState(operators)
  return (
    <div className = 'operators-container'>
      {operatorState.map((operator, index) =>{
        return <OperatorButton
                key = {index}
                operatorChar = {operator.char}
                operatorSymbol = {operator.value}
                displayResult = {props.displayResult}
                setDisplayResult = {props.setDisplayResult} />
      })}
      
    </div>
  );
};

export default Operators;


/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/