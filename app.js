var main = function() {
	$(".nav li").on('click', function() {
		 $(".nav li").removeClass('active');
		$(this).toggleClass("active");
	});
}


$(document).ready(main);