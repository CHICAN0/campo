/* Fullscreen Video Background */
(function($) {
	"use strict";

	var Environment = {
		//mobile or desktop compatible event name
		TOUCH_DOWN_EVENT_NAME: 'mousedown touchstart',
		TOUCH_UP_EVENT_NAME: 'mouseup touchend',
		TOUCH_MOVE_EVENT_NAME: 'mousemove touchmove',
		TOUCH_DOUBLE_TAB_EVENT_NAME: 'dblclick dbltap',

		isAndroid: function() {
			return navigator.userAgent.match(/Android/i);
		},
		isBlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		isIOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		isOpera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		isWindows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
		isMobile: function() {
			return (Environment.isAndroid() || Environment.isBlackBerry() || Environment.isIOS() || Environment.isOpera() || Environment.isWindows());
		}
	};
	
	/* Check if website opened on mobile devices and fallback video to image background on mobile devices */
	if(Environment.isMobile()){
		
		var bgImage = $(".player").data('mobile-fallback');
		
		/* Use fullscreen image */
		$('#header').css({
			"background": "transparent url(" + bgImage + ") no-repeat center center fixed",
			"-webkit-background-size": "cover",
			"-moz-background-size": "cover",
			"-o-background-size": "cover",
			"background-size": "cover"
		});
	}else{
		
		/* Not mobile, use YTPlayer Fullscreen Video Background */
		$(".player").mb_YTPlayer();
	}
})(jQuery);
