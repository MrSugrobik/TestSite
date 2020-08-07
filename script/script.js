$(document).ready(function() {
	$(".header_burger").click(function(event) {
		$(".header_burger, .header_elements").toggleClass("active");
		$("body").toggleClass("lock");
	});
	$(".banner").slick({
		arrows: true,
		dots: true,
		speed: 1000,
		easing: "ease",
		autoplay: true,
		autoplaySpeed: 3000,
		touchThreshhold: 10,
		waitForAnimate: true,
	});

});

let animItems = document.querySelectorAll("._animItems");

let lastScrollTop = 0;
if (animItems.length > 0) {
	window.addEventListener("scroll", animOnScroll);
	function animOnScroll(params) {
		//for (let index = 0; index < animItems.length; index++) {
			//const animItem = animItems[index];
			const animItem = animItems[0];
			if (pageYOffset > lastScrollTop) {
				animItem.classList.add("_deactive");
			} else {
				animItem.classList.remove("_deactive");
			}
			lastScrollTop = pageYOffset;
		//}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}
}