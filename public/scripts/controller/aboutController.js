'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  aboutController.index = () => {
    $('section.tab-content').hide();
    $('#about').fadeIn();
  };

  module.gitRepoController = function() {
    module.getGitRepos(function (gitRepos) {
      module.displayGitRepos(gitRepos);
    });
  }

  module.aboutController = aboutController;
})(app);
