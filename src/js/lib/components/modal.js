import $ from '../core';

$.prototype.modal = function () {
  for (let i = 0; i < this.length; i++) {
    const target = this[i].getAttribute('data-target');
    $(this[i]).v_on('click', (e) => {
      e.preventDefault();
      $(target).fadeIn(500);
      document.body.style.overflow = 'hidden';
    });
  }

  const closeElements = document.querySelectorAll('[data-close]');
  closeElements.forEach((closeElement) => {
    $(closeElement).v_on('click', (e) => {
      e.preventDefault();
      $('.modal').fadeOut(500);
      document.body.style.overflow = 'visible';
    });
  });

  $('.modal').v_on('click', (e) => {
    if (e.target.classList.contains('modal')) {
      $('.modal').fadeOut(500);
      document.body.style.overflow = 'visible';
    }
  });
};

$('[data-toggle="modals"]').modal();
