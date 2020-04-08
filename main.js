// Nav Bar Fade in/out

function showNav {
  $(window).scroll(function(){
    if (document.body.scrollTop > 20) {
        $('#nav').fadeIn('slow');
      } else (document.body.scrollTop < 20) {
        $('#nav').fadeOut('slow');
      }
});
}