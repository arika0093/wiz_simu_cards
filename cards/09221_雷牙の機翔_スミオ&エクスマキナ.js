{
	name: "雷牙の機翔 スミオ&エクスマキナ",
	cardno: 9221,
	imageno: 8165,
	hp: 2580,
	atk: 4283,
	cost: 57,
	attr: [2,0],
	species: [8],
	islegend: true,
	ape: "幻魔特区スザクⅢ",
	as1: {
		desc: "<複属性攻撃強化>残りHPが80%以上で雷属性の攻撃力をアップ(50%)、複属性が火属性だとさらにアップ(50%)",
		proc: add_cond(ChainEnhance_SubAttr(0.5, 1.0, [0,0,1,0,0], [1,0,0,0,0], 0), when_hp_more(0.8)),
	},
	ss1: {
		desc: "<反動大魔術>スキル反射を無視し、敵全体へ雷属性のダメージ(750%)(スキル使用後、1ターン封印状態に)",
		turn: 5,
		proc: [ss_damage_all(7.5, [2]), ss_allsealed_own(1), ss_ignore_skillcounter()],
	},
	awakes: [
		Panel_boost([0,0,1,0,0,],2),
		NEFTJOD(60),
		Panel_boost([0,0,1,0,0,],2),
		Fastskill(3),
		Attr_statusup(0,200, [1,0,1,0,0,]),
		Attr_statusup(200,0, [1,0,1,0,0,]),
		Attr_relief([1,1,1,1,1,],10),
		Attr_statusup_sattr(0,100, [0,0,1,0,0,], 0,300, [1,0,0,0,0,]),
		Attr_statusup_sattr(100,0, [0,0,1,0,0,], 300,0, [1,0,0,0,0,]),
		Abstate_invalid("ss_sealed"),
	],
	as2: {
		desc: "<複属性攻撃強化>残りHPが80%以上で雷属性の攻撃力をアップ(80%)、複属性が火属性だとさらにアップ(50%)",
		proc: add_cond(ChainEnhance_SubAttr(0.8, 1.3, [0,0,1,0,0], [1,0,0,0,0], 0), when_hp_more(0.8)),
	},
	ss2: {
		desc: "<反動大魔術>スキル反射を無視し、敵全体へ雷属性のダメージ(1050%)(スキル使用後、1ターン封印状態に)",
		turn: 8,
		proc: [ss_damage_all(10.5, [2]), ss_allsealed_own(1), ss_ignore_skillcounter()],
	},
	Lawake: [
		Statusup(1000,0),
		Attr_statusup(0,200, [1,0,1,0,0,]),
	],
}