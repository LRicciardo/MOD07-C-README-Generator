// an Array of Object array with the license data. If no license "NONE" is selected.
//  future change is to fetch data from a file or API
const licenseArray = [
  {
    lName: "NONE",
    imgTag: "NONE",
    imgName: "NONE",
    licenseLink: "NONE",
  },
  {
    lName: "Apache 2.0 License",
    imgTag: "License: Apache 2.0",
    imgName: "License-Apache_2.0",
    licenseLink: "(https://opensource.org/licenses/Apache-2.0)",
  },
  {
    lName: "Boost Software License 1.0",
    imgTag: "License: Boost",
    imgName: "License-Boost_1.0",
    licenseLink: "(https://www.boost.org/LICENSE_1_0.txt)",
  },
  {
    lName: "Eclipse Public License 1.0",
    imgTag: "License: Eclipse",
    imgName: "License-EPL_1.0",
    licenseLink: "(https://opensource.org/licenses/EPL-1.0)",
  },
  {
    lName: "IBM Public License Version 1.0",
    imgTag: "License: IPL 1.0",
    imgName: "License-IPL_1.0",
    licenseLink: "(https://opensource.org/licenses/IPL-1.0)",
  },
  {
    lName: "ISC License (ISC)",
    imgTag: "License: ICL",
    imgName: "License-ISC",
    licenseLink: "(https://opensource.org/licenses/ISC)",
  },
  {
    lName: "The MIT License",
    imgTag: "License: MIT",
    imgName: "License-MIT",
    licenseLink: "(https://opensource.org/licenses/MIT)",
  },
  {
    lName: "Mozilla Public License 2.0",
    imgTag: "License: MPL 2.0",
    imgName: "License-MPL_2.0",
    licenseLink: "(https://opensource.org/licenses/MPL-2.0)",
  },
  {
    lName: "The Perl License",
    imgTag: "License: Perl",
    imgName: "License-Perl",
    licenseLink: "(https://opensource.org/licenses/Artistic-Perl-1.0)",
  },
  {
    lName: "The Artistic License 2.0",
    imgTag: "License: Artistic-2.0",
    imgName: "License-Artistic_2.0",
    licenseLink: "(https://opensource.org/licenses/Artistic-2.0)",
  },
  {
    lName: "SIL Open Font License 1.1",
    imgTag: "License: Open Font-1.1",
    imgName: "License-OFL_1.1",
    licenseLink: "(https://opensource.org/licenses/OFL-1.1)",
  },
  {
    lName: "The Unlicense",
    imgTag: "License: Unlicense",
    imgName: "license-Unlicense",
    licenseLink: "(http://unlicense.org/)",
  },
  {
    lName: "The Do What the Fuck You Want to Public License (WTFPL)",
    imgTag: "License: WTFPL",
    imgName: "License-WTFPL",
    licenseLink: "(http://www.wtfpl.net/about/)",
  },
  {
    lName: "The zlib/libpng License",
    imgTag: "License: Zlib",
    imgName: "License-Zlib",
    licenseLink: "(https://opensource.org/licenses/Zlib)",
  },
  // (" = BSD = "),
  {
    lName: "BSD 3-Clause License",
    imgTag: "License: BSD 3-Clause",
    imgName: "License-BSD_3--Clause",
    licenseLink: "(https://opensource.org/licenses/BSD-3-Clause)",
  },
  {
    lName: "BSD 2-Clause License",
    imgTag: "License: BSD 2-Clause",
    imgName: "License-BSD_2--Clause",
    licenseLink: "(https://opensource.org/licenses/BSD-2-Clause)",
  },
  // (" = Creative Commons = "),
  {
    lName: " CC0",
    imgTag: "License: CC0-1.0",
    imgName: "License-CC0_1.0",
    licenseLink: "(http://creativecommons.org/publicdomain/zero/1.0/",
  },
  {
    lName: " Attribution 4.0 International",
    imgTag: "License: CC BY 4.0",
    imgName: "License-CC_BY_4.0",
    licenseLink: "(https://creativecommons.org/licenses/by/4.0/)",
  },
  {
    lName: " Attribution-ShareAlike 4.0 International",
    imgTag: "License: CC BY-SA 4.0",
    imgName: "License-CC_BY--SA_4.0",
    licenseLink: "(https://creativecommons.org/licenses/by-sa/4.0/)",
  },
  {
    lName: " Attribution-NonCommercial 4.0 International",
    imgTag: "License: CC BY-NC 4.0",
    imgName: "License-CC_BY--NC_4.0",
    licenseLink: "(https://creativecommons.org/licenses/by-nc/4.0/)",
  },
  {
    lName: " Attribution-NoDerivates 4.0 International",
    imgTag: "License: CC BY-ND 4.0",
    imgName: "License-CC_BY--ND_4.0",
    licenseLink: "(https://creativecommons.org/licenses/by-nd/4.0/)",
  },
  {
    lName: " Attribution-NonCommmercial-ShareAlike 4.0 International",
    imgTag: "License: CC BY-NC-SA 4.0",
    imgName: "License-CC_BY--NC--SA_4.0",
    licenseLink: "(https://creativecommons.org/licenses/by-nc-sa/4.0/)",
  },
  {
    lName: " Attribution-NonCommercial-NoDerivatives 4.0 International",
    imgTag: "License: CC BY-NC-ND 4.0",
    imgName: "License-CC_BY--NC--ND_4.0",
    licenseLink: "(https://creativecommons.org/licenses/by-nc-nd/4.0/)",
  },
  // (" = GNU = "),
  {
    lName: " GNU GPL v3",
    imgTag: "License: GPL v3",
    imgName: "License-GPLv3",
    licenseLink: "(https://www.gnu.org/licenses/gpl-3.0)",
  },
  {
    lName: " GNU GPL v2",
    imgTag: "License: GPL v2",
    imgName: "License-GPL_v2",
    licenseLink: "(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)",
  },
  {
    lName: " GNU AGPL v3",
    imgTag: "License: AGPL v3",
    imgName: "License-AGPL_v3",
    licenseLink: "(https://www.gnu.org/licenses/agpl-3.0)",
  },
  {
    lName: " GNU LGPL v3",
    imgTag: "License: LGPL v3",
    imgName: "License-LGPL_v3",
    licenseLink: "(https://www.gnu.org/licenses/lgpl-3.0)",
  },
  {
    lName: " GNU FDL v1.3",
    imgTag: "License: FDL 1.3",
    imgName: "License-FDL_v1.3",
    licenseLink: "(https://www.gnu.org/licenses/fdl-1.3)",
  },
  // (" = The Organization for Ethical Source = "),
  {
    lName: " The Hippocratic License 2.1",
    imgTag: "License: Hippocratic 2.1",
    imgName: "License-Hippocratic_2.1",
    licenseLink: "(https://firstdonoharm.dev)",
  },
  {
    lname: " The Hippocratic License 3.0",
    imgTag: "License: Hippocratic 3.0",
    imgName: "License-Hippocratic_3.0",
    licenseLink: "(https://firstdonoharm.dev)",
  },
  // (" = Open Data Commons = "),
  {
    lname: " Attribution License (BY)",
    imgTag: "License: Open Data Commons Attribution",
    imgName: "License-ODC_BY",
    licenseLink: "(https://opendatacommons.org/licenses/by/)",
  },
  {
    lname: " Open Database License (ODbL)",
    imgTag: "License: ODbL",
    imgName: "License-ODbL",
    licenseLink: "(https://opendatacommons.org/licenses/odbl/)",
  },
  {
    lname: " Public Domain Dedication and License (PDDL)",
    imgTag: "License: PDDL",
    imgName: "License-PDDL",
    licenseLink: "(https://opendatacommons.org/licenses/pddl/)",
  },
];

