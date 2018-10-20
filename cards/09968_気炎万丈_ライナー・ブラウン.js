{
	name: "気炎万丈 ライナー・ブラウン",
	cardno: 9968,
	imageno: 12317,
	hp: 3724,
	atk: 4324,
	cost: 40,
	attr: [1,-1],
	species: [8],
	islegend: true,
	ape: "コラボ(進撃の巨人)",
	as1: {
		desc: "<種族攻撃強化>3チェインで水属性の味方の攻撃力をアップ(50%)、戦士はさらにアップ(50%)",
		proc: [ChainEnhance(0.5, [0, 1, 0, 0, 0], 3), ChainSpecEnhance(1.0, [0, 1, 0, 0, 0], [8], 3)],
	},
	ss1: {
		desc: "<ガード>3ターン火属性のダメージを75%軽減する",
		turn: 8,
		proc: [ss_attr_guard([1,0,0,0,0], 0.75, 3)],
	},
	as2: {
		desc: "<種族攻撃強化>3チェインで水属性の味方の攻撃力をアップ(80%)、戦士はさらにアップ(50%)",
		proc: [ChainEnhance(0.8, [0, 1, 0, 0, 0], 3), ChainSpecEnhance(1.3, [0, 1, 0, 0, 0], [8], 3)],
	},
	ss2: {
		desc: "<ガード>4ターン火属性のダメージを75%軽減する",
		turn: 10,
		proc: [ss_attr_guard([1,0,0,0,0], 0.75, 4)],
	},
	awakes: [
		Attr_statusup(0,400,[0,1,0,0,0,]),
		Attr_relief([0,1,0,0,0,],10),
		Attr_statusup(400,0,[0,1,0,0,0,]),
		Panel_boost([0,1,0,0,0,],2),
		Fastskill(1),
		Attr_relief([1,0,0,0,0,],10),
		Attr_statusup_oattr(0,400,[0,1,0,0,0,]),
		Attr_statusup_oattr(400,0,[0,1,0,0,0,]),
		Fastskill(1),
		Attr_relief([0,0,1,0,0,],10),
	],
	Lawake: [
		Statusup(0,1000),
		Statusup(1000,0),
	],
}