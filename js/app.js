// DOM
$(".searchbtn").click(function(){
    $(this).toggleClass("bg-green");
    $(".fas").toggleClass("color-white");
    $(".input").focus().toggleClass("active-width").val('');
  });
  $(".searchbtn").click(function(){
    $(".login-form").slideToggle("fast");
    $(this)
    .toggleClass("active");
});
// Scroller
$(document).ready(function(){
  $(window).scroll(function(){
    if($(this).scrollTop() > 40)
    {
      $('#topBtn').fadeIn();
    }
    else
    {
      $('#topBtn').fadeOut();
    }
  });
  
   $("#topBtn").click(function(){
      $('html, body').animate({scrollTop: 0},800);
   });             
});

// Owl Carousel

const nextIcon = '<img src="./media/right-arrow.svg" alt="right">';
const prevIcon = '<img src="./media/left-arrow.svg" alt="left" >';

$('.owl-carousel').owlCarousel({
  loop:true,
  autoplay: true,
  autoplayTimeout: 3000,
  margin:20,
  nav: true,
  navText: [
  prevIcon,
  nextIcon
],
  responsive:{
    0:{
      items:1,
      nav: true
    },
    600:{
      items:2,
      nav: true
    },
    1000:{
      items:3,
      nav: true
    }
  }
})

$(document).ready(function(){
  $(".read").click(function(){
     $(this).prev().toggle();
     $(this).siblings('.dots').toggle();
     if($(this).text()=='Read More'){
 $(this).text('Read Less');
     }
     else{
 $(this).text('Read More');
     }
  });
});