/**
 * Weird cat science
 */
dojo.declare("classes.managers.ScienceManager", com.nuclearunicorn.core.TabManager, {

	game: null,

	hideResearched: false,	//hide researched techs

	//list of technologies
	techs:[{
		name: "calendar",
		title: "日历",

		description: "研究出预测季节改变的能力. 这个能力是先进农业文明必不可少的",
		effectDesc: "日历提供一种更精确的确定时间的方法",

		unlocked: true,
		researched: false,
		cost: 30,	//cos in WCS (weird cat science)
		unlocks: ["agriculture"]

	},{
		name: "agriculture",
		title: "农业",

		description: "所有文明最基本的东西, 农业允许陆地产生粮食.",
		effectDesc: "解锁农民和粮仓",

		unlocked: false,
		researched: false,
		cost: 100,
		unlocks: ["mining", "archery"],
		handler: function(game){
			game.village.getJob("farmer").unlocked = true;
		}
	},{
		name: "archery",
		title: "箭术",

		description: "远程武器被称为 '弓'.",
		effectDesc: "解锁猎手",

		unlocked: false,
		researched: false,
		cost: 300,
		unlocks: ["animal"],
		handler: function(game){
			game.village.getJob("hunter").unlocked = true;
		}
	},{
		name: "mining",
		title: "采矿",

		description: "采矿能发展出从矿井中提取矿藏资源的能力.",
		effectDesc: "你能建造矿井",

		unlocked: false,
		researched: false,
		cost: 600,
		handler: function(game){
			game.workshop.get("bolas").unlocked = true;
		},
		unlocks: ["metal"]
	},{
		name: "metal",
		title: "金属加工",

		description: "金属加工技术将给你的文明提供结实耐用的工具.",
		effectDesc: "你能建造熔炉来将矿石转化为金属",

		unlocked: false,
		researched: false,
		cost: 800,
		handler: function(game){
			game.workshop.get("huntingArmor").unlocked = true;
		}
	},
	{
		name: "animal",
		title: "畜牧业",
		description: "允许在草地上驯养各种各样的动物.",
		effectDesc: "解锁牧场",

		unlocked: false,
		researched: false,
		cost: 500,	//mostly does nothing, so price is lower
		unlocks: ["civil", "math", "construction", "brewery"],
		handler: function(game){
			//game.workshop.getCraft("leather").unlocked = true;
		}

	},{
		name: "brewery",
		title: "啤酒厂",

		description: "啤酒厂是一个非强制科技,但是能改善猫薄荷转化为猫薄荷木的效率.",
		effectDesc: "解锁猫薄荷浓缩.",

		unlocked: false,
		researched: false,
		cost: 1200,
		unlocks: [],
		handler: function(game){
			game.workshop.get("advancedRefinement").unlocked = true;
		}
	},{
		name: "civil",
		title: "行政部门",
		description: "第一个真正的国家机关的创建提供了许多好处与更好的组织.",
		effectDesc: "解锁关于你的人口的详细信息",

		unlocked: false,
		researched: false,
		cost: 1500,
		unlocks: ["currency"]	//currency
	},{
		name: "math",
		title: "数学",
		description: "数学是所有自然科学的最基本模块.",
		effectDesc: "允许建设学院,非常有效的研究建筑",

		unlocked: false,
		researched: false,
		cost: 1000,
		unlocks: [],
		handler: function(game){
			game.workshop.get("celestialMechanics").unlocked = true;
		}
	},{
		name: "construction",
		title: "建筑",
		description: "建筑代表进步的砌体的研究,主要是通过添加铁和其他金属制作建造者的工具箱。",
		effectDesc: "允许你的工人建造伐木厂，解锁复合弓",

		unlocked: false,
		researched: false,
		cost: 1300,
		unlocks: ["engineering"],
		handler: function(game){
			game.workshop.get("compositeBow").unlocked = true;
		}
	},{
		name: "engineering",
		title: "工程学",
		description: "工程学是一种复合材料设计，结构，驱动，和系统的科学或是艺术.",
		effectDesc: "解锁水渠",

		unlocked: false,
		researched: false,
		cost: 1500,
		unlocks: ["writing"],
		handler: function(game){
		}
	},{
		name: "currency",
		title: "货币",
		description: "货币代表一定数量的财富",
		effectDesc: "解锁黄金和贸易",

		unlocked: false,
		researched: false,
		cost: 2200,
		unlocks: [],
		handler: function(game){
			game.workshop.get("goldOre").unlocked = true;
		}
	},{
		name: "writing",
		title: "书写",
		description: "书写是有史可查的艺术.",
		effectDesc: "解锁建筑学",

		unlocked: false,
		researched: false,
		cost: 3600,
		unlocks: ["philosophy", "machinery", "steel"],
		handler: function(game){
			game.workshop.getCraft("parchment").unlocked = true;
		}
	},{
		name: "philosophy",
		title: "哲学",
		description: "哲学是猫类第一个开发的抽象科学.",
		effectDesc: "解锁寺庙",

		unlocked: false,
		researched: false,
		cost: 9500,
		unlocks: ["theology"],
		handler: function(game){
			game.workshop.getCraft("compedium").unlocked = true;
		}
	},{
		name: "machinery",
		title: "机械",
		description: "以前的金属加工和科学的进步产生的概念机,设备与多个移动部件.",
		effectDesc: "解锁蒸汽工坊, 印刷机和自动化农场.",

		unlocked: false,
		researched: false,
		cost: 15000,
		unlocks: [],
		handler: function(game){
			game.workshop.get("printingPress").unlocked = true;
			game.workshop.get("factoryAutomation").unlocked = true;
			game.workshop.get("crossbow").unlocked = true;
		}
	},{
		name: "steel",
		title: "钢铁",
		description: "开发新合金钢并发展进一步的金属加工.",
		effectDesc: "解锁煤炭和钢铁的生产",

		unlocked: false,
		researched: false,
		cost: 12000,
		unlocks: [],
		handler: function(game){

			game.workshop.getCraft("steel").unlocked = true;

			game.workshop.get("deepMining").unlocked = true;
			game.workshop.get("coalFurnace").unlocked = true;
			game.workshop.get("combustionEngine").unlocked = true;
			game.workshop.get("reinforcedWarehouses").unlocked = true;
			game.workshop.get("steelAxe").unlocked = true;
			game.workshop.get("steelArmor").unlocked = true;
		}
	},{
		name: "theology",
		title: "神学",
		description: "神学是一种宗教研究",
		effectDesc: "解锁宗教",

		unlocked: false,
		researched: false,
		prices: [
			{name : "science", val: 20000},
			{name: 	"manuscript", val: 35}
		],
		unlocks: ["astronomy"],
		handler: function(game){
			game.village.getJob("priest").unlocked = true;
		}
	},{
		name: "astronomy",
		title: "天文学",
		description: "天文学是研究太空中的物体.",
		effectDesc: "解锁天文台和星图",

		unlocked: false,
		researched: false,
		prices: [
			{name : "science", val: 28000},
			{name: 	"manuscript", val: 65}
		],
		unlocks: ["navigation"],
		handler: function(game){
		}
	},{
		name: "navigation",
		title: "航海",
		description: "导航允许真正的航海和造船技术的发展.",
		effectDesc: "解锁贸易商船的建造和海外贸易",

		unlocked: false,
		researched: false,
		prices: [
			{name : "science", val: 35000},
			{name: 	"manuscript", val: 100}
		],
		unlocks: ["physics", "archeology", "architecture"],
		handler: function(game){
			game.workshop.getCraft("ship").unlocked = true;

			game.workshop.get("caravanserai").unlocked = true;
			game.workshop.get("cargoShips").unlocked = true;

			game.workshop.get("astrolabe").unlocked = true;
			game.workshop.get("titaniumMirrors").unlocked = true;
			game.workshop.get("titaniumAxe").unlocked = true;
		}
	},{
		name: "architecture",
		title: "建筑风格",
		description: "建筑风格允许建造一些新的复杂结构.",
		effectDesc: "解锁铸币厂和大厦.",
		unlocked: false,
		researched: false,
		prices: [
			{name : "science", val: 42000},
			{name: 	"compedium", val: 10}
		],
		unlocks: ["acoustics"],
		handler: function(game){

		}
	},{
		name: "physics",
		title: "物理学",
		description: "物理学主要研究自然规律.",
		effectDesc: "解锁一些有用的升级.",
		unlocked: false,
		researched: false,
		prices: [
			{name : "science", val: 50000},
			{name: 	"compedium", val: 35}
		],
		unlocks: ["chemistry", "electricity", "metaphysics"],
		handler: function(game){
			game.workshop.get("pneumaticPress").unlocked = true;
			game.workshop.get("pyrolysis").unlocked = true;
			game.workshop.get("steelSaw").unlocked = true;
			game.workshop.getCraft("blueprint").unlocked = true;
		}
	},{
		name: "metaphysics",
		title: "玄学",
		description: "玄学是对传统哲学解释的一种分支(TBD).",
		effectDesc: "解锁玄学升级.",
		unlocked: false,
		researched: false,
		prices: [
			{name : "science", val: 55000},
			{name: 	"unobtainium", val: 5}
		],
		unlocks: [],
		handler: function(game){
		}
	},{
		name: "chemistry",
		title: "化学",
		description: "化学的发现使研究的深入和自然要素及其相互作用的理解.",
		effectDesc: "解锁石油和油井.",
		unlocked: false,
		researched: false,
		prices: [
			{name : "science", val: 60000},
			{name: 	"compedium", val: 50}
		],
		unlocks: [],
		handler: function(game){
			game.workshop.getCraft("alloy").unlocked = true;
			game.workshop.get("alloyAxe").unlocked = true;
			game.workshop.get("alloyBarns").unlocked = true;
			game.workshop.get("alloyWarehouses").unlocked = true;
			game.workshop.get("alloyArmor").unlocked = true;
		}
	},{
		name: "acoustics",
		title: "声学",
		description: "声学主要研究声音.",
		effectDesc: "解锁小礼拜堂",
		unlocked: false,
		researched: false,
		prices: [
			{name : "science", val: 65000},
			{name: 	"compedium", val: 65}
		],
		unlocks: ["drama"],
		handler: function(game){

		}
	},{
		name: "drama",
		title: "戏剧和诗",
		description: "戏剧和诗歌都是艺术表现的形式。不过前者通过使用视觉方式来表达,后者通过书面文字.",
		effectDesc: "解锁节日和文化产品(TBD)",
		unlocked: false,
		researched: false,
		prices: [
			{name : "science", val: 90000},
			{name: 	"parchment", val: 5000}
		],
		unlocks: [],
		handler: function(game){

		}
	},{
		name: "archeology",
		title: "地质学",
		description: "地质科学是研究它的岩石组成,他们改变的过程.",
		effectDesc: "解锁采石场和地质学家",
		unlocked: false,
		researched: false,
		prices: [
			{name : "science", val: 70000},
			{name: 	"compedium", val: 75}
		],
		unlocks: ["biology"],
		handler: function(game){
			game.village.getJob("geologist").unlocked = true;
		},
		flavor: "不同的巨型蜥蜴的化石被发现。显然他们都死于一场突如其来的不可避免的背叛."
	},{
		name: "electricity",
		title: "电力",
		description: "电打开一种新的方式来自动化生产,不同地区猫类从中受益.",
		effectDesc: "解锁发电机",
		unlocked: false,
		researched: false,
		prices: [
			{name : "science", val: 75000},
			{name: 	"compedium", val: 85}
		],
		unlocks: ["industrialization"],
		handler: function(game){
		}
	},{
		name: "biology",
		title: "生物学",
		description: "生物学与生物,他们的特点就是他们是我们的社会在使用的.",
		effectDesc: "解锁内切酶",
		unlocked: false,
		researched: false,
		prices: [
			{name : "science", val: 85000},
			{name: 	"compedium", val: 100}
		],
		unlocks: ["biochemistry"],
		handler: function(game){
		}
	},{
		name: "biochemistry",
		title: "生物化学",
		description: "TBD.",
		effectDesc: "解锁生物燃料加工",
		unlocked: false,
		researched: false,
		prices: [
			{name : "science", val: 145000},
			{name: 	"compedium", val: 500}
		],
		unlocks: ["genetics"],
		handler: function(game){
			game.workshop.get("biofuel").unlocked = true;
		}
	},{
		name: "genetics",
		title: "遗传学",
		description: "TBD.",
		effectDesc: "解锁基因工程(?)",
		unlocked: false,
		researched: false,
		prices: [
			{name : "science", val: 190000},
			{name: 	"compedium", val: 1500}
		],
		unlocks: [],
		handler: function(game){
		}
	},{
		name: "industrialization",
		title: "工业化",
		description: "工业化是大规模生产材料的概念,从食品到机器零件.",
		effectDesc: "解锁高级自动化和船舶",
		unlocked: false,
		researched: false,
		prices: [
			{name : "science", val: 100000},
			{name: 	"blueprint", val: 25}
		],
		unlocks: ["mechanization", "metalurgy", "combustion"],
		handler: function(game){
			game.workshop.get("barges").unlocked = true;
			game.workshop.get("advancedAutomation").unlocked = true;
		}
	},{
		name: "mechanization",
		title: "机械化",
		description: "机械化提供了许多方法来自动化冗余任务,因此改善工艺、油泵和施工技术.",
		effectDesc: "解锁工场, 抽油机和混凝土",
		unlocked: false,
		researched: false,
		prices: [
			{name : "science", val: 115000},
			{name: 	"blueprint", val: 45}
		],
		unlocks: ["electronics"],
		handler: function(game){
			game.workshop.get("pumpjack").unlocked = true;
			game.workshop.getCraft("concrate").unlocked = true;

			//TODO: move to the separate tech?
			game.workshop.get("concreteWarehouses").unlocked = true;
			game.workshop.get("concreteBarns").unlocked = true;
			game.workshop.get("concreteHuts").unlocked = true;
		}
	},{
		name: "metalurgy",
		title: "冶金学",
		description: "冶金学改善金属生产的过程中,冶炼厂和煅烧窑中受益",
		effectDesc: "解锁电解熔炼和氧化",
		unlocked: false,
		researched: false,
		prices: [
			{name : "science", val: 125000},
			{name: 	"blueprint", val: 60}
		],
		unlocks: [],
		handler: function(game){
			game.workshop.get("electrolyticSmelting").unlocked = true;
			game.workshop.get("oxidation").unlocked = true;
			game.workshop.get("miningDrill").unlocked = true;
		}
	},{
		name: "combustion",
		title: "燃烧",
		description: "燃烧技术提供了许多方法来提高老旧的燃煤自动化技术例如蒸汽工坊等.",
		effectDesc: "解锁胶印和燃油喷射",
		unlocked: false,
		researched: false,
		prices: [
			{name : "science", val: 120000},
			{name: 	"blueprint", val: 50}
		],
		unlocks: [],
		handler: function(game){
			game.workshop.get("offsetPress").unlocked = true;
			game.workshop.get("fuelInjectors").unlocked = true;
			game.workshop.get("oilRefinery").unlocked = true;
		}
	},{
		name: "electronics",
		title: "电子学",
		description: "电子学将解锁一些主要关于科技的高等级升级",
		effectDesc: "解锁CAD系统, 制冷和搜寻地外文明计划",
		unlocked: false,
		researched: false,
		prices: [
			{name : "science", val: 135000},
			{name: 	"blueprint", val: 70}
		],
		unlocks: ["nuclearFission", "rocketry", "robotics"],
		handler: function(game){
			game.workshop.get("cadSystems").unlocked = true;
			game.workshop.get("refrigeration").unlocked = true;
			game.workshop.get("seti").unlocked = true;
		}
	},{
		name: "robotics",
		title: "机器人技术",
		description: "机器人技术改善自动化结构，像是煅烧炉",
		effectDesc: "解锁钢铁工厂和回转炉",
		unlocked: false,
		researched: false,
		prices: [
			{name : "science", val: 140000},
			{name: 	"blueprint", val: 80}
		],
		unlocks: [],
		handler: function(game){
			game.workshop.get("steelPlants").unlocked = true;
			game.workshop.get("rotaryKiln").unlocked = true;
		}
	},{
		name: "nuclearFission",
		title: "核裂变",
		description: "核裂变解锁反应堆和原子能相关升级",
		effectDesc: "解锁核反应堆和核能船舶",
		unlocked: false,
		researched: false,
		prices: [
			{name : "science", val: 150000},
			{name: 	"blueprint", val: 100}
		],
		unlocks: ["nanotechnology", "particlePhysics"],
		handler: function(game){
			game.workshop.get("reactorVessel").unlocked = true;
			game.workshop.get("nuclearSmelters").unlocked = true;
		}
	},{
		name: "rocketry",
		title: "火箭技术",
		description: "火箭技术用于太空探索",
		effectDesc: "解锁建造宇航飞船",
		unlocked: false,
		researched: false,
		prices: [
			{name : "science", val: 175000},
			{name: 	"blueprint", val: 125}
		],
		unlocks: ["sattelites"],
		handler: function(game){
			game.spaceTab.visible = true;
		}
	},{
		name: "sattelites",
		title: "卫星",
		description: "卫星可以探测大气层外面的行星",
		effectDesc: "解锁可以部署的卫星",
		unlocked: false,
		researched: false,
		prices: [
			{name : "science", val: 190000},
			{name: 	"blueprint", val: 125}
		],
		unlocks: ["orbitalEngineering"],
		handler: function(game){
		}
	},{
		name: "orbitalEngineering",
		title: "轨道工程",
		description: "轨道工程允许你的文明发展先进的太空项目.",
		effectDesc: "解锁空间站和哈勃望远镜",
		unlocked: false,
		researched: false,
		prices: [
			{name : "science", val: 250000},
			{name: 	"blueprint", val: 250}
		],
		unlocks: ["exogeology"],
		handler: function(game){
			game.workshop.get("hubbleTelescope").unlocked = true;
		}
	},{
		name: "exogeology",
		title: "外空地质学",
		description: "可以研究外星的金属和矿物.",
		effectDesc: "解锁各种很酷的升级",
		unlocked: false,
		researched: false,
		prices: [
			{name : "science", val: 275000},
			{name: 	"blueprint", val: 250}
		],
		unlocks: ["exogeology"],
		handler: function(game){
			game.workshop.get("unobtainiumReflectors").unlocked = true;
			game.workshop.get("unobtainiumHuts").unlocked = true;
			game.workshop.get("unobtainiumDrill").unlocked = true;
		}
	},
	{
		name: "nanotechnology",
		title: "纳米技术",
		description: "TBD",
		effectDesc: "解锁纳米服并且增强",
		unlocked: false,
		researched: false,
		prices: [
			{name : "science", val: 200000},
			{name: 	"blueprint", val: 150}
		],
		unlocks: [],
		handler: function(game){
			game.workshop.get("augumentation").unlocked = true;
			game.workshop.get("nanosuits").unlocked = true;
		}
	},{
		name: "particlePhysics",
		title: "粒子物理学",
		description: "粒子物理让我们更深一步的理解其原始物质和能量的性质,例如核物理",
		effectDesc: "解锁粒子加速器和浓缩铀",
		unlocked: false,
		researched: false,
		prices: [
			{name : "science", val: 185000},
			{name: 	"blueprint", val: 135}
		],
		unlocks: ["chronophysics", "dimensionalPhysics"],
		handler: function(game){
			game.workshop.get("enrichedUranium").unlocked = true;
			game.workshop.get("railgun").unlocked = true;
		}
	},{
		name: "dimensionalPhysics",
		title: "空间物理学",
		description: "空间物理学主要探索空间和时间的概念",
		effectDesc: "解锁能量裂缝",
		unlocked: false,
		researched: false,
		prices: [
			{name : "science", val: 235000}
		],
		unlocks: [],
		handler: function(game){
			game.workshop.get("energyRifts").unlocked = true;
			game.workshop.get("lhc").unlocked = true;
		}
	},{
		name: "chronophysics",
		title: "天体物理学",
		description: "天体物理学研究的时间和操作的可能性",
		effectDesc: "解锁天体物理学",
		unlocked: false,
		researched: false,
		prices: [
			{name : "science", val: 250000},
			{name: 	"timeCrystal", val: 5}
		],
		unlocks: [],
		handler: function(game){
			game.workshop.get("stasisChambers").unlocked = true;
		}
	}],
	
	metaCache: null,

	constructor: function(game){
		this.game = game;
		this.metaCache = {};
	},

	get: function(techName){
		var tech = this.metaCache[techName];
		if (tech){
			return tech;
		}
		
		for (var i = this.techs.length - 1; i >= 0; i--) {
			if (this.techs[i].name == techName){
				this.metaCache[techName] = this.techs[i];
				return this.techs[i];
			}
		}
		console.error("Failed to get tech for tech name '"+techName+"'");
		return null;
	},

	save: function(saveData){
		saveData.science = {
			techs: this.filterMetadata(this.techs, ["name", "unlocked", "researched"])
		}
		saveData.science.hideResearched = this.hideResearched;
	},

	load: function(saveData){
		if (saveData.science){
			this.hideResearched = saveData.science.hideResearched;

			var techs = saveData.science.techs;

			if (saveData.science.techs.length){
				for (var i = saveData.science.techs.length - 1; i >= 0; i--) {
					var savedTech = saveData.science.techs[i];

					if (savedTech != null){
						var tech = this.game.science.get(savedTech.name);
						if (tech){
							tech.unlocked = savedTech.unlocked;
							tech.researched = savedTech.researched;

							if (tech.researched && tech.handler){
								tech.handler(this.game);	//update tech effects to keep saves consistent
							}
						}
					}
				}
			}
		}

		//re-unlock technologies in case we have modified something
		for (var i = this.techs.length - 1; i >= 0; i--) {
			var tech = this.techs[i];

			if (tech.researched && tech.unlocks && tech.unlocks.length){
				for (var j = tech.unlocks.length - 1; j >= 0; j--) {
					var newTech = this.get(tech.unlocks[j]);
					newTech.unlocked = true;
				}
			}
		}

	},

	unlockAll: function(){
		for (var i = this.techs.length - 1; i >= 0; i--) {
			var tech = this.techs[i];
			tech.researched = true;
			tech.unlocked = true;
		}
		this.game.msg("全部技术解锁完成！");
	}
});

