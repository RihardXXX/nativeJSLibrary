import $ from '../core';

$.prototype.carousel = function () {
  for (let i = 0; i < this.length; i++) {
    const width = window.getComputedStyle(
      this[i].querySelector('.carousel-inner')
    ).width;

    const slides = this[i].querySelectorAll('.carousel-item');
    const slidesWrapper = this[i].querySelector('.carousel-slides');
    const indicators = document.querySelectorAll('.carousel-indicators li');

    slidesWrapper.style.width = 100 * slides.length + '%';

    slides.forEach((slide) => {
      slide.style.width = width;
    });

    let offset = 0;
    let slideIndex = 0;
    let step = +width.replace(/\D/g, '');

    $(this[i].querySelector('[data-slide="next"]')).click((e) => {
      e.preventDefault();
      offset === step * (slides.length - 1) ? (offset = 0) : (offset += step);

      slidesWrapper.style.transform = `translateX(-${offset}px)`;

      slideIndex === slides.length - 1 ? (slideIndex = 0) : slideIndex++;
      indicators.forEach((indicator) => indicator.classList.remove('active'));
      indicators[slideIndex].classList.add('active');
    });

    $(this[i].querySelector('[data-slide="prev"]')).click((e) => {
      e.preventDefault();
      offset === 0 ? (offset = step * (slides.length - 1)) : (offset -= step);

      slidesWrapper.style.transform = `translateX(-${offset}px)`;

      slideIndex === 0 ? (slideIndex = slides.length - 1) : slideIndex--;
      indicators.forEach((indicator) => indicator.classList.remove('active'));
      indicators[slideIndex].classList.add('active');
    });

    const sliderId = this[i].getAttribute('id');
    $(`#${sliderId} .carousel-indicators li`).click((e) => {
      const slideTo = e.target.getAttribute('data-slide-to');

      slideIndex = slideTo;
      offset = step * slideTo;

      slidesWrapper.style.transform = `translateX(-${offset}px)`;
      indicators.forEach((indicator) => indicator.classList.remove('active'));
      indicators[slideIndex].classList.add('active');
    });
  }
};

$('.carousel').carousel();
