{
	name: "輝ける星霜の剣 アネモネ・フラル",
	cardno: 9327,
	imageno: 11470,
	hp: 3648,
	atk: 2884,
	cost: 50,
	attr: [1,0],
	species: [8],
	islegend: true,
	alias: ["きしだん"],
	as1: {
		desc: "<複属性攻撃強化・種族攻撃強化>水属性の攻撃力をアップ(20%)、複属性が火属性だとさらにアップ(50%)、戦士はさらにアップ(30%)",
		proc: [ChainEnhance_SubAttr(0.2, 0.7, [0,1,0,0,0], [1,0,0,0,0], 0), add_cond(ChainEnhance_SubAttr(0.5, 1.0, [0,1,0,0,0], [1,0,0,0,0], 0), when_spec_match([8]))],
	},
	ss1: {
		desc: "<複属性ダメージ強化>5ターンの間、水属性の攻撃力をアップ(50%)、複属性が火属性だとさらにアップ(80%)",
		turn: 6,
		proc: [ss_enhance_all_subattr(0.5, 1.3, 5, [0,1,0,0,0], [1,0,0,0,0])],
	},
	awakes: [
		Costdown(10),
		Panel_boost([0,1,0,0,0,],2),
		Attr_statusup(0,200, [1,1,0,0,0,]),
		Attr_statusup(200,0, [1,1,0,0,0,]),
		NEFTJOD(30),
		Fastskill(4),
		Attr_statusup_sattr(0,100, [0,1,0,0,0,], 0,200, [1,0,0,0,0,]),
		Attr_statusup_sattr(100,0, [0,1,0,0,0,], 200,0, [1,0,0,0,0,]),
		Panel_boost([0,1,0,0,0,],2),
		Awake_noeffect("境界騎士団の覚悟",1),
	],
	as2: {
		desc: "<複属性攻撃強化・種族攻撃強化>水属性の攻撃力をアップ(50%)、複属性が火属性だとさらにアップ(50%)、戦士はさらにアップ(30%)",
		proc: [ChainEnhance_SubAttr(0.5, 1.0, [0,1,0,0,0], [1,0,0,0,0], 0), add_cond(ChainEnhance_SubAttr(0.8, 1.3, [0,1,0,0,0], [1,0,0,0,0], 0), when_spec_match([8]))],
	},
	ss2: {
		desc: "<複属性ダメージ強化>5ターンの間、水属性の攻撃力をアップ(100%)、複属性が火属性だとさらにアップ(80%)",
		turn: 9,
		proc: [ss_enhance_all_subattr(1.0, 1.8, 5, [0,1,0,0,0], [1,0,0,0,0])],
	},
	Lawake: [
		Statusup(500,0),
		Attr_statusup(0,200, [0,1,0,0,0,]),
	],
}