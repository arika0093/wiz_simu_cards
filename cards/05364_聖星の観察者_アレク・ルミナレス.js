{
	name: "聖星の観察者 アレク・ルミナレス",
	cardno: 5364,
	imageno: 7211,
	hp: 2421,
	atk: 2439,
	cost: 23,
	attr: [0,-1],
	species: [9],
	disable: true,
	islegend: true,
	is_dist: true,
	as1: {
		desc: "<チェイン攻撃>3チェインでダメージアップ(300%)",
		proc: ChainAttack(3.0, 3),
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルをALL属性化",
		turn: 7,
		proc: [ss_panel_change([1,1,1,0,0])],
	},
	awakes: [
		Fastskill(1),
		Panel_boost([1,0,0,0,0,],1),
		Attr_statusup(0,100, [1,0,0,0,0,]),
		Fastskill(2),
		Panel_boost([1,0,0,0,0,],1),
		Attr_statusup(0,100, [1,0,0,0,0,]),
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(100,0, [1,0,0,0,0,]),
		Statusup(0,200),
		Statusup(200,0),
	],
	as2: {
		desc: "<チェイン攻撃>3チェインでダメージアップ(400%)",
		proc: ChainAttack(4.0, 3),
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルをALL属性化し、攻撃力アップの効果を付与(20%)",
		turn: 9,
		proc: [ss_panel_change([1,1,1,0,0]), panel_attackup(0.20)],
	},
	Lawake: [
		Statusup(0,300),
		Statusup(300,0),
	],
}