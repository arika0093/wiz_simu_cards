{
	name: "払暁の空賊記 ジーク・クレーエ",
	cardno: 9622,
	imageno: 11895,
	hp: 4645,
	atk: 2845,
	cost: 56,
	attr: [0,4],
	species: [9],
	islegend: true,
	ape: "謹賀新年2018",
	as1: {
		desc: "<攻撃強化>味方のMAXHP10%を使い、火属性の味方の攻撃力をアップ(120%)",
		proc: add_cond(ChainEnhance(1.2, [1,0,0,0,0], 0), as_consume_all(0.1)),
	},
	ss1: {
		desc: "<ブースト>4ターンの間、隣接する精霊のMAXHPを毎ターン10％消費し、隣接する精霊の攻撃力をアップ(350%)。さらに極稀にクリティカル",
		turn: 7,
		proc: [ss_toselect_ownside(ss_boost_enhance_all(3.5, 4, 0.1))],
	},
	awakes: [
		Costdown(20),
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(0,200, [1,0,0,0,0,]),
		Attr_statusup(200,0, [1,0,0,0,0,]),
		Panel_boost([1,0,0,0,0,],2),
		Fastskill(4),
		Attr_relief([0,0,1,0,0,],20),
		Attr_statusup_sattr(0,100, [1,0,0,0,0,], 0,300, [0,0,1,0,0,]),
		Attr_statusup_sattr(100,0, [1,0,0,0,0,], 300,0, [0,0,1,0,0,]),
		Abstate_invalid("as_sealed"),
	],
	as2: {
		desc: "<攻撃強化>味方のMAXHP10%を使い、火属性の味方の攻撃力をアップ(150%)",
		proc: add_cond(ChainEnhance(1.5, [1,0,0,0,0], 0), as_consume_all(0.1)),
	},
	ss2: {
		desc: "<ブースト>4ターンの間、隣接する精霊のMAXHPを毎ターン10％消費し、隣接する精霊の攻撃力をアップ(500%)。さらに極稀にクリティカル",
		turn: 10,
		proc: [ss_toselect_ownside(ss_boost_enhance_all(5.0, 4, 0.1))],
	},
	Lawake: [
		Attr_statusup(0,300, [1,0,0,0,0,]),
		Statusup(500,0),
	],
}