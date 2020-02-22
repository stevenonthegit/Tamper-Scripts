// ==UserScript==
// @name         Search Engine Ad Remover
// @namespace    none
// @version      0.1
// @description  Hides those obtrusive 'new' search results from a certain search engine.
// @author       StevenOnTheGit
// @match        https://www.google.com/search*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

//    document.getElementsByClassName("ads-ad")[0].remove();
    document.querySelectorAll('[aria-label="Ads"]').forEach(function(e) {
        e.style.display = 'none';
    });

})();