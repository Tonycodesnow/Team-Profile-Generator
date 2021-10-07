const Manager = require("../lib/Manager");

describe("create a manager", () => {
  const myManager = new Manager("Sam", 123, "Sam1@mymail.com", 1);

  test("check name", () => {
    expect(myManager.getName()).toEqual("Sam");
  });

  test("check Id", () => {
    expect(myManager.getId()).toEqual(123);
  });

  test("check Email", () => {
    expect(myManager.getEmail()).toEqual("Sam1@mymail.com");
  });

  test("check OfficeNumber", () => {
    expect(myManager.getOfficeNumber()).toEqual(1);
  });

  test("check Role", () => {
    expect(myManager.getRole()).toEqual("Manager");
  });
});
