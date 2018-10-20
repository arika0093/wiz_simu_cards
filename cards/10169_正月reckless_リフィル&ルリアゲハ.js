{
	name: "正月reckless リフィル&ルリアゲハ",
	cardno: 10169,
	imageno: 9762,
	hp: 4214,
	atk: 2835,
	cost: 53,
	attr: [2,1],
	species: [9],
	islegend: true,
	ape: "謹賀新年2017",
	as1: {
		desc: "<複属性攻撃強化>4チェインで雷属性の攻撃力をアップ、複属性が水だとさらにアップ(30%/140%)",
		proc: [ChainEnhance_SubAttr(0.3, 1.4, [0,0,1,0,0], [0,1,0,0,0], 4)],
	},
	ss1: {
		desc: "<複属性ダメージ強化>8ターンの間、雷属性の攻撃力をアップ、複属性が水属性だとさらにアップ(250%/400%)",
		turn: 10,
		proc: [ss_enhance_all_subattr(2.5, 4.0, 5, [0,0,1,0,0], [0,1,0,0,0])],
	},
	awakes: [
		Panel_boost([0,0,1,0,0,],4),
		NEFTJOD(30),
		Attr_statusup(200,0, [0,1,1,0,0,]),
		Spec_statusup(0,200, [9,]),
		Spec_statusup(200,0, [9,]),
		Attr_statusup(0,200, [0,1,1,0,0,]),
		Attr_relief([1,1,1,1,1,],10),
		Attr_statusup_sattr(200,0, [0,0,1,0,0,], 200,0, [0,1,0,0,0,]),
		Attr_statusup_sattr(0,200, [0,0,1,0,0,], 0,200, [0,1,0,0,0,]),
		Fastskill(3),
	],
	as2: {
		desc: "<複属性攻撃強化>4チェインで雷属性の攻撃力をアップ、複属性が水だとさらにアップ(60%/170%)",
		proc: [ChainEnhance_SubAttr(0.6, 1.7, [0,0,1,0,0], [0,1,0,0,0], 4)],
	},
	ss2: {
		desc: "<複属性ダメージ強化>5ターンの間、雷属性の攻撃力をアップ、複属性が水属性だとさらにアップ(250%/400%)",
		turn: 10,
		proc: [ss_enhance_all_subattr(2.5, 4.0, 5, [0,0,1,0,0], [0,1,0,0,0])],
	},
	Lawake: [
		Attr_statusup_sattr(0,200, [0,0,1,0,0,], 0,100, [0,1,0,0,0,]),
		Statusup(500,0),
	],
}