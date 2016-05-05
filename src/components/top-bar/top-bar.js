'use strict';
/* global define, $ */

define(['knockout', 'text!./top-bar.html'], function(ko, template) {

  function TopBar(params) {

  	var userName = $('#user-profile h5');
  	userName.text('John Kowalski');

    return {
      
    };
  }

  return { viewModel: TopBar, template: template };
});
