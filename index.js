const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown');
const questions = require('./utils/questions');

function writeToFile(markdown){

    fs.writeFile('README.md', markdown, (err) =>
    err ? console.error(err) : console.log('Successfully created README.md file!')
    );
}

function init (){

    inquirer 
        .prompt(questions)
        .then((data) => {
            const markdown = generateMarkdown(data);
            writeToFile(markdown);
        })

}

init();