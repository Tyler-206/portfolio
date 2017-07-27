var app = app || {};

(function(module) {
  const projectView = {};

  projectView.init = () => {
    app.Project.all.forEach(function(project){
      $('#projects').append(project.toHtml());
    });
    $('#projects .projectStats').text(app.Project.numProjects() + ' words in his project descriptions, because you needed to know this!');
  };

  app.Project.getAll();
  module.projectView = projectView;
})(app);
