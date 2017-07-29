'use strict';

var app = app || {};

page('/', app.homeController.index);
page('/projects', app.projectController.index);
page('/about', app.getGitRepos, app.aboutController.index);
page('/contact', app.contactController.index);

page();