// Creates the license badge information
function renderLicenseBadge(license, badgeColor) {
  const licenseData = licenseArray.find((element) => element.lName === license);
  // console.log(licenseData);
  const { imgTag, imgName, licenseLink } = licenseData;

  return (formBadge = `[![${imgTag}](https://img.shields.io/badge/${imgName}-${badgeColor}.svg)]${licenseLink}`);
}

function generateMarkdown(data) {
  // console.log (data);
  const {
    repoName,
    projName,
    projDesc,
    projSteps,
    projScreenShot,
    projResource,
    projLicense,
    badgeColor,
    projLang,
    projFeature,
    projTest,
    projGitHub,
    projEmail,
  } = data;

  // console.log(`Proj Lic: ${projLicense}`);
  // console.log(projLicense);
  // console.log(typeof projLicense);
  const badge = renderLicenseBadge(projLicense, badgeColor);

  return `# ${repoName} 
--- ${projName}

${badge}

## Description
${projDesc}


## Table of Contents
  
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Feature](#features)
- [How to Contribute](#contribute)
- [How to Test](#test)
- [Contact Info](#contact)

## Installation

${projSteps}


## Usage
${projLang} 
${projScreenShot}

## Credits

${projResource}

## License

This application is using the ${projLicense} License. Click on the badge  ${badge}  to follow the link to the license.

---

## Features

${projFeature}

## How to Contribute

This application follows the [Contributor Covenant](https://www.contributor-covenant.org/).

If you would like to contribute it, you can create an issue on GitHub repository at https://github.com/${projGitHub}/${repoName}. 

## Tests

${projTest}
  
## Contact Info

This application follows the [Contributor Covenant](https://www.contributor-covenant.org/).

If you would like to contact me about an issue, you can send an email to ${projEmail}.
`;
};

module.exports = generateMarkdown;
