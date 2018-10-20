{
	name: "聖なる叡智を求めて ティア・ソピア",
	cardno: 7588,
	imageno: 7215,
	hp: 3746,
	atk: 3654,
	cost: 46,
	attr: [0,-1],
	species: [9],
	islegend: true,
	ape: "ギルドマスターとChristmas",
	is_dist: true,
	as1: {
		desc: "<攻撃強化・ガード>5チェインで火属性の味方の攻撃力をアップ(60%)し、さらに全属性のダメージを10%軽減",
		proc: [ChainEnhance(0.6, [1,0,0,0,0], 5), as_guard(0.1, [1,1,1,1,1], 5)],
	},
	ss1: {
		desc: "<カウンター>5ターンの間、スキルカウンター待機(200%)",
		turn: 11,
		proc: [ss_skillcounter(2.0, 5)],
	},
	awakes: [
		Fastskill(1),
		Attr_statusup(0,100, [1,0,0,0,0,]),
		Costdown(10),
		Fastskill(2),
		Attr_statusup(100,0, [1,0,0,0,0,]),
		Panel_boost([1,0,0,0,0,],2),
		Heal_afterbattle(10),
		NEFTJOD(30),
		Guild_statusup(0, 1000),
		Guild_statusup(1000, 0),
	],
	as2: {
		desc: "<攻撃強化・ガード>5チェインで火属性の味方の攻撃力をアップ(90%)し、さらに全属性のダメージを10%軽減",
		proc: [ChainEnhance(0.9, [1,0,0,0,0], 5), as_guard(0.1, [1,1,1,1,1], 5)],
	},
	ss2: {
		desc: "<カウンター>5ターンの間、スキルカウンター待機(300%)",
		turn: 14,
		proc: [ss_skillcounter(3.0, 5)],
	},
	Lawake: [
		Attr_statusup(0,100, [1,0,0,0,0,]),
		Statusup(500,0),
	],
}