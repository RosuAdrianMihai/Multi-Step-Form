import React from "react";

import Image from "next/image";
import addMarkedIcon from "../../../public/images/icon-checkmark.svg";

import { useContext } from "react";
import { UserDataContext } from "../../../context/ContentProvider";

function AddOn({ addOnData, index }) {
  const { title, description, price, marked } = addOnData;

  const { userData, dispatch: dispatchUserData } = useContext(UserDataContext);

  const { payment } = userData.plan;

  const priceDurText = payment === "Monthly" ? "mo" : "yr";

  function pickAddOn() {
    const addOnObj = {
      title,
      price,
      payment,
      selected: !marked,
    };

    dispatchUserData({
      type: "addOns",
      selectedAddOn: index,
      addOnObj,
    });
  }

  return (
    <div
      onClick={pickAddOn}
      className={`flex items-center justify-between mb-4 border-[1px]  rounded-lg ${
        marked ? "border-purplishBlue bg-alabaster" : "border-coolGray"
      } hover:cursor-pointer p-3 lg:px-6 lg:py-4`}
    >
      <div className="flex items-center">
        <div
          className={`flex justify-center items-center w-[20px] h-[20px] border-[1px] border-coolGray rounded-sm mr-4 ${
            marked ? "bg-purplishBlue" : "bg-white"
          }`}
        >
          {marked && <Image src={addMarkedIcon} alt="option-checkmarked" />}
        </div>

        <div>
          <h2 className="font-bold text-md md:text-lg text-marineBlue">
            {title}
          </h2>
          <p className="text-sm text-coolGray md:text-md">{description}</p>
        </div>
      </div>

      <p className="text-purplishBlue">
        +${price}/{priceDurText}
      </p>
    </div>
  );
}

export default AddOn;
