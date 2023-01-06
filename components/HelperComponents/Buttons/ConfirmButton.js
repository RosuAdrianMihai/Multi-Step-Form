import React from "react";

function ConfirmButton({ navigate }) {
  return (
    <div
      onClick={navigate}
      className="py-3 font-bold text-white rounded-md px-7 bottom-8 bg-purplishBlue w-fit hover:cursor-pointer hover:bg-pastelBlue"
    >
      Confirm
    </div>
  );
}

export default ConfirmButton;
