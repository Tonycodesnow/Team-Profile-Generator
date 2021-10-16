const fs = require("fs");
const { url } = require("inspector");
const { resolve } = require("path");
const generatePage = require("../src/page-template");

const writeFile = (team) => {
  fs.writeFileSync(
    "./dist/index.html",
    generatePage(team),
    "utf8"
  );
};

const copyFile = () => {
    // Make copyFile() return a new Promise object, like we do with writeFile() above.
    return new Promise((resolve, reject) => {
        // Move the fs.copyFile() code from app.js into the returning Promise object's function in our copyFile() function 
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            // If there's an error, reject() the error and return out of the function.
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'Successful'
                // If it's successful, resolve() it with a message.
            });
        });
    });
};

module.exports = { writeFile, copyFile };