const Engineer = require("../lib/Engineer");

test("create an Engineer", () => {
    const myEngineer = new Engineer ("Tommy", 123, "Tommy1@mymail.com");

    expect (myEngineer.name).toEqual("Tommy");

});