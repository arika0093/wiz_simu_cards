{
	name: "ドンの右腕 ルポーティ・ルファン",
	cardno: 9673,
	imageno: 11956,
	hp: 2685,
	atk: 5382,
	cost: 40,
	attr: [2,-1],
	species: [5],
	islegend: true,
	ape: "シュガーレスバンビーナ",
	is_dist: true,
	as1: {
		desc: "<種族特効>敵全体へダメージ(140%)、戦士の敵へさらにダメージアップ(150%)",
		proc: [ChainAllAttack(1.4, 0), ChainAllSpecAttack(2.9, [8], 0)],
	},
	ss1: {
		desc: "<特効大魔術>敵単体へ雷属性のダメージ(200%)、さらに雷属性の敵には特効ダメージ(1800%)",
		turn: 8,
		proc: [ss_damage_s(special_attr([0,0,1,0,0], 20, 2), [2], 1)],
	},
	awakes: [
		Costdown(10),
		Panel_boost([0,0,1,0,0,],1),
		Attr_statusup_oattr(0,300, [0,0,1,0,0,]),
		Attr_statusup_oattr(300,0, [0,0,1,0,0,]),
		Panel_boost([0,0,1,0,0,],2),
		NEFTJOD(30),
		Fastskill(4),
		Attr_statusup(0,200, [0,0,1,0,0,]),
		Attr_statusup(200,0, [0,0,1,0,0,]),
		Fastskill(4),
	],
	as2: {
		desc: "<種族特効>敵全体へダメージ(170%)、戦士の敵へさらにダメージアップ(150%)",
		proc: [ChainAllAttack(1.7, 0), ChainAllSpecAttack(3.2, [8], 0)],
	},
	ss2: {
		desc: "<特効大魔術>敵単体へ雷属性のダメージ(200%)、さらに雷属性の敵には特効ダメージ(1800%)",
		turn: 8,
		proc: [ss_damage_s(special_attr([0,0,1,0,0], 20, 2), [2], 1)],
	},
	Lawake: [
		Statusup(0,1000),
	],
}