$(document).ready(function() {


  //Implement the "slide to left" when the user clicks on #carousel-next here

  $("#carousel-next").click(function() {
    var x = parseInt($('#carousel').css('margin-left').replace("px", ""));
    if (x == -4000) {
      return false; 
    } else {
      $("#carousel").css("margin-left", x - 900 + "px");
    }
  })


  //Implement the "slide to right" when the user clicks on #carousel-prev here

  $("#carousel-prev").click(function() {
    var x = parseInt($('#carousel').css('margin-left').replace("px", ""));
    if (x == 0) {
      return false;
    } else {
      $("#carousel").css("margin-left", x + 900 + "px");
    }
  })

  // open Menu View 
  $(".menu_").click(function() {
    if (!$(this).hasClass("selected") && !$(this).hasClass("void")) {
      $(this).addClass("selected");
      $(".menu").show();
      $(".menu_").css("opacity", "1"); 
      $(".menu_").addClass('hover'); 
      $(".menu").css("margin-bottom", "-600px"); 
      $(".carousel-container").css("opacity", "0.3"); 
      $(".about_").addClass("void");
      $(".contact_").addClass("void");
    } else {
      $(this).removeClass("selected");
      $(".menu").hide();
      $(".menu_").css("opacity", "0.4"); 
      $(".menu_").removeClass('hover');   
      $(".carousel-container").css("opacity", "1"); 
      $(".about_").removeClass("void");
      $(".contact_").removeClass("void");
    }

  }) 


    // open About View 
  $(".about_").click(function() {
    if (!$(this).hasClass("selected") && !$(this).hasClass("void")) {
      $(this).addClass("selected");
      $(".about").fadeIn(500);
      $(".about_").css("opacity", "1"); 
      $(".about_").addClass('hover'); 
      $(".about").css("margin-bottom", "-750px"); 
      $(".menu_").addClass("void");
      $(".contact_").addClass("void");
    } else {
      $(this).removeClass("selected");
      $(".about").fadeOut(500);
      $(".about_").css("opacity", "0.4"); 
      $(".about_").removeClass('hover'); 
      $(".menu_").removeClass("void");
      $(".contact_").removeClass("void");
    }

  }) 

      // open Contact View 
  $(".contact_").click(function() {
    if (!$(this).hasClass("selected") && !$(this).hasClass("void")) {
      $(this).addClass("selected");
      $(".contact").fadeIn(500);
      $(".contact_").css("opacity", "1"); 
      $(".contact_").addClass('hover'); 
      $(".contact").css("margin-bottom", "-750px"); 
      $(".menu_").addClass("void");
      $(".about_").addClass("void");
    } else {
      $(this).removeClass("selected");
      $(".contact").fadeOut(500);
      $(".contact_").css("opacity", "0.4"); 
      $(".contact_").removeClass('hover'); 
      $(".menu_").removeClass("void");
      $(".about_").removeClass("void");
    }

  }) 



});