!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(t){return t&&t.__esModule?t.default:t}var e={},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(t){return t&&t.constructor===Symbol?"symbol":typeof t};var i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,c="object"==typeof t&&t&&t.Object===Object&&t,l="object"==typeof self&&self&&self.Object===Object&&self,s=c||l||Function("return this")(),d=Object.prototype.toString,v=Math.max,p=Math.min,y=function(){return s.Date.now()};function m(t){var e=void 0===t?"undefined":n(o)(t);return!!t&&("object"==e||"function"==e)}function b(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":n(o)(t))||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(m(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=m(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var c=u.test(t);return c||f.test(t)?a(t.slice(2),c?2:8):r.test(t)?NaN:+t}e=function(t,n,e){var o,i,r,u,f,a,c=0,l=!1,s=!1,d=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(n){var e=o,r=i;return o=i=void 0,c=n,u=t.apply(r,e)}function h(t){return c=t,f=setTimeout(T,n),l?g(t):u}function j(t){var e=t-a;return void 0===a||e>=n||e<0||s&&t-c>=r}function T(){var t=y();if(j(t))return w(t);f=setTimeout(T,function(t){var e=n-(t-a);return s?p(e,r-(t-c)):e}(t))}function w(t){return f=void 0,d&&o?g(t):(o=i=void 0,u)}function O(){var t=y(),e=j(t);if(o=arguments,i=this,a=t,e){if(void 0===f)return h(a);if(s)return f=setTimeout(T,n),g(a)}return void 0===f&&(f=setTimeout(T,n)),u}return n=b(n)||0,m(e)&&(l=!!e.leading,r=(s="maxWait"in e)?v(b(e.maxWait)||0,n):r,d="trailing"in e?!!e.trailing:d),O.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=a=i=f=void 0},O.flush=function(){return void 0===f?u:w(y())},O};var g=document.querySelector("#search-box"),h=document.querySelector(".country-list");g.addEventListener("input",e((function(t){var n,e=t.target.value.trim();(n=e,fetch("https://restcountries.com/v3.1/name/".concat(n,"?fields=name,capital,population,flags,languages")).then((function(t){return t.json()}))).then((function(t){return function(t){console.log(t);var n=t.map((function(t){return'<li><img src="'.concat(t.flags.png,'" alt="flags" width="35"><span class="country-span">').concat(t.name.official,"</span></li>")}));h.innerHTML=n,console.log(n)}(t)}))}),300))}();
//# sourceMappingURL=index.93868223.js.map
