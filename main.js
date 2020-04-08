
/*
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || 
    document.documentElement.scrollTop > 150) {
    document.getElementById('nav').style.top = "0";
  } else {
    document.getElementById('nav').style.top = "-50px";
  }

}
*/

/*
$(window).scroll(function(){
    if (document.body.scrollTop > 20 || 
        document.documentElement.scrollTop > 150) {
        document.getElementById('nav').style.top = "0";
      } else {
        document.getElementById('nav').style.top = "-50px";
      }
});

$(window).scroll(function() {
    $('nav').fadeIn();
});
*/


/*
function showNav {
  $(window).scroll(function(){
    if (document.body.scrollTop > 20) {
        document.getElementById('nav').style.cssText = "color: black; background-color: white";
      } else (document.body.scrollTop < 20) {
        document.getElementById('nav').style.cssText = "background-color: transparent";
      }
});
}
*/

function showNav {
  $(window).scroll(function(){
    if (document.body.scrollTop > 20) {
        $('#nav').fadeIn('slow');
      } else (document.body.scrollTop < 20) {
        $('#nav').fadeOut('slow');
      }
});
}