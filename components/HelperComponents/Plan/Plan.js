import React from "react";

import Image from "next/image";

import { useContext } from "react";
import { UserDataContext } from "../../../context/ContentProvider";

function Plan({ data }) {
  const { option, price, payment, icon } = data;

  const { userData, dispatch } = useContext(UserDataContext);

  const { plan: selectedPlan } = userData;

  const priceDurText = payment === "Monthly" ? "mo" : "yr";

  function setPlan() {
    const planObj = {
      option,
      price,
      payment,
    };

    dispatch({ type: "plan", planObj });
  }

  return (
    <div
      onClick={setPlan}
      className={`flex xl:block items-center p-2 md:p-3 mb-3 xl:mb-0 xl:pt-6 xl:px-4 xl:mr-6 xl:w-[150px] border-[1px] rounded-lg hover:cursor-pointer hover:border-purplishBlue ${
        payment === "Monthly" ? "xl:h-[175px]" : "xl:h-[200px]"
      }  ${
        selectedPlan.option === option
          ? " border-purplishBlue bg-alabaster"
          : "border-lightGray"
      }  `}
    >
      <Image src={icon} alt={`${option}`} className="mr-6 xl:mb-12" />

      <div>
        <p className="text-lg font-bold text-marineBlue">{option}</p>
        <p className="text-coolGray">
          ${price}/{priceDurText}
        </p>
        {payment === "Yearly" && <p>2 months free</p>}
      </div>
    </div>
  );
}

export default Plan;
