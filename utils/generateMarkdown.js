// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
console.log(license) 
if (license != 'none') {
  return `![License](https://img.shields.io/badge/License-${license}-lightblue.svg)`
}
return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// link in the table of contents. not an external link!
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## ${data.description}
 ${renderLicenseBadge(data.license)}
 `;
}

module.exports = generateMarkdown;
