(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/orderdetail"],{"2bfc":function(t,o,e){"use strict";var n=e("44bc"),r=e.n(n);r.a},"36ff":function(t,o,e){"use strict";var n=function(){var t=this,o=t.$createElement;t._self._c},r=[];e.d(o,"a",function(){return n}),e.d(o,"b",function(){return r})},"44bc":function(t,o,e){},"68eb":function(t,o,e){"use strict";(function(t){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var n=r(e("a34a"));function r(t){return t&&t.__esModule?t:{default:t}}function a(t,o,e,n,r,a,i){try{var s=t[a](i),c=s.value}catch(d){return void e(d)}s.done?o(c):Promise.resolve(c).then(n,r)}function i(t){return function(){var o=this,e=arguments;return new Promise(function(n,r){var i=t.apply(o,e);function s(t){a(i,n,r,s,c,"next",t)}function c(t){a(i,n,r,s,c,"throw",t)}s(void 0)})}}var s={data:function(){return{goods:{},goodslist:[],goodscount:{},contentTime:""}},created:function(){var t=this.goods.maitime-Math.round((new Date).getTime()/1e3).toString(),o=Math.floor(t/86400),e=(t-3600*o*24)/3600,n=(e>23?o+1:o)+"天"+(e>23?0:Math.ceil(e))+"分";this.contentTime=n},onLoad:function(){var t=i(n.default.mark(function t(o){var e,r;return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=o.id,r=this,r.$http({method:"GET",params:{orderId:e},url:this.global.target+"/wx/order/detail"}).then(function(t){var o=t.data.data;console.log(t);o.orderInfo.status;r.goods=o.orderInfo,console.log(r.goods);var e=Math.round(new Date(Date.parse(r.goods.addTime.replace(/-/g,"/"))).getTime()/1e3).toString(),n=Math.round((new Date).getTime()/1e3).toString()-e;console.log(n),n=Math.floor((3600-n)/60),r.contentTime=n,r.goodslist=o.orderGoods,r.goodscount=o.orderInfo2},function(t){}),t.next=5,this.$api.json("shareList");case 5:this.shareList=t.sent;case 6:case"end":return t.stop()}},t,this)}));function o(o){return t.apply(this,arguments)}return o}(),methods:{cancelOrder:function(o){var e=this;t.showModal({title:"",content:"确认取消订单吗？",success:function(n){n.confirm?e.$http({method:"POST",params:{orderId:o.id},url:e.global.target+"/wx/order/cancel"}).then(function(n){var r=n.data;if(0==r.errno){r.data;t.showLoading({title:"请稍后"}),setTimeout(function(){var n=e.orderStateExp(9),r=n.stateTip,a=n.stateTipColor;o=Object.assign(o,{state:9,stateTip:r,stateTipColor:a});var i=e.navList[1].orderList,s=i.findIndex(function(t){return t.id===o.id});-1!==s&&i.splice(s,1),t.hideLoading()},600)}else e.$api.msg(r.errmsg)},function(t){}):n.cancel}})},navToDetailPage:function(o){var e=o.id;console.log(),t.navigateTo({url:"/pages/product/product?id="+e})},orderTerminat:function(){var o=this,e=this.goods.id;t.showModal({title:"",content:"确认已经收货？",success:function(t){t.confirm?o.$http({method:"POST",params:{orderId:e},url:o.global.target+"/wx/order/confirm"}).then(function(t){console.log(t.data);t.data;o.goods.status=401,o.goods.mai="已收货"},function(t){}):t.cancel&&console.log("用户点击取消")}})},tixingfahuo:function(){this.$api.msg("已通知商家")},refund:function(){var t=this,o=this.goods.id;t.$http({method:"POST",params:{orderId:o},url:this.global.target+"/wx/order/refund"}).then(function(o){var e=o.data;if(0==e.errno)e.data.data;else t.$api.msg(e.errmsg)},function(t){})}}};o.default=s}).call(this,e("543d")["default"])},"68f7":function(t,o,e){"use strict";e.r(o);var n=e("68eb"),r=e.n(n);for(var a in n)"default"!==a&&function(t){e.d(o,t,function(){return n[t]})}(a);o["default"]=r.a},a10f:function(t,o,e){"use strict";e.r(o);var n=e("36ff"),r=e("68f7");for(var a in r)"default"!==a&&function(t){e.d(o,t,function(){return r[t]})}(a);e("2bfc");var i=e("2877"),s=Object(i["a"])(r["default"],n["a"],n["b"],!1,null,null,null);o["default"]=s.exports}},[["9e68","common/runtime","common/vendor"]]]);