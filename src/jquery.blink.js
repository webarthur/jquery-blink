/*!
 * jQuery Blink Plugin v1.0
 *
 * By Arthur Araújo
 * Released under the GNU license
 */
jQuery.fn.extend({
	blink: function(params1, params2, timer) {
		return this.each(function() {
			var e = jQuery(this);
			if(params1)e.data('_blink_params1', params1);
			if(params2)e.data('_blink_params2', params2);
			if(timer)e.data('_blink_timer', timer);
			e.css('transition', 'none');
			if( e.data('_blink_state') ) {
				e.animate(e.data('_blink_params2'), e.data('_blink_timer'), function(){ e.blink(); } );
				e.data('_blink_state', 0);
			} else {
				e.animate(e.data('_blink_params1'), e.data('_blink_timer'), function(){ e.blink(); } );
				e.data('_blink_state', 1);
			}
		});
	}
});
