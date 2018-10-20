{
	name: "独立不撓 アニ・レオンハート",
	cardno: 9969,
	imageno: 12318,
	hp: 1956,
	atk: 6132,
	cost: 40,
	attr: [2,-1],
	species: [8],
	islegend: true,
	ape: "コラボ(進撃の巨人)",
	as1: {
		desc: "<連撃>敵単体を3回連続攻撃(250%)、解答が早いほどさらにアップ(60%)(上限:4段階)",
		proc: add_cond(ChainDualAttack(2.5, 0, 3), as_timedep(0.6)),
	},
	ss1: {
		desc: "<純属性大魔術>スキル反射を無視し、敵全体へ雷属性のダメージ、雷単色の精霊が多いほどダメージアップ(上限値:1300%)",
		turn: 8,
		proc: [ss_damage_all(ss_pureattr_cond(13), [2]), ss_ignore_skillcounter()],
	},
	awakes: [
		Costdown(10),
		Attr_statusup(0,400, [0,0,1,0,0,]),
		Fastskill(1),
		Attr_statusup(400,0, [0,0,1,0,0,]),
		Attr_statusup_oattr(0,400, [0,0,1,0,0,]),
		Attr_statusup_oattr(400,0, [0,0,1,0,0,]),
		Panel_boost([0,0,1,0,0,],2),
		Fastskill(2),
		Panel_boost([0,0,1,0,0,],2),
		Fastskill(1),
	],
	as2: {
		desc: "<連撃>敵単体を3回連続攻撃(350%)、解答が早いほどさらにアップ(60%)(上限:4段階)",
		proc: add_cond(ChainDualAttack(3.5, 0, 3), as_timedep(0.6)),
	},
	ss2: {
		desc: "<純属性大魔術>スキル反射を無視し、敵全体へ雷属性のダメージ、雷単色の精霊が多いほどダメージアップ(上限値:1600%)",
		turn: 11,
		proc: [ss_damage_all(ss_pureattr_cond(16), [2]), ss_ignore_skillcounter()],
	},
	Lawake: [
		Statusup(0,1000),
		Statusup(1000,0),
	],
}