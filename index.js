// required in this application
const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/manager");
const generateHtml = require('./generateHtml');

const team =  [];

// array of questions for user input
function addTeamMember() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please enters the Managers name",
      },
      {
        type: "input",
        name: "id",
        message: "Please enter the Id number",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Enter office number",
      },
      {
        type: "input",
        name: "email",
        message: "Enter your email address",
      },
    ]) 
    .then((response) => {
      const manager = new Manager(
        response.name,
        response.id,
        response.email,
        response.officeNumber
      );
      team.push(manager);
      console.log(team);
      createTeam();
    })
  }
// function that will allow you to add a team member or finish the build.cd
function createTeam() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "memberChoice",
        message: "Select a member choice",
        choices: ["Engineer", "Intern", "finish Building"],
      },
    ])
    .then((response) => {
      switch (response.memberChoice) {
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;
        case "finish Building":
          finishBuilding();
          break;
      }
    });
}


// Function to add an engineer to the team
function addEngineer() {
  // Inquirer prompt to ask Engineer their gitHub username.
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please enters the Engineers name",
      },
      {
        type: "input",
        name: "email",
        message: "Enter your email address",
      },
      {
        type: "input",
        name: "id",
        message: "Please enter the Id number",
      },
      {
        type: "input",
        message: "Enter your GitHub username",
        name: "gitHub",
      },
    ])

    // .then function to return the user responses and create a new Engineer class
    .then((response) => {
      const engineer = new Engineer(
        response.name,
        response.id,
        response.email,
        response.gitHub
      );
      team.push(engineer);
      newMember();
    });
}

// Function to add an intern to the team
function addIntern() {
  // Inquirer prompt to ask intern their  school name.
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please enters the Interns name",
      },
      {
        type: "input",
        name: "email",
        message: "Enter your email address",
      },
      {
        type: "input",
        name: "id",
        message: "Please enter the Id number",
      },
      {
        type: "input",
        message: "Please enter the name of your school",
        name: "school",
      },
    ])
    // .then function to return the user responses and create a new Intern class
    .then((response) => {
      const intern = new Intern(
        response.name,
        response.id,
        response.email,
        response.school
      );
      team.push(intern);
      newMember();
    });
}

// function to add a new member to the generator
function newMember() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Would you like to add another team member?",
        choices: ["yes", "no"],
        name: "anotherMember",
      },
    ])
    .then((response) => {
      switch (response.anotherMember) {
        case "yes":
          createTeam();
          break;
        case "no":
          finishBuilding();
          break;
      }
    });
};

// function to finish building the profile generator and render the html
function finishBuilding() {
  console.log('html being generated')
  console.log(team);
  const html = generateHtml(team)
  fs.writeFile('index.html', html, (error) =>{
    if (error){
      console.log("Error", error);
    } else {
      console.log('html being generated....')
    }
  })
};

addTeamMember();