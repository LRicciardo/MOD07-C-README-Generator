// TODO: Include packages needed for this application
// const inquirer = require('inquirer');
const {writeFile} = require('fs').promises;
const fs  = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
// const questions = [
//     {
//         type: "input",
//         name: "repoName",
//         message: "What is the name of your repository?",
//     },
//     {
//         type: "input",
//         name: "projName",
//         message: "What is the title of your project?",
//     },
//     {
//         type: "input",
//         name: "projDesc",
//         message: "Describe your project.",
//         // default: false,
//         // validate(text) {
//         //     if (text.split('\n').length < 2) {
//         //       return 'Must be at least 2 lines.';
//         //     }
      
//         //     return true;
//         //   },
//         //   waitUserInput: true,
//     },
//     {
//         type: "confirm",
//         name: "toc",
//         message: "Do you need a Table of Contents?",
//         default: "NO",
//         choices: [
//             {
//                 name: "YES",
//             },
//             {
//                 name: "NO",
//             },
//         ],
//     },
//     {
//         type: "input",
//         name: "projSteps",
//         message: "What steps are requred to install your project?",
//     },
//     {
//         type: "input",
//         name: "projScreenShot",
//         message: "Do you want to include a screenshot? (If yes, type the location of the image)",
//     },
//     {
//         type: "input",
//         name: "projResource",
//         message: "List your resources and collaborators.",
//     },
//     {
//         type: "list",
//         name: "projLicense",
//         message: "What license is your project using?", // can badge this
//         choices: [
//             new inquirer.Separator(' = Available Licenses = '),
//             'NONE',
//             'Apache 2.0 License',
//             'Boost Software License 1.0',
//             'BSD 3-Clause License',
//             'Eclipse Public License 1.0',
//             'IBM Public License Version 1.0',
//             'ISC License (ISC)',
//             'The MIT License',
//             'Mozilla Public License 2.0',
//             'The Perl License',
//             'The Artistic License 2.0',
//             'SIL Open Font License 1.1',
//             'The Unlicense',          
//             'The Do What the Fuck You Want to Public License (WTFPL)',        
//             'The zlib/libpng License',
//             new inquirer.Separator(' = Creative Commons = '),

//             ' CC0',
//             ' Attribution 4.0 International',
//             ' Attribution-ShareAlike 4.0 International',
//             ' Attribution-NonCommercial 4.0 International',
//             ' Attribution-NoDerivates 4.0 International',
//             ' Attribution-NonCommmercial-ShareAlike 4.0 International',
//             ' Attribution-NonCommercial-NoDerivatives 4.0 International',
//             new inquirer.Separator(' = GNU = '),

//             ' GNU GPL v3',
//             ' GNU GPL v2',
//             ' GNU AGPL v3',
//             ' GNU LGPL v3',
//             ' GNU FDL v1.3',
//             new inquirer.Separator(' = The Organization for Ethical Source = '),

//             ' The Hippocratic License 2.1',
//             ' The Hippocratic License 3.0',
//             new inquirer.Separator(' = Open Data Commons = '),

//             ' Attribution License (BY)',
//             ' Open Database License (ODbL)',
//             ' Public Domain Dedication and License (PDDL)',
//         ],
//     },
//     {
//         type: "checkbox",
//         name: "projLang",
//         message: "What language(s) are you using?",     // can badge this
//         choices: [
//             'JavaScript',
//             'JavaScript with Node.js',
//             "HTML with CSS",
//             "HTML with Bootstrap",
//             "HTML with Bulma",
//         ],      
//         validate(ansLang) {
//             if (ansLang.length < 1) {
//               return 'You must choose at least one language.';
//             }
//             return true;
//         },
//     },
//     {
//         type: "input",
//         name: "projFeature",
//         message: "What features are in your project?",
//     },
  
//     // "How can users contribute?",
//     // "How can a user test your code?"
// ];

const questions = require('./utils/questions');

// const generateREADME = ({ repoName, projName, projDesc, toc, projSteps, projScreenShot, projResource, projLicense, projLang, projFeature }) =>


// TODO: Create a function to write README file
// function writeToFile("README.md", data, (err) =>
//  err?console.log(err): console.log("README.md written")); 

// TODO: Create a function to initialize app


const init = () => {    
    questions()
        .then((response) => {
            // console.log(JSON.stringify(answers, null, '  '));
            const answers =  JSON.stringify(response, null, '  ');
            writeFile('answersFile.json', answers, (err)=> err?console.log(err):console.log("Successfully created answersFile"));
            const mdContent = generateMarkdown(answers);
            writeFile('./result/README.md', mdContent, (err)=> err?console.log(err):console.log("Successfully created Markdown file"));
        })
        .catch((err) => console.error(err));
};


// Function call to initialize app
init();