dojo.declare("com.nuclearunicorn.game.ui.TechButton", com.nuclearunicorn.game.ui.ButtonModern, {

	techName: null,

	constructor: function(opts, game){
		this.techName = opts.tech;
	},

	getTech: function(){
		return this.getTechByName(this.techName);
	},

	getTechByName: function(name){
		return this.game.science.get(name);
	},

	updateEnabled: function(){
		this.inherited(arguments);

		var tech = this.getTech();
		if (tech.researched /*|| !tech.unlocked*/){
			this.setEnabled(false);
		}
	},

	// getDescription: function(){
	// 	var tech = this.getTech();
	// 	if (!tech.researched){
	// 		return this.description;
	// 	} else {
	// 		return this.description + "<br>" + "效果: " + tech.effectDesc;
	// 	}
	// },

	getName: function(){
		var tech = this.getTech();
		if (!tech.researched){
			return this.name;
		} else {
			return this.name + " (完成)";
		}
	},

	updateVisible: function(){
		var tech = this.getTech();
		if (!tech.unlocked){
			this.setVisible(false);
		}else{
			this.setVisible(true);
		}

		if (tech.researched && this.game.science.hideResearched){
			this.setVisible(false);
		}
	},

	getTooltipHTML: function(btn){
		var tech = this.getTech();

		var tooltip = dojo.create("div", { style: {
			width: "280px",
			minHeight:"150px"
		}}, null);

		dojo.create("div", {
			innerHTML: this.getName(),
			style: {
				textAlign: "center",
				width: "100%",
				borderBottom: "1px solid gray",
				paddingBottom: "4px"
		}}, tooltip);

		//----------- description -------
		dojo.create("div", {
			innerHTML: this.getDescription(),
			style: {
				textAlign: "center",
				width: "100%",
				borderBottom: "1px solid gray",
				paddingBottom: "4px",
				fontSize: "15px",
				color: "gray"
		}}, tooltip);

		this.renderPrices(tooltip);
		//-------------- Effects-------------
		dojo.create("div", {
			innerHTML: "效果:",
			style: {
				textAlign: "center",
				width: "100%",
				borderBottom: "1px solid gray",
				paddingBottom: "4px",
				marginBottom: "8px"
		}}, tooltip);
			var nameSpan = dojo.create("div", { innerHTML: tech.effectDesc,
				style: {
					float: "left",
					fontSize: "14px",
					color: "gray",
					clear: "both"
		 	}}, tooltip );
		// var tech = this.getTech();
		// this.renderEffects(tooltip, tech.effectDesc);


		//-------------- flavor stuff -------------

		dojo.create("div", {
			innerHTML: tech.flavour || "flavour text",
			className: "flavor",
			style: {
				position: "absolute",
				bottom: "2px",
				right: "4px",
				fontSize: "12px",
				fontStyle: "italic"
		}}, tooltip);

		return tooltip.outerHTML;
	}
});

