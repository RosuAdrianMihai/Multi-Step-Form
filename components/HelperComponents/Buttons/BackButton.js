import React from "react";

import { useContext } from "react";
import { StepsContext } from "../../../context/RootProvider";

function BackButton() {
  const stepsCtx = useContext(StepsContext);

  const { dispatch } = stepsCtx;

  return (
    <div
      onClick={() => {
        dispatch({ type: "back" });
      }}
      className="font-bold text-coolGray hover:cursor-pointer"
    >
      Go Back
    </div>
  );
}

export default BackButton;
