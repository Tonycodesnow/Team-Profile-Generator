const Employee = require("../lib/Employee");

describe("create a Employee", () => {
  const myEmployee = new Employee("Sam", 123, "Sam1@mymail.com");

  test("check name", () => {
    expect(myEmployee.getName()).toEqual("Sam");
  });

  test("check Id", () => {
    expect(myEmployee.getId()).toEqual(123);
  });

  test("check Email", () => {
    expect(myEmployee.getEmail()).toEqual("Sam1@mymail.com");
  });

  test("check Role", () => {
    expect(myEmployee.getRole()).toEqual("Employee");
  });
});
