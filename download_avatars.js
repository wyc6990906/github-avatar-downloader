var request = require("request");
var fs = require("fs");
var token = require("./secrets");

let repoOwner = process.argv[2];
let repoName = process.argv[3];

if (repoOwner === undefined || repoName === undefined) {
  console.log("You need to pass both parameters");
}

function downloadImageByURL(url, filePath) {
  request
    .get(url)
    .on("error", function(err) {
      throw err;
    })
    .pipe(fs.createWriteStream(filePath)); // FILEPATH IS NOT A STRING SO DON;T PUT " " ON THERE!!!!
}

function getRepoContributors(repoOwner, repoName, cb) {
  console.log("Great so you want:");
  console.log("Repository owner: ", repoOwner);
  console.log("And the repository: ", repoName);

  var options = {
    url:
      "https://api.github.com/repos/" +
      repoOwner +
      "/" +
      repoName +
      "/contributors",
    headers: {
      "User-Agent": "request",
      Authorization: "token " + token.GITHUB_TOKEN
    }
  };

  request(options, function(err, res, body) {
    cb(err, JSON.parse(body));
  });
}

console.log("Welcome to the GitHub Avatar Downloader!");

getRepoContributors(repoOwner, repoName, function(err, results) {
  for (let index = 0; index < results.length; index++) {
    const result = results[index];
    downloadImageByURL(result.avatar_url, "./avatars/" + repoOwner + ".jpg");
  }
  console.log("Download complete.");
});
