jQuery(document).ready(function () {
	jQuery('select').change(function () {
		jQuery('select option').each(function(index, el) {
			jQuery('body').removeClass(jQuery(el).attr('value'));
		});
		jQuery('body').addClass(jQuery('select').val());
	});

	jQuery('select option').each(function(index, el) {
		jQuery('body').removeClass(jQuery(el).attr('value'));
	});
	jQuery('body').addClass(jQuery('select').val());

	jQuery('menu a, article a, aside a').click(function (e) {
		e.preventDefault();
	});

	jQuery('a.mode').click(function (e) {
		var rel = jQuery(this).attr('rel');
		jQuery('select').val(rel);
		jQuery('select option').each(function(index, el) {
			jQuery('body').removeClass(jQuery(el).attr('value'));
		});
		jQuery('body').addClass(jQuery('select').val());
	});
});