{

	name: "本とみんなと プティ・プエルトーニ",
	cardno: 9581,
	imageno: 11849,
	hp: 1645,
	atk: 4513,
	cost: 1,
	attr: [2,4],
	species: [9],
	islegend: true,
	is_dist: true,
	ape: "大魔道杯 in エステレラ",
	as1: {
		desc: "<連撃>4チェインで敵単体を3回連続攻撃(250%)、HP50%以上で更にダメージアップ(200%)",
		proc: [ChainDualAttack(2.5, 4, 3), add_cond(ChainDualAttack(4.5, 4, 3), when_hp_more(0.5))],
	},
	as2: {
		desc: "<連撃>4チェインで敵単体を3回連続攻撃(350%)、HP50%以上で更にダメージアップ(200%)",
		proc: [ChainDualAttack(3.5, 4, 3), add_cond(ChainDualAttack(5.5, 4, 3), when_hp_more(0.5))],
	},
	ss1: {
		desc: "<特効大魔術>敵全体へ闇属性のダメージ(600%)、さらに光属性の敵には特効ダメージ(900%)、さらに敵にトドメを刺した数だけチェインプラス1",
		turn: 3,
		chadd_killing: 1,
		proc: [ss_damage_all(special_attr([0,0,0,1,0], 15, 6), [4])],
	},
	ss2: {
		desc: "<特効大魔術>敵全体へ闇属性のダメージ(600%)、さらに光属性の敵には特効ダメージ(900%)、さらに敵にトドメを刺した数だけチェインプラス1",
		turn: 3,
		chadd_killing: 1,
		proc: [ss_damage_all(special_attr([0,0,0,1,0], 15, 6), [4])],
	},
	awakes: [
		Costdown(10),
		Panel_boost([0,0,1,0,0,],2),
		Attr_statusup(0,200,[0,0,1,0,0,]),
		Attr_statusup(200,0,[0,0,1,0,0,]),
		Panel_boost([0,0,1,0,0,],2),
		NEFTJOD(30),
		Fastskill(3),
		Attr_statusup_sattr(0,100,[0,0,1,0,0,],0,200,[0,0,0,0,1,]),
		Attr_statusup_sattr(100,0,[0,0,1,0,0,],200,0,[0,0,0,0,1,]),
		Abstate_invalid("as_sealed"),
	],
	Lawake: [
		Statusup(0,1000),
		Statusup(500,0),
	],
}