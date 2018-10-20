{
	name: "逆巻の花車旋風 ナゴミ・オソドリ",
	cardno: 4087,
	imageno: 5736,
	hp: 1792,
	atk: 2321,
	cost: 30,
	attr: [1,-1],
	species: [1],
	islegend: false,
	is_dist: true,
	as1: {
		desc: "<連撃>3チェインで敵単体を3回連続攻撃(300%)",
		proc: ChainDualAttack(3.0, 3, 3),
	},
	ss1: {
		desc: "<特殊パネル変換>ジャンルパネルにチェインプラス2の効果を付与",
		turn: 5,
		proc: [panel_chainplus(2)],
	},
	awakes: [
		Fastskill(1),
		Statusup(0,200),
		Panel_boost([0,1,0,0,0,],1),
		Attr_statusup(0,100, [0,1,0,0,0,]),
		Fastskill(2),
		Panel_boost([0,1,0,0,0,],1),
		Spec_statusup(0,200, [1,]),
	],
}