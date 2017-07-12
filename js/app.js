'use strict';

var projects = [];

function Project (portfolioDataObj) {
  this.name = portfolioDataObj.name;
  this.link = portfolioDataObj.link;
  this.description = portfolioDataObj.description;
  this.image = 'images/' + portfolioDataObj.name + '.jpg';
}

Project.prototype.toHtml = function() {
  var $newProject = $('section.project').clone();

  $newProject.find('.projectName').html(this.name);
  $newProject.find('.projectLink').attr('href', this.link);
  $newProject.find('.projectDescription').html(this.description);
  $newProject.find('.projectImage').attr(this.image);


  portfolioData.forEach(function(){
    projects.push(new Project())
  });

  projects.forEach(function(section){
    $('#projects').append(section.toHtml());
  });
}
