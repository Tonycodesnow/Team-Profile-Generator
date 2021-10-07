const Engineer = require("../lib/Engineer");

describe("create a Engineer", () => {
  const myEngineer = new Engineer("Tommy", 123, "Tommy1@mymail.com", "Tommycodesnow");

  test("check name", () => {
    expect(myEngineer.name).toEqual("Tommy");
  });

  test("check Id", () => {
    expect(myEngineer.getId()).toEqual(123);
  });

  test("check Email", () => {
    expect(myEngineer.getEmail()).toEqual("Tommy1@mymail.com");
  });

  test("check GitHub", () => {
    expect(myEngineer.getGitHub()).toEqual("Tommycodesnow");
  });

  test("check Role", () => {
    expect(myEngineer.getRole()).toEqual("Engineer");
  });
});
