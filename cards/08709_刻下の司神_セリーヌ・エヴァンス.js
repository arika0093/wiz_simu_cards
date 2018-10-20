{
	name: "刻下の司神 セリーヌ・エヴァンス",
	cardno: 8709,
	imageno: 5409,
	hp: 3630,
	atk: 6091,
	cost: 50,
	attr: [2,-1],
	species: [1],
	islegend: true,
	ape: "エタクロⅡ",
	as1: {
		desc: "<種族数攻撃・攻撃強化>神族と妖精の仲間の数だけダメージアップ(80%)、さらに雷属性の味方の攻撃力をアップ(30%)",
		proc: [ChainDeckSpecsAttack(0.8, [1,4], 3), ChainEnhance(0.30, [0,0,1,0,0], 0)],
	},
	ss1: {
		desc: "<ガード>3ターン全属性のダメージを25%軽減する",
		turn: 5,
		proc: [ss_attr_guard([1,1,1,1,1], 0.25, 3)],
	},
	awakes: [
		Panel_boost([0,0,1,0,0,],1),
		Fastskill(1),
		NEFTJOD(30),
		Fastskill(2),
		Panel_boost([0,0,1,0,0,],3),
		Attr_statusup_oattr(0,400, [0,0,1,0,0,]),
		Attr_statusup_oattr(400,0, [0,0,1,0,0,]),
		Attr_statusup(0,400, [0,0,1,0,0,]),
		Attr_statusup(400,0, [0,0,1,0,0,]),
		Abstate_invalid("as_sealed"),
	],
	as2: {
		desc: "<種族数攻撃・攻撃強化>神族と妖精の仲間の数だけダメージアップ(110%)、さらに雷属性の味方の攻撃力をアップ(30%)",
		proc: [ChainDeckSpecsAttack(1.1, [1,4], 3), ChainEnhance(0.30, [0,0,1,0,0], 0)],
	},
	ss2: {
		desc: "<ガード>3ターン全属性のダメージを50%軽減する",
		turn: 9,
		proc: [ss_attr_guard([1,1,1,1,1], 0.5, 3)],
	},
	Lawake: [
		Statusup(0,1000),
		Statusup(1000,0),
	],
}