function generateHtml(team = []) {
    team.forEach(member => console.log(member));
    const manager = team.find(member => member.role === 'Manager');
    const teamMemberMarkup = team
        .filter(member => member.role !== 'Manager')
        .map(member => `<p>Team Member:${member.role} ${member.name}</p>`)
        .join(''); 
    return `
    Manager:${manager.name} ${manager.email}
    <br />
    ${teamMemberMarkup}
`;
   
};

module.exports = generateHtml;

