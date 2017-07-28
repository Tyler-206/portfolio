'use strict';

var app = app || {};

(function (module) {
  module.getGitRepos = function (callback) {

    $.ajax({
      url: 'https://api.github.com/user/repos',
      method: 'GET',
      headers: {
        Authorization: `token ${githubToken}`
      }
    })
    .then(
      function (data) {
        let mappedData = data.map(repo =>({
          name: repo.name,
          url: repo.html_url
        }));
        callback(mappedData);
      }
    );
  };
})(app);
