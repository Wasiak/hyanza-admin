'use strict';
/* global define, $ */

define(['knockout', 'text!./top-bar.html'], function(ko, template) {

  function TopBar(params) {

    return {
      
    };
  }

  return { viewModel: TopBar, template: template };
});
