import React, { useState } from "react";

import { useContext } from "react";
import { UserDataContext } from "../../context/ContentProvider";
import { StepsContext } from "../../context/RootProvider";

import NextButton from "../HelperComponents/Buttons/NextButton";

import MobileButtons from "../HelperComponents/MobileButtons/MobileButtons";

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

function Step1() {
  const { userData, dispatch: dispatchUserData } = useContext(UserDataContext);

  const { dispatch: dispatchStep } = useContext(StepsContext);

  const [errorName, setErrorName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPhone, setErrorPhone] = useState(false);

  const { valid: nameValid } = userData.name;
  const { valid: emailValid } = userData.email;
  const { valid: phoneValid } = userData.phone;

  if (errorName && userData.nameValid) {
    setErrorName(false);
  }

  if (errorEmail && userData.emailValid) {
    setErrorEmail(false);
  }

  if (errorPhone && userData.phoneValid) {
    setErrorPhone(false);
  }

  const errorElement = (field, value, valid) => {
    if (value === "") {
      return (
        <p className="font-bold text-strawberryRed">This field is required</p>
      );
    } else if (!valid) {
      return (
        <p className="font-bold text-strawberryRed">{`Invalid ${field}`}</p>
      );
    }
  };

  function validateInput() {
    if (nameValid && emailValid && phoneValid) {
      dispatchStep({ type: "next" });
      dispatchStep({ type: "validInput" });
    } else {
      setErrorName(!nameValid);
      setErrorEmail(!emailValid);
      setErrorPhone(!phoneValid);

      dispatchStep({ type: "invalidInput" });
    }
  }

  return (
    <section className="flex items-center justify-center">
      <div>
        <h1 className="mb-1 text-3xl font-bold text-marineBlue">
          Personal info
        </h1>
        <p className="mb-6 text-coolGray">
          Please provide your name, email address, and phone number.
        </p>

        <div className="mb-4">
          <div className="flex justify-between mb-2">
            <label htmlFor="name" className="text-marineBlue">
              Name
            </label>
            {errorName &&
              errorElement("name", userData.name.value, userData.name.valid)}
          </div>

          <input
            value={userData.name.value}
            onChange={(event) => {
              const fieldObj = {
                value: event.currentTarget.value,
                valid: event.currentTarget.value.trim().length > 4,
              };

              dispatchUserData({ type: "field", field: "name", fieldObj });

              if (fieldObj.valid === false) {
                const timeoutId = setTimeout(() => {
                  setErrorName(true);
                }, 3000);

                return () => {
                  clearTimeout(timeoutId);
                };
              }
            }}
            type="text"
            id="name"
            placeholder="e.g Stephen King"
            className={`w-full h-12 pl-4 rounded-lg outline outline-1 focus:outline-2 font-bolder ${
              errorName && !userData.name.valid ? "outline-strawberryRed" : ""
            }`}
          />
        </div>

        <div className="mb-4">
          <div className="flex justify-between mb-2">
            <label htmlFor="email" className="text-marineBlue">
              Email Address
            </label>
            {errorEmail &&
              errorElement("email", userData.email.value, userData.email.valid)}
          </div>

          <input
            value={userData.email.value}
            onChange={(event) => {
              const fieldObj = {
                value: event.currentTarget.value,
                valid:
                  event.currentTarget.value.match(emailRegex) !== null
                    ? true
                    : false,
              };

              dispatchUserData({ type: "field", field: "email", fieldObj });

              if (fieldObj.valid === false) {
                const timeoutId = setTimeout(() => {
                  setErrorEmail(true);
                }, 3000);

                return () => {
                  clearTimeout(timeoutId);
                };
              }
            }}
            type="email"
            id="email"
            placeholder="e.g stephenking@lorem.com"
            className={`w-full h-12 pl-4 rounded-lg outline outline-1 focus:outline-2 font-bolder ${
              errorEmail && !userData.email.valid ? "outline-strawberryRed" : ""
            }`}
          />
        </div>

        <div className="mb-4">
          <div className="flex justify-between mb-2">
            <label htmlFor="phone" className="text-marineBlue">
              Phone Number
            </label>
            {errorPhone &&
              errorElement("phone", userData.phone.value, userData.phone.valid)}
          </div>

          <input
            value={userData.phone.value}
            onChange={(event) => {
              const fieldObj = {
                value: event.currentTarget.value,
                valid:
                  event.currentTarget.value.match(phoneRegex) !== null
                    ? true
                    : false,
              };

              dispatchUserData({ type: "field", field: "phone", fieldObj });

              if (fieldObj.valid === false) {
                const timeoutId = setTimeout(() => {
                  setErrorPhone(true);
                }, 3000);

                return () => {
                  clearTimeout(timeoutId);
                };
              }
            }}
            type="tel"
            id="phone"
            placeholder="e.g +1 234 567 890"
            className={`w-full h-12 pl-4 rounded-lg outline outline-1 focus:outline-2 font-bolder ${
              errorPhone && !userData.phone.valid ? "outline-strawberryRed" : ""
            }`}
          />
        </div>

        <div className="hidden sm:items-center sm:justify-end sm:mt-16 sm:flex">
          <NextButton validate={validateInput} />
        </div>

        <MobileButtons validate={validateInput} />
      </div>
    </section>
  );
}

export default Step1;
