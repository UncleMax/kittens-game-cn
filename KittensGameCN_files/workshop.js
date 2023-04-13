dojo.declare("classes.managers.WorkshopManager", com.nuclearunicorn.core.TabManager, {

	game: null,

	hideResearched: false,

	upgrades:[
		//--------------------- food upgrades ----------------------
		{
		name: "mineralHoes",
		title: "矿石锄头",
		description: "农民提升 50% 的效率",
		effects: {
			"catnipRatio" : 0.5
		},
		prices:[
			{ name : "science", val: 100 },
			{ name : "minerals", val: 275 }
		],
		unlocked: true,
		researched: false,
		unlocks: ["ironHoes"],
		handler: function(game){
			//do nothing
		}
	},{
		name: "ironHoes",
		title: "铁制锄头",
		description: "农民提升 30% 的效率",
		effects: {
			"catnipRatio" : 0.3
		},
		prices:[
			{ name : "science", val: 200 },
			{ name : "iron", val: 25 }
		],
		unlocked: true,
		researched: false,
		unlocks: [],
		handler: function(game){
			//do nothing
		}
	},
	//--------------------- wood upgrades ----------------------
	{
		name: "mineralAxes",
		title: "矿石斧子",
		description: "樵夫提升 280% 的效率",
		effects: {
			"woodRatio" : 2.8
		},
		prices:[
			{ name : "science", val: 50 },
			{ name : "minerals", val: 250 }
		],
		unlocked: true,
		researched: false,
		unlocks: ["ironAxes"],
		handler: function(game){
			//do nothing
		}
	},{
		name: "ironAxes",
		title: "铁制斧子",
		description: "樵夫提升 200% 的效率",
		effects: {
			"woodRatio" : 2
		},
		prices:[
			{ name : "science", val: 100 },
			{ name : "iron", val: 25 }
		],
		unlocked: true,
		researched: false,
		handler: function(game){
			//do nothing
		}
	},{
		name: "steelAxe",
		title: "钢制斧子",
		description: "非常锋利耐用的斧子。樵夫提升 100% 的效率",
		effects: {
			"woodRatio" : 1
		},
		prices:[
			{ name : "science", val: 10000 },
			{ name : "steel", val: 30 }
		],
		unlocked: false,
		researched: false,
		handler: function(game){
			//do nothing
		}
	},{
		name: "steelSaw",
		title: "钢制锯子",
		description: "伐木场提升 20% 的效率",
		effects: {
			"lumberMillRatio" : 0.2
		},
		prices:[
			{ name : "science", val: 52000 },
			{ name : "steel", val: 750 }
		],
		unlocked: false,
		researched: false,
		handler: function(game){
			game.workshop.get("titaniumSaw").unlocked = true;
		}
	},{
		name: "titaniumSaw",
		title: "钛制锯子",
		description: "伐木场提升 15% 的效率",
		effects: {
			"lumberMillRatio" : 0.15
		},
		prices:[
			{ name : "science", val: 70000 },
			{ name : "titanium", val: 500 }
		],
		unlocked: false,
		researched: false,
		handler: function(game){
			game.workshop.get("alloySaw").unlocked = true;
		}
	},{
		name: "alloySaw",
		title: "合金锯子",
		description: "伐木场提升 15% 的效率",
		effects: {
			"lumberMillRatio" : 0.15
		},
		prices:[
			{ name : "science", val: 85000 },
			{ name : "alloy", val: 75 }
		],
		unlocked: false,
		researched: false,
		handler: function(game){
		}
	},{
		name: "titaniumAxe",
		title: "钛制斧子",
		description: "坚不可摧的斧子。樵夫提升 50% 的效率。",
		effects: {
			"woodRatio" : 0.5
		},
		prices:[
			{ name : "science", val: 38000 },
			{ name : "titanium", val: 10 }
		],
		unlocked: false,
		researched: false,
		handler: function(game){
			//do nothing
		}
	},{
		name: "alloyAxe",
		title: "合金斧子",
		description: "你越使用它，它越锋利。樵夫提升 50% 的效率。",
		effects: {
			"woodRatio" : 0.5
		},
		prices:[
			{ name : "science", val: 70000 },
			{ name : "alloy", val: 25 }
		],
		unlocked: false,
		researched: false,
		handler: function(game){
			//do nothing
		}
	},
	//--------------------- unobtainium stuff --------------------------
	{
		name: "unobtainiumAxe",
		title: "难得素斧子",
		description: "这些斧子确实极难获得！ 樵夫提升 50% 的效率。",
		effects: {
			"woodRatio" : 0.5
		},
		prices:[
			{ name : "science", val: 125000 },
			{ name : "unobtainium", val: 75 }
		],
		unlocked: false,
		researched: false,
		handler: function(game){
			//do nothing
		}
	},
	{
		name: "unobtainiumSaw",
		title: "难得素锯子",
		description: "伐木场提升 25% 的效率",
		effects: {
			"lumberMillRatio" : 0.25
		},
		prices:[
			{ name : "science", val: 145000 },
			{ name : "unobtainium", val: 125 }
		],
		unlocked: false,
		researched: false,
		handler: function(game){
		}
	},
	//--------------------- storage upgrades ----------------------
	{
		name: "stoneBarns",
		title: "扩展谷仓",
		description: "谷仓可以多存储 75% 的木材和铁",
		effects: {
			"barnRatio" : 0.75
		},
		prices:[
			{ name : "science", val: 500 },
			{ name : "wood", val: 1000 },
			{ name : "minerals", val: 750 },
			{ name : "iron", val: 50 }
		],
		unlocked: true,
		researched: false,
		handler: function(game){
		}
	},{
		name: "reinforcedBarns",
		title: "加强谷仓",
		description: "谷仓可以多存储 80% 的木材和铁",
		effects: {
			"barnRatio" : 0.80
		},
		prices:[
			{ name : "science", val: 800 },
			{ name : "beam", val: 25 },
			{ name : "slab", val: 10 },
			{ name : "iron", val: 100 }
		],
		unlocked: true,
		researched: false,
		handler: function(game){
			game.workshop.get("titaniumBarns").unlocked = true;
		}
	},{
		name: "reinforcedWarehouses",
		title: "加强仓库",
		description: "仓库可以多存储 25% 的资源",
		effects: {
			"warehouseRatio" : 0.25
		},
		prices:[
			{ name : "science", val: 15000 },
			{ name : "plate", val: 50 },
			{ name : "steel", val: 50 },
			{ name : "scaffold", val: 25 }
		],
		unlocked: false,
		researched: false,
		handler: function(game){
			game.workshop.get("ironwood").unlocked = true;
		}
	},{
		name: "titaniumBarns",
		title: "钛制谷仓",
		description: "谷仓可以储存 两倍 的资源",
		effects: {
			"barnRatio" : 1
		},
		prices:[
			{ name : "science", val: 60000 },
			{ name : "titanium", val: 25 },
			{ name : "steel",    val: 200 },
			{ name : "scaffold", val: 250 }
		],
		unlocked: false,
		researched: false,
		handler: function(game){
		}
	},{
		name: "alloyBarns",
		title: "合金谷仓",
		description: "谷仓可以储存 两倍 的资源",
		effects: {
			"barnRatio" : 1
		},
		prices:[
			{ name : "science", val: 75000 },
			{ name : "alloy", val: 20 },
			{ name : "plate",    val: 750 }
		],
		unlocked: false,
		researched: false,
		handler: function(game){
		}
	},{
		name: "concreteBarns",
		title: "混凝土谷仓",
		description: "谷仓可以多储存 75% 的资源",
		effects: {
			"barnRatio" : 0.75
		},
		prices:[
			{ name : "science", val: 100000 },
			{ name : "concrate", val: 45 },
			{ name : "titanium",    val: 2000 }
		],
		unlocked: false,
		researched: false,
		handler: function(game){
		}
	},{
		name: "titaniumWarehouses",
		title: "钛制仓库",
		description: "仓库可以多储存 50% 的资源",
		effects: {
			"warehouseRatio" : 0.5
		},
		prices:[
			{ name : "science", val: 70000 },
			{ name : "titanium", val: 50 },
			{ name : "steel",    val: 500 },
			{ name : "scaffold", val: 500 }
		],
		unlocked: false,
		researched: false,
		handler: function(game){
		}
	},{
		name: "alloyWarehouses",
		title: "合金仓库",
		description: "仓库可以多储存 45% 的资源",
		effects: {
			"warehouseRatio" : 0.45
		},
		prices:[
			{ name : "science", val: 90000 },
			{ name : "titanium", val: 750 },
			{ name : "alloy",    val: 50 }
		],
		unlocked: false,
		researched: false,
		handler: function(game){
		}
	},{
		name: "concreteWarehouses",
		title: "混凝土仓库",
		description: "仓库可以多储存 35% 的资源",
		effects: {
			"warehouseRatio" : 0.35
		},
		prices:[
			{ name : "science", val: 100000 },
			{ name : "titanium", val: 1250 },
			{ name : "concrate", val: 35 }
		],
		unlocked: false,
		researched: false,
		handler: function(game){
		}
	},
	//==================== accelerators ==============
	{
		name: "energyRifts",
		title: "能量裂隙",
		description: "加速器现在可以制作次元袋",
		effects: {
		},
		prices:[
			{ name : "science", val: 200000 },
			{ name : "titanium", val: 7500 },
			{ name : "uranium", val: 250 }
		],
		unlocked: false,
		researched: false,
		handler: function(game){
		}
	},{
		name: "stasisChambers",
		title: "停滞之间",
		description: "能量裂隙提升 75% 的效率",
		effects: {
			"acceleratorRatio" : 0.75
		},
		prices:[
			{ name : "science", val: 235000 },
			{ name : "alloy", val: 	 250 },
			{ name : "uranium", val: 2500 },
			{ name : "timeCrystal", val: 5 }
		],
		unlocked: false,
		researched: false,
		handler: function(game){
		}
	},{
		name: "lhc",
		title: "大型强子对撞机",
		description: "每个加速器将给予科研上限提供一个奖励",
		prices:[
			{ name : "science", val: 250000 },
			{ name : "unobtainium", val: 100 },
			{ name : "alloy", val: 150 },
		],
		effects: {
		},
		unlocked: false,
		researched: false,
		handler: function(game){
		}
	},
	//	------------- harbour stuff ------------
	{
		name: "cargoShips",
		title: "货轮",
		description: "每艘船将给予海港容量提供 1% 的奖励",
		effects: {
			"harborRatio" : 0.01
		},
		prices:[
			{ name : "science", val: 55000 },
			{ name : "blueprint", val: 15 }
		],
		unlocked: false,
		researched: false,
		handler: function(game){
		},
		flavor: "它就像一条金枪鱼，不过要大的多"
	},{
		name: "barges",
		title: "驳船",
		description: "港口可以储存更多的煤炭",
		effects: {
			"harborCoalRatio" : 0.5
		},
		prices:[
			{ name : "science", val: 100000 },
			{ name : "titanium", val: 1500 },
			{ name : "blueprint", val: 30 }
		],
		unlocked: false,
		researched: false,
		handler: function(game){
		}
	},{
		name: "reactorVessel",
		title: "反应堆槽",
		description: "每个反应堆提升船只 5% 的潜能 ",
		effects: {
			"shipLimit" : 0.05
		},
		prices:[
			{ name : "science", val: 135000 },
			{ name : "titanium", val: 5000 },
			{ name : "uranium",  val: 125 }
		],
		unlocked: false,
		researched: false,
		handler: function(game){
		}
	},{
		name: "ironwood",
		title: "铁木小屋",
		description: "小屋价格降低 50%",
		effects: {
			"hutPriceRatio" : -0.5
		},
		prices:[
			{ name : "science", val: 30000 },
			{ name : "wood", val: 15000 },
			{ name : "iron", val: 3000 },
		],
		unlocked: false,
		researched: false,
		handler: function(game){
			game.workshop.get("silos").unlocked = true;
		}
	},{
		name: "concreteHuts",
		title: "混凝土小屋",
		description: "小屋价格降低 35%",
		effects: {
			"hutPriceRatio" : -0.35
		},
		prices:[
			{ name : "science", val: 125000 },
			{ name : "concrate", val: 50 },
			{ name : "titanium", val: 3000 },
		],
		unlocked: false,
		researched: false,
		handler: function(game){
		}
	},{
		name: "unobtainiumHuts",
		title: "难得素小屋",
		description: "小屋价格降低 30%",
		effects: {
			"hutPriceRatio" : -0.30
		},
		prices:[
			{ name : "science", val: 200000 },
			{ name : "unobtainium", val: 500 },
			{ name : "titanium", val: 15000 },
		],
		unlocked: false,
		researched: false,
		handler: function(game){
		}
	},
	{
		name: "silos",
		title: "粮仓",
		description: "仓库现在可以储存猫薄荷",
		effects: {
		},
		prices:[
			{ name : "science", val: 50000 },
			{ name : "steel", val: 125 },
			{ name : "blueprint", val: 5 }
		],
		unlocked: false,
		researched: false,
		handler: function(game){
			game.bld.get("warehouse").effects["catnipMax"] = 750;
			game.workshop.get("titaniumWarehouses").unlocked = true;
		}
	},{
		name: "refrigeration",
		title: "冷藏",
		description: "猫薄荷存储上限提升 75%",
		effects: {
			"catnipMaxRatio" : 0.75
		},
		prices:[
			{ name : "science", val: 125000 },
			{ name : "titanium", val: 2500 },
			{ name : "blueprint", val: 15 }
		],
		unlocked: false,
		researched: false,
		handler: function(game){
		}
	},
	//--------------------- hunt upgrades ----------------------
	{
		name: "compositeBow",
		title: "复合弓",
		description: "一个改进版本的弓，永久提升 300% 的喵力产出",
		effects: {
			"manpowerRatio" : 3
		},
		prices:[
			{ name : "science", val: 500 },
			{ name : "iron", val: 100 },
			{ name : "wood", val: 200 }
		],
		unlocked: false,
		researched: false,
		handler: function(game){
			//do nothing
		}
	},{
		name: "crossbow",
		title: "十字弓",
		description: "一个改进版本的弓，永久提升 100% 的喵力产出",
		effects: {
			"manpowerRatio" : 1
		},
		prices:[
			{ name : "science", val: 12000 },
			{ name : "iron", val: 1500 }
		],
		unlocked: false,
		researched: false,
		handler: function(game){
			//do nothing
		}
	},{
		name: "railgun",
		title: "磁轨炮",
		description: "致命的电磁武器。提升 25% 的 喵力产出",
		effects: {
			"manpowerRatio" : 0.25
		},
		prices:[
			{ name : "science", val: 150000 },
			{ name : "titanium", val: 5000 },
			{ name : "blueprint", val: 25 }
		],
		unlocked: false,
		researched: false,
		handler: function(game){
			//do nothing
		}
	},{
		name: "bolas",
		title: "套牛绳",
		description: "由沉重的石头组成的投掷武器. 猎手效率提升至 两 倍",
		effects: {
			"hunterRatio" : 1
		},
		prices:[
			{ name : "science", val: 1000 },
			{ name : "minerals", val: 250 },
			{ name : "wood", val: 50 }
		],
		unlocked: false,
		researched: false,
		handler: function(game){
			//do nothing
		}
	},{
		name: "huntingArmor",
		title: "狩猎护甲",
		description: "猎手效率提升至 四 倍",
		effects: {
			"hunterRatio" : 2
		},
		prices:[
			{ name : "science", val: 2000 },
			{ name : "iron", val: 750 }
		],
		unlocked: false,
		researched: false,
		handler: function(game){
			//do nothing
		}
	},{
		name: "steelArmor",
		title: "钢制盔甲",
		description: "猎手效率小幅提升",
		effects: {
			"hunterRatio" : 0.5
		},
		prices:[
			{ name : "science", val: 10000 },
			{ name : "steel", val: 50 }
		],
		unlocked: false,
		researched: false,
		handler: function(game){
			//do nothing
		}
	},{
		name: "alloyArmor",
		title: "合金盔甲",
		description: "猎手效率小幅提升",
		effects: {
			"hunterRatio" : 0.5
		},
		prices:[
			{ name : "science", val: 50000 },
			{ name : "alloy", val: 25 }
		],
		unlocked: false,
		researched: false,
		handler: function(game){
			//do nothing
		}
	},{
		name: "nanosuits",
		title: "纳米装甲",
		description: "最大喵力！",
		effects: {
			"hunterRatio" : 0.5
		},
		prices:[
			{ name : "science", val: 185000 },
			{ name : "alloy", val: 250 }
		],
		unlocked: false,
		researched: false,
		handler: function(game){
			//do nothing
		}
	},{
		name: "caravanserai",
		title: "商队驿站",
		description: "你的贸易队有非常小的几率保持全速前进",
		effects: {
			"standingRatio" : 0.35	//0.35% per tradepost
		},
		prices:[
			{ name : "science", val: 25000 },
			{ name : "ivory", val: 10000 },
			{ name : "gold", val: 250 }
		],
		unlocked: false,
		researched: false,
		handler: function(game){
			//do nothing
		},
		flavor: "现在招聘:可爱的小猫"
	},
	//--------------------- stuff ----------------------
	{
		name: "advancedRefinement",
		title: "猫薄荷改良",
		description: "猫薄荷提纯产量提升至 两 倍",
		effects: {
		},
		prices:[
			{ name : "science", val: 500 },
			{ name : "catnip", val: 5000 }
		],
		unlocked: false,
		researched: false,
		handler: function(game){
			game.workshop.getCraft("wood").prices = [{name: "catnip", val: 50}];
		},
		flavor: "这里充满了乐趣和游戏，直到有人被伏击"
	},{
		name: "goldOre",
		title: "金矿石",
		description: "矿石以极小的比例被冶炼成黄金",
		effects: {
		},
		prices:[
			{ name : "minerals", val: 800 },
			{ name : "iron", 	 val: 100 },
			{ name : "science",  val: 1000 }
		],
		handler: function(game){
			game.workshop.get("geodesy").unlocked = true;
		},
		unlocked: false,
		researched: false,
		flavor: "如此闪耀！"
	},{
		name: "geodesy",
		title: "测地学 ",
		description: "地质学家变得更有效率，并且能够找到黄金。",
		effects: {
		},
		prices:[
			{ name : "titanium", val: 250 },
			{ name : "starchart", val: 500 },
			{ name : "science",  val: 90000 }
		],
		unlocked: false,
		researched: false,
		handler: function(game){
			var gJob = game.village.getJob("geologist");
			gJob.modifiers["coal"] += 0.0075;	//instead of 0.015
			gJob.modifiers["gold"] = 0.0008;
			if (game.workshop.get("miningDrill").researched){
				gJob.modifiers["gold"] += 0.0005;
			}
			if (game.workshop.get("unobtainiumDrill").researched){
				gJob.modifiers["gold"] += 0.0005;
			}
		},
		flavor: "淘金的喵星人！"
	},
	//TODO: thouse two upgrades may be buggy like hell, we should really really revisit handler logic
	{
		name: "miningDrill",
		title: "采矿钻",
		description: "地质学家变得更有效率",
		effects: {
		},
		prices:[
			{ name : "titanium", val: 1750 },
			{ name : "steel", 	 val: 750 },
			{ name : "science",  val: 100000 }
		],
		unlocked: false,
		researched: false,
		handler: function(game){
			var gJob = game.village.getJob("geologist");
			gJob.modifiers["coal"] += 0.010;
			if (game.workshop.get("geodesy").researched){
				gJob.modifiers["gold"] += 0.0005;
			}
		}
	},{
		name: "unobtainiumDrill",
		title: "难得素钻",
		description: "地质学家变得更有效率",
		effects: {
		},
		prices:[
			{ name : "unobtainium", val: 250 },
			{ name : "alloy", 	 	val: 1250 },
			{ name : "science",  	val: 250000 }
		],
		unlocked: false,
		researched: false,
		handler: function(game){
			var gJob = game.village.getJob("geologist");
			gJob.modifiers["coal"] += 0.015;
			if (game.workshop.get("geodesy").researched){
				gJob.modifiers["gold"] += 0.0005;
			}
		}
	},
	//--------------------- coal upgrades ----------------------
	{
		name: "coalFurnace",
		title: "煤炉",
		description: "煤炉燃烧木材制造煤炭",
		effects: {
		},
		prices:[
			{ name : "minerals", val: 5000 },
			{ name : "iron", 	 val: 2000 },
			{ name : "beam", 	 val: 35 },
			{ name : "science",  val: 5000 }
		],
		unlocked: false,
		researched: false,
		flavor: "如此温暖……如此困倦……"
	},{
		name: "deepMining",
		title: "深井开采",
		description: "矿山将产出煤炭",
		effects: {
		},
		prices:[
			{ name : "iron", 	 val: 1200 },
			{ name : "beam", 	 val: 50 },
			{ name : "science",  val: 5000 }
		],
		unlocked: false,
		researched: false
	},{
		name: "pyrolysis",
		title: "高温分解",
		description: "煤炭产量提升 20%",
		effects: {
			"coalRatio": 0.2	//may be buggy
		},
		prices:[
			{ name : "compedium", 	 val: 5 },
			{ name : "science",  val: 35000 }
		],
		unlocked: false,
		researched: false
	},{
		name: "electrolyticSmelting",
		title: "电解熔炼",
		description: "熔炉产量变为 两 倍",
		effects: {
			"smelterRatio": 0.95
		},
		prices:[
			{ name : "titanium", val: 2000 },
			{ name : "science",  val: 100000 }
		],
		unlocked: false,
		researched: false
	},{
		name: "oxidation",
		title: "氧化反应",
		description: "煅烧炉产生 两 倍的钢铁并且产生 四 倍的钛",
		effects: {
			"calcinerRatio": 0.95
		},
		prices:[
			{ name : "steel", val: 5000 },
			{ name : "science",  val: 100000 }
		],
		unlocked: false,
		researched: false
	},{
		name: "steelPlants",
		title: "钢铁工厂",
		description: "10% 的煅烧炉铁锭输出将转化为钢铁",
		effects: {
			"calcinerSteelRatio" : 0.1
		},
		prices:[
			{ name : "titanium", val: 3500 },
			{ name : "gear", 	 val: 750 },
			{ name : "science",  val: 140000 }
		],
		unlocked: false,
		researched: false,
		handler: function(game){

		}
	},{
		name: "rotaryKiln",
		title: "回转炉",
		description: "煅烧炉的铁产量增加 75% 并且产生 三 倍的钛",
		effects: {
			"calcinerRatio": 0.75
		},
		prices:[
			{ name : "titanium", val: 5000 },
			{ name : "gear", 	 val: 500 },
			{ name : "science",  val: 145000 }
		],
		unlocked: false,
		researched: false
	},{
		name: "nuclearSmelters",
		title: "核熔炉",
		description: "熔炉现在可以冶炼钛了",
		effects: {
		},
		prices:[
			{ name : "uranium", val: 250 },
			{ name : "science",  val: 165000 }
		],
		unlocked: false,
		researched: false
	},
	//--------------------- automation upgrades ----------------------
	{
		name: "printingPress",
		title: "印刷机",
		description: "蒸汽工坊可以自动打印手稿",
		effects: {
		},
		prices:[
			{ name : "gear", 	 val: 45 },
			{ name : "science",  val: 7500 }
		],
		unlocked: false,
		researched: false
	},{
		name: "offsetPress",
		title: "胶印机",
		description: "印刷机效率变成 四 倍",
		effects: {
		},
		prices:[
			{ name : "gear", 	 val: 250 },
			{ name : "oil", 	 val: 15000 },
			{ name : "science",  val: 100000 }
		],
		unlocked: false,
		researched: false
	},{
		name: "factoryAutomation",
		title: "工坊自动化",
		description: "当材料到达储存上限时，工坊将会自动转化一部分资源",//Better name than "materials"? "Craftable tools" doesn't make sense either. ~Ædx
		effects: {
		},
		prices:[
			{ name : "gear", 	 val: 25 },
			{ name : "science",  val: 10000 }
		],
		unlocked: false,
		researched: false,
		flavor: "包括自动给矿机"
	},{
		name: "advancedAutomation",
		title: "高级自动化",
		description: "降低蒸汽工坊的维修周期 50%",
		effects: {
		},
		prices:[
			{ name : "gear", 	 val: 75 },
			{ name : "blueprint",  val: 25 },
			{ name : "science",  val: 100000 }
		],
		unlocked: false,
		researched: false
	},{
		name: "pneumaticPress",
		title: "气动压力机",
		description: "工坊将能自动将钢铁转化成板材",
		effects: {
		},
		prices:[
			{ name : "gear", 	 val: 30 },
			{ name : "blueprint",  val: 5 },
			{ name : "science",  val: 20000 }
		],
		unlocked: false,
		researched: false
	},{
		name: "combustionEngine",
		title: "高压引擎",
		description: "降低蒸汽工坊的煤炭消耗 20%",
		effects: {
			"coalRatioGlobal" : 0.2
		},
		prices:[
			{ name : "gear", 	 val: 25 },
			{ name : "blueprint",  val: 5 },
			{ name : "science",  val: 20000 },
		],
		unlocked: false,
		researched: false
	},{
		name: "fuelInjectors",
		title: "燃料喷射器",
		description: "降低蒸汽工坊的煤炭消耗 20%",
		effects: {
			"coalRatioGlobal" : 0.2
		},
		prices:[
			{ name : "gear", 	 val: 250 },
			{ name : "oil", 	 val: 20000 },
			{ name : "science",  val: 100000 }
		],
		unlocked: false,
		researched: false
	},
	//--------------------- science upgrades ----------------------
	{
		name: "celestialMechanics",
		title: "天体力学",
		description: "天上的活动和流星将产生附加科技",
		effects: {},
		prices:[
			{ name : "science",  val: 250 },
		],
		unlocked: false,
		researched: false,
		handler: function(game){
		}
	},{
		name: "astrolabe",
		title: "天体观测仪",
		description: "改善天文台的效率 50%",
		effects: {},
		prices:[
			{ name : "titanium", val: 5 },
			{ name : "starchart",  val: 75 },
			{ name : "science",  val: 25000 },
		],
		unlocked: false,
		researched: false,
		handler: function(game){
		}
	},
	{
		name: "titaniumMirrors",
		title: "钛金属反射镜",
		description: "改进望远镜的反光片.\n每个天文台将给予图书馆加成 2%",
		effects: {
			"libraryRatio" : 0.02
		},
		prices:[
			{ name : "titanium", val: 15 },
			{ name : "starchart",  val: 20 },
			{ name : "science",  val: 20000 },
		],
		unlocked: false,
		researched: false,
		flavor: "Did that light spot just move?"
	},
	{
		name: "unobtainiumReflectors",
		title: "难得素反射镜",
		description: "改进望远镜的反光片.\n每个天文台将给予图书馆加成 2%",
		effects: {
			"libraryRatio" : 0.02
		},
		prices:[
			{ name : "unobtainium", val: 75 },
			{ name : "starchart",  val: 750 },
			{ name : "science",  val: 250000 },
		],
		unlocked: false,
		researched: false
	},
	//---------------------- oil ---------------
	{
		name: "pumpjack",
		title: "抽油机",
		description: "改善油井效果 45%",
		effects: {
			"oilRatio" : 0.45
		},
		prices:[
			{ name : "titanium", val: 250 },
			{ name : "gear", 	 val: 125 },
			{ name : "science",  val: 100000 }
		],
		unlocked: false,
		researched: false,
		handler: function(game){

		}
	},{
		name: "biofuel",
		title: "生物燃料制作",
		description: "生物实验能沟将猫薄荷转化为石油",
		effects: {
		},
		prices:[
			{ name : "titanium", val: 1250 },
			{ name : "science",  val: 150000 }
		],
		unlocked: false,
		researched: false,
		handler: function(game){

		}
	},
	//------------------- blueprints ----------------
	{
		name: "cadSystems",
		title: "CAD系统",
		description: "所有的科技建筑将改善蓝图制造效果",
		effects: {
			"blueprintCraftRatio" : 0.01
		},
		prices:[
			{ name : "titanium", val: 750 },
			{ name : "science",  val: 125000 }
		],
		unlocked: false,
		researched: false,
		handler: function(game){

		}
	},{
		name: "seti",
		title: "搜寻地外文明计划",
		description: "一个巨大的电子望远镜阵列. 计算机控制天文活动，全自动并且非常安静",
		effects: {
		},
		prices:[
			{ name : "titanium", val: 250 },
			{ name : "science",  val: 125000 }
		],
		unlocked: false,
		researched: false,
		handler: function(game){

		}
	},{
		name: "augumentation",
		title: "强化",
		description: "喵星人们的技能效果增强 25%",
		effects: {
			"skillMultiplier" : 0.25
		},
		prices:[
			{ name : "titanium", val: 5000 },
			{ name : "uranium",  val: 50 },
			{ name : "science",  val: 150000 }
		],
		unlocked: false,
		researched: false,
		handler: function(game){

		}
	},{
		name: "enrichedUranium",
		title: "浓缩铀",
		description: "减少铀反应器的消耗 25%",
		effects: {
			"uraniumRatio" : 0.25
		},
		prices:[
			{ name : "titanium", val: 7500 },
			{ name : "uranium",  val: 150 },
			{ name : "science",  val: 175000 }
		],
		unlocked: false,
		researched: false,
		handler: function(game){

		}
	},{
		name: "oilRefinery",
		title: "炼油厂",
		description: "改善油井的产量 35%",
		effects: {
			"oilRatio" : 0.35
		},
		prices:[
			{ name : "titanium", val: 1250 },
			{ name : "gear", 	 val: 500 },
			{ name : "science",  val: 125000 }
		],
		unlocked: false,
		researched: false,
		handler: function(game){

		}
	},
	//------------------- starcharts / space ----------------
	{
		name: "hubbleTelescope",
		title: "哈勃太空望远镜",
		description: "提升卫星 30% 的有效性",
		effects: {
			"starchartGlobalRatio" : 0.30
		},
		prices:[
			{ name : "alloy", 	 val: 1250 },
			{ name : "oil", 	 val: 50000 },
			{ name : "science",  val: 250000 }
		],
		unlocked: false,
		researched: false,
		handler: function(game){

		}
	}
	],

	//=============================================================
	//					     CRAFT RECIPES
	//=============================================================

	crafts:[{
		name: "wood",
		title: "精炼猫薄荷",
		description: "木头是一块坚固的猫薄荷。处理困难, 但却是很棒的建筑材料。",
		prices:[
			{name: "catnip", val: 100}
		],
		unlocked: true,
		ignoreBonuses: true,
	},{
		name: "beam",
		title: "木制横梁",
		description: "利用木材制成的简单支撑结构. 需要高级建筑。",
		prices:[
			{name: "wood", val: 175}
		],
		unlocked: true
	},{
		name: "slab",
		title: "石板",
		description: "一块由矿物组成的小板. 需要高级建筑。",
		prices:[
			{name: "minerals", val: 250}
		],
		unlocked: true
	},{
		name: "concrate",
		title: "混凝土",
		description: "一块钢筋混凝土。",
		prices:[
			{name: "slab", val: 2500},
			{name: "steel", val: 25}
		],
		unlocked: false
	},{
		name: "plate",
		title: "金属板",
		description: "一个金属板. 需要高级建筑。",
		prices:[
			{name: "iron", val: 125}
		],
		unlocked: true
	},{
		name: "steel",
		title: "钢铁",
		description: "用铁和碳熔炼成的耐用金属. 需要建造齿轮和复杂的机械。",
		prices:[
			{name: "iron", val: 100},
			{name: "coal", val: 100}
		],
		unlocked: false
	},{
		name: "alloy",
		title: "合金",
		description: "钢铁制成的耐用合金, 用铁和钛制成. 需要先进建筑和升级。",
		prices:[
			{name: "steel", val: 75 },
			{name: "titanium", val: 10}
		],
		unlocked: false
	},{
		name: "gear",
		title: "齿轮",
		description: "自动化结构不可或缺的部分。",
		prices:[
			{name: "steel", val: 15}
		],
		unlocked: true
	},{
		name: "parchment",
		title: "羊皮纸",
		description: "一个用皮革制作的书写材料, 需要文化建筑。",
		prices:[
			{name: "furs", val: 175}
		],
		unlocked: false
	},
	{
		name: "manuscript",
		title: "手稿",
		description: "技术进步所需要的书面文件。",
		prices:[
			{name: "parchment", val: 25},
			{name: "culture", val: 400}
		],
		unlocked: true
	},{
		name: "compedium",
		title: "摘要",
		description: "记载着所有猫类现代知识\n每个摘要将给予你 +10 最大科技",
		prices:[
			{name: "manuscript", val: 50},
			{name: "science", val: 10000}
		],
		unlocked: false
	},{
		name: "blueprint",
		title: "蓝图",
		description: "画着蓝色线条的奇怪的纸。",
		prices:[
			{name: "compedium", val: 25},
			{name: "science", val: 25000}
		],
		unlocked: false
	},
	{
		name: "scaffold",
		title: "脚手架",
		description: "大型的木制梁结构，建造非常复杂的建筑所需要的工具",
		prices:[
			{ name: "beam", val: 50 }
		],
		unlocked: true
	},{
		name: "ship",
		title: "贸易商船",
		description: "商船能用来发现新的文明. 可以改善某些稀有资源的获得几率",
		prices:[
			{ name: "scaffold", val: 100 },
			{ name: "plate",    val: 150 },
			{ name: "starchart", val: 25 }
		],
		unlocked: false
	},{
		name: "megalith",
		title: "巨石碑",
		description: "一块巨大的,可以用来建造巨大的结构的石碑",
		prices:[
			{ name: "slab", val: 75 },
			{ name: "beam", val: 35 },
			{ name: "plate", val: 5 }
		],
		unlocked: true
	}],

	effectsBase: {
		"scienceMax" : 0
	},
	
	metaCache: null,

	constructor: function(game){
		this.game = game;

		this.registerMeta(this.upgrades, { getEffect : function(upgrade, name){
			if (upgrade.researched){
				return upgrade.effects ? upgrade.effects[name] : 0;
			}
		}});
		
		this.metaCache = {};
	},

	get: function(upgradeName){
		var upgrade = this.metaCache[upgradeName];
		if (upgrade){
			return upgrade;
		}
		
		for (var i = this.upgrades.length - 1; i >= 0; i--) {
			if (this.upgrades[i].name === upgradeName){
				this.metaCache[upgrade] = this.upgrades[i];
				return this.upgrades[i];
			}
		}
		console.error("Failed to get upgrade for id '"+upgradeName+"'");
		return null;
	},

	getCraft: function(craftName){
		for (var i = this.crafts.length - 1; i >= 0; i--) {
			if (this.crafts[i].name === craftName){
				return this.crafts[i];
			}
		}
		console.error("Failed to get craft for id '"+craftName+"'");
		return null;
	},

	save: function(saveData){

		var upgrades = this.filterMetadata(this.upgrades, ["name", "unlocked", "researched"]);
		var crafts = this.filterMetadata(this.crafts, ["name", "unlocked"]);

		saveData.workshop = {
			upgrades: upgrades,
			crafts:   crafts
		}
		saveData.workshop.hideResearched = this.hideResearched;
	},

	load: function(saveData){
		if (saveData.workshop){
			this.hideResearched = saveData.workshop.hideResearched;

			if (saveData.workshop.upgrades && saveData.workshop.upgrades.length){
				for (var i = saveData.workshop.upgrades.length - 1; i >= 0; i--) {
					var savedUpgrade = saveData.workshop.upgrades[i];

					if (savedUpgrade != null){
						var upgrade = this.game.workshop.get(savedUpgrade.name);

						if (upgrade){
							upgrade.unlocked = savedUpgrade.unlocked;
							upgrade.researched = savedUpgrade.researched;

							if (upgrade.researched && upgrade.handler){
								upgrade.handler(this.game);	//just in case update workshop upgrade effects
							}
						}
					}
				}
			}
			//same for craft recipes

			if (saveData.workshop.crafts && saveData.workshop.crafts.length){
				for (var i = saveData.workshop.crafts.length - 1; i >= 0; i--) {
					var savedCraft = saveData.workshop.crafts[i];

					if (savedCraft != null){
						var craft = this.game.workshop.getCraft(savedCraft.name);
						if (craft && !craft.unlocked){					// a little hack to make auto-unlockable recipes work with old saves
							craft.unlocked = savedCraft.unlocked;
						}
					}
				}
			}
		}

		this.invalidateCachedEffects();
	},

	/**
	 * Returns a total effect value per buildings.
	 *
	 * For example, if you have N buildings giving K effect,
	 * total value will be N*K
	 *
	 */
	getEffect: function(name){
		var totalEffect = 0;

		if (this.effectsBase[name]){
			totalEffect += this.effectsBase[name];
		}
		return totalEffect + this.getEffectCached(name);
	},


	craft: function (res, amt){

		var craft = this.getCraft(res);
		var craftRatio = this.game.getResCraftRatio({name:res});

		var craftAmt = amt * (1 + craftRatio);
		var prices = dojo.clone(craft.prices);

		for (var i = prices.length - 1; i >= 0; i--) {
			prices[i].val *= amt;
		}


		if (this.game.resPool.hasRes(prices)){
			this.game.resPool.payPrices(prices);
			this.game.resPool.get(res).value += craftAmt;
		}else{
			console.log("没有足够的资源", prices);
		}
	},

	//Crafts maximum possible amount for given recipe name
	craftAll: function(craftName){

		var recipe = this.getCraft(craftName);

		var minAmt = Number.MAX_VALUE;
		for (var j = recipe.prices.length - 1; j >= 0; j--) {
			var totalRes = this.game.resPool.get(recipe.prices[j].name).value;
			var allAmt = Math.floor(totalRes / recipe.prices[j].val);
			if (allAmt < minAmt){
				minAmt = allAmt;
			}
		}

		if (minAmt > 0 && minAmt < Number.MAX_VALUE){
			var craftRatio = this.game.getResCraftRatio({name:craftName});
			var bonus = minAmt * craftRatio;
			var craftTitle = (recipe.name=='wood')? '木头':recipe.title;
			this.game.msg( "+" + this.game.getDisplayValueExt(minAmt + bonus) + " " + craftTitle + " 被制作");
			this.craft(craftName, minAmt);
		}
	},

	update: function(){
		this.effectsBase["scienceMax"] = Math.floor(this.game.resPool.get("compedium").value * 10);
	}
});

