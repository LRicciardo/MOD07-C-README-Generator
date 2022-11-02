const { writeFile } = require("fs").promises;
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

const questions = require("./utils/questions");

const init = () => {
  questions()
    .then((response) => {
      // create an answer file using JSON from the response to the questions
      const answers = JSON.stringify(response, null, "  ");
      writeFile("answersFile.json", answers, (err) =>
        err ? console.log(err) : console.log("Successfully created answersFile")
      );

      // generate the Markdown file from the response to the questions
      const mdContent = generateMarkdown(response);
      writeFile("./result/README.md", mdContent, (err) =>
        err
          ? console.log(err)
          : console.log("Successfully created Markdown file")
      );
    })
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();