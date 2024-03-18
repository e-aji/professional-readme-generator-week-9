const questions = [

    {
        type: 'input',
        name: 'title',
        message: 'Please provide a title of your project',
    },

    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project',
    },

    {
        type: 'input',
        name: 'installation',
        message: 'How do you install this application?'
    },

    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this application?'
    },

    {
        type: 'list',
        name: 'license',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
        message: 'What kind of license would your project have?',
    },

    {
        type: 'input',
        name: 'contribution',
        message: 'What does the user need to know about contributing to this project'
    },

    {
        type: 'input',
        name: 'test',
        message: 'How do you test this application?',
        default: 'npm test',
    },

    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },

]

module.exports = questions;