'use strict';
var app = app || {};

(function(module) {
  const contactController = {};

  contactController.index = () => {
    $('section.tab-content').hide();
    $('#contact').fadeIn();
  };

  module.contactController = contactController;
})(app);
