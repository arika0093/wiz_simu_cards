{
	name: "撃砕の親父力 ドルティ・ローム",
	cardno: 7538,
	imageno: 9577,
	hp: 3103,
	atk: 4336,
	cost: 46,
	attr: [2,-1],
	species: [9],
	islegend: true,
	ape: "エステレラⅠ",
	awakes: [
		Statusup(0, 200),
		Attr_relief([1,1,1,1,1,],10),
		Statusup(200, 0),
		Fastskill(1),
		Panel_boost([0, 0, 1, 0, 0, ], 2),
		Spec_statusup(0, 200, [9, ]),
		Spec_statusup(200, 0, [9, ]),
		Panel_boost([0, 0, 1, 0, 0, ], 2),
		Attr_statusup(200, 0, [0, 0, 1, 0, 0, ]),
		Attr_statusup(0, 200, [0, 0, 1, 0, 0, ]),
	],
	as1: {
		desc: "<チェイン攻撃>10チェインでダメージアップ(700%)",
		proc: [ChainAttack(7.0, 10)],
	},
	ss1: {
		desc: "<弱体化大魔術>敵単体へ雷属性のダメージ(400%)、さらに5ターンの間、敵の防御力を弱体化、5チェインを消費しさらに弱体化(20%/30%)",
		turn: 7,
		proc: [ss_damage_s(4.0, [2], 1),ss_attr_weaken_s([1,1,1,1,1], ss_chain_cost_skill(5,0.3,0.2) , 5)],
	},
	as2: {
		desc: "<チェイン攻撃>10チェインでダメージアップ(800%)",
		proc: [ChainAttack(8.0, 10)],
	},
	ss2: {
		desc: "<弱体化大魔術>スキル反射を無視し、敵単体へ雷属性のダメージ(800%)、さらに10ターンの間、敵の防御力を弱体化、5チェインを消費しさらに弱体化(20%/30%)",
		turn: 12,
		proc: [ss_damage_s(8.0, [2], 1), ss_attr_weaken_s([1, 1, 1, 1, 1], ss_chain_cost_skill(5,0.3,0.2) , 10), ss_ignore_skillcounter()],
	},
	Lawake: [
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
		Abstate_invalid("ss_sealed"),
	],
}