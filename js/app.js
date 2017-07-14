'use strict';

var projects = [];

function Project (portfolioDataObj) {
  this.name = portfolioDataObj.name;
  this.link = portfolioDataObj.link;
  this.description = portfolioDataObj.description;
  this.image = 'images/' + portfolioDataObj.image;
}

Project.prototype.toHtml = function() {
  var $newProject = $('article.template').clone();
  $newProject.removeClass('template')
  $newProject.addClass('articleLayout')
  $newProject.find('.projectDescription').html(this.description);
  $newProject.find('.projectLink').text('Here is a link to click!').attr('href', this.link);
  $newProject.find('.projectImage').attr('src', this.image);
  $newProject.find('.projectName').text(''+ this.name +'');
  return $newProject;
}

projectData.forEach(function(object){
  projects.push(new Project(object))
});

projects.forEach(function(article){
  $('#projects').append(article.toHtml());
});

var articleView = {};

articleView.handleMainNav = function() {

  $('.tab').on('click', function () {
    var selection = $(this).attr('data-content');
    $('section.tab-content').hide();
    $('section.tab-content[id="' + selection + '"]').fadeIn();
  })
  $('.navigation .tab:first').click();
};

articleView.handleMainNav();
