{
	name: "夏夢航路の女神様 シール・サンテ",
	cardno: 4162,
	imageno: 5891,
	hp: 1865,
	atk: 3834,
	cost: 47,
	attr: [1, -1],
	species: [8],
	disable: true,
	awakes: [
		Statusup(0, 200),
		Panel_boost([0, 1, 0, 0, 0], 1),
		Statusup(200, 0),
		Attr_statusup(0, 100, [0, 1, 0, 0, 0]),
		Fastskill(1),
		Attr_statusup(100, 0, [0, 1, 0, 0, 0]),
		Attr_statusup(0, 100, [0, 1, 0, 0, 0]),
		Spec_statusup(200, 0, [8]),
		Panel_boost([0, 1, 0, 0, 0], 1),
		Spec_statusup(0, 200, [8]),
	],
	as1: {
		desc: "<属性特効>5チェインで火属性の敵単体へダメージ/650％",
		proc: ChainAttrAttack(6.5, 5, [1,0,0,0,0])
	},
	ss1: {
		desc: "<スキルコピー>直前に発動したスペシャルスキルを発動する",
		turn: 9,
		proc: [ss_latest_copy()]
	},
	islegend: true,
	Lawake: [
		Attr_statusup(0, 100, [0, 1, 0, 0, 0]),
		Statusup(0, 500),
	],
	as2: {
		desc: "<属性特効>5チェインで火属性の敵単体へダメージ/750％",
		proc: ChainAttrAttack(7.5, 5, [1,0,0,0,0])
	},
	ss2: {
		desc: "<スキルコピー>直前に発動したスペシャルスキルを発動する",
		turn: 9,
		proc: [ss_latest_copy()]
	},
}