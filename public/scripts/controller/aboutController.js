'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  aboutController.index = () => {
    $('section.tab-content').hide();
    $('#about').fadeIn();
  };

  module.aboutController = aboutController;
})(app);
