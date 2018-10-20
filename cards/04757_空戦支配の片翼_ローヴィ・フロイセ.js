{
	name: "空戦支配の片翼 ローヴィ・フロイセ",
	cardno: 4757,
	imageno: 6472,
	hp: 3565,
	atk: 2765,
	cost: 43,
	attr: [2, -1],
	species: [8],
	disable: true,
	awakes: [
		Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
		Fastskill(1),
		Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
		Panel_boost([0, 0, 1, 0, 0, ], 2),
		Fastskill(2),
		Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
		NEFTJOD(30),
		Heal_afterbattle(10),
	],
	as1: {
		desc: "<回復>雷属性の味方のHPを回復/13％",
		proc: Heal(0.13, [0,0,1,0,0], 0),
	},
	ss1: {
		desc: "<スキルチャージ&遅延>スペシャルスキルの発動ターンを1早め、敵全体の攻撃ターンを1遅らせる",
		turn: 6,
		proc: [ss_skillboost(1), ss_delay_all(1)],
	},
	islegend: true,
	Lawake: [
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
		Statusup(500, 0),
	],
	as2: {
		desc: "<攻撃強化・回復>雷属性の味方のHPを回復、さらに雷属性の味方の攻撃力をアップ(回復：16％ / 攻撃力：+30％)",
		proc: [Heal(0.16, [0,0,1,0,0], 0), ChainEnhance(0.30, [0,0,1,0,0], 0)],
	},
	ss2: {
		desc: "<スキルチャージ&遅延>スペシャルスキルの発動ターンを2早め、敵全体の攻撃ターンを2遅らせる",
		turn: 9,
		proc: [ss_skillboost(2), ss_delay_all(2)],
	},
}