// ==UserScript==
// @name        YouTube2Invidious
// @namespace   https://github.com/ConnerWill/YouTube2Invidious
// @description Redirect YouTube to an Invidious instance.
// @author      ConnerWill
// @license     GPL-3.0-or-later; http://www.gnu.org/licenses/gpl-3.0.txt
// @homepage    https://github.com/ConnerWill/YouTube2Invidious
// @homepageURL https://github.com/ConnerWill/YouTube2Invidious
// @downloadURL https://raw.githubusercontent.com/ConnerWill/YouTube2Invidious/main/YouTube2Invidious.js
// @updateURL   https://raw.githubusercontent.com/ConnerWill/YouTube2Invidious/main/YouTube2Invidious.js
// @supportURL  https://github.com/ConnerWill/YouTube2Invidious/issues
// @include     *://*.youtube.com/*
// @version     1
// @grant       none
// ==/UserScript==

var a = 0;
var youtubeURL = 'youtube.com';
var invidiousURL = 'yewtu.be';
var invidiousURLList = 'redirect.invidious.io'

setInterval(function () {
	if (a == 0 && window.location.href.includes(youtubeURL)) {
		a = window.location.href.replace(youtubeURL,invidiousURL);
		window.location.replace(a);
	}
}, 10);





