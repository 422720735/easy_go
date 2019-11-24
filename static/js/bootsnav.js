!function(d){"use strict";var a={initialize:function(){this.event(),this.hoverDropdown(),this.navbarSticky(),this.navbarScrollspy()},event:function(){var a=d("nav.navbar.bootsnav");if(a.hasClass("navbar-sticky")&&a.wrap("<div class='wrap-sticky'></div>"),a.hasClass("brand-center")){var n=new Array,o=d("nav.brand-center"),s=o.find("ul.navbar-nav");o.prepend("<span class='storage-name' style='display:none;'></span>"),o.find("ul.navbar-nav > li").each(function(){if(d(this).hasClass("active")){var a=d("a",this).eq(0).text();d(".storage-name").html(a)}n.push(d(this).html())});var e=n.splice(0,Math.round(n.length/2)),t=n,i="",l=function(a){i="";for(var n=0;n<a.length;n++)i+="<li>"+a[n]+"</li>"};l(e),s.html(i),o.find("ul.nav").first().addClass("navbar-left"),l(t),s.after('<ul class="nav navbar-nav"></ul>').next().html(i),o.find("ul.nav").last().addClass("navbar-right"),o.find("ul.nav.navbar-left").wrap("<div class='col-half left'></div>"),o.find("ul.nav.navbar-right").wrap("<div class='col-half right'></div>"),o.find("ul.navbar-nav > li").each(function(){var a=d("ul.dropdown-menu",this),n=d("ul.megamenu-content",this);a.closest("li").addClass("dropdown"),n.closest("li").addClass("megamenu-fw")});var r=d(".storage-name").html();""==!r&&d("ul.navbar-nav > li:contains('"+r+"')").addClass("active")}a.hasClass("navbar-sidebar")?(d("body").addClass("wrap-nav-sidebar"),a.wrapInner("<div class='scroller'></div>")):d(".bootsnav").addClass("on"),a.find("ul.nav").hasClass("navbar-center")&&a.addClass("menu-center"),a.hasClass("navbar-full")?(d("nav.navbar.bootsnav").find("ul.nav").wrap("<div class='wrap-full-menu'></div>"),d(".wrap-full-menu").wrap("<div class='nav-full'></div>"),d("ul.nav.navbar-nav").prepend("<li class='close-full-menu'><a href='#'><i class='fa fa-times'></i></a></li>")):a.hasClass("navbar-mobile")?a.removeClass("no-full"):a.addClass("no-full"),a.hasClass("navbar-mobile")&&(d(".navbar-collapse").on("shown.bs.collapse",function(){d("body").addClass("side-right")}),d(".navbar-collapse").on("hide.bs.collapse",function(){d("body").removeClass("side-right")}),d(window).on("resize",function(){d("body").removeClass("side-right")})),a.hasClass("no-background")&&d(window).on("scroll",function(){34<d(window).scrollTop()?d(".navbar-fixed").removeClass("no-background"):d(".navbar-fixed").addClass("no-background")}),a.hasClass("navbar-transparent")&&d(window).on("scroll",function(){34<d(window).scrollTop()?d(".navbar-fixed").removeClass("navbar-transparent"):d(".navbar-fixed").addClass("navbar-transparent")}),d(".btn-cart").on("click",function(a){a.stopPropagation()}),d("nav.navbar.bootsnav .attr-nav").each(function(){d("li.search > a",this).on("click",function(a){a.preventDefault(),d(".top-search").slideToggle()})}),d(".input-group-addon.close-search").on("click",function(){d(".top-search").slideUp()}),d("nav.navbar.bootsnav .attr-nav").each(function(){d("li.side-menu > a",this).on("click",function(a){a.preventDefault(),d("nav.navbar.bootsnav > .side").toggleClass("on"),d("body").toggleClass("on-side")})}),d(".side .close-side").on("click",function(a){a.preventDefault(),d("nav.navbar.bootsnav > .side").removeClass("on"),d("body").removeClass("on-side")}),d("body").wrapInner("<div class='wrapper'></div>")},hoverDropdown:function(){var a=d("nav.navbar.bootsnav"),n=d(window).width(),o=d(window).height(),s=a.find("ul.nav").data("in"),e=a.find("ul.nav").data("out");if(n<991){d(".scroller").css("height","auto"),d("nav.navbar.bootsnav ul.nav").find("li.dropdown").off("mouseenter"),d("nav.navbar.bootsnav ul.nav").find("li.dropdown").off("mouseleave"),d("nav.navbar.bootsnav ul.nav").find(".title").off("mouseenter"),d("nav.navbar.bootsnav ul.nav").off("mouseleave"),d(".navbar-collapse").removeClass("animated"),d("nav.navbar.bootsnav ul.nav").each(function(){d(".dropdown-menu",this).addClass("animated"),d(".dropdown-menu",this).removeClass(e),d("a.dropdown-toggle",this).off("click"),d("a.dropdown-toggle",this).on("click",function(a){return a.stopPropagation(),d(this).closest("li.dropdown").find(".dropdown-menu").first().stop().fadeToggle().toggleClass(s),d(this).closest("li.dropdown").first().toggleClass("on"),!1}),d("li.dropdown",this).each(function(){return d(this).find(".dropdown-menu").stop().fadeOut(),d(this).on("hidden.bs.dropdown",function(){d(this).find(".dropdown-menu").stop().fadeOut()}),!1}),d(".megamenu-fw",this).each(function(){d(".col-menu",this).each(function(){d(".content",this).addClass("animated"),d(".content",this).stop().fadeOut(),d(".title",this).off("click"),d(".title",this).on("click",function(){return d(this).closest(".col-menu").find(".content").stop().fadeToggle().addClass(s),d(this).closest(".col-menu").toggleClass("on"),!1}),d(".content",this).on("click",function(a){a.stopPropagation()})})})});var t=function(){d("li.dropdown",this).removeClass("on"),d(".dropdown-menu",this).stop().fadeOut(),d(".dropdown-menu",this).removeClass(s),d(".col-menu",this).removeClass("on"),d(".col-menu .content",this).stop().fadeOut(),d(".col-menu .content",this).removeClass(s)};d("nav.navbar.bootsnav").on("mouseleave",function(){t()}),d("nav.navbar.bootsnav .attr-nav").each(function(){d(".dropdown-menu",this).removeClass("animated"),d("li.dropdown",this).off("mouseenter"),d("li.dropdown",this).off("mouseleave"),d("a.dropdown-toggle",this).off("click"),d("a.dropdown-toggle",this).on("click",function(a){a.stopPropagation(),d(this).closest("li.dropdown").find(".dropdown-menu").first().stop().fadeToggle(),d(".navbar-toggle").each(function(){d(".fa",this).removeClass("fa-times"),d(".fa",this).addClass("fa-bars"),d(".navbar-collapse").removeClass("in"),d(".navbar-collapse").removeClass("on")})}),d(this).on("mouseleave",function(){return d(".dropdown-menu",this).stop().fadeOut(),d("li.dropdown",this).removeClass("on"),!1})}),d(".navbar-toggle").each(function(){d(this).off("click"),d(this).on("click",function(){d(".fa",this).toggleClass("fa-bars"),d(".fa",this).toggleClass("fa-times"),t()})})}else 991<n&&(d(".scroller").css("height",o+"px"),a.hasClass("navbar-sidebar")?d("nav.navbar.bootsnav ul.nav").each(function(){d("a.dropdown-toggle",this).off("click"),d("a.dropdown-toggle",this).on("click",function(a){a.stopPropagation()}),d(".dropdown-menu",this).addClass("animated"),d("li.dropdown",this).on("mouseenter",function(){return d(".dropdown-menu",this).eq(0).removeClass(e),d(".dropdown-menu",this).eq(0).stop().fadeIn().addClass(s),d(this).addClass("on"),!1}),d(".col-menu").each(function(){d(".content",this).addClass("animated"),d(".title",this).on("mouseenter",function(){return d(this).closest(".col-menu").find(".content").stop().fadeIn().addClass(s),d(this).closest(".col-menu").addClass("on"),!1})}),d(this).on("mouseleave",function(){return d(".dropdown-menu",this).stop().removeClass(s),d(".dropdown-menu",this).stop().addClass(e).fadeOut(),d(".col-menu",this).find(".content").stop().fadeOut().removeClass(s),d(".col-menu",this).removeClass("on"),d("li.dropdown",this).removeClass("on"),!1})}):d("nav.navbar.bootsnav ul.nav").each(function(){d("a.dropdown-toggle",this).off("click"),d("a.dropdown-toggle",this).on("click",function(a){a.stopPropagation()}),d(".megamenu-fw",this).each(function(){d(".title",this).off("click"),d("a.dropdown-toggle",this).off("click"),d(".content").removeClass("animated")}),d(".dropdown-menu",this).addClass("animated"),d("li.dropdown",this).on("mouseenter",function(){return d(".dropdown-menu",this).eq(0).removeClass(e),d(".dropdown-menu",this).eq(0).stop().fadeIn().addClass(s),d(this).addClass("on"),!1}),d("li.dropdown",this).on("mouseleave",function(){d(".dropdown-menu",this).eq(0).removeClass(s),d(".dropdown-menu",this).eq(0).stop().fadeOut().addClass(e),d(this).removeClass("on")}),d(this).on("mouseleave",function(){return d(".dropdown-menu",this).removeClass(s),d(".dropdown-menu",this).eq(0).stop().fadeOut().addClass(e),d("li.dropdown",this).removeClass("on"),!1})}),d("nav.navbar.bootsnav .attr-nav").each(function(){d("a.dropdown-toggle",this).off("click"),d("a.dropdown-toggle",this).on("click",function(a){a.stopPropagation()}),d(".dropdown-menu",this).addClass("animated"),d("li.dropdown",this).on("mouseenter",function(){return d(".dropdown-menu",this).eq(0).removeClass(e),d(".dropdown-menu",this).eq(0).stop().fadeIn().addClass(s),d(this).addClass("on"),!1}),d("li.dropdown",this).on("mouseleave",function(){d(".dropdown-menu",this).eq(0).removeClass(s),d(".dropdown-menu",this).eq(0).stop().fadeOut().addClass(e),d(this).removeClass("on")}),d(this).on("mouseleave",function(){return d(".dropdown-menu",this).removeClass(s),d(".dropdown-menu",this).eq(0).stop().fadeOut().addClass(e),d("li.dropdown",this).removeClass("on"),!1})}));if(a.hasClass("navbar-full")){var i=d(window).height(),l=d(window).width();d(".nav-full").css("height",i+"px"),d(".wrap-full-menu").css("height",i+"px"),d(".wrap-full-menu").css("width",l+"px"),d(".navbar-collapse").addClass("animated"),d(".navbar-toggle").each(function(){var n=d(this).data("target");d(this).off("click"),d(this).on("click",function(a){return a.preventDefault(),d(n).removeClass(e),d(n).addClass("in"),d(n).addClass(s),!1}),d("li.close-full-menu").on("click",function(a){return a.preventDefault(),d(n).addClass(e),setTimeout(function(){d(n).removeClass("in"),d(n).removeClass(s)},500),!1})})}},navbarSticky:function(){var n=d("nav.navbar.bootsnav");if(n.hasClass("navbar-sticky")){var a=n.height();d(".wrap-sticky").height(a);var o=d(".wrap-sticky").offset().top;d(window).on("scroll",function(){var a=d(window).scrollTop();o<a?n.addClass("sticked"):n.removeClass("sticked")})}},navbarScrollspy:function(){alert(1321);var a=d(".navbar-scrollspy"),n=d("body"),r=d("nav.navbar.bootsnav"),o=r.outerHeight();if(a.length){n.scrollspy({target:".navbar",offset:o}),d(".scroll").on("click",function(a){a.preventDefault(),d(".scroll").removeClass("active"),d(this).addClass("active"),d(".navbar-collapse").removeClass("in"),d(".navbar-toggle").each(function(){d(".fa",this).removeClass("fa-times"),d(".fa",this).addClass("fa-bars")});d(window).scrollTop();var n=d(this).find("a"),o=d(n.attr("href")).offset().top,s=d(window).width(),e=r.data("minus-value-desktop"),t=r.data("minus-value-mobile"),i=r.data("speed");if(992<s)var l=o-e;else l=o-t;d("html, body").stop().animate({scrollTop:l},i)});var s=function(){var a=n.data("bs.scrollspy");a&&(o=r.outerHeight(),a.options.offset=o,n.data("bs.scrollspy",a),n.scrollspy("refresh"))};d(window).on("resize",function(){clearTimeout(a);var a=setTimeout(s,200)})}}};d(document).ready(function(){a.initialize()}),d(window).on("resize",function(){a.hoverDropdown(),setTimeout(function(){a.navbarSticky()},500),d(".navbar-toggle").each(function(){d(".fa",this).removeClass("fa-times"),d(".fa",this).addClass("fa-bars"),d(this).removeClass("fixed")}),d(".navbar-collapse").removeClass("in"),d(".navbar-collapse").removeClass("on"),d(".navbar-collapse").removeClass("bounceIn")})}(jQuery);