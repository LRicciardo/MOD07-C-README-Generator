const inquirer = require("inquirer");

// List of questions to ask for README
const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "repoName",
      message: "What is the name of your repository?",
    },
    {
      type: "input",
      name: "projName",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "projDesc",
      message: "Describe your project.",
    },
    {
      type: "input",
      name: "projSteps",
      message: "What steps are requred to install your project?",
    },
    {
      type: "input",
      name: "projScreenShot",
      message:
        "Do you want to include a screenshot? (If yes, type the location of the image)",
    },
    {
      type: "input",
      name: "projResource",
      message: "List your resources and collaborators.",
    },
    {
      type: "list",
      name: "projLicense",
      message: "What license is your project using?", // can badge this
      choices: [
        new inquirer.Separator(" = Available Licenses = "),
        "NONE",
        "Apache 2.0 License",
        "Boost Software License 1.0",
        "Eclipse Public License 1.0",
        "IBM Public License Version 1.0",
        "ISC License (ISC)",
        "The MIT License",
        "Mozilla Public License 2.0",
        "The Perl License",
        "The Artistic License 2.0",
        "SIL Open Font License 1.1",
        "The Unlicense",
        "The Do What the Fuck You Want to Public License (WTFPL)",
        "The zlib/libpng License",
        new inquirer.Separator(" = BSD = "),
        "BSD 3-Clause License",
        "BSD 2-Clause License",
        new inquirer.Separator(" = Creative Commons = "),

        " CC0",
        " Attribution 4.0 International",
        " Attribution-ShareAlike 4.0 International",
        " Attribution-NonCommercial 4.0 International",
        " Attribution-NoDerivates 4.0 International",
        " Attribution-NonCommmercial-ShareAlike 4.0 International",
        " Attribution-NonCommercial-NoDerivatives 4.0 International",
        new inquirer.Separator(" = GNU = "),

        " GNU GPL v3",
        " GNU GPL v2",
        " GNU AGPL v3",
        " GNU LGPL v3",
        " GNU FDL v1.3",
        new inquirer.Separator(" = The Organization for Ethical Source = "),

        " The Hippocratic License 2.1",
        " The Hippocratic License 3.0",
        new inquirer.Separator(" = Open Data Commons = "),

        " Attribution License (BY)",
        " Open Database License (ODbL)",
        " Public Domain Dedication and License (PDDL)",
      ],
    },
    {
      type: "list",
      name: "badgeColor",
      message: "What color do you want the badge?",
      choices: [
        "brightgreen",
        "green",
        "yellow",
        "yellowgreen",
        "orange",
        "red",
        "blue",
        "grey",
        "lightgrey",
      ],
    },
    {
      type: "checkbox",
      name: "projLang",
      message: "What language(s) are you using?", // can badge this?
      choices: [
        "Markdown",
        "JavaScript",
        "JavaScript with Node.js",
        "HTML with CSS",
        "HTML with Bootstrap",
        "HTML with Bulma",
      ],
      validate(ansLang) {
        if (ansLang.length < 1) {
          return "You must choose at least one language.";
        }
        return true;
      },
    },
    {
      type: "input",
      name: "projFeature",
      message: "What features are in your project?",
    },
    {
      type: "input",
      name: "projTest",
      message: "How can a user test your code?",
    },
    {
      type: "input",
      name: "projGitHub",
      message: "Type your GitHub username:",
      validate(ansUser) {
        if (ansUser.length < 1) {
          return "You must enter your username.";
        }
        return true;
      },
    },
    {
      type: "input",
      name: "projEmail",
      message: "Type your email address:",
      validate(ansEmail) {
        if (ansEmail.length < 1) {
          return "You must enter your email address.";
        }
        return true;
      },
    },
  ]);
};

module.exports = questions;
