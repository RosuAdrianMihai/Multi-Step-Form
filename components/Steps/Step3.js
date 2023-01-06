import React from "react";

import { useContext } from "react";
import { UserDataContext } from "../../context/ContentProvider";
import { StepsContext } from "../../context/RootProvider";

import NextButton from "../HelperComponents/Buttons/NextButton";
import BackButton from "../HelperComponents/Buttons/BackButton";

import MobileButtons from "../HelperComponents/MobileButtons/MobileButtons";

import AddOn from "../HelperComponents/AddOn/AddOn";

function Step3() {
  const { userData } = useContext(UserDataContext);
  const { dispatch: dispatchStep } = useContext(StepsContext);

  const { payment } = userData.plan;

  const { addOns } = userData;

  const addsOnList = [
    {
      title: "Online service",
      description: "Access to multiplayer games",
      price: payment === "Monthly" ? 1 : 10,
      payment,
      marked: addOns[0].selected,
    },
    {
      title: "Larger storage",
      description: "Extra 1TB of cloud save",
      price: payment === "Monthly" ? 2 : 20,
      payment,
      marked: addOns[1].selected,
    },
    {
      title: "Customizable profile",
      description: "Custom theme on your profile",
      price: payment === "Monthly" ? 2 : 20,
      payment,
      marked: addOns[2].selected,
    },
  ];

  function nextPage() {
    dispatchStep({ type: "next" });
  }

  return (
    <section className="relative w-full">
      <h1 className="relative mb-1 text-3xl font-bold text-marineBlue">
        Pick add-ons
      </h1>
      <p className="mb-6 text-coolGray">
        Add-ons help enhance your gaming experience.
      </p>

      <div className="mt-6">
        {addsOnList.map((addOn, index) => {
          return <AddOn key={addOn.title} addOnData={addOn} index={index} />;
        })}
      </div>

      <div className="hidden absolute sm:flex w-full items-center justify-between sm:bottom-[10px]">
        <BackButton />
        <NextButton validate={nextPage} />
      </div>

      <MobileButtons validate={nextPage} />
    </section>
  );
}

export default Step3;
