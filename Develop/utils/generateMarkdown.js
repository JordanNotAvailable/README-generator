// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return ""
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
  ## Description
  ${data.Description}
  ## Table of Contents 
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Installation
  The following necessary dependencies: ${data.Installation} must be installed to run the application properly.
  ## Usage
  In order to use this app, ${data.Usage}
  ## License
  This project is licensed under the ${data.License} license. 
  ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
  ## Contributing
  ​Contributors: ${data.Contributing}
  ## Tests
  The following commands are needed to run the test: ${data.Tests}
  ## Questions
  If you have any questions about the repo at GitHub : https://github.com/${data.Username}, open an issue or contact ${data.Username} directly at : ${data.Email}.
  `
  }

module.exports = generateMarkdown;