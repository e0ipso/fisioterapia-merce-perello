
// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function(){
  log.history = log.history || [];   // store logs to an array for reference
  log.history.push(arguments);
  if(this.console) {
    arguments.callee = arguments.callee.caller;
    var newarr = [].slice.call(arguments);
    (typeof console.log === 'object' ? log.apply.call(console.log, console, newarr) : console.log.apply(console, newarr));
  }
};

// make it safe to use console.log always
(function(b){function c(){}for(var d="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,timeStamp,profile,profileEnd,time,timeEnd,trace,warn".split(","),a;a=d.pop();){b[a]=b[a]||c}})((function(){try
{console.log();return window.console;}catch(err){return window.console={};}})());


// place any jQuery/helper plugins in here, instead of separate, slower script files.

/*global jQuery */
/*!	
* FitText.js 1.0
*
* Copyright 2011, Dave Rupert http://daverupert.com
* Released under the WTFPL license 
* http://sam.zoy.org/wtfpl/
*
* Date: Thu May 05 14:23:00 2011 -0600
*/

(function( $ ){
	
	$.fn.fitText = function( kompressor, options ) {
	    
	    var settings = {
        'minFontSize' : Number.NEGATIVE_INFINITY,
        'maxFontSize' : Number.POSITIVE_INFINITY
      };
	
			return this.each(function(){
				var $this = $(this);              // store the object
				var compressor = kompressor || 1; // set the compressor
        
        if ( options ) { 
          $.extend( settings, options );
        }
        
        // Resizer() resizes items based on the object width divided by the compressor * 10
				var resizer = function () {
					$this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
				};

				// Call once to set.
				resizer();
				
				// Call on resize. Opera debounces their resize by default. 
      	$(window).resize(resizer);
      	
			});

	};

})( jQuery );

