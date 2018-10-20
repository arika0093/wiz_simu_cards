{
	name: "水滴る夏の時 ホリー・アマナウ",
	cardno: 8736,
	imageno: 10913,
	hp: 6275,
	atk: 2636,
	cost: 45,
	attr: [1,-1],
	species: [9],
	islegend: true,
	ape: "大魔道杯 in エタクロⅢ",
	is_dist: true,
	as1: {
		desc: "<回復>水属性の味方のHPを回復(13%)",
		proc: Heal(0.13, [0,1,0,0,0], 0),
	},
	ss1: {
		desc: "<純属性強化>4ターンの間、水単色精霊が多いほど、水単色精霊のダメージを強化し(100%)、さらに永続ターン、攻撃力、HPのステータスをアップ(上限値:1000,1000)",
		turn: 4,
		proc: [ss_statusup_all([ss_pureattr_cond(1000), ss_pureattr_cond(1000)], [1000,1000], -1, [0,1,0,0,0]), ss_enhance_all(ss_pureattr_cond(1.0), 4, [0,1,0,0,0])],
	},
	awakes: [
		Panel_boost([0,1,0,0,0,],2),
		Attr_statusup_oattr(0,300, [0,1,0,0,0,]),
		Attr_statusup_oattr(300,0, [0,1,0,0,0,]),
		Panel_boost([0,1,0,0,0,],2),
		NEFTJOD(30),
		Attr_relief([1,0,0,0,0,],10),
		Heal_afterbattle(10),
		Attr_statusup(0,300, [0,1,0,0,0,]),
		Attr_statusup(300,0, [0,1,0,0,0,]),
		Fastskill(4),
	],
	as2: {
		desc: "<回復>水属性の味方のHPを回復(16%)",
		proc: Heal(0.16, [0,1,0,0,0], 0),
	},
	ss2: {
		desc: "<純属性強化>4ターンの間、水単色精霊が多いほど、水単色精霊のダメージを強化し(200%)、さらに永続ターン、攻撃力、HPのステータスをアップ(上限値:2000,2000)",
		turn: 8,
		proc: [ss_statusup_all([ss_pureattr_cond(2000), ss_pureattr_cond(1000)], [2000,2000], -1, [0,1,0,0,0]), ss_enhance_all(ss_pureattr_cond(2.0), 4, [0,1,0,0,0])],
	},
	Lawake: [
		Attr_statusup_oattr(0,200, [0,1,0,0,0,]),
		Statusup(500,0),
	],
}