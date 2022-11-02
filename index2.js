//
// This is for testing the generation of the Markdown File
// Not for final
//
// const inquirer = require('inquirer');
const { writeFile } = require("fs").promises;
const { readFile } = require("fs").promises;
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
const questions = require("./utils/questions");

const init = () => {
  //  gets the answer fron the JSON file instead of asking the questions
  const answers = fs.readFileSync("answersFile.json", "utf8", (err) =>
    err ? console.log(err) : console.log("Successfully read answers file")
  );

  // console.log (answers);
  // console.log(typeof answers);

  let answerObj = JSON.parse(answers);
  // console.log(answerObj);
  // console.log(typeof answerObj);

  const mdContent = generateMarkdown(answerObj);
  writeFile("./result/README.md", mdContent, (err) =>
    err ? console.log(err) : console.log("Successfully created Markdown file")
  );
};

// Function call to initialize app
init();
