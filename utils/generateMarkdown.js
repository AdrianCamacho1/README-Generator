// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// this function will call the license by first allowing badge to be an empty string, then
function renderLicenseBadge(license) {
  switch (license) {
    case "GNU AGPLv3":
      return "![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)";
    case "GNU GPLv3":
      return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
    case "GNU LGPLv3":
      return "![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)";
    case "Mozilla Public License 2.0":
      return "![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)";
    case "Apache License 2.0":
      return "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
    case "MIT License":
      return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
    case "Boost Software License 1.0":
      return "![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)";
    case "The Unlicense":
      return "![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)";
    case "None":
      return "";
  }
}
//
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none"){ 
    return "[License](#License)"
  }
  return "" 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'none') {
    return "Their is no license!"
  } else {
    return 'The project has a license with ${license}'
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(userResponses) {
  let markdown =
  `
   ![GitHub repo language badge](https://img.shields.io/github/languages/top/${userResponses.GitHub}/${userResponses.Repo}?style=flat&logo=appveyor)
   
   ${renderLicenseBadge(userResponses.license)}

   # Table of Contents:

   * [Motivation](#Motivation for creating this app?)
   ${userResponses.Motivation}
    
    ${renderLicenseLink(userResponses.license)} 
    ${userResponses.license}

   * [Why was this made?](#Why)
    ${userResponses.Why}

    * [What was the motivation?](#Motivation)
    ${userResponses.Motivation}

   * [Why is it special?](#Special)
   ${userResponses.Special}

   - [What is this projects title?]
   ${userResponses.Title}

    #Motivation for creating this app?
  ${userResponses.Motivation}
  
  - [Why did you want to create this app?]
  ${userResponses.Why}

  - [what lessons were learned creating this app?]
  ${userResponses.Lessons}

  - [What makes this project stand out?]
  ${userResponses.Special}

  - [Github Username]
  ${userResponses.GitHub}

  - [Repo link:]
  ${userResponses.Repo}

  - [License used]
  ${userResponses.license}
  #Motivation
  
`;
return markdown;
//   return `# ${data.title}

// `;
// }
}
module.exports = generateMarkdown;
