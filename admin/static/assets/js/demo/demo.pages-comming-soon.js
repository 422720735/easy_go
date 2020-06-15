"use strict";
function initializeSite() {
	(function() {
	    function centerInit(){

			var sphereContent = $('.sphere'),
				sphereHeight = sphereContent.height(),
				parentHeight = $(window).height(),
				topMargin = (parentHeight - sphereHeight) / 2;
			sphereContent.css({
				"margin-top" : topMargin+"px"
			});
			var heroContent = $('.hero'),
				heroHeight = heroContent.height(),
				heroTopMargin = (parentHeight - heroHeight) / 2;

			heroContent.css({
				"margin-top" : heroTopMargin+"px"
			});

	    }
	    $(document).ready(centerInit);
		$(window).resize(centerInit);
	})();
	$('#scene').parallax();

};

$(window).on('load',function(){
	initializeSite();
	(function() {
		setTimeout(function(){window.scrollTo(0,0);},0);
	})();
});
$('#countdown').countdown({
	date: "December 14, 2019 18:03:26",
	render: function(data) {
	  var el = $(this.el);
	  el.empty()
	    .append("<div>" + this.leadingZeros(data.days, 2) + " <span>days</span></div>")
	    .append("<div>" + this.leadingZeros(data.hours, 2) + " <span>hrs</span></div>")
	    .append("<div>" + this.leadingZeros(data.min, 2) + " <span>min</span></div>")
	    .append("<div>" + this.leadingZeros(data.sec, 2) + " <span>sec</span></div>");
	}
});
