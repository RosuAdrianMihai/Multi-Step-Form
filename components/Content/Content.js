import React from "react";

import { useContext } from "react";
import { StepsContext } from "../../context/RootProvider";
import ContentProvider from "../../context/ContentProvider";

import Step1 from "../Steps/Step1";
import Step2 from "../Steps/Step2";
import Step3 from "../Steps/Step3";
import Step4 from "../Steps/Step4";
import ThankYou from "../ThankYou/ThankYou";

function Content() {
  const stepsCtx = useContext(StepsContext);

  const { currentStepIndex } = stepsCtx;

  return (
    <ContentProvider>
      <section className="absolute mx-[6vw] w-[88vw] top-[12.5vh] bg-white px-4 py-6 rounded-lg shadow-xl sm:shadow-none sm:rounded-none sm:relative sm:top-0 sm:mx-0 sm:flex sm:justify-center sm:w-[50vw] sm:px-6 sm:py-4 md:px-8 md:py-6 md:max-w-[750px] lg:px-24 lg:py-6">
        {currentStepIndex + 1 === 1 && <Step1 />}
        {currentStepIndex + 1 === 2 && <Step2 />}
        {currentStepIndex + 1 === 3 && <Step3 />}
        {currentStepIndex + 1 === 4 && <Step4 />}
        {currentStepIndex + 1 === 5 && <ThankYou />}
      </section>
    </ContentProvider>
  );
}

export default Content;
