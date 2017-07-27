'use strict';

//TODO We converted the blog into a SPA by using the page.js library to capture clicks and execute a function to modify the page, rather than reloading content from a server.
// TODO Give your portfolio the same treatment. Update your main nav so that each clickable item is a link to a different url, that is handled by a function as indicated by page.js.
// TODO Keep your code organized in a M-V-C structure that isolates data management from presentation layer, from the controller that holds it all together.
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

  var articleView = {};

  articleView.init = function() {
    Project.all.forEach(function(article){
      $('#projects').append(article.toHtml());
    });
    $('#projects .projectStats').text(Project.numProjects() + ' words in his project descriptions, because you needed to know this!');
  };

  // articleView.handleMainNav = function() {
  //   $('.tab').on('click', function() {
  //     var selection = $(this).attr('data-content');
  //     $('section.tab-content').hide();
  //     $('section.tab-content[id="' + selection + '"]').fadeIn();
  //   })
  //   $('.navigation .tab:first').click();
  // };

  // articleView.handleMainNav();

  Project.loadAll = projectData => {Project.all = projectData.map (object => new Project(object))};

  Project.numProjects = () => {
    return Project.all.map(project => project.description.split(' ').length).reduce((accumulator, currentValue) => accumulator + currentValue)
  };

  Project.getAll = function() {
    if(localStorage.projectData){
      Project.loadAll(JSON.parse(localStorage.projectData));
      articleView.init();
    }else{
      $.getJSON('../data/data.json').then(function (data) {
        localStorage.setItem('projectData', JSON.stringify(data)) ;
        Project.loadAll(data);
        articleView.init();
      }, function(err) {
        console.log(err);
      });
    }
  }
  module.Project = Project;
})(app)
