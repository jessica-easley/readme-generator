// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please enter your project description',
      },
      {
        type: 'input',
        name: 'install',
        message: 'Please enter your project installation instructions',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What can this project be used for?',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Please choose what type of license you would like',
        choices: ["MIT", "Mozilla", "Apache 2.0", "Eclipse", "None"]
      },
      {
        type: 'input',
        name: 'contributors',
        message: 'Please enter the contributors to this project',
      },
      {
        type: 'input',
        name: 'test',
        message: 'Explain how this project was tested prior to deployment',
      },
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  // console.log(fileName)
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        // console.log("Confirmed! Your README file has been generated.")
    });
}

// TODO: Create a function to initialize app
function init() {
  questions()
  .then((answers) => {
 const readMeText = markdown(answers)
//  console.log(readMeText)
 writeToFile('README.md', readMeText)
})
 }

// Function call to initialize app
init();
