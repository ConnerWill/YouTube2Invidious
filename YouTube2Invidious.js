// ==UserScript==
// @name        YouTube2Invidious
// @author      ConnerWill
// @version     1.0.4
// @description Always Redirect YouTube to an Invidious instance due to the fact that YouTube_is_CANCER and full of spyware.
// @license     GPL-3.0-or-later; http://www.gnu.org/licenses/gpl-3.0.txt
// @namespace   https://github.com/ConnerWill/YouTube2Invidious
// @homepage    https://github.com/ConnerWill/YouTube2Invidious
// @homepageURL https://github.com/ConnerWill/YouTube2Invidious
// @downloadURL https://raw.githubusercontent.com/ConnerWill/YouTube2Invidious/main/YouTube2Invidious.js
// @updateURL   https://raw.githubusercontent.com/ConnerWill/YouTube2Invidious/main/YouTube2Invidious.js
// @supportURL  https://github.com/ConnerWill/YouTube2Invidious/issues
// @icon        https://invidious.io/invidious-colored-vector.svg
// @grant       none
// @run-at      document-start
// @include     *://www.youtube.com/*
// @include     *://*.youtube.com/*
// ==/UserScript==
window.location.replace("https://dampsock.com" + window.location.pathname + window.location.search);




