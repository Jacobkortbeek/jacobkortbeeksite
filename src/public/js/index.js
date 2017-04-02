$(document).ready(function(){
	$('#nav-icon2').click(function(){
		$(this).toggleClass('open');
		$('.nav-container').toggleClass('nav-container-shown');
		$('#nav-icon2').toggleClass('icon-dislpay');
		if ($('.nav-container ul').hasClass('menu-items')) {
		     var delay = 425; //ms
		     setTimeout(function(){
		         $('.nav-container ul').removeClass('menu-items');
		     },delay );
		   }
		   // element doesn't have green class --> add it
		   else {
				 setTimeout(function() {
		     $('.nav-container ul').addClass('menu-items');
			 }, 125);
		  };
	});
});

$('body').mousemove(function(e){
    var amountMovedX = (e.pageX * -1 / 20);
    var amountMovedY = (e.pageY * -1 / 20);
    $(this).css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
});

$(window).scroll(function (){
const wScroll = $(window).scrollTop();
console.log(wScroll);
});
