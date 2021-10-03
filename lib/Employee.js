
class Employee { 
    constructor (name, id, email ) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // returns a name 
    getName() {
        return `Individual's name is ${this.name}`
    }

    getId() {
        return `Individuals Id is ${this.id}`
    }
}

module.exports = Employee;