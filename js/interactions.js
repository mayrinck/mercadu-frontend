var CheckoutActive = 0;

$(document).ready(function(){
  $(".menu").click(function(){
    $(".second-header").toggleClass("active");
  });

  $(".cart").click(function(){
    $(".start-checkout").addClass("active");
  });

  $(".profile").click(function(){
    $(".darkFrame, .login").show();
  });

  $(".close-modal").click(function(){
    $(".darkFrame").hide();
  });
});