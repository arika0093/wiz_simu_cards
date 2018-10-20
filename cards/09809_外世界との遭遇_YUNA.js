{
	name: "外世界との遭遇 Y.U.N.A",
	cardno: 9809,
	imageno: 9919,
	hp: 2514,
	atk: 6680,
	cost: 47,
	attr: [2,-1],
	species: [8],
	alias: ["YUNA","ユウナ","デバフ", "巨乳"],
	islegend: true,
	ape: "新説桃娘伝",
	as1: {
		desc: "<チェイン攻撃>3チェインで味方のMAXHP10%を使い、ダメージアップ(750%)",
		proc: add_cond(ChainAttack(7.5, 3), as_consume_all(0.1)),
	},
	ss1: {
		desc: "<自己犠牲魔術>スキル反射を無視し、MAXHPの50%を使い敵単体へダメージ(2000%)",
		turn: 7,
		proc: [ss_damage_s(20, [2], 1), ss_consume_own(0.5), ss_ignore_skillcounter()],
	},
	awakes: [
		Panel_boost([0,0,1,0,0,],2),
		NEFTJOD(30),
		Fastskill(1),
		Panel_boost([0,0,1,0,0,],2),
		Attr_statusup_oattr(0,400, [0,0,1,0,0,]),
		Attr_statusup_oattr(400,0, [0,0,1,0,0,]),
		NEFTJOD(30),
		Attr_statusup(0,400, [0,0,1,0,0,]),
		Attr_statusup(400,0, [0,0,1,0,0,]),
		Fastskill(2),
	],
	as2: {
		desc: "<チェイン攻撃>3チェインで味方のMAXHP10%を使い、ダメージアップ(850%)",
		proc: add_cond(ChainAttack(8.5, 3), as_consume_all(0.1)),
	},
	ss2: {
		desc: "<自己犠牲魔術>スキル反射を無視し、MAXHPの50%を使い敵単体へダメージ(2400%)",
		turn: 9,
		proc: [ss_damage_s(24, [2], 1), ss_consume_own(0.5), ss_ignore_skillcounter()],
	},
	Lawake: [
		Statusup(0,1000),
		Attr_statusup(0,100, [0,0,1,0,0,]),
		Abstate_invalid("ss_sealed"),
	],
}