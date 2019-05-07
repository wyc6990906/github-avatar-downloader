var request = require("request");
var fs = require("fs");

function getRepoContributors(repoOwner, repoName, cb) {
  // ...cd === callback;
  var url =
    "https://api.github.com/repos/" +
    repoOwner +
    "/" +
    repoName +
    "/contributors";
  request(url, function(err, res, body) {
    cb(err, body);
  });
}

getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});
