const Employee = require('./Employee');

class Engineer extends Employee { 
    constructor(name, id, email) {
       super(name, id, email)
        this.github = github;

    }
    // returns a name 
    getName() {
        return `Individual's name is ${this.name}`
    }

    getId() {
        return `Individuals Id is ${this.id}`
    }
}

module.exports = Engineer;