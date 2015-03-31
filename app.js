var main = function() {
	$(".nav li").on('click', function() {
		$(this).toggleClass("active");
	});
}


$(document).ready(main);