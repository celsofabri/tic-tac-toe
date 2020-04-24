"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(e,a,d,p){var s=[],t={_version:"3.10.0",_config:{classPrefix:"modernizr-",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){s.push({name:e,fn:t,options:n})},addAsyncTest:function(e){s.push({name:null,fn:e})}},l=function(){};l.prototype=t,l=new l;var u=[];function m(e,t){return _typeof(e)===t}var i,n,h=d.documentElement,v="svg"===h.nodeName.toLowerCase();function c(e){var t=h.className,n=l._config.classPrefix||"";if(v&&(t=t.baseVal),l._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}l._config.enableClasses&&(0<e.length&&(t+=" "+n+e.join(" "+n)),v?h.className.baseVal=t:h.className=t)}function f(e,t){if("object"===_typeof(e))for(var n in e)i(e,n)&&f(n,e[n]);else{var r=(e=e.toLowerCase()).split("."),o=l[r[0]];if(2===r.length&&(o=o[r[1]]),void 0!==o)return l;t="function"==typeof t?t():t,1===r.length?l[r[0]]=t:(!l[r[0]]||l[r[0]]instanceof Boolean||(l[r[0]]=new Boolean(l[r[0]])),l[r[0]][r[1]]=t),c([(t&&!1!==t?"":"no-")+r.join("-")]),l._trigger(e,t)}return l}i=m(n={}.hasOwnProperty,"undefined")||m(n.call,"undefined")?function(e,t){return t in e&&m(e.constructor.prototype[t],"undefined")}:function(e,t){return n.call(e,t)},t._l={},t.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),l.hasOwnProperty(e)&&setTimeout(function(){l._trigger(e,l[e])},0)},t._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e;for(e=0;e<n.length;e++)(0,n[e])(t)},0),delete this._l[e]}},l._q.push(function(){t.addTest=f});var r="Moz O ms Webkit",g=t._config.usePrefixes?r.split(" "):[];t._cssomPrefixes=g;function o(e){var t,n=L.length,r=a.CSSRule;if(void 0===r)return p;if(!e)return!1;if((t=(e=e.replace(/^@/,"")).replace(/-/g,"_").toUpperCase()+"_RULE")in r)return"@"+e;for(var o=0;o<n;o++){var i=L[o];if(i.toUpperCase()+"_"+t in r)return"@-"+i.toLowerCase()+"-"+e}return!1}t.atRule=o;var y=t._config.usePrefixes?r.toLowerCase().split(" "):[];function A(e){return"function"!=typeof d.createElement?d.createElement(e):v?d.createElementNS.call(d,"http://www.w3.org/2000/svg",e):d.createElement.apply(d,arguments)}t._domPrefixes=y;var S,b=(S=!("onblur"in h),function(e,t){var n;return!!e&&(t&&"string"!=typeof t||(t=A(t||"div")),!(n=(e="on"+e)in t)&&S&&(t.setAttribute||(t=A("div")),t.setAttribute(e,""),n="function"==typeof t[e],t[e]!==p&&(t[e]=p),t.removeAttribute(e)),n)});t.hasEvent=b,v||function(e,a){var o,s,t=e.html5||{},i=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,l=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,n="_html5shiv",r=0,u={};function f(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function d(){var e=h.elements;return"string"==typeof e?e.split(" "):e}function p(e){var t=u[e[n]];return t||(t={},r++,e[n]=r,u[r]=t),t}function c(e,t,n){return t=t||a,s?t.createElement(e):!(r=(n=n||p(t)).cache[e]?n.cache[e].cloneNode():l.test(e)?(n.cache[e]=n.createElem(e)).cloneNode():n.createElem(e)).canHaveChildren||i.test(e)||r.tagUrn?r:n.frag.appendChild(r);var r}function m(e){var t,n,r=p(e=e||a);return!h.shivCSS||o||r.hasCSS||(r.hasCSS=!!f(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),s||(t=e,(n=r).cache||(n.cache={},n.createElem=t.createElement,n.createFrag=t.createDocumentFragment,n.frag=n.createFrag()),t.createElement=function(e){return h.shivMethods?c(e,t,n):n.createElem(e)},t.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+d().join().replace(/[\w\-:]+/g,function(e){return n.createElem(e),n.frag.createElement(e),'c("'+e+'")'})+");return n}")(h,n.frag)),e}!function(){try{var e=a.createElement("a");e.innerHTML="<xyz></xyz>",o="hidden"in e,s=1==e.childNodes.length||function(){a.createElement("a");var e=a.createDocumentFragment();return void 0===e.cloneNode||void 0===e.createDocumentFragment||void 0===e.createElement}()}catch(e){s=o=!0}}();var h={elements:t.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:"3.7.3",shivCSS:!1!==t.shivCSS,supportsUnknownElements:s,shivMethods:!1!==t.shivMethods,type:"default",shivDocument:m,createElement:c,createDocumentFragment:function(e,t){if(e=e||a,s)return e.createDocumentFragment();for(var n=(t=t||p(e)).frag.cloneNode(),r=0,o=d(),i=o.length;r<i;r++)n.createElement(o[r]);return n},addElements:function(e,t){var n=h.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),h.elements=n+" "+e,m(t)}};e.html5=h,m(a);var v,g=/^$|\b(?:all|print)\b/,y="html5shiv",A=!(s||(v=a.documentElement,void 0===a.namespaces||void 0===a.parentWindow||void 0===v.applyElement||void 0===v.removeNode||void 0===e.attachEvent));function S(e){for(var t,n=e.attributes,r=n.length,o=e.ownerDocument.createElement(y+":"+e.nodeName);r--;)(t=n[r]).specified&&o.setAttribute(t.nodeName,t.nodeValue);return o.style.cssText=e.style.cssText,o}function b(s){var l,u,e=p(s),t=s.namespaces,n=s.parentWindow;if(!A||s.printShived)return s;function c(){clearTimeout(e._removeSheetTimer),l&&l.removeNode(!0),l=null}return void 0===t[y]&&t.add(y),n.attachEvent("onbeforeprint",function(){c();for(var e,t,n,r=s.styleSheets,o=[],i=r.length,a=Array(i);i--;)a[i]=r[i];for(;n=a.pop();)if(!n.disabled&&g.test(n.media)){try{t=(e=n.imports).length}catch(e){t=0}for(i=0;i<t;i++)a.push(e[i]);try{o.push(n.cssText)}catch(e){}}o=function(e){for(var t,n=e.split("{"),r=n.length,o=RegExp("(^|[\\s,>+~])("+d().join("|")+")(?=[[\\s,>+~#.:]|$)","gi"),i="$1"+y+"\\:$2";r--;)(t=n[r]=n[r].split("}"))[t.length-1]=t[t.length-1].replace(o,i),n[r]=t.join("}");return n.join("{")}(o.reverse().join("")),u=function(e){for(var t,n=e.getElementsByTagName("*"),r=n.length,o=RegExp("^(?:"+d().join("|")+")$","i"),i=[];r--;)t=n[r],o.test(t.nodeName)&&i.push(t.applyElement(S(t)));return i}(s),l=f(s,o)}),n.attachEvent("onafterprint",function(){!function(e){for(var t=e.length;t--;)e[t].removeNode()}(u),clearTimeout(e._removeSheetTimer),e._removeSheetTimer=setTimeout(c,500)}),s.printShived=!0,s}h.type+=" print",(h.shivPrint=b)(a),"object"==("undefined"==typeof module?"undefined":_typeof(module))&&module.exports&&(module.exports=h)}(void 0!==a?a:this,d);var C=function(){},E=function(){};function w(e,t,n,r){var o,i,a,s,l,u="modernizr",c=A("div"),f=((l=d.body)||((l=A(v?"svg":"body")).fake=!0),l);if(parseInt(n,10))for(;n--;)(a=A("div")).id=r?r[n]:u+(n+1),c.appendChild(a);return(o=A("style")).type="text/css",o.id="s"+u,(f.fake?f:c).appendChild(o),f.appendChild(c),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(d.createTextNode(e)),c.id=u,f.fake&&(f.style.background="",f.style.overflow="hidden",s=h.style.overflow,h.style.overflow="hidden",h.appendChild(f)),i=t(c,e),f.fake?(f.parentNode.removeChild(f),h.style.overflow=s,h.offsetHeight):c.parentNode.removeChild(c),!!i}a.console&&(C=function(){var e=console.error?"error":"log";a.console[e].apply(a.console,Array.prototype.slice.call(arguments))},E=function(){var e=console.warn?"warn":"log";a.console[e].apply(a.console,Array.prototype.slice.call(arguments))}),t.load=function(){"yepnope"in a?(E("yepnope.js (aka Modernizr.load) is no longer included as part of Modernizr. yepnope appears to be available on the page, so we’ll use it to handle this call to Modernizr.load, but please update your code to use yepnope directly.\n See http://github.com/Modernizr/Modernizr/issues/1182 for more information."),a.yepnope.apply(a,[].slice.call(arguments,0))):C("yepnope.js (aka Modernizr.load) is no longer included as part of Modernizr. Get it from http://yepnopejs.com. See http://github.com/Modernizr/Modernizr/issues/1182 for more information.")};var _,x=(_=a.matchMedia||a.msMatchMedia)?function(e){var t=_(e);return t&&t.matches||!1}:function(e){var t=!1;return w("@media "+e+" { #modernizr { position: absolute; } }",function(e){t="absolute"===(a.getComputedStyle?a.getComputedStyle(e,null):e.currentStyle).position}),t};t.mq=x;var T={elem:A("modernizr")};l._q.push(function(){delete T.elem});var z={style:T.elem.style};function j(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function N(e,t){var n=e.length;if("CSS"in a&&"supports"in a.CSS){for(;n--;)if(a.CSS.supports(j(e[n]),t))return!0;return!1}if("CSSSupportsRule"in a){for(var r=[];n--;)r.push("("+j(e[n])+":"+t+")");return w("@supports ("+(r=r.join(" or "))+") { #modernizr { position: absolute; } }",function(e){return"absolute"===function(e,t,n){var r;if("getComputedStyle"in a){r=getComputedStyle.call(a,e,t);var o=a.console;if(null!==r)n&&(r=r.getPropertyValue(n));else if(o)o[o.error?"error":"log"].call(o,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}else r=!t&&e.currentStyle&&e.currentStyle[n];return r}(e,null,"position")})}return p}function M(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function P(e,t,n,r){if(r=!m(r,"undefined")&&r,!m(n,"undefined")){var o=N(e,n);if(!m(o,"undefined"))return o}for(var i,a,s,l,u,c=["modernizr","tspan","samp"];!z.style&&c.length;)i=!0,z.modElem=A(c.shift()),z.style=z.modElem.style;function f(){i&&(delete z.style,delete z.modElem)}for(s=e.length,a=0;a<s;a++)if(l=e[a],u=z.style[l],~(""+l).indexOf("-")&&(l=M(l)),z.style[l]!==p){if(r||m(n,"undefined"))return f(),"pfx"!==t||l;try{z.style[l]=n}catch(e){}if(z.style[l]!==u)return f(),"pfx"!==t||l}return f(),!1}function k(e,t){return function(){return e.apply(t,arguments)}}function B(e,t,n,r,o){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+g.join(i+" ")+i).split(" ");return m(t,"string")||m(t,"undefined")?P(a,t,r,o):function(e,t,n){var r;for(var o in e)if(e[o]in t)return!1===n?e[o]:m(r=t[e[o]],"function")?k(r,n||t):r;return!1}(a=(e+" "+y.join(i+" ")+i).split(" "),t,n)}l._q.unshift(function(){delete z.style}),t.testAllProps=B;var D=t.prefixed=function(e,t,n){return 0===e.indexOf("@")?o(e):(-1!==e.indexOf("-")&&(e=M(e)),t?B(e,t,n):B(e,"pfx"))},L=t._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];t._prefixes=L;t.prefixedCSS=function(e){var t=D(e);return t&&j(t)};t.testAllProps=function(e,t,n){return B(e,p,p,t,n)};t.testProp=function(e,t,n){return P([e],p,t,n)},t.testStyles=w;var F="CSS"in a&&"supports"in a.CSS,O="supportsCSS"in a;l.addTest("supports",F||O),l.addAsyncTest(function(){var e,t,n=A("img"),r="sizes"in n;!r&&"srcset"in n?(e="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",t=function(){f("sizes",2===n.width)},n.onload=t,n.onerror=t,n.setAttribute("sizes","9px"),n.srcset=e+" 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 8w",n.src=e):f("sizes",r)}),l.addTest("srcset","srcset"in A("img")),l.addTest("serviceworker","serviceWorker"in navigator),l.addTest("touchevents",function(){if("ontouchstart"in a||a.TouchEvent||a.DocumentTouch&&d instanceof DocumentTouch)return!0;var e=["(",L.join("touch-enabled),("),"heartz",")"].join("");return x(e)}),function(){var e,t,n,r,o,i;for(var a in s)if(s.hasOwnProperty(a)){if(e=[],(t=s[a]).name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=m(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)1===(i=e[o].split(".")).length?l[i[0]]=r:(l[i[0]]&&(!l[i[0]]||l[i[0]]instanceof Boolean)||(l[i[0]]=new Boolean(l[i[0]])),l[i[0]][i[1]]=r),u.push((r?"":"no-")+i.join("-"))}}(),c(u),delete t.addTest,delete t.addAsyncTest;for(var $=0;$<l._q.length;$++)l._q[$]();e.Modernizr=l}(window,window,document);