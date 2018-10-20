{
	name: "最強と謳われる猛者 リヴァイ",
	cardno: 9961,
	imageno: 12310,
	hp: 2850,
	atk: 5894,
	cost: 44,
	attr: [1,-1],
	species: [8],
	islegend: true,
	ape: "コラボ(進撃の巨人)",
	as1: {
		desc: "<属性特効>火属性の敵単体へ特効ダメージ(350%)、HP50%以下でさらにダメージアップ(750%)",
		proc: [ChainAttrAttack(3.5, 0, [1,0,0,0,0]), add_cond(ChainAttrAttack(11.0, 0, [1,0,0,0,0]), when_hp_less(0.5))],
	},
	ss1: {
		desc: "<犠牲魔術>スキル反射を無視し、味方全体のMAXHPの50%を使い敵全体へ水属性のダメージ(精霊数×380%)",
		turn: 12,
		proc: [ss_damage_all(ss_consume_all_cond(3.8, 0.5), [1]), ss_ignore_skillcounter()],
	},
	awakes: [
		Attr_statusup_oattr(0,400, [0,1,0,0,0,]),
		NEFTJOD(30),
		Attr_statusup_oattr(400,0, [0,1,0,0,0,]),
		Spec_statusup(0,200, [8,]),
		Panel_boost([0,1,0,0,0,],4),
		Attr_statusup(0,400, [0,1,0,0,0,]),
		Costdown(20),
		Attr_statusup(400,0, [0,1,0,0,0,]),
		Fastskill(4),
		Abstate_invalid("ss_sealed"),
	],
	as2: {
		desc: "<属性特効>火属性の敵単体へ特効ダメージ(450%)、HP50%以下でさらにダメージアップ(750%)",
		proc: [ChainAttrAttack(4.5, 0, [1,0,0,0,0]), add_cond(ChainAttrAttack(12.0, 0, [1,0,0,0,0]), when_hp_less(0.5))],
	},
	ss2: {
		desc: "<犠牲魔術>スキル反射を無視し、味方全体のMAXHPの50%を使い敵全体へ水属性のダメージ(精霊数×440%)",
		turn: 15,
		proc: [ss_damage_all(ss_consume_all_cond(4.4, 0.5), [1]), ss_ignore_skillcounter()],
	},
	Lawake: [
		Statusup(0,2000),
	],
}