// @name         Reset to Master
// @namespace    https://github.com/
// @version      0.1
// @description  Change main to master on new github repo pages for easier copy/paste. Because some people are actually required to use 'master' branches for compailibility and compliance reasons.
// @author       samsheff
// @match        https://github.com/*/
// @icon         https://github.com/favicon.ico
// @grant        none
// ==/UserScript==

 (function() {
     'use strict';

     document.querySelectorAll("span.user-select-contain").forEach(function (e) {
         e.innerText = e.innerText.replace(" main", " master");
     });
 })();
