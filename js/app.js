'use strict';

function Project (name,link, image, description) {
  this.name = name;
  this.link = link;
  this.description = description;
  this.image = 'images/' + name + '.jpg';
}

var projectOne = new Project ('Project 1', 'www.w.com','brief description');

projectOne;
