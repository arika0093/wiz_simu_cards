{
	name: "夏の七色水飛沫 リィル・ライル",
	cardno: 7834,
	imageno: 6407,
	hp: 3542,
	atk: 5432,
	cost: 56,
	attr: [1,-1],
	species: [8],
	islegend: true,
	as1: {
		desc: "<属性特効>3チェインで火属性の敵単体へ特効ダメージ(525%)",
		proc: [ChainAttrAttack(5.25, 3, [1,0,0,0,0])],
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを水属性化",
		turn: 2,
		proc: [ss_panel_change([0,1,0,0,0])],
	},
	awakes: [
		Fastskill(3),
		Panel_boost([0,1,0,0,0,],2),
		Panel_boost([0,1,0,0,0,],2),
		NEFTJOD(30),
		Spec_statusup(300,0, [8,]),
		Spec_statusup(0,300, [8,]),
		Attr_statusup(400,0, [0,1,0,0,0,]),
		Attr_statusup(0,400, [0,1,0,0,0,]),
		Abstate_invalid(["as_sealed", "ss_sealed"]),
		Awake_Chainboost(1),
	],
	as2: {
		desc: "<属性特効>3チェインで火属性の敵単体へ特効ダメージ(625%)",
		proc: [ChainAttrAttack(6.25, 3, [1,0,0,0,0])],
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルを水属性化し、チェインがプラス1の効果を付与",
		turn: 5,
		proc: [ss_panel_change([0,1,0,0,0]), panel_chainplus(1)],
	},
	Lawake: [
		Statusup(0,500),
		Attr_statusup(0,200, [0,1,0,0,0,]),
		Attr_relief([1,1,1,1,1,],10),
	],
}