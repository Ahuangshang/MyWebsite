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
/******/ 	return __webpack_require__(__webpack_require__.s = 46);
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

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* script */
__vue_exports__ = __webpack_require__(65)

/* template */
var __vue_template__ = __webpack_require__(83)
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
__vue_options__.__file = "D:\\workSpace\\rili_weex\\src\\views\\mid-autumn-festival.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
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

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _midAutumnFestival = __webpack_require__(33);

var _midAutumnFestival2 = _interopRequireDefault(_midAutumnFestival);

var _mixins = __webpack_require__(0);

var _mixins2 = _interopRequireDefault(_mixins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Vue.mixin(_mixins2.default);

_midAutumnFestival2.default.el = '#root';

new Vue(_midAutumnFestival2.default);

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
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
  props: {
    img_w_top: {
      default: 750
    },
    img_w: {
      default: 718
    },
    img_1_h: {
      default: 475
    },
    img_2_h: {
      default: 534
    },

    img_3_h: {
      default: 438
    },

    img_4_h: {
      default: 488
    },
    img_5_h: {
      default: 433
    },
    contentMargin: {
      default: 16
    },
    tex_size_1: {
      default: 30
    },
    tex_size_2: {
      default: 35
    },
    topMargin: {
      default: 40
    },
    line_height: {
      default: 55
    },
    title: {
      default: "        中秋节自古便有祭月、赏月、拜月、吃月饼、赏桂花、饮桂花酒等习俗，流传至今，久经不息。中秋节以月之圆兆人之团圆，为寄托思念故乡，思念亲人之情，祈盼丰收、幸福，成为丰富多彩、弥足珍贵的文化遗产。中秋节与端午节、春节、清明节并称为中国四大传统节日。"
    },
    content_1: {
      default: "        关于中秋节的起源，说法较多。中秋一词，最早见于《周礼》，《礼记·月令》上说：“仲秋之月养衰老，行糜粥饮食。”一说它起源于古代帝王的祭祀活动。《礼记》上记载：“天子春朝日，秋夕月”，夕月就是祭月亮，说明早在春秋时代，帝王就已开始祭月、拜月了。后来贵族官吏和文人学士也相继仿效，逐步传到民间。二是中秋节的起源和农业生产有关。秋天是收获的季节。“秋”字的解释是：“庄稼成熟曰秋”。八月中秋，农作物和各种果品陆续成熟，农民为了庆祝丰收，表达喜悦的心情，就以“中秋”这天作为节日。“中秋”就是秋天中间的意思，农历的八月是秋季中间的一个月，十五日又是这个月中间的一天，所以中秋节可能是古人“秋报”遗传下来的习俗。也有历史学家研究指出，中秋节起源应为隋末唐军于大业十三年八月十五日，唐军裴寂以圆月作为构思，成功发明月饼，并广发军中作为军饷，成功解决因大量吸收反隋义军而衍生之军粮问题。"
    },
    content_2: {
      default: "        中秋节赏月的风俗，据历史学家推断，最初是古代宫廷文人兴起，然后扩散到民间的。早在魏晋乐府《子夜四十歌》中，就有一首《秋有月》描写道：“ 仰头望明月，寄情千里光。”在唐代，中秋赏月、玩月颇为盛行，许多诗人的名篇中都有咏月的诗句，中秋节开始成为固定的节日，《唐书·太宗记》记载就有“八月十五中秋节”。传说唐玄宗梦游月宫，得到了霓裳羽衣曲，民间才开始盛行过中秋节的习俗。\n" + "        北宋，正式定八月十五为中秋节，并出现“小饼如嚼月，中有酥和饴”的节令食品。孟元老《东京梦华录》说：“中秋夜，贵家结饰台榭，民间争占酒楼玩月”；而且“弦重鼎沸，近内延居民，深夜逢闻笙芋之声，宛如云外。间里儿童，连宵婚戏；夜市骈阗，至于通晓。”吴自牧《梦梁录》说：“此际金凤荐爽，玉露生凉，丹桂香飘，银蟾光满。王孙公子，富家巨室，莫不登危楼，临轩玩月，或开广榭，玳筵罗列，琴瑟铿锵，酌酒高歌，以卜竟夕之欢。至如铺席之家，亦登小小月台，安排家宴，团围子女，以酬佳节。虽陋巷贫篓之人，解农市酒，勉强迎欢，不肯虚度。此夜天街卖买，直至五鼓，玩月游人，婆婆于市，至烧不绝。”更有意思的是，《新编醉翁谈录》记述拜月之俗：“倾城人家子女不以贫富能自行至十二三，皆以成人之眼眼饰之，登楼或中庭焚香拜月，各有所朝；男则愿早步蟾宫，高攀仙桂。……女则愿貌似嫦娥，圆如皓月。”\n" + "        明清两朝的赏月活动，盛行不衰。“其祭果饼必圆”；各家都要设“月光位”，在月出方向“向月供而拜”。陆启泓《北京岁华记》载：“中秋夜，人家各置月宫符象，符上免如人立；陈瓜果于庭，饼面绘月宫蟾免；男女肃拜烧香，旦而焚之。”田汝成《西湖游览志余》云：“是夕，人家有赏月之宴，或携柏湖船，沿游彻晓。苏堤之上，联袂踏歌，无异白日”；“民间以月饼相邀，取团圆之义”。富察敦崇《燕京岁时记》称：“中秋月饼，以前门致美斋者为京都第一，他处不足食也。呈供月月饼到处皆有。大者尺余，上绘月宫蜡兔之形。”“每届中秋，府第朱门皆以月饼果品相馈赠。至十五月圆时，陈瓜果于庭以供月，并祀以毛豆、鸡冠花。是时也，皓魄当空，彩云初散，传杯洗盏，儿女喧哗，真所谓佳节也。唯供月时男子多不叩拜。”同时这五百多年中还推出“烧斗香”、“走月亮”、“放天灯”、“树中秋”、“点塔灯”、“舞火龙”、“曳石”、“卖兔儿爷”等节庆活动；其中的赏月，吃月饼、团圆饭等习俗，一直流传到今天。\n" + "        中秋节是中国的传统佳节。根据史籍的记载，“中秋”一词最早出现在《周礼》一书中。到魏晋时，有“谕尚书镇牛淆，中秋夕与左右微服泛江”的记载。直到唐朝初年，中秋节才成为固定的节日。《唐书·太宗记》记载有“八月十五中秋节”。中秋节的盛行始于宋朝，至明清时，已与元旦齐名，成为中国的主要节日之一。这也是中国仅次于春节的第二大传统节日。"
    },
    content_3: {
      default: "        2008年开始中国大陆将中秋节列为法定假期，如当天与周六周日重合，则在下周一补休一天。\n" + "        在台湾，中秋节当天放假一天，若与周六、日重叠则不另外补假，但若与周休假期仅相隔一工作日者，该工作日则调为假期，并择另一星期六补班补课。\n" + "        香港的中秋节公众假期定在农历八月十六日（中秋节翌日）。如果碰上星期日，则在星期一补一天假；如果碰上星期六则没有补假。\n" + "        韩国把中秋节列为法定假期，放假3天。"
    },
    content_4: {
      default: "   传统活动\n" + "        祭月、赏月、拜月\n" + "        《礼记》早有记载“秋暮夕月”，意为拜祭月神，逢此时则要举行迎寒和祭月，设香案。到了周代，每逢中秋夜都要举行迎寒和祭月。设大香案，摆上月饼、西瓜、苹果、红枣、李子、葡萄等祭品，其中月饼和西瓜是绝对不能少的，西瓜还要切成莲花状。在月下，将月亮神像放在月亮的那个方向，红烛高燃，全家人依次拜祭月亮，然后由当家主妇切开团圆月饼。切的人预先算好全家共有多少人，在家的，在外地的，都要算在一起，不能切多也不能切少，大小要一样。在少数民族中，同样盛行祭月的风习。\n" + "        相传古代齐国丑女无盐，幼年时曾虔诚拜月，长大后，以超群品德入宫，但未被宠幸。某年八月十五赏月，天子在月光下见到她，觉得她美丽出众，后立她为皇后，中秋拜月由此而来。月中嫦娥，以美貌着称，故少女拜月，愿“貌似嫦娥，面如皓月”。而云南傣族在中秋之夜，同样盛行“拜月”风俗。\n" + "        中秋赏月的风俗在唐代十分流行，许多诗人的名篇中都有咏月的诗句。到宋代，中秋赏月之风更盛，每逢这一日，“贵家结饰台榭，民间争占酒楼玩月”。明清宫廷和民间的拜月赏月活动更具规模，中国各地至今遗存着许多“拜月坛”、“拜月亭”、“望月楼”等古迹。文人士大夫对赏月更是情有独钟，他们或登楼揽月或泛舟邀月，饮酒赋诗，留下不少脍炙人口的千古绝唱。如杜甫《八月十五夜月》用象征团圆的十五明月反衬自己飘泊异乡的羁旅愁思；宋代文豪苏轼，中秋欢饮达旦，大醉而作《水调歌头》，借月之圆缺喻人之离合。直到今天，一家人围坐在一起，欣赏皓月当空的美景仍是中秋佳节必不可少的活动之一。\n" + "        观潮\n" + "        在古代，浙江一带除中秋赏月外，观潮可谓是又一中秋盛事。中秋观潮的风俗由来已久，早在汉代枚乘的《七发》赋中就有了相当详尽的记述。汉以后，中秋观潮之风更盛。明朱廷焕《增补武林旧事》和宋吴自牧《梦粱录》也有观潮记载。\n" + "        燃灯\n" + "        中秋之夜，有燃灯以助月色的风俗。如今湖广一带仍有用瓦片叠塔于塔上燃灯的节俗。江南一带则有制灯船的节俗。近代中秋燃灯之俗更盛。今人周云锦、何湘妃《闲情试说时节事》一文说：“广东张灯最盛，各家于节前十几天，就用竹条扎灯笼。做果品、鸟兽、鱼虫形及‘庆贺中秋’等字样，上糊色纸绘各种颜色。中秋夜灯内燃烛用绳系于竹竿上，高竖于瓦檐或露台上，或用小灯砌成字形或种种形状，挂于家屋高处，俗称‘树中秋’或‘竖中秋’。富贵之家所悬之灯，高可数丈，家人聚于灯下欢饮为乐，平常百姓则竖一旗杆，灯笼两个，也自取其乐。满城灯火不啻琉璃世界。”看来从古至今中秋燃灯之俗其规模似乎仅次于元宵灯节。\n" + "        猜谜\n" + "        中秋月圆夜在公共场所挂着许多灯笼，人们都聚集在一起，猜灯笼身上写的谜语，因为是大多数年轻男女喜爱的活动，同时在这些活动上也传出爱情佳话，因此中秋猜灯谜也被衍生了一种男女相恋的形式。\n" + "        吃月饼\n" + "        中秋节赏月赏月和吃月饼是中国各地过中秋节的必备习俗，俗话说：“八月十五月正圆，中秋月饼香又甜”。月饼一词，源于南宋吴自牧的《梦梁录》，那时仅是一种点心食品。到后来人们逐渐把赏月与月饼结合在一起，寓意家人团圆，寄托思念。同时，月饼也是中秋时节朋友间用来联络感情的重要礼物。\n" + "        在福建厦门地区还有博饼的习俗，而且博饼被列为国家非物质文化遗产项目。\n" + "        赏桂花、饮桂花酒\n" + "        人们经常在中秋时吃月饼赏桂花，食用桂花制作的各种食品，以糕点、糖果最为多见。中秋之夜，仰望着月中丹桂，闻着阵阵桂香，喝一杯桂花蜜酒，欢庆合家甜甜蜜蜜，已成为节日一种美的享受。到了现代，人们多是拿红酒代替。\n" + "        玩花灯\n" + "        中秋没有像元宵节那样的大型灯会，玩灯主要只是在家庭、儿童之间进行的。早在北宋《武林旧事》中，记载中秋夜节俗，就有‘将“一点红”灯放入江中漂流玩耍的活动。中秋玩花灯，多集中在南方。如佛山秋色会上，就有各种各式的彩灯：芝麻灯、蛋壳灯、刨花灯、稻草灯、鱼鳞灯、谷壳灯、瓜籽灯及鸟兽花树灯等。\n" + "        在广州、香港等地，中秋夜要进行树中秋活动，树亦作竖，即将灯彩高竖起来之意。小孩子们在家长协助下用竹纸扎成兔仔灯、杨桃灯或正方形的灯，横挂在短竿中，再竖起于高杆上，高技起来，彩光闪耀，为中秋再添一景。孩子们多互相比赛，看谁竖得高，竖得多，灯彩最精巧。另外还有放天灯的，即孔明灯，用纸扎成大形的灯，灯下燃烛，热气上腾，使灯飞扬在空中，引人欢笑追逐。另外还有儿童手提的各式花灯在月下游嬉玩赏。在广西南宁一带，除了以纸竹扎各式花灯让儿童玩耍外，还有很朴素的柚子灯、南瓜灯、桔子灯。所谓柚子灯，是将柚子掏空，刻出简单图案，穿上绳子，内点蜡烛即成，光芒淡雅。南瓜灯、桔子灯也是将瓤掏去而成。虽然朴素，但制作简易，很受欢迎，有些孩子还把柚子灯漂入池河水中作游戏。\n" + "        广西有简单的户秋灯，是以六个竹篾圆圈扎成灯，外糊白纱纸，内插蜡烛即成。挂于祭月桌旁祭月用，也可给孩子们玩。\n" + "        烧塔\n" + "        南方广泛流传着烧瓦子灯（或称烧花塔、烧瓦塔、烧番塔）的游戏。如《中华全国风俗志》卷五记：江西“中秋夜，一般孩子于野外拾瓦片，堆成一圆塔形，有多孔。黄昏时于明月下置木柴塔中烧之。俟瓦片烧红，再泼以煤油，火上加油，霎时四野火红，照耀如昼。直至夜深，无人观看，始行泼息，是名烧瓦子灯”。广东潮州的烧瓦塔，也是以砖瓦砌成空心塔，填入树枝烧起火来。同时还燃烟堆，就是将草柴堆成堆，在拜月结束后烧燃。而在广西边疆一带的烧番塔，亦类似这种活动，但民间传说是为了纪念清代抗法名将刘永福将逃入塔中的番鬼（法国侵略者）烧死的英勇战斗。福建晋江亦有“烧塔仔”的活动。传说这种习俗与反抗元兵的义举有关。元朝确立后，对汉人进行了血腥的统治，于是汉人便进行不屈的反抗，各地相约中秋节起事，在宝塔的顶层点火为号。类似于峰火台点火起事，这种反抗虽被镇压下去，却遗存了烧宝塔这一习俗。\n" + "\n" + "   民族特色\n" + "        蒙古族\n" + "        蒙古族人爱做“追月”的游戏。人们跨上骏马，在银白色月光下，奔驰在草原上。他们朝西放马奔驰，月亮由东方升起，坠落西方。执着的蒙古骑手，不到月亮西下，“追月”不止。\n" + "        藏族\n" + "        西藏一些地区的藏族同胞欢度中秋的习俗是“寻月”。是日夜晚，男女青年和娃娃们，沿着河流，跟着倒映水中的明月，把周围河塘中的月影措遍，然后回家团圆吃月饼。\n" + "        广西侗族\n" + "        广西侗族有“行月”的习俗。中秋夜临，各山寨的芦笙歌舞队，踏着一路月光，行至临近山寨，和那儿的寨民相聚赏月，赛歌赛舞，彻夜长欢。\n" + "        云南德昂族\n" + "        云南德昂族“串月”。云南潞西的德昂族青年男女，每逢中秋月明高挂，分外明亮的时候，山头塞尾，不时传来一阵悠扬动听的葫芦笙，男女青年在一起“串月亮”倾诉衷情。有的还通过“串月亮”送槟榔、送茶订下婚约。\n" + "        云南彝族\n" + "        云南彝族过中秋的传统习俗是“跳月”。入夜，该族各个村寨的男女老幼都聚集在山村中的开阔地，一个个束腰披纱的姑娘们和头缠布带的小伙子们以及老头、老太太、小娃子们都激情地载歌载舞，尤其是那些青年男女表达爱慕之情的对歌，仿佛月亮也听得为之动情动容，越发显得妩媚皎洁。\n" + "        仡佬族\n" + "        仡佬族在节前的“虎日”，全寨合宰一头公牛，将牛心留到中秋夜祭祖灵、迎新谷，他们称为“八月节”。\n" + "        朝鲜族\n" + "        朝鲜族则用木杆和松枝高搭“望月架”。当明月升空时，请数位被推选出来的老人攀上望月架。待老人望月之后，再点燃望月架，敲长鼓、吹洞箫，一起合跳《农家乐舞》。\n" + "        广西西部壮族\n" + "        广西西部壮族的“祭月请神”活动更典型，每年夏历八月中旬，有的就在中秋夜，人们在村头村尾露天处，设一供桌，供放祭品和香炉，桌子右边树一高约一尺的树枝或竹枝，象征树，亦作月神下凡与上天的梯子，这里保存了古老的月亮神话因素。整个活动分为：请月神下凡，由一名或两名妇女作为月神的代言人；神人对歌；月神卜卦算命；歌手唱送神咒歌，送月神回天四个阶段。\n" + "        黎族\n" + "        黎族称中秋节为“八月会”或“调声节”。届时各集镇举行歌舞聚会，每村由一“调声头”(即领队)率领男女青年参加，互赠月饼、香糕、甜粑、花巾、彩扇和背心，成群结队，川流不息。入夜便聚集在火旁，烤食野味，痛饮米酒，开展对歌演唱，未婚青年趁机挑寻未来的伴侣。[1]\n" + "\n" + "   国外习俗\n" + "        朝鲜半岛\n" + "        韩语称“추석(秋夕)”“중추절(仲秋节)”“가배(嘉俳)”“중추(仲秋)”“가배일(嘉俳日)”“중추가절(仲秋佳节)”。是扫墓并用新收获的谷物和果实祭祀先祖的日子。回乡探亲，向亲朋戚友送礼亦是过中秋节的习俗。所以英文亦把朝鲜半岛的中秋节叫做“韩国感恩节”（Korean Thanksgiving Day）。\n" + "        越南\n" + "        中秋节也是越南儿童的一个节日。当晚，孩子们聆听关于阿贵的传说，去看舞狮，有的还得到父亲给他买一个用来舞狮的狮子跟朋友们一起玩耍。 越南孩子在中秋夜均要提鲤鱼灯出游玩耍，还预示长大“跳龙门”之意。\n" + "        日本\n" + "        日本传统的中秋节被称为十五夜，也叫中秋名月、芋名月。日本人在赏月的时候吃江米团子，称为“月见团子”。由于这个时期正值各种作物的收获季节，为了对自然的恩惠表示感谢，日本人要举行各种庆祝活动。日本人也会赏月，称之为“月见”，屋内会陈列赏月团子、芒草、芋等。\n" + "        新加坡\n" + "        新加坡是一个华人占人口绝大多数的国家，对于一年一度的中秋佳节向来十分重视。对新加坡的华人来说，中秋佳节是联络感情，表示谢意的天赐良机。亲朋好友、商业伙伴之间相互馈赠月饼，借此表示问候与祝愿。\n" + "        马来西亚、菲律宾\n" + "        吃月饼、赏月、提灯笼游行是马来西亚华人世代相传的中秋习俗。中秋临近，马来西亚各地的老字号商家纷纷推出各色月饼。首都吉隆坡市内各大商场都设有月饼专柜，报纸、电视台的月饼广告铺天盖地，为喜迎中秋营造了节日气氛。吉隆坡一些地方的华人社团当前举行了提灯笼游行庆中秋活动，除舞龙舞狮外，一辆辆载有“嫦娥”、“七仙女”的花车漫游其间，服饰鲜艳的艺人和青年载歌载舞。\n" + "        中秋节是生活在菲律宾的华侨华人非常重视的传统佳节。菲律宾首都马尼拉的唐人街热闹非凡，当地华侨华人举行活动，欢度中秋节。华侨华人聚居区的主要商业街道张灯结彩，主要路口和进入唐人街的小桥上都挂上了彩幅，许多商店出售自制的或从中国进口的各式月饼。中秋庆祝活动包括舞龙游行、民族服装游行、灯笼游行和花车游行等。\n" + "\n" + "   中秋宴俗\n" + "        古时汉族的中秋宴俗，以宫廷最为精雅。如明代宫廷时兴吃螃蟹。螃蟹用蒲包蒸熟后，众人围坐品尝，佐以酒醋。食毕饮苏叶汤，并用之洗手。宴桌区周，摆满鲜花、大石榴以及其他时鲜，演出中秋的神话戏曲。清宫多在某一院内向东放一架屏风，屏风两侧搁置鸡冠花、毛豆技、芋头、花生、萝卜、鲜藕。屏风前设一张八仙桌，上置一个特大的月饼，四周缀满糕点和瓜果。祭月完毕，按皇家人口将月饼切作若干块，每人象征性地尝一口，名曰“吃团圆饼”。清宫月饼之大，令人难以想象。像末代皇帝溥仪赏给总管内务大臣绍英的一个月饼，便是“径约二尺许，重约二十斤”。"
    },

    content_5: {
      default: "   嫦娥奔月\n" + "        版本一\n" + "        相传，远古时候天上有十日同时出现，晒得庄稼枯死，民不聊生，一个名叫后羿的英雄，力大无穷，他同情受苦的百姓，登上昆仑山顶，运足神力，拉开神弓，一气射下九个多太阳，并严令最后一个太阳按时起落，为民造福。后羿因此受到百姓的尊敬和爱戴，后羿娶了个美丽善良的妻子，名叫嫦娥。后羿除传艺狩猎外，终日和妻子在一起，人们都羡慕这对郎才女貌的恩爱夫妻。\n" + "        不少志士慕名前来投师学艺，心术不正的蓬蒙也混了进来。一天，后羿到昆仑山访友求道，巧遇由此经过的王母娘娘，便向王母求得一包不死药。据说，服下此药，能即刻升天成仙。然而，后羿舍不得撇下妻子，只好暂时把不死药交给嫦娥珍藏。嫦娥将药藏进梳妆台的百宝匣里，不料被小人蓬蒙看见了，他想偷吃不死药自己成仙。三天后，后羿率众徒外出狩猎，心怀鬼胎的蓬蒙假装生病，留了下来。待后羿率众人走后不久，蓬蒙手持宝剑闯入内宅后院，威逼嫦娥交出不死药。嫦娥知道自己不是蓬蒙的对手，危急之时她当机立断，转身打开百宝匣，拿出不死药一口吞了下去。嫦娥吞下药，身子立时飘离地面、冲出窗口，向天上飞去。由于嫦娥牵挂着丈夫，便飞落到离人间最近的月亮上成了仙。傍晚，后羿回到家，侍女们哭诉了白天发生的事。后羿既惊又怒，抽剑去杀恶徒，蓬蒙早逃走了，后羿气得捶胸顿足，悲痛欲绝，仰望着夜空呼唤爱妻的名字，这时他惊奇地发现，今天的月亮格外皎洁明亮，而且有个晃动的身影酷似嫦娥。他拼命朝月亮追去，可是他追三步，月亮退三步，他退三步，月亮进三步，无论怎样也追不到跟前。后羿无可奈何，又思念妻子，只好派人到嫦娥喜爱的后花园里，摆上香案，放上她平时最爱吃的蜜食鲜果，遥祭在月宫里眷恋着自己的嫦娥。百姓们闻知嫦娥奔月成仙的消息后，纷纷在月下摆设香案，向善良的嫦娥祈求吉祥平安。从此，中秋节拜月的风俗在民间传开了。\n" + "        版本二\n" + "        在后羿和嫦娥结合以前，后羿是王母的侍从，嫦娥是玉帝的婢女。后来，后羿遭他人陷害。玉帝一怒之下把他夫妻二人双双贬下天庭。后羿在凡间做了一名神射手。因助尧帝射日，得长生药丸一粒。尧叮嘱他说要禁食一年方可服用。后羿回到家，把不老仙丹藏在椽下，收敛心神，以待成仙。一日，后羿得尧召见。嫦娥见椽下白光闪烁，甚是可喜，就找到药丸，吞了下去。瞬时间，她的身体越变越轻，不一会儿竟飞上天去了。后羿回来，刚好看到这一幕，又急又气。他弯弓搭箭，向天射去，希望能够追回嫦娥。但是最后因为风的原因，后羿不得不折返地球，眼睁睁地看嫦娥飞到了月亮上。嫦娥到了月亮上，一阵猛咳，吐出半颗药丸。药丸变成一个玉兔，整日捣药，与她做伴。\n" + "   月饼起义\n" + "        中秋节吃月饼相传始于元代。当时，中原广大人民不堪忍受元朝统治阶级的残酷统治，纷纷起义抗元。朱元璋联合各路反抗力量准备起义。但朝廷官兵搜查的十分严密，传递消息十分困难。军师刘伯温便想出一计策，命令属下把藏有“八月十五夜起义”的纸条藏入饼子里面，再派人分头传送到各地起义军中，通知他们在八月十五日晚上起义响应。到了起义的那天，各路义军一齐响应，起义军如星火燎原。很快，徐达就攻下元大都，起义成功了。消息传来，朱元璋高兴得连忙传下口谕，在即将来临的中秋节，让全体将士与民同乐，并将当年起兵时以秘密传递信息的“月饼”，作为节令糕点赏赐群臣。此后，“月饼”制作越发精细，品种更多，大者如圆盘，成为馈赠的佳品。以后中秋节吃月饼的习俗便在民间流传开来。\n" + "   玉兔捣药\n" + "        嫦娥身边有只玉兔。据说嫦娥身体变轻，开始升空时，惶恐中抱起了一直喂养的白兔。白兔便随她一起上了月亮。玉兔在月宫有一只捣药杵，夜晚在药臼中捣制长生不老的灵药。这个神话传到日本后，变成了玉兔在捣年糕。\n" + "   玄宗故事\n" + "        相传唐玄宗与申天师及道士鸿都中秋望月，突然玄宗兴起游月宫之念，于是天师作法，三人一起步上青云，漫游月宫。但宫前有守卫森严，无法进入，只能在外俯瞰长安皇城。在此之际，忽闻仙声阵阵，唐玄宗素来熟通音律，于是默记心中。这正是“此曲只应天上有，人间能得几回闻！”日后玄宗回忆月宫仙娥的音乐歌声，自己谱曲编舞，创作了历史上有名的“霓裳羽衣曲”。"
    }
  },
  created: function created() {}
};

