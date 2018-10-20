{
	name: "プリティーチクショー ラビトン",
	cardno: 6774,
	imageno: 8728,
	hp: 3543,
	atk: 1942,
	cost: 34,
	attr: [0,-1],
	species: [7],
	islegend: true,
	ape: "真夏のグレート・クイズ・ウォー",
	is_dist: true,
	as1: {
		desc: "<攻撃強化>火属性の味方の攻撃力をアップ、5チェインでさらにアップ(20%/40%)",
		proc: [ChainEnhance(0.20, [1, 0, 0, 0, 0], 0), ChainEnhance(0.40, [1, 0, 0, 0, 0], 5)],
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを火属性化",
		turn: 3,
		proc: [ss_panel_change([1,0,0,0,0])],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],1),
		Statusup(200,0),
		Statusup(200,0),
		Statusup(200,0),
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(0,100, [1,0,0,0,0,]),
		Fastskill(2),
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(200,0, [1,0,0,0,0,]),
		Attr_statusup(0,200, [1,0,0,0,0,]),
	],
	as2: {
		desc: "<攻撃強化>火属性の味方の攻撃力をアップ、5チェインでさらにアップ(50%/70%)",
		proc: [ChainEnhance(0.50, [1, 0, 0, 0, 0], 0), ChainEnhance(0.70, [1, 0, 0, 0, 0], 5)],
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルを火属性化し、ダメージ軽減(25%)・スキルチャージ(1)・チェイン(2)・攻撃力アップ(50%)の効果をランダムで付与",
		turn: 8,
		proc: [ss_panel_change([1,0,0,0,0]), panel_attr_guard([1,1,1,1,1], 0.25), panel_skillboost(1), panel_chainplus(2), panel_attackup(0.50)],
	},
	Lawake: [
		Attr_statusup(0,100, [1,0,0,0,0,]),
		Statusup(500,0),
	],
}