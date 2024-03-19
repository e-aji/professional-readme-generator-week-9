
function renderLicenseBadge (license) {

    let licenseBadge = '';

    switch(license) {

        case 'MIT':
            licenseBadge = 'https://img.shields.io/badge/License-MIT-yellow.svg';
            break;
        case 'APACHE 2.0':
            licenseBadge = 'https://img.shields.io/badge/License-Apache_2.0-blue.svg';
            break;
        case 'GPL 3.0':
            licenseBadge = 'https://img.shields.io/badge/License-GPL_v3-blue.svg';
            break;
        case 'BSD 3':
            licenseBadge = 'https://img.shields.io/badge/License-BSD_3--Clause-blue.svg';
            break;
        default:
            licenseBadge = 'https://img.shields.io/badge/License-none-red.svg';
            break;
    }

    return licenseBadge;

}

function renderLicenseLink (license) {

    let licenseLink = '';

    switch(license) {

        case 'MIT':
            licenseLink = 'https://opensource.org/licenses/MIT';
            break;
        case 'APACHE 2.0':
            licenseLink = 'https://opensource.org/licenses/Apache-2.0';
            break;
        case 'GPL 3.0':
            licenseLink = 'https://www.gnu.org/licenses/gpl-3.0';
            break;
        case 'BSD 3':
            licenseLink = 'https://opensource.org/licenses/BSD-3-Clause';
            break;
        default:
            licenseLink = '';
            break;
    }    

    return licenseLink;
    
}

function renderLicenseSection (license) {
    
    let licenseSection = '';

    switch(license) {

        case 'MIT':
            licenseSection = `This project is licensed under the MIT license.`;
            break;
        case 'APACHE 2.0':
            licenseSection = `This project is licensed under the Apache 2.0 license.`;
            break;
        case 'GPL 3.0':
            licenseSection = `This project is licensed under the GPL 3.0 license.`;
            break;
        case 'BSD 3':
            licenseSection = `This project is licensed under the BSD 3 license.`;
            break;
        default:
            licenseSection = '';
            break;

    }

    return licenseSection;
}


const generateMarkdown = (data) => {

    return `
        # ${data.title}

        ${renderLicenseBadge(data.license)}

        ## Description

        ${data.description}

        ## Table of Contents

        * [Installation](#installation)
        * [Usage](#usage)
        ${renderLicenseLink(data.license)}
        * [License](#license)
        * [Contribution](#contribution)
        * [Tests](#tests)
        * [Questions](#questions)


        ## Installation

        To install required dependencies, run this command:

        \'\'\
        ${data.installation}
        \'\'\

        ## Usage
        ${data.usage}

        ${renderLicenseSection(data.license)}

        ## License
        ${data.license}

        ## Contribution

        ${data.contribution}

        ## Tests

        To conduct necessary tests, run this command:

        \'\'\
        ${data.test}
        \'\'\

        ## Questions

        if you have any questions about this repo, contact me directly at ${data.email}. 
        You can find more of my work at [${data.github}](https://github.com/${data.github}).
        `;
  };
  
  module.exports = generateMarkdown;