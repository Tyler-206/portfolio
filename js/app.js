'use strict';

var projects = [];

function Project (portfolioDataObj) {
  this.name = portfolioDataObj.name;
  this.link = portfolioDataObj.link;
  this.description = portfolioDataObj.description;
  this.image = 'images/' + portfolioDataObj.name + '.jpg';
}

portfolioData.forEach(function(projectObject) {
  projects.push(new Project(projectObject));
});

projects.forEach(function(projects) {
  $('#projects').append(projects);
});
