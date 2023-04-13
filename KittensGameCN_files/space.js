/**
 * Behold the bringer of light!
 */
dojo.declare("classes.managers.SpaceManager", com.nuclearunicorn.core.TabManager, {

	/*
	 * Planets and celestial bodies from left to right:
	 *
	 * Charon, Umbra (black hole), Yarn (terraformable?), Helios (Sun), Cath, Redmoon (Cath satellite), Dune, Piscine, Terminus (ice giant), Kairo (dwarf planet)
	 *
	 */

	game: null,

	programs: [{
		name: "orbitalLaunch",
		title: "冲出轨道",
		description: "发射一枚火箭发射到太空。",
		researched: false,
		unlocked: true,
		prices: [
			{name: "starchart", val: 250},
			{name: "manpower", val: 5000},
			{name: "science", val: 100000},
			{name: "oil", val: 10000},
			{name: "rocket", val: 1}
		],
		chance: 90,	//success chance in %
		handler: function(game, self){
			game.space.getProgram("sattelite").unlocked = true;
			game.space.getProgram("spaceStation").unlocked = true;
			game.space.getProgram("spaceElevator").unlocked = true;
			game.space.getProgram("moonMission").unlocked = true;
		}
	},{
		//===================================================
		//		TODO: move this to the engineeering section
		//===================================================
		name: "spaceElevator",
		title: "太空电梯",
		description: "每个太空电梯将使任务石油要求降低 5%",
		researched: false,
		unlocked: false,
		upgradable:true,
		priceRatio: 1.15,
		prices: [
			{name: "titanium", val: 12000},
			{name: "science", val: 125000},
			{name: "unobtainium", val: 75},
		],
		requiredTech: ["orbitalEngineering", "nanotechnology"],
		val: 0,
		chance: 100,	//see comment above
		handler: function(game, self){
		},
		effects: {
			"oilReductionRatio": 0.05,
		}
	},{
		name: "sattelite",
		title: "部署卫星",
		description: "部署一个卫星。卫星将会提高你的天文台和星图产出效率 5%",
		unlocked: false,
		prices: [
			{name: "starchart", val: 325},
			{name: "titanium", val: 2500},
			{name: "science", val: 125000},
			{name: "oil", val: 10000},
			{name: "rocket", val: 1}
		],
		chance: 80,
		priceRatio: 1.08,
		requiredTech: ["sattelites"],
		val: 0,
		upgradable: true,
		handler: function(game, self){
		},
		effects: {
			"observatoryRatio": 0.05,
			"starchartPerTickBase": 0.001
		}
	},{
		name: "spaceStation",
		title: "部署空间站",
		description: "部署一个空间站。每个空间站可以驻留2名宇航员、生成科研点数并提供一个存储空间",
		unlocked: false,
		prices: [
			{name: "starchart", val: 425},
			{name: "alloy", 	val: 750},
			{name: "science", val: 150000},
			{name: "oil", val: 30000},
			{name: "rocket", val: 1}
		],
		chance: 90,
		priceRatio: 1.12,
		requiredTech: ["orbitalEngineering"],
		val: 0,
		upgradable: true,
		handler: function(game, self){
		},
		effects: {
			"scienceRatio": 0.5,
			"maxKittens": 2
		}
	},{
		name: "moonMission",
		title: "探索月球",
		description: "向红月发射一枚火箭,探索神圣的地球卫星",
		unlocked: false,
		researched: false,
		prices: [
			{name: "starchart", val: 500},
			{name: "titanium", val: 5000},
			{name: "science", val: 125000},
			{name: "oil", val: 40000},
			{name: "rocket", val: 1}
		],
		chance: 75,
		upgradable: false,
		handler: function(game, self){
			game.space.getProgram("moonBase").unlocked = true;
			game.space.getProgram("moonOutpost").unlocked = true;
			game.space.getProgram("duneMission").unlocked = true;
			game.space.getProgram("piscineMission").unlocked = true;
		}
	},{
		name: "moonOutpost",
		title: "殖民月球",
		description: "在红月前哨站部署一个核动力矿井",
		unlocked: false,
		fuel: 50000,
		priceRatio: 1.12,
		prices: [
			{name: "starchart", val: 650},
			{name: "uranium",  val: 500},
			{name: "alloy",    val: 750},
			{name: "concrate", val: 150},
			{name: "science", val: 100000},
			{name: "oil", val: 50000},
			{name: "rocket", val: 1}
		],
		chance: 90,

		upgradable: true,
		togglable: 	true,
		tunable: 	true,

		handler: function(game, self){
			//game.workshop.get("unobtainiumAxe").unlocked = true;
			//game.workshop.get("unobtainiumSaw").unlocked = true;
		},
		val:  0,
		on:	  0,
		effects: {
			"uraniumPerTick": -0.35,
			"unobtainiumPerTick": 0.007
		},
		action: function(game, self){

			//TODO: move to resPool.convert(a, b)
			var uranium = game.resPool.get("uranium");
			if (uranium.value >= -self.effects["uraniumPerTick"] * self.on){
				uranium.value += self.effects["uraniumPerTick"] * self.on;
				game.resPool.get("unobtainium").value += self.effects["unobtainiumPerTick"] * self.on;
			}
		}
	},{
		name: "moonBase",
		title: "月球基地",
		description: "在红月表面建立一个基地",
		unlocked: false,
		researched: false,
		priceRatio: 1.12,
		prices: [
			{name: "starchart", val: 700},
			{name: "titanium", val: 9500},
			{name: "concrate", val: 250},
			{name: "science", val: 100000},
			{name: "unobtainium", val: 50},
			{name: "oil", val: 65000},
			{name: "rocket", val: 1}
		],
		chance: 90,
		effects: {
			"catnipMax" 	: 45000,
			"woodMax"		: 25000,
			"mineralsMax"	: 30000,
			"ironMax"		: 9000,
			"coalMax"		: 3500,
			"goldMax"		: 500,
			"titaniumMax"	: 1250,
			"oilMax"		: 3500,
			"unobtainiumMax": 150
		},
		upgradable: true,
		togglable: 	false,
		tunable: 	false,
		val: 0,
		handler: function(game, self){
		}
	},{
		name: "duneMission",
		title: "探索沙丘星",
		description: "沙丘星是一个巨大而没有生命的行星，星球表面被沙子和火山岩覆盖。",
		unlocked: false,
		researched: false,
		prices: [
			{name: "starchart", val: 1000},
			{name: "titanium", val: 7000},
			{name: "science", val: 175000},
			{name: "oil", val: 50000},
			{name: "rocket", val: 1}
		],
		chance: 50,
		upgradable: false,
		handler: function(game, self){
			game.space.getProgram("heliosMission").unlocked = true;
		}
	},{
		name: "piscineMission",
		title: "探索碧池星",
		description: "碧池星是一个巨大的水星球，主体是酸性水，表面充满了甲烷气体",
		unlocked: false,
		researched: false,
		prices: [
			{name: "starchart", val: 1500},
			{name: "titanium", val: 9000},
			{name: "science", val: 200000},
			{name: "oil", val: 65000},
			{name: "rocket", val: 1}
		],
		chance: 50,
		upgradable: false,
		handler: function(game, self){
			game.space.getProgram("terminusMission").unlocked = true;
		}
	},{
		name: "heliosMission",
		title: "探索太阳",
		description: "太阳位于喵太阳系的中心的红巨星。",
		unlocked: false,
		researched: false,
		prices: [
			{name: "starchart", val: 3000},
			{name: "titanium", val: 15000},
			{name: "science", val: 250000},
			{name: "oil", val: 90000},
			{name: "rocket", val: 1}
		],
		chance: 50,
		upgradable: false,
		handler: function(game, self){
			game.space.getProgram("heliosMission").unlocked = true;
		}
	},{
		name: "terminusMission",
		title: "探索边界星",
		description: "边界星是一个位于喵太阳系远端的特大质量的冰星球。",
		unlocked: false,
		researched: false,
		prices: [
			{name: "starchart", val: 2500},
			{name: "titanium", val: 12000},
			{name: "science", val: 225000},
			{name: "oil", val: 75000},
			{name: "rocket", val: 1}
		],
		chance: 50,
		upgradable: false,
		handler: function(game, self){
			game.space.getProgram("heliosMission").unlocked = true;
		}
	}],

	constructor: function(game){
		this.game = game;
	},


	save: function(saveData){
		saveData.space = {
			programs: this.programs
		}
	},

	load: function(saveData){
		if (!saveData.space){
			return;
		}

		var self = this;

		if (saveData.space.programs){
			this.loadMetadata(this.programs, saveData.space.programs, ["val", "on", "unlocked", "researched"], function(loadedElem){
				//TODO: move to common method (like 'adjust prices'), share with religion code
				var prices = dojo.clone(loadedElem.prices);
				for (var k = prices.length - 1; k >= 0; k--) {
					var price = prices[k];
					for (var j = 0; j < loadedElem.val; j++){
						price.val = price.val * loadedElem.priceRatio;
					}
				}
			});
		}
		for (var i = this.programs.length - 1; i >= 0; i--) {
			if (this.programs[i].handler && this.programs[i].researched){
				this.programs[i].handler(this.game, this.programs[i]);
			}
		}
	},

	update: function(){
		for (var i = this.programs.length - 1; i >= 0; i--) {
			var program = this.programs[i];
			if (program.action && program.val > 0){
				program.action(this.game, program);
			}
		}
	},

	getProgram: function(name){
		return this.getMeta(name, this.programs);
	},

	getEffect: function(name){
		return this.getMetaEffect(name, {meta:this.programs, provider: {
			getEffect: function(program, effectName){
				if (!program.effects){
					return 0;
				}

				var val = program.togglable ? program.on: program.val;
				return program.upgradable ?
					program.effects[effectName] * val:
					program.effects[effectName];
			}
		}});
	}
});

