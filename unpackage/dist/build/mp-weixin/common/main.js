(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"2fa2":function(t,e,n){"use strict";n.r(e);var o=n("b858"),r=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=r.a},6503:function(t,e,n){"use strict";n.r(e);var o=n("2fa2");for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);n("b56d");var a,u,l,i,c=n("f0c5"),f=Object(c["a"])(o["default"],a,u,!1,null,null,null,!1,l,i);e["default"]=f.exports},8040:function(t,e,n){"use strict";(function(t){n("74fb");var e=l(n("66fd")),o=l(n("6503")),r=l(n("8367")),a=l(n("38ca")),u=l(n("d1f7"));function l(t){return t&&t.__esModule?t:{default:t}}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){f(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}e.default.config.productionTip=!1,e.default.use(r.default),o.default.mpType="app",e.default.prototype.$store=a.default,e.default.prototype.$db=u.default;var d=new e.default(c(c({},o.default),{},{store:a.default,db:u.default}));t(d).$mount()}).call(this,n("543d")["createApp"])},"8ff3":function(t,e,n){},b56d:function(t,e,n){"use strict";var o=n("8ff3"),r=n.n(o);r.a},b858:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(n("d1f7"));function r(t){return t&&t.__esModule?t:{default:t}}function a(t,e){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=u(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var o=0,r=function(){};return{s:r,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,l=!0,i=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return l=t.done,t},e:function(t){i=!0,a=t},f:function(){try{l||null==n.return||n.return()}finally{if(i)throw a}}}}function u(t,e){if(t){if("string"===typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(t,e):void 0}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}var i={onLaunch:function(){console.log("App Launch")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")},methods:{history:function(t){var e=this;o.default.request.todayOnhistory(t).then((function(n){if(console.log("历史上的今天",null===n||void 0===n?void 0:n.data),null===n||void 0===n?void 0:n.data){var o,r=a(n.data);try{for(r.s();!(o=r.n()).done;){var u=o.value;console.log(u.date,u.title)}}catch(l){r.e(l)}finally{r.f()}}else setTimeout((function(){e.history(t)}),1e3)})).catch((function(t){console.log(t)}))},dream:function(t){var e=this;o.default.request.dreamQuery(t).then((function(n){if(console.log("周公解梦 --- ",null===n||void 0===n?void 0:n.data),null===n||void 0===n?void 0:n.data){var o,r=a(n.data);try{for(r.s();!(o=r.n()).done;){var u=o.value;console.log(u.title,u.des)}}catch(l){r.e(l)}finally{r.f()}}else setTimeout((function(){e.dream(t)}),1e3)})).catch((function(t){console.log(t)}))},laohuangli:function(t){var e=this;o.default.request.laohuangliD(t).then((function(n){if(console.log("老黄历",null===n||void 0===n?void 0:n.data),null===n||void 0===n?void 0:n.data){var o,r=a(n.data);try{for(r.s();!(o=r.n()).done;){var u=o.value;console.log("老黄历 --- ",u)}}catch(l){r.e(l)}finally{r.f()}}else setTimeout((function(){e.dream(t)}),1e3)})).catch((function(t){console.log(t)}))},jokeRandJoke:function(t){var e=this;o.default.request.jokeRandJoke(t).then((function(n){if(console.log("笑话",null===n||void 0===n?void 0:n.data),null===n||void 0===n?void 0:n.data){var o,r=a(n.data);try{for(r.s();!(o=r.n()).done;){var u=o.value;console.log("笑话本地 --- ",u.title)}}catch(l){r.e(l)}finally{r.f()}}else setTimeout((function(){e.dream(t)}),1e3)})).catch((function(t){console.log(t)}))}}};e.default=i}},[["8040","common/runtime","common/vendor"]]]);