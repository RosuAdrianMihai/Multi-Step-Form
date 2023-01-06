import React from "react";

import { useContext } from "react";
import { StepsContext } from "../../context/RootProvider";

function Sidebar() {
  const stepsCtx = useContext(StepsContext);

  const { steps, currentStepIndex, dispatch } = stepsCtx;

  function reviewStep(stepNumber) {
    if (steps[stepNumber - 1] === true && currentStepIndex !== 0) {
      dispatch({ type: stepNumber });
    }
  }

  return (
    <section
      className={`bg-no-repeat bg-cover aspect-[372/172] bg-sidebarMobile bg-center sm:bg-sidebarDesktop sm:rounded-xl sm:min-w-[120px] sm:w-[25vw] sm:h-[75vh] sm:max-h-[650px] md:aspect-[274/568] md:w-[20vw] md:max-w-[300px] md:min-w-[240px]`}
    >
      <div className="flex justify-center pt-8 text-white gap-x-4 sm:gap-x-0 sm:block sm:px-8 sm:pt-8">
        <div className="flex items-center justify-center md:mb-5 md:justify-start">
          <span
            onClick={() => {
              reviewStep(1);
            }}
            className={`border-2 border-white border-solid mb-6 md:mb-0 md:mr-4 rounded-[50%] px-3 py-1 font-bold ${
              currentStepIndex + 1 === 1
                ? "bg-pastelBlue text-marineBlue"
                : "text-white"
            }`}
          >
            1
          </span>

          <div className="hidden md:block">
            <p className="text-sm text-coolGray">STEP 1</p>
            <p className="font-bold tracking-wider">YOUR INFO</p>
          </div>
        </div>

        <div className="flex items-center justify-center md:mb-5 md:justify-start">
          <span
            onClick={() => {
              reviewStep(2);
            }}
            className={`border-2 border-white border-solid mb-6 md:mb-0  md:mr-4 rounded-[50%] px-3 py-1 font-bold ${
              currentStepIndex + 1 === 2
                ? "bg-pastelBlue text-marineBlue"
                : "text-white"
            }`}
          >
            2
          </span>

          <div className="hidden md:block">
            <p className="text-sm text-coolGray">STEP 2</p>
            <p className="font-bold tracking-wider">SELECT PLAN</p>
          </div>
        </div>

        <div className="flex items-center justify-center md:mb-5 md:justify-start">
          <span
            onClick={() => {
              reviewStep(3);
            }}
            className={`border-2 border-white border-solid mb-6 md:mb-0  md:mr-4 rounded-[50%] px-3 py-1 font-bold ${
              currentStepIndex + 1 === 3
                ? "bg-pastelBlue text-marineBlue"
                : "text-white"
            }`}
          >
            3
          </span>

          <div className="hidden md:block">
            <p className="text-sm text-coolGray">STEP 3</p>
            <p className="font-bold tracking-wider">ADD-ONS</p>
          </div>
        </div>

        <div className="flex items-center justify-center md:mb-5 md:justify-start">
          <span
            onClick={() => {
              reviewStep(4);
            }}
            className={`border-2 border-white border-solid mb-6 md:mb-0  md:mr-4 rounded-[50%] px-3 py-1 font-bold ${
              currentStepIndex + 1 === 4 || currentStepIndex + 1 === 5
                ? "bg-pastelBlue text-marineBlue"
                : "text-white"
            }`}
          >
            4
          </span>

          <div className="hidden md:block">
            <p className="text-sm text-coolGray">STEP 4</p>
            <p className="font-bold tracking-wider">SUMMARY</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sidebar;
