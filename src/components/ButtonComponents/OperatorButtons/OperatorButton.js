import React from "react";

const OperatorButton = (props) => {
  function updateValue() {
    if (props.operatorSymbol !== '=') {
      console.log(props.displayResult);
      return props.setDisplayResult(props.displayResult + props.value);
    }
    else {
      console.log(props.displayResult);
      let result = props.displayResult;
      let result2 = eval(result); //The eval() function evaluates JavaScript code represented as a string. SOURCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval
      console.log('result:' + result2);
      let resultString = result2.toString();

    return props.setDisplayResult(resultString);
    }
  }
  return (
    <button className = 'button-operator' onClick={() => updateValue()}>
      {props.operatorSymbol}
    </button>
  );
};

export default OperatorButton;

/* Display a button element rendering the data being passed down from the parent container on props */