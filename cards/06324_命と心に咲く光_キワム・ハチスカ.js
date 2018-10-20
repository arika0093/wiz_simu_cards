{
	name: "命と心に咲く光 キワム・ハチスカ",
	cardno: 6324,
	imageno: 8159,
	hp: 3359,
	atk: 3374,
	cost: 56,
	attr: [0,2],
	species: [8],
	islegend: true,
	disable: true,
	ape: "幻魔特区スザクⅢ",
	as1: {
		desc: "<複属性攻撃強化>7チェインで火属性の攻撃力をアップ、複属性が雷だとさらにアップ(80%/130%)",
		proc: ChainEnhance_SubAttr(0.8, 1.3, [1,0,0,0,0], [0,0,1,0,0], 7),
	},
	ss1: {
		desc: "<カウンター>5ターンの間、スキルカウンター待機(300%)",
		turn: 12,
		proc: [ss_skillcounter(3.0, 5)],
	},
	awakes: [
		Awake_noeffect("経験値取得量アップ", 1),
		Statusup(200,0),
		Fastskill(2),
		Attr_relief([0,0,1,0,0,],10),
		Panel_boost([1,0,0,0,0,],2),
		Statusup(0,200),
		Panel_boost([1,0,0,0,0,],2),
		Fastskill(2),
		Attr_statusup_sattr(200, 0, [1,0,0,0,0], 200, 0, [0,0,1,0,0]),
		Attr_statusup_sattr(0, 200, [1,0,0,0,0], 0, 200, [0,0,1,0,0]),
	],
	as2: {
		desc: "<複属性攻撃強化>7チェインで火属性の攻撃力をアップ、複属性が雷だとさらにアップ(110%/160%)",
		proc: ChainEnhance_SubAttr(1.1, 1.6, [1,0,0,0,0], [0,0,1,0,0], 7),
	},
	ss2: {
		desc: "<カウンター>5ターンの間、スキルカウンター待機(400%)",
		turn: 15,
		proc: [ss_skillcounter(4.0, 5)],
	},
	Lawake: [
		Attr_statusup(100,0, [1,0,0,0,0,]),
		Statusup(500,0),
		Abstate_invalid("ss_sealed"),
	],
}