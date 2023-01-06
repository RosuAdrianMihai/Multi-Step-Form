import React from "react";

import { createContext, useReducer } from "react";

export const UserDataContext = createContext();

const initialState = {
  name: { value: "", valid: false },
  email: { value: "", valid: false },
  phone: { value: "", valid: false },

  plan: { option: "Arcade", price: 9, payment: "Monthly" },

  addOns: [{ selected: false }, { selected: false }, { selected: false }],

  totalSum: 9,
};

function verifyInput(state, action) {
  const field = action.field;
  const fieldObj = action.fieldObj;

  const planObj = action.planObj;

  const addOnSelected = action.selectedAddOn;
  const addOnObj = action.addOnObj;

  let userData = { ...state };

  switch (action.type) {
    case "field":
      userData[field] = fieldObj;

      return userData;

    case "plan":
      userData.plan = planObj;
      userData.totalSum = planObj.price;

      for (let i = 0; i < 3; i++) {
        if (userData.addOns[i].selected) {
          const previousPayment = userData.addOns[i].payment;

          userData.addOns[i].payment = planObj.payment;

          if (
            previousPayment === "Monthly" &&
            previousPayment !== planObj.payment
          ) {
            userData.addOns[i].price *= 10;
            userData.totalSum += userData.addOns[i].price;
          } else if (
            previousPayment === "Yearly" &&
            previousPayment !== planObj.payment
          ) {
            userData.addOns[i].price /= 10;
            userData.totalSum += userData.addOns[i].price;
          } else {
            userData.totalSum += userData.addOns[i].price;
          }
        }
      }

      return userData;

    case "addOns":
      const newAddOns = [...userData.addOns];
      newAddOns[addOnSelected] = addOnObj;

      userData.addOns = [...newAddOns];

      if (userData.addOns[addOnSelected].selected) {
        userData.totalSum += addOnObj.price;
      } else {
        userData.totalSum -= addOnObj.price;
      }

      return userData;
  }
}

function ContentProvider({ children }) {
  const [userData, dispatch] = useReducer(verifyInput, initialState);

  const userDataContextObj = {
    userData,
    dispatch,
  };

  return (
    <UserDataContext.Provider value={userDataContextObj}>
      {children}
    </UserDataContext.Provider>
  );
}

export default ContentProvider;
