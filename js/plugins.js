// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.


// retina.js, a high-resolution image swapper (http://retinajs.com), v0.0.2

(function(){function t(e){this.path=e;var t=this.path.split("."),n=t.slice(0,t.length-1).join("."),r=t[t.length-1];this.at_2x_path=n+"@2x."+r}function n(e){this.el=e,this.path=new t(this.el.getAttribute("src"));var n=this;this.path.check_2x_variant(function(e){e&&n.swap()})}var e=typeof exports=="undefined"?window:exports;e.RetinaImagePath=t,t.confirmed_paths=[],t.prototype.is_external=function(){return!!this.path.match(/^https?\:/i)&&!this.path.match("//"+document.domain)},t.prototype.check_2x_variant=function(e){var n,r=this;if(this.is_external())return e(!1);if(this.at_2x_path in t.confirmed_paths)return e(!0);n=new XMLHttpRequest,n.open("HEAD",this.at_2x_path),n.onreadystatechange=function(){return n.readyState!=4?e(!1):n.status>=200&&n.status<=399?(t.confirmed_paths.push(r.at_2x_path),e(!0)):e(!1)},n.send()},e.RetinaImage=n,n.prototype.swap=function(e){function n(){t.el.complete?(t.el.setAttribute("width",t.el.offsetWidth),t.el.setAttribute("height",t.el.offsetHeight),t.el.setAttribute("src",e)):setTimeout(n,5)}typeof e=="undefined"&&(e=this.path.at_2x_path);var t=this;n()},e.devicePixelRatio>1&&(window.onload=function(){var e=document.getElementsByTagName("img"),t=[],r,i;for(r=0;r<e.length;r++)i=e[r],t.push(new n(i))})})();

/**
 * Copyright (c) 2007-2012 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * @author Ariel Flesler
 * @version 1.4.3
 */
 
;(function($){var h=$.scrollTo=function(a,b,c){$(window).scrollTo(a,b,c)};h.defaults={axis:'xy',duration:parseFloat($.fn.jquery)>=1.3?0:1,limit:true};h.window=function(a){return $(window)._scrollable()};$.fn._scrollable=function(){return this.map(function(){var a=this,isWin=!a.nodeName||$.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!isWin)return a;var b=(a.contentWindow||a).document||a.ownerDocument||a;return/webkit/i.test(navigator.userAgent)||b.compatMode=='BackCompat'?b.body:b.documentElement})};$.fn.scrollTo=function(e,f,g){if(typeof f=='object'){g=f;f=0}if(typeof g=='function')g={onAfter:g};if(e=='max')e=9e9;g=$.extend({},h.defaults,g);f=f||g.duration;g.queue=g.queue&&g.axis.length>1;if(g.queue)f/=2;g.offset=both(g.offset);g.over=both(g.over);return this._scrollable().each(function(){if(!e)return;var d=this,$elem=$(d),targ=e,toff,attr={},win=$elem.is('html,body');switch(typeof targ){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(targ)){targ=both(targ);break}targ=$(targ,this);if(!targ.length)return;case'object':if(targ.is||targ.style)toff=(targ=$(targ)).offset()}$.each(g.axis.split(''),function(i,a){var b=a=='x'?'Left':'Top',pos=b.toLowerCase(),key='scroll'+b,old=d[key],max=h.max(d,a);if(toff){attr[key]=toff[pos]+(win?0:old-$elem.offset()[pos]);if(g.margin){attr[key]-=parseInt(targ.css('margin'+b))||0;attr[key]-=parseInt(targ.css('border'+b+'Width'))||0}attr[key]+=g.offset[pos]||0;if(g.over[pos])attr[key]+=targ[a=='x'?'width':'height']()*g.over[pos]}else{var c=targ[pos];attr[key]=c.slice&&c.slice(-1)=='%'?parseFloat(c)/100*max:c}if(g.limit&&/^\d+$/.test(attr[key]))attr[key]=attr[key]<=0?0:Math.min(attr[key],max);if(!i&&g.queue){if(old!=attr[key])animate(g.onAfterFirst);delete attr[key]}});animate(g.onAfter);function animate(a){$elem.animate(attr,f,g.easing,a&&function(){a.call(this,e,g)})}}).end()};h.max=function(a,b){var c=b=='x'?'Width':'Height',scroll='scroll'+c;if(!$(a).is('html,body'))return a[scroll]-$(a)[c.toLowerCase()]();var d='client'+c,html=a.ownerDocument.documentElement,body=a.ownerDocument.body;return Math.max(html[scroll],body[scroll])-Math.min(html[d],body[d])};function both(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);


