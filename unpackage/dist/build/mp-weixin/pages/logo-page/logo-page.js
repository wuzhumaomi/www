(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/logo-page/logo-page"],{"42c6":function(n,t,e){"use strict";var u;e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return f})),e.d(t,"a",(function(){return u}));var o=function(){var n=this,t=n.$createElement;n._self._c},f=[]},"8b7f":function(n,t,e){"use strict";e.r(t);var u=e("42c6"),o=e("dd0f");for(var f in o)"default"!==f&&function(n){e.d(t,n,(function(){return o[n]}))}(f);e("e46d");var r,c=e("f0c5"),a=Object(c["a"])(o["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],r);t["default"]=a.exports},b66f:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{userInfo:{}}},created:function(){},mounted:function(){this.getUserInfo(),wx.getUserInfo({lang:"zh_CN",success:function(n){}})},methods:{wxGetUserInfo:function(n){this.userInfo=n.detail.userInfo,this.getUserInfo()},getUserInfo:function(){var t=this;n.getUserInfo({provider:"weixin",lang:"zh_CN",success:function(n){n.userInfo?t.userInfo=n.userInfo:console.log("用户尚未登录")}})},switchTab:function(){n.switchTab({url:"/pages/main-page/main-page"})}}};t.default=e}).call(this,e("543d")["default"])},baa8:function(n,t,e){"use strict";(function(n){e("74fb");u(e("66fd"));var t=u(e("8b7f"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},c77b:function(n,t,e){},dd0f:function(n,t,e){"use strict";e.r(t);var u=e("b66f"),o=e.n(u);for(var f in u)"default"!==f&&function(n){e.d(t,n,(function(){return u[n]}))}(f);t["default"]=o.a},e46d:function(n,t,e){"use strict";var u=e("c77b"),o=e.n(u);o.a}},[["baa8","common/runtime","common/vendor"]]]);