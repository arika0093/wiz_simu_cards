{
	name: "双星、芽生えたココロ アイ&アイ",
	cardno: 7488,
	imageno: 6126,
	hp: 2731,
	atk: 3850,
	cost: 54,
	attr: [2, 0],
	species: [6],
	ape: "DL限定精霊",
	awakes: [
		Fastskill(2),
		Attr_statusup(200, 0, [1, 0, 1, 0, 0, ]),
		Panel_boost([0, 0, 1, 0, 0, ], 2),
		Abstate_invalid(["poison", "attr_weaken", "death_limit"]),
		Abstate_invalid(["as_sealed", "ss_sealed"]),
		Attr_statusup(0, 200, [1, 0, 1, 0, 0, ]),
		Panel_boost([0, 0, 1, 0, 0, ], 2),
		Spec_statusup(400, 0, [6, ]),
		Spec_statusup(0, 400, [6, ]),
		Fastskill(2),
	],
	as1: {
		desc: "<チェイン攻撃・攻撃強化>雷属性の味方の攻撃力をアップし(30%)、5チェインでダメージアップ(350%)",
		proc: [ChainEnhance(0.3, [0,0,1,0,0], 0),ChainAttack(3.5, 5)],
	},
	ss1: {
		desc: "<特殊パネル変換>ジャンルパネルにチェインがプラス2の効果を付与",
		turn: 5,
		proc: [panel_chainplus(2)],
	},
	islegend: true,
	Lawake: [
		Statusup(500, 0),
		Attr_statusup(0, 100, [1, 0, 1, 0, 0, ]),
	],
	as2: {
		desc: "<チェイン攻撃・攻撃強化>雷属性の味方の攻撃力をアップし(30%)、5チェインでMAXHP15％を使い、ダメージアップ(600%)",
		proc: [ChainEnhance(0.3, [0,0,1,0,0], 0),add_cond(ChainAttack(6.0, 5), as_consume_own(0.15))],
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルにチェインがプラス3の効果を付与",
		turn: 8,
		proc: [panel_chainplus(3)],
	},
}