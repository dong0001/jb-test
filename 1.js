// ==UserScript==
// @name         Hello World Script
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  A simple script to change the webpage title to "Hello, World!"
// @author       You
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.title = 'Hello, World!';
})();