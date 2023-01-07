const Engineer = require("./lib/Engineer");

function generateHtml(team = []) {
    team.forEach(member => console.log(member));
    const manager = team.find(member => member.role === 'Manager');
    const engineer = team.find(member => member.role === 'Engineer');
    const intern = team.find(member => member.role === 'Intern');
    const teamMemberMarkup = team
        .filter(member => member.role !== 'Manager')
        .map(member => `<h5>${member.name}</h5>
        <h5>${member.role}</h5>`)
        .join(''); 
    return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Team Member Profiles</title>
    <link rel="stylesheet" href="dist/styles.css" />
  </head>
  <body>
    <header class="header">
      <h1>My Team</h1>
    </header>

    <main>
      <div class="card">
        <div class="cardheader">
          <h4>${manager.name}</h4>
          <h4>Manager</h4>
        </div>
        <div class="content">
          <h6>ID:${manager.id}</h6>
          <h6>Email:${manager.email}</h6>
          <h6>Office number:${manager.officeNumber}</h6>
        </div>
      </div>
      <div class="card">
        <div class="cardheader">
        <h4>${teamMemberMarkup}<h4>
        </div>
        <div class="content">
          <h6>ID:${engineer.id}</h6>
          <h6>Email:${engineer.email}</h6>
          <h6>GitHub:${engineer.gitHub}</h6>
        </div>
      </div>
      <div class="card">
      <div class="cardheader">
      <h4>${teamMemberMarkup}</h4>
      </div>
      <div class="content">
        <h6>ID:${engineer.id}</h6>
        <h6>Email:${engineer.email}</h6>
        <h6>GitHub:${engineer.gitHub}</h6>
      </div>
    </div>
    <div class="card">
    <div class="cardheader">
    <h4>${teamMemberMarkup}</h4>
    </div>
    <div class="content">
      <h6>ID:${engineer.id}</h6>
      <h6>Email:${engineer.email}</h6>
      <h6>GitHub:${engineer.gitHub}</h6>
    </div>
  </div>
      <div class="card">
        <div class="cardheader">
        <h4>${teamMemberMarkup}<h4>
        </div>
        <div class="content">
          <h6>ID:${intern.id}</h6>
          <h6>Email:${intern.email}</h6>
          <h6>School:${intern.school}</h6>
        </div>
      </div>
      
     



    ${teamMemberMarkup}
`;
   
};

module.exports = generateHtml;

