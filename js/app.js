'use strict';

var projects = [];

function Project (portfolioDataObj) {
  this.name = portfolioDataObj.name;
  this.link = portfolioDataObj.link;
  this.description = portfolioDataObj.description;
  this.image = 'images/' + portfolioDataObj.image;
}
// <article class='projectArticle'>
//   <img class="projectImage"></img>
//   <h1 class="ProjectName"><h1>
//   <p class="projectLink"></p>
//   <p class="ProjectDescription"></p>
// </article>
Project.prototype.toHtml = function() {
  var $newProject = $('article.template').clone();
  $newProject.removeClass('template')
  $newProject.find('.projectName').text(''+ this.name +'');
  $newProject.find('.projectDescription').html(this.description);
  $newProject.find('.projectLink').text('here is a link!').attr('href', this.link);
  $newProject.find('.projectImage').attr('src', this.image);
  console.log(this.image);
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

  $('.navigation .tab:first').click(); // Let's now trigger a click on the first .tab element, to set up the page.
};

articleView.handleMainNav();
