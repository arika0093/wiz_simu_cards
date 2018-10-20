{
	name: "冷徹魔道 アーレス",
	cardno: 8593,
	imageno: 10764,
	hp: 3003,
	atk: 3834,
	cost: 32,
	attr: [1,-1],
	species: [9],
	islegend: true,
	ape: "黄昏メアレスⅢ",
	is_dist: true,
	as1: {
		desc: "<全体攻撃>敵全体へダメージ(140%)",
		proc: ChainAllAttack(1.4, 0),
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを水属性化",
		turn: 5,
		proc: [ss_panel_change([0,1,0,0,0])],
	},
	awakes: [
		Costdown(10),
		Panel_boost([0,1,0,0,0,],2),
		Statusup(200,0),
		Statusup(0,200),
		NEFTJOD(30),
		Attr_relief([1,0,0,0,0,],10),
		Fastskill(2),
		Attr_statusup(0,200, [0,1,0,0,0,]),
		Attr_statusup(200,0, [0,1,0,0,0,]),
		Fastskill(2),
	],
	as2: {
		desc: "<全体攻撃>敵全体へダメージ(170%)",
		proc: ChainAllAttack(1.7, 0),
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルを水属性化し、回復の効果を付与(10%)",
		turn: 7,
		proc: [ss_panel_change([0,1,0,0,0]), panel_healally(0.1)],
	},
	Lawake: [
		Statusup(400,0),
		Attr_statusup(0,100, [0,1,0,0,0,]),
	],
}