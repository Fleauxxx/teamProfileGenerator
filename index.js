// Packages included in this application
const fs = require('fs');
const inquirer = require('inquirer');
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
            const engineer = new Engineer(response.)

        })
    }

    addTeamMember();
