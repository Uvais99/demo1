
let mobTri = document.querySelector(".mobile-trigger");

mobTri.addEventListener("click", function(){
    document.body.classList.toggle("mobile-open");
});


$(".mobile-trigger").click(function(){
   $(".menu-primary.mobile").slideToggle(500);
});



// Slider

$('.user-slider-wrapper').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true
  });


  $('div#w-slider-mask-0').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true
  });