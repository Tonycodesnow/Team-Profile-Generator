const { writeFile, copyFile } = require("./utils/generate-site");
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


const team = [];

const generateHtml = () => {
  console.log(team)
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
        validate: function (input) {
          if (input.length <= 0) {
            return 'Please enter a valid input';
          }
          return true;
        }
      },
      {
        type: "input",
        name: "Id",
        message: "What is  the  Manager's Id?",
        validate: function (input) {
          if (input.length <= 0) {
            return 'Please enter a valid input';
          }
          return true;
        }
      },
      {
        type: "input",
        name: "email",
        message: "What is  the  Manager Email?",
        validate: function (input) {
          if (input.length <= 0) {
            return 'Please enter a valid input';
          }
          return true;
        }
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is  the  Manager Office Number?",
        validate: function (input) {
          if (input.length <= 0) {
            return 'Please enter a valid input';
          }
          return true;
        }
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
    console.log(team)
}

function addEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is  the Engineer's Name?",
        validate: function (input) {
          if (input.length <= 0) {
            return 'Please enter a valid input';
          }
          return true;
        }
      },
      {
        type: "input",
        name: "Id",
        message: "What is  the  Engineer's Id?",
        validate: function (input) {
          if (input.length <= 0) {
            return 'Please enter a valid input';
          }
          return true;
        }
      },
      {
        type: "input",
        name: "email",
        message: "What is  the  Engineer's Email?",
        validate: function (input) {
          if (input.length <= 0) {
            return 'Please enter a valid input';
          }
          return true;
        }
      },
      {
        type: "input",
        name: "github",
        message: "Enter the Engineer's GitHub Username?",
        validate: function (input) {
          if (input.length <= 0) {
            return 'Please enter a valid input';
          }
          return true;
        }
      },
    ])
    .then(({ name, Id, email, github }) => {
      const myEngineer = new Engineer(name, Id, email, github);
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
        validate: function (input) {
          if (input.length <= 0) {
            return 'Please enter a valid input';
          }
          return true;
        }
      },
      {
        type: "input",
        name: "Id",
        message: "What is  the  Intern's Id?",
        validate: function (input) {
          if (input.length <= 0) {
            return 'Please enter a valid input';
          }
          return true;
        }
      },
      {
        type: "input",
        name: "email",
        message: "What is  the  Intern's Email?",
        validate: function (input) {
          if (input.length <= 0) {
            return 'Please enter a valid input';
          }
          return true;
        }
      },
      {
        type: "input",
        name: "school",
        message: "What is the Intern's school?",
        validate: function (input) {
          if (input.length <= 0) {
            return 'Please enter a valid input';
          }
          return true;
        }
      },
    ])
    .then(({ name, Id, email, school }) => {
      const myintern = new Intern(name, Id, email, school);
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