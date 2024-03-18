
const renderLicenseBadge = (license) => {
    
}


const renderLicenseLink = (license) => {
    
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