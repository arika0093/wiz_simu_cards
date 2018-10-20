{
	name: "儚き夢の爪痕 ダイトメア＝ラギト",
	cardno: 5842,
	imageno: 7648,
	hp: 3008,
	atk: 3401,
	cost: 44,
	attr: [0, 4],
	species: [8],
	islegend: true,
	disable: true,
	as1: {
		desc: "<属性特効>4チェインで雷・光属性の敵単体へ特効ダメージ(600%)",
		proc: ChainAttrAttack(6.0, 4, [0, 0, 1, 1, 0]),
	},
	ss1: {
		desc: "<スキルチャージ&遅延>スペシャルスキルの発動ターンを2早め、敵単体の攻撃ターンを2遅らせる",
		turn: 9,
		proc: [ss_skillboost(2), ss_delay_s(2)],
	},
	awakes: [
		Statusup(0, 200),
		Panel_boost([1, 0, 0, 0, 0, ], 2),
		Attr_statusup(100, 0, [1, 0, 0, 0, 0, ]),
		Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
		Fastskill(1),
		Panel_boost([1, 0, 0, 0, 0, ], 2),
		NEFTJOD(30),
		Attr_statusup(200, 0, [1, 0, 0, 0, 0, ]),
		Fastskill(2),
		Attr_statusup(0, 200, [1, 0, 0, 0, 0, ]),
	],
	as2: {
		desc: "<属性特効>4チェインで雷・光属性の敵単体へ特効ダメージ(700%)",
		proc: ChainAttrAttack(7.0, 4, [0, 0, 1, 1, 0]),
	},
	ss2: {
		desc: "<スキルチャージ&遅延>スペシャルスキルの発動ターンを3早め、敵単体の攻撃ターンを3遅らせる",
		turn: 12,
		proc: [ss_skillboost(3), ss_delay_s(3)],
	},
	Lawake: [
		Statusup(500, 0),
		Statusup(0, 500),
		NEFTJOD(30),
		Abstate_invalid("ss_sealed"),
	],
}