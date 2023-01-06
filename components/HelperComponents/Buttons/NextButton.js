import React from "react";

function NextButton({ validate }) {
  return (
    <div
      onClick={validate}
      className="py-3 text-white rounded-md px-7 bottom-8 bg-marineBlue w-fit hover:cursor-pointer"
    >
      Next Step
    </div>
  );
}

export default NextButton;
