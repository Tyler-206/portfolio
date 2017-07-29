'use strict';
var app = app || {};

(function(module) {
  let aboutController = {};

  aboutController.index = function(ctx, next) {
    $('section.tab-content').hide();
    module.displayGitRepos(ctx.repos);
    $('#about').fadeIn();
    next();
  };

  module.aboutController = aboutController;
})(app);
