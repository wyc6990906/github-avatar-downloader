var request = require("request");
var fs = require("fs");
var secrets = require("./secrets");

function getRepoContributors(repoOwner, repoName, cb) {
  // ...cd === callback;
  var options = {
    url:
      "https://api.github.com/repos/" +
      repoOwner +
      "/" +
      repoName +
      "/contributors",
    headers: {
      "User-Agent": "request",
      Authorization: "token " + secrets.GITHUB_TOKEN
    }
  };
  request(url, function(err, res, body) {
    if (repoOwner === undefined || repoName === undefined) {
      console.log("You need to pass both parameters");
    } else {
      console.log("Welcome to the GitHub Avatar Downloader!");
    }
  });
}

getRepoContributors("jquery", "jquery", function(err, result) {
  for (let index = 0; index < result.length; index++) {
    const element = result[index];
  }
  downloadImageByURL(element.avatar_url, "avatars/" + index + ".jpg");
  console.log("Errors:", err);
  console.log("Result:", result);
});
