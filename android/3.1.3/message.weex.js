// { "framework": "Vue" }

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 63);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var navigator = weex.requireModule('navigator');
var mixins = {
    data: function data() {
        return {};
    },
    methods: {}
};

exports.default = mixins;

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var modal = weex.requireModule('modal');
module.exports = {

    parseQueryString: function parseQueryString(str) {
        if (str.indexOf('?') === -1 || str.indexOf('=') === -1) return null;
        str = str.split("?")[1];
        var reg = /(([^?&=]+)(?:=([^?&=]*))*)/g;
        // let reg = /\s*([\w\-]+?)\s*=\s*([^;]*?)\s*(?:;|$)\s*/g;
        var result = {};
        var match = void 0;
        var key = void 0;
        var value = void 0;
        while (match = reg.exec(str)) {
            key = match[2];
            if (key === 'hot-reload_controller' || key === '_wx_tpl') continue;
            value = match[3] || '';
            result[key] = decodeURIComponent(value);
        }
        return result;
    },
    toDateString: function toDateString(value) {
        var date = void 0;
        if (this.isNotNull(value)) {
            date = new Date(value);
        } else {
            date = new Date();
        }
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
        var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
        var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
        var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
        return Y + M + D + h + m + s;
    },
    toTimeSpan: function toTimeSpan() {
        //let date = new Date(strtime); //传入一个时间格式，如果不传入就是获取现在的时间了，这样做不兼容火狐。
        // 可以这样做
        var date = new Date(strtime.replace(/-/g, '/'));
        // 有三种方式获取，在后面会讲到三种方式的区别
        // return date.getTime();
        // return date.valueOf();
        return Date.parse(date);

        /*
         三种获取的区别：
         第一、第二种：会精确到毫秒
         第三种：只能精确到秒，毫秒将用0来代替
         比如上面代码输出的结果(一眼就能看出区别)：
         1398250549123
         1398250549123
         1398250549000
         */
    },
    compareDate: function compareDate(startDate, endDate) {
        var d1 = new Date(startDate.replace(/-/g, "/"));
        var d2 = new Date(endDate.replace(/-/g, "/"));

        return !(startDate !== "" && endDate !== "" && d1 > d2);
    },
    isNotNull: function isNotNull(str) {
        return str !== undefined && str !== "" && str != null;
    },
    //获取日期 传1代表当月第一天 传其他代表当前日期
    getDate: function getDate(v) {
        var now = new Date();
        var year = now.getFullYear(); //年
        var month = now.getMonth() + 1; //月
        var day = now.getDate(); //日

        /*let hh = now.getHours();            //时
         let mm = now.getMinutes();          //分
         let ss = now.getSeconds();*/
        var clock = year + "-"; //加""的作用是转成字符串，不然会以整型计算

        if (month < 10) clock += "" + "0";
        clock += month + "-";

        if (day < 10) clock += "" + "0";
        clock += v === 1 ? '1' : day;

        /*if(hh < 10)
         clock += ""+"0";
         clock += hh;
           if (mm < 10)
         clock += ""+"0";
         clock += mm;
           if (ss < 10)
         clock += ""+"0";
         clock += ss;*/
        return clock;
    },

    /**
     * 获取图片的高度
     * @param url
     * @param callback
     * @returns {*}
     */
    checkPicurl: function checkPicurl(url, callback) {
        var img = new Image();
        img.src = url;
        var ratio = 0;
        var clientWidth = 750;
        img.onerror = function () {
            ratio = 0;
            return callback(ratio);
        };
        if (img.complete) {
            ratio = img.width / img.height;
            return callback(ratio === 0 ? 0 : clientWidth / ratio);
        } else {
            img.onload = function () {
                ratio = img.width / img.height;
                img.onload = null; //避免重复加载
                return callback(ratio === 0 ? 0 : clientWidth / ratio);
            };
        }
    },
    /**
     *  适配不同情况下的字体大小
     * @param size dp值的大小
     * @returns {*} 适配后的值的大小
     */
    getFontSize: function getFontSize(size) {
        if (this.isweb()) {
            var clientWith = document.body.clientWidth;
            if (weex.config.env.osName.toLocaleString() === "android") {
                return 2 * size + 'px';
            } else {
                if (clientWith > 900) {
                    return size * weex.config.env.scale + 'px';
                } else if (clientWith > 750) {
                    return 2 * size * weex.config.env.scale + 'px';
                } else {
                    return 4 * size * weex.config.env.scale + 'px';
                }
            }
        } else {
            var _clientWith = weex.config.env.deviceWidth;
            var ratio = 750 / _clientWith;
            var fontSize = size * ratio * weex.config.env.scale;
            return fontSize.toFixed(0);
        }
    },
    getMatchSize: function getMatchSize(size) {
        if (this.isweb()) {
            return size * weex.config.env.scale + 'px';
        } else {
            return size;
        }
    },
    isweb: function isweb() {
        return weex.config.env.platform.toLocaleLowerCase() === "web";
    },
    registerModules: function registerModules() {
        if (this.isweb()) {
            var _weex$registerModule;

            weex.registerModule('event', (_weex$registerModule = {
                openWeexView: function openWeexView(viewName, viewTitle) {
                    if (weex.config.env.osName.toLowerCase() === "android") {
                        ltwc.openWeexView(viewName, viewTitle);
                    }
                }
            }, _defineProperty(_weex$registerModule, 'openWeexView', function openWeexView(viewName, title, shareUrl) {
                if (weex.config.env.osName.toLowerCase() === "android") {
                    ltwc.openWeexView(viewName, title, shareUrl);
                }
            }), _defineProperty(_weex$registerModule, 'openWebView', function openWebView(webUrl, title) {
                if (weex.config.env.osName.toLowerCase() === "android") {
                    ltwc.openWebView(webUrl, title);
                }
            }), _defineProperty(_weex$registerModule, 'openWebView', function openWebView(webUrl, title, shareUrl) {
                if (weex.config.env.osName.toLowerCase() === "android") {
                    ltwc.openWebView(webUrl, title, shareUrl);
                }
            }), _defineProperty(_weex$registerModule, 'openView', function openView(uri) {
                if (weex.config.env.osName.toLowerCase() === "android") {
                    ltwc.openView(uri);
                }
            }), _defineProperty(_weex$registerModule, 'getFilePath', function getFilePath(name, type, callback) {
                if (weex.config.env.osName.toLowerCase() === "android") {
                    window.getFilePathCallback = callback;
                    ltwc.getFilePath(name, type, callback);
                }
            }), _defineProperty(_weex$registerModule, 'showMessage', function showMessage(msg) {
                if (weex.config.env.osName.toLowerCase() === "android") {
                    ltwc.showMessage(msg);
                }
            }), _defineProperty(_weex$registerModule, 'getVersion', function getVersion(callback) {
                if (weex.config.env.osName.toLowerCase() === "android") {
                    window.getVersionCallback = callback;
                    ltwc.getVersion(callback);
                }
            }), _defineProperty(_weex$registerModule, 'update', function update(url) {
                if (weex.config.env.osName.toLowerCase() === "android") {
                    ltwc.update(url);
                }
            }), _defineProperty(_weex$registerModule, 'setConfig', function setConfig(tabs, adImgUrl, adSchemeUrl) {
                if (weex.config.env.osName.toLowerCase() === "android") {
                    ltwc.setConfig(tabs, adImgUrl, adSchemeUrl);
                }
            }), _defineProperty(_weex$registerModule, 'playVideo', function playVideo(url) {
                if (weex.config.env.osName.toLowerCase() === "android") {
                    ltwc.playVideo(url);
                }
            }), _weex$registerModule));
            weex.registerModule('net', {
                requestNetData: function requestNetData(methodType, url, api, jsonParams, showLoading, callback) {
                    if (weex.config.env.osName.toLowerCase() === "android") {
                        window.requestNetDataCallback = callback;
                        ltwc.requestNetData(methodType, url, api, jsonParams, showLoading);
                    }
                }
            });
        }
    }
};
if (module.exports.isweb()) {
    window.getReturnData = function (type, data) {
        if (type === "getFilePath") {
            window.getFilePathCallback(data);
        } else if (type === "requestNetData") {
            window.requestNetDataCallback(data);
        } else if (type === "getVersion") {
            window.getVersionCallback(data);
        }
    };
}

