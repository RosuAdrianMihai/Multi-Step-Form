import React from "react";

import ContentProvider from "../../context/ContentProvider";

import Sidebar from "../Sidebar/Sidebar";
import Content from "../Content/Content";

function Card() {
  return (
    <ContentProvider>
      <div
        className={`w-screen h-screen relative sm:static sm:w-auto sm:h-auto sm:flex sm:p-4 rounded-xl shadow-xl shadow-lightGray`}
      >
        <Sidebar />
        <Content />
      </div>
    </ContentProvider>
  );
}

export default Card;
