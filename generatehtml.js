function generateHtml(team = []) {
    team.forEach(member => console.log(member));
    const manager = team.find(member => member.role === 'Manager');
    const teamMemberMarkup = team
        .filter(member => member.role !== 'Manager')
        .map(member => `<p>Team Member:${member.role} ${member.name}</p>`)
        .join(''); 
    return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mock HTML</title>
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
    ${teamMemberMarkup}
`;
   
};

module.exports = generateHtml;

