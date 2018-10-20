{
	name: "清霊神の碧玉巫女 ナミル・ラクリマ",
	cardno: 5807,
	imageno: 7624,
	hp: 4164,
	atk: 2554,
	cost: 44,
	attr: [1,-1],
	species: [9],
	islegend: true,
	is_dist: true,
	as1: {
		desc: "<回復>水属性の味方を回復、5チェインで更に回復(10%/14%)",
		proc: [Heal(0.10, [0,1,0,0,0], 0), Heal(0.14, [0,1,0,0,0], 5)],
	},
	ss1: {
		desc: "<ステータスアップ>味方全体の攻撃力とHPを500アップ(上限値2000)",
		turn: 5,
		proc: [ss_statusup_all([500, 500], [2000, 2000], -1)],
	},
	awakes: [
		Statusup(200,0),
		Fastskill(1),
		Attr_statusup(0,100, [0,1,0,0,0,]),
		Panel_boost([0,1,0,0,0,],1),
		NEFTJOD(30),
		Attr_relief([0,0,1,0,0,],10),
		Attr_statusup(200,0, [0,1,0,0,0,]),
		Fastskill(2),
		Panel_boost([0,1,0,0,0,],2),
		Heal_afterbattle(10),
	],
	as2: {
		desc: "<回復>水属性の味方を回復、5チェインで更に回復(13%/17%)",
		proc: [Heal(0.13, [0,1,0,0,0], 0), Heal(0.17, [0,1,0,0,0], 5)],
	},
	ss2: {
		desc: "<ステータスアップ>味方全体の攻撃力とHPを1000アップ(上限値2000)",
		turn: 8,
		proc: [ss_statusup_all([1000, 1000], [2000, 2000], -1)],
	},
	Lawake: [
		Attr_statusup(0,100, [0,1,0,0,0,]),
		Statusup(500,0),
	],
}