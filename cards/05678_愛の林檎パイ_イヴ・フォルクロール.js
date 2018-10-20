{
	name: "愛の林檎パイ イヴ・フォルクロール",
	cardno: 5678,
	imageno: 7483,
	hp: 4164,
	atk: 2290,
	cost: 43,
	attr: [2,1],
	species: [1],
	disable: true,
	islegend: true,
	as1: {
		desc: "<回復>水・雷属性の味方を回復、5チェインで更に回復(10%/15%)",
		proc: [Heal(0.10, [0,1,1,0,0], 0), Heal(0.15, [0,1,1,0,0], 5)],
	},
	ss1: {
		desc: "<ステータスアップ>味方全体の攻撃力とHPを500アップ(上限値:2000)",
		turn: 5,
		proc: [ss_statusup_all([500, 500], [2000, 2000], -1)],
	},
	awakes: [
		Fastskill(1),
		Attr_statusup(100,0, [0,1,1,0,0,]),
		Statusup(200,0),
		Attr_statusup(0,200, [0,1,1,0,0,]),
		Panel_boost([0,0,1,0,0,],2),
		Attr_statusup(200,0, [0,1,1,0,0,]),
		Heal_afterbattle(10),
		Fastskill(2),
		Panel_boost([0,0,1,0,0,],2),
		Abstate_invalid("as_sealed"),
	],
	as2: {
		desc: "<回復>水・雷属性の味方を回復、5チェインで更に回復(13%/18%)",
		proc: [Heal(0.13, [0,1,1,0,0], 0), Heal(0.18, [0,1,1,0,0], 5)],
	},
	ss2: {
		desc: "<ステータスアップ>味方全体の攻撃力とHPを1000アップ(上限値:2000)",
		turn: 8,
		proc: [ss_statusup_all([1000, 1000], [2000, 2000], -1)],
	},
	Lawake: [
		Statusup(0,500),
		Statusup(500,0),
	],
}