(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/templateList/templateList"],{1165:function(t,e,a){"use strict";a.r(e);var n=a("3ce6"),i=a("d6e1");for(var u in i)"default"!==u&&function(t){a.d(e,t,function(){return i[t]})}(u);a("37d2");var c,d=a("f0c5"),o=Object(d["a"])(i["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],c);e["default"]=o.exports},"37d2":function(t,e,a){"use strict";var n=a("ead5"),i=a.n(n);i.a},"3ce6":function(t,e,a){"use strict";var n,i=function(){var t=this,e=t.$createElement;t._self._c},u=[];a.d(e,"b",function(){return i}),a.d(e,"c",function(){return u}),a.d(e,"a",function(){return n})},7093:function(t,e,a){"use strict";(function(t){a("31c9"),a("921b");n(a("66fd"));var e=n(a("1165"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("543d")["createPage"])},ab50:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("9247"));i(a("b44d"));function i(t){return t&&t.__esModule?t:{default:t}}var u=getApp(),c={data:function(){return{list:[],check_index:0,data:{}}},onLoad:function(t){var e=this;this.data=u.globalData.templateData,n.default.keeperCover({data:{id:t.id},success:function(t){t.list.length>0&&(e.list=t.list,e.data.f_id=t.list[0].id)},complete:function(t){e.isNoMore=!0}})},methods:{back:function(){t.navigateBack({delta:1})},clickItem:function(t){var e=t.currentTarget.dataset.index;this.check_index=e;var a=this.list[e].id;this.data.f_id=a},submit:function(){u.globalData.templateData=this.data,6==this.data.type?t.navigateTo({url:"../holidayEdit/holidayEdit"}):t.navigateTo({url:"../edit/edit"})}}};e.default=c}).call(this,a("543d")["default"])},d6e1:function(t,e,a){"use strict";a.r(e);var n=a("ab50"),i=a.n(n);for(var u in n)"default"!==u&&function(t){a.d(e,t,function(){return n[t]})}(u);e["default"]=i.a},ead5:function(t,e,a){}},[["7093","common/runtime","common/vendor"]]]);