/*
 * jQuery One Page Nav Plugin
 * http://github.com/davist11/jQuery-One-Page-Nav
 *
 * Copyright (c) 2010 Trevor Davis (http://trevordavis.net)
 * Dual licensed under the MIT and GPL licenses.
 * Uses the same license as jQuery, see:
 * http://jquery.org/license
 *
 * @version 2.2.0
 *
 * Example usage:
 * $('#nav').onePageNav({
 *   currentClass: 'current',
 *   changeHash: false,
 *   scrollSpeed: 750
 * });
 */

;(function($, window, document, undefined){

	// our plugin constructor
	var OnePageNav = function(elem, options){
		this.elem = elem;
		this.$elem = $(elem);
		this.options = options;
		this.metadata = this.$elem.data('plugin-options');
		this.$nav = this.$elem.find('a');
		this.$win = $(window);
		this.sections = {};
		this.didScroll = false;
		this.$doc = $(document);
		this.docHeight = this.$doc.height();
	};

	// the plugin prototype
	OnePageNav.prototype = {
		defaults: {
			currentClass: 'active',
			changeHash: false,
			easing: 'swing',
			filter: '',
			scrollSpeed: 550,
			scrollOffset: 50,
			scrollThreshold: 0.5,
			begin: false,
			end: false,
			scrollChange: false
		},

		init: function() {
			var self = this;
			
			// Introduce defaults that can be extended either
			// globally or using an object literal.
			self.config = $.extend({}, self.defaults, self.options, self.metadata);
			
			//Filter any links out of the nav
			if(self.config.filter !== '') {
				self.$nav = self.$nav.filter(self.config.filter);
			}
			
			//Handle clicks on the nav
			self.$nav.on('click.onePageNav', $.proxy(self.handleClick, self));

			//Get the section positions
			self.getPositions();
			
			//Handle scroll changes
			self.bindInterval();
			
			//Update the positions on resize too
			self.$win.on('resize.onePageNav', $.proxy(self.getPositions, self));

			return this;
		},
		
		adjustNav: function(self, $parent) {
			self.$elem.find('.' + self.config.currentClass).removeClass(self.config.currentClass);
			$parent.addClass(self.config.currentClass);
		},
		
		bindInterval: function() {
			var self = this;
			var docHeight;
			
			self.$win.on('scroll.onePageNav', function() {
				self.didScroll = true;
			});
			
			self.t = setInterval(function() {
				docHeight = self.$doc.height();
				
				//If it was scrolled
				if(self.didScroll) {
					self.didScroll = false;
					self.scrollChange();
				}
				
				//If the document height changes
				if(docHeight !== self.docHeight) {
					self.docHeight = docHeight;
					self.getPositions();
				}
			}, 250);
		},
		
		getHash: function($link) {
			return $link.attr('href').split('#')[1];
		},
		
		getPositions: function() {
			var self = this;
			var linkHref;
			var topPos;
			var $target;
			
			self.$nav.each(function() {
				linkHref = self.getHash($(this));
				$target = $('#' + linkHref);

				if($target.length) {
					topPos = $target.offset().top;
					self.sections[linkHref] = Math.round(topPos) - self.config.scrollOffset;
				}
			});
		},
		
		getSection: function(windowPos) {
			var returnValue = null;
			var windowHeight = Math.round(this.$win.height() * this.config.scrollThreshold);

			for(var section in this.sections) {
				if((this.sections[section] - windowHeight) < windowPos) {
					returnValue = section;
				}
			}
			
			return returnValue;
		},
		
		handleClick: function(e) {
			var self = this;
			var $link = $(e.currentTarget);
			var $parent = $link.parent();
			var newLoc = '#' + self.getHash($link);
			
			if(!$parent.hasClass(self.config.currentClass)) {
				//Start callback
				if(self.config.begin) {
					self.config.begin();
				}
				
				//Change the highlighted nav item
				self.adjustNav(self, $parent);
				
				//Removing the auto-adjust on scroll
				self.unbindInterval();
				
				//Scroll to the correct position
				$.scrollTo(newLoc, self.config.scrollSpeed, {
					axis: 'y',
					easing: self.config.easing,
					offset: {
						top: -self.config.scrollOffset
					},
					onAfter: function() {
						//Do we need to change the hash?
						if(self.config.changeHash) {
							window.location.hash = newLoc;
						}
						
						//Add the auto-adjust on scroll back in
						self.bindInterval();
						
						//End callback
						if(self.config.end) {
							self.config.end();
						}
					}
				});
			}

			e.preventDefault();
		},
		
		scrollChange: function() {
			var windowTop = this.$win.scrollTop();
			var position = this.getSection(windowTop);
			var $parent;
			
			//If the position is set
			if(position !== null) {
				$parent = this.$elem.find('a[href$="#' + position + '"]').parent();
				
				//If it's not already the current section
				if(!$parent.hasClass(this.config.currentClass)) {
					//Change the highlighted nav item
					this.adjustNav(this, $parent);
					
					//If there is a scrollChange callback
					if(this.config.scrollChange) {
						this.config.scrollChange($parent);
					}
				}
			}
		},
		
		unbindInterval: function() {
			clearInterval(this.t);
			this.$win.unbind('scroll.onePageNav');
		}
	};

	OnePageNav.defaults = OnePageNav.prototype.defaults;

	$.fn.onePageNav = function(options) {
		return this.each(function() {
			new OnePageNav(this, options).init();
		});
	};
	
})( jQuery, window , document );




