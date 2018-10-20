{
	name: "ウルトラナース ガトリン・G・U",
	cardno: 7735,
	imageno: 9817,
	hp: 4485,
	atk: 2833,
	cost: 55,
	attr: [0,1],
	species: [8],
	disable: true,
	islegend: true,
	ape: "魔轟三鉄傑 対 地獄三十六歌仙",
	as1: {
		desc: "<複属性攻撃強化>4チェインで火属性の攻撃力をアップ、複属性が水属性だとさらにアップ(10%/120%)",
		proc: ChainEnhance_SubAttr(0.1, 1.2, [1,0,0,0,0], [0,1,0,0,0], 4),
	},
	ss1: {
		desc: "<複属性ダメージ強化>5ターンの間、火属性の攻撃力をアップ、複属性が水属性だとさらにアップ(100%/250%)",
		turn: 10,
		proc: [ss_enhance_all_subattr(1.0, 2.5, 5, [1,0,0,0,0], [0,1,0,0,0])],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],2),
		NEFTJOD(30),
		Attr_statusup(200,0, [1,1,0,0,0,]),
		Attr_statusup(0,200, [1,1,0,0,0,]),
		Abstate_invalid("as_sealed"),
		Panel_boost([1,0,0,0,0,],2),
		Attr_relief([1,1,1,1,1,],10),
		Attr_statusup_sattr(200,0, [1,0,0,0,0,], 200,0, [0,1,0,0,0,]),
		Attr_statusup_sattr(0,200, [1,0,0,0,0,], 0,200, [0,1,0,0,0,]),
		Fastskill(3),
	],
	as2: {
		desc: "<複属性攻撃強化>4チェインで火属性の攻撃力をアップ、複属性が水属性だとさらにアップ(40%/150%)",
		proc: ChainEnhance_SubAttr(0.4, 1.5, [1,0,0,0,0], [0,1,0,0,0], 4),
	},
	ss2: {
		desc: "<複属性ダメージ強化>5ターンの間、火属性の攻撃力をアップ、複属性が水属性だとさらにアップ(100%/250%)",
		turn: 10,
		proc: [ss_enhance_all_subattr(1.0, 2.5, 5, [1,0,0,0,0], [0,1,0,0,0])],
	},
	Lawake: [
		Attr_statusup_sattr(0,200, [1,0,0,0,0,], 0,100, [0,1,0,0,0,]),
		Statusup(500,0),
	],
}