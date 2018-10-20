{
	name: "不動烈閃 ミハネ・カズラ",
	cardno: 8986,
	imageno: 11194,
	hp: 2245,
	atk: 7514,
	cost: 50,
	attr: [1,-1],
	species: [8],
	islegend: true,
	ape: "喰牙RIZEⅡ",
	as1: {
		desc: "<攻撃>敵単体へのダメージアップ(150%)、デッキに単色の精霊が多いほど、さらにダメージアップ(50%)（上限:5段階)",
		proc: add_cond(ChainAttack(1.5, 0), as_singleattr_num(0, 0.5)),
	},
	ss1: {
		desc: "<残滅大魔術>敵全体へ水属性のダメージ(600%)、さらに15ターンの間、水属性のダメージ(100%)",
		turn: 4,
		proc: [ss_continue_damage(6.0, 1.0, [1], 15)],
	},
	awakes: [
		Costdown(20),
		Panel_boost([0,1,0,0,0,],2),
		Attr_statusup_oattr(0,400, [0,1,0,0,0,]),
		Attr_statusup_oattr(400,0, [0,1,0,0,0,]),
		Panel_boost([0,1,0,0,0,],2),
		NEFTJOD(30),
		Fastskill(3),
		Attr_statusup(0,400, [0,1,0,0,0,]),
		Attr_statusup(400,0, [0,1,0,0,0,]),
		Awake_damage_multiple(1.1, 500),
	],
	as2: {
		desc: "<攻撃>敵単体へのダメージアップ(250%)、デッキに単色の精霊が多いほど、さらにダメージアップ(50%)（上限:5段階)",
		proc: add_cond(ChainAttack(2.5, 0), as_singleattr_num(0, 0.5)),
	},
	ss2: {
		desc: "<残滅大魔術>敵全体へ水属性のダメージ(600%)、さらに15ターンの間、水属性のダメージ(100%)",
		turn: 4,
		proc: [ss_continue_damage(6.0, 1.0, [1], 15)],
	},
	Lawake: [
		Statusup(0,1500),
		NEFTJOD(30),
	],
}