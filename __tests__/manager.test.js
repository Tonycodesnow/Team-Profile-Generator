const  Manager = require("../lib/Manager");

test("create an manager", () => {
    const myManager = new Manager ("Sam", 123, "Sam1@mymail.com");

    expect (myManager.name).toEqual("Sam");

});