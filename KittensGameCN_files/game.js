/**
 * A class for a game page container
 * 
 */
 
/**
 * Workaround for IE9 local storage :V
 * 
 * This fix is intended for IE in general and especially for IE9, 
 * where localStorage is defined as system variable.
 * 
 */ 

window.LCstorage = window.localStorage;
if (document.all && !window.localStorage) {
    window.LCstorage = {};
    window.LCstorage.removeItem = function () { };
}

/**
 * Just a simple timer, js timer sucks
 */
dojo.declare("com.nuclearunicorn.game.ui.Timer", null, {
	handlers: [],
	
	addEvent: function(handler, frequency){
		this.handlers.push({
			handler: handler,
			frequency: frequency,
			phase: 0
		});
	},
	
	update: function(){
		for (var i= 0; i < this.handlers.length; i++){
			var h = this.handlers[i];
			h.phase--;
			if (h.phase <= 0){
				h.phase = h.frequency;
				h.handler();
			}
		}
	}
});

/*
 * Effects metadata manager
 */ 
dojo.declare("com.nuclearunicorn.game.EffectsManager", null, {
	statics: {
		effectMeta: {
			//=====================
			//		catnip
			//=====================
			
			//	effect id
			"catnipPerTickBase" : {
				//title to be displayed for effect, id if not defined
				title: "猫薄荷基础产出",		
				
				//effect will be hidden if resource is not unlocked
				resName: "catnip",	
				
				//value will be affected by opts.usePerSecondValues	
				type: "perTick"			
			},
			"catnipPerTick" : {
				title: "猫薄荷产出",		
				resName: "catnip",
				type: "perTick"			
			},
			
			"catnipDemandRatio" : {
				title: "猫薄荷的需求增强",
				resName: "catnip",
				type: "ratio"
			},
			"catnipRatio" : {
				title: "猫薄荷增强",
				resName: "catnip"
			},
			"catnipMax" : {
				title: "猫薄荷上限",
				resName: "catnip"
			},
			
			/* Worker pseudoeffect */
			"catnip" : {
				title: "猫薄荷",
				resName: "catnip",
				type: "perTick"
			},
			
			//wood
			
			"woodMax" : {
				title: "木材上限",
				resName: "wood"
			},
			
			"woodRatio" : {
				title: "木材增强",
				resName: "wood",
				type: "ratio"
			},
			
			"wood" : {
				title: "木材",
				resName: "wood",
				type: "perTick"
			},
			
			"woodPerTick" : {
				title: "木材产出",
				resName: "wood",
				type: "perTick"
			},
			
			//minerals
			
			"mineralsMax" : {
				title: "矿物上限",
				resName: "minerals"
			},
			
			"mineralsRatio" : {
				title: "矿物增强",
				resName: "minerals",
				type: "ratio"
			},
			
			"mineralsPerTick" : {
				title: "矿物产出",
				resName: "minerals",
				type : "perTick"
			},
			
			"minerals" : {
				title: "矿物",
				resName: "minerals",
				type: "perTick"
			},
			
			//iron
			
			"ironMax" : {
				title: "铁锭上限",
				resName: "iron"
			},
			
			"ironPerTick" : {
				title: "铁锭产出",
				resName: "iron",
				type: "perTick"
			},
			"ironRatio" : {
				title: "铁锭增强",
				resName: "iron",
				type: "ratio"
			},
			
			
			//coal
			"coal" : {
				title: "煤炭",
				resName: "coal",
				type: "perTick"
			},
			"coalMax" : {
				title: "煤炭上限",
				resName: "coal"
			},
			
			"coalPerTickBase" : {
				title: "煤炭基础产出",
				resName: "coal",
				type : "perTick"
			},
			
			"coalRatioGlobal" : {
				title: "煤炭产出惩罚",
				resName: "coal",
				type: "ratio"
			},
			"coalRatio" : {
				title: "煤炭增强",
				resName: "coal",
				type: "ratio"
			},
			"coalPerTick" : {
				title: "煤炭产出",
				resName: "coal",
				type: "perTick"
			},
			
			//gold
			
			"goldPerTick" : {
				title: "黄金产出",
				resName: "gold",
				type: "perTick"
			},
			"goldRatio" : {
				title: "黄金增强",
				resName: "gold",
				type: "ratio"
			},
			"goldMax" : {
				title: "黄金上限",
				resName: "gold"
			},
			
			"gold" : {
				title: "黄金",
				resName: "gold",
				type: "perTick"
			},
			
			//titanium
			
			"titaniumMax" : {
				title: "钛锭上限",
				resName: "titanium"
			},
			"titaniumRatio" : {
				title: "钛锭增强",
				resName: "titanium",
				type: "ratio"
			},
			"titaniumPerTick" : {
				title: "钛锭产出",
				resName: "titanium",
				type: "perTick"
			},
			
			//kittens
			
			"maxKittens" : {
				title: "喵星人",
			},
			
			//catpower
			
			"manpowerMax": {
				title: "喵力上限",
				resName: "manpower"
			},
			
			"manpower" : {
				title: "喵力",
				resName: "manpower",
				type: "perTick"
			},
			
			"manpowerRatio" : {
				title: "喵力增强",
				resName: "manpower",
				type: "ratio"
			},
			
			"manpowerPerTick" : {
				title: "喵力",
				resName: "manpower",
				type: "perTick"
			},
			
			//science
			
			"scienceRatio" : {
				title: "科研增强",
				type: "ratio"
			},
			"scienceMax" : {
				title: "科研上限"
			},
			"learnRatio" : {},
			
			"science" : {
				title: "科研",
				resName: "science",
				type: "perTick"
			},
			
			//culture
			
			"cultureMax" : {
				resName: "culture",
				title: "文化上限"
			},
			"cultureRatio" : {
				title: "文化增强",
				resName: "culture",
				type: "ratio"
			},
			"culturePerTickBase" : {
				resName: "culture",
				title: "文化基础产出",
				type: "perTick"
			},
			
			//oil
			
			"magnetoBoostRatio" : {
				title: "磁电增压",
				resName: "oil",				//this is sort of hack to prevent early spoiler on magnetos
				type: "ratio"
			},
			
			"oilMax" : {
				resName: "oil",
				title: "石油上限"
			},
			
			"oilPerTickBase" : {
				resName: "oil",
				title: "石油基础产出",
				type: "perTick"
			},
			
			"oilPerTick" : {
				resName: "oil",
				title: "石油产出",
				type: "perTick"
			},
			"oilRatio" : {
				title: "石油增强",
				resName: "oil",
				type: "ratio"
			},
			//faith
			"faithPerTickBase" : {
				resName: "faith",
				title: "信仰基础产出",
				type: "perTick"
			},
			"faith" : {
				title: "信仰",
				resName: "faith",
				type: "perTick"
			},
			"faithMax" : {
				title: "信仰上限",
				resName: "faith",
			},
			"faithRatio" : {
				title: "信仰增强",
				resName: "faith",
				type: "ratio"
			},
			//uranium
			
			"uraniumPerTick": {
				title: "铀矿产出",
				resType: "uranium",
				type: "perTick"
			},
			"uraniumMax" : {
				title: "铀矿上限",
				resName: "uranium",
			},
			"uraniumRatio" : {
				title: "铀矿增强",
				resName: "uranium",
				type: "ratio"
			},
			//unobtainium
			"unobtainiumRatio" : {
				title: "难得素增强",
				resName: "unobtainium",
				type: "ratio"
			},
			"unobtainiumPerTick": {
				title: "难得素产出",
				resType: "unobtainium",
				type: "perTick"
			},
			"unobtainiumMax" : {
				title: "难得素上限",
				resName: "unobtainium",
			},
			//unicorns
			"unicornsRatio" : {
				title: "独角兽增强",
				resName: "unicorns",
				type: "ratio"
			},
			"unicornsPerTickBase": {
				title: "独角兽基础产出",
				resType: "unicorns",
				type: "perTick"
			},
			
			//manuscripts
			"manuscriptRatio" : {
				title: "手稿增强",
				resName: "manuscript",
				type: "ratio"
			},
			"manuscriptPerTick": {
				title: "手稿产出",
				resType: "manuscript",
				type: "perTick"
			},
			
			//starchart
			"starchartRatio" : {
				title: "星图增强",
				resName: "starchart",
				type: "ratio"
			},
			"starchartPerTickBase": {
				title: "星图基础产出",
				resType: "starchart",
				type: "perTick"
			},
			
			//miscellaneous
			
			"craftRatio": {
				title: "工艺增强",
				resType: "craft",
				type: "ratio"
			},
			"productionRatio" : {
				title: "制造效率增强",
			},
			"refineRatio" : {
				title: "精炼效率增强",
			},
			"magnetoRatio" : {
				title: "磁电机效率增强",
			},
			"barnRatio" : {
				title: "谷仓上限增强",
			},
			"warehouseRatio" : {
				title: "仓库上限增强",
			},
			"acceleratorRatio" : {
				title: "加速增强",
			},
			"harborRatio" : {
				title: "海港上限增强",
			},
			"harborCoalRatio" : {
				title: "海港煤炭上限增强",
			},
			"shipLimit" : {
				title: "船只上限增强",
			},
			"hutPriceRatio" : {
				title: "小屋价格增强",
			},
			"catnipMaxRatio" : {
				title: "猫薄荷上限增强",
			},
			"hunterRatio" : {
				title: "猎手效率增强",
			},
			"standingRatio" : {
				title: "商队效率增强",
			},
			"smelterRatio" : {
				title: "熔炉效率增强",
			},
			"calcinerRatio" : {
				title: "煅烧炉效率增强",
			},
			"libraryRatio" : {
				title: "图书馆效率增强",
			},
			"blueprintCraftRatio" : {
				title: "蓝图制造效率增强",
			},
			"skillMultiplier" : {
				title: "技能效果增强",
			},
			"starchartGlobalRatio" : {
				title: "卫星效率增强",
			},
			"lumberMillRatio" : {
				title: "伐木场效率增强",
			},
			"mintEffect" : {
				title: "薄荷增强",
			},
			"starEventChance" : {
				title: "星象出现几率增强",
			},	
			"starAutoSuccessChance" : {
				title: "星象自动记录几率增强",
			},
			"tradeRatio" : {
				title: "贸易效率增强",
			},
			"fursDemandRatio" : {
				title: "皮革消耗",
			},
			"ivoryDemandRatio" : {
				title: "象牙消耗",
			},
			"spiceDemandRatio" : {
				title: "香料消耗",
			},





			"unhappinessRatio": {
				title: "幸福增强",
				resType: "unhappiness",
				type: "ratio"
			}
		}
	}
});

