{
	name: "魔性のMC スクブス・アリュール",
	cardno: 9450,
	imageno: 11703,
	hp: 4755,
	atk: 1803,
	cost: 47,
	attr: [0,2],
	species: [2],
	islegend: true,
	ape: "大魔道杯 in ロストエデン",
	is_dist: true,
	as1: {
		desc: "<複属性攻撃強化>火属性の攻撃力をアップ(30%)、複属性が雷属性だとさらにアップ(40%)",
		proc: ChainEnhance_SubAttr(0.3, 0.7, [1, 0, 0, 0, 0], [0, 0, 0, 1, 0], 0),
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルをALL属性化",
		turn: 4,
		proc: [ss_panel_change([1,1,1,0,0])],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],1),
		Attr_statusup(0,200, [1,0,1,0,0,]),
		Attr_statusup(200,0, [1,0,1,0,0,]),
		Panel_boost([1,0,0,0,0,],2),
		Attr_relief([1,1,1,1,1,],10),
		NEFTJOD(30),
		Awake_noeffect("ゴールド取得量アップ",3),
		Attr_statusup_sattr(0,100, [1,0,0,0,0,], 0,200, [0,0,1,0,0,]),
		Attr_statusup_sattr(100,0, [1,0,0,0,0,], 200,0, [0,0,1,0,0,]),
		Fastskill(3),
	],
	as2: {
		desc: "<複属性攻撃強化>火属性の攻撃力をアップ(60%)、複属性が雷属性だとさらにアップ(40%)",
		proc: ChainEnhance_SubAttr(0.6, 1.0, [1, 0, 0, 0, 0], [0, 0, 0, 1, 0], 0),
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルをALL属性化し、ダメージ25%軽減の効果を付与",
		turn: 6,
		proc: [ss_panel_change([1,1,1,0,0]), panel_attr_guard([1,1,1,1,1], 0.25)],
	},
	Lawake: [
		Attr_statusup(0,200, [1,0,1,0,0,]),
	],
}