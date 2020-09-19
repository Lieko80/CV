//preloader-----------------------------------------------------------
$(document).ready(function() {
	
	setTimeout(function(){
		$('body').addClass('loaded');
		$('h1').css('color','#222222');
  }, 5000);
  
//sidebar-------------------------------------------------------------
    $('.sidenav').sidenav();

//carousel -----------------------------------------------------------
    $(".carousel.carousel-slider").carousel({fullWidth: true});
    $('.carousel').carousel({padding: 300});    

//bouton carousel ----------------------------------------------------
$(".slide-prev").click(function (e) {
    e.preventDefault();
    e.stopPropagation();    
    $(".carousel").carousel("prev")
    });

    $(".slide-next").click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(".carousel").carousel("next")
    });
	
});
//rendre le back to top visible --------------------------------------
(function ($) {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 1500) {
        $('.back-to-top').fadeIn('slow');
        $('.navcote').fadeIn('slow');
      } else {
        $('.back-to-top').fadeOut('slow');
        $('.navcote').fadeOut('slow');
      }
    });    
    $('.back-to-top').click(function () {
      $('html, body').animate({
        scrollTop: 0
      }, 800);
      return false;
    });

// scrolling--------------------------------------------------------
$('a[href^="#"]').click(function(){
	var the_id = $(this).attr("href");
	if (the_id === '#') {
		return;
	}
	$('html, body').animate({
		scrollTop:$(the_id).offset().top
	}, 'slow');
	return false;
});  
  
// Parallax pour le loader------------------------------------------------------------
    if ($('#parallax1').length || $('#parallax2').length) {
      $(window).stellar({
        responsive: true,
        scrollProperty: 'scroll',
        parallaxElements: false,
        horizontalScrolling: false,
        horizontalOffset: 0,
        verticalOffset: 0
      });  
    }  
  })(jQuery);

//follow mouse--------------------------------------------------------------
  $(document).mousemove(function(e){
    $("#image").css({left:e.pageX, bottom:0});
});     