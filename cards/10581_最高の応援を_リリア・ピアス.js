{
	name: "最高の応援を リリア・ピアス",
	cardno: 10581,
	imageno: 13006,
	hp: 6132,
	atk: 3531,
	cost: 50,
	attr: [2,-1],
	species: [8],
	islegend: true,
	ape: "黒ウィズPRIDE",
	as1: {
		desc: "<攻撃強化・ガード>全属性のダメージを10%軽減し、デッキに単色の精霊が多いほど、攻撃力をアップ(15%)(上限:5段階)",
		proc: [as_guard(0.10, [1,1,1,1,1], 0), add_cond(ChainEnhance(0, [0,0,1,0,0], 0), as_singleattr_num(0, 0.15))],
	},
	ss1: {
		desc: "<精霊強化>4ターンの間、味方の攻撃力をアップ(250%)(発動中行動不可)",
		turn: 4,
		proc: [ss_reinforcement_all(4, [ss_enhance_all(2.5, 1, [1, 1, 1, 1, 1], "RF")])],
	},
	awakes: [
		Attr_statusup_oattr(0,400, [0,0,1,0,0,]),
		Panel_boost([0,0,1,0,0,],2),
		Fastskill(1),
		Attr_statusup(400,0, [0,0,1,0,0,]),
		Fastskill(2),
		Abstate_invalid("ss_sealed"),
		Attr_statusup(0,400, [0,0,1,0,0,]),
		Panel_boost([0,0,1,0,0,],2),
		Attr_statusup_oattr(400,0, [0,0,1,0,0,]),
		Attr_relief([1,1,1,1,1,],10),
	],
	as2: {
		desc: "<攻撃強化・ガード>全属性のダメージを10%軽減し、デッキに単色の精霊が多いほど、攻撃力をアップ(20%)(上限:5段階)",
		proc: [as_guard(0.10, [1,1,1,1,1], 0), add_cond(ChainEnhance(0, [0,0,1,0,0], 0), as_singleattr_num(0, 0.20))],
	},
	ss2: {
		desc: "<精霊強化>4ターンの間、味方の攻撃力をアップ(350%)(発動中行動不可)",
		turn: 6,
		proc: [ss_reinforcement_all(4, [ss_enhance_all(3.5, 1, [1, 1, 1, 1, 1], "RF")])],
	},
	Lawake: [
		Statusup(0,1000),
		Statusup(1000,0),
	],
}