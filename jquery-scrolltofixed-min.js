(function(a){a.ScrollToFixed=function(c,f){var i=this;i.$el=a(c);i.el=c;i.$el.data("ScrollToFixed",i);var b=false;var y=i.$el;var v=0;var l=0;var g=-1;var w;var d=-1;var n=null;var s;function o(){h();d=-1;v=y.offset().top;l=y.offset().left+(y.offset().left-y.position().left);if(g==-1){orginalOffsetLeft=l}if(!w){w=y.css("position")}b=true;if(i.options.bottom!=-1){q()}}function k(){return y.css("position")=="fixed"}function r(){return y.css("position")=="absolute"}function e(){return !(k()||r())}function q(){if(!k()){n.css({display:y.css("display"),width:y.outerWidth(true),height:y.outerHeight(true),"float":y.css("float")});y.css({width:y.width(),position:"fixed",top:i.options.bottom==-1?m():"",bottom:i.options.bottom==-1?"":i.options.bottom})}}function h(){if(!e()){d=-1;n.css("display","none");y.css({width:"",position:"",left:"",top:""})}}function p(z){if(z!=d){y.css("left",l-z);d=z}}function m(){return i.options.marginTop}function t(){var A=b;if(!b){o()}var z=a(window).scrollLeft();var B=a(window).scrollTop();if(i.options.bottom==-1){if(i.options.limit>0&&B>=i.options.limit-m()){if(!r()||!A){j();y.trigger("preAbsolute");y.css({width:y.width(),position:"absolute",top:i.options.limit,left:l});y.trigger("unfixed")}}else{if(B>=v-m()){if(!k()||!A){j();y.trigger("preFixed");q();d=-1;y.trigger("fixed")}p(z)}else{if(k()||w!=y.css("position")||!A){j();y.trigger("preUnfixed");h();y.trigger("unfixed")}}}}else{if(i.options.limit>0){if(B+a(window).height()-y.outerHeight(true)>=i.options.limit-m()){if(k()){j();y.trigger("preUnfixed");h();y.trigger("unfixed")}}else{if(!k()){j();y.trigger("preFixed");q()}p(z);y.trigger("fixed")}}else{p(z)}}}function j(){var z=y.css("position");if(z=="absolute"){y.trigger("postAbsolute")}else{if(z=="fixed"){y.trigger("postFixed")}else{y.trigger("postUnfixed")}}}var u=function(z){b=false;t()};var x=function(z){t()};i.init=function(){i.options=a.extend({},a.ScrollToFixed.defaultOptions,f);if(navigator.platform==="iPad"||navigator.platform==="iPhone"||navigator.platform==="iPod"){if(!navigator.userAgent.match(/OS 5_.*\ like Mac OS X/i)){return}}i.$el.css("z-index",i.options.zIndex);n=a("<div />");if(e()){i.$el.after(n)}a(window).bind("resize.ScrollToFixed",u);a(window).bind("scroll.ScrollToFixed",x);if(i.options.preFixed){y.bind("preFixed.ScrollToFixed",i.options.preFixed)}if(i.options.postFixed){y.bind("postFixed.ScrollToFixed",i.options.postFixed)}if(i.options.preUnfixed){y.bind("preUnfixed.ScrollToFixed",i.options.preUnfixed)}if(i.options.postUnfixed){y.bind("postUnfixed.ScrollToFixed",i.options.postUnfixed)}if(i.options.preAbsolute){y.bind("preAbsolute.ScrollToFixed",i.options.preAbsolute)}if(i.options.postAbsolute){y.bind("postAbsolute.ScrollToFixed",i.options.postAbsolute)}if(i.options.fixed){y.bind("fixed.ScrollToFixed",i.options.fixed)}if(i.options.unfixed){y.bind("unfixed.ScrollToFixed",i.options.unfixed)}if(i.options.spacerClass){n.addClass(i.options.spacerClass)}y.bind("resize",function(){n.height(y.height())});y.bind("scroll.ScrollToFixed",function(){h();t()});y.bind("remove.ScrollToFixed",function(){h();a(window).unbind("resize",u);a(window).unbind("scroll",x);y.unbind(".ScrollToFixed")});if(i.options.bottom!=-1){if(!k()){j();y.trigger("preFixed.ScrollToFixed");q()}}};i.init()};a.ScrollToFixed.defaultOptions={marginTop:0,limit:0,bottom:-1,zIndex:1000};a.fn.scrollToFixed=function(b){return this.each(function(){(new a.ScrollToFixed(this,b))})}})(jQuery);