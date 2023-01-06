import React from "react";

import { useReducer, createContext } from "react";

export const StepsContext = createContext();

const initialState = {
  steps: [true, false, false, false, false],
  current_step_index: 0,
};

function setStep(state, action) {
  let updatedSteps = { ...state };
  const prev_step_index = state.current_step_index;

  let newSteps = [...updatedSteps.steps];

  switch (action.type) {
    case "next":
      updatedSteps.steps[prev_step_index + 1] = true;
      updatedSteps.current_step_index += 1;

      return updatedSteps;

    case "back":
      updatedSteps.current_step_index -= 1;

      return updatedSteps;

    case "confirm":
      updatedSteps.current_step_index += 1;

      for (let i = 0; i < 5; i++) {
        if (i !== updatedSteps.current_step_index) {
          newSteps[i] = false;
        }
      }

      updatedSteps.steps = [...newSteps];

      return updatedSteps;

    case "validInput":
      newSteps[0] = true;
      updatedSteps.steps = newSteps;

      return updatedSteps;

    case "invalidInput":
      newSteps[0] = false;
      updatedSteps.steps = newSteps;

      return updatedSteps;

    case 1:
      updatedSteps.current_step_index = 0;

      return updatedSteps;

    case 2:
      if (updatedSteps.steps[0] === true) {
        updatedSteps.current_step_index = 1;
      }

      return updatedSteps;

    case 3:
      if (updatedSteps.steps[0] === true) {
        updatedSteps.current_step_index = 2;
      }

      return updatedSteps;

    case 4:
      if (updatedSteps.steps[0] === true) {
        updatedSteps.current_step_index = 3;
      }

      return updatedSteps;
  }
}

function RootProvider({ children }) {
  const [stepsObj, setSteps] = useReducer(setStep, initialState);

  const stepsContextObj = {
    steps: stepsObj.steps,
    currentStepIndex: stepsObj.current_step_index,
    dispatch: setSteps,
  };

  return (
    <StepsContext.Provider value={stepsContextObj}>
      {children}
    </StepsContext.Provider>
  );
}

export default RootProvider;
