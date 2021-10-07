const Employee = require("../lib/Employee");

describe("create a Employee", () => {

    test("check name", () => {
        const myEmployee = new Employee ("Sam", 123, "Sam1@mymail.com");
        
        expect (myEmployee.getName()).toEqual("Sam");
    });
    
    test("check Id", () => {
        const myEmployee = new Employee ("Sam", 123, "Sam1@mymail.com");
        
        expect (myEmployee.getId()).toEqual(123);
        
    });
    
    
    test("check Email", () => {
        const myEmployee = new Employee ("Sam", 123, "Sam1@mymail.com");
        
        expect (myEmployee.getEmail()).toEqual("Sam1@mymail.com");
        
    });
    
    
    test("check Role", () => {
        const myEmployee = new Employee ("Sam", 123, "Sam1@mymail.com");
        
        expect (myEmployee.getRole()).toEqual('Employee');
    
    })
});