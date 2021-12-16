// ==UserScript==
// @name        YouTube2Invidious
// @namespace   https://github.com/ConnerWill/YouTube2Invidious
// @description Redirect YouTube to an Invidious instance.
// @author      ConnerWill
// @license     GPL-3.0-or-later; http://www.gnu.org/licenses/gpl-3.0.txt
// @homepage    https://github.com/ConnerWill/YouTube2Invidious
// @homepageURL https://github.com/ConnerWill/YouTube2Invidious
// @downloadURL https://github.com/ConnerWill/YouTube2Invidious/raw/master/YouTube2Invidious/YouTube2Invidious.js
// @updateURL   https://github.com/ConnerWill/YouTube2Invidious/raw/master/YouTube2Invidious/YouTube2Invidious.js
// @supportURL  https://github.com/ConnerWill/YouTube2Invidious/issues
// @include     *://*.youtube.com/*
// @version     1
// @grant       none
// ==/UserScript==

var a = 0;
setInterval(function () {
	if (a === 0 && window.location.href.indexOf('watch?') > -1 && window.location.href.indexOf('list=WL') < 0) {
		a = '//yewtu.be/watch?' + window.parent.location.href.split('?')[1];
		window.location.replace(a);
	}
}, 10);
