{
	name: "蒼天の奔流 アヴィン・シュミット",
	cardno: 4647,
	imageno: 6108,
	hp: 2631,
	atk: 3384,
	cost: 48,
	attr: [1, -1],
	species: [8],
	disable: true,
	awakes: [
		Statusup(0, 200),
		Fastskill(1),
		Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
		Panel_boost([0, 1, 0, 0, 0, ], 2),
		Attr_relief([0, 1, 1, 0, 0, ], 20),
		Fastskill(2),
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
		Spec_statusup(0, 200, [8, ]),
	],
	as1: {
		desc: "<種族特効>種族が物質・魔法生物・神族の敵単体へ特効ダメージ、パネルの色が増す度さらにアップ(1色：550％ / 2色：700％ / 3色：800％)",
		proc: ChainPanelsSpecAttack(5.5, 7.0, 8.0, [1,6,7], 0)
	},
	ss1: {
		desc: "<ダメージ強化>2ターン己の力を高める(350％)",
		turn: 6,
		proc: [ss_enhance_own(3.5, 2)],
	},
	islegend: true,
	Lawake: [
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
		Statusup(0, 500),
	],
	as2: {
		desc: "<種族特効>種族が物質・魔法生物・神族の敵単体へ特効ダメージ、パネルの色が増す度さらにアップ(1色：650％ / 2色：800％ / 3色：900％)",
		proc: ChainPanelsSpecAttack(6.5, 8.0, 9.0, [1,6,7], 0)
	},
	ss2: {
		desc: "<ダメージ強化>2ターン己の力を高める(500％)",
		turn: 8,
		proc: [ss_enhance_own(5.0, 2)],
	},
}