import React from "react";

import { useContext } from "react";
import { UserDataContext } from "../../context/ContentProvider";
import { StepsContext } from "../../context/RootProvider";

import NextButton from "../HelperComponents/Buttons/NextButton";
import BackButton from "../HelperComponents/Buttons/BackButton";
import Plan from "../HelperComponents/Plan/Plan";

import MobileButtons from "../HelperComponents/MobileButtons/MobileButtons";

import arcadeIcon from "../../public/images/icon-arcade.svg";
import advancedIcon from "../../public/images/icon-advanced.svg";
import proIcon from "../../public/images/icon-pro.svg";

function Step2() {
  const { userData, dispatch: dispatchUserData } = useContext(UserDataContext);
  const { dispatch: dispatchStep } = useContext(StepsContext);

  const { payment } = userData.plan;

  const planList = [
    {
      option: "Arcade",
      price: payment === "Monthly" ? 9 : 90,
      payment: payment,
      icon: arcadeIcon,
    },

    {
      option: "Advanced",
      price: payment === "Monthly" ? 12 : 120,
      payment: payment,
      icon: advancedIcon,
    },

    {
      option: "Pro",
      price: payment === "Monthly" ? 15 : 150,
      payment: payment,
      icon: proIcon,
    },
  ];

  function changePeriod() {
    let planObj = userData.plan;

    if (payment === "Monthly") {
      planObj.payment = "Yearly";
      planObj.price *= 10;
    } else {
      planObj.payment = "Monthly";
      planObj.price /= 10;
    }

    dispatchUserData({ type: "plan", planObj });
  }

  function nextPage() {
    dispatchStep({ type: "next" });
  }

  return (
    <section className="relative">
      <h1 className="relative mb-1 text-3xl font-bold text-marineBlue">
        Select your plan
      </h1>
      <p className="mb-6 text-coolGray">
        You have the option of monthly or yearly billing.
      </p>

      <div>
        <div className="xl:flex xl:items-center">
          {planList.map((plan) => {
            return <Plan key={plan.option} data={plan} />;
          })}
        </div>

        <div className="flex items-center justify-center py-2 mt-2 xl:mt-8 bg-alabaster rounded-md w-[96%]">
          <p
            className={`ml-4 mr-6 font-bold ${
              payment === "Monthly" ? "text-marineBlue" : "text-coolGray"
            }`}
          >
            Monthly
          </p>

          <div
            onClick={changePeriod}
            className="relative flex items-center mr-6 h-7 w-14 rounded-2xl bg-marineBlue"
          >
            <p
              className={`"absolute h-6 w-6 bg-white rounded-[50%] transition-all ease-in-out duration-500  ${
                payment === "Monthly"
                  ? "translate-x-[2px]"
                  : "translate-x-[30px]"
              }`}
            ></p>
          </div>

          <p
            className={`mr-6 font-bold ${
              payment === "Yearly" ? "text-marineBlue" : "text-coolGray"
            }`}
          >
            Yearly
          </p>
        </div>
      </div>

      <div className="hidden absolute sm:flex justify-between items-center w-full sm:bottom-[0px] md:bottom-[-22px] lg:bottom-[-12px] xl:bottom-[-15px] xl:pr-6">
        <BackButton />
        <NextButton validate={nextPage} />
      </div>

      <MobileButtons validate={nextPage} />
    </section>
  );
}

export default Step2;
