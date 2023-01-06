import React from "react";

import BackButton from "../HelperComponents/Buttons/BackButton";

import { useContext } from "react";
import { UserDataContext } from "../../context/ContentProvider";
import { StepsContext } from "../../context/RootProvider";
import ConfirmButton from "../HelperComponents/Buttons/ConfirmButton";
import MobileButtons from "../HelperComponents/MobileButtons/MobileButtons";

function Step4() {
  const { userData } = useContext(UserDataContext);
  const { dispatch: dispatchStep } = useContext(StepsContext);

  const { payment } = userData.plan;

  const priceDurText = payment === "Monthly" ? "mo" : "yr";

  const { plan } = userData;

  const { addOns } = userData;

  const totalText = payment === "Monthly" ? "month" : "year";

  function toThankYouPage() {
    dispatchStep({ type: "confirm" });
  }

  function toPlanStep() {
    dispatchStep({ type: 2 });
  }

  return (
    <section className="relative w-full">
      <h1 className="relative mb-1 text-3xl font-bold text-marineBlue">
        Finishing up
      </h1>
      <p className="mb-6 text-coolGray">
        Double-check everything looks OK before confirming.
      </p>

      <div className=" mt-14">
        <div className="p-2 px-4 rounded-lg bg-alabaster">
          <div className="flex items-center justify-between py-3 border-b-2 border-coolGray">
            <div>
              <h2 className="text-lg font-bold text-marineBlue">
                {plan.option} ({plan.payment})
              </h2>
              <p
                onClick={toPlanStep}
                className="underline text-coolGray decoration-solid hover:cursor-pointer"
              >
                Change
              </p>
            </div>

            <p className="text-lg font-bold text-marineBlue">
              ${plan.price}/{priceDurText}
            </p>
          </div>

          <div className="mt-3">
            {addOns.map((addOn) => {
              if (addOn.selected) {
                return (
                  <div key={addOn.title} className="flex justify-between mt-2">
                    <p className="text-coolGray">{addOn.title}</p>
                    <p className="text-marineBlue">
                      +${addOn.price}/{priceDurText}
                    </p>
                  </div>
                );
              }
            })}
          </div>
        </div>

        <div className="flex items-center justify-between px-4 py-3 mt-8">
          <p className="text-coolGray">Total (per {totalText})</p>
          <p className="text-xl font-bold text-purplishBlue">
            ${userData.totalSum}/{priceDurText}
          </p>
        </div>
      </div>

      <div className="hidden absolute sm:flex items-center justify-between w-full sm:bottom-[0px] sm:pl-6">
        <BackButton />
        <ConfirmButton navigate={toThankYouPage} />
      </div>

      <MobileButtons navigate={toThankYouPage} />
    </section>
  );
}

export default Step4;
