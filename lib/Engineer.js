const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email)
        this.gitGub = gitHub;
    }
    getRole(){
        return 'Engineer'
    }

    getGitHub(){
        return this.gitHub
    }
}

module.exports = Engineer