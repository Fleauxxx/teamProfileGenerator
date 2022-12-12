// Packages included in this application
const fs = require('fs');
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/manager');

// array of questions for user input
function addTeamMember(){
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enters the managers name',
            default: 'Floyd',
        },
        {
            type: 'input',
            name: 'id', 
            message: 'Please enter the members Id number',
            default: '1',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter office number',
            
        },
    ])
    .then((response) => {
        const manager = new Manager(response.name, response.id, response.email, response.officeNumber)
        createTeam();
    })
    
    }

    function createTeam () {
        inquirer
        .prompt([
            {
                type: 'list',
                name: 'memberChoice',
                message: 'Select a member choice',
                choices: ['Engineer', 'Intern', 'Finish building'],
            }
        ])
        .then((response) => {
            const engineer = new Engineer(response.name, response.id, response.email, response.gitHub)
            addEngineer();
        })
    }
    
    
    function addEngineer(){
        inquirer
        .prompt([
            {
                type: 'input',
                message: 'Enter your GitHub username',
                name: 'gitHub'
            }
        ])   
    };

    function addIntern(){
        inquirer
        .prompt([
            {
                type: 'input',
                message: 'Please enter the name of your school',
                name: 'school'
            }
        ])
        .then((response) => {
            const intern = new Intern(response.name, response.id, response.email, response.school)
            addIntern();
        })
    };

    function finishBuilding(){

    }
    

    addTeamMember();

   
