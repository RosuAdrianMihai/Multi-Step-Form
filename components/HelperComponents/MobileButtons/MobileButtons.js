import React from "react";

import NextButton from "../Buttons/NextButton";
import BackButton from "../Buttons/BackButton";
import ConfirmButton from "../Buttons/ConfirmButton";

import { useContext } from "react";
import { StepsContext } from "../../../context/RootProvider";

function MobileButtons({ validate, navigate }) {
  const { currentStepIndex } = useContext(StepsContext);

  const showButtons = currentStepIndex < 4 ? true : false;

  const showBackButton =
    currentStepIndex > 0 && currentStepIndex < 4 ? true : false;

  const showNextButton =
    currentStepIndex >= 0 && currentStepIndex < 3 ? true : false;

  const showConfirmButton = currentStepIndex === 3 ? true : false;

  if (showButtons) {
    return (
      <div
        className={`fixed bg-white z-10 w-screen left-0 bottom-0 py-3 flex items-center sm:hidden ${
          (showBackButton && showNextButton) || showConfirmButton
            ? "justify-between"
            : "justify-end"
        }`}
      >
        {showBackButton && (
          <div className="pl-[6.5vw]">
            <BackButton />
          </div>
        )}

        {showNextButton && (
          <div className="pr-[6.5vw]">
            <NextButton validate={validate} />
          </div>
        )}

        {showConfirmButton && (
          <div className="pr-[6.5vw]">
            <ConfirmButton navigate={navigate} />
          </div>
        )}
      </div>
    );
  } else {
    return null;
  }
}

export default MobileButtons;
