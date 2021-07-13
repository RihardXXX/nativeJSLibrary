import $ from '../core';

$.prototype.addClass = function (...classNames) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      console.log(`${this[i]} not property classlist`);
      continue;
    }
    this[i].classList.add(...classNames);
  }
  return this;
};

$.prototype.removeClass = function (...classNames) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      console.log(`${this[i]} not property classlist`);
      continue;
    }
    this[i].classList.remove(...classNames);
  }
  return this;
};

$.prototype.toggleClass = function (classNames) {
  if (!classNames) {
    console.log('not arguments');
    return;
  }
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      console.log(`${this[i]} not property classlist`);
      continue;
    }
    this[i].classList.toggle(classNames);
  }
  return this;
};

$.prototype.isClass = function (classNames) {
  if (!classNames) {
    console.log('not arguments');
    return;
  }
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      console.log(`${this[i]} not property classlist`);
      continue;
    }
    if (this[i].classList.contains(classNames)) {
      console.log(`true classname ${classNames}`);
    }
  }
  return this;
};
