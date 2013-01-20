define(['jquery'], function($) {
  'use strict';
  function run () {
    $('body').find('*').hide();
    $('body').fadeIn(1000);

    $('body').find('*').each(function(index) {
      $(this).fadeIn(index*50);
    });
  }
  return {
    run: run
  };
});
