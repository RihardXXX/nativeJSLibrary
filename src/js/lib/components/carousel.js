import $ from '../core';

$.prototype.carousel = function () {
  for (let i = 0; i < this.length; i++) {
    const width = window.getComputedStyle(
      this[i].querySelector('.carousel-inner')
    ).width;

    const slides = this[i].querySelectorAll('.carousel-item');
    const slidesWrapper = this[i].querySelector('.carousel-slides');

    slidesWrapper.style.width = 100 * slides.length + '%';

    slides.forEach((slide) => {
      slide.style.width = width;
    });

    let offset = 0;
    let slideIndex = 0;
    let step = +width.replace(/\D/g, '');

    $(this[i].querySelector('[data-slide="next"]')).click((e) => {
      e.preventDefault();
      if (offset == step * (slides.length - 1)) {
        offset = 0;
      } else {
        offset += step;
      }
      slidesWrapper.style.transform = `translateX(-${offset}px)`;
    });

    console.log(slides);
  }
};

$('.carousel').carousel();
