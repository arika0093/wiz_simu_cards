{
	name: "真の奇才 ウシュガ&ウィアノーヴァ",
	cardno: 9176,
	imageno: 11412,
	hp: 2101,
	atk: 3329,
	cost: 45,
	attr: [0,4],
	species: [2],
	islegend: true,
	ape: "幻魔特区RELOADED",
	is_dist: true,
	as1: {
		desc: "<属性特効>4チェインで雷・光属性の敵単体へ特効ダメージ(550%)",
		proc: ChainAttrAttack(5.5, 4, [0,0,1,1,0]),
	},
	ss1: {
		desc: "<ブースト>4ターンの間、味方のMAXHPを毎ターン20%消費し、味方の攻撃力をアップ(175%)、さらに極稀にクリティカル",
		turn: 8,
		proc: [ss_boost_enhance_all(1.75, 4, 0.2, [1,1,1,1,1])],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],1),
		Costdown(10),
		Fastskill(1),
		Panel_boost([1,0,0,0,0,],2),
		Fastskill(2),
		NEFTJOD(30),
		Statusup(0,300),
		Statusup(300,0),
		Attr_statusup_sattr(0,100, [1,0,0,0,0,], 0,200, [0,0,0,0,1,]),
		Attr_statusup_sattr(100,0, [1,0,0,0,0,], 200,0, [0,0,0,0,1,]),
	],
	as2: {
		desc: "<属性特効>4チェインで雷・光属性の敵単体へ特効ダメージ(650%)",
		proc: ChainAttrAttack(6.5, 4, [0,0,1,1,0]),
	},
	ss2: {
		desc: "<ブースト>5ターンの間、味方のMAXHPを毎ターン20%消費し、味方の攻撃力をアップ(225%)、さらに極稀にクリティカル",
		turn: 11,
		proc: [ss_boost_enhance_all(2.25, 5, 0.2, [1,1,1,1,1])],
	},
	Lawake: [
		NEFTJOD(30),
		Statusup(0,500),
	],
}