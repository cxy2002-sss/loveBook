(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/stuffItem/stuffItem"],{"3d30":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){}));var a=function(){var t=this.$createElement;this._self._c},u=[]},4379:function(t,e,n){"use strict";(function(t,e){var a=n("4ea4");n("f93a"),n("a9ff");a(n("66fd"));var u=a(n("8ae7"));t.__webpack_require_UNI_MP_PLUGIN__=n,e(u.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])},"5d30":function(t,e,n){"use strict";n.r(e);var a=n("9cb5"),u=n.n(a);for(var f in a)["default"].indexOf(f)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(f);e["default"]=u.a},6104:function(t,e,n){"use strict";var a=n("b883"),u=n.n(a);u.a},"8ae7":function(t,e,n){"use strict";n.r(e);var a=n("3d30"),u=n("5d30");for(var f in u)["default"].indexOf(f)<0&&function(t){n.d(e,t,(function(){return u[t]}))}(f);n("6104");var i=n("f0c5"),c=Object(i["a"])(u["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);e["default"]=c.exports},"9cb5":function(t,e,n){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=n("e3ad"),f={data:function(){return{stuffItem:{},stuff:[]}},onLoad:function(e){var n=this;this.stuff=JSON.parse(decodeURIComponent(e.item));var a=1*e.id,u=t.database();u.collection("Stuff").where("user_id==$cloudEnv_uid").get().then((function(t){t.result.data[0].item.forEach((function(t){t.id==a&&(n.stuffItem=t)}))}))},methods:{changeActiveTrue:function(e){var n=parseInt(e);this.stuff[n-1].active=!0,this.stuff[n-1].date=(0,u.getDate)();var f=t.database();f.collection("Stuff").where("user_id==$cloudEnv_uid").update({item:this.stuff}).then((function(t){a.navigateBack({delta:1})}))},changeActiveFalse:function(e){var n=parseInt(e);this.stuff[n-1].active=!1,this.stuff[n-1].date="";var u=t.database();u.collection("Stuff").where("user_id==$cloudEnv_uid").update({item:this.stuff}).then((function(t){a.navigateBack({delta:1})}))}}};e.default=f}).call(this,n("a9ff")["default"],n("543d")["default"])},b883:function(t,e,n){}},[["4379","common/runtime","common/vendor"]]]);