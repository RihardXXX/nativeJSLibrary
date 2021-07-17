import $ from '../core';

$.prototype.animationOverTime = function (duration, callback, finalCallback) {
  let start = null;

  function _animationOverTime(timestamp) {
    if (!start) start = timestamp;

    let progress = timestamp - start;
    let complection = Math.min(progress / duration, 1);

    callback(complection);

    if (progress < duration) {
      requestAnimationFrame(_animationOverTime);
    } else {
      if (typeof finalCallback === 'function') finalCallback();
    }
  }

  return _animationOverTime;
};

$.prototype.fadeIn = function (duration, display, finalCallback) {
  for (let i = 0; i < this.length; i++) {
    this[i].style.display = display || 'block';

    const _fadeIn = (complection) => {
      this[i].style.opacity = complection;
    };

    const ani = this.animationOverTime(duration, _fadeIn, finalCallback);
    requestAnimationFrame(ani);
  }
  return this;
};

$.prototype.fadeOut = function (duration, finalCallback) {
  for (let i = 0; i < this.length; i++) {
    const _fadeOut = (complection) => {
      this[i].style.opacity = 1 - complection;
      if (complection === 1) this[i].style.display = 'none';
    };

    const ani = this.animationOverTime(duration, _fadeOut, finalCallback);
    requestAnimationFrame(ani);
  }
  return this;
};
