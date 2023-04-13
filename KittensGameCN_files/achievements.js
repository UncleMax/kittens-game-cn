dojo.declare("classes.managers.Achievements", null, {
	game: null,

	achievements: [
	{
		name: "unicornConspiracy",
		title: "发现独角兽",
		description: "发现了一只罕见的独角兽!",
		condition: function(){
			return ( this.game.resPool.get("unicorns").value > 0 );
		},
		unlocked: false
	},{
		name: "uniception",
		title: "这不是真的",
		description: "发现独角兽的眼泪",
		condition: function(){
			return ( this.game.resPool.get("tears").value > 0 );
		},
		unlocked: false
	},{
		name: "sinsOfEmpire",
		title: "太阳帝国的原罪",
		description: "等等, 认真的?",
		condition: function(){
			return ( this.game.resPool.get("alicorn").value > 0 );
		},
		unlocked: false
	},{
		name: "anachronox",
		title: "星际之门",
		description: "请止步",
		condition: function(){
			return ( this.game.resPool.get("timeCrystal").value > 0 );
		},
		unlocked: false
	},{
		name: "deadSpace",
		title: "你个渣渣,这里是死亡空间",
		description: "你就是再拼命的嘶吼,也不会有人听到你的喊叫声的!.",
		condition: function(){
			return ( this.game.resPool.get("necrocorn").value > 0 );
		},
		unlocked: false
	},{
		name: "ironWill",
		title: "钢铁意志",
		description: "你真的值得这么干",
		condition: function(){
			return ( this.game.ironWill && !this.game.resPool.get("kittens").value && this.game.bld.get("mine").val > 0 );
		},
		unlocked: false
	},{
		name: "uberkatzhen",
		title: "魅力小猫",
		description: "那些没能杀掉你的事让你变得更强",
		condition: function(){
			return ( this.game.ironWill && !this.game.resPool.get("kittens").value && this.game.bld.get("warehouse").val > 0 );
		},
		unlocked: false
	},{
		name: "hundredYearsSolitude",
		title: "你居然活过了一百岁",
		description: "永远有多远?",
		condition: function(){
			return ( this.game.ironWill && !this.game.resPool.get("kittens").value && this.game.bld.get("steamworks").val > 0 );
		},
		unlocked: false
	},{
		name: "soilUptuned",
		title: "没有被开垦的土地",
		description: "在钢铁意志模式下拥有45个牧场",
		condition: function(){
			return ( this.game.ironWill && !this.game.resPool.get("kittens").value && this.game.bld.get("pasture").val >= 45 );
		},
		unlocked: false
	},{
		name: "atlasUnmeowed",
		title: "喵特拉斯",
		description: "在钢铁意志模式下建造一个发电厂",
		condition: function(){
			return ( this.game.ironWill && !this.game.resPool.get("kittens").value && this.game.bld.get("magneto").val > 0 );
		},
		unlocked: false
	},{
		name: "meowMeowRevolution",
		title: "老子喵要革命",
		description: "在钢铁意志模式下建造一个工厂",
		condition: function(){
			return ( this.game.ironWill && !this.game.resPool.get("kittens").value && this.game.bld.get("factory").val > 0 );
		},
		unlocked: false
	},{
		name: "spaceOddity",
		title: "充满未知的空间",
		description: "在钢铁意志模式下完成登月计划",
		condition: function(){
			return ( this.game.ironWill && this.game.space.getProgram("moonMission").researched );
		},
		unlocked: false
	},{
		name: "sunGod",
		title: "金乌",
		description: "你对金乌崇拜了696,342 信仰",
		condition: function(){
			return ( this.game.religion.faith >= 696342 );
		},
		unlocked: false
	},{
		name: "heartOfDarkness",
		title: "黑暗之心",
		description: "成为一个斑马部落的酋长. (这怎么可能做到?)",
		condition: function(){
			return (this.game.resPool.get("zebras").value > 1);
		},
		unlocked: false,
	},{
		name: "winterIsComing",
		title: "冬天来了",
		description: "死了10只喵星人",
		unethical: true,
		condition: function(){
			return (this.game.deadKittens >= 10);
		},
		unlocked: false
	},{
		name: "youMonster",
		title: "你是个禽兽",
		unethical: true,
		description: "可怜的喵星人~",
		condition: function(){
			return (this.game.deadKittens >= 100);
		},
		unlocked: false
	},{
		name: "superUnethicalClimax",
		title: "你的不道德的行为已经走上了人生巅峰",
		unethical: true,
		description: "小子,又开点击器了吧?作弊!.",
		condition: function(){
			return (this.game.cheatMode);
		},
		unlocked: false
	},{
		name: "lotusMachine",
		title: "一切都停止了",
		description: "到这个循环再生",
		condition: function(){
			return (this.game.resPool.get("karma").value >= 1);
		},
		unlocked: false
	},{
		name: "serenity",
		title: "平静",
		description: "没有失去50只喵星人中的任何一只",
		condition: function(){
			return (this.game.village.getKittens() >= 50 && this.game.deadKittens == 0);
		},
		unlocked: false
	},
	{
		name: "utopiaProject",
		title: "乌托邦项目",
		description: "获得总幸福度加成 150%",
		condition: function(){
			return (this.game.village.happiness >= 1.5 && this.game.resPool.get("kittens").value > 35);
		},
		unlocked: false
	}
	],

	constructor: function(game){
		this.game = game;
	},

	get: function(name){
		for( var i = 0; i< this.achievements.length; i++){
			if (this.achievements[i].name == name){
				return this.achievements[i];
			}
		}
	},

	hasUnlocked: function(){
		for( var i = 0; i< this.achievements.length; i++){
			if (this.achievements[i].unlocked){
				return true;
			}
		}
		return false;
	},

	update: function(){
		for (var i = 0; i< this.achievements.length; i++){
			var ach = this.achievements[i];
			if (!ach.unlocked && dojo.hitch(this, ach.condition)()){
				ach.unlocked = true;
				this.game.msg("成就解锁: " + ach.title + "!");
				this.game.achievementTab.visible = true;
			}
		}
	},

	save: function(saveData){
		saveData.achievements = this.achievements;
	},

	load: function(saveData){
		var ach = saveData.achievements;
		if (!ach || !ach.length){
			return;
		}
		for(var i = 0; i< ach.length; i++){
			var savedAch = ach[i];

			var a = this.get(savedAch.name);
			a.unlocked = savedAch.unlocked;
		}
	}
});

dojo.declare("com.nuclearunicorn.game.ui.tab.AchTab", com.nuclearunicorn.game.ui.tab, {
	render: function(content){
		var div = dojo.create("div", { }, content);

		div.innerHTML = "";
		for (var i = 0; i< this.game.achievements.achievements.length; i++){
			var ach = this.game.achievements.achievements[i];
			if (ach.unlocked){
				var unethicalClass = ach.unethical ? "unethical" : "";
				div.innerHTML += "<span class='achievement " + unethicalClass + "' style='cursor:pointer' title= '" + ach.description + "'>" + ach.title + "</span>";
			} else {
				div.innerHTML += "<span class='achievement' style='cursor:pointer' title= '???'>???</span>";
			}
		}
	}
});
