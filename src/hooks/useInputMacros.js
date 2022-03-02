import { useState } from 'react';

const useInputMacros = (percentMacro, macroGrams, dailyCalories) => {
  const [enteredValuePercentMacro, setEnteredValuePercentMacro] =
    useState(percentMacro);
  const [newMacroGrams, setNewMacroGrams] = useState(macroGrams);

  const handleChangePercentMacro = e => {
    const calPerGramProtein = 4;
    const calPerGramCarbs = 4;
    const calPerGramFats = 9;

    setEnteredValuePercentMacro(e.target.value);

    if (e.target.name === 'protein') {
      let newPercentProtein = e.target.value;
      let newProteinGrams =
        ((newPercentProtein / 100) * dailyCalories) / calPerGramProtein;
      setNewMacroGrams(Math.round(newProteinGrams));
    }
    if (e.target.name === 'carbs') {
      let newPercentCarbs = e.target.value;
      let newCarbsGrams =
        ((newPercentCarbs / 100) * dailyCalories) / calPerGramCarbs;
      setNewMacroGrams(Math.round(newCarbsGrams));
    }
    if (e.target.name === 'fats') {
      let newPercentFats = e.target.value;
      let newFatsGrams =
        ((newPercentFats / 100) * dailyCalories) / calPerGramFats;
      setNewMacroGrams(Math.round(newFatsGrams));
    }
  };

  const resetDefaultMacros = () => {
    setEnteredValuePercentMacro(percentMacro);
    setNewMacroGrams(macroGrams);
  };

  return {
    value: enteredValuePercentMacro,
    handleChangePercentMacro,
    macroGrams: newMacroGrams,
    resetDefaultMacros,
  };
};

export default useInputMacros;
