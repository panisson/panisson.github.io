$(window).load(function() {
	$('#status').delay(200).fadeOut();
	$('#preloader').delay(200).fadeOut('slow');
	$('body').delay(400).css({'overflow':'visible'});
});

$(document).ready(function() {

	// Smooth scroll for anchor links
	$('a[href*="#"]').click(function() {
		if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '')
			&& location.hostname === this.hostname) {
			var $target = $(this.hash);
			$target = $target.length ? $target : $('[name=' + this.hash.slice(1) + ']');
			if ($target.length) {
				$('html, body').animate({ scrollTop: $target.offset().top }, 550, 'swing');
				return false;
			}
		}
	});

});
