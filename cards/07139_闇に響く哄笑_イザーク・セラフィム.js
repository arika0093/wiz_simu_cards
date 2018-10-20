{
	name: "闇に響く哄笑 イザーク・セラフィム",
	cardno: 7139,
	imageno: 6879,
	hp: 2656,
	atk: 5854,
	cost: 53,
	attr: [0,-1],
	species: [3],
	disable: true,
	islegend: true,
	ape: "ロストエデンⅠ",
	as1: {
		desc: "<属性特効>3チェインで雷属性の敵単体へ特効ダメージ(525%)",
		proc: ChainAttrAttack(5.25, 3, [0,0,1,0,0]),
	},
	ss1: {
		desc: "<特効大魔術>敵全体へ火属性のダメージ、さらに雷属性の敵には特効ダメージ(200%/500%)",
		turn: 6,
		proc: [ss_damage_all(special_attr([0,0,1,0,0], 5.0, 2.0), [0])],
	},
	awakes: [
		Statusup(0,200),
		Fastskill(2),
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(200,0, [1,0,0,0,0,]),
		NEFTJOD(30),
		Attr_statusup(0,100, [1,0,0,0,0,]),
		Panel_boost([1,0,0,0,0,],2),
		Spec_statusup(0,200, [3,]),
		Fastskill(2),
		Attr_statusup(0,200, [1,0,0,0,0,]),
	],
	as2: {
		desc: "<属性特効>3チェインで雷属性の敵単体へ特効ダメージ(625%)",
		proc: ChainAttrAttack(6.25, 3, [0,0,1,0,0]),
	},
	ss2: {
		desc: "<特効大魔術>敵全体へ火属性のダメージ、さらに雷属性の敵には特効ダメージ(200%/900%)",
		turn: 9,
		proc: [ss_damage_all(special_attr([0,0,1,0,0], 9.0, 2.0), [0])],
	},
	Lawake: [
		Statusup(0,700),
		Statusup(300,0),
	],
}