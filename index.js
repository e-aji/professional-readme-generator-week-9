const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown');
const questions = require('./utils/questions');

function writeToFile(markdown){

    fs.writeFile('README.md', markdown, (err) =>
    err ? console.error(err) : console.log('Successfully created README.md!')
    );
}

function init (){



    
}