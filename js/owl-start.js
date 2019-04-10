$(document).ready(function(){
  /* INICIALIZAÇÃO DO OWL CAROUSEL */
  $(".owl-carousel").owlCarousel({
  	loop: true,
    margin: 25,
    autoplay: true,
    autoplayTimeout: 4000,
	autoplayHoverPause: false,
    nav:false,
    responsive:{
        0:{
            items:4
        },
        600:{
            items:6
        },
        1000:{
            items:9
        }
    }
  });
});