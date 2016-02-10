$(document).ready(function() {

  $(window).load(function() {
    
    $("p1").fadeIn(1000); 
    $("p1").css("display","block"); 
    $("p1").css("font-size","18px"); 

    
    $("p2").fadeIn(5000); 
    $("p2").css("display","block"); 
    $("p2").css("font-size","20px"); 

    
    $("p3").fadeIn(15000); 
    $("p3").css("display","block"); 
    $("p3").css("font-size","23px"); 

     
    $("p4").fadeIn(22000); 
    $("p4").css("display","block");
    $("p4").css("font-size","28px"); 

    $("p5").fadeIn(30000); 
    $("p5").css("display","block");
    $("p5").css("font-size","30px"); 

  })

  //Implement the "slide to left" when the user clicks on #carousel-next here

  $("#carousel-next").click(function() {
    var x = parseInt($('#carousel').css('margin-left').replace("px", ""));
    if (x == -5020) {
      return false; 
    } else {
      $("#carousel").css("margin-left", x - 1255 + "px");
    }
  })


  //Implement the "slide to right" when the user clicks on #carousel-prev here

  $("#carousel-prev").click(function() {
    var x = parseInt($('#carousel').css('margin-left').replace("px", ""));
    if (x == 0) {
      return false;
    } else {
      $("#carousel").css("margin-left", x + 1255 + "px");
    }
  })




});