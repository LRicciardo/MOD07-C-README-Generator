// TODO: Include packages needed for this application
// const inquirer = require('inquirer');
const {writeFile} = require('fs').promises;
const {readFile} = require('fs').promises;
const fs  = require('fs');
const {generateMarkdown} = require('./utils/generateMarkdown.js');
const generateMd = require('./utils/generateMarkdown.js');

const questions = require('./utils/questions');

const init = () => {    
    const answers =  readFile("answersFile.json", "utf8", (err)=> err?console.log(err):console.log("Successfully read answers file"))
    .then
    
    const mdData = generateMd(answers);
    console.log (mdData);
    // writeFile('./result/README.md', mdContent, (err)=> err?console.log(err):console.log("Successfully created Markdown file"));

};


// Function call to initialize app
init();