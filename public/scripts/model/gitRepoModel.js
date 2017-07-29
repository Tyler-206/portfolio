'use strict';

var app = app || {};

(function (module) {
  module.getGitRepos = function (ctx, next) {
    $.ajax({
      url: '/github/user/repos',
      method: 'GET'
    })
    .then(
      function (data) {
        let mappedData = data.map(repo =>({
          name: repo.name,
          url: repo.html_url
        }));
        console.log('test')
        ctx.repos = mappedData;
        next();
      }
    );
  };
})(app);
