//filter projects
let $showAll;
let $showDevelopment;
let $showProjectMgmt;
let $filterable;

function showAllProjects (event) {
  $filterable.forEach(ele => ele.classList.remove('hidden'));
}


function showXOnly (projectClass) {
  document.querySelectorAll(`.filterable:not(${projectClass})`).forEach(ele => ele.classList.add('hidden'));
  document.querySelectorAll(`.filterable${projectClass}`).forEach(ele => ele.classList.remove('hidden'));
}

showDevelopmentOnly = (event) => {
  showXOnly('.webdev');
}

showProjectMgmtOnly = (event) => {
  showXOnly('.project-mgmt');
}

document.addEventListener('DOMContentLoaded', () => {
  $showAll = document.querySelector('#all');
  $showDevelopment = document.querySelector('#development');
  $showProjectMgmt = document.querySelector('#project-managment');
  $filterable = document.querySelectorAll('.filterable');

  $showAll.addEventListener('click', showAllProjects);
  $showDevelopment.addEventListener('click', showDevelopmentOnly);
  $showProjectMgmt.addEventListener('click', showProjectMgmtOnly);
});

/*
(function($) {

  'use strict';

  var $filters = $('.filter [data-filter]'),
    $boxes = $('.boxes [data-category]');

  $filters.on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    
    $filters.removeClass('active');
    $this.addClass('active');

    var $filterColor = $this.attr('data-filter');

    if ($filterColor == 'all') {
      $boxes.removeClass('is-animated')
        .fadeOut().finish().promise().done(function() {
          $boxes.each(function(i) {
            $(this).addClass('is-animated').delay((i++) * 200).fadeIn();
          });
        });
    } else {
      $boxes.removeClass('is-animated')
        .fadeOut().finish().promise().done(function() {
          $boxes.filter('[data-category = "' + $filterColor + '"]').each(function(i) {
            $(this).addClass('is-animated').delay((i++) * 200).fadeIn();
          });
        });
    }
  });

})(jQuery);
*/