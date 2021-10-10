const { writeFile, copyFile } = require("./utils/generate-site");
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


const team = [];

const generateHtml = (team) => {
    writeFile(team)
    // console.log("checking weather its called")
}

function addManager() {
  inquirer
    .prompt([
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
      const myManager = new Manager(name, Id, email, officeNumber);
      team.push(myManager);
      newTeamMember();
    })
    .catch((err) => {
      console.log(err);
    });
}

function newTeamMember() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "Who do you want to add next?",
        choices: ["Intern", "Engineer", "Quit"],
      },
    ])
    .then(({ choice }) => {
      console.log(choice);
      if (choice === "Intern") {
        addIntern();
      } else if (choice === "Engineer") {
        addEngineer();
      } else {
       generateHtml()
      }
    });
}

function addEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is  the Engineer's Name?",
      },
      {
        type: "input",
        name: "Id",
        message: "What is  the  Engineer's Id?",
      },
      {
        type: "input",
        name: "email",
        message: "What is  the  Engineer's Email?",
      },
      {
        type: "input",
        name: "github",
        message: "Enter the Engineer's GitHub Username (Required)?",
        validate: github => {
          if (github) {
            return true;
          } else {
            console.log('Please enter your GitHub username!');
            return false;
          }
        }
      },
    ])
    .then(({ name, Id, email, github }) => {
      const myEngineer = new Manager(name, Id, email, github);
      team.push(myEngineer);
      newTeamMember();
    })
    .catch((err) => {
      console.log(err);
    });
}

function addIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is  the Intern's Name?",
      },
      {
        type: "input",
        name: "Id",
        message: "What is  the  Intern's Id?",
      },
      {
        type: "input",
        name: "email",
        message: "What is  the  Intern's Email?",
      },
      {
        type: "input",
        name: "school",
        message: "What is the Intern's school?",
      },
    ])
    .then(({ name, Id, email, school }) => {
      const myintern = new Manager(name, Id, email, school);
      team.push(myintern);
      newTeamMember();
    })
    .catch((err) => {
      console.log(err);
    });
}

// create html

addManager();
// fs.writeFile(team);