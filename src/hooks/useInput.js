import { useState } from 'react';

const useInput = validateValue => {
  const [enteredValue, setEnteredValue] = useState('');
  // const [isTouched, setIsTouched] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isFormSubmitted;
  // const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = e => {
    setEnteredValue(e.target.value);
    setIsFormSubmitted(false);
  };

  // const inputBlurHandler = e => {
  //   setIsTouched(true);
  // };

  const setIsFormSubmittedToTrue = () => {
    setIsFormSubmitted(true);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError: hasError,
    valueChangeHandler,
    setIsFormSubmittedToTrue,
  };
};

export default useInput;
