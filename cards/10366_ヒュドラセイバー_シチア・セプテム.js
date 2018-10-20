{
	name: "ヒュドラセイバー シチア・セプテム",
	cardno: 10366,
	imageno: 12854,
	hp: 507,
	atk: 6890,
	cost: 36,
	attr: [1,-1],
	species: [0],
	islegend: true,
	is_dist: true,
	ape: "トーナメント専用交換所",
	as1: {
		desc: "<連撃>4チェインで敵単体を3回連続攻撃(300%)、HP50%以上でさらにダメージアップ(200%)",
		proc: [ChainDualAttack(3.0, 4, 3), add_cond(ChainDualAttack(5.0, 4, 3), when_hp_more(0.5))],
	},
	as2: {
		desc: "<連撃>4チェインで敵単体を3回連続攻撃(400%)、HP50%以上でさらにダメージアップ(200%)",
		proc: [ChainDualAttack(4.0, 4, 3), add_cond(ChainDualAttack(6.0, 4, 3), when_hp_more(0.5))],
	},
	ss1: {
		desc: "<特効大魔術>敵全体へ光属性のダメージ(600%)、さらに闇属性の敵には特効ダメージ(900%)、さらに敵にトドメを刺した数だけチェインプラス1",
		turn: 3,
		chadd_killing: true,
		proc: [ss_damage_all(special_attr([0,0,0,0,1], 15, 6), [3])],
	},
	ss2: {
		desc: "<特効大魔術>敵全体へ光属性のダメージ(600%)、さらに闇属性の敵には特効ダメージ(1400%)、さらに敵にトドメを刺した数だけチェインプラス1",
		turn: 6,
		chadd_killing: true,
		proc: [ss_damage_all(special_attr([0,0,0,0,1], 20, 6), [3])],
	},
	awakes: [
		Panel_boost([0,1,0,0,0,],1),
		Attr_statusup_oattr(0,400,[0,1,0,0,0,]),
		Attr_statusup_oattr(400,0,[0,1,0,0,0,]),
		Fastskill(1),
		Panel_boost([0,1,0,0,0,],1),
		Fastskill(2),
		Attr_statusup(0,400,[0,1,0,0,0,]),
		Attr_statusup(400,0,[0,1,0,0,0,]),
		Panel_boost([0,1,0,0,0,],2),
		Awake_damage_multiple(1.1, 500),
	],
	Lawake: [
		Statusup(0,1000),
		Abstate_invalid("ss_sealed"),
	],
}