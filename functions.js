$(document).ready(function() {

  //Options
  var speed = 1000,
      auto = true,
      autoSpeed = 3000;

  //Add initial active class
  $(".slide").first().addClass("active");

  //Hide all classes
  $(".slide").hide();

  //Show active slide
  $(".active").show();

  //Move to next image on click
  $("#next").on("click", nextSlide);

  //Move to prev image on click
  $("#prev").on("click", prevSlide);

  //Autoswitch
  if ( auto === true ) {
    setInterval(nextSlide, autoSpeed);
  }


  function nextSlide() {
    $(".active").removeClass("active").addClass("oldActive");
    if ($(".oldActive").is(":last-child") ) {
      $(".slide").first().addClass("active");
    } else {
      $(".oldActive").next().addClass("active");
    }
    $(".oldActive").removeClass("oldActive");
    $(".slide").fadeOut(speed);
    $(".active").fadeIn(speed);
  }

  function prevSlide() {
      $(".active").removeClass("active").addClass("oldActive");
      if ($(".oldActive").is(":first-child") ) {
        $(".slide").last().addClass("active");
      } else {
        $(".oldActive").prev().addClass("active");
      }
      $(".oldActive").removeClass("oldActive");
      $(".slide").fadeOut(speed);
      $(".active").fadeIn(speed);
  }
});
