'use strict';

console.log('js linked');

$('.spriteCheckBox').on('click', () => {
  console.log('clicked!!');
  $(event.target).toggleClass('checkbox-checked');
  $(event.target).toggleClass('checkbox-empty');
});
