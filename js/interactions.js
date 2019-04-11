var ResetModal = ".login, .cadastro";

$(document).ready(function(){
  $(".menu").click(function(){
    $(".second-header").toggleClass("active");
  });

  $(".cart").click(function(){
    $(".start-checkout").toggleClass("active");
  });

  $(".profile").click(function(){
  	$(ResetModal).hide();
    $(".darkFrame, .login").show();
  });

  $(".GoToSignUp").click(function(){
  	$(ResetModal).hide();
    $(".cadastro").show();
    $(".frame").addClass("NeedMoreSpace");
  });

  $(".close-modal").click(function(){
    $(".darkFrame").hide();
    $(".frame").removeClass("NeedMoreSpace");
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
});