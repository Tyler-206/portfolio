'use strict';

var app = app || {};

(function (module) {

  const gitRepos = {};
  gitRepos.all = [];

  module.getGitRepos = function (callback) {

    $.ajax({
      url: 'github/user/repos'
    })
    .then(
      function (res) {
        gitRepos.all = res;
      }
    )
    .then(callback)
    // .catch(error => console.error(error))
  };

  module.gitRepos = gitRepos;
})(app);
