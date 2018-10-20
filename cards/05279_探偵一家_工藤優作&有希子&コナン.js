{
	name: "探偵一家 工藤優作&有希子&コナン",
	cardno: 5279,
	imageno: 6971,
	hp: 2323,
	atk: 1998,
	cost: 30,
	attr: [0,2],
	species: [8],
	disable: true,
	islegend: false,
	ape: "コラボ(コナン)",
	as1: {
		desc: "<攻撃強化>火・雷属性の味方の攻撃力をアップ(30%)",
		proc: ChainEnhance(0.3, [1,0,1,0,0], 0),
	},
	ss1: {
		desc: "<ダメージ強化>4ターン火・雷属性の味方の攻撃力をアップ(60%)",
		turn: 9,
		proc: [ss_enhance_all(0.6, 4, [1,0,1,0,0])],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(0,100, [1,0,1,0,0,]),
		Statusup(0,200),
		Attr_statusup(100,0, [1,0,1,0,0,]),
		Fastskill(1),
		Statusup(200,0),
		Fastskill(2),
		NEFTJOD(30),
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(100,0, [1,0,1,0,0,]),
	],
}