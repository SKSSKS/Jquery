/*
 * jQuery Show Password Plugin
 * http://github.com/davist11/jQuery-Show-Password
 *
 * Copyright (c) 2010 Trevor Davis (http://trevordavis.net)
 * Dual licensed under the MIT and GPL licenses.
 * Uses the same license as jQuery, see:
 * http://jquery.org/license
 *
 * @version 0.3
 */
(function(b){b.fn.showPassword=function(k){var j=b.extend({},b.fn.showPassword.defaults,k);return this.each(function(){var a=b(this),f=a.position(),d=a.outerWidth(),g=a.outerHeight(),e=a.parent(),h=e.height(),c=b.meta?b.extend({},j,a.data()):j;e.height(h);b("<a/>",{href:"#","class":c.linkClass,click:function(l){var i=e.find("."+c.showPasswordInputClass);if(a.css("display")==="none"){b(this).text(c.linkText);a.val(i.val()).show();i.hide()}else{b(this).text(c.showPasswordLinkText);i.val(a.val()).show();
    a.hide()}l.preventDefault()},css:{left:f.left+d,top:f.top+g},text:c.linkText}).appendTo(e);d=e.find("."+c.linkClass);g=d.outerWidth();h=parseInt(d.css("left"),10);var m=d.outerHeight(),n=parseInt(d.css("top"),10);d.css({left:h-g-c.linkRightOffset,top:n-m-c.linkTopOffset});b("<input/>",{"class":c.showPasswordInputClass,css:{display:"none",left:f.left,top:f.top},type:"text"}).appendTo(e);a.closest("form").bind("submit",function(){a.css("display")==="none"&&a.val(a.siblings("."+c.showPasswordInputClass).val())})})};
    b.fn.showPassword.defaults={linkClass:"show-password-link",linkText:"Show",showPasswordLinkText:"Hide",showPasswordInputClass:"password-showing",linkRightOffset:0,linkTopOffset:0}})(jQuery);
    