(function ($) {
	$(function () {
		$(".panel").mouseenter(function () {
			var id = "#nav-" + $(this).attr('id');
			$('.active').removeClass('active');
			$(id).addClass('active');
		});
	});
})(jQuery);
