var request = require("request");
var fs = require("fs");
var secrets = require("./secrets");
require("dotenv").config();
const { GITHUB_TOKEN } = process.env;
let repoOwner = process.argv[2];
let repoName = process.argv[3];

function getRepoContributors(repoOwner, repoName, cb) {
  // ...cb === callback;
  var options = {
    url:
      "https://api.github.com/repos/" +
      repoOwner +
      "/" +
      repoName +
      "/contributors",
    headers: {
      "User-Agent": "request",
      Authorization: "token " + GITHUB_TOKEN
    }
  };
}

function getRepoContributors(repoOwner, repoName, cb) {
  if (repoOwner === undefined || repoName === undefined) {
    console.log("You need to pass both parameters");
  } else {
    console.log("Welcome to the GitHub Avatar Downloader!");
  }
}

getRepoContributors("jquery", "jquery", function(err, result) {
  for (let index = 0; index < result.length; index++) {
    const result = result[index];
    downloadImageByURL(result.avatar_url, "avatars/" + index + ".jpg");
  }
  console.log("Download complete.");
});
