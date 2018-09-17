'use strict';

console.log('js linked');

$('.spriteCheckBox').on('click', () => {
  console.log('clicked!!');
  $(event.target).toggleClass('checkbox-checked');
  $(event.target).toggleClass('checkbox-empty');
});

$('#r1').on('click', () => {
  console.log('clicked!!');
  $('#r1').removeClass('radio-empty').addClass('radio-checked');
  $('#r2').removeClass('radio-checked').addClass('radio-empty');
});

$('#r2').on('click', () => {
  console.log('clicked!!');
  $('#r2').removeClass('radio-empty').addClass('radio-checked');
  $('#r1').removeClass('radio-checked').addClass('radio-empty');
});
