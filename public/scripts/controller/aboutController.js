'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  aboutController.index = () => {
    module.getGitRepos(function (gitRepos) {
      module.displayGitRepos(gitRepos);
    });

    $('section.tab-content').hide();
    $('#about').fadeIn();
  };

  module.aboutController = aboutController;
})(app);