dojo.declare("com.nuclearunicorn.game.ui.UpgradeButton", com.nuclearunicorn.game.ui.ButtonModern, {
	upgradeName: null,

	constructor: function(opts, game){
		this.upgradeName = opts.upgrade;
	},

	getUpgrade: function(){
		return this.getUpgradeByName(this.upgradeName);
	},

	getUpgradeByName: function(name){
		return this.game.workshop.get(name);
	},

	updateEnabled: function(){
		this.inherited(arguments);

		var upgrade = this.getUpgrade();
		if (upgrade.researched/* || !tech.unlocked*/){
			this.setEnabled(false);
		}
	},

	getName: function(){
		var upgrade = this.getUpgrade();
		if (!upgrade.researched){
			return this.name;
		} else {
			return this.name + " (完成)";
		}
	},

	updateVisible: function(){
		var upgrade = this.getUpgrade();
		if (!upgrade.unlocked){
			this.setVisible(false);
		}else{
			this.setVisible(true);
		}

		if (upgrade.researched && this.game.workshop.hideResearched){
			this.setVisible(false);
		}
	},

	getTooltipHTML: function(){

		var upgrade = this.getUpgrade();
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
			innerHTML: this.description,
			style: {
				textAlign: "center",
				width: "100%",
				borderBottom: "1px solid gray",
				paddingBottom: "4px",
				fontSize: "15px",
				color: "gray"
		}}, tooltip);

		//--------------- prices ----------------
		this.renderPrices(tooltip);
		//---------- effects-------------

		// dojo.create("div", {
		// 	innerHTML: "效果:",
		// 	style: {
		// 		textAlign: "center",
		// 		width: "100%",
		// 		borderBottom: "1px solid gray",
		// 		paddingBottom: "4px",
		// 		marginBottom: "8px"
		// }}, tooltip);

		//-----------------------------------------
		var bld = this.getUpgrade();
		this.renderEffects(tooltip, bld.effects);
		// for (effectName in upgrade.effects){
		// 	var nameSpan = dojo.create("div", { innerHTML: effectName + ": " + this.game.getDisplayValueExt(upgrade.effects[effectName]),
		// 		style: {
		// 			float: "left",
		// 			fontSize: "14px",
		// 			color: "gray",
		// 			clear: "both"
		// 	}}, tooltip );
		// }

		dojo.create("div", { style: { minHeight:"20px"} }, tooltip);

		//-------------- flavor stuff -------------

		dojo.create("div", {
			innerHTML: upgrade.flavor || "flavor text",
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

dojo.declare("com.nuclearunicorn.game.ui.CraftButton", com.nuclearunicorn.game.ui.ButtonModern, {
	craftName: null,

	constructor: function(opts, game){
		this.craftName = opts.craft;
	},

	onClick: function(){
		this.animate();
		this.handler(this);
	},

	updateVisible: function(){
		var craft = this.game.workshop.getCraft(this.craftName);

		if (craft.unlocked){	//TBD
			this.setVisible(true);
		}else{
			this.setVisible(false);
		}
	},

	getTooltipHTML: function(btn){

		var tooltip = dojo.create("div", { style: {
			width: "200px",
			minHeight:"50px"
		}}, null);

		dojo.create("div", {
			innerHTML: this.getName(),
			style: {
				textAlign: "center",
				width: "100%",
				borderBottom: "1px solid gray",
				paddingBottom: "4px"
		}}, tooltip);

		dojo.create("div", {
			innerHTML: this.description,
			style: {
				textAlign: "center",
				width: "100%",
				borderBottom: "1px solid gray",
				paddingBottom: "4px",
				fontSize: "15px",
				color: "gray"
		}}, tooltip);

		this.renderPrices(tooltip, true);	//simple prices

		return tooltip.outerHTML;
	 }
});

dojo.declare("com.nuclearunicorn.game.ui.tab.Workshop", com.nuclearunicorn.game.ui.tab, {

	craftBtns: null,

	resTd: null,

	constructor: function(tabName, game){
		var self = this;
		this.game = game;

		this.craftBtns = [];

	},

	render: function(tabContainer){

		this.craftBtns = [];
		this.buttons = [];

		//--------------------------------------------------------------------
		var divCombobox = dojo.create("div", {style: { height: "20px"}} , tabContainer);
		var div = dojo.create("div", { style: { float: "right"}}, divCombobox);

		var groupCheckbox = dojo.create("input", {
			id: "toggleResearched",
			type: "checkbox",
			checked: this.game.workshop.hideResearched
		}, div);

		dojo.connect(groupCheckbox, "onclick", this, function(){
			this.game.workshop.hideResearched = !this.game.workshop.hideResearched;

			dojo.empty(tabContainer);
			this.render(tabContainer);
		});

		dojo.create("label", { innerHTML: "隐藏已研究的升级", for: "toggleResearched"}, div);
		//---------------------------------------------------------------------

		var upgradePanel = new com.nuclearunicorn.game.ui.Panel("升级", this.game.workshop);
		var content = upgradePanel.render(tabContainer);

		for (var i = 0; i < this.game.workshop.upgrades.length; i++){
			var uprgade = this.game.workshop.upgrades[i];

			var btn = this.createBtn(uprgade);

			btn.updateEnabled();
			btn.updateVisible();

			this.addButton(btn);
			btn.render(content);
		}

		//------------------------------------------

		var craftPanel = new com.nuclearunicorn.game.ui.Panel("制作", this.game.workshop);
		var content = craftPanel.render(tabContainer);

		var table = dojo.create("table", {}, content);
		var tr = dojo.create("tr", {}, table);

		//buttons go there
		var td = dojo.create("td", {}, table);

		var self = this;
		var crafts = this.game.workshop.crafts;
		for (var i = 0; i < crafts.length; i++ ){
			var craft =  crafts[i];
			var craftBtn = new com.nuclearunicorn.game.ui.CraftButton({
				name: craft.title,
				description: craft.description,
				craft: craft.name,
				prices: craft.prices,
				handler: dojo.partial(function(craft, btn){
					btn.game.workshop.craft(craft.name, 1);
				}, craft)
			}, this.game);

			craftBtn.render(td);

			this.craftBtns.push(craftBtn);
		}

		//resources go there
		var td = dojo.create("td", { style: {paddingLeft: "50px"}}, table);
		this.resTd = td;
		this.renderResources(this.resTd);

		//----------------
		if (!this.game.science.get("construction").researched){
			craftPanel.setVisible(false);
		}
	},

	renderResources: function(container){

		dojo.empty(container);

		dojo.create("span", { innerHTML: "效果:" },container);

		var table = dojo.create("table", { style: {
			paddingTop: "20px"
		}}, container);

		var resources = this.game.resPool.resources;
		for (var i = 0; i < resources.length; i++){
			var res = resources[i];

			if (res.craftable && res.value){
				var tr = dojo.create("tr", {}, table);

				var td = dojo.create("td", { innerHTML: res.title || res.name + ":" }, tr);
				var td = dojo.create("td", { innerHTML: this.game.getDisplayValueExt(res.value) }, tr);
			}
		}
	},

	createBtn: function(upgrade){
		var self = this;
		var btn = new com.nuclearunicorn.game.ui.UpgradeButton({
			name : upgrade.title,
			handler: function(btn){
				upgrade.researched = true;

				if (upgrade.handler){
					upgrade.handler(self.game);
				}
			},
			prices: upgrade.prices,
			description: upgrade.description,
			upgrade: upgrade.name
		}, this.game);
		return btn;
	},

	update: function(){
		this.inherited(arguments);

		for (var i = this.craftBtns.length - 1; i >= 0; i--) {
			this.craftBtns[i].update();
		}

		if (this.resTd){
			this.renderResources(this.resTd);
		}
	}
});
