'use strict';

var app = app || {};

(function(module){

  function Project (portfolioDataObj) {
    this.name = portfolioDataObj.name;
    this.link = portfolioDataObj.link;
    this.description = portfolioDataObj.description;
    this.image = 'images/' + portfolioDataObj.image;
  }

  Project.all = [];

  Project.prototype.toHtml = function() {
    var source   = $('#entry-template').html();
    var template = Handlebars.compile(source);
    return(template(this));
  }

  Project.loadAll = projectData => {Project.all = projectData.map (object => new Project(object))};

  Project.numProjects = () => {
    return Project.all.map(project => project.description.split(' ').length).reduce((accumulator, currentValue) => accumulator + currentValue)
  };

  Project.getAll = function() {
    if(localStorage.projectData){
      Project.loadAll(JSON.parse(localStorage.projectData));
      app.projectView.init();
    }else{
      $.getJSON('../data/data.json').then(function (data) {
        localStorage.setItem('projectData', JSON.stringify(data)) ;
        Project.loadAll(data);
        app.projectView.init();
      }, function(err) {
        console.log(err);
      });
    }
  }
  module.Project = Project;
})(app)
