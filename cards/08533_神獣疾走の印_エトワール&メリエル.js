{
	name: "神獣疾走の印 エトワール&メリエル",
	cardno: 8533,
	imageno: 6807,
	hp: 5514,
	atk: 2114,
	cost: 54,
	attr: [2,1],
	species: [9],
	islegend: true,
	ape: "八百万神秘譚Ⅱ",
	as1: {
		desc: "<回復>水・雷属性の味方を回復(14%)、HP20%以下でさらに回復(25%)",
		proc: [Heal(0.14, [0,1,1,0,0], 0), add_cond(Heal(0.39, [0,1,1,0,0], 0), when_hp_less(0.2))],
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを水・雷属性化",
		turn: 3,
		proc: [ss_panel_change([0,1,1,0,0])],
	},
	awakes: [
		Panel_boost([0,0,1,0,0,],4),
		Attr_statusup(0,200, [0,1,1,0,0,]),
		Attr_statusup(200,0, [0,1,1,0,0,]),
		Attr_relief([1,0,0,0,0,],20),
		NEFTJOD(30),
		Fastskill(3),
		Attr_statusup_sattr(0,100, [0,0,1,0,0,], 0,300, [0,1,0,0,0,]),
		Attr_statusup_sattr(100,0, [0,0,1,0,0,], 300,0, [0,1,0,0,0,]),
		Heal_afterbattle(10),
		Abstate_invalid(["as_sealed", "ss_sealed"]),
	],
	as2: {
		desc: "<回復>水・雷属性の味方を回復(17%)、HP20%以下でさらに回復(25%)",
		proc: [Heal(0.17, [0,1,1,0,0], 0), add_cond(Heal(0.42, [0,1,1,0,0], 0), when_hp_less(0.2))],
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルをALL属性化し、ダメージ25%軽減の効果を付与。HP20%以下でさらにダメージ35%軽減の効果を付与",
		turn: 6,
		proc: [ss_panel_change([1,1,1,0,0]), panel_attr_guard([1,1,1,1,1], ss_hp_less(0.20, 0.60, 0.25))],
	},
	Lawake: [
		Statusup(1000,0),
		Attr_statusup(0,100, [0,1,1,0,0,]),
		NEFTJOD(30),
	],
}