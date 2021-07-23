import $ from '../core';

$.prototype.accordion = function () {
  for (let i = 0; i < this.length; i++) {
    $(this[i])
      .removeClass('accordion-head-active')
      .click((e) => {
        e.preventDefault();
        $(this[i]).toggleClass('accordion-head-active');
        $(this[i].nextElementSibling).toggleClass('accordion-content-active');
      });
  }
};
