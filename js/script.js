$( document ).ready(function() {
    console.log( "ready!" );

    $("#doctor-img").one('mouseover', function(){
      console.log('hovering')
      $("#side-bar-text").css("display", "block")
      $("#side-bar-text").css("opacity", "0")
      $("#doctor-img").removeClass("pulse")

      $("#side-bar").animate({ width: '75%'}, 'slow', function() {
        console.log('extend completed')
        $("#side-bar").css("min-width", "1105px")
        $("#side-bar-text").animate({ opacity: '1'}, 'slow',);
      });
    })

    $(window).resize(function(){
	     if ($(window).width() <= 1050){
         console.log('resize jquery')
         $("#side-bar").css("min-width", "400px")
	}
});

$(window).resize(function(){
   if ($(window).width() >= 1050){
     console.log('resize jquery')
     $("#side-bar").css("min-width", "1105px")
}
});



});
