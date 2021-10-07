const Intern = require("../lib/Intern");

test("create an Intern", () => {
    const myIntern = new Intern ("Maya", 123, "Maya1@mymail.com");

    expect (myIntern.name).toEqual("Maya");

});