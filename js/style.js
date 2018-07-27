var $parallaxElement = $('.parallax-bg');
var elementHeight = $parallaxElement.outerHeight();

function parallax() {
 
  var scrollPos = $(window).scrollTop();
  var transformValue = scrollPos/40;
  var opacityValue =  1 - ( scrollPos / 2000);
  var blurValue = Math.min(scrollPos / 100, 3);
  
  if ( scrollPos < elementHeight ) {
  
    $parallaxElement.css({
      'transform': 'translate3d(0, -' + transformValue + '%, 0)',
      'opacity': opacityValue,
      '-webkit-filter' : 'blur('+blurValue+'px)'
    });
    
  }
  
}

$(window).scroll(function() {
  parallax();
});

	
/* Typed function */
	$(function() {
	$(".text").typed({
    strings: ["WEB DESIGNER", "WEB DEVELOPER", "GOOD BOY", "COFFEE DRINKER"],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 3000,
    showCursor: false,
    loop: true
  	});
	});

	$(function() {
	$(".coming-soons").typed({
	strings: ["Sorry this web has not been fixed yet.","Thank you for visiting!"],
	typeSpeed: 40,
	backSpeed: 30,
	backDelay: 3000,
	showCursor: false,
	loop: true	
	});	
	});	


/* Typed function */


/* Disable F12 and Ctrl+Shift+I and Ctrl+U */

  $(document).keydown(function (event) {
    if (event.keyCode == 123) { // Prevent F12
        return false;
    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I        
        return false;
    }
  });  
  
  	document.onkeydown = function(e) {
        if (e.ctrlKey && 
            (e.keyCode === 67 || 
             e.keyCode === 86 || 
             e.keyCode === 85 || 
             e.keyCode === 117)) {
            alert('Sorry, All Ctrl keys in this page are disabled. Thank you!');
            return false;
        } else {
            return true;
        }
	};

   
 
  /* Disable right click script  */

  var message = "Sorry, right-click has been disabled";

  function clickIE() {
  	if (document.all) {(message);return false;}} 
  function clickNS(e) {
  	if (document.layers||(document.getElementById&&!document.all)) { 
  	if (e.which==2||e.which==3) {(message);return false;}}} 
  	if (document.layers) {
  		document.captureEvents(Event.MOUSEDOWN);document.onmousedown=clickNS;} 
  	else {
  		document.onmouseup=clickNS;document.oncontextmenu=clickIE;} 
  		document.oncontextmenu=new Function("return false"); 
  		
  		
  		(function($) {
  $(function() {
    $('nav ul li > a:not(:only-child)').click(function(e) {
      $(this).siblings('.nav-dropdown').toggle();
      $('.nav-dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    $('#nav-toggle').on('click', function() {
      this.classList.toggle('active');
    });
    $('#nav-toggle').click(function() {
  $('nav ul').toggle();
});
  });
})(jQuery);