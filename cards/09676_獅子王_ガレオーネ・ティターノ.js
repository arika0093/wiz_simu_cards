{
	name: "獅子王 ガレオーネ・ティターノ",
	cardno: 9676,
	imageno: 11959,
	hp: 5145,
	atk: 1568,
	cost: 47,
	attr: [0,4],
	species: [5],
	islegend: true,
	ape: "シュガーレスバンビーナ",
	is_dist: true,
	as1: {
		desc: "<回復>味方全体のHPを回復(13%)",
		proc: Heal(0.13, [1,1,1,1,1], 0),
	},
	ss1: {
		desc: "<融合強化>デッキ内の精霊が持つ属性数が多いほど、火属性の攻撃力、HPのステータスをアップ(上限値:1000，2000)",
		turn: 4,
		proc: [ss_statusup_all([ss_multiattr_cond(2000), ss_multiattr_cond(1000)], [2000,2000], -1, [1,0,0,0,0])],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(0,200, [1,0,0,0,0,]),
		Attr_statusup(200,0, [1,0,0,0,0,]),
		Panel_boost([1,0,0,0,0,],2),
		NEFTJOD(30),
		Fastskill(4),
		Abstate_invalid(["poison", "attr_weaken", "death_limit"]),
		Attr_statusup(0,200, [1,1,1,1,1,]),
		Attr_statusup(200,0, [1,1,1,1,1,]),
		Attr_relief([1,1,1,1,1,],10),
	],
	as2: {
		desc: "<回復>味方全体のHPを回復(16%)",
		proc: Heal(0.16, [1,1,1,1,1], 0),
	},
	ss2: {
		desc: "<融合強化>デッキ内の精霊が持つ属性数が多いほど、火属性の攻撃力、HPのステータスをアップ(上限値:2000，3000)",
		turn: 8,
		proc: [ss_statusup_all([ss_multiattr_cond(3000), ss_multiattr_cond(2000)], [3000,3000], -1, [1,0,0,0,0])],
	},
	Lawake: [
		Statusup(1000,0),
		NEFTJOD(30),
	],
}