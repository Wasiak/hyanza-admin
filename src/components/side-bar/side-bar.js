'use strict';
/* global define, $ */

define(['knockout', 'text!./side-bar.html'], function(ko, template) {

  function SideBar(params) {

    var categories = {
      list: [
        {
          id: 1,
          name: 'opcja1',
          icon: 'http://lorempixel.com/30/30/'
        },
        {
          id: 2,
          name: 'opcja2',
          icon: 'http://lorempixel.com/30/30/',
          child: [{
                id: 5,
                name: 'opcja5',
              },
              {
                id: 6,
                name: 'opcja6'
              }]
        },
        {
          id: 3,
          name: 'opcja3',
          icon: 'http://lorempixel.com/30/30/'
        },
        {
          id: 4,
          name: 'opcja4',
          icon: 'http://lorempixel.com/30/30/',
          child: [{
              id: 7,
              name: 'opcja7'
            }]
        }
      ]
    };

    var loadAccordionMenu = function() {
      var catWithChildren = $('.has-children label');
      catWithChildren.on('click', function() {
        $(this).parent().find('.subcategory-list').toggleClass('open');
      });
    };

    var buildCategoriesMenu = function(categories) {
      var equipmentList = $('#side-menu');

      categories.list.forEach(function(category) {
        var cat = $('<li></li>');
        cat.appendTo(equipmentList);
        cat.attr({
          id: category.id
        });
        var icon = $('<img></img>');
        icon.appendTo(cat);
        icon.attr({
          src: category.icon
        });

        if (category.child) {
          cat.addClass('has-children');

          $('<label></label>')
          .text(category.name)
          .appendTo(cat);

          var subList = $('<ul></ul>');
          subList.appendTo(cat);
          subList.addClass('subcategory-list');

          category.child.forEach(function(children) {
            var subCat = $('<li></li>');
            subCat.appendTo(subList);
              var label = $('<label></label>');
              label.appendTo(subCat);
              label.attr('id', children.id);
              label.text(children.name);
          });

        } else {
          var label = $('<label></label>');
          label.appendTo(cat);
          label.attr('id', category.id);
          label.text(category.name);
        }
      });
    };

    buildCategoriesMenu(categories);
    loadAccordionMenu();

    return {
      categories: categories
    };
  }

  return { viewModel: SideBar, template: template };
});
