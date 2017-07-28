'use strict';
var app = app || {};
(function(module) {
  const projectController = {};

  projectController.index = () => {
    $('section.tab-content').hide();
    $('#projects').fadeIn();
  };
  app.Project.getAll();

  module.projectController = projectController;
})(app);
