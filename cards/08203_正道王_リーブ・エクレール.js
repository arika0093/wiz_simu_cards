{
	name: "正道王 リーブ・エクレール",
	cardno: 8203,
	imageno: 10341,
	hp: 3253,
	atk: 2124,
	cost: 40,
	attr: [2,4],
	species: [8],
	islegend: true,
	ape: "覇眼戦線Ⅲ",
	is_dist: true,
	as1: {
		desc: "<複属性攻撃強化>雷属性の攻撃力をアップ、複属性が闇属性だとさらにアップ(30%/70%)",
		proc: ChainEnhance_SubAttr(0.3, 0.7, [0, 0, 1, 0, 0], [0, 0, 0, 0, 1], 0),
	},
	ss1: {
		desc: "<ダメージ強化>味方全体のMAXHPの60%を使い、3ターン雷属性の味方の攻撃力をアップ(120%)",
		turn: 5,
		proc: [ss_enhance_all(1.2, 3, [0,0,1,0,0]), ss_consume_all(0.60)],
	},
	awakes: [
		Panel_boost([0,0,1,0,0,],1),
		Fastskill(3),
		Statusup(200,0),
		Panel_boost([0,0,1,0,0,],2),
		Statusup(0,200),
		Attr_relief([0,0,0,1,1,],10),
		Attr_statusup(0,100, [0,0,1,0,0,]),
		Attr_statusup(100,0, [0,0,1,0,0,]),
		Attr_statusup_sattr(0,100, [0,0,1,0,0,], 0,100, [0,0,0,0,1,]),
		Attr_statusup_sattr(100,0, [0,0,1,0,0,], 100,0, [0,0,0,0,1,]),
	],
	as2: {
		desc: "<複属性攻撃強化>雷属性の攻撃力をアップ、複属性が闇属性だとさらにアップ(60%/100%)",
		proc: ChainEnhance_SubAttr(0.6, 1.0, [0, 0, 1, 0, 0], [0, 0, 0, 0, 1], 0),
	},
	ss2: {
		desc: "<ダメージ強化>味方全体のMAXHPの60%を使い、4ターン雷属性の味方の攻撃力をアップ(150%)",
		turn: 8,
		proc: [ss_enhance_all(1.5, 3, [0,0,1,0,0]), ss_consume_all(0.60)],
	},
	Lawake: [
		NEFTJOD(30),
		Attr_statusup(0,200, [0,0,1,0,0,]),
	],
}