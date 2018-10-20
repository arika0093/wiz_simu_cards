{
	name: "AbCd-X:《闇鎧の虐帝 ウラガーン》",
	cardno: 5048,
	imageno: 6783,
	hp: 4513,
	atk: 500,
	cost: 60,
	attr: [0, 4],
	species: [11],
	awakes: [
		Costdown(4),
		Fastskill(1),
		NEFTJOD(60),
		Fastskill(1),
		Panel_boost([1,0,0,0,0], 2),
		Attr_statusup(100, 0, [1,0,0,0,0]),
		Costdown(2),
		Attr_statusup(0, 200, [1,0,0,0,0]),
		Fastskill(2),
		Attr_statusup(0, 200, [1,0,0,0,0]),
	],
	as1: {
		desc: "<攻撃>敵単体へのダメージアップ/900％",
		proc: ChainAttack(9.0, 0),
	},
	ss1: {
		desc: "<毒>5ターン敵全体に毒のダメージを与える(9999ダメージ)",
		turn: 10,
		proc: [poison(9999, 5)],
	},
	islegend: true,
	is_dist: true,
	disable: true,
	Lawake: [
		Statusup(0, 500),
		Statusup(500, 0),
	],
	as2: {
		desc: "<攻撃>敵単体へのダメージアップ/1000％",
		proc: ChainAttack(10.0, 0),
	},
	ss2: {
		desc: "<毒>5ターン敵全体に毒のダメージを与える(24999ダメージ)",
		turn: 15,
		proc: [poison(24999, 5)],
	},
}