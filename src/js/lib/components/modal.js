import $ from '../core';

$.prototype.modal = function (created) {
  for (let i = 0; i < this.length; i++) {
    const target = this[i].getAttribute('data-target');
    $(this[i]).click((e) => {
      e.preventDefault();
      $(target).fadeIn(500);
      document.body.style.overflow = 'hidden';
    });

    const closeElements = document.querySelectorAll(`${target} [data-close]`);
    closeElements.forEach((elem) => {
      $(elem).click(() => {
        $(target).fadeOut(500);
        document.body.style.overflow = '';
        if (created) {
          document.querySelector(target).remove();
        }
      });
    });

    $(target).click((e) => {
      if (e.target.classList.contains('modal')) {
        $(target).fadeOut(500);
        document.body.style.overflow = '';
        if (created) {
          document.querySelector(target).remove();
        }
      }
    });
  }
};

$('[data-toggle="modals"]').modal();

$.prototype.createModal = function ({ text, btns } = {}) {
  for (let i = 0; i < this.length; i++) {
    let modal = document.createElement('div');
    modal.classList.add('modal');
    modal.setAttribute('id', this[i].getAttribute('data-target').slice(1));

    const { title, body } = text;
    const {
      count,
      settings: { info, classNames, close, callback },
    } = btns;

    const buttons = [];
    for (let j = 0; j < count; j++) {
      let btn = document.createElement('button');
      btn.classList.add('btn', ...classNames[j]);
      btn.textContent = info[j];
      if (close[j]) btn.setAttribute('data-close', close[j]);
      if (callback[j] && typeof callback === 'function') {
        btn.addEventListener(callback[j]);
      }
      buttons.push(btn);
    }

    modal.innerHTML = `
    <div class="modal-dialog">
      <div class="modal-content">
        <button data-close class="close">
          <span>&times;</span>
        </button>
        <div class="modal-header">
          <span class="modal-title">${title}</span>
        </div>
        <div class="modal-body">
          ${body}
        </div>
        <div class="modal-footer">

        </div>
      </div>
    </div>
    `;

    modal.querySelector('.modal-footer').append(...buttons);
    console.log(modal);
    document.body.appendChild(modal);
    $(this[i]).modal(true);
    $(this[i].getAttribute('data-target')).fadeIn(500);
  }
};
