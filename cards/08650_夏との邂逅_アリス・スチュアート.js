{
	name: "夏との邂逅 アリス・スチュアート",
	cardno: 8650,
	imageno: 10823,
	hp: 6515,
	atk: 3515,
	cost: 52,
	attr: [2,-1],
	species: [9],
	islegend: true,
	ape: "エタクロⅢ",
	as1: {
		desc: "<攻撃強化・ガード>全属性のダメージを10%軽減し、デッキに単色の精霊が多いほど、攻撃力をアップ(15%)（上限:5段階)",
		proc: [as_guard(0.10, [1,1,1,1,1], 0), add_cond(ChainEnhance(0, [0,0,1,0,0], 0), as_singleattr_num(0, 0.15))],
	},
	ss1: {
		desc: "<純属性強化>4ターンの間、雷単色精霊が多いほど、雷単色精霊のダメージを強化し(100%)、さらに永続ターン、攻撃力、HPのステータスをアップ(上限値:2000,2000)",
		turn: 4,
		proc: [ss_statusup_all([ss_pureattr_cond(2000), ss_pureattr_cond(2000)], [2000,2000], -1, [0,0,1,0,0]), ss_enhance_all(ss_pureattr_cond(1.0), 4, [0,0,1,0,0])],
	},
	awakes: [
		Panel_boost([0,0,1,0,0,],2),
		Attr_statusup_oattr(0,400, [0,0,1,0,0,]),
		Attr_statusup_oattr(400,0, [0,0,1,0,0,]),
		Panel_boost([0,0,1,0,0,],2),
		Abstate_invalid("heal_reverse"),
		Abstate_invalid("ss_sealed"),
		Fastskill(4),
		Attr_statusup(0,400, [0,0,1,0,0,]),
		Attr_statusup(400,0, [0,0,1,0,0,]),
		Attr_relief([1,1,1,1,1,],10),
	],
	as2: {
		desc: "<攻撃強化・ガード>全属性のダメージを10%軽減し、デッキに単色の精霊が多いほど、攻撃力をアップ(20%)（上限:5段階)",
		proc: [as_guard(0.10, [1,1,1,1,1], 0), add_cond(ChainEnhance(0, [0,0,1,0,0], 0), as_singleattr_num(0, 0.2))],
	},
	ss2: {
		desc: "<純属性強化>4ターンの間、雷単色精霊が多いほど、雷単色精霊のダメージを強化し(200%)、さらに永続ターン、攻撃力、HPのステータスをアップ(上限値:3000,3000",
		turn: 8,
		proc: [ss_statusup_all([ss_pureattr_cond(3000), ss_pureattr_cond(3000)], [3000,3000], -1, [0,0,1,0,0]), ss_enhance_all(ss_pureattr_cond(2.0), 4, [0,0,1,0,0])],
	},
	Lawake: [
		Attr_statusup_oattr(0,300, [0,0,1,0,0,]),
		Statusup(500,0),
		NEFTJOD(30),
	],
}