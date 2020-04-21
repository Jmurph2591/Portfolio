
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

  // Skills percent progress bar load
/*
  $(function() {
    if ( $('.skills').scrollTop(100) ) {
      function moveProgress() {
        const skillBar = $('.progressBar');   
        let width = 1;
        let id = setInterval(frame, 10);
        function frame() {
          if (width >= 100) {
            clearInterval(id);
          } else {
            width++; 
            elem.style.width = width + '30%'; 
          }
        }
      }
    }
  });
 */

  // Feedback Cards Auto Slider
  $(function() {
    const slides = document.querySelector('.slider').children;
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    let index = 0;

    prev.addEventListener(function(){
      prevSlide();
    });
    
    next.addEventListener(function() {
      nextSlide();
    });

    function prevSlide() {
      if (index==0){
        index = slides.length-1;
      } else {
      index--;
    }
    changeSlide();
  }

    function nextSlide() {
      if (index==slides.length-1){
        index = 0;
      } else {
      index++;
    }
    changeSlide();
  }

    function changeSlide() {
      for (let i=0; i<slides.length; i++){
      slides[index].classList.remove('active');
      }
      slides[index].classList.add('active');
  }

  function autoPlay() {
    nextSlide();
  }

  let timer = setInterval(autoPlay,4000);
  });
 


  


}($));
