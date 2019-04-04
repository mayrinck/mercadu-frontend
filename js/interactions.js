var ResetModal = ".login, .cadastro";

$(document).ready(function(){
  $(".menu").click(function(){
    $(".second-header").toggleClass("active");
  });

  $(".cart").click(function(){
    $(".start-checkout").addClass("active");
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
});