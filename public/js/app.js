'use strict';
//TODO;  Use of at least one .map() method.
 // TODO Use of at least one .reduce() method.
 // TODO IIFE present on at least one .js file.
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
};

articleView.handleMainNav = function() {
  $('.tab').on('click', function() {
    var selection = $(this).attr('data-content');
    $('section.tab-content').hide();
    $('section.tab-content[id="' + selection + '"]').fadeIn();
  })
  $('.navigation .tab:first').click();
};

articleView.handleMainNav();

Project.loadAll = function(projectData) {
  projectData.forEach(function(object){
    Project.all.push(new Project(object))
  });
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
