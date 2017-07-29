'use strict';

var app = app || {};

(function (module) {
  module.getGitRepos = function (callback) {

    $.ajax({
      url: 'github/user/repos'
    })
    .then(
      function (data) {
        console.log(data);
        let mappedData = data.map(gitRepo =>({
          name: gitRepo.name,
          url: gitRepo.html_url
        }));
        callback(mappedData);
      }
    )
    // .catch(error => console.error(error))
  };
})(app);