// jquery.tweet.js - See http://tweet.seaofclouds.com/ or https://github.com/seaofclouds/tweet for more info
// Copyright (c) 2008-2012 Todd Matthews & Steve Purcell
// This is adapted version to work with proxy. Copied from /twitter folder

(function(e){if(typeof define==="function"&&define.amd)define(["jquery"],e);else e(jQuery)})(function(e){e.fn.tweet=function(t){function i(e,t){if(typeof e==="string"){var n=e;for(var r in t){var i=t[r];n=n.replace(new RegExp("{"+r+"}","g"),i===null?"":i)}return n}else return e(t)}function s(t,n){return function(){var r=[];this.each(function(){r.push(this.replace(t,n))});return e(r)}}function o(e){return e.replace(/</g,"<").replace(/>/g,"^>")}function u(e,t){return e.replace(r,function(e){var n=/^[a-z]+:/i.test(e)?e:"http://"+e;var r=e;for(var i=0;i<t.length;++i){var s=t[i];if(s.url==n&&s.expanded_url){n=s.expanded_url;r=s.display_url;break}}return'<a href="'+o(n)+'">'+o(r)+"</a>"})}function a(e){return Date.parse(e.replace(/^([a-z]{3})( [a-z]{3} \d\d?)(.*)( \d{4})$/i,"$1,$2$4$3"))}function f(e){var t=arguments.length>1?arguments[1]:new Date;var n=parseInt((t.getTime()-e)/1e3,10);var r="";if(n<1){r="just now"}else if(n<60){r=n+" seconds ago"}else if(n<120){r="about a minute ago"}else if(n<45*60){r="about "+parseInt(n/60,10).toString()+" minutes ago"}else if(n<2*60*60){r="about an hour ago"}else if(n<24*60*60){r="about "+parseInt(n/3600,10).toString()+" hours ago"}else if(n<48*60*60){r="about a day ago"}else{r="about "+parseInt(n/86400,10).toString()+" days ago"}return r}function l(e){if(e.match(/^(@([A-Za-z0-9-_]+)) .*/i)){return n.auto_join_text_reply}else if(e.match(r)){return n.auto_join_text_url}else if(e.match(/^((\w+ed)|just) .*/im)){return n.auto_join_text_ed}else if(e.match(/^(\w*ing) .*/i)){return n.auto_join_text_ing}else{return n.auto_join_text_default}}function c(){var t=n.modpath,r=n.fetch===null?n.count:n.fetch,i={include_entities:1};if(n.list){return{host:n.twitter_api_url,url:"/1.1/lists/statuses.json",parameters:e.extend({},i,{list_id:n.list_id,slug:n.list,owner_screen_name:n.username,page:n.page,count:r,include_rts:n.retweets?1:0})}}else if(n.favorites){return{host:n.twitter_api_url,url:"/1.1/favorites/list.json",parameters:e.extend({},i,{list_id:n.list_id,screen_name:n.username,page:n.page,count:r})}}else if(n.query===null&&n.username.length===1){return{host:n.twitter_api_url,url:"/1.1/statuses/user_timeline.json",parameters:e.extend({},i,{screen_name:n.username,page:n.page,count:r,include_rts:n.retweets?1:0})}}else{var s=n.query||"from:"+n.username.join(" OR from:");return{host:n.twitter_search_url,url:"/search.json",parameters:e.extend({},i,{page:n.page,q:s,rpp:r})}}}function h(e,t){if(t){return"user"in e?e.user.profile_image_url_https:h(e,false).replace(/^http:\/\/[a-z0-9]{1,3}\.twimg\.com\//,"https://s3.amazonaws.com/twitter_production/")}else{return e.profile_image_url||e.user.profile_image_url}}function p(t){var r={};r.item=t;r.source=t.source;r.name=t.from_user_name||t.user.name;r.screen_name=t.from_user||t.user.screen_name;r.avatar_size=n.avatar_size;r.avatar_url=h(t,document.location.protocol==="https:");r.retweet=typeof t.retweeted_status!="undefined";r.tweet_time=a(t.created_at);r.join_text=n.join_text=="auto"?l(t.text):n.join_text;r.tweet_id=t.id_str;r.twitter_base="http://"+n.twitter_url+"/";r.user_url=r.twitter_base+r.screen_name;r.tweet_url=r.user_url+"/status/"+r.tweet_id;r.reply_url=r.twitter_base+"intent/tweet?in_reply_to="+r.tweet_id;r.retweet_url=r.twitter_base+"intent/retweet?tweet_id="+r.tweet_id;r.favorite_url=r.twitter_base+"intent/favorite?tweet_id="+r.tweet_id;r.retweeted_screen_name=r.retweet&&t.retweeted_status.user.screen_name;r.tweet_relative_time=f(r.tweet_time);r.entities=t.entities?(t.entities.urls||[]).concat(t.entities.media||[]):[];r.tweet_raw_text=r.retweet?"RT @"+r.retweeted_screen_name+" "+t.retweeted_status.text:t.text;r.tweet_text=e([u(r.tweet_raw_text,r.entities)]).linkUser().linkHash()[0];r.tweet_text_fancy=e([r.tweet_text]).makeHeart()[0];r.user=i('<a class="tweet_user" href="{user_url}">{screen_name}</a>',r);r.join=n.join_text?i(' <span class="tweet_join">{join_text}</span> ',r):" ";r.avatar=r.avatar_size?i('<a class="tweet_avatar" href="{user_url}"><img src="{avatar_url}" height="{avatar_size}" width="{avatar_size}" alt="{screen_name}\'s avatar" title="{screen_name}\'s avatar" border="0"/></a>',r):"";r.time=i('<span class="tweet_time"><a href="{tweet_url}" title="view tweet on twitter">{tweet_relative_time}</a></span>',r);r.text=i('<span class="tweet_text">{tweet_text_fancy}</span>',r);r.reply_action=i('<a class="tweet_action tweet_reply" href="{reply_url}">reply</a>',r);r.retweet_action=i('<a class="tweet_action tweet_retweet" href="{retweet_url}">retweet</a>',r);r.favorite_action=i('<a class="tweet_action tweet_favorite" href="{favorite_url}">favorite</a>',r);return r}var n=e.extend({modpath:"/twitter/",username:null,list_id:null,list:null,favorites:false,query:null,avatar_size:null,count:10,fetch:null,page:1,retweets:true,intro_text:null,outro_text:null,join_text:null,auto_join_text_default:"i said,",auto_join_text_ed:"i",auto_join_text_ing:"i am",auto_join_text_reply:"i replied to",auto_join_text_url:"i was looking at",loading_text:null,refresh_interval:null,twitter_url:"twitter.com",twitter_api_url:"api.twitter.com",twitter_search_url:"search.twitter.com",template:"{avatar}{time}{join}{text}",comparator:function(e,t){return t["tweet_time"]-e["tweet_time"]},filter:function(e){return true}},t);var r=/\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/gi;e.extend({tweet:{t:i}});e.fn.extend({linkUser:s(/(^|[\W])@(\w+)/gi,'$1<span class="at">@</span><a href="http://'+n.twitter_url+'/$2">$2</a>'),linkHash:s(/(?:^| )[\#]+([\w\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u00ff\u0600-\u06ff]+)/gi,' <a href="http://'+n.twitter_search_url+"/search?q=&tag=$1&lang=all"+(n.username&&n.username.length==1&&!n.list?"&from="+n.username.join("%2BOR%2B"):"")+'" class="tweet_hashtag">#$1</a>'),makeHeart:s(/(<)+[3]/gi,"<tt class='heart'>&#x2665;</tt>")});return this.each(function(t,r){var s=e('<ul class="tweet_list">');var o='<p class="tweet_intro">'+n.intro_text+"</p>";var u='<p class="tweet_outro">'+n.outro_text+"</p>";var a=e('<p class="loading">'+n.loading_text+"</p>");if(n.username&&typeof n.username=="string"){n.username=[n.username]}e(r).unbind("tweet:load").bind("tweet:load",function(){if(n.loading_text)e(r).empty().append(a);e.ajax({dataType:"json",type:"post",async:false,url:n.modpath||"/twitter/",data:{request:c()},success:function(t,a){if(t.message){console.log(t.message)}var f=t.response;e(r).empty().append(s);if(n.intro_text)s.before(o);s.empty();if(f.statuses!==undefined){resp=f.statuses}else if(f.results!==undefined){resp=f.results}else{resp=f}var l=e.map(resp,p);l=e.grep(l,n.filter).sort(n.comparator).slice(0,n.count);s.append(e.map(l,function(e){return"<li>"+i(n.template,e)+"</li>"}).join("")).children("li:first").addClass("tweet_first").end().children("li:odd").addClass("tweet_even").end().children("li:even").addClass("tweet_odd");if(n.outro_text)s.after(u);e(r).trigger("loaded").trigger(l?"empty":"full");if(n.refresh_interval){window.setTimeout(function(){e(r).trigger("tweet:load")},1e3*n.refresh_interval)}}})}).trigger("tweet:load")})}})



