import $ from '../core';

$.prototype.getAtr = function (name) {
  if (!name) {
    console.log('please name attribute');
    return;
  }

  for (let i = 0; i < this.length; i++) {
    return this[i].getAttribute(name);
  }
};

$.prototype.setAtr = function (name, value) {
  if (!name || !value) {
    console.log('please name attribute and value attribute');
    return;
  }

  for (let i = 0; i < this.length; i++) {
    this[i].setAttribute(name, value);
  }
  return this;
};

$.prototype.removeAtr = function (name) {
  if (!name) {
    console.log('please name attribute to remove');
    return;
  }

  for (let i = 0; i < this.length; i++) {
    this[i].removeAttribute(name);
  }
  return this;
};

$.prototype.hasAtr = function (name) {
  if (!name) {
    console.log('please name attribute to has');
    return;
  }

  for (let i = 0; i < this.length; i++) {
    return this[i].hasAttribute(name);
  }
  return this;
};
