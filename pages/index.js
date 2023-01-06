import React from "react";

import RootProvider from "../context/RootProvider";
import Card from "../components/Card/Card";

function Index() {
  return (
    <>
      <div className="sm:flex sm:items-center sm:justify-center sm:h-screen">
        <RootProvider>
          <Card />
        </RootProvider>
      </div>
    </>
  );
}

export default Index;
