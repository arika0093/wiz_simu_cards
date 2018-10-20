{
	name: "八紘流浪の戦女神 トゥーラ",
	cardno: 10613,
	imageno: 9826,
	hp: 6956,
	atk: 2007,
	cost: 62,
	attr: [2,3],
	species: [1],
	islegend: true,
	ape: "魔轟三鉄傑 対 地獄三十六歌仙",
	as1: {
		desc: "<回復>味方全体のHPを回復(14%)",
		proc: Heal(0.14, [1,1,1,1,1], 0),
	},
	ss1: {
		desc: "<ガード>1ターン溜めた後、5ターン全属性のダメージを40%軽減する",
		turn: 8,
		charged: 1,
		proc: [ss_attr_guard([1,1,1,1,1], 0.4, 5)],
	},
	awakes: [
		Panel_boost([0,0,1,0,0,],4),
		Attr_statusup_subattr(0, 500),
		Attr_statusup_subattr(500, 0),
		Attr_relief([1,1,1,1,1,],10),
		Attr_statusup_subattr(0, 500),
		NEFTJOD(30),
		Attr_statusup_subattr(500, 0),
		Abstate_invalid("discharge"),
		Heal_afterbattle(10),
		Awake_secondfast(4),
	],
	as2: {
		desc: "<回復>味方全体のHPを回復(17%)",
		proc: Heal(0.17, [1,1,1,1,1], 0),
	},
	ss2: {
		desc: "<ガード>1ターン溜めた後、5ターン全属性のダメージを40%軽減する",
		turn: 8,
		charged: 1,
		proc: [ss_attr_guard([1,1,1,1,1], 0.4, 5)],
	},
	Lawake: [
		Statusup(0,1000),
		Abstate_invalid("as_sealed"),
		Statusup(0,500),
	],
}