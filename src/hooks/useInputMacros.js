import { useState } from 'react';

const useInputMacros = (
  percentMacro,
  macroGrams,
  dailyCalories,
  weightInLbs
) => {
  const [enteredValuePercentMacro, setEnteredValuePercentMacro] =
    useState(percentMacro);
  const [newMacroGrams, setNewMacroGrams] = useState(macroGrams);
  const [errorFats, setErrorFats] = useState({
    error: false,
    helperText: '',
  });

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

      calcErrorFats(e.target.value);
    }
  };

  const calcErrorFats = newPercentFats => {
    const calPerGramFats = 9;

    let lowestFatsGrams = Math.round(0.3 * weightInLbs);
    let highestFatsGrams = Math.round(0.5 * weightInLbs);

    let newFatsGrams = Math.round(
      ((newPercentFats / 100) * dailyCalories) / calPerGramFats
    );

    newFatsGrams < lowestFatsGrams
      ? setErrorFats({
          error: true,
          helperText:
            'Are you sure? Going this low may be dangerous to health.',
        })
      : newFatsGrams > highestFatsGrams
      ? setErrorFats({ error: true, helperText: 'HIGH FATS' })
      : setErrorFats({ error: false, helperText: '' });
  };

  const resetDefaultMacros = () => {
    setEnteredValuePercentMacro(percentMacro);
    setNewMacroGrams(macroGrams);
    setErrorFats({
      error: false,
      helperText: '',
    });
  };

  return {
    value: enteredValuePercentMacro,
    handleChangePercentMacro,
    macroGrams: newMacroGrams,
    resetDefaultMacros,
    calcErrorFats,
    errorFats,
  };
};

export default useInputMacros;
