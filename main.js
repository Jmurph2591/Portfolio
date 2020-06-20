
// called a closure - general javascript - keeps variables within same file(scope)
(function ($) {

  // Nav Bar hide/show
  $(function () {

    const $nav = $('#top-nav');
    const $navHeader = $('#top-nav > h1');

    function changeHeaderBackground() {
      if ($(window).scrollTop() > 20) {
        $('#top-nav').addClass('nav-background');
      } else {
        $('#top-nav').removeClass('nav-background');
      }
    }

    $(window).scroll(function () {
      changeHeaderBackground();
    });
  });

  // Project box hover
  $(function () {
    $('.projectBox').mouseover(function (event) {
      $(event.currentTarget).children('.container').slideUp('slow');
    });

    $('.projectBox').mouseleave(function (event) {
      $(event.currentTarget).children('.container').slideDown('slow');
    });
  });

  //download resume
  $('#resumeDownload').attr({target: '_blank', 
  href:'dlfiles/Joe Murphy_Resume.docx'});
}($));

