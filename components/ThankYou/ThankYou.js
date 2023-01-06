import React from "react";

import thankYouIcon from "../../public/images/icon-thank-you.svg";

import { useContext } from "react";
import { UserDataContext } from "../../context/ContentProvider";

import Image from "next/image";

function ThankYou() {
  const { userData } = useContext(UserDataContext);

  const { name } = userData;

  return (
    <div className="flex py-[20%] justify-center w-[100%]">
      <div>
        <div className="flex items-center justify-center mb-6">
          <Image src={thankYouIcon} alt="thank-you" className="" />
        </div>

        <div className="flex items-center justify-center mb-2">
          <h1 className="text-3xl font-bold text-marineBlue">Thank you!</h1>
        </div>

        <p className="text-center text-coolGray">
          Thanks for confirming your subscription,{" "}
          <span className="font-bold">{name.value}</span>! We hope you have fun
          using our platform. If you ever need support, please feel free to
          email us at support@loremgaming.com
        </p>

        <div className="fixed sm:absolute bottom-3 w-[100%] right-[1.5%]">
          <p className="text-center">
            Coded by <span className="font-bold">Mihai Rosu</span>
          </p>
          <p className="text-center">
            Linkedin:{" "}
            <a
              href="https://www.linkedin.com/in/mihai-rosu-413690224/"
              target="_blank"
              rel="noreferrer"
              className="text-purplishBlue"
            >
              https://www.linkedin.com/in/mihai-rosu-413690224/
            </a>
          </p>
          <p className="text-center">
            Link challenge:{" "}
            <a
              href="https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ"
              target="_blank"
              rel="noreferrer"
              className="text-purplishBlue"
            >
              https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ThankYou;