/**
 * 主要游戏类,可以在全局范围内作为“gamePage”访问变量
 */ 

dojo.declare("com.nuclearunicorn.game.ui.GamePage", null, {
	
	id: null,
	
	tabs: null,

	//组件:
	
	resPool: null,
	calendar: null,
	bld: null,
	village: null,
	science: null,
	workshop: null,
	diplomacy: null,
	achievements: null,
	
	console: null,
	
	//执行多少次(每秒5次,200 ms每次))
	rate: 5,
	
	//xN倍 为了调试功能的更新速度调节器
	updateRate: 1,
	
	//我不知道为什么有人需要这个（士郎子：挂机游戏有暂停功能确实很逗比……）
	isPaused: false,
	
	//当前选择的游戏选项卡
	activeTabId: "Bonfire",

	ticksBeforeSave: 400,	//40 秒 ~

	//在运行中
	autosaveFrequency: 400,
	
	//当前建筑在建筑中选择选项卡通过鼠标光标,应该影响资源表呈现
	selectedBuilding: null,
	
	//=============================
	//		选项设置 
	//=============================
	forceShowLimits: false,
	forceHighPrecision: false,
	useWorkers: false,
	colorScheme: "",
	
	timer: null,
	
	//===================
	//	弱智的东西
	//===================
	
	nerfs: 0,
	sorrow: 0,
	
	//===========================================
	//game-related flags that will go to the save
	//===========================================
	
	//on a side note, I hate those flags. Could we use gamePage.opts = []/{}; ?
	karmaKittens: 0,	//counter for karmic reincarnation
	karmaZebras: 0,
	paragonPoints: 0,	//endgame prestige
	deadKittens: 0,
	ironWill: true,		//true if player has no kittens or housing buildings
	
	//最后
	opts: null,
	
	gatherTimeoutHandler: null,	//timeout till resetting gather counter, see below
	gatherClicks: 0,	//how many clicks in a row was performed on a gather button
	cheatMode: false,	//flag triggering Super Unethical Climax achievement
	
	ticks: 0,				//how many ticks passed since the start of the game
	totalUpdateTime: 0,		//total time spent on update cycle in milliseconds, useful for debug/fps counter
	
	//资源表
	resTable: null,		
	
	effectsMgr: null,	
    
    managers: null,

	constructor: function(containerId){
		this.id = containerId;
		
		this.tabs = [];
        this.managers = [];
		
		this.opts = {
			usePerSecondValues: true,
			usePercentageResourceValues: false,
			highlightUnavailable: false,
			hideSell: false
		};
		
		this.console = new com.nuclearunicorn.game.log.Console();
		
		this.resPool = new classes.managers.ResourceManager(this);
		this.calendar = new com.nuclearunicorn.game.Calendar(this);
		
		this.village = new classes.managers.VillageManager(this);
		this.resPool.setVillage(this.village);
        
        var managers = [
            { id: "workshop",       class:  "WorkshopManager"   },
            { id: "diplomacy",      class:  "DiplomacyManager"  },
            { id: "bld",            class:  "BuildingsManager"  },
            { id: "science",        class:  "ScienceManager"    },
            { id: "achievements",   class:  "Achievements"      },
            { id: "religion",       class:  "ReligionManager"   },
            { id: "space",          class:  "SpaceManager"      },
            { id: "prestige",       class:  "PrestigeManager"   }
        ];
        
        for (i in managers){
            var manager = managers[i];
            this[manager.id] = new window["classes"]["managers"][manager.class](this);
            
            this.managers.push(this[manager.id]);
        }

		//very sloppy design, could we just use an array for tab managers?
		var bonfireTab = new com.nuclearunicorn.game.ui.tab.Bonfire("营火(旧)", this);
		this.addTab(bonfireTab);
		bonfireTab.visible = false;	//deprecated, but you can still use it
		
		this.bonfireTab = bonfireTab;
		
		var bldTabV2 = new com.nuclearunicorn.game.ui.tab.BuildingsModern("营火", this);
		this.addTab(bldTabV2);
		
		this.villageTab = new com.nuclearunicorn.game.ui.tab.Village("小村庄", this);
		this.villageTab.visible = false;
		this.addTab(this.villageTab);
		
		this.libraryTab = new com.nuclearunicorn.game.ui.tab.Library("科研", this);
		this.libraryTab.visible = false;
		this.addTab(this.libraryTab);
		
		this.workshopTab = new com.nuclearunicorn.game.ui.tab.Workshop("工坊", this);
		this.workshopTab.visible = false;
		this.addTab(this.workshopTab);
		
		this.diplomacyTab = new com.nuclearunicorn.game.ui.tab.Diplomacy("贸易", this);
		this.diplomacyTab.visible = false;
		this.addTab(this.diplomacyTab);
		
		this.religionTab = new com.nuclearunicorn.game.ui.tab.ReligionTab("宗教", this);
		this.religionTab.visible = false;
		this.addTab(this.religionTab);
		
		this.spaceTab = new com.nuclearunicorn.game.ui.tab.SpaceTab("太空", this);
		this.spaceTab.visible = false;
		this.addTab(this.spaceTab);
		
		this.achievementTab = new com.nuclearunicorn.game.ui.tab.AchTab("成就", this);
		this.achievementTab.visible = false;
		this.addTab(this.achievementTab);
		
		//vvvv do not forget to toggle tab visibility below
		
		this.timer = new com.nuclearunicorn.game.ui.Timer();
		

		//Update village resource production. 
		//Since this method is CPU heavy and rarely used, we will call with some frequency, but not on every tick
		this.timer.addEvent(dojo.hitch(this, function(){	
			this.village.updateResourceProduction(); 
		}), 10);	//every 2 seconds
		
		this.timer.addEvent(dojo.hitch(this, function(){ this.updateCraftResources(); }), 5);	//once per 5 ticks
		this.timer.addEvent(dojo.hitch(this, function(){ 
			
			this.bld.invalidateCachedEffects();
			this.workshop.invalidateCachedEffects();
			this.religion.invalidateCachedEffects();
			
			this.updateResources();
		}), 5);		//once per 5 ticks
		
		this.resTable = new com.nuclearunicorn.game.ui.GenericResourceTable(this, "resContainer");
		this.craftTable = new com.nuclearunicorn.game.ui.CraftResourceTable(this, "craftContainer");
		
		this.timer.addEvent(dojo.hitch(this, function(){ this.resTable.update(); }), 1);	//once per tick
		this.timer.addEvent(dojo.hitch(this, function(){ this.craftTable.update(); }), 3);	//once per 3 tick
		
		this.timer.addEvent(dojo.hitch(this, function(){ this.achievements.update(); }), 50);	//once per 50 ticks, we hardly need this
		
	
		this.effectsMgr = new com.nuclearunicorn.game.EffectsManager();
	},
	
	getEffectMeta: function(effectName) {
		return this.effectsMgr.statics.effectMeta[effectName];
	},
	
	//TODO: store all managers in a single array and handle them in the common way
	getEffect: function(effectName){
		return this.bld.getEffect(effectName) + 
			this.space.getEffect(effectName);
	},
	
	/**
	 * Display a message in the console. Returns a <span> node of a text container
	 */
	msg: function(message, type){
		var hasCalendarTech = this.science.get("calendar").researched;
		
		if (hasCalendarTech){
			message = " " + this.calendar.year + " 年, " + this.calendar.seasons[this.calendar.season].title + ": " + message;
		}
		
		return this.console.static.msg(message, type);
	},
	
	clearLog: function(){
		this.console.static.clear();
	},
	
	save: function(){
		var saveData = {
			resources: this.resPool.filterMetadata(
				this.resPool.resources, ["name", "value"]
			)
		};
		
		this.village.save(saveData);
		this.calendar.save(saveData);
        
        for (i in this.managers){
            this.managers[i].save(saveData);
        }

		saveData.game = {
			forceShowLimits: this.forceShowLimits,
			forceHighPrecision: this.forceHighPrecision,
			useWorkers: this.useWorkers,
			colorScheme: this.colorScheme,
			karmaKittens: this.karmaKittens,
			karmaZebras: this.karmaZebras,
			paragonPoints: this.paragonPoints,
			ironWill : this.ironWill,
			deadKittens: this.deadKittens,
			cheatMode: this.cheatMode,
			
			nerfs: this.nerfs,
			sorrow: this.sorrow,
			
			opts : this.opts
		};
		
		LCstorage["com.nuclearunicorn.kittengame.savedata"] = JSON.stringify(saveData);
		
		console.log("Game saved");
	},
	
	wipe: function(){
		LCstorage["com.nuclearunicorn.kittengame.savedata"] = null;
	},
	
	toggleScheme: function(){
		var schemeToggle = dojo.byId("schemeToggle");
		this.colorScheme = schemeToggle.value;

		this.updateOptionsUI();
	},
	
	togglePause: function(){
		var pauseBtn = dojo.byId("pauseBtn");
		this.isPaused = !this.isPaused;
		pauseBtn.innerHTML = this.isPaused ? "继续" : "暂停";
	},
	
	updateOptionsUI: function(){
		$("#schemeToggle").val(this.colorScheme);
		$("body").attr("class", "scheme_"+this.colorScheme);
		
		$("#workersToggle")[0].checked 			= this.useWorkers;
		$("#forceHighPrecision")[0].checked		= this.forceHighPrecision;
		$("#usePerSecondValues")[0].checked		= this.opts.usePerSecondValues;
		$("#usePercentageResourceValues")[0].checked 	= this.opts.usePercentageResourceValues;
		$("#highlightUnavailable")[0].checked		= this.opts.highlightUnavailable;
		$("#hideSell")[0].checked			= this.opts.hideSell;
		
	},
	
	load: function(){
		var data = LCstorage["com.nuclearunicorn.kittengame.savedata"];
		if (!data){
			return;
		}
		try {
			var saveData = JSON.parse(data);
			
			//console.log("restored save data:", localStorage);
			if (saveData){
				this.resPool.load(saveData);
				this.village.load(saveData);
				this.calendar.load(saveData);
                
                for (i in this.managers){
                    this.managers[i].load(saveData);
                }
			}
		} catch (ex) {
			console.error("Unable to load game data: ", ex);
			this.msg("不能载入存档数据. 关闭本页面并重新打开。");
		}
		
		//restore tab visibility
		
		this.villageTab.visible = (this.resPool.get("kittens").value > 0 || this.resPool.get("zebras").value > 0);
		this.libraryTab.visible = (this.bld.getBuilding("library").val > 0);
		this.workshopTab.visible = (this.bld.getBuilding("workshop").val > 0);
		this.achievementTab.visible = (this.achievements.hasUnlocked());
		
		//Nice try, probably someday
		/*if (this.science.get("currency").researched){
			this.economyTab.visible = true;
		}*/

		this.diplomacyTab.visible = (this.diplomacy.hasUnlockedRaces());

		this.religionTab.visible = (this.resPool.get("faith").value > 0);
		
		if (saveData && saveData.game){
			var data = saveData.game;
			
			//something should really be done with this mess there
			this.forceShowLimits = data.forceShowLimits ? data.forceShowLimits : false;
			this.colorScheme = data.colorScheme ? data.colorScheme : null;

			this.karmaKittens = (data.karmaKittens !== undefined) ? data.karmaKittens : 0;
			this.karmaZebras = (data.karmaZebras !== undefined) ? data.karmaZebras : 0;
			this.paragonPoints = (data.paragonPoints !== undefined) ? data.paragonPoints : 0;
			this.deadKittens = (data.deadKittens !== undefined) ? data.deadKittens : 0;
			this.ironWill = (data.ironWill !== undefined) ? data.ironWill : true;
			this.useWorkers = (data.useWorkers !== undefined) ? data.useWorkers : false;
			
			this.cheatMode = (data.cheatMode !== undefined) ? data.cheatMode : false;
			this.forceHighPrecision = (data.forceHighPrecision !== undefined) ? data.forceHighPrecision : false;
			
			//-------------------------------------------
			this.sorrow = data.sorrow || 0;
			var nerfs = data.nerfs || 0;

			if (nerfs < this.nerfs && this.calendar.year >= 100){
				this.sorrow++;
				this.msg("村外正在下黑雨！");
			}
			if (this.sorrow){
				$("#sorrowTooltip").html("BLS: " + this.sorrow + "%");
				this.resPool.get("sorrow").value = this.sorrow;
			}
			//-------------------------------------------
			
			
			// ora ora
			if (data.opts){
				for (opt in data.opts){
					this.opts[opt] = data.opts[opt];
				}
			}
			
			this.updateOptionsUI();
		}
	},
		
	//btw, ie11 is horrible crap and should not exist
	saveExport: function(){
		this.save();
		
		var data = LCstorage["com.nuclearunicorn.kittengame.savedata"];
		
		var is_chrome = /*window.chrome*/ true;
		if (is_chrome){
		    $("#exportDiv").show();

		    var txt = btoa(unescape(encodeURIComponent(data.toString())));
		    $("#exportData").val(txt);
		    //$("#exportData").val(btoa(data));
			$("#exportData").select();
		} else {
			window.prompt("复制到剪贴板: Ctrl+C, Enter", btoa(data)); 
		}
	},

	saveImport: function(){
		if (!window.confirm("你确定? 这将覆盖你的存档!")){
			return;
		}
		var data = $("#importData").val();
		if (data) {
		    var txtobj = decodeURIComponent(escape(atob(data)));
		    LCstorage["com.nuclearunicorn.kittengame.savedata"] = txtobj;
			//LCstorage["com.nuclearunicorn.kittengame.savedata"] = atob(data);
			this.load();
			this.msg("存档导入成功!");
			this.render();
		}
	},
	
	render: function(){

		var midColumn = dojo.byId("midColumn");
		var scrollPosition = midColumn.scrollTop;
		
		var container = dojo.byId(this.id);
		dojo.empty(container);

		var tabNavigationDiv = dojo.create("div", { className: "tabsContainer"}, container);

		
		this.resTable.render();
		this.craftTable.render();

		var visibleTabs = [];
		
		for (var i = 0; i<this.tabs.length; i++){
			var tab = this.tabs[i];
			if (tab.visible){
				visibleTabs.push(tab);
			}
		}
			
		for (var i = 0; i<visibleTabs.length; i++){
			var tab = visibleTabs[i];

			var tabLink = dojo.create("a", {
				href:"#",
				innerHTML: tab.tabName,
				className: "tab",
				style : {
					whiteSpace: "nowrap"
				}
			}, tabNavigationDiv);
			
			if (this.activeTabId == tab.tabId){
				dojo.addClass(tabLink, "activeTab");
			}


			dojo.connect(tabLink, "onclick", this, 
				dojo.partial(
					function(tab){
						this.activeTabId = tab.tabId;
						this.render();
					}, tab)
			);
			
			if (i < visibleTabs.length-1){
				dojo.create("span", {innerHTML:" | "}, tabNavigationDiv);
			}
		}	
		
		
		for (var i = 0; i < this.tabs.length; i++){
			var tab = this.tabs[i];
			
			if (this.activeTabId == tab.tabId){
			
				var divContainer = dojo.create("div", {
					className: "tabInner"
				}, container);
					
				tab.render(divContainer);
				
				break;
			}
		}
		
		midColumn.scrollTop = scrollPosition;
	},
	
	/**
	 * Returns an estimated production amount per tick for a given resource.
	 * 
	 * If calcAutomatedEffect is true, it will also estimate the conditional effects for automated structures,
	 * like smelters or calciners. calcAutomatedEffect should be typically off, or you will give DOUBLE resources for auto structures
	 * 
	 * If season is provided, the method will use given season modifiers for resource estimation. 
	 * Current resource will be used otherwise.
	 */ 
	 
	
	getResourceTitle: function(priceName, calcAutomatedEffect, season){
		var res = null;
		for (var i = 0; i < this.resPool.resources.length; i++){
			if (this.resPool.resources[i].name == priceName){
				res = this.resPool.resources[i];
			}
		}
		return res.title;
	}, 

	 
	//====================== ONE DAY =====================================
	/*getResourcePerTick: function(resName, calcAutomatedEffect, season){
		var stack = this.getResourcePerTickStack(resName, season);
		var perTick = this.getStackPerTick(stack, calcAutomatedEffect, season);
		
		return perTick;
	},
	
	getStackPerTick: function(stack, calcAutomatedEffect, season){
		var perTick = 0;
		
		for (var i = 0; i< stack.length; i++){
			var s = stack[i];
			
			if (s.length){
				perTick += this.getStackPerTick(s, calcAutomatedEffect, season) || 0;
			}
			
			if (s.automated && !calcAutomatedEffect){
				continue;
			}
			
			if (s.type == "fixed"){
				perTick += s.value || 0;
			} else if (s.type == "ratio"){
				perTick *= (1 + s.value || 0);
			}
			
		}
		
		if (isNaN(perTick)){
			return 0;
		}
		return perTick;
	}, */

	 
	getResourcePerTick: function(resName, calcAutomatedEffect, season){
		
		//STRUCTURES PRODUCTION
		var res = null;
		for (var i = 0; i < this.resPool.resources.length; i++){
			if (this.resPool.resources[i].name == resName){
				res = this.resPool.resources[i];
			}
		}

		var weatherMod = 0;		
		//SEASON MODIFIERS
		if (!season){
			var season = this.calendar.getCurSeason();
		}
		
		weatherMod = this.calendar.getWeatherMod();
		weatherMod = (season.modifiers[res.name] + weatherMod);
		if (weatherMod < -0.95){
			weatherMod = -0.95;
		}

	
		var perTick = this.getEffect(res.name + "PerTickBase");		//per tick accumulator
		
		if (season.modifiers[res.name]){
			perTick = perTick * weatherMod;
		}

		//VILLAGE JOB PRODUCTION
		
		var resMapProduction = this.village.getResProduction();
		var resProduction = resMapProduction[res.name] ? resMapProduction[res.name] : 0;
		
		perTick += resProduction;
		
		//UPGRADE EFFECTS GENERAL
		var workshopResRatio = this.workshop.getEffect(res.name+"Ratio");
		if (workshopResRatio && res.name != "coal"){
			perTick += resProduction * workshopResRatio;
		}
		var workshopResGlobalRatio = this.workshop.getEffect(res.name+"GlobalRatio");
		perTick *= (1 + workshopResGlobalRatio);
		
		//BUILDINGS AND SPACE EFFECTS
		var resRatio = this.getEffect(res.name + "Ratio");
		if (resRatio){
			perTick += perTick * resRatio;
		}
		
		//let's mess a bit with a ice age
		if (resName == "catnip"){
			perTick += perTick * this.calendar.getIceageMod();
		}
		
		//UPGRADE EFFECTS FOR COAL (HACK, TO BE FIXED)
		var workshopResRatio = this.workshop.getEffect(res.name+"Ratio");
		if (workshopResRatio && res.name == "coal"){
			perTick += perTick * workshopResRatio;
		}
		
		//---------- RELIGION EFFECTS -----------
		var relResEffect = this.religion.getEffect(resName+"Ratio");
		if (relResEffect){
			perTick += perTick * relResEffect;
		}

		//---------  PARAGON BONUS ------------
		var paragonRatio = this.resPool.get("paragon").value * 0.01;
		paragonRatio = this.bld.getHyperbolicEffect(paragonRatio, 2);	//well, 200 paragon is probably the END OF THE LINE
		perTick += perTick * paragonRatio;

		//---------  FAITH BONUS --------------
		if (this.religion.getRU("solarRevolution").researched){
			perTick += perTick * (this.religion.getProductionBonus() / 100);
		}
		
		//--------- YEY ANOTHER HACK FOR MAGNETOS ------
		if (!res.transient && this.bld.get("magneto").on > 0){
			
			if (res.name != "oil"){
				var steamworks = this.bld.get("steamworks");
				var swRatio = steamworks.on > 0 ? (1+ steamworks.effects["magnetoBoostRatio"] * steamworks.on) : 1;
				perTick += perTick * this.bld.getEffect("magnetoRatio") * swRatio;
			}
			
		}
		
		//--------- GENERAL PRODUCTION RATIO --------------
		if (!res.transient){
			perTick += perTick * this.bld.getEffect("productionRatio");
		}

		//SPECIAL STEAMWORKS HACK FOR COAL
		var steamworks = this.bld.get("steamworks");
		var swEffectGlobal = steamworks.effects[res.name+"RatioGlobal"];
		if (steamworks.on > 0 && swEffectGlobal ){
			perTick += perTick * swEffectGlobal;
		}
		
		//AUTOMATED STRUCTURES EFFECTS
		if (calcAutomatedEffect){
			var resRatioTick = this.getEffect(res.name + "PerTick");
			if (resRatioTick){
				perTick += resRatioTick;
			}
		}

		//---------  RESOURCE CONSUMPTION -------------
	
		var resMapConsumption = this.village.getResConsumption();
		var resConsumption = resMapConsumption[res.name] || 0;
		
		//works very wrong on catnip
		var useHypHack = (res.name != "catnip") ? true : false;
		resConsumption = resConsumption + resConsumption * this.bld.getEffect(res.name + "DemandRatio", useHypHack);	//use hyp reduction
		
		perTick += resConsumption;
		
		if (isNaN(perTick)){
			return 0;
		}
		
		return perTick;
	},
	
	/**
	 * Generates a stack of resource modifiers. (TODO: use it with resource per tick calculation logic)
	 */ 
	getResourcePerTickStack: function(resName, calcAutomatedEffect, season){
		
		var res = null;
		for (var i = 0; i < this.resPool.resources.length; i++){
			if (this.resPool.resources[i].name == resName){
				res = this.resPool.resources[i];
			}
		}

		if (!season){
			var season = this.calendar.getCurSeason();
		}
		
		var stack = [];
		
		stack.push({
			name: "基础",
			type: "fixed",
			value: this.getEffect(res.name + "PerTickBase")
		});
		
		
		var weatherMod = this.calendar.getWeatherMod();
		weatherMod = (season.modifiers[res.name] + weatherMod);
		if (weatherMod < -0.95){
			weatherMod = -0.95;
		}
		
		stack.push({
			name: "气候",
			type: "ratio",
			value: weatherMod - 1
		});
		
		//----------- production -----------
		
		var resMapProduction = this.village.getResProduction();
		var villageStack = [];
		//---->
				villageStack.push({
					name: "村庄",
					type: "fixed",
					value: resMapProduction[res.name] || 0
				});
				
				if (res.name != "coal"){
					villageStack.push({
						name: "升级",
						type: "ratio",
						value: this.workshop.getEffect(res.name + "Ratio")
					});
				}
		//<----		
		stack.push(villageStack);
		
		stack.push({
			name: "升级",
			type: "ratio",
			value: this.workshop.getEffect(res.name + "GlobalRatio")
		});

		stack.push({
			name: "建筑",
			type: "ratio",
			value: this.bld.getEffect(res.name + "Ratio")
		});
		
		//*** SW coal penalty, affected by workshop upgrades
		/*if (res.name == "coal"){
			stack.push({
				name: "Buildings",
				type: "ratio",
				val: this.workshop.getEffect(res.name + "Ratio")
			});
		}*/	//???
		
		stack.push({
			name: "太空",
			type: "ratio",
			value: this.space.getEffect(res.name + "Ratio")
		});
		
		stack.push({
			name: "宗教",
			type: "ratio",
			value: this.religion.getEffect(res.name + "Ratio")
		});
		
		var paragonRatio = this.resPool.get("paragon").value * 0.01;
		paragonRatio = this.bld.getHyperbolicEffect(paragonRatio, 2);	//well, 200 paragon is probably the END OF THE LINE
		stack.push({
			name: "完美",
			type: "ratio",
			value: paragonRatio
		});
		
		if (this.religion.getRU("solarRevolution").researched){
			stack.push({
				name: "信仰",
				type: "ratio",
				value: this.religion.getProductionBonus() / 100
			});
		}
		
		//--------- YEY ANOTHER HACK FOR MAGNETOS ------
		if (!res.transient && this.bld.get("magneto").on > 0){
			
			if (res.name != "oil"){
				var steamworks = this.bld.get("steamworks");
				var swRatio = steamworks.on > 0 ? (1+ steamworks.effects["magnetoBoostRatio"] * steamworks.on) : 1;
				stack.push({
					name: "Magnetos",
					type: "ratio",
					value: this.bld.getEffect("magnetoRatio") * swRatio
				});
			}
		}

		if (!res.transient) {		
			stack.push({
				name: "Reactors",
				type: "ratio",
				value: this.bld.getEffect("productionRatio")
			});
		}
		
		stack.push({
			name: "Automated",
			type: "fixed",
			automated: true,
			value: this.getEffect(res.name + "PerTick")
		});

		var steamworks = this.bld.get("steamworks");
		var swEffectGlobal = steamworks.effects[res.name+"RatioGlobal"];
		if (steamworks.on > 0 && swEffectGlobal ){
			stack.push({
				name: "Steamworks",
				type: "ratio",
				value: swEffectGlobal
			});
		}
		
		var resMapConsumption = this.village.getResConsumption();
		var resConsumption = resMapConsumption[res.name] || 0;
		
		var useHypHack = (res.name != "catnip") ? true : false;		//	TODO: ************ WTF!?? ***************
		resConsumption = resConsumption + resConsumption * this.bld.getEffect(res.name + "DemandRatio", useHypHack);
		
		stack.push({
			name: "需求",
			type: "fixed",
			value: resConsumption
		});
		
		return stack;
	},
	
	getResCraftRatio: function(res){
		if (res.name == "wood"){
			var refineRatio = this.bld.getEffect("refineRatio");
			if (this.ironWill){
				return ( (1 + refineRatio) * (1 + this.bld.getEffect("woodRatio")) ) - 1;
			} else {
				return refineRatio;
			}
		}
		
		if (res.name == "blueprint"){
			var bpRatio = this.workshop.getEffect("blueprintCraftRatio");
			var scienceBldAmt = this.bld.get("library").val + this.bld.get("academy").val + 
				this.bld.get("observatory").val + this.bld.get("biolab").val;
				
			var ratio = this.bld.getEffect("craftRatio");
			
			return ratio + scienceBldAmt * bpRatio;
		}
		
		return this.bld.getEffect("craftRatio");
	},
	
	/**
	 * Update all tab managers, resources and UI controls
	 */ 
	update: function(){
		this.ticksBeforeSave--;
		
		if (this.ticksBeforeSave == 0){
			this.ticksBeforeSave = this.autosaveFrequency;
			this.save();
			
			dojo.style(dojo.byId("autosaveTooltip"), "opacity", "1");
			dojo.animateProperty({
			  node:"autosaveTooltip",
			  properties: {
				  opacity: 0
			  },
			  duration: 1200,
			}).play();
		}

		this.bld.update();

		//business logic goes there
		//maybe it will be a good idea to move it elsewhere?
		
		//for example, here kitten resources are calculated per effect, this logic could be unified
		
		var maxKittens = this.getEffect("maxKittens");
		this.village.maxKittens = maxKittens;
		
		this.village.update();
		this.workshop.update();
		this.diplomacy.update();
		this.religion.update();
		this.space.update();
        
        /*for (i in this.managers){
            if (this.managers[i].update){
                this.managers[i].update();
            }
        }*/

		//nah, kittens are not a resource anymore (?)
		var kittens = this.resPool.get("kittens");
		kittens.value = this.village.getKittens();	//just a simple way to display them
		kittens.maxValue = this.village.maxKittens;

		this.updateCalendar();
		this.updateAdvisors();
		
		this.timer.update();
		
		this.resPool.update();

		for (var i = 0; i<this.tabs.length; i++){
			var tab = this.tabs[i];
			
			if (tab.tabId == this.activeTabId){
				tab.update();
			}
		};
	},
	
	huntAll: function(event){
		event.preventDefault();
		this.village.huntAll();
	},
	
	/**
	 * Updates a perTickValue of resource for UI
	 */
	updateResources: function(){
		
		/**
		* Updating per tick value is actually a heavy operation. Why don't we do it per 3 tick and cache values?
		*/ 
		for (var i = 0; i < this.resPool.resources.length; i++){
			var res = this.resPool.resources[i];
			res.perTickUI = this.getResourcePerTick(res.name, true);
		}
	},
	
	updateCraftResources: function(){
		//do nothing, outdated
	},
	
	craft: function(resName, value){
		this.workshop.craft(resName, value);
		this.updateCraftResources();
		this.updateResources();
	},
	
	craftAll: function(resName){

		// some way to protect people from refining all catnip during the winter
		if (resName == "wood" && this.getResourcePerTick("catnip", true) <= 0){
			if (!confirm("你确定吗?你的小猫会死")){
				return;
			}
		}
		
		this.workshop.craftAll(resName);
		this.updateCraftResources();
		this.updateResources();
	},
	
	updateAdvisors: function(){
		
		if (this.bld.get("field").val == 0){
			return;
		}
		
		var advDiv = dojo.byId("advisorsContainer");
		dojo.empty(advDiv);
		
		var winterDays = 100;
		if (this.calendar.season == "winter"){
			winterDays = 100 - this.calendar.day;
		}

		var catnipPerTick = this.getResourcePerTick("catnip", false, { modifiers:{
			"catnip" : 0.25
		}});	//calculate estimate winter per tick for catnip;
	
		if (this.resPool.get("catnip").value + ( winterDays * catnipPerTick * 10 ) <= 0 ){
			advDiv.innerHTML = "<span>食品顾问:“你的猫薄荷供应太低了!”<span>"
		}

	},
	
	//TODO: freaking slow, use damn dictionaries
	isResRequired: function(bld, resName){
		if (!bld.prices){
			return false;
		}
		for (var i = 0; i < bld.prices.length; i++){
			if (bld.prices[i].name == resName){
				return true;
			}
		}
		return false;
	},
	
	/**
	 * Attaches onMouseOver/onMouseOut events to a given DOM node in order to display tooltip.
	 * All tooltips will reuse the same container.
	 */ 
	attachTooltip: function(container, resRef){
		
		var tooltip = dojo.byId("tooltip");
		dojo.empty(tooltip);
		
		dojo.connect(container, "onmouseover", this, dojo.partial(function(resRef, tooltip, event){
			 if (!resRef.perTickUI){ return;}
			 
			 tooltip.innerHTML = this.getDetailedResMap(resRef);
			 
			 var target = event.originalTarget || event.toElement;	//fucking chrome
			 var pos = $(target).position();
			 if (!pos){
				 return;
			 }
			 
			 dojo.setStyle(tooltip, "left", pos.left + 60 + "px");
			 dojo.setStyle(tooltip, "top",  pos.top + "px");
			
			 dojo.setStyle(tooltip, "display", ""); 
			 dojo.setStyle(container, "fontWeight", "bold"); 
			 
	    }, resRef, tooltip));
	    
		dojo.connect(container, "onmouseout", this, dojo.partial(function(tooltip, container){
			 dojo.setStyle(tooltip, "display", "none"); 
			 dojo.setStyle(container, "fontWeight", "normal");
		},tooltip, container));
		
	},
	
	/**
	 * Returns a flat map of resource production
	 */ 
	getDetailedResMap: function(res){
		var resString = "";
		var resStack = this.getResourcePerTickStack(res.name);

		resString = this.processResourcePerTickStack(resStack, 0);

		if (res.perTickUI < 0) {
			var toZero = res.value / (-res.perTickUI * this.rate);
			resString += "<br>达到最小： " + this.toDisplaySeconds(toZero.toFixed());
		} else {
			if (res.maxValue) {
				var toCap = (res.maxValue - res.value) / (res.perTickUI * this.rate);
				if (toCap){
					resString += "<br>达到：" + this.toDisplaySeconds(toCap.toFixed());
				}
			}
		}
		return resString;
	},

	processResourcePerTickStack: function(resStack, depth){
		var resString = "";
		var hasFixed = false;
		
		for (var i = 0; i < resStack.length; i++){
			var stackElem = resStack[i];
			
			if (stackElem.length){
				var subStack = this.processResourcePerTickStack(stackElem, depth + 1);
				if (subStack.length){
					resString += subStack;
					hasFixed = true;
				}
			}
			
			if (!stackElem.value || (stackElem.type == "ratio" && !hasFixed)){
				continue;
			}

			for (var j = 0; j < depth; j++){
				resString += "*";
			}

			resString += this.getStackElemString(stackElem);
			if (stackElem.type == "fixed") {
				hasFixed = true;
			}
		}

		return resString;
	},

	getStackElemString: function(stackElem){
		var resString = stackElem.name + ":";
			
		if (stackElem.type == "fixed"){
			resString += " " + this.getDisplayValueExt(stackElem.value, true, true);
		} else {
			resString += " " + this.getDisplayValueExt((stackElem.value * 100).toFixed(), true) + "%";
		}
		
		resString += "<br>";
		
		return resString;
	},

	toDisplaySeconds : function (secondsRaw) {
	    var sec_num = parseInt(secondsRaw, 10); // don't forget the second param
	    var hours   = Math.floor(sec_num / 3600);
	    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
	    var seconds = sec_num - (hours * 3600) - (minutes * 60);

	    var timeFormated = "";
	    if ( hours ) {  timeFormated = hours + "时 " }
	    if ( minutes) { timeFormated += minutes + "分 " }
	    if ( seconds ) { timeFormated += seconds + "秒 " }

	    return timeFormated;
	},
	
	/**
	 * Converts raw resource value (e.g. 12345.67890) to a formatted representation (i.e. 12.34K)
	 * If 'prefix' flag is true, positive value will be prefixed with '+', e.g. ("+12.34K")
	 */ 
	getDisplayValueExt: function(value, prefix, usePetTickHack){
		
		if(!value) { return 0; }
		
		if (usePetTickHack){
			usePetTickHack = this.opts.usePerSecondValues;
		}
		if (usePetTickHack){
			value = value * this.rate;
		}
		
		//shamelessly copied from Sandcastle Builder code
		var postfixes=[
			{limit:1e210,divisor:1e210,postfix:['Q',' Quita']},
			{limit:1e42,divisor:1e42,postfix:['W',' Wololo']},
			{limit:1e39,divisor:1e39,postfix:['L',' Lotta']},
			{limit:1e36,divisor:1e36,postfix:['F',' Ferro']},
			{limit:1e33,divisor:1e33,postfix:['H',' Helo']}, //or Ballard
			{limit:1e30,divisor:1e30,postfix:['S',' Squilli']},
			{limit:1e27,divisor:1e27,postfix:['U',' Umpty']},

			{limit:1e24,divisor:1e24,postfix:['Y',' Yotta']},
			{limit:1e21,divisor:1e21,postfix:['Z',' Zeta']},
			{limit:1e18,divisor:1e18,postfix:['E',' Exa']},
			{limit:1e15,divisor:1e15,postfix:['P',' Peta']},
			{limit:1e12,divisor:1e12,postfix:['T',' Tera']},
			{limit:1e9,divisor:1e9,postfix:['G',' Giga']},
			{limit:1e6,divisor:1e6,postfix:['M',' Mega']},
			{limit:9e3,divisor:1e3,postfix:['K',' Kilo']}, //WHAT
		];
		
		for(var i = 0; i < postfixes.length; i++) {
			var p = postfixes[i];
			if(value >= p.limit) {
				return this.getDisplayValueExt(value / p.divisor, prefix) + p.postfix[0];
			}
		}
		
		return this.getDisplayValue(value, prefix) + (usePetTickHack ? "/s" : "");
	},
	
	/**
	 * Formats float value to x.xx or x if value is integer
	 */
	getDisplayValue: function(floatVal, plusPrefix){
		
		var plusSign = "+";
		if (floatVal <= 0 || !plusPrefix){
			plusSign = "";
		}
		
		var fixedAmt = this.forceHighPrecision ? 3 : 2;
		
		if (!floatVal.toFixed){
			return plusSign + floatVal;
		}
		
		if (floatVal.toFixed() == floatVal){
			return plusSign + floatVal.toFixed();
		} else {
			return plusSign + floatVal.toFixed(fixedAmt);
		}
	},
	
	updateCalendar: function(){
		var hasCalendarTech = this.science.get("calendar").researched;
		
		var calendarDiv = dojo.byId("calendarDiv");
		if (hasCalendarTech){
			
			var mod = "";
			if (this.calendar.weather) {

			    if (this.calendar.weather == "warm")
			        mod = " (温暖) ";
			    if (this.calendar.weather == "cold")
			        mod = " (寒冷) ";
				//mod = " (" + this.calendar.weather + ") ";
			}

			calendarDiv.innerHTML = " " + this.calendar.year + " 年 - " + this.calendar.seasons[this.calendar.season].title + mod + ", " + this.calendar.day.toFixed() + " 日";
			document.title = "喵游记 -  " + this.calendar.year + " 年, " + this.calendar.seasons[this.calendar.season].title + ", " + this.calendar.day.toFixed() + " 日";
			
			if (this.ironWill && this.calendar.observeBtn){
				document.title = "[EVENT!]" + document.title;
			}
			
		} else {
			calendarDiv.innerHTML = this.calendar.seasons[this.calendar.season].title
		}

	},
	
	addTab: function(tab){
		this.tabs.push(tab);
		tab.game = this;
	},
	
	start: function(){
		if (!dojo.isIE && this.useWorkers && window.Worker){	//IE10 has a nasty security issue with running blob workers
			console.log("开启网页线程中……");
			var blob = new Blob([
				"onmessage = function(e) { setInterval(function(){ postMessage('tick'); }, 1000 / " + this.rate + "); }"]);	//no shitty external js
			var blobURL = window.URL.createObjectURL(blob);

			this.worker = new Worker(blobURL);
			this.worker.addEventListener('message', dojo.hitch(this, function(e) {
				this.tick();
			}));
			this.worker.postMessage("tick");
		} else {
			console.log("开启 js 计时器中...");
			//some older browser, perhaps IE. Have a nice idling.
			var timer = setInterval(dojo.hitch(this, this.tick), (1000 / this.rate));
		}
	},
	
	tick: function(){
		
		if (this.isPaused){
			return;
		}
		
		var timestampStart = new Date().getTime();
		
		this.calendar.tick();
		this.update();
		
		var timestampEnd = new Date().getTime();
		if (window.location.protocol == "file:") {
			
			var tsDiff = timestampEnd - timestampStart;
			this.totalUpdateTime += tsDiff;
			this.ticks++;
			
			var avg = this.totalUpdateTime / this.ticks;
			
			if (tsDiff < 10) {tsDiff = 10;}
			$("#devPanelFPS")[0].innerHTML = "刷新时间 : " + tsDiff + " 毫秒, 平均: " + avg.toFixed() + " 毫秒";
		}
	},
	
	reset: function(){
		
		var msg = "你确定要重置吗?你将会保留你的业力点数和成就。";
		if (this.resPool.get("kittens").value > 70){
			msg = "你确定要重置吗?你将会获得额外的业力和模范点数。";
		}else if (this.resPool.get("kittens").value > 60){
			msg = "你确定要重置吗? 你将会获得额外的业力点数。";
		}else if (this.resPool.get("kittens").value <= 35){
			msg = "你确定要重置吗?  你将无法获得业力点数. 但你能保存已有的业力点数和成就";
		}
		
		if (!confirm(msg)){
			return;
		}

		if (this.resPool.get("kittens").value > 35){
			this.karmaKittens += (this.resPool.get("kittens").value - 35);
		}
		
		if (this.resPool.get("kittens").value > 60){
			this.karmaKittens += (this.resPool.get("kittens").value - 60) * 3;
		}
		
		if (this.resPool.get("kittens").value > 100){
			this.karmaKittens += (this.resPool.get("kittens").value - 100) * 4;
		}
		
		if (this.resPool.get("kittens").value > 150){
			this.karmaKittens += (this.resPool.get("kittens").value - 150) * 5;
		}
		
		if (this.resPool.get("kittens").value > 300){
			this.karmaKittens += (this.resPool.get("kittens").value - 300) * 10;
		}
		
		if (this.resPool.get("kittens").value > 70){
			this.paragonPoints += (this.resPool.get("kittens").value - 70);
		}
		
		this.karmaZebras = parseInt(this.karmaZebras);	//hack
		//that's all folks
		
		//-------------------------- very confusing and convoluted stuff related to karma zebras ---------------
		var totalScience = 0;
		var bonusZebras = 0;
		if (this.science.get("archery").researched && this.karmaZebras < 10){
			bonusZebras = 1;
		}
		for (var i = 0; i < this.science.techs.length; i++){
			var tech = this.science.techs[i];
			if (tech.researched){
				if( tech.cost){
					totalScience += tech.cost;
				}else{
					for (j in tech.prices){
						if (tech.prices[j].name == "science"){
							totalScience += tech.prices[j].val;
						}
					}
				}
			}
		}
		bonusZebras += Math.floor(this.bld.getHyperbolicEffect(totalScience / 10000, 100));
		if (this.resPool.get("zebras").value > 0 ){
			this.karmaZebras += bonusZebras;
		}
		//------------------------------------------------------------------------------------------------------

		var lsData = JSON.parse(LCstorage["com.nuclearunicorn.kittengame.savedata"]);
		if (!lsData){
			lsData = {game: {}};
		}
		dojo.mixin(lsData.game, { 
			karmaKittens: 		this.karmaKittens,
			karmaZebras: 		this.karmaZebras,
			paragonPoints: 		this.paragonPoints,
			nerfs: 				this.nerfs,
			sorrow: 			this.sorrow,
			ironWill : 			true,
			deadKittens: 		0
		});
		
		var saveData = {
			game : lsData.game,
			achievements: lsData.achievements,
			religion: {
				faithRatio: this.religion.faithRatio
			},
			prestige: {
				perks: this.prestige.perks	//never resets
			},
			science: { techs: [] },
			resources: []
		};
		
		//cary rare time-related stuff and techs over reset
		if (this.prestige.getPerk("anachronomancy").researched){
			
			saveData.science.techs.push(this.science.get("chronophysics"));
			saveData.resources.push(this.resPool.get("timeCrystal"));

		}
		
		
		LCstorage["com.nuclearunicorn.kittengame.savedata"] = JSON.stringify(saveData);

		// Hack to prevent an autosave from occurring before the reload completes
		this.isPaused = true;
		window.location.reload();
	},
	
	//TO BE USED EXTERNALLY
	rand: function(ratio){
		return (Math.floor(Math.random()*ratio));
	},
	
	//Karma has no menu. You get served what you deserve.
	updateKarma: function(){
		var stripe = 5;	//initial amount of kittens per stripe
		var karma = this.getTriValue(this.karmaKittens, stripe);

		var milleniums = Math.floor(this.calendar.year / 1000);
		var paragon = milleniums - this.prestige.getSpentParagon();
		if (this.paragonPoints < paragon){
			this.paragonPoints = parseInt(paragon);
		}
		
		this.resPool.get("karma").value = karma;
		this.resPool.get("paragon").value = parseInt(this.paragonPoints);
		
		if (this.karmaZebras){
			this.resPool.get("zebras").maxValue = this.karmaZebras;
		}
	},
	
	getTriValue: function(value, stripe){
		return (Math.sqrt(1+8 * value / stripe)-1)/2;
	}
});