dojo.declare("com.nuclearunicorn.game.ui.SpaceProgramBtn", com.nuclearunicorn.game.ui.BuildingBtn, {

	program: null,

	constructor: function(opts, game) {

	},

	getProgram: function(){
		if (!this.program){
			this.program = this.game.space.getProgram(this.id);
		}
		return this.program;
	},

	getBuilding: function(){
		return this.getProgram();
	},

	hasSellLink: function(){
		return false;
	},

	getPrices: function(){
		var prices = dojo.clone(this.getProgram().prices);

		var program = this.getProgram();
		var ratio = program.priceRatio || 1.15;

		var prices = dojo.clone(program.prices);
		if (program.upgradable){
			for (var i = program.val - 1; i >= 0; i--) {
				for (var j = prices.length - 1; j >= 0; j--){
					//Hack to avoid increase in rocket or fuel price:
					if (prices[j].name !== "oil" && prices[j].name !== "rocket") {
						prices[j].val = prices[j].val * ratio;
					}
				}
			}
		}
		for (var i = prices.length - 1; i >= 0; i--) {
			if (prices[i].name == "oil"){
				var reductionRatio = this.game.bld.getHyperbolicEffect(this.game.space.getEffect("oilReductionRatio"), 0.75);
				prices[i].val *= (1 - reductionRatio);
			}
		}

		return prices;
	},

	updateVisible: function(){
		var program = this.getProgram();
		if (program.requiredTech){
			for (var i = program.requiredTech.length - 1; i >= 0; i--) {
				var tech = this.game.science.get(program.requiredTech[i]);
				if (!tech.researched){
					this.setVisible(false);
					return;
				}
			}
		}
		this.setVisible(this.getProgram().unlocked);
	},

	updateEnabled: function(){
		this.inherited(arguments);
		if (this.getProgram().researched && !this.getProgram().upgradable){
			this.setEnabled(false);
		}
	},

	onClick: function(){
		this.animate();
		var program = this.getProgram();
		if (this.enabled && this.hasResources()){

			this.payPrice();

			if (this.game.rand(100) > program.chance){
				this.game.msg("太空发射发生了灾难性的失败 >:", "important");

				var refundRatio = (this.game.rand(30) + 40) / 100;
				var prices = this.getPrices();
				for (var i = prices.length - 1; i >= 0; i--) {
					if (prices[i].name != "oil" && prices[i].name != "rocket" && prices[i].name != "science"){
						var res = this.game.resPool.get(prices[i].name);
						res.value += prices[i].val * refundRatio;
					}
				}
				this.game.msg("小喵回收了 " + (refundRatio*100).toFixed() + "% 的资源");
				return;
			}

			if (program.upgradable){
				program.val++;
			}

			this.handler(this);


			this.update();
		}
	},


	getName: function(){
		var program = this.getProgram();
		if (!program.upgradable && program.researched){
			return program.title + " (完成)";
		}else if (program.upgradable){
			return this.inherited(arguments);
		}else {
			return program.title;
		}
	},

	getDescription: function(){
		var program = this.getProgram();
		return program.description + "<br>成功几率: " + program.chance + "%";
	},

	getTooltipHTML: function(btn){

		var tooltip = dojo.create("div", {style: {
			width: "280px",
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

		var program = this.getProgram();
		if (program.effects){
			this.renderEffects(tooltip, program.effects);
		}

		return tooltip.outerHTML;
	}
});

dojo.declare("com.nuclearunicorn.game.ui.tab.SpaceTab", com.nuclearunicorn.game.ui.tab, {

	GCPanel: null,
	engineeringPanel: null,

	constructor: function(){

	},

	render: function(container) {
		var self = this;
		this.GCPanel = new com.nuclearunicorn.game.ui.Panel("地面控制", this.game.space);
		var content = this.GCPanel.render(container);

		dojo.forEach(this.game.space.programs, function(program, i){
			var button = new com.nuclearunicorn.game.ui.SpaceProgramBtn({
				id: 		program.name,
				name: 		program.title,
				description: program.description,
				prices: program.prices,
				handler: function(btn){
					var program = btn.getProgram();
					program.researched = true;

					if (program.handler){
						program.handler(btn.game, program);
					}
				}
			}, self.game);
			button.render(content);
			self.GCPanel.addChild(button);
		});

		this.engineeringPanel = new com.nuclearunicorn.game.ui.Panel("建造", this.game.space);
		var content = this.engineeringPanel.render(container);

		var buildRocketBtn = new com.nuclearunicorn.game.ui.ButtonModern({
			name: "火箭",
			description: "建造一架火箭",
			prices: [
				{name: "alloy", val: 50},
				{name: "oil", val: 5000}
			],
			handler: function(btn){
				btn.game.resPool.get("rocket").value++;	//TODO: I don't like polluting resource there, let's move this into the space manager variable?
			}
		}, this.game);
		buildRocketBtn.render(content);
		this.buildRocketBtn = buildRocketBtn;
	},

	update: function(){
		this.GCPanel.update();

		this.buildRocketBtn.update();
	}
});
