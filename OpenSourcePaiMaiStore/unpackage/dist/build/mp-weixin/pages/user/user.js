(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/user"],{"2c1d":function(t,n,o){"use strict";o.r(n);var e=o("7449"),r=o("c277");for(var u in r)"default"!==u&&function(t){o.d(n,t,function(){return r[t]})}(u);o("f19c");var i=o("2877"),a=Object(i["a"])(r["default"],e["a"],e["b"],!1,null,null,null);n["default"]=a.exports},"5cf5":function(t,n,o){},7449:function(t,n,o){"use strict";var e=function(){var t=this,n=t.$createElement;t._self._c},r=[];o.d(n,"a",function(){return e}),o.d(n,"b",function(){return r})},"85df":function(t,n,o){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=u(o("a34a")),r=o("2f62");function u(t){return t&&t.__esModule?t:{default:t}}function i(t,n,o,e,r,u,i){try{var a=t[u](i),c=a.value}catch(s){return void o(s)}a.done?n(c):Promise.resolve(c).then(e,r)}function a(t){return function(){var n=this,o=arguments;return new Promise(function(e,r){var u=t.apply(n,o);function a(t){i(u,e,r,a,c,"next",t)}function c(t){i(u,e,r,a,c,"throw",t)}a(void 0)})}}function c(t){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{},e=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(o).filter(function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable}))),e.forEach(function(n){s(t,n,o[n])})}return t}function s(t,n,o){return n in t?Object.defineProperty(t,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[n]=o,t}var f=function(){return o.e("components/mix-list-cell").then(o.bind(null,"543b"))},l=function(){return o.e("components/min-badge/min-badge").then(o.bind(null,"c93a"))},d=0,h=0,v=!0,p={components:{listCell:f,minBadge:l},data:function(){return{couponList:[],bonus:0,coverTransform:"translateY(0px)",coverTransition:"0s",moving:!1,footprintList:[],rurl:this.global.website+"/pages/index/index",yuYueCount:0,orderCount:0,userInfoCount:0,maxCount:99}},onShow:function(){this.checkIfLogin(),this.getInfoCount()},computed:c({},(0,r.mapState)(["hasLogin","userInfo"])),methods:c({},(0,r.mapMutations)(["login"]),{checkIfLogin:function(){var t=a(e.default.mark(function t(){var n;return e.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:n=this,n.$http({method:"POST",url:this.global.target+"/wx/auth/checkToken"}).then(function(t){console.log(t);var o=t.data;if(0==o.errno){var e=o.data;n.login(e),n.bonus=e.bonus;var r=e.ticketsList;r&&(n.couponList=r)}},function(t){}),n.getFootprint();case 3:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),navToLogin:function(){t.navigateTo({url:"/pages/public/login"})},getFootprint:function(){var t=this;t.$http({method:"GET",url:this.global.target+"/wx/footprint/list"}).then(function(n){t.footprintList=n.data.data.footprintList},function(t){})},navTo:function(n){t.navigateTo({url:n})},coverTouchstart:function(t){!1!==v&&(this.coverTransition="transform .1s linear",d=t.touches[0].clientY)},coverTouchmove:function(t){h=t.touches[0].clientY;var n=h-d;n<0?this.moving=!1:(this.moving=!0,n>=50&&n<100&&(n=50),n>0&&n<=50&&(this.coverTransform="translateY(".concat(n,"px)")))},coverTouchend:function(){!1!==this.moving&&(this.moving=!1,this.coverTransition="transform 0.3s cubic-bezier(.21,1.93,.53,.64)",this.coverTransform="translateY(0px)")},getInfoCount:function(){var t=this;t.$http({method:"GET",url:this.global.target+"/wx/user/getUserMyInfoCount"}).then(function(n){t.yuYueCount=n.data.data.yuYueCount,t.orderCount=n.data.data.orderCount,t.userInfoCount=n.data.data.userInfoCount},function(t){})},kefu:function(){location.href="http://uclient.yunque360.com/frame.html?company_id=caat1hf0jv46"}})};n.default=p}).call(this,o("543d")["default"])},c277:function(t,n,o){"use strict";o.r(n);var e=o("85df"),r=o.n(e);for(var u in e)"default"!==u&&function(t){o.d(n,t,function(){return e[t]})}(u);n["default"]=r.a},f19c:function(t,n,o){"use strict";var e=o("5cf5"),r=o.n(e);r.a}},[["e065","common/runtime","common/vendor"]]]);