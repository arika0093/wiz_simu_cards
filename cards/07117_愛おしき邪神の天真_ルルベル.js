{
	name: "愛おしき邪神の天真 ルルベル",
	cardno: 7117,
	imageno: 6110,
	hp: 5593,
	atk: 2915,
	cost: 53,
	attr: [0,-1],
	species: [2],
	alias: ["デバフ", "巨乳"],
	islegend: true,
	ape: "Blader",
	as1: {
		desc: "<回復>火属性の味方を回復、5チェインで更に回復(11%/16%)",
		proc: [Heal(0.11, [1,0,0,0,0], 0), Heal(0.16, [1,0,0,0,0], 5)],
	},
	ss1: {
		desc: "<ガード>3ターン全属性のダメージを25%軽減する",
		turn: 5,
		proc: [ss_attr_guard([1,1,1,1,1], 0.25, 3)],
	},
	awakes: [
		Costdown(4),
		Fastskill(1),
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(100,0, [1,0,0,0,0,]),
		Spec_statusup(400,0, [2,]),
		Attr_relief([1,0,1,0,0,],10),
		Statusup(200,0),
		Attr_statusup(0,100, [1,0,0,0,0,]),
		Fastskill(2),
		Spec_statusup(0,500, [2,]),
	],
	as2: {
		desc: "<回復>火属性の味方を回復、5チェインで更に回復(13%/18%)",
		proc: [Heal(0.13, [1,0,0,0,0], 0), Heal(0.18, [1,0,0,0,0], 5)],
	},
	ss2: {
		desc: "<ガード>3ターン全属性のダメージを50%軽減する",
		turn: 9,
		proc: [ss_attr_guard([1,1,1,1,1], 0.5, 3)],
	},
	Lawake: [
		Statusup(500,0),
		Statusup(0,500),
	],
}