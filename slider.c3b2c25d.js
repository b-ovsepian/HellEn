parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"wzuc":[function(require,module,exports) {
"use strict";var t=function(t,r){var s=document.querySelector(t),e=s.querySelector(".slider__wrapper"),o=s.querySelectorAll(".slider__item"),l=s.querySelectorAll(".slider__control"),i=s.querySelector(".slider__control_left"),n=s.querySelector(".slider__control_right"),c=parseFloat(getComputedStyle(e).width),_=parseFloat(getComputedStyle(o[0]).width),a=0,d=0,f=_/c*100,u=[];o.forEach(function(t,r){u.push({item:t,position:r,transform:0})});var h=0,g=u.length-1,w=function(t){if("right"===t){if(a+c/_-1>=g)return;i.classList.contains("slider__control_show")||i.classList.add("slider__control_show"),n.classList.contains("slider__control_show")&&a+c/_>=g&&n.classList.remove("slider__control_show"),a++,d-=f}if("left"===t){if(a<=h)return;n.classList.contains("slider__control_show")||n.classList.add("slider__control_show"),i.classList.contains("slider__control_show")&&a-1<=h&&i.classList.remove("slider__control_show"),a--,d+=f}e.style.transform="translateX("+d+"%)"},L=function(t){if(t.target.classList.contains("slider__control")){t.preventDefault();var r=t.target.classList.contains("slider__control_right")?"right":"left";w(r)}};return l.forEach(function(t){t.addEventListener("click",L)}),{right:function(){w("right")},left:function(){w("left")}}},r=t(".slider");
},{}]},{},["wzuc"], null)
//# sourceMappingURL=/slider.c3b2c25d.js.map