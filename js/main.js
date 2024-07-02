$(document).ready(function(){
    $(".gallery__slider").owlCarousel({
        loop:true,
        nav:true,
        center: true,
        autoWidth:false,
        items:1,
        margin:0,
        dots: true,
    });
  });

$(document).ready(function(){
    $(".hall__slider").owlCarousel({
        loop:true,
        nav:false,
        center:true,
        items:1,
        margin:150,
        dots: true,
        dots: true,
    });
  });


  Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
    get: function () {
        return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
    }});

    $('body').on('click touchstart', function () {
      const videoElement = document.getElementById('mainVideo');
      if (videoElement.playing) {
          // video is already playing so do nothing
      }
      else {
          // video is not playing
          // so play video now
          videoElement.play();
      }
});

$('a[href^="#"').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    });
    return false;
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}

document.addEventListener("DOMContentLoaded", function(event) {
    var preloader = document.querySelector(".preloader");
    setTimeout(function() {
        document.querySelector('.preloader').classList.add('hide');
        document.body.classList.remove('lock');
    }, 2000);
});
  new WOW().init();
