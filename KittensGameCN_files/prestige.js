dojo.declare("classes.managers.PrestigeManager", com.nuclearunicorn.core.TabManager, {

	constructor: function(game){
		this.game = game;

		/*this.registerMeta(this.perks, { getEffect: function(meta, effectName){
			if (meta.researched){
				return meta.effects[effectName];
			}
			return 0;
		}});*/
	},

    perks:[{
		name: "engeneering",
		title: "工程学",
		description: "所有价格下降 1%。解锁更多价格升级。",
		paragon: 5,
		unlocked: true,
		researched: false,
		handler: function(game, self){
			game.prestige.getPerk("megalomania").unlocked = true;
			game.prestige.getPerk("goldenRatio").unlocked = true;
		},
		effects:{
			"priceRatio" : -0.01
		}
	},{
		name: "megalomania",
		title: "狂妄自大",
		description: "解锁额外的超级油轮。",
		paragon: 25,
		unlocked: false,
		researched: false,
		handler: function(game, self){
			game.religion.getZU("marker").unlocked = true;
			game.religion.getZU("blackPyramid").unlocked = true;
		}
	},{
		name: "goldenRatio",
		title: "黄金比例",
		description: "所有价格比例减少~ 1.618%",
		paragon: 50,
		unlocked: false,
		researched: false,
		handler: function(game, self){
			game.prestige.getPerk("divineProportion").unlocked = true;
		},
		effects:{
			"priceRatio" : -(1 + Math.sqrt(5)) / 200	//Calculates the Golden Ratio
		}
	},{
		name: "divineProportion",
		title: "神圣比例",
		description: "所有价格比例降低1.75%",
		paragon: 100,
		unlocked: false,
		researched: false,
		handler: function(game, self){
			game.prestige.getPerk("vitruvianFeline").unlocked = true;
		},
		effects:{
			"priceRatio" : -0.0175
		}
	},{
		name: "vitruvianFeline",
		title: "维特鲁威猫",
		description: "所有价格比例降低2.25%",
		paragon: 250,
		unlocked: false,
		researched: false,
		handler: function(game, self){
			game.prestige.getPerk("renaissance").unlocked = true;
		},
		effects:{
			"priceRatio" : -0.0225
		}
	},{
		name: "renaissance",
		title: "文艺复兴",
		description: "所有价格比例降低2.5%",
		paragon: 750,
		unlocked: false,
		researched: false,
		handler: function(game, self){
		},
		effects:{
			"priceRatio" : -0.025
		}
	},
	{
		name: "diplomacy",
		title: "外交学",
		description: "在竞争中被发现和占据更好的地位。解锁更多贸易升级。",
		paragon: 5,
		unlocked: true,
		researched: false,
		handler: function(game, self){
			game.prestige.getPerk("zebraDiplomacy").unlocked = true;
		}
	},{
		name: "zebraDiplomacy",
		title: "斑马外交",
		description: "一些斑马猎人会留在村里。(TBD)",
		paragon: 50,
		unlocked: false,
		researched: false,
		handler: function(game, self){
		}
	},{
		name: "chronomancy",
		title: "天赋时间",
		description: "流星和明星的事件将会发生得更频繁。",
		paragon: 25,
		unlocked: true,
		researched: false,
		handler: function(game, self){
			game.prestige.getPerk("anachronomancy").unlocked = true;
			game.prestige.getPerk("unicornmancy").unlocked = true;
		}
	},{
		name: "unicornmancy",
		title: "预测独角兽",
		description: "独角兽的裂缝和象牙流星发生的更频繁。",
		paragon: 125,
		unlocked: true,
		researched: false,
		handler: function(game, self){
		}
	},
	{
		name: "anachronomancy",
		title: "Anachronomancy",
		description: "Time crystals and chronophisics will be saved across resets.",
		paragon: 125,
		unlocked: false,
		researched: false,
		handler: function(game, self){
		}
	}],

	game: null,

	constructor: function(game){
		this.game = game;
	},

	save: function(saveData){
		saveData.prestige = {
			perks: this.perks
		}
	},

	load: function(saveData){
		if (!saveData.prestige){
			return;
		}

		var self = this;

		if (saveData.prestige.perks){
			this.loadMetadata(this.perks, saveData.prestige.perks, ["unlocked", "researched"], function(loadedElem){
			});
		}
		for (var i = 0; i< this.perks.length; i++){
			if (this.perks[i].handler && this.perks[i].researched){
				this.perks[i].handler(this.game, this.perks[i]);
			}
		}
	},

	update: function(){

	},

	getEffect: function(name){
		//return this.getEffectCached(name);
		return this.getMetaEffect(name, { meta: this.perks, provider: {
			getEffect: function(perk, effectName){
				if (!perk.effects || !perk.researched){
					return 0;
				}
				return perk.effects[effectName];
			}
		}});
	},

	getPerk: function(name){
		return this.getMeta(name, this.perks);
	},

	getSpentParagon: function(){
		var paragon = 0;
		for (var i = 0; i < this.perks.length; i++){
			var perk = this.perks[i];
			if (perk.researched){
				paragon += perk.paragon || 0;
			}
		}
		return paragon;
	}
});

dojo.declare("classes.ui.PrestigeBtn", com.nuclearunicorn.game.ui.BuildingBtn, {

	perk: null,

	constructor: function(opts, game) {
	},

	getPerk: function(id){
		if (!this.perk){
			this.perk = this.game.prestige.getPerk(this.id);
		}
		return this.perk;
	},

	//what a disgrace
	getBuilding: function(){
		return this.getPerk();
	},

	getPrices: function(){
		var price = [{ name: "paragon", val: this.getPerk().paragon}];
		return price;
	},

	getName: function(){
		var perk = this.getPerk();
		if (perk.researched){
			return perk.title + " (完成)";
		} else {
			return perk.title;
		}
	},

	updateEnabled: function(){
		this.inherited(arguments);
		if (this.getPerk().researched){
			this.setEnabled(false);
		}
	},

	updateVisible: function(){
		var perk = this.getPerk();
		if (!perk.unlocked){
			this.setVisible(false);
		}else{
			this.setVisible(true);
		}

		if (perk.researched && this.game.science.hideResearched){
			this.setVisible(false);
		}
	},

	onClick: function(){
		this.animate();
		var perk = this.getPerk();
		if (this.enabled && this.hasResources()){
			this.payPrice();
			this.game.paragonPoints -= perk.paragon;

			perk.researched = true;
			if (perk.handler){
				perk.handler(this.game, perk);
			}

			this.update();
		}
	},
});

dojo.declare("classes.ui.PrestigePanel", com.nuclearunicorn.game.ui.Panel, {

	game: null,

	constructor: function(){
	},

    render: function(container){
		var content = this.inherited(arguments);

		var self = this;
		dojo.forEach(this.game.prestige.perks, function(perk, i){
			var button = new classes.ui.PrestigeBtn({
				id: 		perk.name,
				name: 		perk.title,
				description: perk.description
			}, self.game);
			button.render(content);
			self.addChild(button);
		});
	}

});
