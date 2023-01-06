/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        marineBlue: "hsl(213, 96%, 18%)", // next step button
        purplishBlue: "hsl(243, 100%, 62%)", // confirm button
        pastelBlue: "hsl(228, 100%, 84%)", // selected option
        lightBlue: "hsl(206, 94%, 87%)", // monthly-yearly
        strawberryRed: "hsl(354, 84%, 57%)", // error

        coolGray: "hsl(231, 11%, 63%)", // text
        lightGray: "hsl(229, 24%, 87%)", // background
        magnolia: "hsl(217, 100%, 97%)", // background storage option
        alabaster: "hsl(231, 100%, 99%)", // background storage option
      },
      fontWeight: {
        medium: 400,
        bolder: 500,
        bold: 700,
      },
      backgroundImage: {
        sidebarDesktop: "url('../public/images/bg-sidebar-desktop.svg')",
        sidebarMobile: "url('../public/images/bg-sidebar-mobile.svg')",
      },
    },
  },
  plugins: [],
};
