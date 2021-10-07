const Intern = require("../lib/Intern");

describe("create an Intern", () => {
  const myIntern = new Intern("Maya", 123, "Maya1@mymail.com", "JFK");

  test("check name", () => {
    expect(myIntern.name).toEqual("Maya");
  });

  test("check Id", () => {
    expect(myIntern.getId()).toEqual(123);
  });

  test("check Email", () => {
    expect(myIntern.getEmail()).toEqual("Maya1@mymail.com");
  });

  test("check School", () => {
    expect(myIntern.getSchool()).toEqual("JFK");
  });

  test("check Role", () => {
    expect(myIntern.getRole()).toEqual("Intern");
  });
});
