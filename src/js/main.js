import './lib/lib';

$('#first').v_on('click', () => {
  $('div').eq(1).fadeToggle(800);
});

$('[data-count="second"]').v_on('click', () => {
  $('div').eq(2).fadeToggle(800);
});

$('button')
  .eq(2)
  .v_on('click', () => {
    $('.w-500').fadeToggle(800);
  });

$('.wrap').html(`
  <div class="dropdown">
    <button
      class="btn btn-primary dropdown-toggle"
      id="dropdown-menu-button"
    >
      button dropdown
    </button>
    <ul class="dropdown-menu" data-toggle-id="dropdown-menu-button">
      <li class="dropdown-item">
        <a href="#"><b>action: 1</b></a>
      </li>
      <li class="dropdown-item">
        <a href="#"><b>action: 2</b></a>
      </li>
      <li class="dropdown-item">
        <a href="#"><b>action: 3</b></a>
      </li>
    </ul>
  </div>`);

// в режиме spa,когда разметка не готова
$('.dropdown-toggle').dropdown();

$('#trigger').v_on('click', function (e) {
  $(this).createModal({
    text: { title: 'title', body: 'body' },
    btns: {
      count: 2,
      settings: {
        info: ['close', 'open'],
        classNames: [['btn-primary'], ['btn-success']],
        close: [true, false],
        callback: [() => alert('alert')],
      },
    },
  });
});

// $('#trigger').click(() =>
//   $('#trigger').createModal({
//     text: { title: 'title', body: 'body' },
//     btns: {
//       count: 2,
//       settings: {
//         info: ['close', 'open'],
//         classNames: [['btn-primary'], ['btn-success']],
//         close: true,
//       },
//     },
//   })
// );

$('.accordion-head').accordion();
