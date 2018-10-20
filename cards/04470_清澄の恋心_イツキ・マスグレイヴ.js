{
	name: "清澄の恋心 イツキ・マスグレイヴ",
	cardno: 4470,
	imageno: 6157,
	hp: 2397,
	atk: 3113,
	cost: 40,
	attr: [1, -1],
	species: [8],
	awakes: [
		Costdown(2),
		Statusup(0, 200),
		Fastskill(1),
		Statusup(200, 0),
		Fastskill(1),
		Statusup(0, 200),
		Statusup(200, 0),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
		Spec_statusup(0, 200, [8, ]),
	],
	as1: {
		desc: "<チェイン攻撃>3チェインでダメージアップ、HP80％以上でさらにダメージアップ(3チェイン：300％ / 3チェイン+HP80％以上：350％)",
		proc: [ChainAttack(3.0, 3), add_cond(ChainAttack(3.5, 3), when_hp_more(0.8))],
	},
	ss1: {
		desc: "<状態異常回復>味方全体の状態異常を回復する",
		turn: 6,
		proc: [ss_abstate_cure()],
	},
	islegend: true,
	is_dist: true,
	Lawake: [
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
		Statusup(0, 500),
	],
	as2: {
		desc: "<攻撃>ダメージアップ、HP80％以上でさらにダメージアップ(通常：300％ / HP80％以上：350％)",
		proc: [ChainAttack(3.0, 1), add_cond(ChainAttack(3.5, 1), when_hp_more(0.8))],
	},
	ss2: {
		desc: "<状態異常回復>味方全体のHPを回復し、状態異常を回復する(50％)",
		turn: 9,
		proc: [ss_heal(0.5), ss_abstate_cure()],
	},
}