const Employee = require('./Employee');

class Manager extends Employee { 
    constructor (name, id, email, officeNumber ) {
        super(name, id, email)

        this.officeNumber = officeNumber;
    }
    // returns a name 
    getOfficeNumber() {
        return this.officenumber;
    }
    getRole() {
        return `Manager`
    }
}

module.exports = Manager;