/***/ }),

/***/ 83:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroller', [_c('div', [_c('image', {
    style: {
      width: _vm.img_w_top,
      height: _vm.img_1_h
    },
    attrs: {
      "src": "http://zerosboy.site/Ahuangshang/img/mid_autumn/mid-autumn.jpg",
      "placeholder": ""
    }
  }), _c('div', {
    style: {
      marginLeft: _vm.contentMargin,
      marginRight: _vm.contentMargin
    }
  }, [_c('text', {
    staticStyle: {
      color: "#334f16"
    },
    style: {
      fontSize: _vm.tex_size_1,
      marginTop: _vm.topMargin,
      margin: _vm.contentMargin,
      lineHeight: _vm.line_height
    },
    attrs: {
      "value": _vm.title
    }
  }), _c('text', {
    style: {
      fontSize: _vm.tex_size_2,
      marginTop: _vm.contentMargin
    }
  }, [_vm._v(" 起源")]), _c('text', {
    staticStyle: {
      color: "#334f16"
    },
    style: {
      fontSize: _vm.tex_size_1,
      marginTop: _vm.topMargin,
      margin: _vm.contentMargin,
      lineHeight: _vm.line_height
    },
    attrs: {
      "value": _vm.content_1
    }
  }), _c('image', {
    style: {
      width: _vm.img_w,
      height: _vm.img_2_h
    },
    attrs: {
      "src": "http://zerosboy.site/Ahuangshang/img/mid_autumn/mid-autumn1.jpg",
      "placeholder": ""
    }
  }), _c('text', {
    staticStyle: {
      marginTop: "15px"
    },
    style: {
      fontSize: _vm.tex_size_2
    }
  }, [_vm._v(" 发展")]), _c('text', {
    staticStyle: {
      color: "#334f16"
    },
    style: {
      fontSize: _vm.tex_size_1,
      marginTop: _vm.topMargin,
      margin: _vm.contentMargin,
      lineHeight: _vm.line_height
    },
    attrs: {
      "value": _vm.content_2
    }
  }), _c('image', {
    style: {
      width: _vm.img_w,
      height: _vm.img_3_h
    },
    attrs: {
      "src": "http://zerosboy.site/Ahuangshang/img/mid_autumn/mid-autumn5.jpg",
      "placeholder": ""
    }
  }), _c('text', {
    staticStyle: {
      marginTop: "15px"
    },
    style: {
      fontSize: _vm.tex_size_2
    }
  }, [_vm._v(" 假期")]), _c('text', {
    staticStyle: {
      color: "#334f16"
    },
    style: {
      fontSize: _vm.tex_size_1,
      marginTop: _vm.topMargin,
      margin: _vm.contentMargin,
      lineHeight: _vm.line_height
    },
    attrs: {
      "value": _vm.content_3
    }
  }), _c('image', {
    style: {
      width: _vm.img_w,
      height: _vm.img_4_h
    },
    attrs: {
      "src": "http://zerosboy.site/Ahuangshang/img/mid_autumn/mid-autumn6.jpg",
      "placeholder": ""
    }
  }), _c('text', {
    staticStyle: {
      marginTop: "15px"
    },
    style: {
      fontSize: _vm.tex_size_2
    }
  }, [_vm._v(" 风俗习惯")]), _c('text', {
    staticStyle: {
      color: "#334f16"
    },
    style: {
      fontSize: _vm.tex_size_1,
      marginTop: _vm.topMargin,
      margin: _vm.contentMargin,
      lineHeight: _vm.line_height
    },
    attrs: {
      "value": _vm.content_4
    }
  }), _c('image', {
    style: {
      width: _vm.img_w,
      height: _vm.img_5_h
    },
    attrs: {
      "src": "http://zerosboy.site/Ahuangshang/img/mid_autumn/mid-autumn7.gif",
      "placeholder": ""
    }
  }), _c('text', {
    staticStyle: {
      marginTop: "15px"
    },
    style: {
      fontSize: _vm.tex_size_2
    }
  }, [_vm._v(" 神话传说")]), _c('text', {
    staticStyle: {
      color: "#334f16"
    },
    style: {
      fontSize: _vm.tex_size_1,
      marginTop: _vm.topMargin,
      margin: _vm.contentMargin,
      lineHeight: _vm.line_height
    },
    attrs: {
      "value": _vm.content_5
    }
  })])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });