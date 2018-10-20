{
	name: "ザ・PTA パブロ・トマ・アダン",
	cardno: 6228,
	imageno: 8051,
	hp: 3250,
	atk: 2359,
	cost: 48,
	attr: [0,4],
	species: [2],
	islegend: true,
	is_dist: true,
	ape: "聖サタニック女学院",
	as1: {
		desc: "<複属性攻撃強化>7チェインで火属性の攻撃力をアップ、複属性が闇属性だとさらにアップ(60%/110%)",
		proc: ChainEnhance_SubAttr(0.6, 1.1, [1,0,0,0,0], [0,0,0,0,1], 7),
	},
	ss1: {
		desc: "<継続回復>MAXHPの50%を使い、3ターンの味方全体を徐々に回復する(15%)",
		turn: 5,
		proc: [ss_consume_own(0.5), ss_regenerate(0.15, 3)],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],1),
		Fastskill(1),
		Statusup(300,0),
		Panel_boost([1,0,0,0,0,],2),
		Statusup(0,300),
		Fastskill(2),
		Attr_statusup(0,100, [1,0,0,0,0,]),
		Attr_statusup(100,0, [1,0,0,0,0,]),
		NEFTJOD(30),
		Attr_statusup_sattr(200, 0, [1,0,0,0,0], 200, 0, [0,0,0,0,1]),
	],
	as2: {
		desc: "<複属性攻撃強化>7チェインで火属性の攻撃力をアップ、複属性が闇属性だとさらにアップ(90%/140%)",
		proc: ChainEnhance_SubAttr(0.9, 1.4, [1,0,0,0,0], [0,0,0,0,1], 7),
	},
	ss2: {
		desc: "<継続回復>MAXHPの50%を使い、5ターンの味方全体を徐々に回復する(20%)",
		turn: 8,
		proc: [ss_consume_own(0.5), ss_regenerate(0.20, 5)],
	},
	Lawake: [
		Attr_statusup(0,100, [1,0,0,0,0,]),
		Statusup(500,0),
	],
}