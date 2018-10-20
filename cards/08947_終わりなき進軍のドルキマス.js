{
	name: "終わりなき進軍のドルキマス",
	cardno: 8947,
	imageno: 8696,
	hp: 3322,
	atk: 6528,
	cost: 51,
	attr: [0,-1],
	species: [8],
	islegend: true,
	ape: "真夏のグレート・クイズ・ウォー",
	alias: ["ローヴィ"],
	as1: {
		desc: "<属性特効>5チェインで雷属性の敵単体へ特効ダメージ(700%)",
		proc: ChainAttrAttack(7.0, 5, [0,0,1,0,0]),
	},
	ss1: {
		desc: "<犠牲魔術>スキル反射を無視し、味方全体のMAXHPの50%を使い敵単体へ火属性のダメージ(精霊数×320%)",
		turn: 9,
		proc: [ss_damage_s(ss_consume_all_cond(3.2, 0.5), [0], 1), ss_ignore_skillcounter()],
	},
	awakes: [
		NEFTJOD(60),
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup_oattr(0,400, [1,0,0,0,0,]),
		Attr_statusup_oattr(400,0, [1,0,0,0,0,]),
		Fastskill(3),
		Attr_relief([1,1,1,1,1,],10),
		Attr_statusup(0,400, [1,0,0,0,0,]),
		Attr_statusup(400,0, [1,0,0,0,0,]),
		Panel_boost([1,0,0,0,0,],2),
		Abstate_invalid("ss_sealed"),
	],
	as2: {
		desc: "<属性特効>5チェインで雷属性の敵単体へ特効ダメージ(800%)",
		proc: ChainAttrAttack(8.0, 5, [0,0,1,0,0]),
	},
	ss2: {
		desc: "<犠牲魔術>スキル反射を無視し、味方全体のMAXHPの50%を使い敵単体へ火属性のダメージ(精霊数×380%)",
		turn: 12,
		proc: [ss_damage_s(ss_consume_all_cond(3.8, 0.5), [0], 1), ss_ignore_skillcounter()],
	},
	Lawake: [
		Statusup(0,1500),
		Attr_statusup_oattr(0,100, [1,0,0,0,0,]),
	],
}