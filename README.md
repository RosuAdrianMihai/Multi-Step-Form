# Multi-Step-Form

Link: https://multi-step-form-mihai-rosu.netlify.app/

Technologies used: Next.js (React.js), Tailwind.CSS

# Project description:
  Multi step form that takes the users through a sequence of steps:
  - collecting data
  - selecting plan and time period
  - selecting add-ons
  - checking order status

# Features:
- responsive
- input validation
- dynamic plans and add-ons, depending on the choosen period
- displaying the selected plans, add-ons and the total sum of the order on the check out page
- navigation back and forth by clicking on the numbers from the sidebar, once the input is valid and the pages before/after were visited (exception: form step, you can't navigate like that if you are currently on it)
- navigation with back/next/confirm buttons
- once the user confirmed the order, he can't navigate anymore

# Running the project locally
(Install "node" and "git" on your computer to follow the steps)

1. Copy the URL: https://github.com/RosuAdrianMihai/Multi-Step-Form.git
2. Open a folder in which the project will be cloned
3. Click right in the choosen folder and select "Open terminal"
4. Run the command: git clone https://github.com/RosuAdrianMihai/Multi-Step-Form.git
5. Open the new folder in your IDE or text editor
6. Run the command: npm install
7. Run the command: npm run dev
8. In terminal, you should see the following link: http://localhost:3000. Click on it

# The structure of the project

- Index page, where we provide the Root context and the Card component. In the Root context, the app keeps track of visited steps and the current step in order to display the right component
- Card component, which contains Sidebar and Content as children. Also, we have the UserData context, that stores the user informations
- The Content component will display a different child, depending on the current step
- In the HelperComponents folder are small components that are included in the Step components, like Buttons, Plan cards and AddOns cards.

# Pictures

![msf-1](https://user-images.githubusercontent.com/90980636/211079407-491fe061-57f0-44bb-bddc-ab317ee1600c.png)
![msf-2](https://user-images.githubusercontent.com/90980636/211079408-fe2fad47-e2d9-42d5-b4a7-01a38115dda9.png)
![msf-3](https://user-images.githubusercontent.com/90980636/211079406-86a62781-b350-41a2-be63-9dd3bd9259ec.png)
![msf-4](https://user-images.githubusercontent.com/90980636/211079410-043a348e-502a-4584-b66b-26dea13fa388.png)
![msf-5](https://user-images.githubusercontent.com/90980636/211079420-e3875be6-cc61-4314-95e1-6507b9cec780.png)
