'use strict';

var app = app || {};

(function (module) {
  module.displayGitRepos = function (object) {
    const template = Handlebars.compile($('#gitTemplate').html());
    $('#repos').append(template({gitRepos: object}))
  }
})(app);
