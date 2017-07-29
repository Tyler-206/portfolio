'use strict';

var app = app || {};

(function (module) {
  module.displayGitRepos = function (reposFromModel) {
    const template = Handlebars.compile($('#gitTemplate').html());
    $('#repos').append(template({repos: reposFromModel}))
  }
})(app);
