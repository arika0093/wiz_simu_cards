{
	name: "二人の心は永遠の海に メル&マナ",
	cardno: 10326,
	imageno: 5677,
	hp: 1988,
	atk: 8994,
	cost: 58,
	attr: [1,-1],
	species: [4],
	islegend: true,
	ape: "GW2015",
	as1: {
		desc: "<快調攻撃>残りHPが80%以上でダメージアップ(400%)、7チェインでさらにアップ(300%)",
		proc: [add_cond(ChainAttack(4.0, 0), when_hp_more(0.8)), add_cond(ChainAttack(7.0, 7), when_hp_more(0.8))],
	},
	ss1: {
		desc: "<特効大魔術>敵単体へ水属性のダメージ(400%)、さらに火属性の敵には特効ダメージ(600%)",
		turn: 5,
		proc: [ss_damage_s(special_attr([1,0,0,0,0], 16.5, 4), [1], 1)],
	},
	awakes: [
		Panel_boost([0,1,0,0,0,],5),
		NEFTJOD(30),
		Attr_relief([1,0,0,0,0,],20),
		Awake_noeffect("スキル反射見破り", 1),
		Attr_statusup_oattr(0,400, [0,1,0,0,0,]),
		Attr_statusup_oattr(400,0, [0,1,0,0,0,]),
		Fastskill(4),
		Attr_statusup(0,400, [0,1,0,0,0,]),
		Attr_statusup(400,0, [0,1,0,0,0,]),
		Abstate_invalid("ss_sealed"),
	],
	as2: {
		desc: "<快調攻撃>残りHPが80%以上でダメージアップ(500%)、7チェインでさらにアップ(300%)",
		proc: [add_cond(ChainAttack(5.0, 0), when_hp_more(0.8)), add_cond(ChainAttack(8.0, 7), when_hp_more(0.8))],
	},
	ss2: {
		desc: "<特効大魔術>敵単体へ水属性のダメージ(400%)、さらに火属性の敵には特効ダメージ(1200%)",
		turn: 8,
		proc: [ss_damage_s(special_attr([1,0,0,0,0], 24, 4), [1], 1)],
	},
	Lawake: [
		Attr_statusup(0,200, [0,1,0,0,0,]),
		Statusup(0,1000),
	],
}