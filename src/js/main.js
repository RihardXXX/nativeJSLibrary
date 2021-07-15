import './lib/lib';

// console.log($('button').setAtr('id', 'rihard').hasAtr('id'));
// console.log($('.active').getAtr('id'));
// console.log($('button').html('button'));
$('button').click(function () {
  $('div').eq(2).toggleClass('active');
});
