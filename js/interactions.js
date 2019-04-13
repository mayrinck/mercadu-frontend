var ResetModal = ".login, .cadastro, .product-modal";
var ResetElements = ".darkFrame";


$(document).ready(function(){
  $(".menu").click(function(){
    $('body').toggleClass("block-scrolling");
    $(".second-header").toggleClass("active");
    $(ResetElements).hide();
  });

  $(".cart").click(function(){
    $(".start-checkout").toggleClass("active");
  });

  $(".profile").click(function(){
  	$(ResetModal).hide();
    $(".darkFrame, .login").show();
  });

  $(".product-image").click(function(){
  	$(ResetModal).hide();
    $(".frame").addClass("large");
    $(".darkFrame, .product-modal").show();
  });

  $(".GoToSignUp").click(function(){
  	$(ResetModal).hide();
    $(".cadastro").show();
    $(".frame").addClass("NeedMoreSpace");
  });

  $(".close-modal").click(function(){
    $(".darkFrame").hide();
    $(".frame").removeClass("NeedMoreSpace");
    $(".frame").removeClass("large");
  });

  /* Relativo ao funcionamento do select personalizado nas páginas */
  $("#price-order").click(function(){
    $("#price-type").slideToggle(150);
  });

  $("#categoria").click(function(){
    $("#cat-op").slideToggle(150);
  });

  $("#pricing").click(function(){
    $("#pricing-type").slideToggle(150);
  });

  /* PRODUCTS.HTML */
  $("#go-to-search").click(function(){
    $('#product-search').focus();
  });
});