dojo.declare("com.nuclearunicorn.game.ui.tab.Library", com.nuclearunicorn.game.ui.tab, {

	metaphysicsPanel: null,

	render: function(tabContainer){

		this.buttons = [];

		var hasCivil = this.game.science.get("civil");

		//--------------------------------------------------------------------
		var div = dojo.create("div", { style: { float: "right"}}, tabContainer);
		var groupCheckbox = dojo.create("input", {
			id : "toggleResearched",
			type: "checkbox",
			checked: this.game.science.hideResearched,
			style: {
				display: hasCivil ? "" : "none"
			}
		}, div);

		dojo.connect(groupCheckbox, "onclick", this, function(){
			this.game.science.hideResearched = !this.game.science.hideResearched;

			dojo.empty(tabContainer);
			this.render(tabContainer);
		});

		dojo.create("label", { innerHTML: "隐藏已研究的科学", for: "toggleResearched"}, div);
		//---------------------------------------------------------------------

		var table = dojo.create("table", { className: "table", style:{
			width: "100%"
		}}, tabContainer);

		var tr = dojo.create("tr", null, table);

		var tdTop = dojo.create("td", { colspan: 2 },
			dojo.create("tr", null, table));

		this.tdTop = tdTop;


		var tr = dojo.create("tr", null, table)

		var tdLeft = dojo.create("td", null, tr);
		var tdRight = dojo.create("td", null, tr);


		//this.inherited(arguments);


		for (var i = 0; i < this.game.science.techs.length; i++){
			var tech = this.game.science.techs[i];

			var btn = this.createTechBtn(tech);

			btn.updateVisible();
			btn.updateEnabled();

			this.addButton(btn);
			btn.render(tr);
		}


		//------------ metaphysics ----------------
		if (this.game.science.get("metaphysics").researched && this.game.paragonPoints > 0){
			var metaphysicsPanel = new classes.ui.PrestigePanel("Metaphysics");
			metaphysicsPanel.game = this.game;
			
			var content = metaphysicsPanel.render(tabContainer);

			this.metaphysicsPanel = metaphysicsPanel;
		}
	},

	update: function(){
		this.inherited(arguments);

		if (this.metaphysicsPanel){
			this.metaphysicsPanel.update();
		}
	},

	constructor: function(tabName, game){
		var self = this;
		this.game = game;
	},

	createTechBtn: function(tech){
		var self = this;
		var btn = new com.nuclearunicorn.game.ui.TechButton({
			name : tech.title,
			handler: dojo.partial(function(tech, game, btn){
				tech.researched = true;

				if (tech.unlocks && tech.unlocks.length){
					for (var i = tech.unlocks.length - 1; i >= 0; i--) {
						var newTech = btn.getTechByName(tech.unlocks[i]);
						newTech.unlocked = true;
					}
				}

				if (tech.handler){
					tech.handler(game);
				}

			}, tech, self.game),
			prices: tech.prices ? tech.prices : [{
				name:"science",
				val: tech.cost
			}],
			description: tech.description,
			tech: tech.name
		}, this.game);
		return btn;
	}
});
