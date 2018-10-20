{
	name: "ピュアハザード ペオルタンω",
	cardno: 8464,
	imageno: 10614,
	hp: 2821,
	atk: 6224,
	cost: 56,
	attr: [0,-1],
	species: [2],
	islegend: true,
	ape: "アイドルキャッツ！",
	is_dist: true,
	as1: {
		desc: "<ギャンブル攻撃>ダメージがイチかバチかアップ(150%～350%)、デッキに単色の精霊が多いほど、さらにダメージアップ(40%)(上限:5段階)",
		proc: add_cond(ChainStakesAttack(1.5, 3.5, 0), as_singleattr_num(0, 0.4)),
	},
	ss1: {
		desc: "<時限大魔術>スキル反射を無視し、6ターン後に敵単体へ火属性のダメージ(3000%)(上限設置数:5)",
		turn: 1,
		proc: [ss_damage_timebomb(30, [0], 1, 6), ss_ignore_skillcounter()],
	},
	awakes: [
		Costdown(10),
		Panel_boost([1,0,0,0,0,],2),
		Fastskill(1),
		Spec_statusup(0,300, [2,]),
		Spec_statusup(300,0, [2,]),
		Panel_boost([1,0,0,0,0,],2),
		NEFTJOD(30),
		Attr_statusup(0,300, [1,0,0,0,0,]),
		Attr_statusup(300,0, [1,0,0,0,0,]),
		Abstate_invalid("ss_sealed"),
	],
	as2: {
		desc: "<ギャンブル攻撃>ダメージがイチかバチかアップ(150%～350%)、デッキに単色の精霊が多いほど、さらにダメージアップ(60%)(上限:5段階)",
		proc: add_cond(ChainStakesAttack(1.5, 3.5, 0), as_singleattr_num(0, 0.6)),
	},
	ss2: {
		desc: "<時限大魔術>スキル反射を無視し、6ターン後に敵単体へ火属性のダメージ(4000%)(上限設置数:5)",
		turn: 2,
		proc: [ss_damage_timebomb(40, [0], 1, 6), ss_ignore_skillcounter()],
	},
	Lawake: [
		Statusup(0,500),
		Attr_statusup(0,200, [1,0,0,0,0,]),
	],
}