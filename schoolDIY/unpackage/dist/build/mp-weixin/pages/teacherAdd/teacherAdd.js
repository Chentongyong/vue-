(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/teacherAdd/teacherAdd"],{2031:function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=s(e("9247")),i=s(e("b44d"));function s(t){return t&&t.__esModule?t:{default:t}}var u=getApp(),d={data:function(){return{type:4,school:"",grade:"",list:[],data:{type:4,action:"",name:"教师",images:[],word:{name:"",phone:"",subjects:"",message:""},file:"",f_id:"",id:""},maxNum:4}},onLoad:function(t){var a=this;t.id?n.default.photoDetail({data:{id:t.id},success:function(t){t.action="edit",t.type=a.type,t.word=JSON.parse(t.word),t.images=[],a.data=t}}):this.data.action="add",n.default.index({success:function(t){a.school=t.school,a.grade=t.grade}}),n.default.keeperCover({data:{id:this.type},success:function(t){a.list=t.list}})},methods:{upImage:function(){var t=this,a=this.maxNum-this.data.images.length;n.default.uploadImage({num:a,success:function(a){t.data.images=t.data.images.concat(a)}})},del:function(t){var a=t.currentTarget.dataset.index;this.data.images.splice(a,1)},upTemp:function(){var a=this;if(!this.data.word.name)return i.default.msg("自己上传需要填写您的姓名"),!1;a.data.name=this.data.word.name;var e=JSON.parse(JSON.stringify(a.data));e.word=JSON.stringify(e.word),n.default.uploadImage({num:1,success:function(a){t.uploadFile({url:u.globalData.host+"common/upload",header:{"content-type":"multipart/form-data",token:u.globalData.token},filePath:a[0],name:"file",formData:e,success:function(a){var e=JSON.parse(a.data);200==e.code?i.default.success("上传成功",function(){t.redirectTo({url:"../albumList/albumList"})},1200):i.default.msg(e.msg)},fail:function(t){console.log(t)}})}})},start:function(){return this.data.word.name?this.data.word.phone?this.data.word.subjects?this.data.word.message?this.data.images.length<this.maxNum?(i.default.msg("还需要上传"+(this.maxNum-this.data.images.length)+"张图片"),!1):(this.data.name=this.data.word.name,u.globalData.templateData=this.data,void t.navigateTo({url:"../templateList/templateList?id="+this.type})):(i.default.msg("请填写毕业寄语"),!1):(i.default.msg("请填写您的任教科目"),!1):(i.default.msg("请填写您的手机号"),!1):(i.default.msg("请填写您的姓名"),!1)}},onUnload:function(){u.globalData.templateData={}}};a.default=d}).call(this,e("543d")["default"])},"24c5":function(t,a,e){},"28f9":function(t,a,e){"use strict";e.r(a);var n=e("2031"),i=e.n(n);for(var s in n)"default"!==s&&function(t){e.d(a,t,function(){return n[t]})}(s);a["default"]=i.a},"7bf5":function(t,a,e){"use strict";(function(t){e("31c9"),e("921b");n(e("66fd"));var a=n(e("e701"));function n(t){return t&&t.__esModule?t:{default:t}}t(a.default)}).call(this,e("543d")["createPage"])},"97bf":function(t,a,e){"use strict";var n,i=function(){var t=this,a=t.$createElement;t._self._c},s=[];e.d(a,"b",function(){return i}),e.d(a,"c",function(){return s}),e.d(a,"a",function(){return n})},bc64:function(t,a,e){"use strict";var n=e("24c5"),i=e.n(n);i.a},e701:function(t,a,e){"use strict";e.r(a);var n=e("97bf"),i=e("28f9");for(var s in i)"default"!==s&&function(t){e.d(a,t,function(){return i[t]})}(s);e("bc64");var u,d=e("f0c5"),o=Object(d["a"])(i["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],u);a["default"]=o.exports}},[["7bf5","common/runtime","common/vendor"]]]);