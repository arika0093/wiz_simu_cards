{
	name: "神獣疾走の印 エトワール&メリエル",
	cardno: 5067,
	imageno: 6807,
	hp: 4426,
	atk: 1954,
	cost: 47,
	attr: [2,1],
	species: [9],
	disable: true,
	islegend: true,
	ape: "八百万神秘譚Ⅱ",
	disable: true,
	as1: {
		desc: "<回復>水・雷属性の味方を回復、HP20%以下でさらに回復(13%/38%)",
		proc: [Heal(0.13, [0,1,1,0,0], 0), add_cond(Heal(0.38, [0,1,1,0,0], 0), when_hp_less(0.2))],
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを水・雷属性化",
		turn: 3,
		proc: [ss_panel_change([0,1,1,0,0])],
	},
	awakes: [
		Panel_boost([0,0,1,0,0,],1),
		Fastskill(1),
		Attr_statusup(0,200, [0,1,1,0,0,]),
		NEFTJOD(30),
		Statusup(200,0),
		Panel_boost([0,0,1,0,0,],2),
		Attr_statusup(200,0, [0,1,1,0,0,]),
		Attr_relief([1,0,0,0,0,],20),
		Fastskill(2),
		Spec_statusup(200,0, [1,4,9,]),
	],
	as2: {
		desc: "<回復>水・雷属性の味方を回復、HP20%以下でさらに回復(17%/42%)",
		proc: [Heal(0.17, [0,1,1,0,0], 0), add_cond(Heal(0.42, [0,1,1,0,0], 0), when_hp_less(0.2))],
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルを水・雷属性化し、ダメージ25%軽減の効果を付与。HP20%以下でさらにダメージ35%軽減の効果を付与",
		turn: 6,
		proc: [ss_panel_change([0,1,1,0,0]), panel_attr_guard([1,1,1,1,1], ss_hp_less(0.20, 0.60, 0.25))],
	},
	Lawake: [
		Statusup(700,0),
		Statusup(0,200),
		NEFTJOD(30),
	],
}