/***/ }),

/***/ 103:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('list', _vm._l((_vm.datas), function(item, i) {
    return _c('cell', {
      key: i,
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, [_c('div', {
      staticClass: ["item"],
      style: {
        backgroundColor: _vm.bgColor
      },
      on: {
        "click": function($event) {
          _vm.click(i)
        }
      }
    }, [_c('text', {
      staticClass: ["item-title"]
    }, [_vm._v(_vm._s(item.title))]), _c('text', {
      staticClass: ["item-content"]
    }, [_vm._v(_vm._s(item.content))]), _c('text', {
      staticClass: ["item-time"]
    }, [_vm._v(_vm._s(item.time))])])])
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by Tw93 on 2016/11/4.
 */

exports.default = {
    channels: '头条&新闻&财经&体育&娱乐&军事&教育&科技&NBA&股票&星座&女性&健康&育儿',
    adImgUrl: 'http://imengu.cn/Ahuangshang/img/newYear.jpg', //图片尺寸1080*1800
    adImgSchemeUrl: 'className=cn.ltwc.cft.weex.WeexActivity&ltkj&jsName=springFestival&ltkj&webTitle=春节&ltkj&shareUrl=http://imengu.cn/Ahuangshang/html/springFestival.html',
    newVersion: 313301,
    updateUrl: 'http://imengu.cn/Ahuangshang/apk/latest.apk',
    HostImgUrl: 'http://imengu.cn/Ahuangshang/img/',
    defaultHost: 'http://imengu.cn/',
    getContent: function getContent(e) {
        var head = "<head>" + "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, user-scalable=no\"> " + "<style>img{max-width: 100%; width:auto; height:auto;}</style>" + "<style type='text/css'>" + "body{color:rgba(28,28,28,0.95);font-size: 16px}" + "</style>" + "</head>";
        var style = "<style>" + "  body{" + "    -webkit-user-select: none;" + "    -webkit-tap-highlight-color: transparent;" + "  }" + "</style>";
        var result = "<html>" + head + style + "<body>" + e + "</body></html>";
        result = encodeURI(result);
        return result;
    },
    getWeatherTypeImg: function getWeatherTypeImg(currentType) {
        if (this.contains(currentType, '晴')) {
            return 'qing.jpg';
        } else if (this.contains(currentType, '阴')) {
            return 'yin.jpg';
        } else if (this.contains(currentType, '多云')) {
            return 'duoyun.gif';
        } else if (this.contains(currentType, '小雨') || this.contains(currentType, '中雨')) {
            return 'xiaoyu.gif';
        } else if (this.contains(currentType, '大雨') || this.contains(currentType, '暴雨')) {
            return 'dayu.gif';
        } else if (this.contains(currentType, '小雪') || this.contains(currentType, '中雪')) {
            return 'xiaoxue.gif';
        } else if (this.contains(currentType, '大雪') || this.contains(currentType, '暴雪')) {
            return 'daxue.gif';
        } else if (this.contains(currentType, '雪')) {
            return 'xiaoxue.gif';
        } else if (this.contains(currentType, '雨')) {
            return 'xiaoyu.gif';
        }
    },

    contains: function contains(str, s) {
        return str.indexOf(s) > -1;
    },
    getWeatherDec: function getWeatherDec(high, low) {
        var nhigh = high.replace("高温", "");
        nhigh = nhigh.replace('℃', '');
        var nlow = low.replace('低温', '');
        return nhigh + " ~" + nlow;
    },
    newsTabTitles: [{ title: '头条' }, { title: '新闻' }, { title: '财经' }, { title: '体育' }, { title: '娱乐' }, { title: '军事' }, { title: '教育' }, { title: '科技' }, { title: 'NBA' }, { title: '股票' }, { title: '星座' }, { title: '女性' }, { title: '健康' }, { title: '育儿' }],
    newsTabStyles: {
        bgColor: '#ffffff',
        titleColor: '#dd000000',
        activeTitleColor: '#31A9A5',
        activeBgColor: '#ffffff',
        isActiveTitleBold: true,
        iconWidth: 70,
        iconHeight: 70,
        width: 160,
        height: 75,
        fontSize: 28,
        hasActiveBottom: true,
        activeBottomColor: '#31A9A5',
        activeBottomHeight: 1,
        activeBottomWidth: 160,
        textPaddingLeft: 10,
        textPaddingRight: 10,
        normalBottomColor: 'rgba(0,0,0,0.4)',
        normalBottomHeight: 1,
        hasRightIcon: true,
        rightOffset: 100
    },
    jokeTabTitles: [{ title: '脑筋急转弯', netUrl: 'https://api.bmob.cn/1/classes/funny_iq/' }, { title: '时尚物语', netUrl: 'https://api.bmob.cn/1/classes/funny_ganwu/' }, { title: '节日祝福', netUrl: 'https://api.bmob.cn/1/classes/funny_zhufu/' }],
    jokeTabStyles: {
        bgColor: '#ffffff',
        titleColor: '#dd000000',
        activeTitleColor: '#31A9A5',
        activeBgColor: '#ffffff',
        isActiveTitleBold: true,
        iconWidth: 70,
        iconHeight: 70,
        width: 250,
        height: 75,
        fontSize: 28,
        hasActiveBottom: true,
        activeBottomColor: '#31A9A5',
        activeBottomHeight: 1,
        activeBottomWidth: 250,
        textPaddingLeft: 10,
        textPaddingRight: 10,
        normalBottomColor: 'rgba(0,0,0,0.4)',
        normalBottomHeight: 1,
        hasRightIcon: true,
        rightOffset: 100
    }
};

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(91)
)

/* script */
__vue_exports__ = __webpack_require__(78)

/* template */
var __vue_template__ = __webpack_require__(103)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\workSpace\\workSpace\\oldWork\\rili_weex\\src\\views\\message.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-0cee72e6"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _message = __webpack_require__(49);

var _message2 = _interopRequireDefault(_message);

var _mixins = __webpack_require__(0);

var _mixins2 = _interopRequireDefault(_mixins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Vue.mixin(_mixins2.default);

_message2.default.el = '#root';

new Vue(_message2.default);

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _methods = __webpack_require__(1);

var _methods2 = _interopRequireDefault(_methods);

var _config = __webpack_require__(3);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    data: function data() {
        return {
            datas: [{
                viewName: "yuanxiao",
                title: "元宵节",
                content: "元宵佳节赏花灯，吉祥之星为你升；正月十五团圆夜，全家一起猜花灯。",
                time: "2018-03-02",
                shareUrl: "http://mp.weixin.qq.com/s/O29M03SiniaMhB-bieVNVg",
                shareImagePaht: ''
            }, {
                viewName: "springFestival",
                title: "春节",
                content: "春节是指汉字文化圈传统上的农历新年，俗称“年节”，传统名称为新年、大年、新岁，但口头上又称度岁、庆新岁、过年。",
                time: "2018-02-15",
                shareUrl: _config2.default.defaultHost + "Ahuangshang/html/springFestival.html",
                shareImagePaht: _config2.default.HostImgUrl + 'springFestival/img_1.jpg'
            }, {
                viewName: "dongzhi",
                title: "冬至",
                content: "冬至是农历的重要节气，也是中华民族的传统节日。早在春秋时代，中国就已经用土圭观测出冬至，古人认为自冬至起阳气回升，代表着下一个循环的开始。冬至是重要的养生时期，应注意防寒保暖、保肝护肝。",
                time: "2017-12-22",
                shareUrl: _config2.default.defaultHost + "Ahuangshang/html/dongzhi.html",
                shareImagePaht: _config2.default.HostImgUrl + 'dongzhi/dongzhi_1.jpg'
            }, {
                viewName: "yieryisan",
                title: "国家公祭日",
                content: "南京大屠杀死难者国家公祭仪式于12月13日上午10时举行。",
                time: "2017-12-12",
                shareUrl: _config2.default.defaultHost + "Ahuangshang/html/yieryisan.html",
                shareImagePaht: ''
            }, {
                viewName: "mid-autumn-festival",
                title: "中秋节",
                content: "中秋节自古便有祭月、赏月、拜月、吃月饼、赏桂花、饮桂花酒等习俗，流传至今，久经不息。中秋节以月之圆兆人之团圆，为寄托思念故乡，思念亲人之情，祈盼丰收、幸福，成为丰富多彩、弥足珍贵的文化遗产。中秋节与端午节、春节、清明节并称为中国四大传统节日。",
                time: "2017-10-04",
                shareUrl: _config2.default.defaultHost + "Ahuangshang/html/mid-Autumn-festival.html",
                shareImagePaht: _config2.default.HostImgUrl + 'mid_autumn/mid-autumn.jpg'
            }, {
                viewName: "guanggao",
                title: "开业大吉",
                content: "视频VIP豪送|庆国庆、迎中秋，万份视频VIP等你来领！",
                time: "2017-10-01",
                shareUrl: _config2.default.defaultHost + "Ahuangshang/html/guanggao.html",
                shareImagePaht: _config2.default.HostImgUrl + 'advertisement/ad.jpg'
            }, {
                viewName: "bailu",
                title: "白露",
                content: "白露是农历二十四节气中的第十五个节气，当太阳到达黄经165度时为白露。",
                time: "2017-09-07",
                shareUrl: _config2.default.defaultHost + 'Ahuangshang/html/bailu.html',
                shareImagePaht: _config2.default.HostImgUrl + 'bailu/img_1.jpg'
            }],
            bgColor: "#ffffff",
            title: "",
            content: "",
            time: ""

        };
    },

    methods: {
        click: function click(i) {
            if (this.datas[i].viewName === 'yuanxiao') {
                weex.requireModule('event').openView('className=cn.ltwc.cft.activity.MyX5WebView&ltkj&webUrl=' + this.datas[i].shareUrl + '&ltkj&webTitle=' + this.datas[i].title + '&ltkj&shareUrl=' + this.datas[i].shareUrl);
            } else {
                weex.requireModule('event').openView('className=cn.ltwc.cft.weex.WeexActivity&ltkj&jsName=' + this.datas[i].viewName + '&ltkj&webTitle=' + this.datas[i].title + '&ltkj&shareUrl=' + this.datas[i].shareUrl + '&ltkj&shareImagePath=' + this.datas[i].shareImagePaht);
            }
        }
    },
    created: function created() {
        if (_methods2.default.isweb()) {
            window.temp_this = this;
            _methods2.default.registerModules();
        }
    }
};

/***/ }),

/***/ 91:
/***/ (function(module, exports) {

module.exports = {
  "item": {
    "paddingTop": "25",
    "paddingBottom": "25",
    "paddingLeft": "35",
    "paddingRight": "35",
    "minHeight": "200",
    "justifyContent": "center",
    "borderBottomWidth": "1",
    "borderColor": "#dddddd",
    "backgroundColor:active": "rgb(240,240,240)"
  },
  "item-title": {
    "fontSize": "40",
    "color": "#303030"
  },
  "item-content": {
    "marginTop": "5",
    "fontSize": "32",
    "color": "#000000"
  },
  "item-time": {
    "fontSize": "32",
    "color": "#6c6c6c",
    "textAlign": "right"
  }
}

/***/ })

/******/ });