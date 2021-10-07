const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const team = []

function addManager() {
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is  the Team Manager Name?",
    },
    {
        type: "input",
        name: "Id",
        message: "What is  the  Manager's Id?",
      },
    {
      type: "input",
      name: "email",
      message: "What is  the  Manager Email?",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is  the  Manager Office Number?",
    },
  ])
  .then(({ name, Id, email, officeNumber }) => {
    const myManager = new Manager( name, Id, email, officeNumber);
    team.push(myManager)
    newTeamMember()
  })
  .catch((err) => {
      console.log(err);
  })
};

function addIntern(){}

function newTeamMember() {
    inquirer.prompt([
        {
        type: "list",
        name: "choice",
        message: "What do you wnat to add next?",
        choices: ['Intern', 'Engineer', 'Quit'],
        }
    ])
    .then(({choice}) => {
        console.log(choice);
        if (choice === 'Intern') {
            addIntern()
        } else if (choice === 'Engineer') {
            addEngineer()
        } else {
            quit()
        }
    })
}


addManager()