'use strict';
var app = app || {};

(function(module) {
  const homeController = {};

  homeController.index = () => {
    $('section.tab-content').hide();
    $('#home').fadeIn();
  };

  module.homeController = homeController;
})(app);
