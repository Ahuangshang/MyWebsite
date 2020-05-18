// { "framework": "Vue" }
!function(e){function t(n){if(i[n])return i[n].exports;var o=i[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var i={};t.m=e,t.c=i,t.i=function(e){return e},t.d=function(e,i,n){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=63)}({0:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=(weex.requireModule("navigator"),{data:function(){return{}},methods:{}});t.default=n},1:function(e,t,i){"use strict";function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}weex.requireModule("modal");e.exports={parseQueryString:function(e){if(-1===e.indexOf("?")||-1===e.indexOf("="))return null;e=e.split("?")[1];for(var t=/(([^?&=]+)(?:=([^?&=]*))*)/g,i={},n=void 0,o=void 0,r=void 0;n=t.exec(e);)"hot-reload_controller"!==(o=n[2])&&"_wx_tpl"!==o&&(r=n[3]||"",i[o]=decodeURIComponent(r));return i},toDateString:function(e){var t=void 0;return t=this.isNotNull(e)?new Date(e):new Date,t.getFullYear()+"-"+(t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"-"+(t.getDate()<10?"0"+t.getDate():t.getDate())+" "+(t.getHours()<10?"0"+t.getHours():t.getHours())+":"+(t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes())+":"+(t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds())},toTimeSpan:function(){var e=new Date(strtime.replace(/-/g,"/"));return Date.parse(e)},compareDate:function(e,t){var i=new Date(e.replace(/-/g,"/")),n=new Date(t.replace(/-/g,"/"));return!(""!==e&&""!==t&&i>n)},isNotNull:function(e){return void 0!==e&&""!==e&&null!=e},getDate:function(e){var t=new Date,i=t.getFullYear(),n=t.getMonth()+1,o=t.getDate(),r=i+"-";return n<10&&(r+="0"),r+=n+"-",o<10&&(r+="0"),r+=1===e?"1":o},checkPicurl:function(e,t){var i=new Image;i.src=e;var n=0;if(i.onerror=function(){return n=0,t(n)},i.complete)return n=i.width/i.height,t(0===n?0:750/n);i.onload=function(){return n=i.width/i.height,i.onload=null,t(0===n?0:750/n)}},getFontSize:function(e){if(this.isweb()){var t=document.body.clientWidth;return"android"===weex.config.env.osName.toLocaleString()?2*e+"px":t>900?e*weex.config.env.scale+"px":t>750?2*e*weex.config.env.scale+"px":4*e*weex.config.env.scale+"px"}return(e*(750/weex.config.env.deviceWidth)*weex.config.env.scale).toFixed(0)},getMatchSize:function(e){return this.isweb()?e*weex.config.env.scale+"px":e},delHtmlTag:function(e){return e.replace(/<[^>]+>/g,"").replace(/&quot;/g,'"').replace(/&lt;/g,"<").replace(/&gt;/g,">")},isweb:function(){return"web"===weex.config.env.platform.toLocaleLowerCase()},is_weixn:function(){return"micromessenger"==navigator.userAgent.toLowerCase().match(/MicroMessenger/i)},registerModules:function(){if(this.isweb()){var e;weex.registerModule("event",(e={openWeexView:function(e,t){"android"===weex.config.env.osName.toLowerCase()&&ltwc.openWeexView(e,t)}},n(e,"openWeexView",function(e,t,i){"android"===weex.config.env.osName.toLowerCase()&&ltwc.openWeexView(e,t,i)}),n(e,"openWebView",function(e,t){"android"===weex.config.env.osName.toLowerCase()&&ltwc.openWebView(e,t)}),n(e,"openWebView",function(e,t,i){"android"===weex.config.env.osName.toLowerCase()&&ltwc.openWebView(e,t,i)}),n(e,"openView",function(e){"android"===weex.config.env.osName.toLowerCase()&&ltwc.openView(e)}),n(e,"getFilePath",function(e,t,i){"android"===weex.config.env.osName.toLowerCase()&&(window.getFilePathCallback=i,ltwc.getFilePath(e,t,i))}),n(e,"showMessage",function(e){"android"===weex.config.env.osName.toLowerCase()&&ltwc.showMessage(e)}),n(e,"getVersion",function(e){"android"===weex.config.env.osName.toLowerCase()&&(window.getVersionCallback=e,ltwc.getVersion(e))}),n(e,"update",function(e){"android"===weex.config.env.osName.toLowerCase()&&ltwc.update(e)}),n(e,"setConfig",function(e,t,i){"android"===weex.config.env.osName.toLowerCase()&&ltwc.setConfig(e,t,i)}),n(e,"playVideo",function(e,t,i){"android"===weex.config.env.osName.toLowerCase()&&ltwc.playVideo(e,t,i)}),e)),weex.registerModule("net",{requestNetData:function(e,t,i,n,o,r){"android"===weex.config.env.osName.toLowerCase()&&(window.requestNetDataCallback=r,ltwc.requestNetData(e,t,i,n,o))}})}}},e.exports.isweb()&&(window.getReturnData=function(e,t){"getFilePath"===e?window.getFilePathCallback(t):"requestNetData"===e?window.requestNetDataCallback(t):"getVersion"===e&&window.getVersionCallback(t)})},100:function(e,t){e.exports={div:{height:"1300",position:"absolute",right:0,top:0,left:0,bottom:0,backgroundColor:"rgba(0,0,0,0.5)"},div_weixin:{position:"absolute",right:0,top:0,left:0,bottom:0,height:"1300",backgroundColor:"rgba(0,0,0,1)"},hint:{width:"750",position:"absolute",right:0,top:0,left:0,bottom:0,alignItems:"center"},hintImage:{width:"618.75",height:"1100"},bg:{opacity:.3,position:"absolute",right:0,top:0,left:0,bottom:0,width:"750",height:"1300"}}},115:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{class:[e.div()],staticStyle:{flex:"1"}},[i("image",{staticClass:["bg"],attrs:{src:"image/bg.jpg"}}),e.isweixin?e._e():i("div",{staticStyle:{alignItems:"center",flexDirection:"column",marginTop:"120px"}},[i("icon-img",{attrs:{imgUrl:"icon.png",imgw:"100"}}),i("text",{staticStyle:{marginTop:"20px",color:"#fdfdfd",fontWeight:"bold"},style:{fontSize:e.font(20)},attrs:{value:"王朝黄历"}}),i("text",{staticStyle:{marginTop:"50px",color:"#fdfdfd"},style:{fontSize:e.font(16)},attrs:{value:"有趣实用的王朝黄历"}}),i("text",{staticStyle:{marginTop:"15px",color:"#fdfdfd"},style:{fontSize:e.font(16)},attrs:{value:"千万人次的选择"}}),i("text",{staticStyle:{marginTop:"15px",color:"#fdfdfd"},style:{fontSize:e.font(16)},attrs:{value:"你还在等什么？"}}),i("a",{attrs:{href:"http://imengu.cn/Ahuangshang/apk/latest.apk"}},[i("div",{staticStyle:{backgroundColor:"#31A9A5",borderRadius:"10px",marginTop:"25px",cursor:"pointer"}},[i("text",{staticStyle:{margin:"15px",color:"#fdfdfd",cursor:"pointer"},style:{fontSize:e.font(16)},attrs:{value:"点我下载吧"}})])])],1),e.isweixin?i("div",{staticClass:["hint"]},[i("image",{staticClass:["hintImage"],attrs:{src:"image/hint.png"}})]):e._e()])},staticRenderFns:[]},e.exports.render._withStripped=!0},2:function(e,t,i){var n,o,r=[];r.push(i(6)),n=i(5);var a=i(7);o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o=n=n.default),"function"==typeof o&&(o=o.options),o.__file="E:\\workSpace\\workSpace\\oldWork\\rili_weex\\src\\views\\customview\\icon-img.vue",o.render=a.render,o.staticRenderFns=a.staticRenderFns,o._scopeId="data-v-59c63558",o.style=o.style||{},r.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,r),e.exports=n},3:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={channels:"头条&新闻&财经&体育&娱乐&军事&教育&科技&NBA&股票&星座&女性&健康&育儿",adImgUrl:"http://imengu.cn/Ahuangshang/img/dragonBoatFestival/dragonBoatFestival.jpg",adImgSchemeUrl:"className=cn.ltwc.cft.weex.WeexActivity&ltkj&jsName=dragonBoatFestival&ltkj&webTitle=端午节&ltkj&shareUrl=http://imengu.cn/Ahuangshang/html/dragonBoatFestival.html",newVersion:318318,updateUrl:"http://imengu.cn/Ahuangshang/html/downLoadApp.html",downLoadUrl:"http://imengu.cn/Ahuangshang/apk/latest.apk",HostImgUrl:"http://imengu.cn/Ahuangshang/img/",defaultHost:"http://imengu.cn/",getContent:function(e){var t='\n<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN""http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head><meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no"> <style>img{width: 100%;height:auto;}</style><style>video{width:100%; height:auto;max-height: 320px; position: static; margin: 0}</style><style type=\'text/css\'>body{color:rgba(28,28,28,0.95);font-size: 16px}</style></head><style>  body{    -webkit-user-select: none;    -webkit-tap-highlight-color: transparent;  }</style><body>'+this.getButtonInfo(e)+"</body></html>";return t=encodeURI(t)},getButtonInfo:function(e){var t=e.content.replace(/(<\/?a.*?>)/g,"");return"<h2>"+e.title+"</h2>"+t+"<p style='color: #88000000;font-size: 13px'>&nbsp;&nbsp;本文系第三方观点，不代表李唐科技的观点和立场</p><p  onClick='linkThird()' style='color: #33B5E5;font-size: 13px'>&nbsp;&nbsp;原文链接>></p><script>function linkThird() {ltwc.linkThird();}<\/script>"},getWeatherTypeImg:function(e){return this.contains(e,"晴")?"qing.jpg":this.contains(e,"阴")?"yin.jpg":this.contains(e,"多云")?"duoyun.gif":this.contains(e,"小雨")||this.contains(e,"中雨")?"xiaoyu.gif":this.contains(e,"大雨")||this.contains(e,"暴雨")?"dayu.gif":this.contains(e,"小雪")||this.contains(e,"中雪")?"xiaoxue.gif":this.contains(e,"大雪")||this.contains(e,"暴雪")?"daxue.gif":this.contains(e,"雪")?"xiaoxue.gif":this.contains(e,"雨")?"xiaoyu.gif":void 0},contains:function(e,t){return e.indexOf(t)>-1},getWeatherDec:function(e,t){var i=e.replace("高温","");return(i=i.replace("℃",""))+" ~"+t.replace("低温","")},newsTabTitles:[{title:"头条"},{title:"新闻"},{title:"财经"},{title:"体育"},{title:"娱乐"},{title:"军事"},{title:"教育"},{title:"科技"},{title:"NBA"},{title:"股票"},{title:"星座"},{title:"女性"},{title:"健康"},{title:"育儿"}],newsTabStyles:{bgColor:"#ffffff",titleColor:"#dd000000",activeTitleColor:"#31A9A5",activeBgColor:"#ffffff",isActiveTitleBold:!0,iconWidth:70,iconHeight:70,width:160,height:75,fontSize:28,hasActiveBottom:!0,activeBottomColor:"#31A9A5",activeBottomHeight:1,activeBottomWidth:160,textPaddingLeft:10,textPaddingRight:10,normalBottomColor:"rgba(0,0,0,0.4)",normalBottomHeight:1,hasRightIcon:!0,rightOffset:100},jokeTabTitles:[{title:"脑筋急转弯",netUrl:"https://api.bmob.cn/1/classes/funny_iq/"},{title:"时尚物语",netUrl:"https://api.bmob.cn/1/classes/funny_ganwu/"},{title:"节日祝福",netUrl:"https://api.bmob.cn/1/classes/funny_zhufu/"}],jokeTabStyles:{bgColor:"#ffffff",titleColor:"#dd000000",activeTitleColor:"#31A9A5",activeBgColor:"#ffffff",isActiveTitleBold:!0,iconWidth:70,iconHeight:70,width:250,height:75,fontSize:28,hasActiveBottom:!0,activeBottomColor:"#31A9A5",activeBottomHeight:1,activeBottomWidth:250,textPaddingLeft:10,textPaddingRight:10,normalBottomColor:"rgba(0,0,0,0.4)",normalBottomHeight:1,hasRightIcon:!0,rightOffset:100}}},47:function(e,t,i){var n,o,r=[];r.push(i(100)),n=i(82);var a=i(115);o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o=n=n.default),"function"==typeof o&&(o=o.options),o.__file="E:\\workSpace\\workSpace\\oldWork\\rili_weex\\src\\views\\downLoadApp.vue",o.render=a.render,o.staticRenderFns=a.staticRenderFns,o._scopeId="data-v-7f0b62b8",o.style=o.style||{},r.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,r),e.exports=n},5:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=i(1),r=n(o),a=i(3),s=n(a);t.default={props:{imgw:{default:50},imgh:{default:0},imgUrl:{default:""},padding_left:{default:0},padding_right:{default:0},bgColor:{default:"#00000000"},resize:{default:"contain"},imgFilePath:{default:"image_icon/"}},methods:{onClick:function(){this.$emit("onClick")},font:function(e){return r.default.getFontSize(e)},getSrc:function(e){return s.default.HostImgUrl+this.imgFilePath+e},getImgHeight:function(e){return 0!=e?e:this.imgw}}}},6:function(e,t){e.exports={div:{alignItems:"center",flexDirection:"column"},icon:{width:"50",height:"50"}}},63:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var o=i(47),r=n(o),a=i(0),s=n(a);Vue.mixin(s.default),r.default.el="#root",new Vue(r.default)},7:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:["div"],style:{width:e.imgw,height:e.getImgHeight(e.imgh),backgroundColor:e.bgColor},on:{click:e.onClick}},[i("image",{staticClass:["icon"],style:{width:e.imgw,height:e.getImgHeight(e.imgh),marginLeft:e.padding_left,marginRight:e.padding_right},attrs:{resize:e.resize,src:e.getSrc(e.imgUrl)}})])},staticRenderFns:[]},e.exports.render._withStripped=!0},82:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(1);weex.requireModule("modal");t.default={name:"downLoadApp",props:{isweixin:{default:!0}},components:{iconImg:i(2)},methods:{div:function(){return n.is_weixn()?"div_weixin":"div"},font:function(e){return n.getFontSize(e)},is_weixin:function(e){this.isweixin=n.is_weixn()}},created:function(){this.is_weixin()}}}});