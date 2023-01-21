// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
const util = require("util");

const generatorMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "What is the title of the project?",
    name: "Title"
}, {
    type: "input",
    message: "What is the project about? Give a detailed description of your project?",
    name: "Description"
}, {
    type: "input",
    message: "What does the user need to install to run this app (ie...dependencies)?",
    name: "Installation"
}, {
    type: "input",
    message: "How is the app used? Give instructions",
    name: "Usage"
}, {
    type: "input",
    message: "What liscence is being used?",
    name: "License"
}, {
    type: "input",
    message: "Who contributed to this project?:",
    name: "Credit"
}, {
    type: "input",
    message: "What commands are needed to test this app?",
    name: "Tests"
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function(err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log("success")
        }
    })

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(data) {
            writeToFile("README.md", generatorMarkdown(data));
            console.log(data)

        })

}

// Function call to initialize app
init();
