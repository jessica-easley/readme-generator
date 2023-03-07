// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license);
  if (license != "none") {
    return `![License](https://img.shields.io/badge/License-${license}-lightblue.svg)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// link in the table of contents. not an external link!
function renderLicenseLink(license) {
  if (license != "none") {
    return `[${license}](https://choosealicense.com/licenses/${license})`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license != "none") {
    return `
    ##[License](#table-of-contents)
    This application has the following license:
    ${renderLicenseLink(license)}
    `;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

${renderLicenseBadge(data.license)}

${renderLicenseLink(data.license)}

${renderLicenseSection(data.license)}

## Table of Contents
* [Project Title](#Title)
* [Description](#Description)
* [Installation](#Install)
* [Usage](#Usage)
* [Github](#Github)
* [Email](#Email)
* [License](#License)
* [Contributions](#Contributors)
* [Tests](#Test)
* [Questions](#Questions)

## [Description](#table-of-contents)
${data.description}

## [Installation](#table-of-contents)
${data.install}

## [Usage](#table-of-contents)
${data.usage}

## [Contributors](#table-of-contents)
${data.contributors}

## [Tests](#table-of-contents)
${data.test}

## [Questions](#table-of-contents)
  If you have any further questions please reach out to me on github or via email.
* Github Username: ${data.github}
* Email Address: ${data.email}
 `;
}

module.exports = generateMarkdown;
