import './lib/lib';

// console.log($('button').setAtr('id', 'rihard').hasAtr('id'));
// console.log($('.active').getAtr('id'));
// console.log($('button').html('button'));
// $('button').click(function () {
//   $('div').eq(2).toggleClass('active');
// });

$('#first').v_on('click', () => {
  $('div').eq(1).fadeOut(800);
});

$('[data-count="second"]').v_on('click', () => {
  $('div').eq(2).fadeOut(800);
});

$('button')
  .eq(2)
  .v_on('click', () => {
    $('.w-500').fadeOut(800);
  });
