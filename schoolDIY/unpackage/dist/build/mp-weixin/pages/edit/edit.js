(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/edit/edit"],{1153:function(t,e,i){"use strict";var o=i("2c6c"),h=i.n(o);h.a},"224b":function(t,e,i){"use strict";var o,h=function(){var t=this,e=t.$createElement;t._self._c},a=[];i.d(e,"b",function(){return h}),i.d(e,"c",function(){return a}),i.d(e,"a",function(){return o})},"2c6c":function(t,e,i){},"5fb0":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(i("9247")),h=a(i("b44d"));function a(t){return t&&t.__esModule?t:{default:t}}var s="",r="",n="",c="",u="",d="",l="",m=getApp(),f={data:function(){return{userInfo:{},id:"",type:"",temp:{},scale:0,isShowOperation:!1,cover:{width:0,height:0},data:{},wordTouch:!1}},onLoad:function(e){var i=this,h=t.getSystemInfoSync(),a=h.screenWidth,s=m.globalData.templateData;console.log(s),this.data=s;var r=[];s.word.name&&r.push("姓名："+s.word.name),s.word.birthday&&r.push("生日："+s.word.birthday),s.word.qq&&r.push("QQ："+s.word.qq),s.word.father_phone&&r.push("父母电话："+s.word.father_phone+"/"+s.word.mother_phone),s.word.address&&r.push("我家的地址："+s.word.address),s.word.hobby&&r.push("我的爱好："+s.word.hobby),s.word.motto&&r.push("人生座右铭："+s.word.motto),s.word.to_me&&r.push("写给十年后的自己："+s.word.to_me),s.word.to_classmate&&r.push("同学我想对你说："+s.word.to_classmate),s.word.phone&&r.push("电话："+s.word.phone),s.word.subjects&&r.push("任教科目："+s.word.subjects),s.word.message&&r.push("毕业寄语："+s.word.message),s.word.txt&&r.push(s.word.txt),o.default.templateDetail({data:{cate_id:s.f_id},success:function(e){if(!e.photo||0==e.photo.length)return!1;var o=e.photo[0].template;o.word=r;var h=parseInt(o.width)/a;i.scale=h,o.width=o.width/h,o.height=o.height/h,o.box&&o.box.length>0&&o.box.forEach(function(t,e){t.w=t.w/h,t.h=t.h/h,t.x=t.x/h,t.y=t.y/h,t.img={url:"",rotate_url:"",w:t.w,h:t.h,x:0,y:0,isfixed:"w",rotate:0}}),r.length>0&&(o.txt={width:.6*o.width,size:e.size/h,color:e.color,x:0,y:0}),t.getImageInfo({src:o.url,success:function(t){o.url=t.path,i.$set(i,"temp",o),s.images.forEach(function(t,e){i.getImageData(t,e)})}})}}),o.default.userInfo({success:function(t){i.userInfo=t}})},methods:{rotateImage:function(e){var i=this,o=parseInt(this.temp.box[s].img.rotate)||0;0==e?o-=90:o+=90,o%360==0&&(o=0);var h=this.temp.box[s],a=h.img.height,r=h.img.width,n=0,c=0,u=0,d=0,l=h.w/h.h,m="";a/r<=l?(n=h.w,c=n*r/a,d=-(c-h.h)/2,m="w"):(c=h.h,n=c*a/r,u=-(n-h.w)/2,m="y");var f=this.temp.box[s].img.url,g=(360+o)%360,w=n,p=c,x=t.createCanvasContext("myCanvas");x.clearRect(0,0,n,c),x.translate(w/2,p/2),x.rotate(g*Math.PI/180),90!=g&&270!=g||(w=c,p=n),x.drawImage(f,-w/2,-p/2,w,p),x.draw(),setTimeout(function(){t.canvasToTempFilePath({x:0,y:0,width:n,height:c,destWidth:n,destHeight:c,canvasId:"myCanvas",success:function(t){i.temp.box[s].img={url:f,rotate_url:t.tempFilePath,width:n,height:c,x:u,y:d,isfixed:m,rotate:o},i.isShowOperation=!1}})},400)},getImageData:function(e,i){var o=this,h=o.temp.box[i];t.getImageInfo({src:e,success:function(t){var a=0,s=0,r=0,n=0,c=h.w/h.h,u="";t.width/t.height<=c?(a=h.w,s=a*t.height/t.width,n=-(s-h.h)/2,u="w"):(s=h.h,a=s*t.width/t.height,r=-(a-h.w)/2,u="y"),h.img={url:e,rotate_url:e,width:a,height:s,x:r,y:n,isfixed:u,rotate:0},o.$set(o.temp.box,i,h)}})},clickImage:function(e){var i=this,h=e.currentTarget.dataset.idx;this.temp.box[h].img.url?this.isShowOperation=!this.isShowOperation:o.default.uploadImage({num:1,success:function(e){var o=e[0],a=i.temp.box[h];t.getImageInfo({src:o,success:function(t){var e=0,s=0,r=0,n=0,c=a.w/a.h,u="";t.width/t.height<=c?(e=a.w,s=e*t.height/t.width,n=-(s-a.h)/2,u="w"):(s=a.h,e=s*t.width/t.height,r=-(e-a.w)/2,u="y"),a.img={url:o,rotate_url:o,width:e,height:s,x:r,y:n,isfixed:u,rotate:0},i.$set(i.temp.box,h,a),i.isShowOperation=!1}})}})},changeImage:function(){var e=this;o.default.uploadImage({num:1,success:function(i){var o=i[0],h=e.temp.box[s];t.getImageInfo({src:o,success:function(t){var i=0,a=0,r=0,n=0,c=h.w/h.h,u="";t.width/t.height<=c?(i=h.w,a=i*t.height/t.width,n=-(a-h.h)/2,u="w"):(a=h.h,i=a*t.width/t.height,r=-(i-h.w)/2,u="y"),h.img={url:o,rotate_url:o,width:i,height:a,x:r,y:n,isfixed:u,rotate:0},e.$set(e.temp.box,s,h),e.isShowOperation=!1}})}})},touchS:function(t){1==t.touches.length&&(s=t.currentTarget.dataset.idx,c=t.touches[0].clientX,u=t.touches[0].clientY,r=this.temp.box[s].img.x,n=this.temp.box[s].img.y)},touchM:function(t){if(1==t.touches.length){var e=t.touches[0].clientX,i=t.touches[0].clientY,o=e-c,h=i-u,a=this.temp.box[s];if("w"==a.img.isfixed){var d=n+h;d>0?d=0:d<-a.img.height+a.h&&(d=-a.img.height+a.h),a.img.y=d,this.$set(this.temp.box,s,a)}else if("y"==this.temp.box[s].img.isfixed){var l=r+o;l>0?l=0:l<-a.img.width+a.w&&(l=-a.img.width+a.w),a.img.x=l,this.$set(this.temp.box,s,a)}}},TxtTouchS:function(t){1==t.touches.length?(c=t.touches[0].clientX,u=t.touches[0].clientY,r=this.temp.txt.x,n=this.temp.txt.y,this.wordTouch=!0):2==t.touches.length&&(l=Math.abs(t.touches[0].clientX-t.touches[1].clientX),d=this.temp.txt.width)},TxtTouchM:function(t){if(1==t.touches.length){var e=t.touches[0].clientX,i=t.touches[0].clientY,o=e-c,h=i-u,a=r+o,s=n+h;this.temp.txt.x=a,this.temp.txt.y=s}else if(2==t.touches.length){var m=Math.abs(t.touches[0].clientX-t.touches[1].clientX),f=m-l;this.temp.txt.width=d+f}},TxtTouchE:function(){this.wordTouch=!1},back:function(){t.navigateBack({delta:1})},submit:function(){var e=this,i=0;if(this.temp.box&&this.temp.box.forEach(function(t){t.img.url||i++}),i>0)return h.default.msg("还需添加照片"),!1;t.showLoading({title:"正在保存数据"});var o=this.scale,a={url:this.temp.url,width:this.temp.width*o,height:this.temp.height*o,word:this.temp.word};this.temp.txt&&(a.txt={width:this.temp.txt.width*o,size:this.temp.txt.size*o,color:this.temp.txt.color,x:this.temp.txt.x*o,y:this.temp.txt.y*o}),this.temp.box&&(a.box=[],this.temp.box.forEach(function(t){a.box.push({w:t.w*o,h:t.h*o,x:t.x*o,y:t.y*o,img:{url:t.img.url,rotate_url:t.img.rotate_url,isfixed:t.img.isfixed,rotate:t.img.rotate,width:t.img.width*o,height:t.img.height*o,x:t.img.x*o,y:t.img.y*o}})})),this.cover={width:a.width,height:a.height};var s=t.createCanvasContext("coverCanvas");if(s.clearRect(0,0,a.width,a.height),a.box&&a.box.forEach(function(t){s.save(),s.fillRect(t.x,t.y,t.w,t.h),s.clip(),s.translate(t.x,t.y),s.drawImage(t.img.rotate_url,t.img.x,t.img.y,t.img.width,t.img.height),s.restore()}),s.drawImage(a.url,0,0,a.width,a.height),a.word&&a.word.length>0){var r=.8,n=a.txt.width,c=a.txt.size,u=a.txt.color,d=a.txt.x,l=a.txt.y,f=1.7*c;a.word.forEach(function(t){if(s.setFontSize(c),s.setFillStyle(u),t.length<=Math.floor(n/c))s.fillText(t,d,l+f*r,n),r++;else{var e=t.split(""),i=[],o="",h=Math.floor(n/c);e.forEach(function(t,a){o+=t,(0!=a&&a%h==0||a+1==e.length)&&(i.push(o),o="")}),i.forEach(function(t){s.fillText(t,d,l+f*r,n),r++})}})}s.draw(),setTimeout(function(){t.canvasToTempFilePath({x:0,y:0,width:a.width,height:a.height,destWidth:a.width,destHeight:a.height,canvasId:"coverCanvas",success:function(i){t.hideLoading();var o=i.tempFilePath;e.data.word=JSON.stringify(e.data.word),t.uploadFile({url:m.globalData.host+"common/upload",header:{"content-type":"multipart/form-data",token:m.globalData.token},filePath:o,name:"file",formData:e.data,success:function(i){var o=JSON.parse(i.data);200==o.code?h.default.success("保存成功",function(){3==e.userInfo.identity?t.reLaunch({url:"../index/index"}):t.reLaunch({url:"../albumList/albumList"})},1200):h.default.msg(o.msg)},fail:function(t){console.log(t)}})}})},2e3)}}};e.default=f}).call(this,i("543d")["default"])},"9b5b":function(t,e,i){"use strict";(function(t){i("31c9"),i("921b");o(i("66fd"));var e=o(i("c8f1"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("543d")["createPage"])},bc67:function(t,e,i){"use strict";i.r(e);var o=i("5fb0"),h=i.n(o);for(var a in o)"default"!==a&&function(t){i.d(e,t,function(){return o[t]})}(a);e["default"]=h.a},c8f1:function(t,e,i){"use strict";i.r(e);var o=i("224b"),h=i("bc67");for(var a in h)"default"!==a&&function(t){i.d(e,t,function(){return h[t]})}(a);i("1153");var s,r=i("f0c5"),n=Object(r["a"])(h["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],s);e["default"]=n.exports}},[["9b5b","common/runtime","common/vendor"]]]);