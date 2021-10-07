const inquirer = require("inquirer");
const Employee = require("./Employee");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

function addManager() {
  inquirer.prompt([
    {
      type: "text",
      name: "name",
      message: "What is  the Team Manager Name?",
    },
    {
      type: "text",
      name: "email",
      message: "What is  the  Manager Email?",
    },
    {
      type: "text",
      name: "officeNumber",
      message: "What is  the  Manager Office Number?",
    },
  ])
  .then(({ name, email, officeNumber }) => {
      
  })
  .catch((err) => {
      console.log(err);
  })
};

inquirer.prompt([
  { type: "input", name: "name", message: "What is your name?" },
]);
