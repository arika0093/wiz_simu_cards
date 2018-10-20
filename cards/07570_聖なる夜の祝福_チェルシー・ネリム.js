{
	name: "聖なる夜の祝福 チェルシー・ネリム",
	cardno: 7570,
	imageno: 7107,
	hp: 4877,
	atk: 2770,
	cost: 47,
	attr: [0,-1],
	species: [9],
	islegend: true,
	ape: "チェルシーの最高の贈り物",
	is_dist: true,
	as1: {
		desc: "<種族攻撃強化>火属性の味方の攻撃力をアップ、術士はさらにアップ(30%/80%)",
		proc: [ChainEnhance(0.3, [1,0,0,0,0], 0), ChainSpecEnhance(0.8, [1,0,0,0,0], [9], 0)],
	},
	ss1: {
		desc: "<ガード>3ターン雷属性ダメージを50%軽減する",
		turn: 8,
		proc: [ss_attr_guard([0,0,1,0,0], 0.5, 3)],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],2),
		Panel_boost([1,0,0,0,0,],2),
		Abstate_invalid("discharge"),
		Fastskill(1),
		Attr_statusup(200,0, [1,0,0,0,0,]),
		Attr_statusup(0,200, [1,0,0,0,0,]),
		Fastskill(2),
		Spec_statusup(0,200, [9,]),
		Spec_statusup(200,0, [9,]),
		Attr_relief([1,1,1,1,1,],10),
	],
	as2: {
		desc: "<種族攻撃強化>火属性の味方の攻撃力をアップ、術士はさらにアップ(60%/110%)",
		proc: [ChainEnhance(0.6, [1,0,0,0,0], 0), ChainSpecEnhance(1.1, [1,0,0,0,0], [9], 0)],
	},
	ss2: {
		desc: "<ガード>4ターン雷属性ダメージを50%軽減する",
		turn: 10,
		proc: [ss_attr_guard([0,0,1,0,0], 0.5, 4)],
	},
	Lawake: [
		Statusup(0,500),
		Statusup(500,0),
	],
}