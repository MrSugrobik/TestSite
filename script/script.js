$(document).ready(function() {
	$(".header_burger").click(function(event) {
		$(".header_burger, .element_container").toggleClass("active");
		$("body").toggleClass("lock");
	});
});