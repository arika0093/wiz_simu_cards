{
	name: "九天通暁 ノイン・ケーラ",
	cardno: 9501,
	imageno: 7511,
	hp: 4674,
	atk: 2677,
	cost: 54,
	attr: [1,3],
	species: [9],
	islegend: true,
	ape: "DL限定精霊",
	as1: {
		desc: "<複属性攻撃強化>5チェインで水属性の攻撃力をアップ(60%)、複属性が光属性だと更にアップ(30%)、パネルの色が2色以上でさらにアップ(60%)",
		proc: [ChainEnhance_SubAttr(0.6, 0.9, [0,1,0,0,0], [0,0,0,1,0], 5), add_cond(ChainEnhance_SubAttr(1.2, 1.5, [0,1,0,0,0], [0,0,0,1,0], 5) , as_panel_over2())],
	},
	ss1: {
		desc: "<解答削り>解答選択肢を2つ削る",
		turn: 1,
		proc: [ss_answer_narrow(2)],
	},
	awakes: [
		Panel_boost([0,1,0,0,0,],2),
		Attr_statusup(0,200, [0,1,0,0,0,]),
		Attr_statusup(200,0, [0,1,0,0,0,]),
		Panel_boost([0,1,0,0,0,],2),
		Fastskill(3),
		Attr_relief([1,1,1,1,1,],10),
		NEFTJOD(30),
		Attr_statusup_sattr(0,100, [0,1,0,0,0,], 0,300, [0,0,0,1,0,]),
		Attr_statusup_sattr(100,0, [0,1,0,0,0,], 300,0, [0,0,0,1,0,]),
		Abstate_invalid("ss_sealed"),
	],
	as2: {
		desc: "<複属性攻撃強化>5チェインで水属性の攻撃力をアップ(90%)、複属性が光属性だと更にアップ(30%)、パネルの色が2色以上でさらにアップ(60%)",
		proc: [ChainEnhance_SubAttr(0.9, 1.2, [0,1,0,0,0], [0,0,0,1,0], 5), add_cond(ChainEnhance_SubAttr(1.5, 1.8, [0,1,0,0,0], [0,0,0,1,0], 5) , as_panel_over2())],
	},
	ss2: {
		desc: "<解答削り>解答を見破る",
		turn: 4,
		proc: [ss_answer_foresight()],
	},
	Lawake: [
		Attr_statusup(0,300, [0,1,0,0,0,]),
		Statusup(500,0),
	],
}