import t,{useCallback as e,useRef as r,useState as n,useEffect as o}from"react";import{Dimensions as i}from"react-native-web";function u(t){var r=t.className,n=void 0===r?"onclick-class":r,o=t.onClick;return e((function(t){t.target&&t.target.className&&"function"==typeof t.target.className.includes&&t.target.className.includes(n)&&"function"==typeof o&&o()}),[n,o])}function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){l(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e,r){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function f(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,u,c=[],a=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;a=!1}else for(;!(a=(n=i.call(r)).done)&&(c.push(n.value),c.length!==e);a=!0);}catch(t){l=!0,o=t}finally{try{if(!a&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(l)throw o}}return c}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return d(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return d(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var v=function(){var t=r(null),e=f(n({width:0,height:0,x:0,y:0}),2),i=e[0],u=e[1];return o((function(){var e=function(){if(t.current){var e=t.current.getBoundingClientRect();u({width:e.width||0,height:e.height||0,x:e.x||0,y:e.y||0})}};return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),[i,t]};function s(){return{left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36}}function w(t){var r=t.styleName,n=void 0===r?"onClickStyle":r,o=t.onPress;return e((function(t){t.currentTarget&&t.currentTarget.style&&t.currentTarget.style.name===n&&"function"==typeof o&&o()}),[n,o])}function p(){var t=i.get("window");return t.height>=t.width?"portrait":"landscape"}function h(){var e=f(t.useState(p()),2),r=e[0],n=e[1],o=function(){var t=i.get("window"),e=t.height,r=t.width;n(e>=r?"portrait":"landscape")};return t.useEffect((function(){var t=i.addEventListener("change",o);return function(){null!=t&&t.remove&&t.remove()}}),[]),r}function m(){function t(t){t.preventDefault()}return{preventDefault:t,preventDefaultForScrollKeys:function(e){if({left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36}[e.keyCode])return t(e),!1}}}var y=function(){var t=f(n(i.get("window")),2),e=t[0],r=t[1];return o((function(){var t=i.addEventListener("change",(function(t){r((function(e){return a(a({},e),{},{width:t.window.width,height:t.window.height})}))}));return function(){return t.remove()}}),[]),e};function g(){var t=m(),e=t.preventDefault,r=t.preventDefaultForScrollKeys;return{disableScroll:function(){window.addEventListener&&(window.addEventListener("DOMMouseScroll",e,!1),document.addEventListener("wheel",e,{passive:!1}),window.onwheel=e,window.ontouchmove=e,document.onkeydown=r)},enableScroll:function(){window.removeEventListener&&(window.removeEventListener("DOMMouseScroll",e,!1),document.removeEventListener("wheel",e),window.onwheel=null,window.ontouchmove=null,document.onkeydown=null)}}}var b=function(){var t=f(n({width:0,height:0,x:0,y:0}),2),r=t[0],o=t[1];return[r,e((function(t){var e=t.nativeEvent.layout;o(e)}),[])]},O=function(t){var u=r(null),c=f(n(!1),2),a=c[0],l=c[1],d=f(n({rectTop:0,rectBottom:0,rectWidth:0}),2),v=d[0],s=d[1],w=e((function(){var t=setInterval((function(){u.current&&u.current.measure((function(t,e,r,n,o,i){var u={rectTop:i,rectBottom:i+n,rectWidth:o+r};s((function(t){return t.rectTop!==u.rectTop||t.rectBottom!==u.rectBottom||t.rectWidth!==u.rectWidth?u:t}))}))}),1e3);return function(){return clearInterval(t)}}),[]);return o((function(){var t=w();return function(){return t()}}),[w]),o((function(){var e=i.get("window"),r=0!==v.rectBottom&&v.rectTop>=0&&v.rectBottom<=e.height&&v.rectWidth>0&&v.rectWidth<=e.width;a!==r&&(l(r),t(r))}),[v,a,t]),u};export{p as getOrientation,v as useElementSize,s as useKeyCodes,u as useOnClickByClassName,w as useOnPressByStyle,h as useOrientation,m as usePreventDefault,y as useScreenDimensions,g as useScrollControl,b as useViewSize,O as useVisibilitySensor};
//# sourceMappingURL=index.js.map
