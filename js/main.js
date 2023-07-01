


$(function(){
    $(window).on("scroll", function(){
        if($(window).scrollTop() > 100){
        $(".navbar").addClass("scroll-nav");
        } else {
        $(".navbar").removeClass("scroll-nav");
        }
    });
});


$(document).ready(function () {
    $.fakeLoader({
        timeToHide:3000,
        bgColor:"#fff",
        spinner:"spinner7"
    });
});


 $(function() {
  $('.arrow').click (function() {
    $('html, body').animate({scrollTop: $('section.about-me').offset().top }, 'slow');
    return false;
  });
});


$(function(){
    $(window).on("scroll", function(){
        if($(window).scrollTop() > 100){
        $(".navbar").addClass("scroll-nav");
        } else {
        $(".navbar").removeClass("scroll-nav");
        }
    });
});


$("body").niceScroll({
  cursorcolor: "#383838",
  cursorwidth: "8px",
  cursorborderradius: "2px",
  cursorborder: "1px solid #fff",
  scrollspeed: 160,
  mousescrollstep: 20,
  zindex: "auto"| [2000],
});



$(document).ready(function() {
  var btn = $('#button');
  $(window).scroll(function() {
    if ($(window).scrollTop() > 1000) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });
  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });
});


$('#owl-1').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    smartSpeed:2500,
    responsive:{
        0:{
            items:1
        },
        767.98:{
            items:2
        },
        1000:{
            items:3
        }
    }
});


$('#owl-2').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:false,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    smartSpeed:2000,
    responsive:{
        0:{
            items:1
        },
        767.98:{
            items:2
        },
        1000:{
            items:3
        }
    }
});
