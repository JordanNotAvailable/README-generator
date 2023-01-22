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
  return `# ${data.title}
## Description
${data.Description}
## Installation
The following necessary dependencies: ${data.Installation}, must be installed to run the application properly. 
## Usage
In order to use this app, ${data.Usage}
## License
${data.License}.
## Credits
${data.Credit}
## Tests
The following commands are needed to run the test: ${data.Tests}
`
};

module.exports = generateMarkdown;