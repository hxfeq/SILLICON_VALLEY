$(document).ready(function(){
  $(".box").hover(function(){
    $(".box").animate({opacity:"0.90"},100000);
    $(this).css("background-color", "darkgreen");
    }, function(){
    $(this).css("background-color", "GhostWhite");
    $(".text p").css("background-color", "LightGoldenRodYellow");
      $(".text h3").css("background-color", "GhostWhite");

  });
});
