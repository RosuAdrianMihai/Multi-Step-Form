import React from "react";

import Head from "next/head";

import RootProvider from "../context/RootProvider";
import Card from "../components/Card/Card";

function Index() {
  return (
    <>
      <Head>
        <title>Multi Step Form</title>
        <meta name="viewport" content="minimum-scale=1" />
      </Head>

      <div className="sm:flex sm:items-center sm:justify-center sm:h-screen">
        <RootProvider>
          <Card />
        </RootProvider>
      </div>
    </>
  );
}

export default Index;