/*
* qTip2 - Pretty powerful tooltips
* http://craigsworks.com/projects/qtip2/
*
* Version: nightly
* Copyright 2009-2010 Craig Michael Thompson - http://craigsworks.com
*
* Dual licensed under MIT or GPLv2 licenses
*   http://en.wikipedia.org/wiki/MIT_License
*   http://en.wikipedia.org/wiki/GNU_General_Public_License
*
* Date: Mon Dec 19 15:43:28.0000000000 2011
*//*jslint browser: true, onevar: true, undef: true, nomen: true, bitwise: true, regexp: true, newcap: true, immed: true, strict: true *//*global window: false, jQuery: false, console: false */(function(a,b,c){function C(c){var f=this,g=c.options.show.modal,i=c.elements,j=i.tooltip,k="#qtip-overlay",l=".qtipmodal",m=l+c.id,o="is-modal-qtip",q=a(document.body),r;c.checks.modal={"^show.modal.(on|blur)$":function(){f.init(),i.overlay.toggle(j.is(":visible"))}},a.extend(f,{init:function(){if(!g.on)return f;r=f.create(),j.attr(o,d).css("z-index",h.modal.zindex+a(n+"["+o+"]").length).unbind(l).unbind(m).bind("tooltipshow"+l+" tooltiphide"+l,function(b,c,d){var e=b.originalEvent;if(e&&b.type==="tooltiphide"&&/mouse(leave|enter)/.test(e.type)&&a(e.relatedTarget).closest(r[0]).length)try{b.preventDefault()}catch(g){}else(!e||e&&!e.solo)&&f[b.type.replace("tooltip","")](b,d)}).bind("tooltipfocus"+l,function(b){if(!b.isDefaultPrevented()){var c=a(n).filter("["+o+"]"),d=h.modal.zindex+c.length,e=parseInt(j[0].style.zIndex,10);r[0].style.zIndex=d-1,c.each(function(){this.style.zIndex>e&&(this.style.zIndex-=1)}),c.end().filter("."+p).qtip("blur",b.originalEvent),j.addClass(p)[0].style.zIndex=d;try{b.preventDefault()}catch(f){}}}).bind("tooltiphide"+l,function(b){a("["+o+"]").filter(":visible").not(j).last().qtip("focus",b)}),g.escape&&a(b).unbind(m).bind("keydown"+m,function(a){a.keyCode===27&&j.hasClass(p)&&c.hide(a)}),g.blur&&i.overlay.unbind(m).bind("click"+m,function(a){j.hasClass(p)&&c.hide(a)});return f},create:function(){var c=a(k);if(c.length)return i.overlay=c.insertAfter(a(n).last());r=i.overlay=a("<div />",{id:k.substr(1),html:"<div></div>",mousedown:function(){return e}}).insertAfter(a(n).last()),a(b).unbind(l).bind("resize"+l,function(){r.css({height:a(b).height(),width:a(b).width()})}).triggerHandler("resize");return r},toggle:function(b,c,h){if(b&&b.isDefaultPrevented())return f;var i=g.effect,k=c?"show":"hide",l=r.is(":visible"),p=a("["+o+"]").filter(":visible").not(j),s;r||(r=f.create());if(r.is(":animated")&&l===c||!c&&p.length)return f;c?(r.css({left:0,top:0}),r.toggleClass("blurs",g.blur),q.bind("focusin"+m,function(b){var c=a(b.target),d=c.closest(".qtip"),f=d.length<1?e:parseInt(d[0].style.zIndex,10)>parseInt(j[0].style.zIndex,10);!f&&a(b.target).closest(n)[0]!==j[0]&&j.find("input:visible").filter(":first").focus()})):q.undelegate("*","focusin"+m),r.stop(d,e),a.isFunction(i)?i.call(r,c):i===e?r[k]():r.fadeTo(parseInt(h,10)||90,c?1:0,function(){c||a(this).hide()}),c||r.queue(function(a){r.css({left:"",top:""}),a()});return f},show:function(a,b){return f.toggle(a,d,b)},hide:function(a,b){return f.toggle(a,e,b)},destroy:function(){var d=r;d&&(d=a("["+o+"]").not(j).length<1,d?(i.overlay.remove(),a(b).unbind(l)):i.overlay.unbind(l+c.id),q.undelegate("*","focusin"+m));return j.removeAttr(o).unbind(l)}}),f.init()}function B(b,g){function w(a){var b=a.precedance==="y",c=n[b?"width":"height"],d=n[b?"height":"width"],e=a.string().indexOf("center")>-1,f=c*(e?.5:1),g=Math.pow,h=Math.round,i,j,k,l=Math.sqrt(g(f,2)+g(d,2)),m=[p/f*l,p/d*l];m[2]=Math.sqrt(g(m[0],2)-g(p,2)),m[3]=Math.sqrt(g(m[1],2)-g(p,2)),i=l+m[2]+m[3]+(e?0:m[0]),j=i/l,k=[h(j*d),h(j*c)];return{height:k[b?0:1],width:k[b?1:0]}}function v(b){var c=k.titlebar&&b.y==="top",d=c?k.titlebar:k.content,e=a.browser.mozilla,f=e?"-moz-":a.browser.webkit?"-webkit-":"",g=b.y+(e?"":"-")+b.x,h=f+(e?"border-radius-"+g:"border-"+g+"-radius");return parseInt(d.css(h),10)||parseInt(l.css(h),10)||0}function u(a,b,c){b=b?b:a[a.precedance];var d=l.hasClass(r),e=k.titlebar&&a.y==="top",f=e?k.titlebar:k.content,g="border-"+b+"-width",h;l.addClass(r),h=parseInt(f.css(g),10),h=(c?h||parseInt(l.css(g),10):h)||0,l.toggleClass(r,d);return h}function t(a,f,g,h){if(k.tip){var l=i.corner.clone(),n=g.adjusted,o=b.options.position.adjust.method.split(" "),p=o[0],q=o[1]||o[0],r={left:e,top:e,x:0,y:0},s,t={},u;i.corner.fixed!==d&&(p==="shift"&&l.precedance==="x"&&n.left&&l.y!=="center"?l.precedance=l.precedance==="x"?"y":"x":p==="flip"&&n.left&&(l.x=l.x==="center"?n.left>0?"left":"right":l.x==="left"?"right":"left"),q==="shift"&&l.precedance==="y"&&n.top&&l.x!=="center"?l.precedance=l.precedance==="y"?"x":"y":q==="flip"&&n.top&&(l.y=l.y==="center"?n.top>0?"top":"bottom":l.y==="top"?"bottom":"top"),l.string()!==m.corner.string()&&(m.top!==n.top||m.left!==n.left)&&i.update(l,e)),s=i.position(l,n),s.right!==c&&(s.left=-s.right),s.bottom!==c&&(s.top=-s.bottom),s.user=Math.max(0,j.offset);if(r.left=p==="shift"&&!!n.left)l.x==="center"?t["margin-left"]=r.x=s["margin-left"]-n.left:(u=s.right!==c?[n.left,-s.left]:[-n.left,s.left],(r.x=Math.max(u[0],u[1]))>u[0]&&(g.left-=n.left,r.left=e),t[s.right!==c?"right":"left"]=r.x);if(r.top=q==="shift"&&!!n.top)l.y==="center"?t["margin-top"]=r.y=s["margin-top"]-n.top:(u=s.bottom!==c?[n.top,-s.top]:[-n.top,s.top],(r.y=Math.max(u[0],u[1]))>u[0]&&(g.top-=n.top,r.top=e),t[s.bottom!==c?"bottom":"top"]=r.y);k.tip.css(t).toggle(!(r.x&&r.y||l.x==="center"&&r.y||l.y==="center"&&r.x)),g.left-=s.left.charAt?s.user:p!=="shift"||r.top||!r.left&&!r.top?s.left:0,g.top-=s.top.charAt?s.user:q!=="shift"||r.left||!r.left&&!r.top?s.top:0,m.left=n.left,m.top=n.top,m.corner=l.clone()}}var i=this,j=b.options.style.tip,k=b.elements,l=k.tooltip,m={top:0,left:0},n={width:j.width,height:j.height},o={},p=j.border||0,q=".qtip-tip",s=!!(a("<canvas />")[0]||{}).getContext;i.mimic=i.corner=f,i.border=p,i.offset=j.offset,i.size=n,b.checks.tip={"^position.my|style.tip.(corner|mimic|border)$":function(){i.init()||i.destroy(),b.reposition()},"^style.tip.(height|width)$":function(){n={width:j.width,height:j.height},i.create(),i.update(),b.reposition()},"^content.title.text|style.(classes|widget)$":function(){k.tip&&i.update()}},a.extend(i,{init:function(){var b=i.detectCorner()&&(s||a.browser.msie);b&&(i.create(),i.update(),l.unbind(q).bind("tooltipmove"+q,t));return b},detectCorner:function(){var a=j.corner,c=b.options.position,f=c.at,g=c.my.string?c.my.string():c.my;if(a===e||g===e&&f===e)return e;a===d?i.corner=new h.Corner(g):a.string||(i.corner=new h.Corner(a),i.corner.fixed=d);return i.corner.string()!=="centercenter"},detectColours:function(c){var d,e,f,g=k.tip.css("cssText",""),h=c||i.corner,m=h[h.precedance],p="border-"+m+"-color",q="border"+m.charAt(0)+m.substr(1)+"Color",s=/rgba?\(0, 0, 0(, 0)?\)|transparent|#123456/i,t="background-color",u="transparent",v=" !important",w=a(document.body).css("color"),x=b.elements.content.css("color"),y=k.titlebar&&(h.y==="top"||h.y==="center"&&g.position().top+n.height/2+j.offset<k.titlebar.outerHeight(1)),z=y?k.titlebar:k.content;l.addClass(r),o.fill=e=g.css(t),o.border=f=g[0].style[q]||g.css(p)||l.css(p);if(!e||s.test(e))o.fill=z.css(t)||u,s.test(o.fill)&&(o.fill=l.css(t)||e);if(!f||s.test(f)||f===w)o.border=z.css(p)||u,s.test(o.border)&&(o.border=f);a("*",g).add(g).css("cssText",t+":"+u+v+";border:0"+v+";"),l.removeClass(r)},create:function(){var b=n.width,c=n.height,d;k.tip&&k.tip.remove(),k.tip=a("<div />",{"class":"ui-tooltip-tip"}).css({width:b,height:c}).prependTo(l),s?a("<canvas />").appendTo(k.tip)[0].getContext("2d").save():(d='<vml:shape coordorigin="0,0" style="display:inline-block; position:absolute; behavior:url(#default#VML);"></vml:shape>',k.tip.html(d+d),a("*",k.tip).bind("click mousedown",function(a){a.stopPropagation()}))},update:function(b,c){var g=k.tip,l=g.children(),q=n.width,r=n.height,t="px solid ",v="px dashed transparent",x=j.mimic,y=Math.round,z,B,C,D,E;b||(b=m.corner||i.corner),x===e?x=b:(x=new h.Corner(x),x.precedance=b.precedance,x.x==="inherit"?x.x=b.x:x.y==="inherit"?x.y=b.y:x.x===x.y&&(x[b.precedance]=b[b.precedance])),z=x.precedance,i.detectColours(b),o.border!=="transparent"&&o.border!=="#123456"?(p=u(b,f,d),j.border===0&&p>0&&(o.fill=o.border),i.border=p=j.border!==d?j.border:p):i.border=p=0,C=A(x,q,r),i.size=E=w(b),g.css(E),b.precedance==="y"?D=[y(x.x==="left"?p:x.x==="right"?E.width-q-p:(E.width-q)/2),y(x.y==="top"?E.height-r:0)]:D=[y(x.x==="left"?E.width-q:0),y(x.y==="top"?p:x.y==="bottom"?E.height-r-p:(E.height-r)/2)],s?(l.attr(E),B=l[0].getContext("2d"),B.restore(),B.save(),B.clearRect(0,0,3e3,3e3),B.translate(D[0],D[1]),B.beginPath(),B.moveTo(C[0][0],C[0][1]),B.lineTo(C[1][0],C[1][1]),B.lineTo(C[2][0],C[2][1]),B.closePath(),B.fillStyle=o.fill,B.strokeStyle=o.border,B.lineWidth=p*2,B.lineJoin="miter",B.miterLimit=100,p&&B.stroke(),B.fill()):(C="m"+C[0][0]+","+C[0][1]+" l"+C[1][0]+","+C[1][1]+" "+C[2][0]+","+C[2][1]+" xe",D[2]=p&&/^(r|b)/i.test(b.string())?parseFloat(a.browser.version,10)===8?2:1:0,l.css({antialias:""+(x.string().indexOf("center")>-1),left:D[0]-D[2]*Number(z==="x"),top:D[1]-D[2]*Number(z==="y"),width:q+p,height:r+p}).each(function(b){var c=a(this);c[c.prop?"prop":"attr"]({coordsize:q+p+" "+(r+p),path:C,fillcolor:o.fill,filled:!!b,stroked:!b}).css({display:p||b?"block":"none"}),!b&&c.html()===""&&c.html('<vml:stroke weight="'+p*2+'px" color="'+o.border+'" miterlimit="1000" joinstyle="miter"  style="behavior:url(#default#VML); display:inline-block;" />')})),c!==e&&i.position(b)},position:function(b){var c=k.tip,f={},g=Math.max(0,j.offset),h,l,m;if(j.corner===e||!c)return e;b=b||i.corner,h=b.precedance,l=w(b),m=[b.x,b.y],h==="x"&&m.reverse(),a.each(m,function(a,c){var e,i;c==="center"?(e=h==="y"?"left":"top",f[e]="50%",f["margin-"+e]=-Math.round(l[h==="y"?"width":"height"]/2)+g):(e=u(b,c,d),i=v(b),f[c]=a?p?u(b,c):0:g+(i>e?i:0))}),f[b[h]]-=l[h==="x"?"width":"height"],c.css({top:"",bottom:"",left:"",right:"",margin:""}).css(f);return f},destroy:function(){k.tip&&k.tip.remove(),l.unbind(q)}}),m.corner=new h.Corner(i.init())}function A(a,b,c){var d=Math.ceil(b/2),e=Math.ceil(c/2),f={bottomright:[[0,0],[b,c],[b,0]],bottomleft:[[0,0],[b,0],[0,c]],topright:[[0,c],[b,0],[b,c]],topleft:[[0,0],[0,c],[b,c]],topcenter:[[0,c],[d,0],[b,c]],bottomcenter:[[0,0],[b,0],[d,c]],rightcenter:[[0,0],[b,e],[0,c]],leftcenter:[[b,0],[b,c],[0,e]]};f.lefttop=f.bottomright,f.righttop=f.bottomleft,f.leftbottom=f.topright,f.rightbottom=f.topleft;return f[a.string()]}function z(b,c){var i,j,k,l,m,n=a(this),o=a(document.body),p=this===document?o:n,q=n.metadata?n.metadata(c.metadata):f,r=c.metadata.type==="html5"&&q?q[c.metadata.name]:f,s=n.data(c.metadata.name||"qtipopts");try{s=typeof s==="string"?(new Function("return "+s))():s}catch(t){w("Unable to parse HTML5 attribute data: "+s)}l=a.extend(d,{},g.defaults,c,typeof s==="object"?x(s):f,x(r||q)),j=l.position,l.id=b;if("boolean"===typeof l.content.text){k=n.attr(l.content.attr);if(l.content.attr!==e&&k)l.content.text=k;else{w("Unable to locate content for tooltip! Aborting render of tooltip on element: ",n);return e}}j.container.length||(j.container=o),j.target===e&&(j.target=p),l.show.target===e&&(l.show.target=p),l.show.solo===d&&(l.show.solo=o),l.hide.target===e&&(l.hide.target=p),l.position.viewport===d&&(l.position.viewport=j.container),j.at=new h.Corner(j.at),j.my=new h.Corner(j.my);if(a.data(this,"qtip"))if(l.overwrite)n.qtip("destroy");else if(l.overwrite===e)return e;l.suppress&&(m=a.attr(this,"title"))&&a(this).removeAttr("title").attr(u,m),i=new y(n,l,b,!!k),a.data(this,"qtip",i),n.bind("remove.qtip-"+b,function(){i.destroy()});return i}function y(s,t,w,y){function R(){var c=[t.show.target[0],t.hide.target[0],z.rendered&&G.tooltip[0],t.position.container[0],t.position.viewport[0],b,document];z.rendered?a([]).pushStack(a.grep(c,function(a){return typeof a==="object"})).unbind(F):t.show.target.unbind(F+"-create")}function Q(){function p(a){E.is(":visible")&&z.reposition(a)}function o(a){if(E.hasClass(m))return e;clearTimeout(z.timers.inactive),z.timers.inactive=setTimeout(function(){z.hide(a)},t.hide.inactive)}function l(b){if(E.hasClass(m)||C||D)return e;var d=a(b.relatedTarget||b.target),g=d.closest(n)[0]===E[0],h=d[0]===f.show[0];clearTimeout(z.timers.show),clearTimeout(z.timers.hide);if(c.target==="mouse"&&g||t.hide.fixed&&(/mouse(out|leave|move)/.test(b.type)&&(g||h)))try{b.preventDefault(),b.stopImmediatePropagation()}catch(i){}else t.hide.delay>0?z.timers.hide=setTimeout(function(){z.hide(b)},t.hide.delay):z.hide(b)}function k(a){if(E.hasClass(m))return e;clearTimeout(z.timers.show),clearTimeout(z.timers.hide);var b=function(){z.toggle(d,a)};t.show.delay>0?z.timers.show=setTimeout(b,t.show.delay):b()}var c=t.position,f={show:t.show.target,hide:t.hide.target,viewport:a(c.viewport),document:a(document),body:a(document.body),window:a(b)},h={show:a.trim(""+t.show.event).split(" "),hide:a.trim(""+t.hide.event).split(" ")},j=a.browser.msie&&parseInt(a.browser.version,10)===6;E.bind("mouseenter"+F+" mouseleave"+F,function(a){var b=a.type==="mouseenter";b&&z.focus(a),E.toggleClass(q,b)}),t.hide.fixed&&(f.hide=f.hide.add(E),E.bind("mouseover"+F,function(){E.hasClass(m)||clearTimeout(z.timers.hide)})),/mouse(out|leave)/i.test(t.hide.event)?t.hide.leave==="window"&&f.window.bind("mouseout"+F+" blur"+F,function(a){/select|option/.test(a.target)&&!a.relatedTarget&&z.hide(a)}):/mouse(over|enter)/i.test(t.show.event)&&f.hide.bind("mouseleave"+F,function(a){clearTimeout(z.timers.show)}),(""+t.hide.event).indexOf("unfocus")>-1&&f.body.bind("mousedown"+F,function(b){var c=a(b.target),d=!E.hasClass(m)&&E.is(":visible");c[0]!==E[0]&&c.parents(n).length===0&&c.add(s).length>1&&!c.attr("disabled")&&z.hide(b)}),"number"===typeof t.hide.inactive&&(f.show.bind("qtip-"+w+"-inactive",o),a.each(g.inactiveEvents,function(a,b){f.hide.add(G.tooltip).bind(b+F+"-inactive",o)})),a.each(h.hide,function(b,c){var d=a.inArray(c,h.show),e=a(f.hide);d>-1&&e.add(f.show).length===e.length||c==="unfocus"?(f.show.bind(c+F,function(a){E.is(":visible")?l(a):k(a)}),delete h.show[d]):f.hide.bind(c+F,l)}),a.each(h.show,function(a,b){f.show.bind(b+F,k)}),"number"===typeof t.hide.distance&&f.show.add(E).bind("mousemove"+F,function(a){var b=H.origin||{},c=t.hide.distance,d=Math.abs;(d(a.pageX-b.pageX)>=c||d(a.pageY-b.pageY)>=c)&&z.hide(a)}),c.target==="mouse"&&(f.show.bind("mousemove"+F,function(a){i={pageX:a.pageX,pageY:a.pageY,type:"mousemove"}}),c.adjust.mouse&&(t.hide.event&&E.bind("mouseleave"+F,function(a){(a.relatedTarget||a.target)!==f.show[0]&&z.hide(a)}),f.document.bind("mousemove"+F,function(a){!E.hasClass(m)&&E.is(":visible")&&z.reposition(a||i)}))),(c.adjust.resize||f.viewport.length)&&(a.event.special.resize?f.viewport:f.window).bind("resize"+F,p),(f.viewport.length||j&&E.css("position")==="fixed")&&f.viewport.bind("scroll"+F,p)}function P(b,d){function g(b){function i(c){c&&(delete h[c.src],clearTimeout(z.timers.img[c.src]),a(c).unbind(F)),a.isEmptyObject(h)&&(z.redraw(),d!==e&&z.reposition(H.event),b())}var g,h={};if((g=f.find("img:not([height]):not([width])")).length===0)return i();g.each(function(b,d){if(h[d.src]===c){var e=0,f=3;(function g(){if(d.height||d.width||e>f)return i(d);e+=1,z.timers.img[d.src]=setTimeout(g,700)})(),a(d).bind("error"+F+" load"+F,function(){i(this)}),h[d.src]=d}})}var f=G.content;if(!z.rendered||!b)return e;a.isFunction(b)&&(b=b.call(s,H.event,z)||""),b.jquery&&b.length>0?f.empty().append(b.css({display:"block"})):f.html(b),z.rendered<0?E.queue("fx",g):(D=0,g(a.noop));return z}function O(b,c){var d=G.title;if(!z.rendered||!b)return e;a.isFunction(b)&&(b=b.call(s,H.event,z));if(b===e)return K(e);b.jquery&&b.length>0?d.empty().append(b.css({display:"block"})):d.html(b),z.redraw(),c!==e&&z.rendered&&E.is(":visible")&&z.reposition(H.event)}function N(a){var b=G.button,c=G.title;if(!z.rendered)return e;a?(c||M(),L()):b.remove()}function M(){var b=B+"-title";G.titlebar&&K(),G.titlebar=a("<div />",{"class":k+"-titlebar "+(t.style.widget?"ui-widget-header":"")}).append(G.title=a("<div />",{id:b,"class":k+"-title","aria-atomic":d})).insertBefore(G.content).delegate(".ui-tooltip-close","mousedown keydown mouseup keyup mouseout",function(b){a(this).toggleClass("ui-state-active ui-state-focus",b.type.substr(-4)==="down")}).delegate(".ui-tooltip-close","mouseover mouseout",function(b){a(this).toggleClass("ui-state-hover",b.type==="mouseover")}),t.content.title.button?L():z.rendered&&z.redraw()}function L(){var b=t.content.title.button,c=typeof b==="string",d=c?b:"Close tooltip";G.button&&G.button.remove(),b.jquery?G.button=b:G.button=a("<a />",{"class":"ui-state-default ui-tooltip-close "+(t.style.widget?"":k+"-icon"),title:d,"aria-label":d}).prepend(a("<span />",{"class":"ui-icon ui-icon-close",html:"&times;"})),G.button.appendTo(G.titlebar).attr("role","button").click(function(a){E.hasClass(m)||z.hide(a);return e}),z.redraw()}function K(a){G.title&&(G.titlebar.remove(),G.titlebar=G.title=G.button=f,a!==e&&z.reposition())}function J(){var a=t.style.widget;E.toggleClass(l,a).toggleClass(o,t.style["default"]&&!a),G.content.toggleClass(l+"-content",a),G.titlebar&&G.titlebar.toggleClass(l+"-header",a),G.button&&G.button.toggleClass(k+"-icon",!a)}function I(a){var b=0,c,d=t,e=a.split(".");while(d=d[e[b++]])b<e.length&&(c=d);return[c||t,e.pop()]}var z=this,A=document.body,B=k+"-"+w,C=0,D=0,E=a(),F=".qtip-"+w,G,H;z.id=w,z.rendered=e,z.elements=G={target:s},z.timers={img:{}},z.options=t,z.checks={},z.plugins={},z.cache=H={event:{},target:a(),disabled:e,attr:y},z.checks.builtin={"^id$":function(b,c,f){var h=f===d?g.nextid:f,i=k+"-"+h;h!==e&&h.length>0&&!a("#"+i).length&&(E[0].id=i,G.content[0].id=i+"-content",G.title[0].id=i+"-title")},"^content.text$":function(a,b,c){P(c)},"^content.title.text$":function(a,b,c){if(!c)return K();!G.title&&c&&M(),O(c)},"^content.title.button$":function(a,b,c){N(c)},"^position.(my|at)$":function(a,b,c){"string"===typeof c&&(a[b]=new h.Corner(c))},"^position.container$":function(a,b,c){z.rendered&&E.appendTo(c)},"^show.ready$":function(){z.rendered?z.toggle(d):z.render(1)},"^style.classes$":function(a,b,c){E.attr("class",k+" qtip ui-helper-reset "+c)},"^style.widget|content.title":J,"^events.(render|show|move|hide|focus|blur)$":function(b,c,d){E[(a.isFunction(d)?"":"un")+"bind"]("tooltip"+c,d)},"^(show|hide|position).(event|target|fixed|inactive|leave|distance|viewport|adjust)":function(){var a=t.position;E.attr("tracking",a.target==="mouse"&&a.adjust.mouse),R(),Q()}},a.extend(z,{render:function(b){if(z.rendered)return z;var c=t.content.text,f=t.content.title.text,g=t.position,i=a.Event("tooltiprender");a.attr(s[0],"aria-describedby",B),E=G.tooltip=a("<div/>",{id:B,"class":k+" qtip ui-helper-reset "+o+" "+t.style.classes+" "+k+"-pos-"+t.position.my.abbrev(),width:t.style.width||"",height:t.style.height||"",tracking:g.target==="mouse"&&g.adjust.mouse,role:"alert","aria-live":"polite","aria-atomic":e,"aria-describedby":B+"-content","aria-hidden":d}).toggleClass(m,H.disabled).data("qtip",z).appendTo(t.position.container).append(G.content=a("<div />",{"class":k+"-content",id:B+"-content","aria-atomic":d})),z.rendered=-1,C=D=1,f&&(M(),a.isFunction(f)||O(f,e)),a.isFunction(c)||P(c,e),z.rendered=d,J(),a.each(t.events,function(b,c){a.isFunction(c)&&E.bind(b==="toggle"?"tooltipshow tooltiphide":"tooltip"+b,c)}),a.each(h,function(){this.initialize==="render"&&this(z)}),Q(),E.queue("fx",function(a){i.originalEvent=H.event,E.trigger(i,[z]),C=D=0,z.redraw(),(t.show.ready||b)&&z.toggle(d,H.event,e),a()});return z},get:function(a){var b,c;switch(a.toLowerCase()){case"dimensions":b={height:E.outerHeight(),width:E.outerWidth()};break;case"offset":b=h.offset(E,t.position.container);break;default:c=I(a.toLowerCase()),b=c[0][c[1]],b=b.precedance?b.string():b}return b},set:function(b,c){function m(a,b){var c,d,e;for(c in k)for(d in k[c])if(e=(new RegExp(d,"i")).exec(a))b.push(e),k[c][d].apply(z,b)}var g=/^position\.(my|at|adjust|target|container)|style|content|show\.ready/i,h=/^content\.(title|attr)|style/i,i=e,j=e,k=z.checks,l;"string"===typeof b?(l=b,b={},b[l]=c):b=a.extend(d,{},b),a.each(b,function(c,d){var e=I(c.toLowerCase()),f;f=e[0][e[1]],e[0][e[1]]="object"===typeof d&&d.nodeType?a(d):d,b[c]=[e[0],e[1],d,f],i=g.test(c)||i,j=h.test(c)||j}),x(t),C=D=1,a.each(b,m),C=D=0,E.is(":visible")&&z.rendered&&(i&&z.reposition(t.position.target==="mouse"?f:H.event),j&&z.redraw());return z},toggle:function(b,c){function q(){b?(a.browser.msie&&E[0].style.removeAttribute("filter"),E.css("overflow",""),"string"===typeof h.autofocus&&a(h.autofocus,E).focus(),p=a.Event("tooltipvisible"),p.originalEvent=c?H.event:f,E.trigger(p,[z]),h.target.trigger("qtip-"+w+"-inactive")):E.css({display:"",visibility:"",opacity:"",left:"",top:""})}if(!z.rendered)return b?z.render(1):z;var g=b?"show":"hide",h=t[g],j=E.is(":visible"),k=!c||t[g].target.length<2||H.target[0]===c.target,l=t.position,m=t.content,o,p;(typeof b).search("boolean|number")&&(b=!j);if(!E.is(":animated")&&j===b&&k)return z;if(c){if(/over|enter/.test(c.type)&&/out|leave/.test(H.event.type)&&c.target===t.show.target[0]&&E.has(c.relatedTarget).length)return z;H.event=a.extend({},c)}p=a.Event("tooltip"+g),p.originalEvent=c?H.event:f,E.trigger(p,[z,90]);if(p.isDefaultPrevented())return z;a.attr(E[0],"aria-hidden",!b),b?(H.origin=a.extend({},i),z.focus(c),a.isFunction(m.text)&&P(m.text,e),a.isFunction(m.title.text)&&O(m.title.text,e),!v&&l.target==="mouse"&&l.adjust.mouse&&(a(document).bind("mousemove.qtip",function(a){i={pageX:a.pageX,pageY:a.pageY,type:"mousemove"}}),v=d),z.reposition(c,arguments[2]),(p.solo=!!h.solo)&&a(n,h.solo).not(E).qtip("hide",p)):(clearTimeout(z.timers.show),delete H.origin,v&&!a(n+'[tracking="true"]:visible',h.solo).not(E).length&&(a(document).unbind("mousemove.qtip"),v=e),z.blur(c)),k&&E.stop(0,1),h.effect===e?(E[g](),q.call(E)):a.isFunction(h.effect)?(h.effect.call(E,z),E.queue("fx",function(a){q(),a()})):E.fadeTo(90,b?1:0,q),b&&h.target.trigger("qtip-"+w+"-inactive");return z},show:function(a){return z.toggle(d,a)},hide:function(a){return z.toggle(e,a)},focus:function(b){if(!z.rendered)return z;var c=a(n),d=parseInt(E[0].style.zIndex,10),e=g.zindex+c.length,f=a.extend({},b),h,i;E.hasClass(p)||(i=a.Event("tooltipfocus"),i.originalEvent=f,E.trigger(i,[z,e]),i.isDefaultPrevented()||(d!==e&&(c.each(function(){this.style.zIndex>d&&(this.style.zIndex=this.style.zIndex-1)}),c.filter("."+p).qtip("blur",f)),E.addClass(p)[0].style.zIndex=e));return z},blur:function(b){var c=a.extend({},b),d;E.removeClass(p),d=a.Event("tooltipblur"),d.originalEvent=c,E.trigger(d,[z]);return z},reposition:function(c,d){if(!z.rendered||C)return z;C=1;var f=t.position.target,g=t.position,j=g.my,l=g.at,m=g.adjust,n=m.method.split(" "),o=E.outerWidth(),p=E.outerHeight(),q=0,r=0,s=a.Event("tooltipmove"),u=E.css("position")==="fixed",v=g.viewport,w={left:0,top:0},x=g.container,y=e,B=z.plugins.tip,D={horizontal:n[0],vertical:n[1]=n[1]||n[0],enabled:v.jquery&&f[0]!==b&&f[0]!==A&&m.method!=="none",left:function(a){var b=D.horizontal==="shift",c=-x.offset.left+v.offset.left+v.scrollLeft,d=j.x==="left"?o:j.x==="right"?-o:-o/2,e=l.x==="left"?q:l.x==="right"?-q:-q/2,f=B&&B.size?B.size.width||0:0,g=B&&B.corner&&B.corner.precedance==="x"&&!b?f:0,h=c-a+g,i=a+o-v.width-c+g,k=d-(j.precedance==="x"||j.x===j.y?e:0),n=j.x==="center";b?(g=B&&B.corner&&B.corner.precedance==="y"?f:0,k=(j.x==="left"?1:-1)*d-g,w.left+=h>0?h:i>0?-i:0,w.left=Math.max(-x.offset.left+v.offset.left+(g&&B.corner.x==="center"?B.offset:0),a-k,Math.min(Math.max(-x.offset.left+v.offset.left+v.width,a+k),w.left))):(h>0&&(j.x!=="left"||i>0)?w.left-=k:i>0&&(j.x!=="right"||h>0)&&(w.left-=n?-k:k),w.left!==a&&n&&(w.left-=m.x),w.left<c&&-w.left>i&&(w.left=a));return w.left-a},top:function(a){var b=D.vertical==="shift",c=-x.offset.top+v.offset.top+v.scrollTop,d=j.y==="top"?p:j.y==="bottom"?-p:-p/2,e=l.y==="top"?r:l.y==="bottom"?-r:-r/2,f=B&&B.size?B.size.height||0:0,g=B&&B.corner&&B.corner.precedance==="y"&&!b?f:0,h=c-a+g,i=a+p-v.height-c+g,k=d-(j.precedance==="y"||j.x===j.y?e:0),n=j.y==="center";b?(g=B&&B.corner&&B.corner.precedance==="x"?f:0,k=(j.y==="top"?1:-1)*d-g,w.top+=h>0?h:i>0?-i:0,w.top=Math.max(-x.offset.top+v.offset.top+(g&&B.corner.x==="center"?B.offset:0),a-k,Math.min(Math.max(-x.offset.top+v.offset.top+v.height,a+k),w.top))):(h>0&&(j.y!=="top"||i>0)?w.top-=k:i>0&&(j.y!=="bottom"||h>0)&&(w.top-=n?-k:k),w.top!==a&&n&&(w.top-=m.y),w.top<0&&-w.top>i&&(w.top=a));return w.top-a}},F;if(a.isArray(f)&&f.length===2)l={x:"left",y:"top"},w={left:f[0],top:f[1]};else if(f==="mouse"&&(c&&c.pageX||H.event.pageX))l={x:"left",y:"top"},c=(c&&(c.type==="resize"||c.type==="scroll")?H.event:c&&c.pageX&&c.type==="mousemove"?c:i&&i.pageX&&(m.mouse||!c||!c.pageX)?{pageX:i.pageX,pageY:i.pageY}:!m.mouse&&H.origin&&H.origin.pageX?H.origin:c)||c||H.event||i||{},w={top:c.pageY,left:c.pageX};else{f==="event"?c&&c.target&&c.type!=="scroll"&&c.type!=="resize"?f=H.target=a(c.target):f=H.target:H.target=a(f),f=a(f).eq(0);if(f.length===0)return z;f[0]===document||f[0]===b?(q=h.iOS?b.innerWidth:f.width(),r=h.iOS?b.innerHeight:f.height(),f[0]===b&&(w={top:u||h.iOS?(v||f).scrollTop():0,left:u||h.iOS?(v||f).scrollLeft():0})):f.is("area")&&h.imagemap?w=h.imagemap(f,l,D.enabled?n:e):f[0].namespaceURI==="http://www.w3.org/2000/svg"&&h.svg?w=h.svg(f,l):(q=f.outerWidth(),r=f.outerHeight(),w=h.offset(f,x)),w.offset&&(q=w.width,r=w.height,y=w.flipoffset,w=w.offset);if(h.iOS<4.1&&h.iOS>3.1||h.iOS==4.3||!h.iOS&&u)F=a(b),w.left-=F.scrollLeft(),w.top-=F.scrollTop();w.left+=l.x==="right"?q:l.x==="center"?q/2:0,w.top+=l.y==="bottom"?r:l.y==="center"?r/2:0}w.left+=m.x+(j.x==="right"?-o:j.x==="center"?-o/2:0),w.top+=m.y+(j.y==="bottom"?-p:j.y==="center"?-p/2:0),D.enabled?(v={elem:v,height:v[(v[0]===b?"h":"outerH")+"eight"](),width:v[(v[0]===b?"w":"outerW")+"idth"](),scrollLeft:u?0:v.scrollLeft(),scrollTop:u?0:v.scrollTop(),offset:v.offset()||{left:0,top:0}},x={elem:x,scrollLeft:x.scrollLeft(),scrollTop:x.scrollTop(),offset:x.offset()||{left:0,top:0}},w.adjusted={left:D.horizontal!=="none"?D.left(w.left):0,top:D.vertical!=="none"?D.top(w.top):0},w.adjusted.left+w.adjusted.top&&E.attr("class",E[0].className.replace(/ui-tooltip-pos-\w+/i,k+"-pos-"+j.abbrev())),y&&w.adjusted.left&&(w.left+=y.left),y&&w.adjusted.top&&(w.top+=y.top)):w.adjusted={left:0,top:0},s.originalEvent=a.extend({},c),E.trigger(s,[z,w,v.elem||v]);if(s.isDefaultPrevented())return z;delete w.adjusted,d===e||isNaN(w.left)||isNaN(w.top)||f==="mouse"||!a.isFunction(g.effect)?E.css(w):a.isFunction(g.effect)&&(g.effect.call(E,z,a.extend({},w)),E.queue(function(b){a(this).css({opacity:"",height:""}),a.browser.msie&&this.style.removeAttribute("filter"),b()})),C=0;return z},redraw:function(){if(z.rendered<1||D)return z;var a=t.position.container,b,c,d,e;D=1,t.style.height&&E.css("height",t.style.height),t.style.width?E.css("width",t.style.width):(E.css("width","").addClass(r),c=E.width()+1,d=E.css("max-width")||"",e=E.css("min-width")||"",b=(d+e).indexOf("%")>-1?a.width()/100:0,d=(d.indexOf("%")>-1?b:1)*parseInt(d,10)||c,e=(e.indexOf("%")>-1?b:1)*parseInt(e,10)||0,c=d+e?Math.min(Math.max(c,e),d):c,E.css("width",Math.round(c)).removeClass(r)),D=0;return z},disable:function(b){"boolean"!==typeof b&&(b=!E.hasClass(m)&&!H.disabled),z.rendered?(E.toggleClass(m,b),a.attr(E[0],"aria-disabled",b)):H.disabled=!!b;return z},enable:function(){return z.disable(e)},destroy:function(){var b=s[0],c=a.attr(b,u),d=s.data("qtip");z.rendered&&(E.remove(),a.each(z.plugins,function(){this.destroy&&this.destroy()})),clearTimeout(z.timers.show),clearTimeout(z.timers.hide),R();if(!d||z===d)a.removeData(b,"qtip"),t.suppress&&c&&(a.attr(b,"title",c),s.removeAttr(u)),s.removeAttr("aria-describedby");s.unbind(".qtip-"+w),delete j[z.id];return s}})}function x(b){var c;if(!b||"object"!==typeof b)return e;if(b.metadata===f||"object"!==typeof b.metadata)b.metadata={type:b.metadata};if("content"in b){if(b.content===f||"object"!==typeof b.content||b.content.jquery)b.content={text:b.content};c=b.content.text||e,!a.isFunction(c)&&(!c&&!c.attr||c.length<1||"object"===typeof c&&!c.jquery)&&(b.content.text=e);if("title"in b.content){if(b.content.title===f||"object"!==typeof b.content.title)b.content.title={text:b.content.title};c=b.content.title.text||e,!a.isFunction(c)&&(!c&&!c.attr||c.length<1||"object"===typeof c&&!c.jquery)&&(b.content.title.text=e)}}if("position"in b)if(b.position===f||"object"!==typeof b.position)b.position={my:b.position,at:b.position};if("show"in b)if(b.show===f||"object"!==typeof b.show)b.show.jquery?b.show={target:b.show}:b.show={event:b.show};if("hide"in b)if(b.hide===f||"object"!==typeof b.hide)b.hide.jquery?b.hide={target:b.hide}:b.hide={event:b.hide};if("style"in b)if(b.style===f||"object"!==typeof b.style)b.style={classes:b.style};a.each(h,function(){this.sanitize&&this.sanitize(b)});return b}function w(){w.history=w.history||[],w.history.push(arguments);if("object"===typeof console){var a=console[console.warn?"warn":"log"],b=Array.prototype.slice.call(arguments),c;typeof arguments[0]==="string"&&(b[0]="qTip2: "+b[0]),c=a.apply?a.apply(console,b):a(b)}}"use strict";var d=!0,e=!1,f=null,g,h,i,j={},k="ui-tooltip",l="ui-widget",m="ui-state-disabled",n="div.qtip."+k,o=k+"-default",p=k+"-focus",q=k+"-hover",r=k+"-fluid",s="-31000px",t="_replacedByqTip",u="oldtitle",v;g=a.fn.qtip=function(b,h,i){var j=(""+b).toLowerCase(),k=f,l=a.makeArray(arguments).slice(1),m=l[l.length-1],n=this[0]?a.data(this[0],"qtip"):f;if(!arguments.length&&n||j==="api")return n;if("string"===typeof b){this.each(function(){var b=a.data(this,"qtip");if(!b)return d;m&&m.timeStamp&&(b.cache.event=m);if(j!=="option"&&j!=="options"||!h)b[j]&&b[j].apply(b[j],l);else if(a.isPlainObject(h)||i!==c)b.set(h,i);else{k=b.get(h);return e}});return k!==f?k:this}if("object"===typeof b||!arguments.length){n=x(a.extend(d,{},b));return g.bind.call(this,n,m)}},g.bind=function(b,f){return this.each(function(k){function r(b){function d(){p.render(typeof b==="object"||l.show.ready),m.show.add(m.hide).unbind(o)}if(p.cache.disabled)return e;p.cache.event=a.extend({},b),p.cache.target=b?a(b.target):[c],l.show.delay>0?(clearTimeout(p.timers.show),p.timers.show=setTimeout(d,l.show.delay),n.show!==n.hide&&m.hide.bind(n.hide,function(){clearTimeout(p.timers.show)})):d()}var l,m,n,o,p,q;q=a.isArray(b.id)?b.id[k]:b.id,q=!q||q===e||q.length<1||j[q]?g.nextid++:j[q]=q,o=".qtip-"+q+"-create",p=z.call(this,q,b);if(p===e)return d;l=p.options,a.each(h,function(){this.initialize==="initialize"&&this(p)}),m={show:l.show.target,hide:l.hide.target},n={show:a.trim(""+l.show.event).replace(/ /g,o+" ")+o,hide:a.trim(""+l.hide.event).replace(/ /g,o+" ")+o},/mouse(over|enter)/i.test(n.show)&&!/mouse(out|leave)/i.test(n.hide)&&(n.hide+=" mouseleave"+o),m.show.bind("mousemove"+o,function(a){i={pageX:a.pageX,pageY:a.pageY,type:"mousemove"}}),m.show.bind(n.show,r),(l.show.ready||l.prerender)&&r(f)})},h=g.plugins={Corner:function(a){a=(""+a).replace(/([A-Z])/," $1").replace(/middle/gi,"center").toLowerCase(),this.x=(a.match(/left|right/i)||a.match(/center/)||["inherit"])[0].toLowerCase(),this.y=(a.match(/top|bottom|center/i)||["inherit"])[0].toLowerCase();var b=a.charAt(0);this.precedance=b==="t"||b==="b"?"y":"x",this.string=function(){return this.precedance==="y"?this.y+this.x:this.x+this.y},this.abbrev=function(){var a=this.x.substr(0,1),b=this.y.substr(0,1);return a===b?a:a==="c"||a!=="c"&&b!=="c"?b+a:a+b},this.clone=function(){return{x:this.x,y:this.y,precedance:this.precedance,string:this.string,abbrev:this.abbrev,clone:this.clone}}},offset:function(a,b){function i(a,b){c.left+=b*a.scrollLeft(),c.top+=b*a.scrollTop()}var c=a.offset(),d=b,e=0,f=document.body,g,h;if(d){do{d.css("position")!=="static"&&(g=d[0]===f?{left:parseInt(d.css("left"),10)||0,top:parseInt(d.css("top"),10)||0}:d.position(),c.left-=g.left+(parseInt(d.css("borderLeftWidth"),10)||0)+(parseInt(d.css("marginLeft"),10)||0),c.top-=g.top+(parseInt(d.css("borderTopWidth"),10)||0),h=d.css("overflow"),(h==="scroll"||h==="auto")&&++e);if(d[0]===f)break}while(d=d.offsetParent());b[0]!==f&&e&&i(b,1)}return c},iOS:parseFloat((""+(/CPU.*OS ([0-9_]{1,3})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent)||[0,""])[1]).replace("undefined","3_2").replace("_","."))||e,fn:{attr:function(b,c){if(this.length){var d=this[0],e="title",f=a.data(d,"qtip");if(b===e&&f&&"object"===typeof f&&f.options.suppress){if(arguments.length<2)return a.attr(d,u);f&&f.options.content.attr===e&&f.cache.attr&&f.set("content.text",c);return this.attr(u,c)}}return a.fn["attr"+t].apply(this,arguments)},clone:function(b){var c=a([]),d="title",e=a.fn["clone"+t].apply(this,arguments);b||e.filter("["+u+"]").attr("title",function(){return a.attr(this,u)}).removeAttr(u);return e},remove:a.ui?f:function(b,c){a.ui||a(this).each(function(){c||(!b||a.filter(b,[this]).length)&&a("*",this).add(this).each(function(){a(this).triggerHandler("remove")})})}}},a.each(h.fn,function(b,c){if(!c||a.fn[b+t])return d;var e=a.fn[b+t]=a.fn[b];a.fn[b]=function(){return c.apply(this,arguments)||e.apply(this,arguments)}}),g.version="nightly",g.nextid=0,g.inactiveEvents="click dblclick mousedown mouseup mousemove mouseleave mouseenter".split(" "),g.zindex=15e3,g.defaults={prerender:e,id:e,overwrite:d,suppress:d,content:{text:d,attr:"title",title:{text:e,button:e}},position:{my:"top left",at:"bottom right",target:e,container:e,viewport:e,adjust:{x:0,y:0,mouse:d,resize:d,method:"flip flip"},effect:function(b,c,d){a(this).animate(c,{duration:200,queue:e})}},show:{target:e,event:"mouseenter",effect:d,delay:90,solo:e,ready:e,autofocus:e},hide:{target:e,event:"mouseleave",effect:d,delay:0,fixed:e,inactive:e,leave:"window",distance:e},style:{classes:"",widget:e,width:e,height:e,"default":d},events:{render:f,move:f,show:f,hide:f,toggle:f,visible:f,focus:f,blur:f}},h.imagemap=function(b,c,d){function n(a,b,c){var d=0,e=1,f=1,g=0,h=0,i=a.width,j=a.height;while(i>0&&j>0&&e>0&&f>0){i=Math.floor(i/2),j=Math.floor(j/2),c.x==="left"?e=i:c.x==="right"?e=a.width-i:e+=Math.floor(i/2),c.y==="top"?f=j:c.y==="bottom"?f=a.height-j:f+=Math.floor(j/2),d=b.length;while(d--){if(b.length<2)break;g=b[d][0]-a.offset.left,h=b[d][1]-a.offset.top,(c.x==="left"&&g>=e||c.x==="right"&&g<=e||c.x==="center"&&(g<e||g>a.width-e)||c.y==="top"&&h>=f||c.y==="bottom"&&h<=f||c.y==="center"&&(h<f||h>a.height-f))&&b.splice(d,1)}}return{left:b[0][0],top:b[0][1]}}b.jquery||(b=a(b));var e=(b[0].shape||b.attr("shape")).toLowerCase(),f=(b[0].coords||b.attr("coords")).split(","),g=[],h=a('img[usemap="#'+b.parent("map").attr("name")+'"]'),i=h.offset(),j={width:0,height:0,offset:{top:1e10,right:0,bottom:0,left:1e10}},k=0,l=0,m;i.left+=Math.ceil((h.outerWidth()-h.width())/2),i.top+=Math.ceil((h.outerHeight()-h.height())/2);if(e==="poly"){k=f.length;while(k--)l=[parseInt(f[--k],10),parseInt(f[k+1],10)],l[0]>j.offset.right&&(j.offset.right=l[0]),l[0]<j.offset.left&&(j.offset.left=l[0]),l[1]>j.offset.bottom&&(j.offset.bottom=l[1]),l[1]<j.offset.top&&(j.offset.top=l[1]),g.push(l)}else g=a.map(f,function(a){return parseInt(a,10)});switch(e){case"rect":j={width:Math.abs(g[2]-g[0]),height:Math.abs(g[3]-g[1]),offset:{left:Math.min(g[0],g[2]),top:Math.min(g[1],g[3])}};break;case"circle":j={width:g[2]+2,height:g[2]+2,offset:{left:g[0],top:g[1]}};break;case"poly":a.extend(j,{width:Math.abs(j.offset.right-j.offset.left),height:Math.abs(j.offset.bottom-j.offset.top)}),c.string()==="centercenter"?j.offset={left:j.offset.left+j.width/2,top:j.offset.top+j.height/2}:(j.offset=n(j,g.slice(),c),d&&(d[0]==="flip"||d[1]==="flip")&&(j.flipoffset=n(j,g.slice(),{x:c.x==="left"?"right":c.x==="right"?"left":"center",y:c.y==="top"?"bottom":c.y==="bottom"?"top":"center"}),j.flipoffset.left-=j.offset.left,j.flipoffset.top-=j.offset.top)),j.width=j.height=0}j.offset.left+=i.left,j.offset.top+=i.top;return j},h.tip=function(a){var b=a.plugins.tip;return"object"===typeof b?b:a.plugins.tip=new B(a)},h.tip.initialize="render",h.tip.sanitize=function(a){var b=a.style,c;b&&"tip"in b&&(c=a.style.tip,typeof c!=="object"&&(a.style.tip={corner:c}),/string|boolean/i.test(typeof c.corner)||(c.corner=d),typeof c.width!=="number"&&delete c.width,typeof c.height!=="number"&&delete c.height,typeof c.border!=="number"&&c.border!==d&&delete c.border,typeof c.offset!=="number"&&delete c.offset)},a.extend(d,g.defaults,{style:{tip:{corner:d,mimic:e,width:6,height:6,border:d,offset:0}}}),h.svg=function(b,c){var d=a(document),e=b[0],f={width:0,height:0,offset:{top:1e10,left:1e10}},g,h,i,j,k;if(e.getBBox&&e.parentNode){g=e.getBBox(),h=e.getScreenCTM(),i=e.farthestViewportElement||e;if(!i.createSVGPoint)return f;j=i.createSVGPoint(),j.x=g.x,j.y=g.y,k=j.matrixTransform(h),f.offset.left=k.x,f.offset.top=k.y,j.x+=g.width,j.y+=g.height,k=j.matrixTransform(h),f.width=k.x-f.offset.left,f.height=k.y-f.offset.top,f.offset.left+=d.scrollLeft(),f.offset.top+=d.scrollTop()}return f},h.modal=function(a){var b=a.plugins.modal;return"object"===typeof b?b:a.plugins.modal=new C(a)},h.modal.initialize="render",h.modal.sanitize=function(a){a.show&&(typeof a.show.modal!=="object"?a.show.modal={on:!!a.show.modal}:typeof a.show.modal.on==="undefined"&&(a.show.modal.on=d))},h.modal.zindex=g.zindex+1e3,a.extend(d,g.defaults,{show:{modal:{on:e,effect:d,blur:d,escape:d}}})})(jQuery,window)
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
});
// ColorBox v1.3.19 - jQuery lightbox plugin
// (c) 2011 Jack Moore - jacklmoore.com
// License: http://www.opensource.org/licenses/mit-license.php
(function(a,b,c){function Z(c,d,e){var g=b.createElement(c);return d&&(g.id=f+d),e&&(g.style.cssText=e),a(g)}function $(a){var b=y.length,c=(Q+a)%b;return c<0?b+c:c}function _(a,b){return Math.round((/%/.test(a)?(b==="x"?z.width():z.height())/100:1)*parseInt(a,10))}function ba(a){return K.photo||/\.(gif|png|jpe?g|bmp|ico)((#|\?).*)?$/i.test(a)}function bb(){var b;K=a.extend({},a.data(P,e));for(b in K)a.isFunction(K[b])&&b.slice(0,2)!=="on"&&(K[b]=K[b].call(P));K.rel=K.rel||P.rel||"nofollow",K.href=K.href||a(P).attr("href"),K.title=K.title||P.title,typeof K.href=="string"&&(K.href=a.trim(K.href))}function bc(b,c){a.event.trigger(b),c&&c.call(P)}function bd(){var a,b=f+"Slideshow_",c="click."+f,d,e,g;K.slideshow&&y[1]?(d=function(){F.text(K.slideshowStop).unbind(c).bind(j,function(){if(K.loop||y[Q+1])a=setTimeout(W.next,K.slideshowSpeed)}).bind(i,function(){clearTimeout(a)}).one(c+" "+k,e),r.removeClass(b+"off").addClass(b+"on"),a=setTimeout(W.next,K.slideshowSpeed)},e=function(){clearTimeout(a),F.text(K.slideshowStart).unbind([j,i,k,c].join(" ")).one(c,function(){W.next(),d()}),r.removeClass(b+"on").addClass(b+"off")},K.slideshowAuto?d():e()):r.removeClass(b+"off "+b+"on")}function be(b){U||(P=b,bb(),y=a(P),Q=0,K.rel!=="nofollow"&&(y=a("."+g).filter(function(){var b=a.data(this,e).rel||this.rel;return b===K.rel}),Q=y.index(P),Q===-1&&(y=y.add(P),Q=y.length-1)),S||(S=T=!0,r.show(),K.returnFocus&&a(P).blur().one(l,function(){a(this).focus()}),q.css({opacity:+K.opacity,cursor:K.overlayClose?"pointer":"auto"}).show(),K.w=_(K.initialWidth,"x"),K.h=_(K.initialHeight,"y"),W.position(),o&&z.bind("resize."+p+" scroll."+p,function(){q.css({width:z.width(),height:z.height(),top:z.scrollTop(),left:z.scrollLeft()})}).trigger("resize."+p),bc(h,K.onOpen),J.add(D).hide(),I.html(K.close).show()),W.load(!0))}function bf(){!r&&b.body&&(Y=!1,z=a(c),r=Z(X).attr({id:e,"class":n?f+(o?"IE6":"IE"):""}).hide(),q=Z(X,"Overlay",o?"position:absolute":"").hide(),s=Z(X,"Wrapper"),t=Z(X,"Content").append(A=Z(X,"LoadedContent","width:0; height:0; overflow:hidden"),C=Z(X,"LoadingOverlay").add(Z(X,"LoadingGraphic")),D=Z(X,"Title"),E=Z(X,"Current"),G=Z(X,"Next"),H=Z(X,"Previous"),F=Z(X,"Slideshow").bind(h,bd),I=Z(X,"Close")),s.append(Z(X).append(Z(X,"TopLeft"),u=Z(X,"TopCenter"),Z(X,"TopRight")),Z(X,!1,"clear:left").append(v=Z(X,"MiddleLeft"),t,w=Z(X,"MiddleRight")),Z(X,!1,"clear:left").append(Z(X,"BottomLeft"),x=Z(X,"BottomCenter"),Z(X,"BottomRight"))).find("div div").css({"float":"left"}),B=Z(X,!1,"position:absolute; width:9999px; visibility:hidden; display:none"),J=G.add(H).add(E).add(F),a(b.body).append(q,r.append(s,B)))}function bg(){return r?(Y||(Y=!0,L=u.height()+x.height()+t.outerHeight(!0)-t.height(),M=v.width()+w.width()+t.outerWidth(!0)-t.width(),N=A.outerHeight(!0),O=A.outerWidth(!0),r.css({"padding-bottom":L,"padding-right":M}),G.click(function(){W.next()}),H.click(function(){W.prev()}),I.click(function(){W.close()}),q.click(function(){K.overlayClose&&W.close()}),a(b).bind("keydown."+f,function(a){var b=a.keyCode;S&&K.escKey&&b===27&&(a.preventDefault(),W.close()),S&&K.arrowKey&&y[1]&&(b===37?(a.preventDefault(),H.click()):b===39&&(a.preventDefault(),G.click()))}),a("."+g,b).live("click",function(a){a.which>1||a.shiftKey||a.altKey||a.metaKey||(a.preventDefault(),be(this))})),!0):!1}var d={transition:"elastic",speed:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,inline:!1,html:!1,iframe:!1,fastIframe:!0,photo:!1,href:!1,title:!1,rel:!1,opacity:.9,preloading:!0,current:"image {current} of {total}",previous:"previous",next:"next",close:"close",open:!1,returnFocus:!0,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:undefined},e="colorbox",f="cbox",g=f+"Element",h=f+"_open",i=f+"_load",j=f+"_complete",k=f+"_cleanup",l=f+"_closed",m=f+"_purge",n=!a.support.opacity&&!a.support.style,o=n&&!c.XMLHttpRequest,p=f+"_IE6",q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X="div",Y;if(a.colorbox)return;a(bf),W=a.fn[e]=a[e]=function(b,c){var f=this;b=b||{},bf();if(bg()){if(!f[0]){if(f.selector)return f;f=a("<a/>"),b.open=!0}c&&(b.onComplete=c),f.each(function(){a.data(this,e,a.extend({},a.data(this,e)||d,b))}).addClass(g),(a.isFunction(b.open)&&b.open.call(f)||b.open)&&be(f[0])}return f},W.position=function(a,b){function i(a){u[0].style.width=x[0].style.width=t[0].style.width=a.style.width,t[0].style.height=v[0].style.height=w[0].style.height=a.style.height}var c=0,d=0,e=r.offset(),g=z.scrollTop(),h=z.scrollLeft();z.unbind("resize."+f),r.css({top:-9e4,left:-9e4}),K.fixed&&!o?(e.top-=g,e.left-=h,r.css({position:"fixed"})):(c=g,d=h,r.css({position:"absolute"})),K.right!==!1?d+=Math.max(z.width()-K.w-O-M-_(K.right,"x"),0):K.left!==!1?d+=_(K.left,"x"):d+=Math.round(Math.max(z.width()-K.w-O-M,0)/2),K.bottom!==!1?c+=Math.max(z.height()-K.h-N-L-_(K.bottom,"y"),0):K.top!==!1?c+=_(K.top,"y"):c+=Math.round(Math.max(z.height()-K.h-N-L,0)/2),r.css({top:e.top,left:e.left}),a=r.width()===K.w+O&&r.height()===K.h+N?0:a||0,s[0].style.width=s[0].style.height="9999px",r.dequeue().animate({width:K.w+O,height:K.h+N,top:c,left:d},{duration:a,complete:function(){i(this),T=!1,s[0].style.width=K.w+O+M+"px",s[0].style.height=K.h+N+L+"px",K.reposition&&setTimeout(function(){z.bind("resize."+f,W.position)},1),b&&b()},step:function(){i(this)}})},W.resize=function(a){S&&(a=a||{},a.width&&(K.w=_(a.width,"x")-O-M),a.innerWidth&&(K.w=_(a.innerWidth,"x")),A.css({width:K.w}),a.height&&(K.h=_(a.height,"y")-N-L),a.innerHeight&&(K.h=_(a.innerHeight,"y")),!a.innerHeight&&!a.height&&(A.css({height:"auto"}),K.h=A.height()),A.css({height:K.h}),W.position(K.transition==="none"?0:K.speed))},W.prep=function(b){function g(){return K.w=K.w||A.width(),K.w=K.mw&&K.mw<K.w?K.mw:K.w,K.w}function h(){return K.h=K.h||A.height(),K.h=K.mh&&K.mh<K.h?K.mh:K.h,K.h}if(!S)return;var c,d=K.transition==="none"?0:K.speed;A.remove(),A=Z(X,"LoadedContent").append(b),A.hide().appendTo(B.show()).css({width:g(),overflow:K.scrolling?"auto":"hidden"}).css({height:h()}).prependTo(t),B.hide(),a(R).css({"float":"none"}),o&&a("select").not(r.find("select")).filter(function(){return this.style.visibility!=="hidden"}).css({visibility:"hidden"}).one(k,function(){this.style.visibility="inherit"}),c=function(){function q(){n&&r[0].style.removeAttribute("filter")}var b,c,g=y.length,h,i="frameBorder",k="allowTransparency",l,o,p;if(!S)return;l=function(){clearTimeout(V),C.hide(),bc(j,K.onComplete)},n&&R&&A.fadeIn(100),D.html(K.title).add(A).show();if(g>1){typeof K.current=="string"&&E.html(K.current.replace("{current}",Q+1).replace("{total}",g)).show(),G[K.loop||Q<g-1?"show":"hide"]().html(K.next),H[K.loop||Q?"show":"hide"]().html(K.previous),K.slideshow&&F.show();if(K.preloading){b=[$(-1),$(1)];while(c=y[b.pop()])o=a.data(c,e).href||c.href,a.isFunction(o)&&(o=o.call(c)),ba(o)&&(p=new Image,p.src=o)}}else J.hide();K.iframe?(h=Z("iframe")[0],i in h&&(h[i]=0),k in h&&(h[k]="true"),h.name=f+ +(new Date),K.fastIframe?l():a(h).one("load",l),h.src=K.href,K.scrolling||(h.scrolling="no"),a(h).addClass(f+"Iframe").appendTo(A).one(m,function(){h.src="//about:blank"})):l(),K.transition==="fade"?r.fadeTo(d,1,q):q()},K.transition==="fade"?r.fadeTo(d,0,function(){W.position(0,c)}):W.position(d,c)},W.load=function(b){var c,d,e=W.prep;T=!0,R=!1,P=y[Q],b||bb(),bc(m),bc(i,K.onLoad),K.h=K.height?_(K.height,"y")-N-L:K.innerHeight&&_(K.innerHeight,"y"),K.w=K.width?_(K.width,"x")-O-M:K.innerWidth&&_(K.innerWidth,"x"),K.mw=K.w,K.mh=K.h,K.maxWidth&&(K.mw=_(K.maxWidth,"x")-O-M,K.mw=K.w&&K.w<K.mw?K.w:K.mw),K.maxHeight&&(K.mh=_(K.maxHeight,"y")-N-L,K.mh=K.h&&K.h<K.mh?K.h:K.mh),c=K.href,V=setTimeout(function(){C.show()},100),K.inline?(Z(X).hide().insertBefore(a(c)[0]).one(m,function(){a(this).replaceWith(A.children())}),e(a(c))):K.iframe?e(" "):K.html?e(K.html):ba(c)?(a(R=new Image).addClass(f+"Photo").error(function(){K.title=!1,e(Z(X,"Error").text("This image could not be loaded"))}).load(function(){var a;R.onload=null,K.scalePhotos&&(d=function(){R.height-=R.height*a,R.width-=R.width*a},K.mw&&R.width>K.mw&&(a=(R.width-K.mw)/R.width,d()),K.mh&&R.height>K.mh&&(a=(R.height-K.mh)/R.height,d())),K.h&&(R.style.marginTop=Math.max(K.h-R.height,0)/2+"px"),y[1]&&(K.loop||y[Q+1])&&(R.style.cursor="pointer",R.onclick=function(){W.next()}),n&&(R.style.msInterpolationMode="bicubic"),setTimeout(function(){e(R)},1)}),setTimeout(function(){R.src=c},1)):c&&B.load(c,K.data,function(b,c,d){e(c==="error"?Z(X,"Error").text("Request unsuccessful: "+d.statusText):a(this).contents())})},W.next=function(){!T&&y[1]&&(K.loop||y[Q+1])&&(Q=$(1),W.load())},W.prev=function(){!T&&y[1]&&(K.loop||Q)&&(Q=$(-1),W.load())},W.close=function(){S&&!U&&(U=!0,S=!1,bc(k,K.onCleanup),z.unbind("."+f+" ."+p),q.fadeTo(200,0),r.stop().fadeTo(300,0,function(){r.add(q).css({opacity:1,cursor:"auto"}).hide(),bc(m),A.remove(),setTimeout(function(){U=!1,bc(l,K.onClosed)},1)}))},W.remove=function(){a([]).add(r).add(q).remove(),r=null,a("."+g).removeData(e).removeClass(g).die()},W.element=function(){return a(P)},W.settings=d})(jQuery,document,this);
/**
 * jQuery Scrolling Parallax v0.1
 * http://jonraasch.com/blog/scrolling-parallax-jquery-plugin
 *
 * Copyright (c) 2009 Jon Raasch (http://jonraasch.com/)
 * Licensed under the FreeBSD License (See terms below)
 *
 * @author Jon Raasch
 *
 * @projectDescription    jQuery plugin to create a parallax effect when the page is scrolled.
 * 
 * @version 0.1.0
 * 
 * @requires jquery.js (v 1.3.2 minimum)
 *
 *
 * TERMS OF USE - jQuery Scrolling Parallax
 * Open source under the FreeBSD License.
 *
 * Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
 *
 *    1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
 *    2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY JON RAASCH ``AS IS'' AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JON RAASCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * The views and conclusions contained in the software and documentation are those of the authors and should not be interpreted as representing official policies, either expressed or implied, of Jon Raasch, who is the man.
 * 
 *
 * FOR USAGE INSTRUCTIONS SEE THE DOCUMENATION AT: http://dev.jonraasch.com/scrolling-parallax/documentation
 * 
 *
 */


( function( $ ) {
    
    $.scrollingParallax = function ( box, options )
    {
        var options = options || {};
        
        // vertical options
        
        options.enableVertical = typeof( options.enableVertical ) != 'undefined' ? options.enableVertical : true;
        
        if ( options.enableVertical ) {
            options.staticSpeed = options.staticSpeed || false;
            options.staticScrollLimit = typeof(options.staticScrollLimit) != 'undefined' ? options.staticScrollLimit : true;
            
            options.loopIt = options.loopIt || false;
            
            options.reverseDirection = options.reverseDirection || false;
        }
        
        // horizontal options
        
        options.enableHorizontal = options.enableHorizontal || false;
        
        if ( options.enableHorizontal ) {
            options.staticSpeedX = options.staticSpeedX || false;
            options.staticScrollLimitX = typeof(options.staticScrollLimitX) != 'undefined' ? options.staticScrollLimitX : true;
            
            options.loopItX = options.loopItX || false;
            
            options.reverseDirectionX = options.reverseDirectionX || false;
        }
        
        // IE6 options
        
        options.disableIE6 = options.disableIE6 || false; // disables in IE6 altogether
        options.disableIE6Anim = typeof(options.disableIE6Anim) != 'undefined' ? options.disableIE6Anim : true; // disables IE6 animation, however background will still append
        
        // layout options
        
        options.bgWidth = options.bgWidth || (options.enableHorizontal ? '150%' : '100%' );
        options.bgHeight = options.bgHeight || '150%';
        
        options.bgRepeat = options.bgRepeat || false;
        
        options.appendInFront = options.appendInFront || false;
        
        options.parallaxHeight = options.parallaxHeight || false;
        options.parallaxWidth = options.parallaxWidth || false;
        
                
        var isIE6 = $.browser.msie && $.browser.version < 7 ? true : false;
        
        if ( options.disableIE6 && isIE6 ) return false;
        
        var $document = $(document);
        var $window   = $(window);
        var $box;

        var backgroundMode = false;

        if ( options.enableVertical ) {
            var boxHeight;
            var windowHeight;
            var docHeight;
            var parallaxRoom;
            var maxIE6Move = 0;
            var loopCount = 0;
            var startingPos = 0;
            var tooSmallMode = false;
            var oldMoveIt = null;
        }
        
        if ( options.enableHorizontal ) {
            var boxWidth;
            var windowWidth;
            var docWidth;
            var parallaxRoomX;
            var maxIE6MoveX = 0;
            var loopCountX = 0;
            var startingPosX = 0;
            var tooSmallModeX = false;
            var oldMoveItX = null;
        }
        
        init( box );
        
        
        
        // init( obj/string box )   :  sets up the parallax and associated events
        
        function init( box ) {
            // if string append image as background, otherwise define as jQuery object
            if ( typeof( box ) == 'string' ) $box = appendBackground( box );
            else {
                $box = $( box );
                
                $box.css('position', isIE6 ? 'absolute' : 'fixed');
                
                if ( options.enableVertical ) startingPos = parseInt( $box.css('top') );
                
                if ( options.enableHorizontal ) startingPosX = parseInt( $box.css('left') );
            }
            
            if ( options.disableIE6Anim && isIE6 ) return false;
            
            defineSizes();
            
            // if in background mode, and reverseDirection, then attch the background to the opposite end to maximize scrolling room
            if ( backgroundMode ) {
                if ( options.reverseDirection && options.enableVertical ) {
                    startingPos += -1 * parallaxRoom;
                    $box.css('top', startingPos);
                }
                
                if ( options.reverseDirectionX && options.enableHorizontal ) {
                    startingPosX += -1 * parallaxRoomX;
                    $box.css('left', startingPosX);
                }
            }
            
            // attach scroll and resize events
            
            $window.scroll( function() {
                ani();
            });
            
            $window.resize( function() {
                defineSizes();
            });
        }
        
        
        
        
        // appendBackground( string theSrc )  :   appends an image to the page as a stretched background
        
        function appendBackground( theSrc ) {
            var bgCss = {
                display:   'block',
                top:       0,
                left:      0,
                width:     options.bgWidth,
                height:    options.bgHeight,
                zIndex:    0
            };
            
            bgCss.position = isIE6 ? 'absolute' : 'fixed';
            
            if ( options.bgRepeat ) {
                var $obj = options.appendInFront ? $('<div></div>').appendTo( $('body') ) : $('<div></div>').prependTo( $('body') );
                bgCss.backgroundRepeat = 'repeat';
                bgCss.backgroundImage  = 'url("' + theSrc + '")';
            }
            else {
                var $obj = options.appendInFront ? $('<img />').appendTo( $('body') ) : $('<img />').prependTo( $('body') );
                $obj.attr('src', theSrc);
            }
            
            
            $obj.css( bgCss );
            
            backgroundMode = true;
            
            return $obj;
        }
        
        
        
        
        // defineSizes()  :  sets up various constants used by the app - must be set on page load and on screen resize
        
        function defineSizes() {
        
            // define vertical vars
            
            if ( options.enableVertical ) {
                boxHeight = $box.height();
                windowHeight = $window.height();
                docHeight = $document.height();
                
                parallaxRoom = ( options.parallaxHeight || boxHeight ) - windowHeight;
                
                // if parallax object is smaller than window size
                if ( parallaxRoom < 0 ) {
                    if ( options.staticSpeed ) parallaxRoom = windowHeight -  boxHeight;
                    else parallaxRoom = options.reverseDirection ? windowHeight - startingPos - boxHeight : startingPos;
                    
                    tooSmallMode = true;
                }
                
                if ( isIE6 && !maxIE6Move ) maxIE6Move =  -1 * ( docHeight - boxHeight );
                
                if ( options.loopIt ) loopCount = parseInt( $document.scrollTop() / ( tooSmallMode ? windowHeight : boxHeight ) );
            }
            
            // define horizontal vars

            if ( options.enableHorizontal ) {
                boxWidth = $box.width();
                windowWidth = $window.width();
                docWidth = $document.width();
                
                parallaxRoomX = ( options.parallaxWidth || boxWidth ) - windowWidth;
            
                // if parallax object is smaller than window size
                if ( parallaxRoomX < 0 ) {
                    parallaxRoomX = options.staticSpeedX ? windowWidth - boxWidth : options.reverseDirectionX ? windowWidth - startingPosX - boxWidth : startingPosX;
                    
                    tooSmallModeX = true;
                }
                
                if ( isIE6 && !maxIE6MoveX ) maxIE6MoveX =  -1 * ( docWidth - boxWidth );
                
                if ( options.loopItX ) loopCountX = parseInt( $document.scrollLeft() / ( tooSmallModeX ? windowWidth : boxWidth ) );
            }
            
            // make any changes
            ani();
        }
        
        
        
        // ani()  :  performs the animation of the object
        
        function ani() {
            
            // dont let multiple animations queue up
            $box.queue( [ ] );
            
            var theCss = {};
            
            
            // vertical
            if ( options.enableVertical ) {
            
                var moveIt = calculateMove(true);
                
                theCss.top = moveIt;
            }

            
            // horizontal
            if ( options.enableHorizontal ) {
                
                var moveItX = calculateMove(false);
                
                theCss.left = moveItX;
            }
            
            // if large move animate in FF, safari and opera for smoother transition
            if ( !$.browser.msie && ( Math.abs( oldMoveIt - moveIt ) > 100 || Math.abs( oldMoveItX - moveItX ) > 100 ) ) $box.animate(theCss, 30);
            else $box.css(theCss);
            
            oldMoveIt = moveIt;
            oldMoveItX = moveItX;

        }
        
        
        
        // calculateMove( boolean vertical ) : determines amount to move whether vertically or horizontally
        
        function calculateMove( vertical ) {
            // establish variables, this is basically a switch between vertical and horizontal modes
            if ( vertical ) {
                var offset =  $document.scrollTop();
                var docSize = docHeight;
                var windowSize = windowHeight;
                var boxSize = boxHeight;
                
                var parallaxRoom2 = parallaxRoom;
                
                var loopCount2 = loopCount;
                var startingPos2 = startingPos;
                var parallaxRoom2 = parallaxRoom;
                var tooSmallMode2 = tooSmallMode;
                var maxIE6Move2 = maxIE6Move;
                
                var opts = {
                    reverseDirection : options.reverseDirection,
                    staticSpeed : options.staticSpeed,
                    loopIt : options.loopIt,
                    staticScrollLimit : options.staticScrollLimit
                }
            }
            else {
                var offset = $document.scrollLeft();
                var docSize = docWidth;
                var windowSize = windowWidth;
                var boxSize = boxWidth;
                
                var loopCount2 = loopCountX;
                var startingPos2 = startingPosX;
                var parallaxRoom2 = parallaxRoomX;
                var tooSmallMode2 = tooSmallModeX;
                var maxIE6Move2 = maxIE6MoveX;
                
                var opts = {
                    reverseDirection : options.reverseDirectionX,
                    staticSpeed : options.staticSpeedX,
                    loopIt : options.loopItX,
                    staticScrollLimit : options.staticScrollLimitX
                }
            }
            
            /*** get move amount - static speed ***/
            
            if ( opts.staticSpeed ) {
                var move = offset * opts.staticSpeed;

                // account for number of loops
                move -= parallaxRoom2 * ( loopCount2 );
            }
            
            /*** get move amount - auto speed ***/
            
            else {
                // determine percentage of page that has been scrolled down
                var offsetPercent = offset / ( docSize - windowSize );
                
                /*
                var moveIt = ( $.browser.msie && $.browser.version < 7 ) 
                    ? -1 * ( offsetParent * parallaxRoom + offsetTop )
                    : -1 * offsetPercent * parallaxRoom;
                */
                
                var move = offsetPercent * parallaxRoom2;
            }
            
            // reverse direction
            if ( !opts.reverseDirection ) move *= -1;
            
            // incorporate starting position
            move += startingPos2;
            
            // if static speed set, make sure move is within bounds
            if ( opts.staticSpeed ) move = checkMove( move, vertical, opts, parallaxRoom2, tooSmallMode2 );
            
            
            // if in tooSmallMode and looping, add difference of window height and box height, since the box needs to be conceptualized as that much taller ( otherwise it would loop in place rather than over the screen )
            if ( tooSmallMode2 && opts.staticSpeed && opts.loopIt ) move += windowSize - boxSize;
            
            if ( isIE6 ) {
                // IE6 fix for fixed positioning
                move += offset;
                move = Math.max( parseInt(move), parseInt(maxIE6Move2) );
            }
            
            return move;
        }
        
        
        
        // checkMove( int moveIt )  :  checks to ensure that move amount does not exceed established bounds
        
        function checkMove( move, vertical, opts, parallaxRoom, tooSmallMode ) {

            // if overflow limited
            if ( !opts.loopIt ) {
                if ( opts.staticScrollLimit ){
                    if ( tooSmallMode ) {
                        if ( move < 0 ) move = 0;
                        if ( move > parallaxRoom ) move = parallaxRoom;
                    }
                    else {
                        if ( move > 0 ) move = 0;
                        if ( -1 * move > parallaxRoom ) move = -1 * parallaxRoom;
                    }
                }
            }
            
            // if overflow loops
            else {
                while ( move < parallaxRoom ) {
                    move += parallaxRoom;
                    
                    var loopCountChange = opts.reverseDirection ? -1 : 1;
                    
                    if ( vertical ) loopCount += loopCountChange;
                    else loopCountX += loopCountChange;
                }
                
                while ( move > ( opts.reverseDirection ? -1 : 0 ) ) {
                    move -= parallaxRoom;
                    
                    var loopCountChange = opts.reverseDirection ? -1 : 1;
                    
                    if ( vertical ) loopCount -= loopCountChange;
                    else loopCountX -= loopCountChange;
                }
            }
            
            return move;
        }
    };
    
    $.fn.scrollingParallax = function ( options )
    {
        
        this.each( function() 
            {
                new $.scrollingParallax( this, options );
            }
        );
        
        return this;
    };
})( jQuery );
/**
 * SlideDeck 1.3.2 Lite - 2011-11-17
 * Copyright (c) 2011 digital-telepathy (http://www.dtelepathy.com)
 * 
 * Support the developers by purchasing the Pro version at http://www.slidedeck.com/download
 * 
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
 * 
 * More information on this project:
 * http://www.slidedeck.com/
 * 
 * Requires: jQuery v1.3+
 * 
 * Full Usage Documentation: http://www.slidedeck.com/usage-documentation 
 * Usage:
 *     $(el).slidedeck(opts);
 * 
 * @param {HTMLObject} el    The <DL> element to extend as a SlideDeck
 * @param {Object} opts      An object to pass custom override options to
 */

var SlideDeck;var SlideDeckSkin={};(function($){window.SlideDeck=function(u,v){var w=this,u=$(u);var x="1.3.2";this.options={speed:500,transition:'swing',start:1,activeCorner:true,index:true,scroll:true,keys:true,autoPlay:false,autoPlayInterval:5000,hideSpines:false,cycle:false,slideTransition:'slide'};this.classes={slide:'slide',spine:'spine',label:'label',index:'index',active:'active',indicator:'indicator',activeCorner:'activeCorner',disabled:'disabled',vertical:'slidesVertical',previous:'previous',next:'next'};this.current=1;this.deck=u;this.former=-1;this.spines=u.children('dt');this.slides=u.children('dd');this.controlTo=1;this.session=[];this.disabledSlides=[];this.pauseAutoPlay=false;this.isLoaded=false;var y=navigator.userAgent.toLowerCase();this.browser={chrome:y.match(/chrome/)?true:false,firefox:y.match(/firefox/)?true:false,firefox2:y.match(/firefox\/2/)?true:false,firefox30:y.match(/firefox\/3\.0/)?true:false,msie:y.match(/msie/)?true:false,msie6:(y.match(/msie 6/)&&!y.match(/msie 7|8/))?true:false,msie7:y.match(/msie 7/)?true:false,msie8:y.match(/msie 8/)?true:false,msie9:y.match(/msie 9/)?true:false,chromeFrame:(y.match(/msie/)&&y.match(/chrome/))?true:false,opera:y.match(/opera/)?true:false,safari:(y.match(/safari/)&&!y.match(/chrome/))?true:false};for(var b in this.browser){if(this.browser[b]===true){this.browser._this=b}}if(this.browser.chrome===true&&!this.browser.chromeFrame){this.browser.version=y.match(/chrome\/([0-9\.]+)/)[1]}if(this.browser.firefox===true){this.browser.version=y.match(/firefox\/([0-9\.]+)/)[1]}if(this.browser.msie===true){this.browser.version=y.match(/msie ([0-9\.]+)/)[1]}if(this.browser.opera===true){this.browser.version=y.match(/version\/([0-9\.]+)/)[1]}if(this.browser.safari===true){this.browser.version=y.match(/version\/([0-9\.]+)/)[1]}var A;var B;var C,spine_outer_width,slide_width,spine_half_width;this.looping=false;var D="";switch(w.browser._this){case"firefox":case"firefox3":D="-moz-";break;case"chrome":case"safari":D="-webkit-";break;case"opera":D="-o-";break}var E=function(a){if(w.browser.msie&&!w.browser.msie9){var b=a.css('background-color');var c=b;if(c=="transparent"){b="#ffffff"}else{if(c.match('#')){if(c.length<7){var t="#"+c.substr(1,1)+c.substr(1,1)+c.substr(2,1)+c.substr(2,1)+c.substr(3,1)+c.substr(3,1);b=t}}}b=b.replace("#","");var d={r:b.substr(0,2),g:b.substr(2,2),b:b.substr(4,2)};var e="#";var f="01234567890ABCDEF";for(var k in d){d[k]=Math.max(0,(parseInt(d[k],16)-1));d[k]=f.charAt((d[k]-d[k]%16)/16)+f.charAt(d[k]%16);e+=d[k]}a.find('.'+w.classes.index).css({'filter':'progid:DXImageTransform.Microsoft.BasicImage(rotation=1) chroma(color='+e+')',backgroundColor:e})}};var F={id:"SlideDeck_Bug"+(Math.round(Math.random()*100000000)),styles:"position:absolute !important;height:"+13+"px !important;width:"+130+"px !important;display:block !important;margin:0 !important;overflow:hidden !important;visibility:visible !important;opacity:1 !important;padding:0 !important;z-index:20000 !important",width:130,height:13};var G=function(){if(!document.getElementById(F.id)){var a=document.createElement('A');a.id=F.id;a.href="http://www.slidedeck.com/ref?utm_source=LiteUser&utm_medium=Link&utm_campaign=SDbug";a.target="_blank";var b=document.createElement('IMG');b.src=(document.location.protocol=="https:"?"https:":"http:")+"//www.slidedeck.com/6885858486f31043e5839c735d99457f045affd0/"+x+"/lite";b.alt="Powered by SlideDeck&trade;";b.width=F.width;b.height=F.height;b.border="0";a.appendChild(b);F.top=(u.offset().top+u.height()+5);F.left=u.offset().left+u.width()-F.width;var s=document.createElement('STYLE');s.type="text/css";var c='#'+F.id+'{top:'+F.top+'px;left:'+F.left+'px;'+F.styles+'}'+'#'+F.id+' img{top:0 !important;left:0 !important;'+F.styles+'}';if(s.styleSheet){s.styleSheet.cssText=c}else{s.appendChild(document.createTextNode(c))}$('head').append(s);if(Math.random()<0.5){$(document.body).prepend(a)}else{$(document.body).append(a)}$(window).resize(function(){G()})}F.top=(u.offset().top+u.height()+5);F.left=u.offset().left+u.width()-F.width;$('#'+F.id).css({top:F.top+"px",left:F.left+"px"})};var H=function(){gotoNext=function(){if(w.pauseAutoPlay===false){if(w.options.cycle===false&&w.current==w.slides.length){w.pauseAutoPlay=true}else{w.next()}}};setInterval(gotoNext,w.options.autoPlayInterval)};var I=function(a,i){var b={display:'block'};b[D+'transform-origin']="50% 50%";b[D+'transform']="";if(i<w.current){var c=i*spine_outer_width;if(w.options.hideSpines===true){if(i==w.current-1){c=0}else{c=0-(w.options.start-i-1)*u.width()}}}else{var c=i*spine_outer_width+slide_width;if(w.options.hideSpines===true){c=(i+1-w.options.start)*u.width()}}switch(a){case"slide":default:b.left=c;b.zIndex=1;break}w.slides.eq(i).css(D+'transition',"").css(b);return c};var J=function(){if($.inArray(u.css('position'),['position','absolute','fixed'])){u.css('position','relative')}u.css('overflow','hidden');for(var i=0;i<w.slides.length;i++){var e=$(w.slides[i]);if(w.spines.length>i){var f=$(w.spines[i])}var g={top:parseInt(e.css('padding-top'),10),right:parseInt(e.css('padding-right'),10),bottom:parseInt(e.css('padding-bottom'),10),left:parseInt(e.css('padding-left'),10)};var h={top:parseInt(e.css('border-top-width'),10),right:parseInt(e.css('border-right-width'),10),bottom:parseInt(e.css('border-bottom-width'),10),left:parseInt(e.css('border-left-width'),10)};for(var k in h){h[k]=isNaN(h[k])?0:h[k]}if(i<w.current){if(i==w.current-1){if(w.options.hideSpines!==true){f.addClass(w.classes.active)}e.addClass(w.classes.active)}}w.slide_width=(slide_width-g.left-g.right-h.left-h.right);var j={position:'absolute',zIndex:1,height:(B-g.top-g.bottom-h.top-h.bottom)+"px",width:w.slide_width+"px",margin:0,paddingLeft:g.left+spine_outer_width+"px"};var l=I(w.options.slideTransition,i);e.css(j).addClass(w.classes.slide).addClass(w.classes.slide+"_"+(i+1));if(w.options.hideSpines!==true){var m={top:parseInt(f.css('padding-top'),10),right:parseInt(f.css('padding-right'),10),bottom:parseInt(f.css('padding-bottom'),10),left:parseInt(f.css('padding-left'),10)};for(var k in m){if(m[k]<10&&(k=="left"||k=="right")){m[k]=10}}var n=m.top+"px "+m.right+"px "+m.bottom+"px "+m.left+"px";var o={position:'absolute',zIndex:3,display:'block',left:l,width:(B-m.left-m.right)+"px",height:C+"px",padding:n,rotation:'270deg','-webkit-transform':'rotate(270deg)','-webkit-transform-origin':spine_half_width+'px 0px','-moz-transform':'rotate(270deg)','-moz-transform-origin':spine_half_width+'px 0px','-o-transform':'rotate(270deg)','-o-transform-origin':spine_half_width+'px 0px',textAlign:'right'};if(!w.browser.msie9){o.top=(w.browser.msie)?0:(B-spine_half_width)+"px";o.marginLeft=((w.browser.msie)?0:(0-spine_half_width))+"px";o.filter='progid:DXImageTransform.Microsoft.BasicImage(rotation=3)'}f.css(o).addClass(w.classes.spine).addClass(w.classes.spine+"_"+(i+1));if(w.browser.msie9){f[0].style.msTransform='rotate(270deg)';f[0].style.msTransformOrigin=Math.round(parseInt(u[0].style.height,10)/2)+'px '+Math.round(parseInt(u[0].style.height,10)/2)+'px'}}else{if(typeof(f)!="undefined"){f.hide()}}if(i==w.slides.length-1){e.addClass('last');if(w.options.hideSpines!==true){f.addClass('last')}}if(w.options.activeCorner===true&&w.options.hideSpines===false){var p=document.createElement('DIV');p.className=w.classes.activeCorner+' '+(w.classes.spine+'_'+(i+1));f.after(p);f.next('.'+w.classes.activeCorner).css({position:'absolute',top:'25px',left:l+spine_outer_width+"px",overflow:"hidden",zIndex:"20000"}).hide();if(f.hasClass(w.classes.active)){f.next('.'+w.classes.activeCorner).show()}}if(w.options.hideSpines!==true){var q=document.createElement('DIV');q.className=w.classes.index;if(w.options.index!==false){var r;if(typeof(w.options.index)!='boolean'){r=w.options.index[i%w.options.index.length]}else{r=""+(i+1)}q.appendChild(document.createTextNode(r))}f.append(q);f.find('.'+w.classes.index).css({position:'absolute',zIndex:2,display:'block',width:C+"px",height:C+"px",textAlign:'center',bottom:((w.browser.msie)?0:(0-spine_half_width))+"px",left:((w.browser.msie)?5:20)+"px",rotation:"90deg",'-webkit-transform':'rotate(90deg)','-webkit-transform-origin':spine_half_width+'px 0px','-moz-transform':'rotate(90deg)','-moz-transform-origin':spine_half_width+'px 0px','-o-transform':'rotate(90deg)','-o-transform-origin':spine_half_width+'px 0px'});if(w.browser.msie9){f.find('.'+w.classes.index)[0].style.msTransform='rotate(90deg)'}E(f)}}G();if(w.options.hideSpines!==true){w.spines.bind('click',function(a){a.preventDefault();w.goTo(w.spines.index(this)+1)})}if(w.options.keys!==false){$(document).bind('keydown',function(a){if($(a.target).parents().index(w.deck)==-1){if(a.keyCode==39){w.pauseAutoPlay=true;w.next()}else if(a.keyCode==37){w.pauseAutoPlay=true;w.prev()}}})}if(typeof($.event.special.mousewheel)!="undefined"){u.bind("mousewheel",function(a,b){if(w.options.scroll!==false){var c=a.detail?a.detail:a.wheelDelta;if(typeof(c)=='undefined'){c=0-b}if(w.browser.msie||w.browser.safari||w.browser.chrome){c=0-c}var d=false;if($(a.originalTarget).parents(w.deck).length){if($.inArray(a.originalTarget.nodeName.toLowerCase(),['input','select','option','textarea'])!=-1){d=true}}if(d!==true){if(c>0){switch(w.options.scroll){case"stop":a.preventDefault();break;case true:default:if(w.current<w.slides.length||w.options.cycle==true){a.preventDefault()}break}w.pauseAutoPlay=true;w.next()}else{switch(w.options.scroll){case"stop":a.preventDefault();break;case true:default:if(w.current!=1||w.options.cycle==true){a.preventDefault()}break}w.pauseAutoPlay=true;w.prev()}}}})}$(w.spines[w.current-2]).addClass(w.classes.previous);$(w.spines[w.current]).addClass(w.classes.next);if(w.options.autoPlay===true){H()}w.isLoaded=true};var K=function(a){a=Math.min(w.slides.length,Math.max(1,a));return a};var L=function(a){var b=[];if(typeof(w.options.complete)=="function"){b.push(function(){w.options.complete(w)})}switch(typeof(a)){case"function":b.push(function(){a(w)});break;case"object":b.push(function(){a.complete(w)});break}var c=function(){w.looping=false;for(var z=0;z<b.length;z++){b[z]()}};return c};var M={slide:function(a,b,c){for(var i=0;i<w.slides.length;i++){var d=0;if(w.options.hideSpines!==true){var e=$(w.spines[i])}var f=$(w.slides[i]);if(i<w.current){if(i==(w.current-1)){f.addClass(w.classes.active);if(w.options.hideSpines!==true){e.addClass(w.classes.active);e.next('.'+w.classes.activeCorner).show()}}d=i*spine_outer_width}else{d=i*spine_outer_width+slide_width}if(w.options.hideSpines===true){d=(i-w.current+1)*u.width()}var g={duration:w.options.speed,easing:w.options.transition};if(i==(c===true&&w.current-1)||i==(c===false&&w.current)){if(i===0){g.complete=L(b)}}f.stop().animate({left:d+"px",width:w.slide_width+"px"},g);if(w.options.hideSpines!==true){E(e);if(e.css('left')!=d+"px"){e.stop().animate({left:d+"px"},{duration:w.options.speed,easing:w.options.transition});e.next('.'+w.classes.activeCorner).stop().animate({left:d+spine_outer_width+"px"},{duration:w.options.speed,easing:w.options.transition})}}}}};var N=function(a,b){a=K(a);if((a<=w.controlTo||w.options.controlProgress!==true)&&w.looping===false){var c=true;if(a<w.current){c=false}var d=[w.classes.active,w.classes.next,w.classes.previous].join(' ');w.former=w.current;w.current=a;if(typeof(w.options.before)=="function"){w.options.before(w)}if(typeof(b)!="undefined"){if(typeof(b.before)=="function"){b.before(w)}}if(w.current!=w.former){w.spines.removeClass(d);w.slides.removeClass(d);u.find('.'+w.classes.activeCorner).hide();w.spines.eq(w.current-2).addClass(w.classes.previous);w.spines.eq(w.current).addClass(w.classes.next);var e='slide';if(typeof(M[w.options.slideTransition])!='undefined'){e=w.options.slideTransition}M[e](a,b,c)}G()}};var O=function(a,b){var c=a;if(typeof(a)==="string"){c={};c[a]=b}for(var d in c){b=c[d];switch(d){case"speed":case"start":b=parseFloat(b);if(isNaN(b)){b=w.options[d]}break;case"scroll":case"keys":case"activeCorner":case"hideSpines":case"autoPlay":case"cycle":if(typeof(b)!=="boolean"){b=w.options[d]}break;case"transition":if(typeof(b)!=="string"){b=w.options[d]}break;case"complete":case"before":if(typeof(b)!=="function"){b=w.options[d]}break;case"index":if(typeof(b)!=="boolean"){if(!$.isArray(b)){b=w.options[d]}}break}w.options[d]=b}};var P=function(){B=u.height();A=u.width();u.css('height',B+"px");C=0;spine_outer_width=0;if(w.options.hideSpines!==true&&w.spines.length>0){C=$(w.spines[0]).height();spine_outer_width=$(w.spines[0]).outerHeight()}slide_width=A-spine_outer_width*w.spines.length;if(w.options.hideSpines===true){slide_width=A}spine_half_width=Math.ceil(C/2)};var Q=function(a){if((w.browser.opera&&w.browser.version<"10.5")||w.browser.msie6||w.browser.firefox2||w.browser.firefox30){if(typeof(console)!="undefined"){if(typeof(console.error)=="function"){console.error("This web browser is not supported by SlideDeck. Please view this page in a modern, CSS3 capable browser or a current version of Inernet Explorer")}}return false}if(typeof(a)!="undefined"){for(var b in a){w.options[b]=a[b]}}if(w.spines.length<1){w.options.hideSpines=true}if(w.options.hideSpines===true){w.options.activeCorner=false}w.options.slideTransition='slide';w.current=Math.min(w.slides.length,Math.max(1,w.options.start));if(u.height()>0){P();J()}else{var c;c=setTimeout(function(){P();if(u.height()>0){clearInterval(c);P();J()}},20)}};var R=function(a){var b;b=setInterval(function(){if(w.isLoaded===true){clearInterval(b);a(w)}},20)};this.loaded=function(a){R(a);return w};this.next=function(a){var b=Math.min(w.slides.length,(w.current+1));if(w.options.cycle===true){if(w.current+1>w.slides.length){b=1}}N(b,a);return w};this.prev=function(a){var b=Math.max(1,(w.current-1));if(w.options.cycle===true){if(w.current-1<1){b=w.slides.length}}N(b,a);return w};this.goTo=function(a,b){w.pauseAutoPlay=true;N(Math.min(w.slides.length,Math.max(1,a)),b);return w};this.setOption=function(a,b){O(a,b);return w};this.vertical=function(){return false};Q(v)};$.fn.slidedeck=function(a){var b=[];for(var i=0;i<this.length;i++){if(!this[i].slidedeck){this[i].slidedeck=new SlideDeck(this[i],a)}b.push(this[i].slidedeck)}return b.length>1?b:b[0]}})(jQuery);
/*!
 * jQuery Cycle Lite Plugin
 * http://malsup.com/jquery/cycle/lite/
 * Copyright (c) 2008-2012 M. Alsup
 * Version: 1.6 (02-MAY-2012)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * Requires: jQuery v1.3.2 or later
 */
;(function($) {
"use strict";

var ver = 'Lite-1.6';

$.fn.cycle = function(options) {
    return this.each(function() {
        options = options || {};
        
        if (this.cycleTimeout) clearTimeout(this.cycleTimeout);

        this.cycleTimeout = 0;
        this.cyclePause = 0;
        
        var $cont = $(this);
        var $slides = options.slideExpr ? $(options.slideExpr, this) : $cont.children();
        var els = $slides.get();
        if (els.length < 2) {
            if (window.console)
                console.log('terminating; too few slides: ' + els.length);
            return; // don't bother
        }

        // support metadata plugin (v1.0 and v2.0)
        var opts = $.extend({}, $.fn.cycle.defaults, options || {}, $.metadata ? $cont.metadata() : $.meta ? $cont.data() : {});
        var meta = $.isFunction($cont.data) ? $cont.data(opts.metaAttr) : null;
        if (meta)
            opts = $.extend(opts, meta);
            
        opts.before = opts.before ? [opts.before] : [];
        opts.after = opts.after ? [opts.after] : [];
        opts.after.unshift(function(){ opts.busy=0; });
            
        // allow shorthand overrides of width, height and timeout
        var cls = this.className;
        opts.width = parseInt((cls.match(/w:(\d+)/)||[])[1], 10) || opts.width;
        opts.height = parseInt((cls.match(/h:(\d+)/)||[])[1], 10) || opts.height;
        opts.timeout = parseInt((cls.match(/t:(\d+)/)||[])[1], 10) || opts.timeout;

        if ($cont.css('position') == 'static') 
            $cont.css('position', 'relative');
        if (opts.width) 
            $cont.width(opts.width);
        if (opts.height && opts.height != 'auto') 
            $cont.height(opts.height);

        var first = 0;
        $slides.css({position: 'absolute', top:0}).each(function(i) {
            $(this).css('z-index', els.length-i);
        });
        
        $(els[first]).css('opacity',1).show(); // opacity bit needed to handle reinit case
        if ($.browser.msie) els[first].style.removeAttribute('filter');

        if (opts.fit && opts.width) 
            $slides.width(opts.width);
        if (opts.fit && opts.height && opts.height != 'auto') 
            $slides.height(opts.height);
        if (opts.pause) 
            $cont.hover(function(){this.cyclePause=1;}, function(){this.cyclePause=0;});

        var txFn = $.fn.cycle.transitions[opts.fx];
        if (txFn)
            txFn($cont, $slides, opts);
        
        $slides.each(function() {
            var $el = $(this);
            this.cycleH = (opts.fit && opts.height) ? opts.height : $el.height();
            this.cycleW = (opts.fit && opts.width) ? opts.width : $el.width();
        });

        if (opts.cssFirst)
            $($slides[first]).css(opts.cssFirst);

        if (opts.timeout) {
            // ensure that timeout and speed settings are sane
            if (opts.speed.constructor == String)
                opts.speed = {slow: 600, fast: 200}[opts.speed] || 400;
            if (!opts.sync)
                opts.speed = opts.speed / 2;
            while((opts.timeout - opts.speed) < 250)
                opts.timeout += opts.speed;
        }
        opts.speedIn = opts.speed;
        opts.speedOut = opts.speed;

        opts.slideCount = els.length;
        opts.currSlide = first;
        opts.nextSlide = 1;

        // fire artificial events
        var e0 = $slides[first];
        if (opts.before.length)
            opts.before[0].apply(e0, [e0, e0, opts, true]);
        if (opts.after.length > 1)
            opts.after[1].apply(e0, [e0, e0, opts, true]);
        
        if (opts.click && !opts.next)
            opts.next = opts.click;
        if (opts.next)
            $(opts.next).unbind('click.cycle').bind('click.cycle', function(){return advance(els,opts,opts.rev?-1:1);});
        if (opts.prev)
            $(opts.prev).unbind('click.cycle').bind('click.cycle', function(){return advance(els,opts,opts.rev?1:-1);});

        if (opts.timeout)
            this.cycleTimeout = setTimeout(function() {
                go(els,opts,0,!opts.rev);
            }, opts.timeout + (opts.delay||0));
    });
};

function go(els, opts, manual, fwd) {
    if (opts.busy) 
        return;
    var p = els[0].parentNode, curr = els[opts.currSlide], next = els[opts.nextSlide];
    if (p.cycleTimeout === 0 && !manual) 
        return;

    if (manual || !p.cyclePause) {
        if (opts.before.length)
            $.each(opts.before, function(i,o) { o.apply(next, [curr, next, opts, fwd]); });
        var after = function() {
            if ($.browser.msie)
                this.style.removeAttribute('filter');
            $.each(opts.after, function(i,o) { o.apply(next, [curr, next, opts, fwd]); });
            queueNext(opts);
        };

        if (opts.nextSlide != opts.currSlide) {
            opts.busy = 1;
            $.fn.cycle.custom(curr, next, opts, after);
        }
        var roll = (opts.nextSlide + 1) == els.length;
        opts.nextSlide = roll ? 0 : opts.nextSlide+1;
        opts.currSlide = roll ? els.length-1 : opts.nextSlide-1;
    } else {
      queueNext(opts);
    }

    function queueNext(opts) {
        if (opts.timeout)
            p.cycleTimeout = setTimeout(function() { go(els,opts,0,!opts.rev); }, opts.timeout);
    }
}

// advance slide forward or back
function advance(els, opts, val) {
    var p = els[0].parentNode, timeout = p.cycleTimeout;
    if (timeout) {
        clearTimeout(timeout);
        p.cycleTimeout = 0;
    }
    opts.nextSlide = opts.currSlide + val;
    if (opts.nextSlide < 0) {
        opts.nextSlide = els.length - 1;
    }
    else if (opts.nextSlide >= els.length) {
        opts.nextSlide = 0;
    }
    go(els, opts, 1, val>=0);
    return false;
}

$.fn.cycle.custom = function(curr, next, opts, cb) {
    var $l = $(curr), $n = $(next);
    $n.css(opts.cssBefore);
    var fn = function() {$n.animate(opts.animIn, opts.speedIn, opts.easeIn, cb);};
    $l.animate(opts.animOut, opts.speedOut, opts.easeOut, function() {
        $l.css(opts.cssAfter);
        if (!opts.sync)
            fn();
    });
    if (opts.sync)
        fn();
};

$.fn.cycle.transitions = {
    fade: function($cont, $slides, opts) {
        $slides.not(':eq(0)').hide();
        opts.cssBefore = { opacity: 0, display: 'block' };
        opts.cssAfter  = { display: 'none' };
        opts.animOut = { opacity: 0 };
        opts.animIn = { opacity: 1 };
    },
    fadeout: function($cont, $slides, opts) {
        opts.before.push(function(curr,next,opts,fwd) {
            $(curr).css('zIndex',opts.slideCount + (fwd === true ? 1 : 0));
            $(next).css('zIndex',opts.slideCount + (fwd === true ? 0 : 1));
        });
        $slides.not(':eq(0)').hide();
        opts.cssBefore = { opacity: 1, display: 'block', zIndex: 1 };
        opts.cssAfter  = { display: 'none', zIndex: 0 };
        opts.animOut = { opacity: 0 };
        opts.animIn = { opacity: 1 };
    }
};

$.fn.cycle.ver = function() { return ver; };

// @see: http://malsup.com/jquery/cycle/lite/
$.fn.cycle.defaults = {
    animIn:        {},
    animOut:       {},
    fx:           'fade',
    after:         null,
    before:        null,
    cssBefore:     {},
    cssAfter:      {},
    delay:         0,
    fit:           0,
    height:       'auto',
    metaAttr:     'cycle',
    next:          null,
    pause:         false,
    prev:          null,
    speed:         1000,
    slideExpr:     null,
    sync:          true,
    timeout:       4000
};

})(jQuery);