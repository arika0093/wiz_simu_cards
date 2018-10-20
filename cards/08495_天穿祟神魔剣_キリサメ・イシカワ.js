{
	name: "天穿祟神魔剣 キリサメ・イシカワ",
	cardno: 8495,
	imageno: 10656,
	hp: 3895,
	atk: 1595,
	cost: 39,
	attr: [0,1],
	species: [8],
	islegend: true,
	ape: "八百万神秘譚Ⅳ",
	is_dist: true,
	as1: {
		desc: "<攻撃強化>火・水属性の味方の攻撃力をアップ(50%)",
		proc: ChainEnhance(0.5, [1,1,0,0,0], 0),
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを火・水属性化",
		turn: 3,
		proc: [ss_panel_change([1,1,0,0,0])],
	},
	awakes: [
		Costdown(10),
		Panel_boost([1,0,0,0,0,],1),
		Panel_boost([1,0,0,0,0,],2),
		Fastskill(3),
		Statusup(0,200),
		Statusup(200,0),
		Attr_relief([1,1,1,1,1,],10),
		Abstate_invalid("death_limit"),
		Attr_statusup(0,200, [1,1,0,0,0,]),
		Attr_statusup(200,0, [1,1,0,0,0,]),
	],
	as2: {
		desc: "<攻撃強化>火・水属性の味方の攻撃力をアップ(80%)",
		proc: ChainEnhance(0.8, [1,1,0,0,0], 0),
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルを火・水属性化し、チェインがプラス1の効果と攻撃力アップの効果を付与(50%)",
		turn: 6,
		proc: [ss_panel_change([1,1,0,0,0]), panel_chainplus(1), panel_attackup(0.5)],
	},
	Lawake: [
		Statusup(700,0),
		Statusup(0,200),
	],
}