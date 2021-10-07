const Employee = require("../lib/Employee");

test("create an employee", () => {
    const myEmployee = new Employee ("kai", 123, "kai1@mymail.com");

    expect (myEmployee.name).toEqual("kai");

});