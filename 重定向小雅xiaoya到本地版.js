// ==UserScript==
// @name         重定向小雅xiaoya到本地版
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  Redirect URL when it starts with specific prefix
// @author       Your name
// @match        https://alist.xiaoya.pro/*
// @license      MIT
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // 输入小雅本地地址
    const localXiaoyaHost = "http://192.168.123.8:5678";

    var newURL = window.location.href.replace(/^https:\/\/alist.xiaoya.pro/, localXiaoyaHost);

    if (newURL !== window.location.href) {
        window.location.href = newURL;
    }
})();
