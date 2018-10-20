{
	name: "喰滅されし根源 ルナリィ・ヘレラ",
	cardno: 4168,
	imageno: 5888,
	hp: 2143,
	atk: 3545,
	cost: 44,
	attr: [2, -1],
	species: [8],
	disable: true,
	awakes: [
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Fastskill(1),
		Statusup(0, 200),
		Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Statusup(200, 0),
		Fastskill(2),
		Spec_statusup(200, 0, [8, ]),
		Spec_statusup(0, 200, [8, ]),
	],
	as1: {
		desc: "<属性特効>3チェインで水属性の敵単体へ特効ダメージ/525％",
		proc: ChainAttrAttack(5.25, 3, [0,1,0,0,0]),
	},
	ss1: {
		desc: "<効果解除>敵全体のガード&ダメージブロックを解除する",
		turn: 8,
		proc: [ss_break_attrguard("all"), ss_break_dblock("all")],
	},
	islegend: true,
	Lawake: [
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
		Statusup(0, 500),
	],
	as2: {
		desc: "<属性特効>3チェインで水属性の敵単体へ特効ダメージ/625％",
		proc: ChainAttrAttack(6.25, 3, [0,1,0,0,0]),
	},
	ss2: {
		desc: "<効果解除大魔術>敵全体のガード&ダメージブロックを解除し、雷属性のダメージ(180％)",
		turn: 12,
		proc: [ss_break_attrguard("all"), ss_break_dblock("all"), ss_damage_all(1.8, [2])],
	},
}